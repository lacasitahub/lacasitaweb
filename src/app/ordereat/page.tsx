import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';

export default function OrderEatPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <Link href="/">
              <Button variant="outline">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Volver a La Casita
              </Button>
            </Link>
          </div>

          <div className="bg-card p-8 md:p-12 rounded-2xl shadow-xl flex flex-col items-center">
            <div className="flex items-center justify-center gap-4 mb-8">
              <Image
                src="/ordereat_logo.jpg"
                alt="OrderEat Logo"
                width={200}
                height={100}
                className="object-contain"
                data-ai-hint="logo"
              />
              <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
                <Image
                  src="https://placehold.co/120x40.png"
                  alt="Download on the App Store"
                  width={120}
                  height={40}
                  data-ai-hint="app store"
                />
              </a>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              ¡Pide fácil y rápido con OrderEat!
            </h1>
            <p className="text-lg text-foreground/80 mb-8 max-w-2xl">
              Sigue estos sencillos pasos para recibir la comida de tus peques directo en la escuela.
            </p>

            <div className="w-full max-w-md border rounded-lg overflow-hidden shadow-lg">
               <Image
                src="https://placehold.co/600x800.png"
                alt="Cómo ordenar en OrderEat"
                width={600}
                height={800}
                className="w-full h-auto"
                data-ai-hint="mobile app screenshot"
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
