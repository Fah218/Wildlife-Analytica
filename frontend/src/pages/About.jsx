import { useEffect } from "react";

export default function About() {
  useEffect(() => {
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

  const technologies = [
    { name: "React 19", icon: "⚛️", category: "Frontend", desc: "Modern UI framework" },
    { name: "Python", icon: "🐍", category: "Backend", desc: "ML & API development" },
    { name: "FastAPI", icon: "⚡", category: "Backend", desc: "High-performance API" },
    { name: "Machine Learning", icon: "🤖", category: "AI/ML", desc: "Predictive models" },
    { name: "RAG Pipeline", icon: "🔗", category: "AI/ML", desc: "Context retrieval" },
    { name: "IUCN Database", icon: "📊", category: "Data", desc: "Species information" },
    { name: "Wikipedia API", icon: "🌐", category: "Data", desc: "Species images" },
    { name: "Groq LLM", icon: "🧠", category: "AI/ML", desc: "Text generation" }
  ];

  const features = [
    {
      icon: "🎯",
      title: "High Accuracy Predictions",
      desc: "Our ML models achieve 95%+ accuracy in predicting species vulnerability levels."
    },
    {
      icon: "🔄",
      title: "Real-Time Updates",
      desc: "Continuous integration of new research ensures predictions stay current."
    },
    {
      icon: "📈",
      title: "Scalable Architecture",
      desc: "Built to handle thousands of species analyses simultaneously."
    },
    {
      icon: "🔒",
      title: "Data Integrity",
      desc: "All predictions backed by verified sources and transparent methodology."
    },
    {
      icon: "🌍",
      title: "Global Coverage",
      desc: "Analyzing species from diverse ecosystems worldwide."
    },
    {
      icon: "📱",
      title: "Accessible Platform",
      desc: "Responsive design ensures access from any device, anywhere."
    }
  ];

  const impactMetrics = [
    { value: "250+", label: "Species Tracked", color: "#667eea" },
    { value: "1000+", label: "Analyses Run", color: "#11998e" },
    { value: "95%", label: "Accuracy Rate", color: "#4facfe" },
    { value: "24/7", label: "Availability", color: "#f5576c" }
  ];

  return (
    <div className="about-page-enhanced">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content animate-on-scroll">
          <div className="hero-badge">
            <span className="badge-icon">🌍</span>
            <span>About Our Mission</span>
          </div>
          <h1 className="page-title-enhanced">
            Bridging Technology and
            <span className="gradient-text"> Conservation</span>
          </h1>
          <p className="hero-lead">
            Wildlife Analytica is an AI-driven platform designed to predict extinction risks 
            and empower conservationists with data-driven insights for protecting our planet's biodiversity.
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="mission-detailed animate-on-scroll">
        <div className="mission-grid">
          <div className="mission-visual">
            <div className="visual-icon">🎯</div>
            <div className="visual-decoration"></div>
          </div>
          <div className="mission-content">
            <h2 className="section-title-alt">Our Mission</h2>
            <p className="mission-paragraph">
              Wildlife datasets are often incomplete, fragmented, and difficult to interpret. 
              Traditional conservation methods struggle to keep pace with rapidly changing 
              environmental conditions and emerging threats to biodiversity.
            </p>
            <p className="mission-paragraph">
              We leverage advanced machine learning and Retrieval Augmented Generation (RAG) 
              to fill these critical data gaps, providing conservationists with comprehensive, 
              accurate, and actionable insights that drive effective protection strategies.
            </p>
            <div className="mission-highlights">
              <div className="highlight-item">
                <span className="highlight-icon">✓</span>
                <span>Evidence-based predictions</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">✓</span>
                <span>Real-time data integration</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">✓</span>
                <span>Transparent methodology</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - Detailed */}
      <section className="how-it-works-detailed animate-on-scroll">
        <div className="section-header-centered">
          <span className="section-badge">Technology</span>
          <h2 className="section-title">How Our AI Works</h2>
          <p className="section-subtitle">
            A sophisticated pipeline combining multiple AI technologies to deliver accurate predictions
          </p>
        </div>

        <div className="process-flow">
          <div className="process-card animate-on-scroll">
            <div className="process-number">01</div>
            <div className="process-icon">📥</div>
            <h3>Data Collection</h3>
            <p>
              Aggregate species data from IUCN Red List, scientific publications, and 
              environmental databases. Process habitat information, population trends, and threats.
            </p>
            <div className="process-tags">
              <span className="tag">IUCN Data</span>
              <span className="tag">Research Papers</span>
            </div>
          </div>

          <div className="process-arrow">→</div>

          <div className="process-card animate-on-scroll">
            <div className="process-number">02</div>
            <div className="process-icon">🤖</div>
            <h3>ML Analysis</h3>
            <p>
              Machine learning models analyze patterns across habitat loss, climate change, 
              human activity, and reproductive rates to predict vulnerability levels.
            </p>
            <div className="process-tags">
              <span className="tag">Neural Networks</span>
              <span className="tag">Classification</span>
            </div>
          </div>

          <div className="process-arrow">→</div>

          <div className="process-card animate-on-scroll">
            <div className="process-number">03</div>
            <div className="process-icon">🔍</div>
            <h3>RAG Enhancement</h3>
            <p>
              Retrieval Augmented Generation fills data gaps by retrieving relevant 
              research, providing context and conservation recommendations.
            </p>
            <div className="process-tags">
              <span className="tag">Context Retrieval</span>
              <span className="tag">Synthesis</span>
            </div>
          </div>

          <div className="process-arrow">→</div>

          <div className="process-card animate-on-scroll">
            <div className="process-number">04</div>
            <div className="process-icon">📊</div>
            <h3>Results & Insights</h3>
            <p>
              Generate comprehensive reports classifying species with detailed explanations, 
              threat analysis, and actionable conservation strategies.
            </p>
            <div className="process-tags">
              <span className="tag">Classification</span>
              <span className="tag">PDF Reports</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="features-detailed animate-on-scroll">
        <div className="section-header-centered">
          <span className="section-badge">Capabilities</span>
          <h2 className="section-title">Platform Features</h2>
        </div>

        <div className="features-grid-enhanced">
          {features.map((feature, index) => (
            <div key={index} className="feature-card-detailed animate-on-scroll" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="feature-icon-circle">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="impact-section animate-on-scroll">
        <div className="section-header-centered">
          <span className="section-badge">Impact</span>
          <h2 className="section-title">Our Reach</h2>
        </div>

        <div className="metrics-grid">
          {impactMetrics.map((metric, index) => (
            <div key={index} className="metric-card animate-on-scroll" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="metric-value" style={{ color: metric.color }}>
                {metric.value}
              </div>
              <div className="metric-label">{metric.label}</div>
              <div className="metric-bar" style={{ background: metric.color }}></div>
            </div>
          ))}
        </div>
      </section>

      {/* Why It Matters */}
      <section className="why-matters animate-on-scroll">
        <div className="why-matters-container">
          <div className="section-header-centered">
            <span className="section-badge">Purpose</span>
            <h2 className="section-title">Why It Matters</h2>
          </div>
          <div className="why-grid">
            <div className="why-card animate-on-scroll">
              <div className="why-icon">⏰</div>
              <h3>Early Warning System</h3>
              <p>
                Detect threats to species before they reach critical levels, giving 
                conservationists time to implement protective measures.
              </p>
            </div>
            <div className="why-card animate-on-scroll">
              <div className="why-icon">💡</div>
              <h3>Data-Driven Decisions</h3>
              <p>
                Replace guesswork with evidence-based strategies, optimizing resource 
                allocation and maximizing conservation impact.
              </p>
            </div>
            <div className="why-card animate-on-scroll">
              <div className="why-icon">🌐</div>
              <h3>Global Collaboration</h3>
              <p>
                Enable researchers worldwide to access consistent, reliable data, 
                fostering international cooperation in biodiversity protection.
              </p>
            </div>
            <div className="why-card animate-on-scroll">
              <div className="why-icon">🔬</div>
              <h3>Scientific Rigor</h3>
              <p>
                All predictions grounded in peer-reviewed research and validated 
                methodologies, ensuring credibility with stakeholders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="tech-stack-detailed animate-on-scroll">
        <div className="section-header-centered">
          <span className="section-badge">Technology</span>
          <h2 className="section-title">Built With Modern Tools</h2>
          <p className="section-subtitle">
            Leveraging cutting-edge technologies to deliver reliable, scalable conservation insights
          </p>
        </div>

        <div className="tech-grid-enhanced">
          {technologies.map((tech, index) => (
            <div key={index} className="tech-card-enhanced animate-on-scroll" style={{ animationDelay: `${index * 0.08}s` }}>
              <div className="tech-icon-large">{tech.icon}</div>
              <h3 className="tech-name">{tech.name}</h3>
              <div className="tech-category">{tech.category}</div>
              <p className="tech-description">{tech.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Expertise */}
      <section className="team-section animate-on-scroll">
        <div className="section-header-centered">
          <span className="section-badge">Expertise</span>
          <h2 className="section-title">Multidisciplinary Approach</h2>
          <p className="section-subtitle">
            Combining expertise from multiple fields to tackle complex conservation challenges
          </p>
        </div>

        <div className="team-grid">
          <div className="team-card animate-on-scroll">
            <div className="team-icon-wrapper">
              <div className="team-icon">🧠</div>
            </div>
            <h3>Machine Learning</h3>
            <p>Advanced algorithms for pattern recognition and predictive modeling</p>
          </div>
          <div className="team-card animate-on-scroll">
            <div className="team-icon-wrapper">
              <div className="team-icon">📊</div>
            </div>
            <h3>Data Science</h3>
            <p>Statistical analysis and data pipeline optimization</p>
          </div>
          <div className="team-card animate-on-scroll">
            <div className="team-icon-wrapper">
              <div className="team-icon">🌿</div>
            </div>
            <h3>Conservation Biology</h3>
            <p>Domain expertise in wildlife ecology and biodiversity</p>
          </div>
          <div className="team-card animate-on-scroll">
            <div className="team-icon-wrapper">
              <div className="team-icon">💻</div>
            </div>
            <h3>Software Engineering</h3>
            <p>Robust architecture and seamless user experience</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="about-cta animate-on-scroll">
        <div className="about-cta-content">
          <h2>Join the Conservation Revolution</h2>
          <p>
            Start using Wildlife Analytica today and contribute to protecting 
            our planet's incredible biodiversity for future generations.
          </p>
          <div className="cta-buttons">
            <button className="btn btn-primary btn-glow" onClick={() => window.location.href = '/dashboard'}>
              <span className="btn-icon">🚀</span>
              Get Started
            </button>
            <button className="btn btn-secondary" onClick={() => window.location.href = '/'}>
              <span className="btn-icon">🏠</span>
              Back to Home
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
