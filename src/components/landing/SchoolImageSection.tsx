import Image from 'next/image';

export function SchoolImageSection() {
  return (
    <section id="escuela" className="py-20 md:py-32 bg-primary/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold font-headline text-primary mb-12">Nuestra Comunidad Escolar</h2>
            <div className="relative group overflow-hidden rounded-3xl shadow-2xl">
                <Image
                    src="/escuela.png"
                    alt="Comunidad escolar La Casita"
                    width={1200}
                    height={800}
                    className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                    data-ai-hint="school playground"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300"></div>
            </div>
        </div>
      </div>
    </section>
  );
}
