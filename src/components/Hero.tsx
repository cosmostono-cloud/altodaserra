"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronRight, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=2000" 
          alt="Natureza em Conservatória" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/80 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl text-white"
        >
          <div className="flex items-center gap-2 mb-4 bg-emerald-500/20 backdrop-blur-sm w-fit px-4 py-1 rounded-full border border-emerald-400/30">
            <Star className="h-4 w-4 fill-emerald-400 text-emerald-400" />
            <span className="text-sm font-medium uppercase tracking-wider">O melhor refúgio de Conservatória</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
            Descubra um refúgio de paz em meio à <span className="text-emerald-400">natureza</span>
          </h1>
          
          <p className="text-xl text-emerald-50 mb-8 leading-relaxed">
            Aqui no Alto da Serra, você encontra descanso, charme e experiências que renovam o corpo e a alma. Imagine acordar com o canto dos pássaros e respirar o ar puro das montanhas.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white rounded-full px-8 h-14 text-lg font-semibold group">
              Reserve sua estadia agora
              <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/30 rounded-full px-8 h-14 text-lg">
              Ver Tarifas
            </Button>
          </div>

          <div className="mt-12 flex items-center gap-6 text-emerald-100/80">
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-white">✨ Conforto</span>
              <span className="text-sm">Toque familiar</span>
            </div>
            <div className="w-px h-10 bg-emerald-400/30" />
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-white">🌿 Verde</span>
              <span className="text-sm">Serenidade total</span>
            </div>
            <div className="w-px h-10 bg-emerald-400/30" />
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-white">🌄 Vistas</span>
              <span className="text-sm">Inesquecíveis</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;