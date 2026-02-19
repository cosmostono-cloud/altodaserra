"use client";

import React from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-emerald-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center gap-3">
            <img src="/images/alto-logo.jpg" alt="Logo Alto da Serra" className="h-12 w-12 rounded-full object-cover border border-emerald-200" />
            <span className="text-xl font-serif font-bold text-emerald-900 hidden sm:block">Alto da Serra</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-emerald-800 font-medium">
            <a href="#inicio" className="hover:text-emerald-600 transition-colors">Início</a>
            <a href="#sobre" className="hover:text-emerald-600 transition-colors">Sobre</a>
            <a href="#servicos" className="hover:text-emerald-600 transition-colors">Serviços</a>
            <a href="#localizacao" className="hover:text-emerald-600 transition-colors">Localização</a>
            <Button className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full px-6">
              Reservar Agora
            </Button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-emerald-900">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-emerald-100 p-4 space-y-4 flex flex-col items-center animate-in slide-in-from-top duration-300">
          <a href="#inicio" onClick={() => setIsOpen(false)} className="text-emerald-800 py-2">Início</a>
          <a href="#sobre" onClick={() => setIsOpen(false)} className="text-emerald-800 py-2">Sobre</a>
          <a href="#servicos" onClick={() => setIsOpen(false)} className="text-emerald-800 py-2">Serviços</a>
          <a href="#localizacao" onClick={() => setIsOpen(false)} className="text-emerald-800 py-2">Localização</a>
          <Button className="bg-emerald-600 hover:bg-emerald-700 text-white w-full rounded-full">
            Reservar Agora
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;