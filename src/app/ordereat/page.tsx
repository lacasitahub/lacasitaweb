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
            <Image
              src="/ordereat_logo.png"
              alt="OrderEat Logo"
              width={200}
              height={100}
              className="object-contain mb-8"
              data-ai-hint="logo"
            />
            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              ¡Pide fácil y rápido con OrderEat!
            </h1>
            <p className="text-lg text-foreground/80 mb-6 max-w-2xl">
              Descarga la app y sigue los pasos para recibir la comida de tus peques directo en la escuela.
            </p>

            <div className="flex items-center justify-center gap-4 mb-8">
              <a href="https://apps.apple.com/us/app/ordereat/id1535116333" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/appstore_.png"
                  alt="Download on the App Store"
                  width={150}
                  height={50}
                  className="object-contain"
                  data-ai-hint="app store"
                />
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.ordereat.ordereat_mobile&pcampaignid=web_share" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/playstore_.png"
                  alt="Download on the Play Store"
                  width={150}
                  height={50}
                  className="object-contain"
                  data-ai-hint="play store"
                />
              </a>
            </div>

            <div className="w-full max-w-md border rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/ordereat_instructions.png"
                alt="Cómo ordenar en OrderEat"
                width={600}
                height={800}
                className="w-full h-auto"
                data-ai-hint="mobile app instructions"
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
