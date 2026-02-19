"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Coffee, Camera, Footprints, Users, Sparkles, BedDouble } from 'lucide-react';

const features = [
  {
    icon: <BedDouble className="h-6 w-6 md:h-8 md:w-8" />,
    title: "Quartos Confortáveis",
    desc: "Decoração acolhedora pensada no seu descanso."
  },
  {
    icon: <Coffee className="h-6 w-6 md:h-8 md:w-8" />,
    title: "Café da Manhã",
    desc: "Fresquinho com sabores típicos da nossa região."
  },
  {
    icon: <Camera className="h-6 w-6 md:h-8 md:w-8" />,
    title: "Cantinhos Instagramáveis",
    desc: "Cenários lindos em meio ao verde para suas fotos."
  },
  {
    icon: <Footprints className="h-6 w-6 md:h-8 md:w-8" />,
    title: "Trilhas Leves",
    desc: "Contato direto com a natureza preservada."
  },
  {
    icon: <Users className="h-6 w-6 md:h-8 md:w-8" />,
    title: "Para Todos",
    desc: "Experiências para casais, amigos e famílias."
  },
  {
    icon: <Sparkles className="h-6 w-6 md:h-8 md:w-8" />,
    title: "Ambiente Romântico",
    desc: "Tranquilidade ideal para recarregar as energias."
  }
];

const galleryImages = [
  "/images/alto-pool-view.jpg",
  "/images/alto-room.jpg",
  "/images/alto-balcony.jpg",
  "/images/alto-pool-deck.jpg"
];

const Features = () => {
  return (
    <section id="servicos" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-emerald-600 font-semibold tracking-widest uppercase mb-3 text-sm md:text-base">🌸 O Que Oferecemos</h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-emerald-950">
            Tudo o que você precisa para dias inesquecíveis
          </h3>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-24">
          {features.map((f, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 md:p-8 rounded-3xl bg-emerald-50 border border-emerald-100 hover:shadow-lg hover:shadow-emerald-100/50 transition-all group"
            >
              <div className="text-emerald-600 mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                {f.icon}
              </div>
              <h4 className="text-lg md:text-xl font-bold text-emerald-900 mb-2 md:mb-3">{f.title}</h4>
              <p className="text-sm md:text-base text-emerald-800/70 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Galeria Visual Estratégica */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {galleryImages.map((img, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="aspect-square rounded-2xl md:rounded-3xl overflow-hidden shadow-md"
            >
              <img src={img} alt={`Galeria ${idx}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;