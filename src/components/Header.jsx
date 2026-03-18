import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';
import Button from './common/Button';
import logo from '../assets/logo.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Transcription', path: '/transcription-services' },
    { name: 'Translation', path: '/translation-interpretation' },
    { name: 'Creative', path: '/digital-marketing-creative' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`sticky-header ${isScrolled ? 'glass is-scrolled' : ''}`}>
      <style dangerouslySetInnerHTML={{ __html: `
        .sticky-header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          padding: 24px 0;
          transition: all 0.3s ease;
        }
        .sticky-header.is-scrolled {
          padding: 12px 0;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
        }
        .nav-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .logo-img {
          height: 105px;
          width: auto;
          object-fit: contain;
          transition: height 0.3s ease;
        }
        .is-scrolled .logo-img {
          height: 80px;
        }
        @media (max-width: 768px) {
          .logo-img {
            height: 72px;
          }
        }

        .nav-menu {
          display: flex;
          gap: 32px;
          align-items: center;
        }
        .nav-link {
          font-weight: 500;
          font-size: 0.95rem;
          color: var(--primary-blue);
          position: relative;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--accent-teal);
          transition: width 0.3s ease;
        }
        .nav-link:hover::after, .nav-link.active::after {
          width: 100%;
        }
        .mobile-toggle {
          display: none;
          color: var(--primary-blue);
        }
        @media (max-width: 1024px) {
          .nav-menu {
            display: none;
          }
          .mobile-toggle {
            display: block;
          }
          .nav-cta {
            display: none;
          }
        }
        .mobile-menu {
          position: fixed;
          top: 0;
          right: 0;
          width: 100%;
          height: 100vh;
          background: var(--bg-white);
          z-index: 1001;
          display: flex;
          flex-direction: column;
          padding: 40px;
          transform: translateX(100%);
          transition: transform 0.4s cubic-bezier(0.77, 0.2, 0.05, 1.0);
        }
        .mobile-menu.open {
          transform: translateX(0);
        }
        .mobile-nav-item {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 24px;
          color: var(--primary-blue);
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
      `}} />

      <div className="container nav-container">
        <Link to="/" className="logo">
          <img src={logo} alt="Synvera Logo" className="logo-img" />
        </Link>

        <nav className="nav-menu">
          {navLinks.map((link) => (
            <NavLink 
              key={link.path} 
              to={link.path} 
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        <div className="nav-cta">
          <Link to="/contact">
            <Button variant="primary">Request Quote</Button>
          </Link>
        </div>

        <button 
          className="mobile-toggle" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '40px' }}>
          <button onClick={() => setIsMobileMenuOpen(false)}>
            <X size={32} />
          </button>
        </div>
        {navLinks.map((link) => (
          <NavLink 
            key={link.path} 
            to={link.path} 
            className="mobile-nav-item"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {link.name} <ChevronRight size={24} />
          </NavLink>
        ))}
        <Link to="/contact" style={{ marginTop: 'auto' }}>
          <Button variant="primary" className="w-full" style={{ width: '100%', justifyContent: 'center' }}>
            Request Quote
          </Button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
