"use client"
import { useState, useEffect } from "react";
import { X, Menu } from "lucide-react";

interface NavbarProps {
  onBookClick: () => void;
}

export default function Navbar({ onBookClick }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? "bg-white/90 backdrop-blur-lg shadow-lg" : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="text-2xl font-bold text-primary">
            Dr. Ayesha Khan
          </div>

          <div className="hidden md:flex space-x-8">
            <a href="#about" className="nav-link">Journey</a>
            <a href="#services" className="nav-link">Services</a>
            <a href="#knowledge" className="nav-link">Health Tips</a>
            <a href="#testimonials" className="nav-link">Reviews</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>

          <button onClick={onBookClick} className="hidden md:block btn-primary">
            Book Appointment
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-slate-700"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-xl py-6 px-6 flex flex-col gap-6 animate-in slide-in-from-top-5">
          <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-xl font-medium text-slate-800 border-b border-slate-100 pb-2">Journey</a>
          <a href="#services" onClick={() => setMobileMenuOpen(false)} className="text-xl font-medium text-slate-800 border-b border-slate-100 pb-2">Services</a>
          <a href="#knowledge" onClick={() => setMobileMenuOpen(false)} className="text-xl font-medium text-slate-800 border-b border-slate-100 pb-2">Health Tips</a>
          <a href="#testimonials" onClick={() => setMobileMenuOpen(false)} className="text-xl font-medium text-slate-800 border-b border-slate-100 pb-2">Reviews</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-xl font-medium text-slate-800 border-b border-slate-100 pb-2">Contact</a>
          <button onClick={() => { onBookClick(); setMobileMenuOpen(false); }} className="btn-primary w-full flex items-center justify-center py-4 text-lg rounded-xl font-bold">
            Book Appointment
          </button>
        </div>
      )}
    </nav>
  )
}
