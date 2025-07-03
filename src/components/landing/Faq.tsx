import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import faqData from '@/data/faq.json';

export function Faq() {
  return (
    <section id="faq" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-headline text-primary">Preguntas Frecuentes</h2>
          <p className="mt-4 text-lg text-foreground/80 max-w-3xl mx-auto">
            ¿Tienes dudas? Aquí resolvemos las más comunes.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqData.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-card shadow-sm rounded-lg mb-4 px-6">
                <AccordionTrigger className="text-lg text-left font-semibold hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-foreground/80 pt-2">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
