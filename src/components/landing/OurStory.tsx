import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Bean, Building, Handshake, School, ShieldCheck } from 'lucide-react';

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
            Un viaje de sabor y cuidado que empezó en la cocina de una madre mexicana y hoy alimenta el futuro de México.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 top-0 h-full w-0.5 bg-primary/20 hidden md:block"></div>
          
          <div className="space-y-12 md:space-y-0">
            {timelineEvents.map((event, index) => (
              <div key={index} className="relative flex items-center md:justify-center">
                <div className="md:w-1/2 flex md:justify-end md:pr-12 md:text-right data-[side=right]:order-last data-[side=right]:md:justify-start data-[side=right]:md:pl-12 data-[side=right]:md:pr-0 data-[side=right]:md:text-left" data-side={index % 2 === 0 ? 'left' : 'right'}>
                   <Card className="w-full md:max-w-md shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardHeader>
                      <CardTitle className="text-2xl text-primary">{event.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-lg font-bold mb-2">{event.year}</p>
                      <p className="text-foreground/80">{event.description}</p>
                    </CardContent>
                  </Card>
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 bg-background p-3 rounded-full border-4 border-primary/20 hidden md:flex">
                  <event.icon className="w-8 h-8 text-primary" />
                </div>
                 <div className="w-1/2 hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 text-center max-w-4xl mx-auto">
            <ShieldCheck className="w-16 h-16 text-accent mx-auto mb-4"/>
            <h3 className="text-2xl font-bold text-primary">Calidad y Confianza</h3>
            <p className="mt-2 text-md text-foreground/80">
                Nuestro personal cuenta con entrenamiento bajo el <span className="font-bold">Certificado H</span>, el máximo estándar de higiene y manejo de alimentos, garantizando la seguridad y bienestar de tus hijos.
            </p>
        </div>
      </div>
    </section>
  );
}
