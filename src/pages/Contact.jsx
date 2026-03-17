import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, FileUp } from 'lucide-react';
import Button from '../components/common/Button';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);
    formData.append("access_key", "a39573e5-0d97-4935-be87-2b3930fc4079"); // Official access key for Synvera

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
      } else {
        console.log("Error", data);
        alert(data.message || "Submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Submission Error", error);
      alert("An error occurred. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const processSteps = [
    { title: "Requirement Review", desc: "We analyze your specific needs and file parameters." },
    { title: "Scope Confirmation", desc: "Detailed quote and turnaround timeline proposal." },
    { title: "Professional Execution", desc: "Expert linguists start work on your project." },
    { title: "Quality Review", desc: "Multi-step QC to ensure near-perfection." },
    { title: "Secure Delivery", desc: "Files delivered via encrypted channels." }
  ];

  return (
    <div className="contact-page">
      <style dangerouslySetInnerHTML={{ __html: `
        .contact-hero { padding: 140px 0 60px; background: #fff; text-align: center; }
        .hero-title { font-size: 3rem; margin-bottom: 20px; }
        
        @media (max-width: 768px) {
          .contact-hero { padding: 120px 0 40px; }
          .hero-title { font-size: 2rem; }
          .contact-form { padding: 30px 20px; }
        }

        .form-section { padding: 0 0 100px; }
        .form-grid { display: grid; grid-template-columns: 1.5fr 1fr; gap: 80px; }
        
        .contact-form { background: #fff; padding: 50px; border-radius: 24px; box-shadow: var(--card-shadow); border: 1px solid rgba(0,0,0,0.05); }
        .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin-bottom: 24px; }
        .form-group { margin-bottom: 24px; }
        .form-group label { display: block; font-weight: 600; margin-bottom: 8px; color: var(--primary-blue); font-size: 0.9rem; }
        .form-group input, .form-group select, .form-group textarea {
          width: 100%; padding: 14px; border: 1px solid #e2e8f0; border-radius: 10px; font-family: inherit; font-size: 1rem; transition: var(--transition);
        }
        .form-group input:focus { outline: none; border-color: var(--accent-teal); box-shadow: 0 0 0 3px rgba(0, 87, 145, 0.1); }
        
        .contact-info { padding: 20px; }
        .info-card { background: var(--bg-light); padding: 32px; border-radius: 16px; margin-bottom: 24px; display: flex; gap: 20px; }
        .info-icon { width: 48px; height: 48px; border-radius: 12px; background: #fff; display: flex; align-items: center; justify-content: center; color: var(--accent-teal); box-shadow: 0 4px 6px rgba(0,0,0,0.02); }

        .process-section { background: var(--bg-light); padding: 100px 0; }
        .process-list { display: grid; grid-template-columns: repeat(5, 1fr); gap: 20px; margin-top: 50px; }
        .process-step { text-align: center; }
        .p-num { width: 40px; height: 40px; border-radius: 50%; background: var(--primary-blue); color: #fff; display: flex; align-items: center; justify-content: center; margin: 0 auto 16px; font-weight: 700; }
        
        @media (max-width: 1024px) {
          .form-grid, .process-list { grid-template-columns: 1fr; }
          .form-row { grid-template-columns: 1fr; }
        }
      `}} />

      {/* Hero */}
      <section className="contact-hero">
        <div className="container">
          <h1 className="hero-title">Request a Custom Quote</h1>
          <p style={{ color: 'var(--text-grey)', fontSize: '1.25rem', maxWidth: '700px', margin: '0 auto' }}>
            Ready to scale your project? Share your requirements and get a detailed proposal within 12 hours.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="form-section">
        <div className="container form-grid">
           <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
              {submitted ? (
                <div className="contact-form" style={{ textAlign: 'center', padding: '80px 50px' }}>
                   <CheckCircle size={64} color="var(--accent-teal)" style={{ margin: '0 auto 24px' }} />
                   <h2>Message Received</h2>
                   <p style={{ marginTop: '16px', color: 'var(--text-grey)' }}>Thank you for reaching out. A coordinator will be in touch shortly.</p>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                   <div className="form-row">
                      <div className="form-group">
                         <label>Full Name</label>
                         <input type="text" name="name" placeholder="John Doe" required />
                      </div>
                      <div className="form-group">
                         <label>Email Address</label>
                         <input type="email" name="email" placeholder="john@company.com" required />
                      </div>
                   </div>
                   <div className="form-row">
                      <div className="form-group">
                         <label>Organization</label>
                         <input type="text" name="organization" placeholder="Company Ltd." required />
                      </div>
                      <div className="form-group">
                         <label>Service Type</label>
                         <select name="service">
                           <option>Transcription</option>
                           <option>Translation & Interpretation</option>
                           <option>Digital Marketing & Creative</option>
                           <option>Other / Multi-service</option>
                         </select>
                      </div>
                   </div>
                   <div className="form-row">
                      <div className="form-group">
                         <label>Estimated Volume</label>
                         <input type="text" name="volume" placeholder="e.g. 50 hours of audio" />
                      </div>
                      <div className="form-group">
                         <label>Turnaround Preference</label>
                         <select name="turnaround">
                           <option>Standard (3-5 days)</option>
                           <option>Express (24-48 hours)</option>
                           <option>Urgent (Same day)</option>
                         </select>
                      </div>
                   </div>
                   <div className="form-group">
                      <label>Project Details</label>
                      <textarea name="details" rows="4" placeholder="Briefly describe your requirements..."></textarea>
                   </div>
                   <Button 
                      type="submit" 
                      variant="primary" 
                      disabled={isSubmitting}
                      style={{ width: '100%', justifyContent: 'center' }}
                    >
                      {isSubmitting ? "Sending..." : "Send Inquiry"} {!isSubmitting && <Send size={18} />}
                   </Button>
                </form>
              )}
           </motion.div>

           <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }}>
              <div className="info-card">
                 <div className="info-icon"><Mail size={24} /></div>
                 <div>
                    <h4 style={{ marginBottom: '4px' }}>Email Us</h4>
                    <p style={{ color: 'var(--text-grey)' }}>
                      <a href="mailto:transcriptions@synveraservices.com" style={{color: 'inherit'}}>transcriptions@synveraservices.com</a>
                    </p>
                 </div>
              </div>
              <div className="info-card">
                 <div className="info-icon"><Phone size={24} /></div>
                 <div>
                    <h4 style={{ marginBottom: '4px' }}>Call Us</h4>
                    <p style={{ color: 'var(--text-grey)' }}>
                      <a href="tel:9226646890" style={{color: 'inherit'}}>+91 92266 46890</a>
                    </p>
                 </div>
              </div>
              <div className="info-card">
                 <div className="info-icon"><Clock size={24} /></div>
                 <div>
                    <h4 style={{ marginBottom: '4px' }}>Business Hours</h4>
                    <p style={{ color: 'var(--text-grey)' }}>9 AM – 7 PM IST, Mon - Sat</p>
                 </div>
              </div>
              <div style={{ marginTop: '40px', padding: '30px', border: '2px dashed var(--accent-teal)', borderRadius: '20px', textAlign: 'center' }}>
                 <FileUp size={40} color="var(--accent-teal)" style={{ marginBottom: '16px' }} />
                 <h4>Need NDA First?</h4>
                 <p style={{ color: 'var(--text-grey)', marginTop: '8px', fontSize: '0.9rem' }}>Contact us via email to initiate an NDA before sharing sensitive files.</p>
              </div>
           </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="container">
           <div className="section-title">
             <h2>Our Project Process</h2>
             <p>A structured approach to ensuring clarity and quality from start to finish.</p>
           </div>
           <div className="process-list">
             {processSteps.map((step, i) => (
               <div key={i} className="process-step">
                  <div className="p-num">{i + 1}</div>
                  <h4 style={{ marginBottom: '10px' }}>{step.title}</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-grey)' }}>{step.desc}</p>
               </div>
             ))}
           </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
