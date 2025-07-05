'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Bean, Building, Handshake, School, ShieldCheck } from 'lucide-react';
import { cn } from '@/lib/utils';
import dynamic from 'next/dynamic';
import { Skeleton } from '../ui/skeleton';

const CircularGallery = dynamic(() => import('./CircularGallery'), {
  ssr: false,
  loading: () => <Skeleton className="w-full h-[600px]" />,
});

const timelineEvents = [
  {
    year: '2012',
    title: 'Primeros Pedidos',
    description: 'Nace la idea con los primeros pedidos escolares en La Estanzuela, de la mano de Gloria.',
    icon: Bean,
  },
  {
    year: '2019',
    title: 'Fundación',
    description: 'Se funda oficialmente "Cafeterías La Casita", consolidando un sueño de nutrición.',
    icon: Building,
  },
  {
    year: '2022',
    title: 'Alianza con OrderEat',
    description: 'Nos asociamos con OrderEat para facilitar los pedidos y llegar a más familias.',
    icon: Handshake,
  },
  {
    year: '2024-2025',
    title: 'Expansión',
    description: 'Crecemos nuestra presencia a tres importantes escuelas, sirviendo a miles de alumnos.',
    icon: School,
  },
];

export function OurStory() {
  return (
    <section id="historia" className="py-20 md:py-32 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-headline text-primary">Nuestra Historia</h2>
          <p className="mt-4 text-lg text-foreground/80 max-w-3xl mx-auto">
            Un viaje de sabor y cuidado que empezó en una cocina casera y hoy alimenta el futuro de México.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute top-4 bottom-4 w-0.5 bg-primary/20 left-1/2 -translate-x-1/2 hidden md:block" aria-hidden="true" />

          <div className="space-y-12 md:space-y-0">
            {timelineEvents.map((event, index) => (
              <div key={index} className="relative">
                <div className={cn("md:flex items-center", index % 2 !== 0 ? "md:flex-row-reverse" : "md:flex-row")}>
                  
                  <div className="md:w-1/2">
                    <div className={cn("p-1 md:p-4", index % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8 md:text-left")}>
                      <Card className="w-full shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <CardHeader>
                          <CardTitle className="text-2xl text-primary font-headline">{event.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-lg font-bold mb-2">{event.year}</p>
                          <p className="text-foreground/80">{event.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>

                  <div className="md:w-1/2" />
                </div>

                <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-background p-3 rounded-full border-4 border-primary/20 hidden md:flex">
                  <event.icon className="w-8 h-8 text-primary" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-headline text-primary">Nuestros Platillos</h2>
            <p className="mt-4 text-lg text-foreground/80 max-w-3xl mx-auto">
              Una probadita de lo que cocinamos con amor todos los días.
            </p>
          </div>
          <div style={{ height: '600px', position: 'relative' }}>
            <CircularGallery
              bend={3}
              textColor="hsl(var(--primary))"
              borderRadius={0.05}
              scrollEase={0.01}
            />
          </div>
        </div>


        <div className="mt-20 text-center max-w-4xl mx-auto">
            <ShieldCheck className="w-16 h-16 text-primary mx-auto mb-4"/>
            <h3 className="text-2xl font-bold text-primary font-headline">Calidad y Confianza</h3>
            <p className="mt-2 text-md text-foreground/80">
                Nuestro personal cuenta con entrenamiento bajo el <span className="font-bold">Certificado H</span>, el máximo estándar de higiene y manejo de alimentos, garantizando la seguridad y bienestar de tus hijos.
            </p>
        </div>
      </div>
    </section>
  );
}
