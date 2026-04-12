import type { Metadata } from 'next';
import TowelsHero from '@/components/towels/TowelsHero';
import TowelsCalculator from '@/components/towels/TowelsCalculator';
import GSMGuide from '@/components/towels/GSMGuide';
import TowelsCollections from '@/components/towels/TowelsCollections';
import TowelsSpecs from '@/components/towels/TowelsSpecs';
import RentVsBuyComparison from '@/components/bedding/RentVsBuyComparison';
import TrustBar from '@/components/shared/TrustBar';
import ProductFAQ from '@/components/shared/ProductFAQ';
import ProductCTA from '@/components/shared/ProductCTA';
import TeamContactCTA from '@/components/shared/TeamContactCTA';
import { teamMembers } from '@/lib/trust-signals';
import styles from './reczniki.module.css';
import { createPageMetadata } from '@/lib/seo-metadata';

export const metadata: Metadata = createPageMetadata({
    title: 'Ręczniki Hotelowe Frotte - 400-650 g/m² Bawełna | NetHoreca',
    description: 'Profesjonalne ręczniki hotelowe frotte marki NetHoreca. Gramatura 400-650 g/m², 100% bawełna. Komplet hotelowy: kąpielowy, frotte, mały. Wynajem lub zakup. Zamów próbki!',
    path: '/tekstylia-hotelowe/reczniki',
    keywords: ['ręczniki hotelowe frotte', 'ręczniki bawełniane dla hoteli', 'ręczniki 500g', 'komplet ręczników hotelowych', 'wynajem ręczników', 'ręczniki kąpielowe hotel'],
});

const towelsFaqs = [
    {
        question: "Jaka gramatura ręcznika jest najlepsza dla hotelu 4-gwiazdkowego?",
        answer: "Dla hoteli 3* i 4* standardem jest 500 GSM. Taka gramatura zapewnia doskonały balans między chłonnością i miękkością a czasem schnięcia w pralni przemysłowej."
    },
    {
        question: "Czym jest 'podwójna pętelka' w ręcznikach hotelowych?",
        answer: "To specjalny splot (tzw. Ring Spun), gdzie pętelki są gęściej rozmieszczone i bardziej odporne na wyciąganie. Dzięki temu ręcznik nie strzępi się i zachowuje formę przez setki cykli prania."
    },
    {
        question: "Czy oferujecie wynajem ręczników?",
        answer: "Tak, specjalizujemy się w wynajmie ręczników w modelu HUB. Hotel nie musi kupować ręczników na własność - płaci stałą stawkę za każdą wypraną sztukę (zapas ręczników jest wliczony w cenę)."
    },
    {
        question: "Jakie rozmiary ręczników hotelowych są standardowe?",
        answer: "Standardowy zestaw to: 30x50 cm (do rąk), 50x100 cm (do twarzy) oraz 70x140 cm (kąpielowy). Oferujemy również dywaniki łazienkowe (stopki) 50x70 cm o gramaturze 700g."
    }
];

export default function TowelsPage() {
    return (
        <main className={styles.main}>
            <TowelsHero />
            <TrustBar />
            <TowelsCollections />
            <RentVsBuyComparison />
            <GSMGuide />
            <TowelsCalculator />
            <TowelsSpecs />
            <ProductFAQ faqs={towelsFaqs} title="Pytania o Ręczniki Hotelowe" />
            <TeamContactCTA
                member={teamMembers[1]}
                title="Get in touch"
                description="Masz pytania dotyczące gramatur lub splotów naszych ręczników? Anna Kowalska doradzi Ci w wyborze najlepszej kolekcji dla Twojego hotelu."
            />
            <ProductCTA
                productName="Ręczniki NetHoreca"
                description="Chcesz sprawdzić jakość naszych ręczników? Zamów bezpłatne próbki do swojego hotelu."
            />
        </main>
    );
}
