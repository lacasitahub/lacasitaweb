'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export function SchoolImageSection() {
  return (
    <section id="escuela" className="py-20 md:py-32 bg-primary/5 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="max-w-7xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div className="relative group overflow-hidden rounded-3xl shadow-2xl">
            <Image
              src="/escuela.png"
              alt="Comunidad escolar La Casita"
              width={1600}
              height={900}
              className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
              data-ai-hint="school playground"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
