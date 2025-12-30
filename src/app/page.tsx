
"use client"
import { useState, useEffect } from 'react';
import { 
  Phone, Mail, MapPin, Calendar, Heart, Users, Stethoscope, 
  Activity, Shield, MessageCircle, Star, GraduationCap, 
  Menu, X, ArrowRight,
  Linkedin, ChevronLeft, ChevronRight, Quote, Building2,
  Sparkles, Leaf
} from 'lucide-react';
import BookingModal from './components/BookingModal';
import ContactForm from './components/ContactForm';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [currentReview, setCurrentReview] = useState(0);

  // Scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const education = [
    { year: '2015', title: 'Pediatric Residency', org: 'Children\'s Hospital Boston', desc: 'Specialized in developmental pediatrics' },
    { year: '2012', title: 'Doctor of Medicine', org: 'Harvard Medical School', desc: 'Graduated with Honors' },
    { year: '2008', title: 'B.S. Biology', org: 'Yale University', desc: 'Summa Cum Laude' }
  ];

  const services = [
    { icon: Stethoscope, title: 'General Checkups', desc: 'Comprehensive health screenings and physicals.' },
    { icon: Activity, title: 'Vaccinations', desc: 'Routine immunizations and flu shots for all ages.' },
    { icon: Heart, title: 'Cardiology', desc: 'Basic heart health monitoring and referrals.' },
    { icon: Shield, title: 'Preventive Care', desc: 'Disease prevention strategies and health education.' },
    { icon: Users, title: 'Family Medicine', desc: 'Care for the whole family, from infants to seniors.' },
    { icon: MessageCircle, title: 'Consultations', desc: 'Expert medical advice for complex health issues.' }
  ];

  const reviews = [
    { text: "Dr. Khan is incredibly patient and knowledgeable. She takes the time to listen to all our concerns and explains everything clearly. We never feel rushed.", author: "Sarah Jenkins", role: "Patient since 2018" },
    { text: "The clinic is spotless and the staff is very professional. I appreciate how easy it is to book appointments and the minimal wait times.", author: "Michael Chen", role: "Patient since 2020" },
    { text: "Best medical experience I've had. Dr. Khan diagnosed an issue that others missed. I am forever grateful for her expertise and care.", author: "Emily Rodriguez", role: "Patient since 2022" },
    { text: "A wonderful doctor who truly cares about her patients. The office environment is calming and welcoming.", author: "David Wilson", role: "Patient since 2019" }
  ];

  const nextReview = () => setCurrentReview((prev) => (prev + 1) % reviews.length);
  const prevReview = () => setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);

  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/20">
      
      {/* Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-surface/80 backdrop-blur-lg border-b border-border py-4 shadow-sm' : 'bg-transparent py-6'}`}>
        <div className="container-width flex justify-between items-center">
          <div className="flex items-center gap-3 font-serif text-2xl font-bold text-primary tracking-tight">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-dark rounded-xl flex items-center justify-center text-background shadow-lg shadow-primary/20 rotate-3">
              <Leaf size={20} />
            </div>
            Dr. Khan
          </div>

          <nav className="hidden md:flex items-center gap-10 bg-surface/50 px-8 py-3 rounded-full border border-border/50 backdrop-blur-sm shadow-sm">
            {['About', 'Education', 'Services', 'Reviews', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-semibold text-secondary hover:text-primary transition-colors uppercase tracking-wide">
                {item}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button onClick={() => setBookingOpen(true)} className="hidden md:flex bg-foreground text-background items-center gap-2 py-3 px-6 rounded-full font-medium hover:bg-primary transition-all duration-300 shadow-lg hover:shadow-primary/25">
              <Calendar size={18} />
              <span>Book Now</span>
            </button>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-foreground p-2 bg-surface rounded-lg shadow-sm border border-border">
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-surface border-b border-border shadow-xl py-6 px-6 flex flex-col gap-6 animate-in slide-in-from-top-5">
            {['About', 'Education', 'Services', 'Reviews', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMobileMenuOpen(false)} className="text-xl font-medium text-foreground border-b border-border pb-2">
                {item}
              </a>
            ))}
            <button onClick={() => { setBookingOpen(true); setMobileMenuOpen(false); }} className="bg-primary text-background w-full flex items-center justify-center py-4 text-lg rounded-xl font-bold">
              Book Appointment
            </button>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="about" className="pt-40 pb-24 lg:pt-48 lg:pb-32 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary-light/10 to-transparent -z-10"></div>
        <div className="absolute top-20 left-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl -z-10"></div>

        <div className="container-width grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-surface border border-primary/10 text-primary text-xs font-bold tracking-wider uppercase rounded-full shadow-sm">
              <Sparkles size={14} className="text-accent" />
              <span>Holistic Medical Care</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-serif font-bold text-foreground leading-[1.1]">
              Healing with <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-dark relative">
                Compassion
              </span>
            </h1>
            
            <p className="text-xl text-secondary leading-relaxed max-w-lg font-light">
              Experience a new standard of medical care where modern science meets personalized attention. Your wellness journey starts here.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 pt-4">
              <button onClick={() => setBookingOpen(true)} className="bg-primary text-background px-8 py-4 rounded-2xl font-medium hover:bg-primary-dark transition-all duration-300 shadow-xl shadow-primary/20 flex items-center justify-center gap-2 group">
                Schedule Visit <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <a href="#contact" className="px-8 py-4 rounded-2xl border border-border bg-surface text-foreground font-medium hover:bg-background transition-all duration-300 flex items-center justify-center shadow-sm hover:shadow-md">
                Contact Us
              </a>
            </div>

            <div className="pt-8 flex items-center gap-8 border-t border-border/50">
              <div className="flex -space-x-4">
                {[1,2,3,4].map((i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-2 border-background bg-surface flex items-center justify-center text-xs font-bold text-secondary shadow-sm">
                    <Users size={16} />
                  </div>
                ))}
              </div>
              <div>
                <p className="font-bold text-foreground text-lg">5,000+</p>
                <p className="text-secondary text-sm">Happy Patients</p>
              </div>
            </div>
          </div>

          {/* Hero Image/Card */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md aspect-[4/5] bg-surface rounded-[2.5rem] shadow-2xl border border-border overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5"></div>
              
              {/* Placeholder for Doctor Image */}
              <div className="absolute inset-4 rounded-[2rem] bg-background border border-border flex flex-col items-center justify-center text-center p-8 overflow-hidden">
                <div className="w-full h-full absolute inset-0 bg-gradient-to-b from-transparent to-surface/90 z-10"></div>
                <div className="z-0 opacity-10 absolute inset-0 bg-[radial-gradient(#2dd4bf_1px,transparent_1px)] [background-size:16px_16px]"></div>
                
                <div className="relative z-20 mt-auto mb-12">
                  <div className="w-24 h-24 bg-surface rounded-2xl shadow-lg flex items-center justify-center text-primary mx-auto mb-6 rotate-3 group-hover:rotate-0 transition-transform duration-500">
                    <Heart size={48} fill="currentColor" className="text-primary/20" />
                    <Heart size={48} className="absolute text-primary" />
                  </div>
                  <h3 className="text-3xl font-serif font-bold text-foreground">Dr. Ayesha Khan</h3>
                  <p className="text-accent font-medium mt-2 uppercase tracking-widest text-sm">MD, FAAP</p>
                </div>
              </div>

              {/* Floating Stats */}
              <div className="absolute bottom-8 left-8 right-8 z-30 bg-surface/80 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-border">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-xs text-secondary uppercase tracking-wider font-bold">Experience</p>
                    <p className="text-2xl font-bold text-primary">15+ Years</p>
                  </div>
                  <div className="h-8 w-px bg-border"></div>
                  <div>
                    <p className="text-xs text-secondary uppercase tracking-wider font-bold">Rating</p>
                    <div className="flex items-center gap-1">
                      <span className="text-2xl font-bold text-primary">4.9</span>
                      <Star size={16} fill="currentColor" className="text-accent" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="section-padding bg-surface rounded-t-[3rem] shadow-[0_-20px_40px_-15px_rgba(0,0,0,0.2)] relative z-20">
        <div className="container-width">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
            <div className="max-w-2xl">
              <span className="section-subtitle">My Journey</span>
              <h2 className="section-title">Education & Qualifications</h2>
              <p className="text-lg text-secondary mt-4">A lifelong commitment to learning and medical excellence.</p>
            </div>
            <div className="hidden md:block w-32 h-1 bg-border rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {education.map((edu, index) => (
              <div key={index} className="bg-background p-8 rounded-3xl border border-border hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 group">
                <div className="w-12 h-12 bg-surface rounded-xl shadow-sm flex items-center justify-center text-secondary mb-6 group-hover:bg-primary group-hover:text-background transition-colors">
                  <GraduationCap size={24} />
                </div>
                <span className="text-accent font-bold text-sm tracking-wider">{edu.year}</span>
                <h3 className="text-xl font-bold text-foreground mt-2 mb-3">{edu.title}</h3>
                <p className="text-foreground/80 font-medium flex items-center gap-2 text-sm mb-4">
                  <Building2 size={16} className="text-secondary" /> {edu.org}
                </p>
                <p className="text-secondary text-sm leading-relaxed border-t border-border pt-4">{edu.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding bg-background">
        <div className="container-width">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="section-subtitle">What We Offer</span>
            <h2 className="section-title">Comprehensive Services</h2>
            <p className="text-lg text-secondary mt-4">Tailored medical solutions for every stage of life.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-surface p-8 rounded-3xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary-light/20 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150 duration-500"></div>
                
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-background rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-background transition-colors duration-300 shadow-sm">
                    <service.icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                  <p className="text-secondary leading-relaxed text-sm">{service.desc}</p>
                  
                  <div className="mt-6 flex items-center text-primary font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                    Learn more <ArrowRight size={16} className="ml-2" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section (Carousel) */}
      <section id="reviews" className="section-padding bg-primary-light text-foreground relative overflow-hidden rounded-[3rem] my-12 mx-4 lg:mx-8 border border-border">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        </div>

        <div className="container-width relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">Testimonials</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">Trusted by Families</h2>
              <p className="text-secondary text-lg leading-relaxed mb-12 max-w-md">
                We take pride in providing exceptional care. Here&apos;s what our patients have to say about their experience with Dr. Khan.
              </p>
              
              <div className="flex gap-4">
                <button onClick={prevReview} className="w-14 h-14 rounded-full border border-border flex items-center justify-center hover:bg-surface hover:text-primary transition-all">
                  <ChevronLeft size={24} />
                </button>
                <button onClick={nextReview} className="w-14 h-14 rounded-full border border-border flex items-center justify-center hover:bg-surface hover:text-primary transition-all">
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>

            <div className="bg-surface/50 backdrop-blur-md p-10 md:p-14 rounded-3xl border border-border relative">
              <Quote size={80} className="absolute -top-6 -right-6 text-primary/10 rotate-12" />
              
              <div className="flex gap-1 text-accent mb-8">
                {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
              </div>
              
              <p className="text-xl md:text-2xl font-serif leading-relaxed italic mb-10 text-foreground">
                &quot;{reviews[currentReview].text}&quot;
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-background rounded-full flex items-center justify-center text-primary font-bold text-lg border border-border">
                  {reviews[currentReview].author[0]}
                </div>
                <div>
                  <h4 className="text-lg font-bold">{reviews[currentReview].author}</h4>
                  <p className="text-secondary text-sm">{reviews[currentReview].role}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-background">
        <div className="container-width">
          <div className="bg-surface rounded-[2.5rem] shadow-xl border border-border overflow-hidden">
            <div className="grid lg:grid-cols-5">
              {/* Contact Info */}
              <div className="lg:col-span-2 p-12 bg-surface text-foreground relative overflow-hidden flex flex-col justify-between border-r border-border">
                <div className="relative z-10">
                  <h2 className="text-3xl font-serif font-bold mb-2">Get in Touch</h2>
                  <p className="text-secondary mb-12">We&apos;d love to hear from you.</p>
                  
                  <div className="space-y-8">
                    <div className="flex items-start gap-4">
                      <MapPin className="text-accent mt-1" size={24} />
                      <div>
                        <h3 className="font-bold text-lg">Visit Us</h3>
                        <p className="text-secondary text-sm leading-relaxed">123 Medical Center Dr<br/>Suite 200, New York, NY</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Phone className="text-accent mt-1" size={24} />
                      <div>
                        <h3 className="font-bold text-lg">Call Us</h3>
                        <p className="text-secondary text-sm leading-relaxed">(555) 123-4567</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Mail className="text-accent mt-1" size={24} />
                      <div>
                        <h3 className="font-bold text-lg">Email Us</h3>
                        <p className="text-secondary text-sm leading-relaxed">zainabgilani2226@gmail.com</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="relative z-10 mt-12 pt-12 border-t border-border">
                  <div className="flex gap-4">
                    <a href="#" className="w-10 h-10 rounded-full bg-background flex items-center justify-center hover:bg-accent hover:text-background transition-colors">
                      <Linkedin size={18} />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-background flex items-center justify-center hover:bg-accent hover:text-background transition-colors">
                      <MessageCircle size={18} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-3 p-12 lg:p-16 bg-background">
                <h2 className="text-2xl font-bold text-foreground mb-8">Send a Message</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-surface border-t border-border pt-16 pb-8">
        <div className="container-width">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
            <div className="flex items-center gap-3 font-serif text-2xl font-bold text-primary">
              <Leaf size={24} className="text-primary" />
              Dr. Khan
            </div>
            <div className="flex gap-8">
              {['About', 'Services', 'Reviews', 'Contact'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-secondary hover:text-primary font-medium transition-colors">
                  {item}
                </a>
              ))}
            </div>
            <p className="text-secondary text-sm">© 2024 Dr. Ayesha Khan.</p>
          </div>
        </div>
      </footer>

      {/* Booking Modal */}
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </div>
  );
}

export default App;
