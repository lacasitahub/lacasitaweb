import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';

export function Contact() {
  return (
    <section id="contacto" className="py-20 md:py-32 bg-primary/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center bg-card p-8 md:p-12 rounded-2xl shadow-xl">
          <Mail className="w-16 h-16 text-primary mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">¿Hablamos?</h2>
          <p className="mt-4 text-lg text-foreground/80">
            Estamos aquí para cualquier duda, sugerencia o para iniciar una colaboración.
          </p>
          <div className="mt-8">
            <a href="mailto:gerencia@lacasitamx.com">
              <Button size="lg" className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-shadow">
                gerencia@lacasitamx.com
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
