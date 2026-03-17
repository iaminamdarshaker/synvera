import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';
import logo from '../assets/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section">
      <style dangerouslySetInnerHTML={{ __html: `
        .footer-section {
          background: var(--primary-blue);
          color: #fff;
          padding: 80px 0 30px;
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr 1.2fr;
          gap: 40px;
          margin-bottom: 60px;
        }
        .footer-logo-img {
          height: 70px;
          width: auto;
          object-fit: contain;
          margin-bottom: 24px;
          display: block;
        }

        .footer-desc {
          color: var(--text-light);
          margin-bottom: 24px;
          max-width: 300px;
        }
        .footer-social {
          display: flex;
          gap: 16px;
        }
        .social-icon {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.05);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-teal);
          border: 1px solid rgba(0, 87, 145, 0.1);
          transition: all 0.3s ease;
        }
        .social-icon:hover {
          background: var(--accent-teal);
          color: var(--primary-blue);
          transform: translateY(-5px);
        }
        .footer-h4 {
          color: #fff;
          font-size: 1.2rem;
          margin-bottom: 24px;
          position: relative;
          padding-bottom: 12px;
        }
        .footer-h4::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 30px;
          height: 2px;
          background: var(--accent-teal);
        }
        .footer-links li {
          margin-bottom: 12px;
        }
        .footer-links a {
          color: var(--text-light);
          transition: all 0.3s ease;
        }
        .footer-links a:hover {
          color: var(--accent-teal);
          padding-left: 5px;
        }
        .footer-contact li {
          display: flex;
          gap: 12px;
          margin-bottom: 16px;
          color: var(--text-light);
        }
        .footer-contact svg {
          color: var(--accent-teal);
          flex-shrink: 0;
        }
        .footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding-top: 30px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: var(--text-light);
          font-size: 0.9rem;
        }
        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr;
          }
          .footer-bottom {
            flex-direction: column;
            gap: 16px;
            text-align: center;
          }
        }
      `}} />

      <div className="container">
        <div className="footer-grid">
          <div>
            <Link to="/" className="footer-logo">
              <img src={logo} alt="Synvera Logo" className="footer-logo-img" />
            </Link>
            <p className="footer-desc">
              Accurate transcription, translation, and interpretation services for enterprises, research firms, and media organizations globally.
            </p>
            <div className="footer-social">
              <a href="#" className="social-icon"><Linkedin size={18} /></a>
              <a href="#" className="social-icon"><Twitter size={18} /></a>
              <a href="#" className="social-icon"><Facebook size={18} /></a>
            </div>
          </div>

          <div>
            <h4 className="footer-h4">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/transcription-services">Transcription</Link></li>
              <li><Link to="/translation-interpretation">Translation</Link></li>
              <li><Link to="/digital-marketing-creative">Digital Marketing</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-h4">Services</h4>
            <ul className="footer-links">
              <li><Link to="/transcription-services">Media Transcription</Link></li>
              <li><Link to="/translation-interpretation">Website Localization</Link></li>
              <li><Link to="/translation-interpretation">Interpretation</Link></li>
              <li><Link to="/digital-marketing-creative">Multilingual Creative</Link></li>
              <li><Link to="/contact">Request Quote</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-h4">Contact Us</h4>
            <ul className="footer-contact">
              <li><MapPin size={18} /> <span>Gat No 24, Plot No 45, Friends Park, <br />Aurangabad City, Maharashtra, India 431001</span></li>
              <li><Mail size={18} /> <a href="mailto:transcriptions@synveraservices.com" style={{color: 'inherit'}}>transcriptions@synveraservices.com</a></li>
              <li><Phone size={18} /> <a href="tel:9226646890" style={{color: 'inherit'}}>+91 92266 46890</a></li>
            </ul>
            <div style={{ marginTop: '20px', padding: '15px', background: 'rgba(255,255,255,0.05)', borderRadius: '8px' }}>
              <p style={{ fontSize: '0.85rem', color: 'var(--accent-teal)', fontWeight: '600' }}>Confidentiality Commitment</p>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-light)', marginTop: '5px' }}>100% Secure file handling with NDA options.</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {currentYear} Synvera Services. All Rights Reserved.</p>
          <div style={{ display: 'flex', gap: '24px' }}>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
