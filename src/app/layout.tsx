import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { PageWrapper } from '@/components/landing/PageWrapper';
import { WhatsappCTA } from '@/components/landing/WhatsappCTA';

export const metadata: Metadata = {
  title: 'La Casita - Comida escolar con amor',
  description: 'Comida con amor, sabor casero y nutrición real para estudiantes y maestros.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/LaCasita.ico" sizes="any" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased" suppressHydrationWarning>
        <PageWrapper>{children}</PageWrapper>
        {/* <WhatsappCTA /> */}
        <Toaster />
      </body>
    </html>
  );
}
