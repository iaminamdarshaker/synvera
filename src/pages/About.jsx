import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Shield, Briefcase, Award, TrendingUp } from 'lucide-react';
import HeroImage from '../assets/images/hero-globe.png';

const About = () => {
  return (
    <div className="about-page">
      <style dangerouslySetInnerHTML={{ __html: `
        .about-hero { padding: 120px 0 80px; background: var(--bg-light); text-align: center; }
        .about-title { font-size: 4rem; margin-bottom: 24px; }
        
        .overview-section { padding: 100px 0; }
        .overview-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; }
        
        .mission-section { background: var(--primary-blue); color: #fff; padding: 100px 0; }
        .philosophy-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 40px; margin-top: 60px; }
        .philosophy-card { padding: 40px; background: rgba(255,255,255,0.05); border-radius: 20px; text-align: center; border: 1px solid rgba(100,255,218,0.1); }
        .philosophy-card h3 { color: var(--accent-teal); margin: 20px 0 12px; }

        .founder-section { padding: 100px 0; background: var(--bg-light); }
        .stats-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 30px; padding: 60px 0; }
        .stat-item { text-align: center; }
        .stat-item h2 { font-size: 3rem; color: var(--accent-teal); margin-bottom: 8px; }
      `}} />

      {/* Hero */}
      <section className="about-hero">
        <div className="container" style={{ maxWidth: '900px' }}>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="about-title">Bridging Language Gaps with Precision</motion.h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-grey)' }}>Synvera Services provides mission-critical transcription, translation, and media services to global enterprises and research organizations.</p>
        </div>
      </section>

      {/* Overview */}
      <section className="overview-section">
        <div className="container overview-grid">
           <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <img src={HeroImage} alt="About Synvera" style={{ width: '100%', borderRadius: '30px' }} />
           </motion.div>
           <div>
              <h2>Global Delivery. Human-Centric Quality.</h2>
              <p style={{ color: 'var(--text-grey)', fontSize: '1.1rem', marginTop: '24px' }}>
                With a foundation built on accuracy and confidentiality, Synvera Services has evolved into a trusted language partner for media production teams, corporate legal departments, and international research agencies.
              </p>
              <p style={{ color: 'var(--text-grey)', fontSize: '1.1rem', marginTop: '16px' }}>
                We believe that every word matters. Whether it's a high-stakes board meeting transcription or the localization of a marketing campaign for rural India, our focus remains on providing clear, usable, and professionally formatted outputs.
              </p>
           </div>
        </div>
      </section>

      {/* Mission & Philosophy */}
      <section className="mission-section">
        <div className="container">
           <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}>
              <h2 style={{ color: '#fff' }}>Our Execution Philosophy</h2>
              <p style={{ color: 'var(--text-light)', marginTop: '16px' }}>Our work is guided by four core principles that ensure enterprise-grade delivery every single time.</p>
           </div>
           
           <div className="philosophy-grid">
              <div className="philosophy-card">
                 <Shield size={40} color="var(--accent-teal)" />
                 <h3>Confidentiality First</h3>
                 <p>Rigorous data security protocols and NDA enforcement for every client engagement.</p>
              </div>
              <div className="philosophy-card">
                 <Award size={40} color="var(--accent-teal)" />
                 <h3>Human-Verified</h3>
                 <p>Every automated step is backed by manual expert review to ensure 99%+ accuracy.</p>
              </div>
              <div className="philosophy-card">
                 <TrendingUp size={40} color="var(--accent-teal)" />
                 <h3>Scalable Solutions</h3>
                 <p>Processes designed to handle high volumes without compromising on quality or turnaround.</p>
              </div>
           </div>
        </div>
      </section>

      {/* Stats & Founder */}
      <section className="founder-section">
        <div className="container">
           <div className="grid grid-2" style={{ alignItems: 'center' }}>
              <div>
                 <h2>Founder-Led Insight</h2>
                 <p style={{ color: 'var(--text-grey)', marginTop: '20px' }}>
                   At Synvera, we pride ourselves on direct oversight. Our leadership remains involved in coordination and quality review, ensuring that the founder's commitment to excellence permeates every project.
                 </p>
                 <div className="stats-grid" style={{ paddingLeft: 0, marginTop: '20px' }}>
                    <div className="stat-item" style={{ textAlign: 'left' }}>
                       <h2>10+</h2>
                       <p style={{ fontWeight: 600 }}>Years Exp.</p>
                    </div>
                    <div className="stat-item" style={{ textAlign: 'left' }}>
                       <h2>500+</h2>
                       <p style={{ fontWeight: 600 }}>Clients</p>
                    </div>
                 </div>
              </div>
              <div style={{ background: '#fff', padding: '50px', borderRadius: '24px', boxShadow: 'var(--card-shadow)' }}>
                 <p style={{ fontStyle: 'italic', fontSize: '1.2rem', color: 'var(--primary-blue)' }}>
                   "Our goal is to be the silent engine that powers your global communication, providing reliability where it's needed most."
                 </p>
                 <div style={{ marginTop: '30px', display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'var(--bg-light)' }}></div>
                    <div>
                       <p style={{ fontWeight: 700, margin: 0 }}>Synvera Leadership</p>
                       <p style={{ fontSize: '0.9rem', color: 'var(--text-grey)', margin: 0 }}>Founder & CEO</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default About;
