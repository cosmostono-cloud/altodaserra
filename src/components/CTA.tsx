"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-24 bg-emerald-50">
      <div className="container mx-auto px-4">
        <div className="bg-emerald-600 rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/leaf.png')] opacity-10" />
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8">
              Reserve Sua Estadia
            </h2>
            <p className="text-xl text-emerald-50 mb-12 leading-relaxed">
              💬 Escolha suas datas, relaxe e deixe que a natureza cuide do resto! Estamos ansiosos para receber você.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-white text-emerald-700 hover:bg-emerald-50 rounded-full px-10 h-16 text-xl font-bold shadow-lg">
                Quero Reservar Agora
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 rounded-full px-10 h-16 text-xl font-bold">
                Veja Nossas Tarifas
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;