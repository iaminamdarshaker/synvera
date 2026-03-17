import React from 'react';
import { motion } from 'framer-motion';
import { Share2, Layout, Video, Palette, Megaphone, Target, BarChart, Globe, CheckCircle } from 'lucide-react';
import HeroImage from '../assets/images/hero-marketing.png';
import Button from '../components/common/Button';

const DigitalMarketing = () => {
  const designServices = [
    { title: "Social Media Creatives", icon: Share2 },
    { title: "Marketing Banners", icon: Layout },
    { title: "Digital Ads", icon: Megaphone },
    { title: "Corporate Presentations", icon: Layout },
    { title: "Brochures", icon: FileText },
    { title: "YouTube Thumbnails", icon: Video },
    { title: "Event Graphics", icon: Share2 },
    { title: "Infographics", icon: BarChart }
  ];

  return (
    <div className="service-page">
      <style dangerouslySetInnerHTML={{ __html: `
        .marketing-hero { padding: 100px 0; background: #fff; overflow: hidden; }
        .hero-grid { display: grid; grid-template-columns: 1fr 1.2fr; gap: 80px; align-items: center; }
        .hero-title { font-size: 3.5rem; line-height: 1.1; margin-bottom: 24px; }
        
        .feature-section { padding: 100px 0; background: var(--bg-light); }
        .feature-card { padding: 40px; background: #fff; border-radius: 20px; box-shadow: var(--card-shadow); transition: var(--transition); border: 1px solid transparent; }
        .feature-card:hover { border-color: var(--accent-teal); transform: translateY(-5px); }
        .feature-card h3 { margin: 20px 0 16px; font-size: 1.5rem; }
        .feature-card p { color: var(--text-grey); margin-bottom: 20px; }

        .design-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; padding: 60px 0; }
        .design-item { padding: 30px; background: #fff; border: 1px solid rgba(0,0,0,0.05); border-radius: 16px; text-align: center; transition: var(--transition); }
        .design-item:hover { background: var(--bg-light); color: var(--accent-teal); border-color: var(--accent-teal); }
        .design-item svg { margin-bottom: 16px; color: var(--primary-blue); }

        .execution-philosophy { padding: 100px 0; background: var(--primary-blue); color: #fff; text-align: center; }
      `}} />

      {/* Hero */}
      <section className="marketing-hero">
        <div className="container hero-grid">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}>
             <h1 className="hero-title">Multilingual Digital Marketing & Creative</h1>
             <p className="hero-subtitle">Engage global audiences with culturally-aligned visuals and messaging that drives results.</p>
             <div style={{ marginTop: '40px' }}>
               <Button variant="primary">Request Quote</Button>
             </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}>
            <img src={HeroImage} alt="Marketing Analytics" style={{ width: '100%' }} />
          </motion.div>
        </div>
      </section>

      {/* Multilingual Support */}
      <section className="feature-section">
        <div className="container">
           <div className="section-title">
             <h2>Strategic Marketing Support</h2>
             <p>Scale your brand across borders with our specialized multilingual creative workflow.</p>
           </div>
           <div className="grid grid-3">
             <div className="feature-card">
               <Share2 size={40} color="var(--accent-teal)" />
               <h3>Social Media Adaptation</h3>
               <p>Caption localization and regional messaging for Pinterest, Instagram, LinkedIn, and Facebook.</p>
               <ul className="check-list">
                 <li>Culturally relevant slang</li>
                 <li>Optimized hashtags</li>
                 <li>Local market timing</li>
               </ul>
             </div>
             <div className="feature-card">
               <Globe size={40} color="var(--accent-teal)" />
               <h3>Website Localization</h3>
               <p>Landing page and campaign localization that maintains brand voice while speaking the local tongue.</p>
               <ul className="check-list">
                 <li>Product messaging</li>
                 <li>Calls-to-action</li>
                 <li>SEO optimization</li>
               </ul>
             </div>
             <div className="feature-card">
               <Video size={40} color="var(--accent-teal)" />
               <h3>Video Marketing Support</h3>
               <p>Multilingual promotional videos with accurate captions and burned-in subtitles for all platforms.</p>
               <ul className="check-list">
                 <li>YouTube captions</li>
                 <li>Promo localization</li>
                 <li>OTT readiness</li>
               </ul>
             </div>
           </div>
        </div>
      </section>

      {/* Graphic Design */}
      <section>
        <div className="container">
          <div className="section-title">
            <h2>Graphic Design Services</h2>
            <p>From social creatives to corporate layouts, we blend design with linguistic precision.</p>
          </div>
          <div className="design-grid">
            {designServices.map((s, i) => (
              <motion.div 
                key={i} 
                className="design-item"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <s.icon size={28} />
                <p style={{ fontWeight: 600 }}>{s.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="execution-philosophy">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ color: '#fff', fontSize: '3rem', marginBottom: '30px' }}>Creative Execution at Scale</h2>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-light)', marginBottom: '40px' }}>
             We don't just translate text; we translate brand identity. Our unique approach integrates language experts with design professionals to ensure your global message remains consistent and impactful.
          </p>
          <div className="grid grid-3">
             <div style={{ textAlign: 'center' }}>
                <CheckCircle size={32} color="var(--accent-teal)" style={{ margin: '0 auto 12px' }} />
                <p>Accurate Messaging</p>
             </div>
             <div style={{ textAlign: 'center' }}>
                <CheckCircle size={32} color="var(--accent-teal)" style={{ margin: '0 auto 12px' }} />
                <p>Brand Consistency</p>
             </div>
             <div style={{ textAlign: 'center' }}>
                <CheckCircle size={32} color="var(--accent-teal)" style={{ margin: '0 auto 12px' }} />
                <p>Faster Execution</p>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const FileText = (props) => <Layout {...props} />;

export default DigitalMarketing;
