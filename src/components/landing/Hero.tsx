'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import ScrambledText from './ScrambledText';
import './ScrambledText.css';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section id="inicio" className="relative w-full py-24 md:py-32 bg-secondary/30 overflow-hidden">
        <div className="absolute top-[-10rem] right-[-10rem] w-96 h-96 bg-primary/10 rounded-full filter blur-3xl opacity-50"></div>
        <div className="absolute bottom-[-5rem] left-[-5rem] w-80 h-80 bg-accent/10 rounded-full filter blur-3xl opacity-40"></div>
        
      <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-12 items-center z-10 relative">
        <div className="flex flex-col gap-6 text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-bold text-primary font-headline tracking-tight leading-tight">
            <ScrambledText
                scrambleChars="."
                speed={0.3}
                duration={1}
            >
              Comida casera, corazón contento
            </ScrambledText>
          </h1>
          <p className="text-lg md:text-xl text-foreground/80">
            Nutrimos el futuro de México con platillos deliciosos, balanceados y preparados con el amor de mamá. ¡Directo a la escuela!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-4">
            <Button size="lg" className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-shadow">
              Ver Menú
              <ArrowRight className="ml-2"/>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6">
              Contáctanos
            </Button>
          </div>
        </div>
        <div className="relative h-80 md:h-[28rem] w-full group">
            <div className="absolute -inset-2 bg-gradient-to-br from-accent/50 to-primary/50 rounded-full blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
            <Image
                src="https://placehold.co/600x450.png"
                alt="Niños felices comiendo en la escuela"
                layout="fill"
                objectFit="cover"
                className="relative rounded-2xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500 ease-in-out"
                data-ai-hint="happy children school lunch"
            />
        </div>
      </div>
    </section>
  );
}
