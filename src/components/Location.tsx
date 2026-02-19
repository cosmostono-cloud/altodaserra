"use client";

import React from 'react';
import { MapPin, Compass, Waves, Sun, Moon } from 'lucide-react';

const Location = () => {
  return (
    <section id="localizacao" className="py-24 bg-emerald-900 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
        <Compass className="w-full h-full rotate-12" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-emerald-400 font-semibold tracking-widest uppercase mb-4">📍 Localização</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold mb-8">
              No coração das montanhas de Conservatória
            </h3>
            <p className="text-xl text-emerald-100/80 mb-12 leading-relaxed">
              Perdida entre as montanhas e o verde de Conservatória — RJ, a Pousada Alto da Serra é o ponto de partida ideal para:
            </p>

            <div className="grid sm:grid-cols-2 gap-8">
              <div className="flex items-center gap-4">
                <div className="bg-emerald-800 p-3 rounded-full">
                  <MapPin className="text-emerald-400 h-6 w-6" />
                </div>
                <span className="text-lg">Passeios pela cidade</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-emerald-800 p-3 rounded-full">
                  <Waves className="text-emerald-400 h-6 w-6" />
                </div>
                <span className="text-lg">Cachoeiras e trilhas</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-emerald-800 p-3 rounded-full">
                  <Sun className="text-emerald-400 h-6 w-6" />
                </div>
                <span className="text-lg">Tardes no jardim</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-emerald-800 p-3 rounded-full">
                  <Moon className="text-emerald-400 h-6 w-6" />
                </div>
                <span className="text-lg">Noites sob as estrelas</span>
              </div>
            </div>

            <div className="mt-12 p-6 bg-emerald-800/50 rounded-2xl border border-emerald-700">
              <p className="text-lg italic">"Você não precisa ir longe para viver dias inesquecíveis… é só chegar!"</p>
            </div>
          </div>

          <div className="h-[400px] rounded-3xl overflow-hidden shadow-2xl border-4 border-emerald-800">
            {/* Placeholder for Map */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3689.87654321!2d-43.9123456!3d-22.3123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDE4JzQ0LjQiUyA0M8KwNTQnNDQuNCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;