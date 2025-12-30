"use client";
import { servicesData } from "@/lib/data/services";

export default function Services() {
  return (
    <section id="services" className="py-20 bg-surface px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-primary">Services I Give</h2>
        <p className="text-secondary mt-4">
          Holistic and personalized healthcare solutions for children.
        </p>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={i}
                className="bg-surface rounded-2xl shadow-md p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 text-left border border-border"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="p-4 bg-primary-light rounded-full w-16 h-16 flex items-center justify-center mb-4">
                    <Icon className="text-primary w-8 h-8 transition-all duration-300" />
                  </div>
                  <h3 className="font-semibold text-lg text-primary-dark">{s.title}</h3>
                  <p className="text-secondary mt-2">{s.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
