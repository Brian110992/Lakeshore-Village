import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus('success');
        setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' });
      } else {
        throw new Error(result.message || 'Failed to send message');
      }
    } catch (error) {
      console.error('Contact error:', error);
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Something went wrong. Please try again later.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="pt-32 pb-20 px-4 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact The Halstead Team</h1>
          <p className="text-xl text-graphite/70">Your Lakeshore Village Real Estate Experts.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="card"
          >
            <h2 className="text-2xl font-bold mb-8">Send us a message</h2>
            
            {status === 'success' ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center space-y-4"
              >
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="text-emerald-600" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-emerald-900">Message Sent!</h3>
                <p className="text-emerald-700">Thank you for reaching out. Your inquiry has been sent to our team, and we'll get back to you shortly.</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="btn-primary mt-4"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                {status === 'error' && (
                  <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-center gap-3 text-red-700">
                    <AlertCircle size={20} />
                    <p className="text-sm font-medium">{errorMessage}</p>
                  </div>
                )}
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold uppercase tracking-wider text-graphite/60">First Name</label>
                    <input 
                      type="text" 
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      className="input-field" 
                      placeholder="John" 
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold uppercase tracking-wider text-graphite/60">Last Name</label>
                    <input 
                      type="text" 
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      className="input-field" 
                      placeholder="Doe" 
                    />
                  </div>
                </div>
                
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold uppercase tracking-wider text-graphite/60">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="input-field" 
                    placeholder="john@example.com" 
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold uppercase tracking-wider text-graphite/60">Phone Number</label>
                  <input 
                    type="tel" 
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="input-field" 
                    placeholder="(209) 000-0000" 
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold uppercase tracking-wider text-graphite/60">Message</label>
                  <textarea 
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="input-field min-h-[150px]" 
                    placeholder="How can we help you with your Lakeshore Village real estate needs?" 
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={status === 'submitting'}
                  className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'submitting' ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <Send size={18} />
                  )}
                  {status === 'submitting' ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-12"
          >
            <div className="space-y-8">
              <h2 className="text-2xl font-bold">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-gold/10 p-3 rounded-lg">
                    <Phone className="text-gold" />
                  </div>
                  <div>
                    <p className="font-bold text-lg">Phone</p>
                    <a href="tel:2093148064" className="text-graphite/70 hover:text-gold transition-colors">(209) 314-8064</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-gold/10 p-3 rounded-lg">
                    <Mail className="text-gold" />
                  </div>
                  <div>
                    <p className="font-bold text-lg">Email</p>
                    <a href="mailto:info@thehalsteadteam.com" className="text-graphite/70 hover:text-gold transition-colors">info@thehalsteadteam.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-gold/10 p-3 rounded-lg">
                    <MapPin className="text-gold" />
                  </div>
                  <div>
                    <p className="font-bold text-lg">Office Address</p>
                    <p className="text-graphite/70">777 S Ham Ln., Suite A,<br />Lodi, CA 95242</p>
                    <p className="text-xs mt-1 text-gold font-bold">CalDRE #01992952</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
