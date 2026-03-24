import { Music, Target, Users } from 'lucide-react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { ImageAssets } from '@/lib/placeholder-images';

export const metadata: Metadata = {
  title: 'Sobre Nós',
  description: 'Descubra a história, a missão e a essência da Banda Sinfônica Nacional, um farol de excelência e inovação na música sinfônica brasileira.',
};

export default function SobrePage() {
  const essenciaImage = ImageAssets.find((img) => img.id === 'orchestra');
  const missaoImage = ImageAssets.find((img) => img.id === 'gallery-9');
  const musicosImage = ImageAssets.find((img) => img.id === 'gallery-10');

  return (
    <div className="container py-12 md:py-20">
      <header className="text-center mb-16">
        <h1 className="font-headline text-4xl md:text-5xl font-bold">Sobre a Banda Sinfônica Nacional</h1>
        <p className="text-muted-foreground mt-2 text-lg max-w-3xl mx-auto">Uma orquestra que reflete a alma musical do Brasil, unindo tradição e vanguarda em cada nota.</p>
      </header>

      <div className="max-w-4xl mx-auto space-y-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="font-headline text-3xl font-semibold text-primary mb-4 flex items-center gap-3"><Music />Nossa Essência</h2>
            <p className="text-muted-foreground leading-relaxed text-justify">
              A Banda Sinfônica Nacional (BSN) foi fundada com o propósito de ser um farol de excelência e inovação no cenário musical brasileiro. Somos mais do que um grupo de músicos; somos uma família unida pela paixão de criar experiências sonoras que emocionam, inspiram e transformam. Nosso repertório viaja do clássico ao contemporâneo, com um carinho especial pela rica tapeçaria da música brasileira, sempre buscando novas formas de expressão e diálogo com o público.
            </p>
          </div>
          {essenciaImage && (
            <div className="relative h-64 bg-muted rounded-lg overflow-hidden shadow-lg">
              <Image
                src={essenciaImage.imageUrl}
                alt={essenciaImage.description}
                data-ai-hint={essenciaImage.imageHint}
                fill
                className="object-cover"
              />
            </div>
          )}
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
           {missaoImage && (
             <div className="relative h-64 bg-muted rounded-lg overflow-hidden shadow-lg md:order-1">
                <Image
                    src={missaoImage.imageUrl}
                    alt={missaoImage.description}
                    data-ai-hint={missaoImage.imageHint}
                    fill
                    className="object-cover"
                />
             </div>
           )}
          <div className="md:order-2">
            <h2 className="font-headline text-3xl font-semibold text-primary mb-4 flex items-center gap-3"><Target />Nossa Missão</h2>
            <p className="text-muted-foreground leading-relaxed text-justify">
              Nossa missão é multifacetada: buscamos democratizar o acesso à música sinfônica de alta qualidade, quebrando barreiras e formando novas plateias. Almejamos ser uma plataforma para talentos emergentes, com um foco particular em dar visibilidade a compositoras, musicistas e maestras que estão moldando o futuro da música. Além disso, estamos comprometidos com a educação, oferecendo workshops, masterclasses e projetos sociais que utilizam a música como ferramenta de desenvolvimento e inclusão.
            </p>
          </div>
        </div>

         <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="font-headline text-3xl font-semibold text-primary mb-4 flex items-center gap-3"><Users />Nossos Músicos</h2>
            <p className="text-muted-foreground leading-relaxed text-justify">
              O coração da BSN é seu corpo de músicos. Reunimos talentos de diversas partes do Brasil e do mundo, incluindo bacharéis, mestres e doutores com vasta experiência em orquestras renomadas. Cada integrante traz consigo uma bagagem única, contribuindo para uma sonoridade rica e uma dinâmica de grupo vibrante. É essa diversidade e o compromisso individual com a excelência que nos permitem alcançar performances de nível internacional.
            </p>
          </div>
          {musicosImage && (
             <div className="relative h-64 bg-muted rounded-lg overflow-hidden shadow-lg">
                <Image
                    src={musicosImage.imageUrl}
                    alt={musicosImage.description}
                    data-ai-hint={musicosImage.imageHint}
                    fill
                    className="object-cover"
                />
             </div>
          )}
        </div>
      </div>
    </div>
  );
}
