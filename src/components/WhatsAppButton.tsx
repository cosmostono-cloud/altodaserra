"use client";

import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const phoneNumber = "24981592780";
  const message = encodeURIComponent("Olá! Gostaria de saber mais sobre as reservas na Pousada Alto da Serra.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a 
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-3.5 md:p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 group flex items-center gap-2"
    >
      <span className="hidden md:block max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 font-bold whitespace-nowrap">
        Fale Conosco
      </span>
      <MessageCircle size={28} className="md:w-8 md:h-8" fill="currentColor" />
    </a>
  );
};

export default WhatsAppButton;