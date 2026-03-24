'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Award, Users, Mic2, BookOpen, Star, CheckCircle2, ArrowUpRight, Film, Camera, PlayCircle } from 'lucide-react';
import { lideranca, testimonials, noticias, musicos } from '@/lib/institutional-data';
import { ImageAssets, VideoAssets } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';

export default function PortfolioPage() {
  const heroImage = ImageAssets.find((img) => img.id === 'institutional-hero');
  const logoImage = ImageAssets.find((img) => img.id === 'bsn-logo');

  const noticiasEdital = noticias.filter(n => 
    n.id === 'agencia-brasil-musica-museu' || 
    n.id === 'sesc-rio-estreia' || 
    n.id === 'jb-estreia'
  );

  const galleryImages = ImageAssets.filter(img => 
    img.id.startsWith('gallery-') && !['gallery-10', 'gallery-14'].includes(img.id)
  ).slice(0, 6);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans print:bg-[#0d121f] print:text-white">
      
      {/* --- CAPA --- */}
      <section className="relative w-full h-[210mm] print:h-[210mm] flex flex-col items-center justify-center text-center p-6 print:p-4 border-b border-primary/20 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30 select-none print:opacity-40">
           {heroImage && (
            <Image 
              src={heroImage.imageUrl} 
              alt={heroImage.description}
              fill 
              className="object-cover grayscale"
              priority
            />
          )}
        </div>
        
        <div className="z-10 bg-background/90 p-10 print:p-4 rounded-2xl border border-primary/30 backdrop-blur-md max-w-5xl shadow-2xl print:border-2 print:shadow-none print:bg-[#0d121f]/90">
          {logoImage && (
            <div className="mb-6 print:mb-2 flex justify-center">
              <Image 
                src={logoImage.imageUrl} 
                alt="Logo BSN" 
                width={500} 
                height={250} 
                className="w-52 md:w-80 print:w-48 h-auto drop-shadow-lg"
              />
            </div>
          )}
          <h1 className="font-headline text-5xl md:text-7xl print:text-3xl font-bold mb-4 print:mb-2 text-primary tracking-tight text-shadow-lg">
            Portfólio Artístico 2026
          </h1>
          <p className="font-body text-xl md:text-3xl print:text-base text-muted-foreground uppercase tracking-[0.2em] mb-8 print:mb-3 border-t border-b border-primary/20 py-3 print:py-1 print:text-gray-300">
            Excelência • Inovação • Brasilidade
          </p>
          
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-primary bg-primary/10 text-primary font-bold text-sm md:text-base print:text-xs uppercase tracking-wider print:border-2">
            <CheckCircle2 size={18} />
            Proposta para Fomento Cultural
          </div>
        </div>
      </section>

      {/* --- MANIFESTO --- */}
      <section className="py-16 px-6 md:px-20 max-w-7xl mx-auto print:py-12">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="break-inside-avoid">
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-8 leading-tight">
              Uma Nova Sonoridade <br/>Para o Brasil
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground text-justify leading-relaxed print:text-gray-300">
              <p>
                A <strong className="text-foreground font-bold print:text-white">Banda Sinfônica Nacional (BSN)</strong> não é apenas uma orquestra; é um movimento cultural. Fundada para romper as barreiras entre a música de concerto e a cultura popular, a BSN une a grandiosidade sinfônica com a alma brasileira.
              </p>
              <p>
                Nossa missão é clara: <strong>democratizar a excelência</strong>. Levamos mestres e doutores em música para palcos populares, formamos novas plateias e damos protagonismo inédito a mulheres compositoras e regentes.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-6 mt-8">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-secondary/30 border border-primary/10 break-inside-avoid print:border print:bg-transparent">
                <div className="p-3 bg-primary/20 rounded-full text-primary">
                  <Award size={24} />
                </div>
                <div>
                  <span className="block font-bold text-foreground print:text-white">Alta Performance</span>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-xl bg-secondary/30 border border-primary/10 break-inside-avoid print:border print:bg-transparent">
                <div className="p-3 bg-primary/20 rounded-full text-primary">
                   <Users size={24} />
                </div>
                <div>
                  <span className="block font-bold text-foreground print:text-white">Inclusão Social</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card p-10 rounded-2xl border-l-8 border-primary shadow-2xl relative overflow-hidden break-inside-avoid print:border print:shadow-none print:bg-[#1a202c]">
            <h3 className="font-headline text-3xl mb-8 text-foreground relative z-10 print:text-white">Destaques do Projeto</h3>
            <ul className="space-y-6 relative z-10 print:text-gray-200">
              <li className="flex items-start gap-4">
                <Star className="text-primary shrink-0 mt-1 fill-primary" size={24} />
                <span className="text-lg">Corpo técnico formado por <strong>mestres, doutores</strong> e músicos de orquestras internacionais.</span>
              </li>
              <li className="flex items-start gap-4">
                <Star className="text-primary shrink-0 mt-1 fill-primary" size={24} />
                <span className="text-lg">Gestão focada em <strong>Liderança Feminina</strong> (Idealizadora e Maestra Titular).</span>
              </li>
              <li className="flex items-start gap-4">
                <Star className="text-primary shrink-0 mt-1 fill-primary" size={24} />
                <span className="text-lg">Repertório híbrido inovador: <strong>Sinfonia + MPB + Cultura Pop</strong>.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* --- LIDERANÇA --- */}
      <section className="py-16 px-6 md:px-20 max-w-7xl mx-auto bg-gradient-to-b from-background to-secondary/10 rounded-[3rem] print:bg-none print:py-8">
        <h2 className="font-headline text-4xl md:text-5xl font-bold text-center mb-12 print:mb-8 text-primary">Direção Artística e Pedagógica</h2>
        
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {lideranca.map((lider) => (
            <Card key={lider.id} className="bg-card border-primary/10 shadow-xl break-inside-avoid print:shadow-none print:border print:bg-[#1a202c] print:text-white">
              <CardContent className="pt-8 px-6 pb-8 flex flex-col h-full">
                <div className="mb-4 mx-auto p-3 bg-primary/10 rounded-full w-fit text-primary">
                  {lider.id.includes('geyzi') ? <Mic2 size={32} /> : <BookOpen size={32} />}
                </div>
                <h3 className="font-headline text-xl font-bold mb-2 text-center text-foreground print:text-white">{lider.nome}</h3>
                <p className="text-xs font-bold text-primary mb-4 uppercase tracking-widest text-center border-b border-primary/20 pb-4">{lider.cargo}</p>
                <p className="text-sm text-justify leading-relaxed text-muted-foreground flex-grow print:text-gray-300">{lider.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 break-inside-avoid">
          <h3 className="font-headline text-3xl font-bold mb-8 text-center flex items-center justify-center gap-3">
            <Users className="text-primary" size={32} />
            <span>Estrutura do Corpo Musical</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <StatsBox count={musicos.madeiras.length} label="Madeiras" />
            <StatsBox count={musicos.metais.length} label="Metais" />
            <StatsBox count={musicos.cordas.length} label="Cordas" />
            <StatsBox count={musicos.percussao.length} label="Percussão" />
          </div>
        </div>
      </section>

      {/* --- CLIPPING --- */}
      <section className="py-16 px-6 md:px-20 max-w-7xl mx-auto print:py-10">
        <h2 className="font-headline text-4xl md:text-5xl font-bold text-center mb-6 text-primary">Repercussão e Mídia</h2>
        <p className="text-center text-xl text-muted-foreground mb-12 max-w-3xl mx-auto print:text-gray-300">
          A validação da nossa excelência através da imprensa e da crítica especializada.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {noticiasEdital.map((news) => (
            <Link key={news.id} href={news.url} target="_blank" className="block break-inside-avoid h-full group">
              <div className="flex flex-col sm:flex-row gap-6 p-6 border border-border rounded-2xl bg-card h-full transition-all duration-300 print:border-gray-500 print:bg-[#1a202c]">
                <div className="bg-primary/10 p-4 rounded-xl h-fit w-fit self-start print:bg-primary/20">
                   <Star size={24} className="text-primary"/>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className="font-bold text-lg leading-tight group-hover:text-primary transition-colors print:text-white">{news.title}</h4>
                    <ArrowUpRight className="w-4 h-4 text-primary opacity-50" />
                  </div>
                  <p className="text-xs font-bold text-primary mb-3 uppercase tracking-wider">{news.date}</p>
                  <p className="text-muted-foreground leading-relaxed text-sm print:text-gray-300">{news.excerpt}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="bg-secondary/30 p-10 rounded-3xl border border-primary/10 relative overflow-hidden print:bg-transparent print:border-2 break-inside-avoid">
           <h3 className="font-headline text-3xl font-bold mb-8 text-center relative z-10">O Que Dizem os Especialistas</h3>
           <div className="grid md:grid-cols-2 gap-10 relative z-10">
              {testimonials.slice(0, 2).map((t) => (
                <div key={t.id} className="relative pl-6 break-inside-avoid">
                  <span className="absolute top-0 left-0 text-6xl text-primary/30 font-serif leading-none">“</span>
                  <blockquote className="italic text-lg text-muted-foreground relative z-10 text-justify mb-4">
                    {t.quote}
                    <span className="hidden print:block not-italic text-right mt-4 text-foreground">
                        — {t.name}, {t.title}
                    </span>
                  </blockquote>
                  <footer className="flex items-center gap-3 print:hidden">
                    <div className="h-px w-10 bg-primary"></div>
                    <div>
                      <span className="block font-bold text-foreground text-sm">{t.name}</span>
                      <span className="text-xs text-primary uppercase font-bold tracking-wider">{t.title}</span>
                    </div>
                  </footer>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* --- GALERIA DE MÍDIA --- */}
      <section className="py-16 px-6 md:px-20 max-w-7xl mx-auto print:py-10">
        <h2 className="font-headline text-4xl md:text-5xl font-bold text-center mb-2 print:mb-2 text-primary">
          Galeria e Multimídia
        </h2>

        {/* VÍDEOS */}
        <div className="mb-4">
          <h3 className="font-headline text-3xl font-bold mb-4 flex items-center justify-center gap-3">
            <Film className="text-primary" size={32} />
            <span>Vídeos em Destaque</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 print:grid-cols-3 gap-6">
            {VideoAssets.map((video) => {
              const thumbnail = ImageAssets.find(img => img.id === video.thumbnailId);
              const videoUrl = video.source === 'youtube' 
                ? `https://www.youtube.com/watch?v=${video.embedId}` 
                : `https://vimeo.com/${video.embedId}`;
              
              return (
                <Link key={video.id} href={videoUrl} target="_blank" rel="noopener noreferrer" className="block break-inside-avoid group">
                  <Card className="bg-card border-primary/10 shadow-xl overflow-hidden h-full transition-all duration-300 hover:border-primary/40 hover:shadow-primary/20 print:border print:shadow-none print:bg-[#1a202c]">
                    <div className="relative aspect-video">
                      {thumbnail && (
                        <Image
                          src={thumbnail.imageUrl}
                          alt={thumbnail.description}
                          fill
                          className="object-cover"
                        />
                      )}
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all flex items-center justify-center">
                        <PlayCircle className="w-16 h-16 text-white/80 group-hover:text-white group-hover:scale-110 transition-transform" />
                      </div>
                    </div>
                    <CardContent className="p-4 print:pt-4">
                      <p className="font-bold text-foreground group-hover:text-primary transition-colors print:text-white">{video.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>

        {/* FOTOS */}
        <div className="break-inside-avoid">
          <h3 className="font-headline text-3xl font-bold mb-8 flex items-center justify-center gap-3">
            <Camera className="text-primary" size={32} />
            <span>Galeria de Fotos</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((image) => (
              <div key={image.id} className="relative aspect-square break-inside-avoid overflow-hidden rounded-lg border-2 border-primary/20 shadow-lg print:border-gray-500 print:shadow-none">
                <Image
                  src={image.imageUrl}
                  alt={image.description}
                  data-ai-hint={image.imageHint}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CONTATO --- */}
      <section className="py-12 bg-black text-center mt-8 border-t border-primary/20 print:bg-black print:text-white">
        <h2 className="font-headline text-2xl font-bold text-white mb-8">Vamos Transformar a Cultura Juntos?</h2>
        <div className="flex flex-col md:flex-row justify-center gap-12 text-lg">
          <div className="flex flex-col items-center">
            <span className="text-gray-400 text-xs uppercase tracking-widest mb-1">Email Institucional</span>
            <span className="text-white font-bold">bandasinfonicanacional@gmail.com</span>
          </div>
          <div className="flex flex-col items-center">
             <span className="text-gray-400 text-xs uppercase tracking-widest mb-1">Direção Geral</span>
             <span className="text-white font-bold">Geyzi Moreira</span>
          </div>
        </div>
      </section>
    </div>
  );
}

function StatsBox({ count, label }: { count: number, label: string }) {
  return (
    <div className="p-4 bg-background rounded-xl border border-primary/20 shadow-sm flex flex-col items-center justify-center break-inside-avoid print:border-gray-500 print:bg-[#1a202c]">
      <strong className="block text-3xl font-headline text-primary mb-1">{count}</strong>
      <span className="text-muted-foreground uppercase text-[10px] font-bold tracking-widest print:text-gray-300">{label}</span>
    </div>
  )
}
