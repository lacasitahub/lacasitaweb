import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import testimonialsData from '@/data/testimonials.json';
import { Star } from 'lucide-react';

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-5 h-5 ${i < rating ? 'text-accent fill-accent' : 'text-gray-300'}`}
        />
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section id="testimonios" className="py-20 md:py-32 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-headline text-primary">Lo que dicen de nosotros</h2>
          <p className="mt-4 text-lg text-foreground/80 max-w-3xl mx-auto">
            La confianza de nuestra comunidad es nuestro ingrediente más importante.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={80}
                  height={80}
                  className="rounded-full mb-4 border-4 border-background shadow-md object-cover w-[80px] h-[80px]"
                  data-ai-hint="person avatar"
                />
                <p className="text-foreground/80 italic mb-4">"{testimonial.comment}"</p>
                <div className="mt-auto pt-4">
                  <h3 className="font-bold text-lg text-primary">{testimonial.name}</h3>
                  <div className="mt-2">
                    <StarRating rating={testimonial.rating} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
