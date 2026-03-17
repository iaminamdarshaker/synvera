import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, FileCheck, Lock, Users, Globe, ArrowRight, Play, Briefcase, GraduationCap, Laptop, Tv, Mic, CheckCircle2 } from 'lucide-react';
import Button from '../components/common/Button';
import ServiceCard from '../components/common/ServiceCard';
import HeroImage1 from '../assets/images/hero-communication.png';
import HeroImage2 from '../assets/images/hero-globe.png';
import HeroImage3 from '../assets/images/hero-marketing.png';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Professional Transcription, Translation & Interpretation Services",
      subtitle: "Accurate. Confidential. Human-Reviewed.",
      description: "We provide reliable transcription, translation, interpretation, subtitling, and structured content services for businesses, research organizations, media teams, and digital agencies across India and globally.",
      image: HeroImage1,
      servicesLink: "/transcription-services"
    },
    {
      title: "Global Reach Through Expert Content Localization",
      subtitle: "Empowering Businesses to Speak to the World.",
      description: "From multilingual documents to website localization, we help your brand resonate with regional and international audiences through culturally nuanced language solutions.",
      image: HeroImage2,
      servicesLink: "/translation-interpretation"
    },
    {
      title: "Multilingual Digital Marketing & Creative Support",
      subtitle: "Your Partner for Global Digital Expansion.",
      description: "Elevate your brand with regional campaign localization, social media creatives, and multilingual video support designed for modern enterprises.",
      image: HeroImage3,
      servicesLink: "/digital-marketing-creative"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const trustBadges = [
    { icon: FileCheck, text: "Human Reviewed" },
    { icon: Lock, text: "Secure File Handling" },
    { icon: Shield, text: "NDA Available" },
    { icon: Users, text: "Enterprise Clients" },
    { icon: Globe, text: "Global Delivery" }
  ];

  const services = [
    {
      title: "Transcription & Media Processing",
      description: "Converting spoken content into clear, usable, and professionally formatted outputs.",
      benefits: [
        "Audio and video transcription",
        "Interview and research transcription",
        "Subtitling and closed captioning",
        "Quantitative audio-to-Excel",
        "Structured data formatting"
      ],
      icon: Mic,
      ctaLink: "/transcription-services"
    },
    {
      title: "Translation & Interpretation",
      description: "Expert linguistic solutions for seamless cross-border communication.",
      benefits: [
        "Indian and foreign language translation",
        "Website and document localization",
        "Corporate and legal translation",
        "Simultaneous interpretation"
      ],
      icon: Globe,
      ctaLink: "/translation-interpretation"
    },
    {
      title: "Digital Marketing & Creative Services",
      description: "Strategic creative support for multilingual marketing campaigns.",
      benefits: [
        "Multilingual marketing content",
        "Social media creatives",
        "Regional campaign localization",
        "Video subtitle integration",
        "Graphic design support"
      ],
      icon: Play,
      ctaLink: "/digital-marketing-creative"
    }
  ];

  const industries = [
    { icon: Tv, name: "Media & Production" },
    { icon: Briefcase, name: "Corporates & SMEs" },
    { icon: GraduationCap, name: "Research & Academic" },
    { icon: Laptop, name: "E-learning Providers" },
    { icon: Globe, name: "Marketing Agencies" },
    { icon: Tv, name: "OTT & YouTube Creators" },
    { icon: Users, name: "Event Organizers" },
    { icon: Shield, name: "Public Sector" }
  ];

  return (
    <div className="home-page">
      <style dangerouslySetInnerHTML={{ __html: `
        /* Hero Section */
        .hero-section {
          height: 100vh;
          min-height: 700px;
          position: relative;
          overflow: hidden;
          background: #fff;
          display: flex;
          align-items: center;
        }
        .hero-bg-gradient {
          position: absolute;
          top: -20%;
          right: -10%;
          width: 60%;
          height: 140%;
          background: radial-gradient(circle, rgba(100, 255, 218, 0.05) 0%, rgba(10, 25, 47, 0.05) 100%);
          filter: blur(80px);
          z-index: 0;
          animation: floatGradient 15s infinite alternate ease-in-out;
        }
        @keyframes floatGradient {
          0% { transform: translate(0, 0) rotate(0deg); }
          100% { transform: translate(5%, 5%) rotate(5deg); }
        }
        .hero-container {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }
        .hero-content {
          max-width: 600px;
        }
        .hero-content h1 {
          font-size: 3.5rem;
          margin-bottom: 24px;
          line-height: 1.1;
        }
        .hero-content .subtitle {
          color: var(--accent-teal);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 2px;
          display: block;
          margin-bottom: 16px;
        }
        .hero-content p {
          font-size: 1.1rem;
          color: var(--text-grey);
          margin-bottom: 40px;
          line-height: 1.6;
        }
        .hero-btns {
          display: flex;
          gap: 20px;
        }
        .hero-image {
          position: relative;
        }
        .hero-image img {
          width: 100%;
          filter: drop-shadow(0 20px 50px rgba(10, 25, 47, 0.1));
        }

        /* Trust Section */
        .trust-section {
          padding: 40px 0;
          background: var(--bg-light);
          border-top: 1px solid rgba(0,0,0,0.05);
          border-bottom: 1px solid rgba(0,0,0,0.05);
        }
        .trust-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 30px;
        }
        .trust-item {
          display: flex;
          align-items: center;
          gap: 12px;
          color: var(--primary-blue);
          font-weight: 600;
        }
        .trust-item svg {
          color: var(--accent-teal);
        }

        /* Workflow Section */
        .workflow-section {
          background: var(--primary-blue);
          color: #fff;
        }
        .workflow-section h2 { color: #fff; }
        .workflow-section .section-title p { color: var(--text-light); }
        .timeline {
          display: flex;
          justify-content: space-between;
          position: relative;
          margin-top: 80px;
        }
        .timeline::before {
          content: '';
          position: absolute;
          top: 30px;
          left: 0;
          width: 100%;
          height: 2px;
          background: rgba(255,255,255,0.1);
          z-index: 0;
        }
        .timeline-step {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 20%;
        }
        .step-node {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: var(--primary-blue-light);
          border: 2px solid var(--accent-teal);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          color: var(--accent-teal);
        }
        .timeline-step p {
          text-align: center;
          font-weight: 600;
          font-size: 0.9rem;
        }

        /* Advanced Solutions */
        .solutions-grid {
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 80px;
        }
        .solution-list li {
          display: flex;
          gap: 16px;
          margin-bottom: 24px;
        }
        .solution-list .icon {
          color: var(--accent-teal);
          flex-shrink: 0;
        }

        /* Industries Section */
        .industries-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }
        .industry-card {
          padding: 30px;
          background: var(--bg-light);
          border-radius: 12px;
          text-align: center;
          transition: var(--transition);
        }
        .industry-card:hover {
          background: #fff;
          box-shadow: var(--card-shadow);
          transform: translateY(-5px);
        }
        .industry-card svg {
          margin-bottom: 16px;
          color: var(--primary-blue);
        }
        .industry-card p {
          font-weight: 600;
          font-size: 1rem;
        }

        /* CTA Section */
        .cta-box {
          background: linear-gradient(135deg, var(--primary-blue) 0%, var(--primary-blue-light) 100%);
          padding: 80px;
          border-radius: 24px;
          text-align: center;
          color: #fff;
          position: relative;
          overflow: hidden;
        }
        .cta-box h2 { color: #fff; font-size: 3rem; margin-bottom: 20px; }
        .cta-box p { color: var(--text-light); font-size: 1.2rem; margin-bottom: 40px; }

        @media (max-width: 1024px) {
          .hero-section {
            height: auto;
            padding: 140px 0 80px;
            text-align: center;
          }
          .hero-container, .solutions-grid { grid-template-columns: 1fr; }
          .hero-content { text-align: center; margin: 0 auto; }
          .hero-content h1 { font-size: 2.5rem; }
          .hero-btns { justify-content: center; }
          .industries-grid { grid-template-columns: repeat(2, 1fr); }
          .timeline { flex-wrap: wrap; gap: 40px; }
          .timeline-step { width: 45%; }
          .timeline::before { display: none; }
        }
        @media (max-width: 768px) {
          .hero-content h1 { font-size: 2.2rem; }
          .hero-btns { flex-direction: column; width: 100%; max-width: 300px; margin: 0 auto; }
          .hero-btns a, .hero-btns button { width: 100%; justify-content: center; }
          .timeline-step { width: 100%; }
        }
      `}} />

      {/* Hero Slider */}
      <section className="hero-section">
        <div className="hero-bg-gradient"></div>
        <div className="container">
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentSlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="hero-container"
            >
              <div className="hero-content">
                <motion.span 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="subtitle"
                >
                  {slides[currentSlide].subtitle}
                </motion.span>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  {slides[currentSlide].title}
                </motion.h1>
                <motion.p
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ delay: 0.6 }}
                >
                  {slides[currentSlide].description}
                </motion.p>
                <motion.div 
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ delay: 0.8 }}
                   className="hero-btns"
                >
                  <Link to="/contact">
                    <Button variant="primary">Request Quote <ArrowRight size={18} /></Button>
                  </Link>
                  <Link to={slides[currentSlide].servicesLink}>
                    <Button variant="outline">View Services</Button>
                  </Link>
                </motion.div>
              </div>
              <motion.div 
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="hero-image"
              >
                <img src={slides[currentSlide].image} alt="Synvera Services Hero" />
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Trust Section */}
      <div className="trust-section">
        <div className="container trust-container">
          {trustBadges.map((badge, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="trust-item"
            >
              <badge.icon size={20} />
              <span>{badge.text}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Services Overview */}
      <section id="services">
        <div className="container">
          <div className="section-title">
            <h2>Our Global Language Solutions</h2>
            <p>We combine linguistic expertise with technical precision to deliver premium services across multiple domains.</p>
          </div>
          <div className="grid grid-3">
            {services.map((service, i) => (
              <ServiceCard key={i} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="workflow-section">
        <div className="container">
          <div className="section-title">
            <h2>End-to-End Media Language Workflows</h2>
            <p>Streamlined processes designed for scale, accuracy, and enterprise-grade delivery.</p>
          </div>
          
          <div className="timeline">
            {[
              "Transcription + Translation",
              "Translation + Subtitling",
              "Transcription to Structured Data",
              "Multilingual Media Processing"
            ].map((step, i) => (
              <div key={i} className="timeline-step">
                <motion.div 
                  className="step-node"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: i * 0.2, type: 'spring' }}
                  viewport={{ once: true }}
                >
                  {i + 1}
                </motion.div>
                <p>{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Solutions */}
      <section>
        <div className="container">
          <div className="solutions-grid grid">
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img src={HeroImage1} alt="Advanced Solutions" style={{ width: '100%', borderRadius: '24px' }} />
            </motion.div>
            <div>
              <div className="section-title" style={{ textAlign: 'left', marginBottom: '40px' }}>
                <h2 style={{ display: 'block' }}>Advanced & Scalable Language Solutions</h2>
                <p style={{ margin: '0', maxWidth: '100%', marginTop: '16px' }}>Tailored strategies for complex data and communication needs.</p>
              </div>
              <ul className="solution-list">
                {[
                  "AI-assisted, human-verified transcription",
                  "Multilingual dataset creation and data annotation",
                  "Research interview processing and thematic coding",
                  "Accessibility and compliance-ready subtitles",
                  "Corporate documentation and policy translation",
                  "Long-term language support retainers"
                ].map((item, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle2 className="icon" size={24} />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <div className="section-title">
            <h2>Industries We Support</h2>
            <p>Providing specialized expertise across diverse sectors for over a decade.</p>
          </div>
          <div className="industries-grid">
            {industries.map((ind, i) => (
              <motion.div 
                key={i}
                className="industry-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <ind.icon size={32} />
                <p>{ind.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section>
        <div className="container">
          <div className="section-title">
            <h2>The Synvera Advantage</h2>
            <p>Why enterprises trust us with their most critical language and content requirements.</p>
          </div>
          <div className="grid grid-3">
            {[
              { title: "100% Human Reviewed", desc: "Every deliverable undergoes rigorous human quality checks." },
              { title: "Multi-step Quality Control", desc: "A robust QC process ensuring 99%+ accuracy." },
              { title: "Secure File Handling", desc: "Enterprise-grade security protocols and NDA compliance." },
              { title: "Flexible Turnaround", desc: "Solutions scaled to meet your tightest deadlines." },
              { title: "Structured Formatting", desc: "Data delivered in the exact format your systems need." },
              { title: "Founder-Led Coordination", desc: "Direct oversight ensuring quality and accountability." }
            ].map((feat, i) => (
              <motion.div 
                key={i} 
                style={{ padding: '30px', border: '1px solid rgba(0,0,0,0.05)', borderRadius: '16px' }}
                whileHover={{ borderColor: 'var(--accent-teal)', translateY: -5 }}
              >
                <h3 style={{ fontSize: '1.2rem', marginBottom: '12px' }}>{feat.title}</h3>
                <p style={{ color: 'var(--text-grey)', fontSize: '0.95rem' }}>{feat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section>
        <div className="container">
          <motion.div 
            className="cta-box"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Ready to Start Your Project?</h2>
            <p>Tell us about your requirements and receive a customized quote within 12 hours.</p>
            <div className="hero-btns" style={{ justifyContent: 'center' }}>
              <Link to="/contact">
                <Button variant="teal">Request a Quote</Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" style={{ color: '#fff', borderColor: '#fff' }}>Contact Us</Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
