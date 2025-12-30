"use client"
import { healthTipsData } from "@/lib/data/healthTips";

export default function HealthTips() {
  return (
    <section id="knowledge" className="py-20 bg-gradient-to-r from-purple-50 to-teal-50 px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="heading">Health Tips for Parents</h2>
        <p className="text-slate-600 mt-4">Quick, practical advice to keep your children healthy and happy.</p>
        <div className="mt-12 grid md:grid-cols-2 gap-6 text-left">
          {healthTipsData.map((t, i) => (
            <div key={i} className="card">
              <p className="text-slate-700">💡 {t.tip}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
