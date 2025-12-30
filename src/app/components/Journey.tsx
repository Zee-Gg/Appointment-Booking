"use client"
import { journeyData } from "@/lib/data/journey";

export default function Journey() {
  return (
    <section id="about" className="py-20 bg-white px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="heading">My Journey</h2>
        <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
          {journeyData.description}
        </p>
        <div className="mt-10 grid md:grid-cols-3 gap-8">
          {journeyData.cards.map((card, index) => (
            <div key={index} className="card">
              <h3 className="font-semibold text-lg">{card.title}</h3>
              <p className="text-slate-500">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
