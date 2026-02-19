"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronRight, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-[90vh] md:min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/alto-clouds.jpg" 
          alt="Vista espetacular do mar de nuvens no Alto da Serra" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/90 via-emerald-950/40 to-emerald-950/90 md:bg-gradient-to-r md:from-emerald-950/80 md:via-emerald-950/40 md:to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl text-white text-center md:text-left"
        >
          <div className="flex items-center gap-2 mb-4 bg-emerald-500/40 backdrop-blur-md w-fit px-4 py-1 rounded-full border border-emerald-400/30 mx-auto md:mx-0">
            <Star className="h-3 w-3 fill-emerald-400 text-emerald-400" />
            <span className="text-[10px] md:text-sm font-medium uppercase tracking-widest">O melhor refúgio de Conservatória</span>
          </div>
          
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-serif font-bold mb-4 md:mb-6 leading-[1.1] md:leading-tight">
            Descubra a paz em meio à <span className="text-emerald-400">natureza</span>
          </h1>
          
          <p className="text-base md:text-xl text-emerald-50/90 mb-8 leading-relaxed max-w-lg mx-auto md:mx-0">
            No Alto da Serra, você encontra o descanso que renova o corpo e a alma.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
            <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white rounded-full px-8 h-12 md:h-14 text-base md:text-lg font-semibold group w-full sm:w-auto">
              Reserve agora
              <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/30 rounded-full px-8 h-12 md:h-14 text-base md:text-lg w-full sm:w-auto">
              Ver Tarifas
            </Button>
          </div>

          <div className="mt-10 md:mt-12 flex items-center justify-center md:justify-start gap-4 md:gap-8 text-emerald-100/90">
            <div className="flex flex-col items-center md:items-start">
              <span className="text-lg md:text-2xl font-bold text-white">✨ Conforto</span>
              <span className="text-[10px] md:text-sm">Toque familiar</span>
            </div>
            <div className="w-px h-8 bg-emerald-400/30" />
            <div className="flex flex-col items-center md:items-start">
              <span className="text-lg md:text-2xl font-bold text-white">🌿 Verde</span>
              <span className="text-[10px] md:text-sm">Serenidade</span>
            </div>
            <div className="w-px h-8 bg-emerald-400/30" />
            <div className="flex flex-col items-center md:items-start">
              <span className="text-lg md:text-2xl font-bold text-white">🌄 Vistas</span>
              <span className="text-[10px] md:text-sm">Inesquecíveis</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;