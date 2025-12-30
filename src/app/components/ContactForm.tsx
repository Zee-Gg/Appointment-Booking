"use client"
import { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          reason: `Subject: ${formData.subject}\n\nMessage: ${formData.message}`,
          type: 'contact'
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        const data = await response.json();
        alert(data.details || 'Failed to send message. Please try again.');
      }
    } catch {
      alert('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="h-full flex flex-col items-center justify-center text-center p-8 animate-in fade-in duration-500">
        <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center text-green-500 mb-6">
          <CheckCircle2 size={40} />
        </div>
        <h3 className="text-2xl font-bold text-foreground mb-2">Message Sent!</h3>
        <p className="text-secondary mb-8">Thank you for reaching out. We&apos;ll get back to you shortly.</p>
        <button 
          onClick={() => setIsSubmitted(false)}
          className="text-primary font-bold hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-xs font-bold text-secondary uppercase tracking-wider ml-1">Name</label>
          <input 
            required
            name="name"
            type="text" 
            value={formData.name}
            onChange={handleInputChange}
            className="w-full px-5 py-4 bg-surface rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground" 
          />
        </div>
        <div className="space-y-2">
          <label className="text-xs font-bold text-secondary uppercase tracking-wider ml-1">Email</label>
          <input 
            required
            name="email"
            type="email" 
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-5 py-4 bg-surface rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground" 
          />
        </div>
      </div>
      <div className="space-y-2">
        <label className="text-xs font-bold text-secondary uppercase tracking-wider ml-1">Subject</label>
        <input 
          required
          name="subject"
          type="text" 
          value={formData.subject}
          onChange={handleInputChange}
          className="w-full px-5 py-4 bg-surface rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground" 
        />
      </div>
      <div className="space-y-2">
        <label className="text-xs font-bold text-secondary uppercase tracking-wider ml-1">Message</label>
        <textarea 
          required
          name="message"
          rows={5} 
          value={formData.message}
          onChange={handleInputChange}
          className="w-full px-5 py-4 bg-surface rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none text-foreground"
        ></textarea>
      </div>
      <button 
        type="submit" 
        disabled={isSubmitting}
        className="bg-primary text-background px-8 py-4 rounded-xl font-bold shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-1 transition-all duration-300 w-full md:w-auto flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Sending...' : <>Send Message <Send size={18} /></>}
      </button>
    </form>
  );
}
