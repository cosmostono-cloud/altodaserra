"use client";

import React from 'react';
import { Instagram, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-emerald-950 text-emerald-100/80 py-20 border-t border-emerald-900">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img src="/images/alto-logo.jpg" alt="Logo Alto da Serra" className="h-12 w-12 rounded-full object-cover" />
              <span className="text-2xl font-serif font-bold text-white">Alto da Serra</span>
            </div>
            <p className="leading-relaxed">
              Seu refúgio de paz e natureza em Conservatória, RJ. Onde o descanso encontra a hospitalidade.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Links Rápidos</h4>
            <ul className="space-y-4">
              <li><a href="#inicio" className="hover:text-emerald-400 transition-colors">Início</a></li>
              <li><a href="#sobre" className="hover:text-emerald-400 transition-colors">Sobre Nós</a></li>
              <li><a href="#servicos" className="hover:text-emerald-400 transition-colors">Serviços</a></li>
              <li><a href="#localizacao" className="hover:text-emerald-400 transition-colors">Localização</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-emerald-400" />
                (24) 98159-2780
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-emerald-400" />
                contato@altodaserra.com.br
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={18} className="text-emerald-400" />
                Conservatória, RJ
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Conecte-se</h4>
            <div className="flex gap-4 mb-6">
              <a 
                href="https://instagram.com/altodaserrapousada" 
                target="_blank" 
                className="bg-emerald-900 p-3 rounded-full hover:bg-emerald-800 transition-colors text-emerald-400"
              >
                <Instagram size={24} />
              </a>
              <a 
                href="#" 
                className="bg-emerald-900 p-3 rounded-full hover:bg-emerald-800 transition-colors text-emerald-400 font-bold px-4"
              >
                TripAdvisor
              </a>
            </div>
            <p className="text-sm">Siga-nos para ver mais do nosso paraíso verde.</p>
          </div>
        </div>

        <div className="pt-8 border-t border-emerald-900 text-center text-sm">
          <p>© {new Date().getFullYear()} Pousada Alto da Serra. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;