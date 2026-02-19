"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Coffee, Camera, Footprints, Users, Sparkles, BedDouble } from 'lucide-react';

const features = [
  {
    icon: <BedDouble className="h-8 w-8" />,
    title: "Quartos Confortáveis",
    desc: "Decoração acolhedora pensada no seu descanso."
  },
  {
    icon: <Coffee className="h-8 w-8" />,
    title: "Café da Manhã",
    desc: "Fresquinho com sabores típicos da nossa região."
  },
  {
    icon: <Camera className="h-8 w-8" />,
    title: "Cantinhos Instagramáveis",
    desc: "Cenários lindos em meio ao verde para suas fotos."
  },
  {
    icon: <Footprints className="h-8 w-8" />,
    title: "Trilhas Leves",
    desc: "Contato direto com a natureza preservada."
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Para Todos",
    desc: "Experiências para casais, amigos e famílias."
  },
  {
    icon: <Sparkles className="h-8 w-8" />,
    title: "Ambiente Romântico",
    desc: "Tranquilidade ideal para recarregar as energias."
  }
];

const Features = () => {
  return (
    <section id="servicos" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-emerald-600 font-semibold tracking-widest uppercase mb-4">🌸 O Que Oferecemos</h2>
          <h3 className="text-4xl font-serif font-bold text-emerald-950">
            Tudo o que você precisa para dias inesquecíveis
          </h3>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl bg-emerald-50 border border-emerald-100 hover:shadow-lg hover:shadow-emerald-100/50 transition-all group"
            >
              <div className="text-emerald-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                {f.icon}
              </div>
              <h4 className="text-xl font-bold text-emerald-900 mb-3">{f.title}</h4>
              <p className="text-emerald-800/70 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;