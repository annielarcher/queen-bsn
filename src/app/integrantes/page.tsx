import { musicos } from '@/lib/institutional-data';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Integrantes',
  description: 'Conheça os talentosos músicos e a equipe que compõem a Banda Sinfônica Nacional, organizados por naipes de instrumentos e funções.',
};

type Musician = { nome: string; instrumento: string };

const groupAndSortMusicians = (musiciansList: Musician[]) => {
  const groupedByInstrument = musiciansList.reduce((acc, musician) => {
    const instrument = musician.instrumento;
    let groupKey: string;

    if (instrument.includes('Requinta')) {
      groupKey = 'Requinta';
    } else if (instrument.includes('Clarone')) {
      groupKey = 'Clarone';
    } else if (instrument.startsWith('Clarineta')) {
      groupKey = 'Clarineta';
    } else if (instrument.startsWith('Flauta')) {
      groupKey = 'Flauta';
    } else if (instrument.startsWith('Oboé')) {
      groupKey = 'Oboé';
    } else {
      groupKey = instrument.split(' (')[0].trim();
    }

    if (!acc[groupKey]) {
      acc[groupKey] = [];
    }
    acc[groupKey].push(musician);
    return acc;
  }, {} as Record<string, Musician[]>);

  for (const instrument in groupedByInstrument) {
    groupedByInstrument[instrument].sort((a, b) => a.nome.localeCompare(b.nome));
  }
  
  const instrumentOrder = ['Clarineta', 'Requinta', 'Clarone'];

  return Object.entries(groupedByInstrument).sort((a, b) => {
    const instrumentA = a[0];
    const instrumentB = b[0];

    const indexA = instrumentOrder.indexOf(instrumentA);
    const indexB = instrumentOrder.indexOf(instrumentB);

    if (indexA !== -1 && indexB !== -1) {
      return indexA - indexB; // Both in custom order, sort by index
    }
    if (indexA !== -1) {
      return -1; // A is in custom order, B is not; A comes first
    }
    if (indexB !== -1) {
      return 1; // B is in custom order, A is not; B comes first
    }

    // Neither are in custom order, sort alphabetically
    return instrumentA.localeCompare(instrumentB);
  });
};

const formatInstrumentTitle = (instrument: string) => {
  if (instrument.includes('(') || instrument.endsWith('s')) {
    return instrument;
  }
  
  switch (instrument) {
    case 'Saxofone alto':
      return 'Saxofones altos';
    case 'Saxofone tenor':
      return 'Saxofones tenores';
    case 'Saxofone soprano':
      return 'Saxofones sopranos';
    default:
      return `${instrument}s`;
  }
};


export default function IntegrantesPage() {
  const sections = [
    { title: "Madeiras", data: musicos.madeiras },
    { title: "Metais", data: musicos.metais },
    { title: "Cordas", data: musicos.cordas },
    { title: "Percussão", data: musicos.percussao },
    { title: "Equipe", data: musicos.equipe },
  ];

  return (
    <div className="container py-12 md:py-20">
      <header className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold">Integrantes</h1>
        <p className="text-muted-foreground mt-2 text-lg">Conheça os talentos que compõem a nossa banda, dentro e fora do palco.</p>
      </header>

      <div className="max-w-5xl mx-auto">
        <Accordion type="multiple" defaultValue={["Madeiras"]} className="w-full">
          {sections.map((section) => (
            <AccordionItem value={section.title} key={section.title}>
              <AccordionTrigger className="text-2xl font-headline hover:text-primary transition-colors py-4">
                {section.title}
              </AccordionTrigger>
              <AccordionContent>
                {section.title === 'Equipe' ? (
                   <ul className="pt-4">
                    {section.data.map((member) => (
                      <li key={member.nome} className="flex flex-col">
                        <span className="font-bold text-foreground">{member.nome}</span>
                        <span className="text-sm text-muted-foreground">{member.instrumento}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8 pt-4">
                    {groupAndSortMusicians(section.data as Musician[]).map(([instrument, musicians]) => (
                      <div key={instrument} className="flex flex-col space-y-2 break-inside-avoid">
                        <h4 className="font-headline text-xl text-primary font-semibold border-b border-primary/30 pb-2">
                          {formatInstrumentTitle(instrument)}
                        </h4>
                        <ul className="space-y-3 pt-2">
                          {musicians.map((musico) => (
                            <li key={musico.nome}>
                              <p className="font-semibold text-foreground">{musico.nome}</p>
                              <p className="text-sm text-muted-foreground">{musico.instrumento}</p>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
