"use client"
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { reviewsData } from '@/lib/data/reviews';

export default function Reviews() {
  const [currentReview, setCurrentReview] = useState(0);

  const nextReview = () => setCurrentReview((prev) => (prev + 1) % reviewsData.length);
  const prevReview = () => setCurrentReview((prev) => (prev - 1 + reviewsData.length) % reviewsData.length);

  return (
    <section id="testimonials" className="section-padding bg-primary-light text-foreground relative overflow-hidden rounded-[3rem] my-12 mx-4 lg:mx-8 border border-border py-20 px-6">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">Testimonials</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">Trusted by Families</h2>
            <p className="text-secondary text-lg leading-relaxed mb-12 max-w-md">
              We take pride in providing exceptional care. Here&apos;s what our patients have to say about their experience with Dr. Khan.
            </p>
            
            <div className="flex gap-4">
              <button onClick={prevReview} className="w-14 h-14 rounded-full border border-border flex items-center justify-center hover:bg-surface hover:text-primary transition-all bg-white">
                <ChevronLeft size={24} />
              </button>
              <button onClick={nextReview} className="w-14 h-14 rounded-full border border-border flex items-center justify-center hover:bg-surface hover:text-primary transition-all bg-white">
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          <div className="bg-white/50 backdrop-blur-md p-10 md:p-14 rounded-3xl border border-border relative">
            <Quote size={80} className="absolute -top-6 -right-6 text-primary/10 rotate-12" />
            
            <div className="flex gap-1 text-yellow-500 mb-8">
              {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
            </div>
            
            <p className="text-xl md:text-2xl font-serif leading-relaxed italic mb-10 text-foreground">
              &quot;{reviewsData[currentReview].text}&quot;
            </p>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary font-bold text-lg border border-border shadow-sm">
                {reviewsData[currentReview].author[0]}
              </div>
              <div>
                <h4 className="text-lg font-bold">{reviewsData[currentReview].author}</h4>
                <p className="text-secondary text-sm">{reviewsData[currentReview].role}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
