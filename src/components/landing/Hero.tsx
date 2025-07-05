'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import RotatingText from './RotatingText';
import { motion } from 'framer-motion';
import Link from 'next/link';

export function Hero() {
  const rotatingTexts = ['Corazón', 'Estudiante', 'Maestro', 'Futuro'];

  return (
    <section id="inicio" className="relative w-full py-24 md:py-32 bg-background overflow-hidden">
      <div className="absolute top-[-10rem] right-[-10rem] w-96 h-96 bg-primary/10 rounded-full filter blur-3xl opacity-50"></div>
      <div className="absolute bottom-[-5rem] left-[-5rem] w-80 h-80 bg-accent/10 rounded-full filter blur-3xl opacity-40"></div>
        
      <div className="container mx-auto px-4 md:px-6 z-10 relative">
        <div className="flex flex-col items-center text-center gap-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <Image
                    src="/logo2.png"
                    alt="La Casita Logo"
                    width={200}
                    height={200}
                    className="shadow-5xl shadow-primary filter blur-5xl"
                    priority
                    data-ai-hint="logo"
                />
            </motion.div>

          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-primary tracking-tight leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Comida casera para un
            <br/>
            <RotatingText
                texts={rotatingTexts}
                mainClassName="text-4xl md:text-7xl text-accent inline-block mx-2 font-bold"
                staggerDuration={0.02}
                splitLevelClassName="overflow-hidden pb-1"
                staggerFrom="center"
            />
            contento
          </motion.h1>

          <motion.p 
            className="text-lg md:text-xl text-foreground/80 max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Nutrimos el futuro de México con platillos deliciosos, balanceados y preparados con el amor de mamá. ¡Directo a la escuela!
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Link href="/ordereat">
              <Button size="lg" className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-shadow">
                Ordena en OrderEat
                <ArrowRight className="ml-2"/>
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6">
              Contáctanos
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
