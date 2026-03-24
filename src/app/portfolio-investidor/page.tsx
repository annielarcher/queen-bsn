'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Award, Users, Mic2, BookOpen, Star, CheckCircle2, Landmark, Megaphone, Shirt, Monitor, Heart, Music, Film, MapPin, Calendar, FileText, ArrowRight, ExternalLink, PlayCircle, Camera, FileCheck, Facebook, Instagram, Youtube, Mail } from 'lucide-react';
import { lideranca, testimonials, noticias, musicos } from '@/lib/institutional-data';
import { ImageAssets, VideoAssets } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

export default function RouanetPortfolioPage() {
  const heroImage = ImageAssets.find((img) => img.id === 'institutional-hero');
  const logoImage = ImageAssets.find((img) => img.id === 'bsn-logo');
  
  const rouanetLogoUrl = "https://www.gov.br/cultura/pt-br/centrais-de-conteudo/marcas-e-logotipos/marcas-rouanet/LogoLeiRouanet_colorida.png";

  const pastEvents = [
    {
      year: 'JAN 2026',
      title: 'Abertura da Série "Música no Museu"',
      description: 'Abertura da temporada 2026 de uma das séries mais prestigiadas do país.',
      location: 'Espaço Cultural Arte Sesc, Flamengo',
    },
    {
      year: 'DEZ 2025',
      title: 'Queen Sinfônica',
      description: 'Fusão espetacular de Rock e Clássico com a banda Special Queen.',
      location: 'Multiplan Hall - Park Shopping Jacarepaguá',
    },
    {
      year: 'SET 2025',
      title: 'Concerto "Clássicos Brasileiros"',
      description: 'Uma noite dedicada aos grandes mestres da música brasileira.',
      location: 'Espaço Cultural Sesc Flamengo',
    },
    {
      year: 'AGO 2025',
      title: 'Concerto em Homenagem ao Dia dos Pais',
      description: 'Apresentação especial com um repertório emocionante para homenagear os pais.',
      location: 'Teatro Carlos Gomes',
    },
    {
      year: 'AGO 2025',
      title: 'Abertura da Série "Sons do Brasil"',
      description: 'Concerto de abertura celebrando a diversidade musical do Brasil.',
      location: 'Centro Cultural Banco do Brasil (CCBB), RJ',
    },
    {
      year: 'JUL 2025',
      title: 'Estreia no XX Rio Harp Festival',
      description: 'Estreia oficial da BSN, com grande repercussão de crítica e público.',
      location: 'Espaço Cultural Arte Sesc, Flamengo',
    },
  ];

  const proofImages = ImageAssets.filter(img => img.id.startsWith('gallery-'));

  return (
    <div className="min-h-screen bg-background text-foreground font-sans print:bg-[#0d121f] print:text-white">
      
      {/* =====================================================================================
          1. CAPA (Conforme Item 1 da Minuta)
      ===================================================================================== */}
      <section className="relative w-full h-screen print:h-[210mm] flex flex-col items-center justify-center text-center p-6 print:p-4 border-b border-primary/20 overflow-hidden break-after-page">
        <div className="absolute inset-0 z-0 opacity-30 select-none print:opacity-40">
           {heroImage && (
            <Image 
              src={heroImage.imageUrl} 
              alt=""
              fill 
              className="object-cover grayscale"
              priority
            />
          )}
        </div>
        
        <div className="relative z-10 bg-background/90 p-12 print:p-4 rounded-2xl border-2 border-primary/30 backdrop-blur-md max-w-5xl shadow-2xl print:border-4 print:shadow-none print:bg-[#0d121f]/95 w-full">
          
          <div className="flex flex-col justify-center items-center gap-4 print:gap-2 mb-10 print:mb-2">
            {logoImage && (
              <div className="bg-white/5 p-4 rounded-lg">
                <Image 
                  src={logoImage.imageUrl} 
                  alt="Logo BSN" 
                  width={500} 
                  height={250} 
                  className="w-96 md:w-[500px] h-auto print:w-80"
                />
              </div>
            )}
             <div className="bg-white p-2 rounded-md h-fit">
              <img 
                src={rouanetLogoUrl} 
                alt="Lei de Incentivo à Cultura - Rouanet" 
                className="w-24 h-auto object-contain"
              />
            </div>
          </div>
          
          <h1 className="font-headline text-5xl md:text-7xl print:text-4xl font-bold mb-4 print:mb-2 text-primary tracking-tight uppercase" style={{ color: '#fbbf24', printColorAdjust: 'exact' }}>
            Portfólio Cultural
          </h1>
          <h2 className="font-body text-2xl md:text-3xl print:text-xl font-bold text-foreground mb-10 print:mb-6 print:text-white">
            Banda Sinfônica Nacional
          </h2>

          <div className="text-left bg-secondary/30 p-8 print:p-4 rounded-xl border border-primary/20 print:border-white/20 print:bg-white/10">
            <div className="grid md:grid-cols-2 gap-6 print:gap-x-4 print:gap-y-2">
              <div>
                <p className="text-xs uppercase tracking-widest font-bold text-muted-foreground mb-1 print:text-gray-400">Proponente</p>
                <p className="text-lg print:text-base font-bold text-foreground mb-4 print:text-white">Geyzilane de Andrade Moreira</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest font-bold text-muted-foreground mb-1 print:text-gray-400">Projeto</p>
                <p className="text-lg print:text-base font-bold text-foreground mb-4 print:text-white">Plano Anual BSN 2026 (PRONAC 2512974)</p>
              </div>
            </div>
            
            <Separator className="my-4 print:my-2 bg-primary/30" />

            <div className="flex flex-wrap gap-4 items-center justify-center md:justify-start">
              <Badge variant="outline" className="border-primary text-primary font-bold px-4 py-1 print:border-white print:text-white">
                Artigo 18
              </Badge>
              <Badge variant="outline" className="border-primary text-primary font-bold px-4 py-1 print:border-white print:text-white">
                Música Instrumental
              </Badge>
              <Badge variant="outline" className="border-primary text-primary font-bold px-4 py-1 print:border-white print:text-white">
                Rio de Janeiro - RJ
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================================
          2. APRESENTAÇÃO (Conforme Item 2 da Minuta)
      ===================================================================================== */}
      <section className="py-16 px-6 md:px-20 max-w-7xl mx-auto print:py-10 min-h-[210mm] flex flex-col justify-center break-after-page">
        <div className="mb-6 print:mb-4 flex items-center gap-2 text-primary print:text-white">
          <span className="text-4xl font-bold opacity-30">02</span>
          <h3 className="text-xl font-bold uppercase tracking-widest" style={{ color: '#fbbf24', printColorAdjust: 'exact' }}>Apresentação</h3>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 print:gap-6">
          <div>
            <h2 className="font-headline text-4xl print:text-3xl font-bold mb-6 text-foreground print:text-white">
              Excelência, Inovação e Brasilidade
            </h2>
            <div className="space-y-4 print:space-y-2 text-lg print:text-base text-justify leading-relaxed text-muted-foreground print:text-gray-300">
              <p>
                A <strong>Banda Sinfônica Nacional (BSN)</strong> é um corpo artístico de excelência, fundado com a missão de preencher uma lacuna vital no cenário cultural do Rio de Janeiro: a ausência de uma banda sinfônica civil profissional.
              </p>
              <p>
                Formada por mestres e doutores em música, a BSN une o rigor técnico da música de concerto com a vibrante diversidade da cultura brasileira. Nossa visão é democratizar o acesso à música instrumental, levando grandes espetáculos tanto para teatros renomados quanto para espaços públicos.
              </p>
            </div>
          </div>

          <div className="space-y-6 print:space-y-4">
            <Card className="bg-card border-l-4 border-l-primary break-inside-avoid print:border-l-[#fbbf24] print:bg-[#1a202c]">
              <CardContent className="pt-6 print:pt-4">
                <h4 className="flex items-center gap-2 font-bold text-lg mb-2 print:mb-1 print:text-white">
                  <Music className="text-primary print:text-[#fbbf24]" /> Área de Atuação
                </h4>
                <p className="text-sm print:text-gray-300">Música Instrumental (Erudita e Popular), Educação Musical e Preservação do Patrimônio Imaterial.</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-l-4 border-l-primary break-inside-avoid print:border-l-[#fbbf24] print:bg-[#1a202c]">
              <CardContent className="pt-6 print:pt-4">
                <h4 className="flex items-center gap-2 font-bold text-lg mb-2 print:mb-1 print:text-white">
                  <Heart className="text-primary print:text-[#fbbf24]" /> Objetivos Socioculturais
                </h4>
                <ul className="list-disc list-inside text-sm space-y-1 print:text-xs print:text-gray-300">
                  <li>Democratização do acesso à música sinfônica.</li>
                  <li>Fomento à liderança feminina na música (Meta: 30% mulheres).</li>
                  <li>Formação de plateia através de concertos didáticos.</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* =====================================================================================
          3. EXPERIÊNCIA E HISTÓRICO (Conforme Item 3 da Minuta)
      ===================================================================================== */}
      <section className="py-16 px-6 md:px-20 max-w-7xl mx-auto print:py-8 min-h-[210mm] flex flex-col justify-center break-after-page">
        <div className="mb-8 print:mb-4 flex items-center gap-2 text-primary print:text-white">
          <span className="text-4xl font-bold opacity-30">03</span>
          <h3 className="text-xl font-bold uppercase tracking-widest" style={{ color: '#fbbf24', printColorAdjust: 'exact' }}>Experiência e Histórico</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-4 print:mb-2 print:gap-2">
          {pastEvents.map((event) => (
            <div key={event.title} className="border border-primary/20 p-6 print:p-3 rounded-xl bg-card break-inside-avoid print:border-gray-500 print:bg-[#1a202c]">
              <div className="text-primary font-bold text-sm mb-2 print:text-[#fbbf24] print:text-xs">{event.year}</div>
              <h4 className="font-headline text-xl print:text-sm font-bold mb-2 print:text-white">{event.title}</h4>
              <p className="text-sm print:text-xs text-muted-foreground mb-4 print:text-gray-300">{event.description}</p>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary print:text-[#fbbf24]">
                <MapPin size={14} /> {event.location}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center border-y border-primary/20 py-8 print:py-2 print:border-gray-500">
          <div>
            <span className="block text-4xl print:text-2xl font-bold text-primary print:text-[#fbbf24]">+1000</span>
            <span className="text-xs print:text-[10px] uppercase tracking-widest print:text-gray-300">Espectadores</span>
          </div>
          <div>
            <span className="block text-4xl print:text-2xl font-bold text-primary print:text-[#fbbf24]">4</span>
            <span className="text-xs print:text-[10px] uppercase tracking-widest print:text-gray-300">Grandes Palcos</span>
          </div>
          <div>
            <span className="block text-4xl print:text-2xl font-bold text-primary print:text-[#fbbf24]">100%</span>
            <span className="text-xs print:text-[10px] uppercase tracking-widest print:text-gray-300">Aprovação Crítica</span>
          </div>
          <div>
            <span className="block text-4xl print:text-2xl font-bold text-primary print:text-[#fbbf24]">10%</span>
            <span className="text-xs print:text-[10px] uppercase tracking-widest print:text-gray-300">Mulheres (Meta: 30%)</span>
          </div>
        </div>
      </section>

      {/* =====================================================================================
          4. EQUIPE TÉCNICA E ARTÍSTICA (Conforme Item 4 da Minuta)
      ===================================================================================== */}
      <section className="py-16 px-6 md:px-20 max-w-7xl mx-auto print:py-8 min-h-[210mm] flex flex-col justify-center break-after-page">
        <div className="mb-8 print:mb-4 flex items-center gap-2 text-primary print:text-white">
          <span className="text-4xl font-bold opacity-30">04</span>
          <h3 className="text-xl font-bold uppercase tracking-widest" style={{ color: '#fbbf24', printColorAdjust: 'exact' }}>Equipe Técnica e Artística</h3>
        </div>

        <div className="space-y-6 print:space-y-3">
          {lideranca.map((lider) => (
            <div key={lider.id} className="flex flex-col md:flex-row gap-6 print:gap-4 p-6 print:p-3 border border-primary/20 rounded-xl bg-card break-inside-avoid print:border-gray-500 print:bg-[#1a202c]">
              <div className="shrink-0 flex items-center justify-center bg-primary/10 w-20 h-20 print:w-16 print:h-16 rounded-full text-primary print:bg-white/10 print:text-[#fbbf24]">
                 {lider.id.includes('geyzi') ? <Star size={32} /> : <Mic2 size={32} />}
              </div>
              <div>
                <h4 className="font-headline text-2xl print:text-lg font-bold text-foreground print:text-white">{lider.nome}</h4>
                <p className="text-sm font-bold text-primary uppercase mb-2 print:text-[#fbbf24]">{lider.cargo}</p>
                <p className="text-sm print:text-xs text-justify leading-relaxed text-muted-foreground print:text-gray-300">{lider.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================================================
          5. CORPO MUSICAL
      ===================================================================================== */}
      <section className="py-16 px-6 md:px-20 max-w-7xl mx-auto print:py-8 min-h-[210mm] flex flex-col justify-center break-after-page">
          <div className="mb-8 print:mb-4 flex items-center gap-2 text-primary print:text-white">
              <span className="text-4xl font-bold opacity-30">05</span>
              <h3 className="text-xl font-bold uppercase tracking-widest" style={{ color: '#fbbf24', printColorAdjust: 'exact' }}>Corpo Musical</h3>
          </div>
          <div className="p-6 print:p-4 bg-card rounded-xl border border-primary/20 break-inside-avoid print:border-gray-500 print:bg-[#1a202c]">
              <h4 className="font-bold text-lg mb-4 print:mb-2 print:text-white">Corpo Musical de Elite</h4>
              <p className="text-sm print:text-xs text-muted-foreground mb-4 print:mb-2 print:text-gray-300">
                  Nossa banda é composta majoritariamente por <strong>Mestres e Doutores</strong> em música, com passagens por orquestras internacionais (Inglaterra, Europa) e grandes instituições brasileiras (UFRJ, UNIRIO).
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-4 print:grid-cols-5 print:gap-x-3 print:gap-y-2 text-sm mt-6 print:mt-3 print:text-[9px]">
                  <div>
                      <h5 className="font-headline text-base print:text-xs font-bold text-primary print:text-[#fbbf24] border-b border-primary/20 pb-1 mb-2 print:pb-0 print:mb-1">Madeiras</h5>
                      <ul className="space-y-1 text-muted-foreground print:text-gray-300">
                          {musicos.madeiras.map(m => <li key={m.nome}>{m.nome}</li>)}
                      </ul>
                  </div>
                  <div>
                      <h5 className="font-headline text-base print:text-xs font-bold text-primary print:text-[#fbbf24] border-b border-primary/20 pb-1 mb-2 print:pb-0 print:mb-1">Metais</h5>
                      <ul className="space-y-1 text-muted-foreground print:text-gray-300">
                          {musicos.metais.map(m => <li key={m.nome}>{m.nome}</li>)}
                      </ul>
                  </div>
                  <div>
                      <h5 className="font-headline text-base print:text-xs font-bold text-primary print:text-[#fbbf24] border-b border-primary/20 pb-1 mb-2 print:pb-0 print:mb-1">Percussão</h5>
                      <ul className="space-y-1 text-muted-foreground print:text-gray-300">
                          {musicos.percussao.map(m => <li key={m.nome}>{m.nome}</li>)}
                      </ul>
                  </div>
                  <div>
                      <h5 className="font-headline text-base print:text-xs font-bold text-primary print:text-[#fbbf24] border-b border-primary/20 pb-1 mb-2 print:pb-0 print:mb-1">Cordas</h5>
                      <ul className="space-y-1 text-muted-foreground print:text-gray-300">
                          {musicos.cordas.map(m => <li key={m.nome}>{m.nome}</li>)}
                      </ul>
                  </div>
                  <div className="print:block">
                      <h5 className="font-headline text-base print:text-xs font-bold text-primary print:text-[#fbbf24] border-b border-primary/20 pb-1 mb-2 print:pb-0 print:mb-1">Equipe</h5>
                      <ul className="space-y-1 text-muted-foreground print:text-gray-300">
                          {musicos.equipe.map(m => <li key={m.nome}>{m.nome}</li>)}
                      </ul>
                  </div>
              </div>
          </div>
      </section>

      {/* =====================================================================================
          6. PROJETOS EM ANDAMENTO & IMPACTO (Itens 5 e 6)
      ===================================================================================== */}
      <section className="py-16 px-6 md:px-20 max-w-7xl mx-auto print:py-8 min-h-[210mm] flex flex-col justify-center break-after-page">
        <div className="mb-8 print:mb-4 flex items-center gap-2 text-primary print:text-white">
          <span className="text-4xl font-bold opacity-30">06</span>
          <h3 className="text-xl font-bold uppercase tracking-widest" style={{ color: '#fbbf24', printColorAdjust: 'exact' }}>Projetos Atuais & Impacto Social</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-8 print:gap-4">
          <div className="space-y-6 print:space-y-4">
            <h4 className="font-headline text-2xl print:text-xl font-bold mb-4 print:text-white">Temporada 2026</h4>
            
            <div className="flex gap-4 items-start break-inside-avoid">
              <Film className="shrink-0 text-primary mt-1 print:text-[#fbbf24]" />
              <div>
                <strong className="block text-lg print:text-sm print:text-white">Trilhas de Cinema</strong>
                <p className="text-sm print:text-xs text-muted-foreground print:text-gray-300">Série de concertos focada em grandes temas de filmes, estratégia para atrair o público jovem e lotar teatros.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start break-inside-avoid">
              <Users className="shrink-0 text-primary mt-1 print:text-[#fbbf24]" />
              <div>
                <strong className="block text-lg print:text-sm print:text-white">Liderança Feminina</strong>
                <p className="text-sm print:text-xs text-muted-foreground print:text-gray-300">Contratação de Maestra Titular e repertório com compositoras brasileiras. Meta de atingir 30% do corpo feminino.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start break-inside-avoid">
              <Heart className="shrink-0 text-primary mt-1 print:text-[#fbbf24]" />
              <div>
                <strong className="block text-lg print:text-sm print:text-white">Ação Social: Dignidade Feminina</strong>
                <p className="text-sm print:text-xs text-muted-foreground print:text-gray-300">
                  Realização de concertos beneficentes com ingresso solidário (absorventes) destinado a <strong>mulheres em situação de cárcere (detentas)</strong>.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-card border border-primary/20 rounded-xl p-8 print:p-4 shadow-lg break-inside-avoid print:border-gray-500 print:bg-[#1a202c]">
             <h4 className="font-headline text-2xl print:text-xl font-bold mb-6 print:mb-3 print:text-white">O Que Dizem os Parceiros</h4>
             {testimonials.slice(0, 1).map((t) => (
                <div key={t.id} className="italic text-muted-foreground print:text-gray-300">
                  <p className="mb-4 text-justify print:mb-2 text-sm">"{t.quote}"</p>
                  <strong className="block text-foreground not-italic print:text-white">{t.name}</strong>
                  <span className="text-xs uppercase tracking-wider text-primary font-bold print:text-[#fbbf24]">{t.title}</span>
                </div>
             ))}
             <Separator className="my-6 print:my-2 bg-primary/20" />
             <div className="text-center">
                <p className="text-sm font-bold uppercase mb-4 print:mb-2 print:text-white">Parceiros e Palcos</p>
                <div className="flex flex-wrap justify-center gap-4 opacity-70 print:opacity-100 print:text-gray-300 font-bold text-xs">
                   <span>SESC RIO</span> • <span>MÚSICA NO MUSEU</span> • <span>CCBB</span> • <span>TEATRO CARLOS GOMES</span>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* =====================================================================================
          7. OBJETIVOS NA LEI ROUANET (Conforme Item 7 da Minuta)
      ===================================================================================== */}
      <section className="py-16 px-6 md:px-20 max-w-7xl mx-auto print:py-10 min-h-[210mm] flex flex-col justify-center break-after-page">
        <div className="mb-8 print:mb-4 flex items-center gap-2 text-primary print:text-white">
          <span className="text-4xl font-bold opacity-30">07</span>
          <h3 className="text-xl font-bold uppercase tracking-widest" style={{ color: '#fbbf24', printColorAdjust: 'exact' }}>Plano de Execução (Lei Rouanet)</h3>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 print:gap-4 mb-8 print:mb-4">
          <div className="space-y-6">
            <h4 className="font-headline text-2xl print:text-lg font-bold flex items-center gap-2 print:text-white">
              <Landmark className="text-primary print:text-[#fbbf24]" /> Dados do Projeto
            </h4>
            <ul className="space-y-4 print:space-y-1 text-base print:text-sm print:text-gray-300">
              <li><strong>PRONAC:</strong> 2512974</li>
              <li><strong>Área:</strong> Música (Art. 18 - 100% Incentivo)</li>
              <li><strong>Prazo de Captação:</strong> Até 01/12/2026</li>
              <li><strong>Local de Execução:</strong> Rio de Janeiro, RJ</li>
            </ul>
          </div>
          <div className="space-y-6">
             <h4 className="font-headline text-2xl print:text-lg font-bold flex items-center gap-2 print:text-white">
                <FileText className="text-primary print:text-[#fbbf24]" /> Destinação dos Recursos
              </h4>
              <ul className="list-disc list-inside space-y-2 print:space-y-1 text-sm print:text-xs text-muted-foreground print:text-gray-300">
                <li>Pagamento de cachês para músicos e equipe técnica.</li>
                <li>Locação de pautas em teatros de grande porte.</li>
                <li>Produção de material de marketing e divulgação.</li>
                <li>Logística e transporte de instrumentos.</li>
                <li>Ações de acessibilidade e democratização.</li>
              </ul>
          </div>
        </div>

        {/* Box Lei Rouanet */}
        <div className="bg-card p-10 rounded-3xl border-2 border-primary/20 text-center break-inside-avoid print:bg-[#1a202c] print:border-gray-500">
            <Landmark size={64} className="mx-auto text-primary mb-6 print:text-[#fbbf24]" />
            <h3 className="font-headline text-3xl font-bold mb-4 text-primary print:text-[#fbbf24]">Incentivo Fiscal: 100%</h3>
            <p className="text-lg mb-6 leading-relaxed text-muted-foreground print:text-gray-300">
              Este projeto está aprovado no <strong>Artigo 18</strong> da Lei Rouanet. Sua empresa pode deduzir <strong>100% do valor investido</strong> do Imposto de Renda devido (até 4% para Lucro Real).
            </p>
            <div className="bg-background/50 p-6 rounded-xl border border-primary/30 inline-block w-full print:bg-black/20 print:border-gray-600">
              <span className="block text-xs uppercase tracking-widest mb-2 font-bold text-muted-foreground print:text-gray-400">Status de Aprovação</span>
              <div className="font-mono text-sm md:text-base break-words text-foreground print:text-white font-bold">
                 PRONAC 2512974 • Aprovado e pronto para captação
              </div>
            </div>
        </div>
      </section>


      {/* =====================================================================================
          8. COMPROVAÇÕES (Item 8 da Minuta - A "Parte Robusta")
      ===================================================================================== */}
      <section className="py-16 px-6 md:px-20 max-w-7xl mx-auto print:py-6 min-h-[210mm] flex flex-col justify-center break-after-page">
        <div className="mb-8 print:mb-4 flex items-center gap-2 text-primary print:text-white">
          <span className="text-4xl font-bold opacity-30">08</span>
          <h3 className="text-xl font-bold uppercase tracking-widest" style={{ color: '#fbbf24', printColorAdjust: 'exact' }}>Galeria de Comprovações</h3>
        </div>
        <p className="mb-8 print:mb-4 text-muted-foreground print:text-gray-300">Registro visual das atividades realizadas, materiais de divulgação e impacto de público.</p>

        <div className="grid grid-cols-2 md:grid-cols-3 print:grid-cols-5 gap-4 print:gap-1 mb-12 print:mb-4">
          {proofImages.map((img, idx) => (
            <div key={img.id} className="relative aspect-video rounded-lg overflow-hidden border border-primary/20 break-inside-avoid print:border-gray-500">
               <Image 
                 src={img.imageUrl} 
                 alt="" 
                 fill 
                 className="object-cover"
               />
            </div>
          ))}
        </div>

        <h4 className="font-bold text-xl mb-6 print:mb-3 print:text-white flex items-center gap-2">
          <Film className="text-primary print:text-[#fbbf24]"/> Registros Videográficos
        </h4>
        <div className="grid md:grid-cols-2 print:grid-cols-3 gap-6 print:gap-2">
          {VideoAssets.map((video) => {
             const thumbnail = ImageAssets.find(img => img.id === video.thumbnailId);
             const url = video.source === 'youtube' ? `https://youtube.com/watch?v=${video.embedId}` : '#';
             
             return (
               <Link key={video.id} href={url} target="_blank" rel="noopener noreferrer" className="block group break-inside-avoid">
                 <div className="flex gap-4 border border-primary/20 p-4 print:p-2 rounded-xl bg-card hover:border-primary transition print:border-gray-500 print:bg-[#1a202c]">
                    <div className="relative w-32 print:w-24 h-auto print:aspect-video shrink-0 bg-black rounded overflow-hidden border border-primary/30">
                       {thumbnail && <Image src={thumbnail.imageUrl} alt="" fill className="object-cover opacity-80" />}
                       <PlayCircle className="absolute inset-0 m-auto text-white w-8 h-8" />
                    </div>
                    <div className="flex flex-col justify-center">
                       <strong className="text-sm print:text-xs font-bold group-hover:text-primary print:text-white">{video.description}</strong>
                       <span className="text-xs print:text-[10px] text-muted-foreground flex items-center gap-1 mt-1 print:text-gray-400">
                         Assistir Registro <ExternalLink size={10} />
                       </span>
                    </div>
                 </div>
               </Link>
             )
          })}
        </div>
        
        <div className="mt-8 print:mt-4 grid md:grid-cols-2 gap-4 print:gap-2">
            <div className="flex items-center gap-3 p-4 print:p-2 border border-dashed border-primary/30 rounded-lg text-muted-foreground text-sm print:text-xs print:border-gray-600 print:text-gray-400">
                <FileText size={20} />
                <span>Notas Fiscais e Contratos disponíveis sob demanda.</span>
            </div>
            <Link href="https://www.bandasinfonicanacional.com.br/noticias" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 p-4 print:p-2 border border-dashed border-primary/30 rounded-lg text-muted-foreground hover:text-primary transition-colors text-sm print:text-xs print:border-gray-600 print:text-gray-400 print:hover:text-white">
                <FileCheck size={20} />
                <span className="group-hover:underline">Clipping de Imprensa e Atestados de Capacidade Técnica em anexo.</span>
                <ExternalLink size={16} className="ml-auto opacity-70 group-hover:opacity-100"/>
            </Link>
        </div>
      </section>

      {/* =====================================================================================
          9. CONTATOS (Conforme Item 9 da Minuta)
      ===================================================================================== */}
      <section className="py-16 px-6 md:px-20 max-w-7xl mx-auto bg-primary/5 mt-8 border-t border-primary/20 print:bg-[#1a202c] print:border-gray-500 min-h-[210mm] flex flex-col justify-center">
        <div className="mb-8 print:mb-4 flex items-center gap-2 text-primary print:text-white">
          <span className="text-4xl font-bold opacity-30">09</span>
          <h3 className="text-xl font-bold uppercase tracking-widest" style={{ color: '#fbbf24', printColorAdjust: 'exact' }}>Contatos</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-12 print:gap-6 text-lg print:text-base">
           <div className="break-inside-avoid">
             <p className="uppercase text-xs font-bold tracking-widest text-muted-foreground mb-1 print:text-gray-400">Responsável Legal</p>
             <p className="font-bold mb-6 print:text-white">Geyzilane de Andrade Moreira</p>

             <p className="uppercase text-xs font-bold tracking-widest text-muted-foreground mb-1 print:text-gray-400">Email</p>
             <p className="font-bold mb-6 print:text-white">bandasinfonicanacional@gmail.com</p>
           </div>

           <div className="break-inside-avoid">
             <p className="uppercase text-xs font-bold tracking-widest text-muted-foreground mb-1 print:text-gray-400">Redes Sociais</p>
             <p className="font-bold mb-6 print:text-white">@bandasinfonicanacionalbr</p>
           </div>
        </div>

        <div className="mt-12 print:mt-6 pt-8 print:pt-4 border-t border-primary/20 text-center text-sm text-muted-foreground print:text-gray-500 print:border-gray-700">
          <p>Este portfólio foi elaborado em conformidade com a IN Nº 29 e a Portaria SEFIC/MINC Nº 819/2025.</p>
          
          <div className="mt-8 print:mt-4 mb-4 print:mb-2 flex justify-center items-center gap-6">
            <Link href="https://web.facebook.com/profile.php?id=61582234621848" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
            </Link>
            <Link href="https://www.instagram.com/bandasinfonicanacionalbr/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
            </Link>
            <Link href="https://youtube.com/@bandasinfonicanacional?si=aY0vFga80RHuWRJX" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
            </Link>
          </div>
          
          <div className="mb-6 print:mb-3">
            <Link href="https://bandasinfonicanacional.com.br" target="_blank" className="font-semibold text-sm hover:text-primary transition-colors">
              www.bandasinfonicanacional.com.br
            </Link>
          </div>

          <p className="text-xs text-muted-foreground/70 print:text-gray-500">
            Desenvolvido por{' '}
            <Link href="https://github.com/annielarcher" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary transition-colors">
              Annie Larcher
            </Link>
          </p>
        </div>
      </section>

    </div>
  );
}
