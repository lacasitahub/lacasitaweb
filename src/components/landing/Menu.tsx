import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import menuData from '@/data/menu.json';
import { EggFried, Soup, Cookie, GlassWater } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const iconMap: { [key: string]: LucideIcon } = {
  'Desayunos': EggFried,
  'Platos fuertes': Soup,
  'Snacks': Cookie,
  'Bebidas': GlassWater,
};

export function Menu() {
  return (
    <section id="menu" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-headline text-primary">Nuestro Menú</h2>
          <p className="mt-4 text-lg text-foreground/80 max-w-3xl mx-auto">
            Platillos balanceados y deliciosos, preparados diariamente con ingredientes frescos y de la más alta calidad.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {menuData.map((category) => {
            const Icon = iconMap[category.category] || Cookie;
            return (
              <Card key={category.category} className="text-center shadow-lg hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 flex flex-col">
                <CardHeader className="items-center">
                  <div className="bg-primary/10 p-4 rounded-full mb-4">
                    <Icon className="w-10 h-10 text-primary" />
                  </div>
                  <CardTitle className="text-2xl font-headline">{category.category}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-2 text-foreground/80">
                    {category.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
