import { useState, useEffect } from "react";
import { fetchSpeciesList, predictSpecies, fetchSpeciesImage } from "../api";
import SearchBar from "../components/SearchBar";
import ResultCard from "../components/ResultCard";
import Loader from "../components/Loader";
import SpeciesImage from "../components/SpeciesImage";
import jsPDF from "jspdf";

export default function Dashboard() {
  const [speciesList, setSpeciesList] = useState([]);
  const [species, setSpecies] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    fetchSpeciesList().then(setSpeciesList);
  }, []);

  const handlePredict = async () => {
    if (!species) return;
    setLoading(true);

    const prediction = await predictSpecies(species);
    const image = await fetchSpeciesImage(species);

    setResult(prediction);
    setImageUrl(image);

    setLoading(false);
  };

  const downloadPDF = () => {
    const doc = new jsPDF();

    const title = `Wildlife Report: ${result.species}`;
    const threat = `Threat Level: ${result.predicted_threat_level}`;
    const definition = `Definition:\n${result.rag.Definition}`;
    const why = `Why Extinct:\n${result.rag["Why Extinct"]}`;
    const protect = `How to Protect:\n${result.rag["How to Protect"]}`;

    const pageWidth = doc.internal.pageSize.getWidth();
    const margin = 10;
    const maxWidth = pageWidth - margin * 2;
    let y = 10;

    const printWrapped = (text) => {
      const wrapped = doc.splitTextToSize(text, maxWidth);
      doc.text(wrapped, margin, y);
      y += wrapped.length * 7;
      y += 5;
    };

    printWrapped(title);
    printWrapped(threat);
    printWrapped(definition);
    printWrapped(why);
    printWrapped(protect);

    doc.save(`${result.species}_report.pdf`);
  };

  return (
    <div className="dashboard-page">
      <div className="dashboard-container">
        <div className="dashboard-header animate-fade-in">
          <div className="dashboard-badge">
            <span className="badge-icon">📊</span>
            <span>Analysis Dashboard</span>
          </div>
          <h1 className="dashboard-title">Species Analysis Dashboard</h1>
          <p className="dashboard-subtitle">
            Search and analyze wildlife extinction risks using AI-powered predictions and RAG technology
          </p>
          <div className="dashboard-stats">
            <div className="dashboard-stat">
              <span className="stat-value">250+</span>
              <span className="stat-label">Species Available</span>
            </div>
            <div className="dashboard-stat">
              <span className="stat-value">95%</span>
              <span className="stat-label">Accuracy</span>
            </div>
            <div className="dashboard-stat">
              <span className="stat-value">Real-Time</span>
              <span className="stat-label">Analysis</span>
            </div>
          </div>
        </div>

        <div className="search-section animate-slide-up">
          <div className="search-header">
            <h2>🔍 Search Species</h2>
            <p>Enter a species name to get AI-powered extinction risk analysis</p>
          </div>
          <SearchBar speciesList={speciesList} onSelect={setSpecies} />
          <button className="btn btn-primary btn-predict btn-glow" onClick={handlePredict}>
            <span className="btn-icon">🤖</span>
            Analyze Species
            <span className="btn-arrow">→</span>
          </button>
        </div>

        {loading && <Loader />}

        {result && !loading && (
          <div className="results-section animate-fade-in">
            <div className="results-header">
              <h2>📋 Analysis Results</h2>
              <p>AI-generated insights for {result.species}</p>
            </div>

            <SpeciesImage url={imageUrl} />

            <div className="results-grid">
              <ResultCard title="Predicted Threat Level" content={result.predicted_threat_level} />
              <ResultCard title="Definition" content={result.rag.Definition} />
              <ResultCard title="Why Extinct" content={result.rag["Why Extinct"]} />
              <ResultCard title="How to Protect" content={result.rag["How to Protect"]} />
            </div>

            <div className="action-buttons">
              <button className="btn btn-download btn-glow" onClick={downloadPDF}>
                <span className="btn-icon">📄</span>
                Download PDF Report
                <span className="btn-arrow">↓</span>
              </button>
              <button className="btn btn-secondary" onClick={() => {setResult(null); setSpecies("");}}>
                <span className="btn-icon">🔄</span>
                Analyze Another Species
              </button>
            </div>
          </div>
        )}

        {!result && !loading && (
          <div className="empty-state animate-fade-in">
            <div className="empty-icon">🔬</div>
            <h3>Ready to Analyze</h3>
            <p>Search for a species above to get started with AI-powered extinction risk analysis</p>
          </div>
        )}
      </div>
    </div>
  );
}
