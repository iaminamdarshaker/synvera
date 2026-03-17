import React from 'react';
import { motion } from 'framer-motion';

const ServiceCard = ({ title, description, benefits, icon: Icon, ctaText, ctaLink, illustration }) => {
  return (
    <motion.div 
      className="service-card"
      whileHover={{ y: -10 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <style dangerouslySetInnerHTML={{ __html: `
        .service-card {
          background: #fff;
          padding: 40px;
          border-radius: var(--border-radius);
          box-shadow: var(--card-shadow);
          border: 1px solid rgba(0,0,0,0.03);
          display: flex;
          flex-direction: column;
          height: 100%;
          transition: var(--transition);
        }
        .service-card:hover {
          box-shadow: 0 20px 40px -20px rgba(2, 12, 27, 0.1);
        }
        .service-icon-box {
          width: 60px;
          height: 60px;
          border-radius: 12px;
          background: var(--accent-teal-hover);
          color: var(--primary-blue);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
        }
        .service-card h3 {
          font-size: 1.5rem;
          margin-bottom: 16px;
        }
        .service-card p {
          color: var(--text-grey);
          margin-bottom: 24px;
        }
        .service-benefits {
          margin-bottom: 32px;
          flex-grow: 1;
        }
        .service-benefits li {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 12px;
          color: var(--text-dark);
          font-size: 0.95rem;
        }
        .service-benefits li::before {
          content: '•';
          color: var(--accent-teal);
          font-weight: bold;
          font-size: 1.2rem;
        }
        .service-card .btn-link {
          color: var(--primary-blue);
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: var(--transition);
        }
        .service-card:hover .btn-link {
          gap: 12px;
          color: var(--accent-teal);
        }
      `}} />
      
      <div className="service-icon-box">
        {Icon && <Icon size={32} />}
        {illustration && <img src={illustration} alt={title} style={{ width: '100%' }} />}
      </div>
      
      <h3>{title}</h3>
      <p>{description}</p>
      
      <ul className="service-benefits">
        {benefits.map((benefit, index) => (
          <li key={index}>{benefit}</li>
        ))}
      </ul>
      
      <a href={ctaLink} className="btn-link">
        {ctaText || 'View Services'} 
        <motion.span animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
          →
        </motion.span>
      </a>
    </motion.div>
  );
};

export default ServiceCard;
