"use client"
import { useState } from 'react';
import { X, Mail, CheckCircle2, Clock } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [bookingData, setBookingData] = useState({ name: '', email: '', phone: '', date: '', reason: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setBookingData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...bookingData, type: 'booking' }),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        alert('Failed to send request. Please try again.');
      }
    } catch {
      alert('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeBooking = () => {
    onClose();
    setTimeout(() => {
      setIsSubmitted(false);
      setBookingData({ name: '', email: '', phone: '', date: '', reason: '' });
    }, 300);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-200" onClick={closeBooking}>
      <div className="bg-surface rounded-3xl shadow-2xl w-full max-w-2xl overflow-hidden flex flex-col animate-in zoom-in-95 duration-200 border border-border" onClick={e => e.stopPropagation()}>
        <div className="bg-primary p-4 flex justify-between items-center text-background">
          <div>
            <h3 className="font-bold text-xl">Book Appointment</h3>
            <p className="text-background/80 text-sm mt-1">Fill out the form below</p>
          </div>
          <button onClick={closeBooking} className="p-2 hover:bg-white/10 rounded-full transition-colors"><X size={24} /></button>
        </div>
        
        <div className="p-6 bg-background">
          {isSubmitted ? (
            <div className="flex flex-col items-center justify-center py-8 text-center space-y-6 animate-in fade-in zoom-in duration-300">
              <div className="w-24 h-24 bg-green-500/10 rounded-full flex items-center justify-center text-green-500 mb-2">
                <CheckCircle2 size={48} />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-foreground">Request Sent!</h3>
                <p className="text-secondary max-w-xs mx-auto">
                  Your appointment request has been sent successfully. We will contact you shortly to confirm.
                </p>
              </div>
              <button onClick={closeBooking} className="bg-primary text-background px-8 py-3 rounded-xl font-bold hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20">
                Close
              </button>
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-6">
              {/* Availability Section - Left Column */}
              <div className="md:col-span-1 space-y-4">
                <div className="p-4 bg-surface rounded-xl border border-border h-full">
                  <div className="flex items-center gap-2 text-primary font-bold mb-4">
                    <Clock size={18} />
                    <span className="text-sm uppercase tracking-wider">Availability</span>
                  </div>
                  <div className="space-y-3 text-sm text-secondary">
                    <div className="flex flex-col gap-1">
                      <span className="font-medium text-foreground">Mon - Fri</span>
                      <span>9:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="font-medium text-foreground">Saturday</span>
                      <span>10:00 AM - 2:00 PM</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="font-medium text-foreground">Sunday</span>
                      <span className="text-red-500 font-medium">Closed</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Form Section - Right 2 Columns */}
              <form onSubmit={handleFormSubmit} className="md:col-span-2 space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-secondary uppercase tracking-wider ml-1">Name</label>
                    <input 
                      required
                      name="name"
                      type="text" 
                      value={bookingData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 bg-surface rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground text-sm"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-secondary uppercase tracking-wider ml-1">Phone</label>
                    <input 
                      required
                      name="phone"
                      type="tel" 
                      value={bookingData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 bg-surface rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground text-sm"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-secondary uppercase tracking-wider ml-1">Email</label>
                    <input 
                      required
                      name="email"
                      type="email" 
                      value={bookingData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 bg-surface rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground text-sm"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-secondary uppercase tracking-wider ml-1">Date</label>
                    <input 
                      required
                      name="date"
                      type="date" 
                      value={bookingData.date}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 bg-surface rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-secondary uppercase tracking-wider ml-1">Reason</label>
                  <textarea 
                    required
                    name="reason"
                    rows={2}
                    value={bookingData.reason}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 bg-surface rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none text-foreground text-sm"
                    placeholder="Briefly describe your symptoms..."
                  ></textarea>
                </div>
                
                <button type="submit" disabled={isSubmitting} className="bg-primary text-background w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20 disabled:opacity-70 disabled:cursor-not-allowed text-sm">
                  {isSubmitting ? 'Sending...' : <><Mail size={18} /> Send Request</>}
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
