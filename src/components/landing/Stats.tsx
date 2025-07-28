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

export function Stats() {
  return (
    <section className="py-20 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => {
            const numericValue = parseInt(stat.value.replace(/[^0-9]/g, ''), 10);
            const prefix = stat.value.startsWith('+') ? '+' : '';

            return (
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
                  <div 
                    className="text-6xl md:text-7xl font-bold text-primary tracking-tight font-headline"
                    style={{
                      textShadow: `
                        2px 2px 0px hsl(var(--primary) / 0.4),
                        4px 4px 0px hsl(var(--primary) / 0.2),
                        6px 6px 0px hsl(var(--primary) / 0.1)
                      `,
                    }}
                  >
                    {prefix}
                    <CountUp from={0} to={numericValue} duration={stat.duration} separator="," />
                  </div>
                  <div className="text-lg md:text-xl font-bold text-foreground/90 mt-2 capitalize">
                    {stat.label}
                  </div>
                </div>
              </GlareHover>
            );
          })}
        </div>
      </div>
    </section>
  );
}
