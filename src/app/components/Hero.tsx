"use client"
import { Calendar, MessageCircle, Users, Heart } from "lucide-react";
import { heroData } from "@/lib/data/hero";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-20 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden" id="hero">
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <span className="tag">{heroData.tag}</span>
            <h1 className="heading">
              {heroData.name} <span className="highlight">{heroData.highlight}</span>
            </h1>
            <p className="subheading">
              {heroData.subheading} <span className="text-primary font-semibold">{heroData.subheadingHighlight}</span>
            </p>
            <p className="text-lg text-secondary">
              {heroData.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="btn-primary flex items-center gap-2">
                <Calendar size={20} /> Book Appointment
              </button>
              <a href={heroData.whatsappLink} className="btn-outline flex items-center gap-2">
                <MessageCircle size={20} /> WhatsApp
              </a>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative">
            <div className="relative aspect-square rounded-full bg-gradient-to-br from-primary-light via-white to-primary-light p-8 shadow-2xl">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                <div className="text-center text-secondary/50">
                  <Users size={80} className="mx-auto mb-4" />
                  <p className="text-lg font-medium">Doctor Portrait</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-surface rounded-2xl shadow-xl p-4 animate-float">
              <div className="flex items-center gap-3">
                <div className="bg-gradient-to-br from-primary to-primary-dark rounded-full p-3">
                  <Heart size={24} className="text-white" />
                </div>
                <div>
                  <p className="text-sm text-secondary">{heroData.stats.label}</p>
                  <p className="text-2xl font-bold text-foreground">{heroData.stats.value}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
