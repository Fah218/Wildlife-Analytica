from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import uvicorn

# IMPORT EVERYTHING FROM YOUR NOTEBOOK CODE
from miniproject_final import predict_and_explain , df   # your function

app = FastAPI()

# Allow frontend to access backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],   
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def root():
    return {"message": "Wildlife Threat Prediction API running"}

@app.get("/species-list")
def species_list():
    species = df["species_name"].tolist()
    return {"species": species}


@app.post("/predict")
def predict(species: str):
    result = predict_and_explain(species)
    return result

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
