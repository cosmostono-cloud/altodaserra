"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Leaf, Mountain } from 'lucide-react';

const About = () => {
  return (
    <section id="sobre" className="py-16 md:py-24 bg-emerald-50/50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative order-2 md:order-1"
          >
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              <div className="aspect-[4/5] rounded-2xl md:rounded-3xl overflow-hidden shadow-lg">
                <img 
                  src="/images/alto-exterior.jpg" 
                  alt="Fachada da Pousada" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[4/5] rounded-2xl md:rounded-3xl overflow-hidden shadow-lg mt-6 md:mt-8">
                <img 
                  src="/images/alto-dining.jpg" 
                  alt="Área do Café da Manhã" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white p-4 md:p-6 rounded-xl md:rounded-2xl shadow-xl w-[90%] md:max-w-[280px] text-center">
              <p className="text-emerald-900 font-serif italic text-base md:text-lg">
                "Não é só hospedagem… é encontro com tranquilidade."
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 md:order-2"
          >
            <h2 className="text-emerald-600 font-semibold tracking-widest uppercase mb-3 text-sm md:text-base">🌱 Sobre a Pousada</h2>
            <h3 className="text-3xl md:text-5xl font-serif font-bold text-emerald-950 mb-6 leading-tight">
              Sinta-se em casa com o toque especial da natureza
            </h3>
            <p className="text-base md:text-lg text-emerald-800/80 mb-8 leading-relaxed">
              No Alto da Serra, cada detalhe foi pensado para que você desacelere. Somos um espaço onde o verde não é apenas uma cor, mas um estilo de vida.
            </p>

            <div className="space-y-6">
              {[
                { icon: <Mountain />, title: "Nossa proposta", desc: "Silêncio de qualidade e vistas que inspiram." },
                { icon: <Leaf />, title: "Conforto & Aconchego", desc: "Quartos pensados para relaxar totalmente." },
                { icon: <Heart />, title: "Hospitalidade", desc: "Aqui você é parte da nossa história." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="bg-emerald-100 p-3 rounded-xl h-fit text-emerald-600">
                    {React.cloneElement(item.icon as React.ReactElement, { className: "h-5 w-5 md:h-6 md:w-6" })}
                  </div>
                  <div>
                    <h4 className="text-lg md:text-xl font-bold text-emerald-900 mb-1">{item.title}</h4>
                    <p className="text-sm md:text-base text-emerald-800/70">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;