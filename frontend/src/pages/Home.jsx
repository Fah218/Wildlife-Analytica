import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    // Animate elements on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const stats = [
    { number: "250+", label: "Species Analyzed", icon: "🦋" },
    { number: "95%", label: "Prediction Accuracy", icon: "🎯" },
    { number: "24/7", label: "Real-Time Analysis", icon: "⚡" },
    { number: "100%", label: "Open Source", icon: "💚" }
  ];

  const features = [
    {
      icon: "🔍",
      title: "Real-Time Retrieval Augmented Generation",
      description: "Leveraging RAG to fill data gaps with verified research and real-time insights from trusted scientific sources.",
      color: "#667eea"
    },
    {
      icon: "⚠️",
      title: "Live Threat Analysis",
      description: "Continuous monitoring and assessment of species extinction risks worldwide using advanced ML algorithms.",
      color: "#f5576c"
    },
    {
      icon: "📊",
      title: "Species Health Predictions",
      description: "Machine learning models predict vulnerability levels with high accuracy based on comprehensive data.",
      color: "#4facfe"
    },
    {
      icon: "🌱",
      title: "Data-Driven Conservation",
      description: "Actionable insights to support conservation efforts, policy decisions, and protect endangered species.",
      color: "#38ef7d"
    }
  ];

  const workflow = [
    { step: "1", title: "Search Species", desc: "Enter any species from our database of 250+ wildlife" },
    { step: "2", title: "AI Analysis", desc: "ML models analyze health factors and threats" },
    { step: "3", title: "RAG Enhancement", desc: "Retrieve verified research to explain predictions" },
    { step: "4", title: "Get Insights", desc: "Receive detailed predictions and recommendations" }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <div className="floating-shape shape-1"></div>
          <div className="floating-shape shape-2"></div>
          <div className="floating-shape shape-3"></div>
        </div>
        <div className="hero-content">
          <div className="hero-badge animate-on-scroll">
            <span className="badge-icon">🌍</span>
            <span>AI-Powered Conservation Platform</span>
          </div>
          <h1 className="hero-title animate-on-scroll">
            AI-Powered Wildlife Extinction Risk Analysis
          </h1>
          <p className="hero-subtitle animate-on-scroll">
            Explore species health, threats, and predictions using advanced machine learning 
            and Retrieval Augmented Generation technology to protect our planet's biodiversity.
          </p>
          <div className="hero-buttons animate-on-scroll">
            <button className="btn btn-primary btn-glow" onClick={() => navigate("/dashboard")}>
              <span className="btn-icon">🔬</span>
              Search Species
            </button>
            <button className="btn btn-primary" onClick={() => navigate("/dashboard")}>
              <span className="btn-icon">📊</span>
              View Dashboard
            </button>
            <button className="btn btn-secondary" onClick={() => navigate("/about")}>
              Learn More →
            </button>
          </div>

          {/* Stats Cards */}
          <div className="stats-grid animate-on-scroll">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="quote-section animate-on-scroll">
        <div className="quote-card">
          <div className="quote-icon">🌿</div>
          <p className="quote-text">
            "Protecting biodiversity with the power of artificial intelligence."
          </p>
          <p className="quote-author">Where data meets conservation.</p>
          <div className="quote-decoration"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="section-header animate-on-scroll">
          <span className="section-badge">Technology</span>
          <h2 className="section-title">Powered by Advanced AI Technology</h2>
          <p className="section-subtitle">
            Combining machine learning, RAG technology, and real-time data analysis 
            to deliver unprecedented insights into wildlife conservation.
          </p>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card animate-on-scroll"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="feature-icon-wrapper" style={{ background: `linear-gradient(135deg, ${feature.color}, ${feature.color}dd)` }}>
                <span className="feature-icon">{feature.icon}</span>
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
              <div className="feature-hover-line" style={{ background: feature.color }}></div>
            </div>
          ))}
        </div>
      </section>

      {/* Workflow Section */}
      <section className="workflow-section animate-on-scroll">
        <div className="section-header">
          <span className="section-badge">Process</span>
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">
            A seamless four-step process from data input to actionable conservation insights.
          </p>
        </div>
        <div className="workflow-grid">
          {workflow.map((item, index) => (
            <div key={index} className="workflow-card animate-on-scroll" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="workflow-number">{item.step}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <div className="workflow-arrow">→</div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section animate-on-scroll">
        <div className="section-header">
          <span className="section-badge">Impact</span>
          <h2 className="section-title">Trusted by Researchers</h2>
        </div>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div className="quote-mark">"</div>
            <p className="testimonial-text">
              This platform revolutionizes how we approach wildlife conservation with AI-powered insights.
            </p>
            <div className="testimonial-author">
              <div className="author-avatar">C</div>
              <div className="author-info">
                <div className="author-name">Conservation Researcher</div>
                <div className="author-role">Wildlife Protection Agency</div>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="quote-mark">"</div>
            <p className="testimonial-text">
              The RAG technology fills critical data gaps, making predictions more accurate and actionable.
            </p>
            <div className="testimonial-author">
              <div className="author-avatar">D</div>
              <div className="author-info">
                <div className="author-name">Data Scientist</div>
                <div className="author-role">Environmental Institute</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section animate-on-scroll">
        <div className="cta-content">
          <h2 className="cta-title">Ready to Make a Difference?</h2>
          <p className="cta-subtitle">
            Start analyzing species data and contribute to global conservation efforts today.
          </p>
          <button className="btn btn-large btn-cta" onClick={() => navigate("/dashboard")}>
            <span className="btn-icon">🚀</span>
            Launch Dashboard
          </button>
        </div>
        <div className="cta-decoration">
          <div className="decoration-circle circle-1"></div>
          <div className="decoration-circle circle-2"></div>
        </div>
      </section>
    </div>
  );
}
