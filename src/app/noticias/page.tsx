
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';

import { noticias as unsortedNoticias } from '@/lib/institutional-data';
import { ImageAssets } from '@/lib/placeholder-images';

import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { parsePtBrDate } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Notícias',
  description: 'Acompanhe as últimas notícias e o clipping de imprensa sobre a Banda Sinfônica Nacional em diversas mídias e publicações.',
};

const noticias = [...unsortedNoticias].sort((a, b) => {
    return parsePtBrDate(b.date).getTime() - parsePtBrDate(a.date).getTime();
});

export default function NoticiasPage() {
  return (
    <div className="container py-12 md:py-20">
      <header className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold">Notícias</h1>
        <p className="text-muted-foreground mt-2 text-lg">Acompanhe as últimas matérias e novidades sobre a Banda Sinfônica Nacional.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {noticias.map((noticia) => {
          const firstImage = noticia.imageIds && noticia.imageIds.length > 0
            ? ImageAssets.find((img) => img.id === noticia.imageIds[0])
            : null;
          return (
            <Card key={noticia.id} className="bg-card border-border/60 shadow-lg flex flex-col overflow-hidden transition-transform transform hover:-translate-y-1">
              {firstImage && (
                 <div className="relative h-48 w-full">
                    <Image
                      src={firstImage.imageUrl}
                      alt={noticia.title}
                      data-ai-hint={firstImage.imageHint}
                      fill
                      className="object-cover"
                    />
                 </div>
              )}
              <CardHeader>
                <CardTitle className="font-headline text-2xl leading-tight">{noticia.title}</CardTitle>
                <CardDescription className="flex items-center gap-2 text-sm pt-2">
                   <Calendar className="h-4 w-4" />
                   <span>{noticia.date}</span>
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground text-justify line-clamp-4">{noticia.excerpt}</p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="link" className="p-0 text-primary hover:text-primary/90">
                   <Link href={noticia.url} target="_blank" rel="noopener noreferrer"> 
                     Ler na fonte <ArrowRight className="ml-2 h-4 w-4" />
                   </Link>
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
