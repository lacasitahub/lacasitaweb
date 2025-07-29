'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Download, Heart, Leaf, ShieldCheck, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';
import dynamic from 'next/dynamic';
import { Skeleton } from '../ui/skeleton';
import { Button } from '../ui/button';

const CircularGallery = dynamic(() => import('./CircularGallery'), {
  ssr: false,
  loading: () => <Skeleton className="w-full h-[600px]" />,
});

export function OurStory() {

  return (
    <section id="historia" className="py-20 md:py-32 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-headline text-primary">Nosotros...</h2>
          <p className="mt-4 text-lg text-foreground/80 max-w-4xl mx-auto">
            Somos una empresa familiar con más de 10 años de experiencia entregando el mejor servicio, calidad y sabor en las instituciones educativas mexicanas. Ofrecemos el mejor servicio integral de cafeterías escolares en la Zona Norte del país.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto text-center items-start">
            <Card className="shadow-none border-none bg-transparent">
              <CardHeader className="items-center">
                <Heart className="w-12 h-12 text-primary mb-4"/>
                <CardTitle>Empresa Familiar</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80">
                  Una empresa 100% mexicana, nacida del amor por la buena comida y el cuidado de los niños.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-xl bg-card border-primary/20 border-2 -translate-y-4">
                <CardHeader className="items-center">
                    <ShieldCheck className="w-16 h-16 text-primary mb-4"/>
                    <CardTitle className="text-2xl font-bold text-primary font-headline">Calidad e Higiene</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="mt-2 text-md text-foreground/80">
                        Nuestro personal cuenta con entrenamiento bajo el <span className="font-bold">Certificado H</span>, el máximo estándar de higiene y manejo de alimentos, garantizando la seguridad y bienestar de tus hijos.
                    </p>
                </CardContent>
            </Card>

            <Card className="shadow-none border-none bg-transparent">
              <CardHeader className="items-center">
                  <Leaf className="w-12 h-12 text-primary mb-4"/>
                  <CardTitle>Apoyo Local</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80">
                    Utilizamos ingredientes locales y frescos, apoyando la economía mexicana y ofreciendo menús variados.
                </p>
              </CardContent>
            </Card>
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
      </div>
    </section>
  );
}
