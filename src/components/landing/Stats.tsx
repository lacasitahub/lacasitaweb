import GlareHover from './GlareHover';
import './GlareHover.css';

const stats = [
  {
    value: '3',
    label: 'Escuelas',
  },
  {
    value: '+5,000',
    label: 'Alumnos y Maestros',
  },
  {
    value: '+20,000',
    label: 'Comidas Anuales',
  },
];

export function Stats() {
  return (
    <section className="py-20 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <GlareHover
              key={index}
              width="100%"
              height="100%"
              borderRadius="var(--radius)"
              background="hsl(var(--card))"
              borderColor="hsl(var(--border))"
              glareColor="hsl(var(--primary))"
              glareOpacity={0.05}
              className="flex items-center justify-center"
            >
              <div className="p-8 text-center">
                <div className="text-6xl md:text-7xl font-bold text-primary tracking-tight font-headline">
                  {stat.value}
                </div>
                <div className="text-lg md:text-xl font-bold text-foreground/90 mt-2 capitalize">
                  {stat.label}
                </div>
              </div>
            </GlareHover>
          ))}
        </div>
      </div>
    </section>
  );
}
