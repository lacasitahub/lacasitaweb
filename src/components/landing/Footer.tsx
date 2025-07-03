import { Logo } from './Logo';

const navLinks = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#historia', label: 'Historia' },
  { href: '#menu', label: 'Menú' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contacto', label: 'Contacto' },
];

export function Footer() {
  return (
    <footer className="bg-secondary/70">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <Logo />
            <p className="mt-4 text-foreground/80 max-w-xs">
              Alimentando mentes y corazones con sabor casero.
            </p>
          </div>
          <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h4 className="font-bold text-lg mb-4 text-primary">Navegación</h4>
              <ul className="space-y-2">
                {navLinks.map(link => (
                  <li key={link.href}>
                    <a href={link.href} className="text-foreground/80 hover:text-primary transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4 text-primary">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-foreground/80 hover:text-primary transition-colors">Aviso de Privacidad</a></li>
                <li><a href="#" className="text-foreground/80 hover:text-primary transition-colors">Términos y Condiciones</a></li>
              </ul>
            </div>
             <div>
              <h4 className="font-bold text-lg mb-4 text-primary">Contacto</h4>
              <ul className="space-y-2">
                <li><a href="mailto:gerencia@lacasitamx.com" className="text-foreground/80 hover:text-primary transition-colors">gerencia@lacasitamx.com</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t mt-12 pt-8 text-center text-foreground/60">
          <p>&copy; {new Date().getFullYear()} La Casita. Todos los derechos reservados.</p>
          <p className="text-sm mt-1">Diseñado con amor para nutrir el futuro.</p>
        </div>
      </div>
    </footer>
  );
}
