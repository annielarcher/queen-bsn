import Image from 'next/image';
import type { Metadata } from 'next';
import { lideranca } from '@/lib/institutional-data';
import { ImageAssets } from '@/lib/placeholder-images';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export const metadata: Metadata = {
  title: 'Liderança',
  description: 'Conheça Geyzi Moreira (Idealizadora), Alexandre Rocha (Maestro) e Diogo Perdigão (Arranjador), as lideranças por trás da Banda Sinfônica Nacional.',
};

export default function LiderancaPage() {
  return (
    <div className="container py-12 md:py-20">
      <header className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold">Nossa Liderança</h1>
        <p className="text-muted-foreground mt-2 text-lg">As lideranças por trás da Banda Sinfônica Nacional.</p>
      </header>

      <div className="space-y-16 max-w-4xl mx-auto">
        {lideranca.map((idealizador) => {
          const image = ImageAssets.find((img) => img.id === idealizador.id);
          return (
            <Card key={idealizador.id} className="bg-card border-border/60 shadow-lg overflow-hidden md:grid md:grid-cols-3 md:items-start">
              <div className="md:col-span-1 p-8 bg-secondary/50 flex flex-col items-center justify-center text-center">
                  <Avatar className="h-60 w-50 border-4 border-primary mb-4">
                    {image && <AvatarImage src={image.imageUrl} alt={idealizador.nome} data-ai-hint={image.imageHint} />}
                    <AvatarFallback className="text-4xl">{idealizador.nome.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <CardTitle className="font-headline text-3xl">{idealizador.nome}</CardTitle>
                  <CardDescription className="text-primary font-semibold">{idealizador.cargo}</CardDescription>
              </div>
              <div className="md:col-span-2 p-8">
                <CardHeader className="p-0 mb-4">
                  <h3 className="font-headline text-2xl font-semibold">Biografia</h3>
                </CardHeader>
                <CardContent className="p-0 space-y-4">
                  <p className="text-muted-foreground whitespace-pre-line leading-relaxed text-justify">
                    {idealizador.bio}
                  </p>
                  <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground text-justify">
                    {idealizador.quote}
                  </blockquote>
                </CardContent>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
