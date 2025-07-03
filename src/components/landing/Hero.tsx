import Image from 'next/image';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section id="inicio" className="relative w-full py-20 md:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-6 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold text-primary font-headline tracking-tight">
            Comida con amor, sabor casero y nutrición real
          </h1>
          <p className="text-lg md:text-xl text-foreground/80">
            Más de 20,000 comidas servidas anualmente para cuidar la alimentación de estudiantes y maestros.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-4">
            <Button size="lg" className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-shadow">
              Ordena ahora en OrderEat
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6">
              Visita nuestra cafetería
            </Button>
          </div>
        </div>
        <div className="relative h-64 md:h-full w-full rounded-2xl shadow-2xl overflow-hidden group">
            <Image
                src="https://placehold.co/600x400.png"
                alt="Niños comiendo saludablemente"
                layout="fill"
                objectFit="cover"
                className="transform group-hover:scale-105 transition-transform duration-500 ease-in-out"
                data-ai-hint="happy children eating"
            />
             <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
        </div>
      </div>
    </section>
  );
}
