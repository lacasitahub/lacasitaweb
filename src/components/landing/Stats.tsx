'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import GlareHover from './GlareHover';
import './GlareHover.css';
import CountUp from './CountUp';

const stats = [
  {
    value: '3',
    label: 'Escuelas',
    duration: 4,
  },
  {
    value: '+5,000',
    label: 'Alumnos y Maestros',
    duration: 2.5,
  },
  {
    value: '+20,000',
    label: 'Comidas Anuales',
    duration: 3,
  },
];

const StatCard = ({ stat, index }: { stat: typeof stats[0], index: number }) => {
  const ref = useRef(null);

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: index * 0.1 } },
  };

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover={{ scale: 1.1 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <GlareHover
        width="100%"
        height="100%"
        borderRadius="var(--radius)"
        background="hsl(var(--card))"
        borderColor="hsl(var(--border))"
        glareColor="hsl(var(--primary))"
        glareColorLeave="hsl(var(--accent))"
        glareOpacity={0.05}
        className="flex items-center justify-center group"
      >
        <div className="p-8 text-center">
          <div
            className="text-6xl md:text-7xl font-bold text-primary tracking-tight font-headline transition-colors duration-300 group-hover:text-accent"
          >
            {stat.value.startsWith('+') ? '+' : ''}
            <CountUp from={0} to={parseInt(stat.value.replace(/[^0-9]/g, ''), 10)} duration={stat.duration} separator="," />
          </div>
          <div className="text-lg md:text-xl font-bold text-foreground/90 mt-2 capitalize">
            {stat.label}
          </div>
        </div>
      </GlareHover>
    </motion.div>
  );
};

export function Stats() {
  return (
    <section className="py-20 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
