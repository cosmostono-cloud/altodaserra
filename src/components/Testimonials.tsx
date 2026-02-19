"use client";

import React from 'react';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    text: "Lugar encantador, paz total, melhor café da manhã que já tomei!",
    author: "Maria Silva",
    rating: 5
  },
  {
    text: "Voltaria mil vezes — recomendo demais! A hospitalidade é nota mil.",
    author: "João Pereira",
    rating: 5
  },
  {
    text: "Uma experiência única em Conservatória. O verde da pousada renova as energias.",
    author: "Ana Costa",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-emerald-600 font-semibold tracking-widest uppercase mb-4">📣 Depoimentos</h2>
          <h3 className="text-4xl font-serif font-bold text-emerald-950">
            Quem já viveu com a gente recomenda
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-emerald-50 p-8 rounded-3xl relative">
              <Quote className="absolute top-6 right-6 text-emerald-200 h-12 w-12" />
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-emerald-400 text-emerald-400" />
                ))}
              </div>
              <p className="text-emerald-900 text-lg italic mb-6 leading-relaxed">"{t.text}"</p>
              <p className="font-bold text-emerald-950">— {t.author}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-emerald-800/60 font-medium">
            ✨ Cada sorriso que recebemos nos inspira a fazer ainda mais.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;