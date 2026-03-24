import { Calendar, MapPin } from 'lucide-react';
import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { parsePtBrDate } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Agenda',
  description: 'Consulte a agenda de concertos da Banda Sinfônica Nacional. Veja nossas próximas apresentações e relembre os eventos passados em ordem cronológica.',
};

const unsortedPastEvents = [
  {
    title: 'Abertura da Série "Música no Museu"',
    date: '20 de Janeiro de 2026',
    location: 'Espaço Cultural Arte Sesc, Flamengo',
    description: 'Concerto gratuito de abertura da temporada 2026 da série "Música no Museu", com participações especiais do tenor Wladimir Cabanas e do grupo gaiteiro BrazilianPiper.',
  },
  {
    title: 'Queen Sinfônica',
    date: '19 de Dezembro de 2025',
    location: 'Multiplan Hall - Park Shopping Jacarepaguá',
    description: 'Uma fusão espetacular de Rock e Clássico, apresentando os maiores sucessos do Queen em colaboração com a banda Special Queen.',
  },
  {
    title: 'Concerto "Clássicos Brasileiros"',
    date: '29 de Setembro de 2025',
    location: 'Espaço Cultural Sesc Flamengo',
    description: 'Uma noite dedicada aos grandes mestres da música brasileira, em um concerto às 18h que exalta nossa riqueza cultural.',
  },
  {
    title: 'Concerto em Homenagem ao Dia dos Pais',
    date: '10 de Agosto de 2025',
    location: 'Teatro Carlos Gomes',
    description: 'Uma apresentação especial às 11:00 em homenagem ao Dia dos Pais, com um repertório emocionante e envolvente.',
  },
  {
    title: 'Abertura da Série "Sons do Brasil"',
    date: '01 de Agosto de 2025',
    location: 'Centro Cultural Banco do Brasil (CCBB), RJ',
    description: 'Concerto de abertura da série "Sons do Brasil" às 12:30, com um repertório que celebra a diversidade musical de todas as regiões do Brasil e clássicos mundiais.',
  },
  {
    title: 'Estreia no XX Rio Harp Festival',
    date: '22 de Julho de 2025',
    location: 'Espaço Cultural Arte Sesc, Flamengo',
    description: 'A grande estreia da Banda Sinfônica Nacional, marcando presença no prestigiado XX Rio Harp Festival às 18h.',
  },
];

const pastEvents = [...unsortedPastEvents].sort((a, b) => parsePtBrDate(b.date).getTime() - parsePtBrDate(a.date).getTime());

export default function AgendaPage() {
  return (
    <div className="container py-12 md:py-20">
      <header className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold">Agenda de Concertos</h1>
        <p className="text-muted-foreground mt-2 text-lg">Acompanhe nossas próximas apresentações e relembre os eventos passados.</p>
      </header>

      {/* Upcoming Events Section */}
      <section id="proximos-eventos" className="mb-20">
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-8">Próximos Eventos</h2>
        <div className="flex flex-col items-center justify-center text-center py-16 px-6 bg-card rounded-lg border border-border">
          <Calendar className="h-16 w-16 text-primary mb-6" />
          <h3 className="text-2xl font-bold mb-2">Nenhum evento agendado</h3>
          <p className="text-muted-foreground max-w-md">
            Estamos preparando nossa nova temporada. Fique de olho aqui e em nossas redes sociais para não perder as novidades!
          </p>
        </div>
      </section>

      {/* Past Events Section */}
      <section id="historico">
        <header className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Histórico de Eventos</h2>
          <p className="text-muted-foreground mt-2 text-lg">Uma retrospectiva de nossas apresentações.</p>
        </header>
        
        <div className="max-w-3xl mx-auto space-y-8">
          {pastEvents.map((event, index) => (
            <Card key={index} className="bg-card border-border/60 shadow-lg opacity-75 hover:opacity-100 transition-opacity duration-300">
              <CardHeader>
                <CardTitle className="font-headline text-3xl text-primary">{event.title}</CardTitle>
                <div className="flex flex-col sm:flex-row gap-x-6 gap-y-2 text-sm text-muted-foreground pt-2">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>{event.location}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-justify">{event.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
