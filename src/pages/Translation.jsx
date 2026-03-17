import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Languages, FileText, Scale, Users, MapPin, ArrowRight, Quote, Shield } from 'lucide-react';
import HeroImage from '../assets/images/hero-globe.png';
import Button from '../components/common/Button';

const Translation = () => {
  const languagePairs = [
    "English ↔ Hindi", "English ↔ Marathi", "English ↔ Tamil", "English ↔ Telugu",
    "English ↔ Bengali", "English ↔ Gujarati", "English ↔ Kannada", "English ↔ Malayalam",
    "English ↔ Punjabi", "English ↔ Urdu", "English ↔ Odia"
  ];

  const translationCards = [
    { title: "Document Translation", desc: "Accurate translation for corporate, technical, and general business documents." },
    { title: "Website Localization", desc: "Adapting your digital presence for regional markets with cultural nuance." },
    { title: "Business Communication", desc: "Professional translation for emails, newsletters, and internal memos." },
    { title: "Market Research", desc: "Localizing surveys, discussion guides, and consumer responses." },
    { title: "Legal Translation", desc: "Certified translation for contracts, policies, and compliance documents." }
  ];

  return (
    <div className="service-page">
      <style dangerouslySetInnerHTML={{ __html: `
        .service-hero { padding: 80px 0; background: #fff; }
        .hero-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; }
        .hero-title { font-size: 3.5rem; margin-bottom: 24px; color: var(--primary-blue); }

        .translation-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; padding: 80px 0; }
        .trans-card { padding: 32px; background: var(--bg-light); border-radius: 16px; transition: var(--transition); height: 100%; border: 1px solid transparent; }
        .trans-card:hover { background: #fff; box-shadow: var(--card-shadow); border-color: var(--accent-teal); }
        .trans-card h3 { margin-bottom: 16px; font-size: 1.25rem; }
        .trans-card p { color: var(--text-grey); font-size: 0.95rem; }

        .languages-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; padding: 60px 0; }
        .lang-item { padding: 16px; background: #fff; border: 1px solid rgba(0,0,0,0.05); border-radius: 8px; text-align: center; font-weight: 600; color: var(--primary-blue); }

        .interpretation-section { background: var(--primary-blue); color: #fff; padding: 100px 0; }
        .interp-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; }
        .interp-item { display: flex; align-items: center; gap: 16px; margin-bottom: 20px; padding: 20px; background: rgba(255,255,255,0.05); border-radius: 12px; }

        .workflow-visual { text-align: center; padding: 100px 0; }
        .flow-container { display: flex; justify-content: center; align-items: center; gap: 40px; margin-top: 50px; }
        .flow-step { padding: 24px; border: 2px solid var(--accent-teal); border-radius: 12px; font-weight: 700; width: 180px; }

        @media (max-width: 1024px) {
          .translation-grid { grid-template-columns: repeat(2, 1fr); }
          .languages-grid { grid-template-columns: repeat(2, 1fr); }
          .interp-grid { grid-template-columns: 1fr; }
        }
      `}} />

      {/* Hero */}
      <section className="service-hero">
        <div className="container hero-grid">
          <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }}>
             <h1 className="hero-title">Professional Translation & Interpretation</h1>
             <p className="hero-subtitle">Culturally nuanced, accurate, and industry-specific language solutions for a global world.</p>
             <Button variant="primary" style={{ marginTop: '20px' }}>Request Quote</Button>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}>
            <img src={HeroImage} alt="Translation Globe" style={{ width: '100%' }} />
          </motion.div>
        </div>
      </section>

      {/* Translation Services */}
      <section>
        <div className="container">
          <div className="section-title">
            <h2>Linguistic Services</h2>
            <p>From Tier-2 market localization to boardroom interpretation, we bridge every language gap.</p>
          </div>
          <div className="translation-grid">
            {translationCards.map((card, i) => (
              <motion.div 
                key={i} 
                className="trans-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Expansion */}
      <section style={{ background: 'var(--bg-light)' }}>
        <div className="container grid grid-2" style={{ alignItems: 'center' }}>
          <div>
            <div className="section-title" style={{ textAlign: 'left', marginBottom: '30px' }}>
              <h2 style={{ display: 'block' }}>Unlock Bharat: Market Expansion</h2>
              <p style={{ margin: 0, marginTop: '16px' }}>Localized content targeting Tier-2 and Tier-3 markets across India.</p>
            </div>
            <p style={{ color: 'var(--text-grey)', fontSize: '1.1rem', marginBottom: '32px' }}>
              True connection happens in the local language. We help enterprises translate documents, HR policies, and marketing materials into regional Indian languages to effectively reach the next 500 million users.
            </p>
            <div className="grid grid-2">
              {["HR Policy Translation", "SOP Localization", "Compliance Docs", "Training Material"].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '10px' }}>
                  <Shield size={18} color="var(--accent-teal)" />
                  <span style={{ fontWeight: 600 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="languages-grid">
            {languagePairs.map((pair, i) => (
              <motion.div 
                key={i} 
                className="lang-item"
                whileHover={{ scale: 1.05, borderColor: 'var(--accent-teal)' }}
              >
                {pair}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interpretation */}
      <section className="interpretation-section">
        <div className="container interp-grid">
          <div>
            <h2 style={{ color: '#fff', fontSize: '2.5rem', marginBottom: '24px' }}>Expert Interpretation Services</h2>
            <p style={{ color: 'var(--text-light)', marginBottom: '40px' }}>Real-time language support for high-stakes business environments, conferences, and remote meetings.</p>
            <div className="grid grid-2">
              {[
                { title: "Simultaneous", icon: Globe },
                { title: "Consecutive", icon: Users },
                { title: "Conference", icon: Scale },
                { title: "Remote (OPI/VRI)", icon: Languages }
              ].map((item, i) => (
                <div key={i} className="interp-item">
                   <item.icon size={24} color="var(--accent-teal)" />
                   <span style={{ fontWeight: 600 }}>{item.title}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ padding: '40px', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '24px', background: 'rgba(255,255,255,0.02)' }}>
             <Quote size={40} color="var(--accent-teal)" style={{ marginBottom: '20px' }} />
             <p style={{ fontStyle: 'italic', fontSize: '1.2rem', marginBottom: '20px' }}>
               "Our interpretation team ensures that no nuance is lost in translation during your most important global summits and corporate negotiations."
             </p>
             <p style={{ fontWeight: 700, color: 'var(--accent-teal)' }}>Senior Linguistic Coordinator</p>
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="workflow-visual">
         <div className="container">
           <h2>Integrated Language Workflow</h2>
           <p style={{ color: 'var(--text-grey)', marginTop: '16px' }}>A seamless pipeline for end-to-to content processing.</p>
           <div className="flow-container">
             <div className="flow-step">Transcription</div>
             <ArrowRight size={24} color="var(--accent-teal)" />
             <div className="flow-step">Translation</div>
             <ArrowRight size={24} color="var(--accent-teal)" />
             <div className="flow-step">Subtitles</div>
           </div>
         </div>
      </section>
    </div>
  );
};

export default Translation;
