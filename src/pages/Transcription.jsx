import React from 'react';
import { motion } from 'framer-motion';
import { Mic, FileText, Globe, Clock, Shield, CheckCircle, Database, Headphones, Video, Table, FileVideo, Download } from 'lucide-react';
import HeroImage from '../assets/images/hero-communication.png';
import Button from '../components/common/Button';

const Transcription = () => {
  const services = [
    { icon: Mic, title: "Audio transcription", bg: "#eff6ff", border: "#bfdbfe", text: "#1e40af" },
    { icon: Video, title: "Video transcription", bg: "#f0fdfa", border: "#9cebe0", text: "#0f766e" },
    { icon: FileText, title: "Interview transcription", bg: "#f5f3ff", border: "#ddd6fe", text: "#5b21b6" },
    { icon: Headphones, title: "Podcast transcription", bg: "#eff6ff", border: "#bfdbfe", text: "#1e40af" },
    { icon: Globe, title: "Meeting & webinar transcription", bg: "#f0fdfa", border: "#9cebe0", text: "#0f766e" },
    { icon: FileText, title: "Research transcription", bg: "#f5f3ff", border: "#ddd6fe", text: "#5b21b6" },
    { icon: Briefcase, title: "Corporate transcription", bg: "#eff6ff", border: "#bfdbfe", text: "#1e40af" },
    { icon: Shield, title: "Legal transcription", bg: "#f0fdfa", border: "#9cebe0", text: "#0f766e" },
    { icon: Shield, title: "Medical transcription", bg: "#f5f3ff", border: "#ddd6fe", text: "#5b21b6" }
  ];

  const formats = ["MP3", "WAV", "AAC", "MP4", "MOV", "AVI", "Zoom", "Google Meet", "MS Teams"];

  return (
    <div className="service-page">
      <style dangerouslySetInnerHTML={{ __html: `
        .service-hero {
          padding: 80px 0;
          background: var(--bg-light);
          border-bottom: 1px solid rgba(0,0,0,0.05);
        }
        .hero-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 60px;
          align-items: center;
        }
        .hero-title { font-size: 3rem; margin-bottom: 20px; }
        .hero-subtitle { font-size: 1.25rem; color: var(--text-grey); margin-bottom: 32px; }
        
        .core-services { padding: 80px 0; }
        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .service-mini-card {
          padding: 24px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          gap: 16px;
          border-width: 2px;
          border-style: solid;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }
        .service-mini-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 4px;
          height: 100%;
          background: currentColor;
          opacity: 0.3;
        }
        .service-mini-card:hover { 
          transform: translateY(-5px) scale(1.02);
          box-shadow: 0 12px 20px rgba(0,0,0,0.06);
        }
        .icon-box { 
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          border-radius: 10px;
          background: rgba(255,255,255,0.5);
        }

        .formats-section { background: var(--primary-blue); color: #fff; padding: 60px 0; }
        .formats-grid { display: flex; justify-content: center; flex-wrap: wrap; gap: 30px; }
        .format-item { background: rgba(255,255,255,0.05); padding: 12px 24px; border-radius: 8px; font-weight: 600; }

        .options-section { padding: 80px 0; }
        .option-card {
          background: #fff;
          padding: 30px;
          border-radius: 16px;
          text-align: center;
          border: 1px solid rgba(0,0,0,0.05);
        }

        .hybrid-section { background: var(--bg-light); padding: 80px 0; }
        .excel-section { padding: 80px 0; }
        .infographic { background: #fff; padding: 40px; border-radius: 20px; box-shadow: var(--card-shadow); margin-top: 40px; }
        .step { display: flex; align-items: center; gap: 20px; margin-bottom: 24px; }
        .step-num { width: 32px; height: 32px; border-radius: 50%; background: var(--accent-teal); color: var(--primary-blue); display: flex; align-items: center; justify-content: center; font-weight: 700; flex-shrink: 0; }

        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr; text-align: center; }
          .services-grid { grid-template-columns: 1fr; }
        }
      `}} />

      {/* Hero */}
      <section className="service-hero">
        <div className="container hero-grid">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
            <h1 className="hero-title">Professional Transcription Services in India</h1>
            <p className="hero-subtitle">Accurate. Structured. Human-Reviewed.</p>
            <div style={{ pointerEvents: 'none' }}>
              {/* Waveform Illustration Placeholder/CSS */}
              <div style={{ display: 'flex', gap: '4px', height: '40px', alignItems: 'center' }}>
                {[...Array(20)].map((_, i) => (
                  <motion.div 
                    key={i}
                    animate={{ height: [10, 40, 15, 35, 12] }}
                    transition={{ repeat: Infinity, duration: 1 + Math.random(), delay: i * 0.1 }}
                    style={{ width: '4px', background: 'var(--accent-teal)', borderRadius: '2px' }}
                  />
                ))}
              </div>
            </div>
            <div style={{ marginTop: '40px' }}>
              <Button variant="primary">Request Quote</Button>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
            <img src={HeroImage} alt="Transcription Illustration" style={{ width: '100%' }} />
          </motion.div>
        </div>
      </section>

      {/* Core Services */}
      <section className="core-services">
        <div className="container">
          <div className="section-title">
            <h2>Core Transcription Services</h2>
            <p>High-accuracy outputs tailored for every media type and industry sector.</p>
          </div>
          <div className="services-grid">
            {services.map((s, i) => (
              <motion.div 
                key={i} 
                className="service-mini-card"
                whileHover={{ y: -5 }}
                style={{ 
                  backgroundColor: s.bg, 
                  borderColor: s.border,
                  color: s.text
                }}
              >
                <div className="icon-box" style={{ color: s.text }}>
                  <s.icon size={24} />
                </div>
                <span style={{ fontWeight: 700, fontSize: '1rem' }}>{s.title}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Formats */}
      <section className="formats-section">
        <div className="container">
          <h3 style={{ textAlign: 'center', marginBottom: '40px' }}>Supported File Formats</h3>
          <div className="formats-grid">
            {formats.map((f, i) => (
              <div key={i} className="format-item">{f}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Options */}
      <section className="options-section">
        <div className="container">
          <div className="section-title">
            <h2>Transcription Options</h2>
            <p>Choose the level of detail and formatting that suits your project needs.</p>
          </div>
          <div className="grid grid-3">
            {[
              "Clean verbatim", "Intelligent verbatim", "Speaker identification",
              "Timestamps", "Custom formatting", "Structured layouts"
            ].map((opt, i) => (
              <div key={i} className="option-card">
                <CheckCircle size={32} color="var(--accent-teal)" style={{ marginBottom: '16px' }} />
                <h4 style={{ fontSize: '1.2rem' }}>{opt}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Assisted */}
      <section className="hybrid-section">
        <div className="container grid grid-2" style={{ alignItems: 'center' }}>
          <div>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '24px' }}>AI-Assisted + Human Verified</h2>
            <p style={{ marginBottom: '32px', color: 'var(--text-grey)' }}>Our hybrid model combines the efficiency of AI with the precision of experienced human linguists.</p>
            <div className="grid grid-2">
              {[
                { title: "Faster Turnaround", icon: Clock },
                { title: "Cost Efficient", icon: Table },
                { title: "High Accuracy", icon: CheckCircle },
                { title: "Consistent Formatting", icon: FileText }
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                  <item.icon size={20} color="var(--accent-teal)" />
                  <span style={{ fontWeight: 600 }}>{item.title}</span>
                </div>
              ))}
            </div>
          </div>
          <img src={HeroImage} alt="Hybrid Model" style={{ width: '100%', borderRadius: '20px' }} />
        </div>
      </section>

      {/* Audio to Excel */}
      <section className="excel-section">
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: 'center' }}>
             <div className="infographic">
                <h3 style={{ marginBottom: '30px' }}>Audio to Excel Workflow</h3>
                {[
                  "Question-wise mapping",
                  "Row based Excel data",
                  "Timestamp alignment",
                  "Optional tagging"
                ].map((step, i) => (
                  <div key={i} className="step">
                    <div className="step-num">{i + 1}</div>
                    <span style={{ fontWeight: 600 }}>{step}</span>
                  </div>
                ))}
             </div>
             <div style={{ paddingLeft: '40px' }}>
                <h2>Qualitative Research Transcription</h2>
                <p style={{ color: 'var(--text-grey)', marginTop: '20px' }}>Specialized transcription for research interviews and focus groups. We deliver data ready for analysis in your preferred qualitative software or spreadsheet format.</p>
                <Button variant="outline" style={{ marginTop: '30px' }}>Learn More</Button>
             </div>
          </div>
        </div>
      </section>

      {/* Subtitling */}
      <section style={{ background: 'var(--primary-blue)', color: '#fff' }}>
        <div className="container text-center" style={{ textAlign: 'center' }}>
          <h2 style={{ color: '#fff' }}>Subtitling Services</h2>
          <p style={{ color: 'var(--text-light)', margin: '20px auto', maxWidth: '700px' }}>Deliver your content to a global audience with professionally timed subtitles for YouTube, OTT, and corporate videos.</p>
          <div className="grid grid-3" style={{ marginTop: '40px' }}>
            {["SRT", "VTT", "ASS"].map((ext, i) => (
              <div key={i} style={{ padding: '20px', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}>
                <FileVideo size={32} color="var(--accent-teal)" style={{ marginBottom: '10px' }} />
                <p style={{ fontWeight: 700 }}>.{ext} Format</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

// Icon placeholders since Lucide-React might not have everything exactly as named
const Briefcase = (props) => <FileText {...props} />;

export default Transcription;
