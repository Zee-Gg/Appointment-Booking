"use client"
import { philosophyData } from "@/lib/data/philosophy";

export default function Philosophy() {
  return (
    <section id="philosophy" className="py-20 bg-gradient-to-br from-primary-light/30 to-white px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="heading">My Philosophy of Care</h2>
        <blockquote className="mt-6 italic text-lg text-secondary">
          “{philosophyData.quote}”
        </blockquote>
      </div>
    </section>
  )
}

