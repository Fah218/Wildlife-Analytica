# miniproject_final.py
# Cleaned & FastAPI-ready module

import pandas as pd
import numpy as np
import re
import wikipediaapi
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder
from sklearn.metrics import accuracy_score
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.ensemble import RandomForestClassifier
from imblearn.over_sampling import SMOTE
import os
from dotenv import load_dotenv

load_dotenv()

# Optional Groq import
try:
    from groq import Groq
    GROQ_AVAILABLE = True
except:
    Groq = None
    GROQ_AVAILABLE = False


# =======================
# LOAD DATASET
# =======================

DATA_PATH = "clean_iucn_species_250.csv"  # keep file in backend folder

df = pd.read_csv(DATA_PATH)


# =======================
# PREPROCESSING
# =======================

def normalize_threat(x):
    if pd.isna(x): return "LC"
    x = str(x).strip()
    mapping = {
        "Critically Endangered":"CR", "Endangered":"EN",
        "Vulnerable":"VU", "Near Threatened":"NT",
        "Least Concern":"LC",
        "CR":"CR","EN":"EN","VU":"VU","NT":"NT","LC":"LC"
    }
    return mapping.get(x, "LC")

df["threat_level"] = df["threat_level"].apply(normalize_threat)

trend_map = {"Increasing":1, "Stable":0, "Decreasing":-1}
df["trend_num"] = df["population_trend"].map(trend_map).fillna(0).astype(int)

# Label encode species
le_species = LabelEncoder()
df["species_encoded"] = le_species.fit_transform(df["species_name"])

# Encode class/order/family
label_cols = []
for c in ["class","order","family"]:
    if c in df:
        le = LabelEncoder()
        df[c+"_enc"] = le.fit_transform(df[c])
        label_cols.append(c+"_enc")

# Habitat encoding
df["habitat_clean"] = df["habitat"].astype(str).str.replace(" ", "_")
hab_onehot = pd.get_dummies(df["habitat_clean"], prefix="hab")

# Basic flags
df["is_aquatic"] = df["habitat"].str.contains("Ocean|River|Reef|Sea|Coastal", case=False).astype(int)
df["is_mammal"] = df["class"].str.contains("Mammalia", case=False).astype(int)
df["is_bird"] = df["class"].str.contains("Aves", case=False).astype(int)
df["is_reptile"] = df["class"].str.contains("Reptilia", case=False).astype(int)


# =======================
# FEATURE MATRIX
# =======================

feature_cols = ["species_encoded","trend_num","is_aquatic","is_mammal","is_bird","is_reptile"]
feature_cols += label_cols

X = pd.concat([df[feature_cols], hab_onehot], axis=1)
le_target = LabelEncoder()
y = le_target.fit_transform(df["threat_level"])

# SMOTE
sm = SMOTE(random_state=42)
X_res, y_res = sm.fit_resample(X, y)

# Train RF
rf = RandomForestClassifier(n_estimators=400, max_depth=14, class_weight="balanced", random_state=42)
rf.fit(X_res, y_res)


# =======================
# WIKIPEDIA RAG
# =======================

wiki = wikipediaapi.Wikipedia(language="en", user_agent="WildlifeProject/1.0")
tfidf = TfidfVectorizer(stop_words="english")

def get_wiki_text(species):
    page = wiki.page(species)
    return page.text if page.exists() else ""

def split_sentences(text):
    return [s.strip() for s in re.split(r"(?<=[.?!])\s+", text) if len(s.strip()) > 20]

def retrieve_evidence(species, k=5):
    txt = get_wiki_text(species)
    sents = split_sentences(txt)
    if not sents:
        return ""

    docs = sents + [species]
    M = tfidf.fit_transform(docs)
    sims = (M[-1] @ M[:-1].T).toarray().flatten()
    top_ids = sims.argsort()[-k:][::-1]

    return "\n".join([sents[i] for i in top_ids])


# =======================
# GROQ GENERATION
# =======================

GROQ_API_KEY = os.getenv("GROQ_API_KEY")   # <-- Keep empty; backend will set env variable instead

def groq_generate(prompt, model="llama-3.3-70b-versatile", max_tokens=200):
    if not GROQ_AVAILABLE:
        print("❌ Groq library not available")
        return None
    
    if not GROQ_API_KEY:
        print("❌ GROQ_API_KEY not found in environment")
        return None

    try:
        client = Groq(api_key=GROQ_API_KEY)
        resp = client.chat.completions.create(
            model=model,
            messages=[
                {"role": "system", "content": "You are a helpful assistant."},
                {"role": "user", "content": prompt}
            ],
            max_tokens=max_tokens,
            temperature=0.7
        )
        return resp.choices[0].message.content
    except Exception as e:
        print(f"❌ Groq API error: {str(e)}")
        return None


def generate_explanation(prompt, evidence=""):
    out = groq_generate(prompt)
    if out:
        return out
    
    # Fallback: Use evidence-based explanation when Groq is unavailable
    if "Define" in prompt and evidence:
        # Extract first 2-3 sentences from evidence
        sentences = [s.strip() for s in evidence.split('.') if len(s.strip()) > 20]
        return '. '.join(sentences[:2]) + '.' if sentences else "Information not available."
    
    elif "why" in prompt.lower() and "endangered" in prompt.lower():
        # Look for threat-related keywords in evidence
        threat_keywords = ["threat", "endangered", "habitat loss", "poaching", "climate", "population decline"]
        relevant_sentences = []
        for sent in evidence.split('.'):
            if any(keyword in sent.lower() for keyword in threat_keywords):
                relevant_sentences.append(sent.strip())
        if relevant_sentences:
            return '. '.join(relevant_sentences[:2]) + '.'
        return "This species faces threats from habitat loss, human activities, and environmental changes."
    
    elif "protect" in prompt.lower():
        return "Conservation measures include: 1) Habitat protection and restoration, 2) Anti-poaching enforcement and wildlife corridors, 3) Community education and sustainable development programs."
    
    return "Detailed explanation unavailable. Please check your Groq API key or try again later."



# =======================
# MAIN FUNCTION FOR BACKEND
# =======================

def rag_explain(species):
    evidence = retrieve_evidence(species)

    return {
        "Definition": generate_explanation(f"Define {species} in 2 lines:\n{evidence}", evidence),
        "Why Extinct": generate_explanation(f"Explain why {species} is threatened or endangered in 2-3 lines:\n{evidence}", evidence),
        "How to Protect": generate_explanation(f"Suggest 3 protection steps for {species} in 2-3 lines:\n{evidence}", evidence),
        "evidence": evidence
    }


def predict_and_explain(species):
    if species not in df["species_name"].values:
        return {"error": "Species not found."}

    row = df[df["species_name"] == species].iloc[0]

    vec = []
    for col in X.columns:
        if col in row:
            vec.append(row[col])
        elif col.startswith("hab_"):
            key = col.replace("hab_", "")
            vec.append(1 if row["habitat_clean"] == key else 0)
        else:
            vec.append(0)

    pred_idx = rf.predict([vec])[0]
    pred_label = le_target.inverse_transform([pred_idx])[0]

    return {
        "species": species,
        "predicted_threat_level": pred_label,
        "rag": rag_explain(species)
    }
