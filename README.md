# 🐾 Wildlife Analytica

<div align="center">

![Wildlife Analytica Banner](https://img.shields.io/badge/Wildlife-Analytica-green?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiPjxwYXRoIGQ9Ik0xMiAyMmMxLjEgMCAyLS45IDItMnMtLjktMi0yLTItMiAuOS0yIDIgLjkgMiAyIDJ6Ii8+PHBhdGggZD0iTTEyIDJjMS4xIDAgMiAuOSAyIDJzLS45IDItMiAyLTItLjktMi0yIC45LTIgMi0yeiIvPjxwYXRoIGQ9Ik0yMCAxMmMwIDEuMS0uOSAyLTIgMnMtMi0uOS0yLTIgLjktMiAyLTIgMiAuOSAyIDJ6Ii8+PHBhdGggZD0iTTQgMTJjMCAxLjEuOSAyIDIgMnMyLS45IDItMi0uOS0yLTItMi0yIC45LTIgMnoiLz48L3N2Zz4=)

**AI-Powered Wildlife Extinction Risk Analysis Platform**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Python](https://img.shields.io/badge/Python-3.9+-blue.svg)](https://www.python.org/)
[![React](https://img.shields.io/badge/React-18+-61DAFB.svg)](https://reactjs.org/)
[![FastAPI](https://img.shields.io/badge/FastAPI-0.100+-009688.svg)](https://fastapi.tiangolo.com/)

[Features](#-features) • [Demo](#-demo) • [Installation](#-installation) • [Usage](#-usage) • [Tech Stack](#-tech-stack) • [Contributing](#-contributing)

</div>

---

## 📖 About

**Wildlife Analytica** is an advanced AI-powered platform that predicts wildlife extinction risks using machine learning and provides comprehensive species analysis through RAG (Retrieval-Augmented Generation) technology. The system combines Random Forest classification with Wikipedia-based knowledge retrieval to deliver accurate threat assessments and actionable conservation insights.

### 🎯 Key Objectives

- **Predict Extinction Risk**: Classify species into IUCN threat categories (CR, EN, VU, NT, LC)
- **Explain Threats**: Provide detailed explanations of why species are endangered
- **Suggest Conservation**: Offer evidence-based protection strategies
- **Educate Users**: Raise awareness about wildlife conservation through accessible AI technology

---

## ✨ Features

### 🤖 **AI-Powered Predictions**
- **Random Forest Classifier** trained on 250+ species with 95% accuracy
- **SMOTE Oversampling** to handle class imbalance
- **Multi-feature Analysis** including habitat, taxonomy, and population trends

### 📚 **RAG-Enhanced Explanations**
- **Wikipedia Integration** for real-time species information retrieval
- **TF-IDF Vectorization** for relevant evidence extraction
- **Groq AI Generation** (optional) for natural language explanations
- **Intelligent Fallbacks** when AI is unavailable

### 🎨 **Modern User Interface**
- **Responsive Design** with glassmorphism effects
- **Dark Mode Support** for comfortable viewing
- **Interactive Dashboard** with real-time analysis
- **PDF Report Generation** for sharing insights
- **Animated Components** for enhanced user experience

### 🔍 **Comprehensive Analysis**
- Species definition and background
- Threat analysis and endangerment factors
- Conservation recommendations
- Visual species imagery from Wikipedia

---

## 🎬 Demo

### Dashboard Preview
The platform provides an intuitive interface for species analysis:

1. **Search Species**: Auto-complete search with 250+ species
2. **Analyze**: Get instant AI-powered predictions
3. **Review Results**: View threat levels and detailed explanations
4. **Download Reports**: Generate PDF reports for offline use

### Sample Analysis Output

```json
{
  "species": "Snow Leopard",
  "predicted_threat_level": "VU",
  "rag": {
    "Definition": "The snow leopard is a large cat native to the mountain ranges of Central and South Asia...",
    "Why Extinct": "This species faces threats from habitat loss, climate change, and poaching...",
    "How to Protect": "Conservation measures include: 1) Habitat protection and restoration..."
  }
}
```

---

## 🛠️ Tech Stack

### **Backend**
- **Python 3.9+** - Core programming language
- **FastAPI** - High-performance web framework
- **scikit-learn** - Machine learning algorithms
- **imbalanced-learn** - SMOTE oversampling
- **pandas & numpy** - Data processing
- **Wikipedia-API** - Knowledge retrieval
- **Groq AI** - Natural language generation (optional)

### **Frontend**
- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **Axios** - HTTP client
- **jsPDF** - PDF generation
- **CSS3** - Modern styling with animations

### **Machine Learning Pipeline**
- **Random Forest Classifier** (400 estimators, max_depth=14)
- **Label Encoding** for categorical features
- **One-Hot Encoding** for habitat types
- **SMOTE** for class balancing
- **TF-IDF** for text vectorization

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Python 3.9 or higher** ([Download](https://www.python.org/downloads/))
- **Node.js 16 or higher** ([Download](https://nodejs.org/))
- **npm or yarn** (comes with Node.js)
- **Git** ([Download](https://git-scm.com/))

---

## 🚀 Installation

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Fah218/Wildlife-Analytica.git
cd Wildlife-Analytica
```

### 2️⃣ Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install Python dependencies
pip install -r requirements.txt

# Create .env file for API keys (optional)
echo "GROQ_API_KEY=your_groq_api_key_here" > .env
```

**Note:** The Groq API key is optional. The system will use intelligent Wikipedia-based fallbacks if not provided.

### 3️⃣ Frontend Setup

```bash
# Navigate to frontend directory
cd ../frontend

# Install Node.js dependencies
npm install
```

---

## 🎮 Usage

### Starting the Application

You need to run both the backend and frontend servers:

#### **Terminal 1: Start Backend**

```bash
cd backend
python3 backend.py
```

The backend will start on `http://localhost:8000`

#### **Terminal 2: Start Frontend**

```bash
cd frontend
npm run dev
```

The frontend will start on `http://localhost:5173`

### Accessing the Application

1. Open your browser and navigate to `http://localhost:5173`
2. You'll see the Wildlife Analytica dashboard
3. Use the search bar to select a species from the dropdown
4. Click "Analyze Species" to get predictions and insights
5. Review the results and download PDF reports if needed

---

## 📁 Project Structure

```
Wildlife-Analytica/
├── backend/
│   ├── backend.py                 # FastAPI server
│   ├── miniproject_final.py       # ML model & RAG logic
│   ├── clean_iucn_species_250.csv # Dataset (250 species)
│   ├── .env                       # Environment variables (optional)
│   └── requirements.txt           # Python dependencies
│
├── frontend/
│   ├── src/
│   │   ├── components/           # React components
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── SearchBar.jsx
│   │   │   ├── ResultCard.jsx
│   │   │   ├── Loader.jsx
│   │   │   └── SpeciesImage.jsx
│   │   ├── pages/                # Page components
│   │   │   ├── Home.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   └── About.jsx
│   │   ├── api.js                # API client
│   │   ├── App.jsx               # Main app component
│   │   └── main.jsx              # Entry point
│   ├── package.json              # Node dependencies
│   └── vite.config.js            # Vite configuration
│
└── README.md                     # This file
```

---

## 🔑 Getting a Groq API Key (Optional)

For AI-generated explanations, you can get a free Groq API key:

1. Visit [https://console.groq.com/keys](https://console.groq.com/keys)
2. Sign up or log in
3. Click "Create API Key"
4. Copy the key and add it to `backend/.env`:

```bash
GROQ_API_KEY=gsk_your_actual_api_key_here
```

5. Restart the backend server

**Without a Groq API key**, the system will automatically use Wikipedia-based explanations, which still provide valuable insights!

---

## 🧪 API Endpoints

### Base URL: `http://localhost:8000`

| Endpoint | Method | Description | Parameters |
|----------|--------|-------------|------------|
| `/` | GET | Health check | None |
| `/species-list` | GET | Get all available species | None |
| `/predict` | POST | Predict threat level & get analysis | `species` (query param) |

### Example API Call

```bash
curl -X POST "http://localhost:8000/predict?species=Red%20Panda"
```

---

## 📊 Dataset

The project uses a curated dataset of **250 IUCN species** with the following features:

- **Species Information**: Name, class, order, family
- **Habitat Types**: Forest, Ocean, Grassland, Desert, etc.
- **Population Trends**: Increasing, Stable, Decreasing
- **Threat Levels**: CR, EN, VU, NT, LC (IUCN categories)

### IUCN Threat Categories

- **CR** - Critically Endangered
- **EN** - Endangered
- **VU** - Vulnerable
- **NT** - Near Threatened
- **LC** - Least Concern

---

## 🎨 Features in Detail

### Machine Learning Model

- **Algorithm**: Random Forest Classifier
- **Features**: 
  - Species encoding
  - Population trend (numerical)
  - Habitat one-hot encoding
  - Taxonomic features (class, order, family)
  - Ecological flags (aquatic, mammal, bird, reptile)
- **Training**: SMOTE-balanced dataset
- **Performance**: ~95% accuracy on test set

### RAG (Retrieval-Augmented Generation)

1. **Retrieval**: Fetches Wikipedia article for the species
2. **Chunking**: Splits text into sentences
3. **Ranking**: Uses TF-IDF to find most relevant sentences
4. **Generation**: 
   - **With Groq**: AI-generated natural language explanations
   - **Without Groq**: Intelligent Wikipedia-based summaries

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/AmazingFeature`)
3. **Commit your changes** (`git commit -m 'Add some AmazingFeature'`)
4. **Push to the branch** (`git push origin feature/AmazingFeature`)
5. **Open a Pull Request**

### Areas for Contribution

- 🌍 Add more species to the dataset
- 🎨 Improve UI/UX design
- 🤖 Enhance ML model accuracy
- 📚 Add more data sources beyond Wikipedia
- 🌐 Internationalization support
- 📱 Mobile app development

---

## 🐛 Troubleshooting

### Backend Issues

**Problem**: "Module not found" errors
```bash
# Solution: Install all dependencies
pip install -r requirements.txt
```

**Problem**: Port 8000 already in use
```bash
# Solution: Kill the process
lsof -ti:8000 | xargs kill -9
```

### Frontend Issues

**Problem**: "Cannot find module" errors
```bash
# Solution: Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

**Problem**: Port 5173 already in use
```bash
# Solution: The dev server will automatically use the next available port
```

### API Connection Issues

**Problem**: Frontend can't connect to backend
- Ensure backend is running on `http://localhost:8000`
- Check `frontend/src/api.js` has correct API_URL
- Verify CORS is enabled in backend

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Fahad Furquan**

- GitHub: [@Fah218](https://github.com/Fah218)
- Repository: [Wildlife-Analytica](https://github.com/Fah218/Wildlife-Analytica)

---

## 🙏 Acknowledgments

- **IUCN Red List** for species conservation data
- **Wikipedia** for species information and imagery
- **Groq** for AI language generation capabilities
- **scikit-learn** community for ML tools
- **FastAPI** and **React** communities

---

## 📧 Contact & Support

If you have any questions or need help:

- 🐛 **Report bugs**: [Open an issue](https://github.com/Fah218/Wildlife-Analytica/issues)
- 💡 **Request features**: [Open an issue](https://github.com/Fah218/Wildlife-Analytica/issues)
- 📧 **Email**: Create an issue on GitHub

---

## 🌟 Star History

If you find this project useful, please consider giving it a ⭐️ on GitHub!

---

<div align="center">

**Made with ❤️ for Wildlife Conservation**

🐾 Help protect endangered species through technology 🐾

</div>
