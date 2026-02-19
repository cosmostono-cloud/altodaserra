"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Leaf, Mountain } from 'lucide-react';

const About = () => {
  return (
    <section id="sobre" className="py-24 bg-emerald-50/50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-xl">
                <img 
                  src="/images/alto-exterior.jpg" 
                  alt="Fachada da Pousada" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-xl mt-8">
                <img 
                  src="/images/alto-dining.jpg" 
                  alt="Área do Café da Manhã" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-white p-6 rounded-2xl shadow-xl max-w-[280px] text-center">
              <p className="text-emerald-900 font-serif italic text-lg">
                "Não é só hospedagem… é encontro com tranquilidade."
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-emerald-600 font-semibold tracking-widest uppercase mb-4">🌱 Sobre a Pousada</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-emerald-950 mb-6">
              Sinta-se em casa com o toque especial da natureza
            </h3>
            <p className="text-lg text-emerald-800/80 mb-8 leading-relaxed">
              No Alto da Serra, cada detalhe foi pensado para que você desacelere. Somos um espaço onde o verde não é apenas uma cor, mas um estilo de vida.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="bg-emerald-100 p-3 rounded-xl h-fit">
                  <Mountain className="text-emerald-600 h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-emerald-900 mb-1">Nossa proposta</h4>
                  <p className="text-emerald-800/70">Silêncio de qualidade, vistas que inspiram e momentos que ficam na memória.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-emerald-100 p-3 rounded-xl h-fit">
                  <Leaf className="text-emerald-600 h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-emerald-900 mb-1">Conforto & Aconchego</h4>
                  <p className="text-emerald-800/70">Quartos pensados para relaxar e áreas externas que convidam ao descanso.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-emerald-100 p-3 rounded-xl h-fit">
                  <Heart className="text-emerald-600 h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-emerald-900 mb-1">Hospitalidade de verdade</h4>
                  <p className="text-emerald-800/70">Aqui você não é só um hóspede — é parte da nossa história.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;