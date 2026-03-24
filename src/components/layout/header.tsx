'use client';

import Link from 'next/link';
import { Home, Menu, X, Facebook, Instagram, Mail, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { ContactForm } from '@/components/contact-form';


const navLinks = [
  { href: '/agenda', label: 'Agenda' },
  { href: '/sobre', label: 'Sobre' },
  { href: '/idealizadores', label: 'Liderança' },
  { href: '/integrantes', label: 'Integrantes' },
  { href: '/noticias', label: 'Notícias' },
];

export function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isContactOpen, setContactOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-20 max-w-screen-2xl items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 overflow-hidden">
              <>
                <Home className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="font-headline text-lg">
                  Início
                </span>
              </>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === link.href ? "text-primary" : "text-muted-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex">
            <Button onClick={() => setContactOpen(true)} className="bg-primary text-primary-foreground hover:bg-primary/90">
              Contato
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Abrir menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] bg-card">
                <SheetHeader className="sr-only">
                  <SheetTitle>Menu</SheetTitle>
                  <SheetDescription>Navegação principal do site.</SheetDescription>
                </SheetHeader>
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between border-b pb-4">
                    <Link href="/" className="flex items-center space-x-2" onClick={() => setMobileMenuOpen(false)}>
                        <>
                          <Home className="h-6 w-6 text-primary" />
                          <span className="font-headline text-lg">Início</span>
                        </>
                    </Link>
                  </div>
                  <nav className="flex flex-col space-y-4 mt-6">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={cn(
                          "text-lg font-medium transition-colors hover:text-primary",
                          pathname === link.href ? "text-primary" : "text-foreground"
                        )}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </nav>
                  <div className="mt-auto pt-6">
                      <Button onClick={() => {
                        setMobileMenuOpen(false);
                        setContactOpen(true);
                      }} className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                        Contato
                      </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
      
      <Dialog open={isContactOpen} onOpenChange={setContactOpen}>
        <DialogContent className="sm:max-w-[480px]">
          <DialogHeader>
            <DialogTitle className="text-2xl font-headline">Fale Conosco</DialogTitle>
            <DialogDescription>
              Tem alguma pergunta ou proposta? Preencha o formulário abaixo.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-6 pt-4">
            <ContactForm onSuccess={() => setContactOpen(false)} />
            <div className="relative">
              <Separator />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-background px-2">
                <span className="text-sm text-muted-foreground">OU</span>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4">
              <p className="text-sm text-muted-foreground">Siga-nos nas redes sociais ou envie um e-mail:</p>
              <div className="flex justify-center gap-6">
                <Link href="https://web.facebook.com/profile.php?id=61582234621848" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    <Facebook className="h-6 w-6" />
                    <span className="sr-only">Facebook</span>
                </Link>
                <Link href="https://www.instagram.com/bandasinfonicanacionalbr/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    <Instagram className="h-6 w-6" />
                    <span className="sr-only">Instagram</span>
                </Link>
                <Link href="https://youtube.com/@bandasinfonicanacional?si=aY0vFga80RHuWRJX" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    <Youtube className="h-6 w-6" />
                    <span className="sr-only">YouTube</span>
                </Link>
                 <Link href="mailto:bandasinfonicanacional@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                    <Mail className="h-6 w-6" />
                    <span className="sr-only">Email</span>
                </Link>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
