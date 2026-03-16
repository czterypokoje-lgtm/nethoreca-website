import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import ProductCard from '@/components/ProductCard';
import TeamContactCTA from '@/components/shared/TeamContactCTA';
import { teamMembers } from '@/lib/trust-signals';
import styles from '../page.module.css';
import { createPageMetadata } from '@/lib/seo-metadata';

export const metadata: Metadata = createPageMetadata({
    title: 'Mopy Rasant - Mikrofibra, System Płaski, Planet | NetHoreca',
    description: 'Profesjonalne mopy Rasant: mikrofibra, bawełna, seria Planet (100% recykling). System płaski z magnetycznym stelażem. Ergonomiczne kije teleskopowe. Zamów próbki!',
    path: '/sprzet-akcesoria/mopy',
    keywords: ['mopy Rasant', 'mopy mikrofibra hotelowe', 'mopy płaskie profesjonalne', 'system mopowania Rasant', 'mopy Planet recykling'],
});

export default function MopsPage() {
    const products = [
        // COTTON MOPS (40cm)
        {
            title: 'Nakładka Rasant Basic 40cm',
            description: 'Podstawowy mop bawełniany, pętelkowy. Idealny do codziennego mycia posadzek hotelowych.',
            imageSrc: '/products/mop-hotelowy-plaski-rasant-ecolab.webp',
            features: ['Bawełna', '40cm', 'Podstawowy'],
            href: '/produkty/rasant-basic',
            category: 'Bawełna'
        },
        {
            title: 'Nakładka Rasant Standard 40cm',
            description: 'Klasyczny mop bawełniany o zwiększonej chłonności. Wytrzymały i skuteczny na mokro.',
            imageSrc: '/products/mop-hotelowy-plaski-rasant-ecolab.webp',
            features: ['Wysoka chłonność', '40cm', 'Standard'],
            href: '/produkty/rasant-standard',
            category: 'Bawełna'
        },
        {
            title: 'Rasant Perfect Care',
            description: 'Mop bawełniany o gęstym splocie (zielony). Dedykowany do delikatniejszych powierzchni.',
            imageSrc: '/products/mop-hotelowy-plaski-rasant-ecolab.webp',
            features: ['Gęsty splot', 'Delikatny', 'Zielony'],
            href: '/produkty/rasant-perfect-care',
            category: 'Bawełna Premium'
        },
        {
            title: 'Blizzard z zaczepem',
            description: 'Mop bawełniany z systemem mocowania Blizzard (zaczep). Szybkie i pewne mocowanie.',
            imageSrc: '/products/mop-hotelowy-plaski-rasant-ecolab.webp',
            features: ['System Blizzard', 'Zaczep', 'Szybki montaż'],
            href: '/produkty/blizzard-zaczep',
            category: 'System Blizzard'
        },
        {
            title: 'Rasant Combitex',
            description: 'Mop kombinowany (bawełna + mikrowłókna) z żółtym przeszyciem. Łączy chłonność z siłą czyszczenia.',
            imageSrc: '/products/mop-hotelowy-plaski-rasant-ecolab.webp',
            features: ['Bawełna+Mikro', 'Żółte nici', 'Mocny'],
            href: '/produkty/rasant-combitex',
            category: 'Hybrydowy'
        },

        // MICROFIBER MOPS
        {
            title: 'Rasant Micro Basic',
            description: 'Mop z mikrofibry (niebieski melanż). Doskonały do mycia i dezynfekcji gładkich powierzchni.',
            imageSrc: '/products/mop-hotelowy-plaski-rasant-ecolab.webp',
            features: ['Mikrofibra', 'Niebieski', 'Dezynfekcja'],
            href: '/produkty/rasant-micro-basic',
            category: 'Mikrofibra'
        },
        {
            title: 'Rasant Micro Top',
            description: 'Mop z mikrofibry klasy Premium. Najwyższa skuteczność usuwania brudu i bakterii (99.9%).',
            imageSrc: '/products/mop-hotelowy-plaski-rasant-ecolab.webp',
            features: ['Premium', 'Bakteriobójczy', 'Najwyższa jakość'],
            href: '/produkty/rasant-micro-top',
            category: 'Mikrofibra Premium'
        },
        {
            title: 'Rasant TOP Care',
            description: 'Mikrofibra o strukturze pętelkowej (zielona). Do mycia zachowawczego i pielęgnacji.',
            imageSrc: '/products/mop-hotelowy-plaski-rasant-ecolab.webp',
            features: ['Pielęgnacja', 'Zielony', 'Pętelkowy'],
            href: '/produkty/rasant-top-care',
            category: 'Mikrofibra Care'
        },
        {
            title: 'RasanTEC Mono Star',
            description: 'Mop z mikrofibry jednowarstwowej. Lekki, idealny do systemów kuwetowych i preimpregnacji.',
            imageSrc: '/products/mop-hotelowy-plaski-rasant-ecolab.webp',
            features: ['Jednowarstwowy', 'Lekki', 'Preimpregnacja'],
            href: '/produkty/rasantec-mono-star',
            category: 'System Kuwetowy'
        },
        {
            title: 'Rasant Micro Scrub',
            description: 'Mop szorujący (szary melanż). Posiada paski ścierne do usuwania trudnych zabrudzeń.',
            imageSrc: '/products/mop-hotelowy-plaski-rasant-ecolab.webp',
            features: ['Szorujący', 'Paski ścierne', 'Trudny brud'],
            href: '/produkty/rasant-micro-scrub',
            category: 'Specjalistyczny'
        },

        // ECO PLANET SERIES (RECYCLED)
        {
            title: 'Rasant Basic PLANET',
            description: 'Mop w 100% z materiałów z recyklingu. Ekologiczna alternatywa dla standardowego mopa bawełnianego.',
            imageSrc: '/products/mop-hotelowy-plaski-rasant-ecolab.webp',
            features: ['100% Recykling', 'Eco Friendly', 'Bawełna'],
            href: '/produkty/rasant-planet',
            category: 'Eco Planet'
        },
        {
            title: 'Rasant Micro Top PLANET',
            description: 'Ekologiczny mop z mikrofibry (niebieski nakrapiany). Zrównoważony wybór bez kompromisów w jakości.',
            imageSrc: '/products/mop-hotelowy-plaski-rasant-ecolab.webp',
            features: ['100% Recykling', 'Eco Mikrofibra', 'Premium'],
            href: '/produkty/rasant-micro-planet',
            category: 'Eco Planet'
        },

        // EXPRESS MINI SYSTEM
        {
            title: 'Rasant Xpress Mini Set',
            description: 'Kompletny zestaw: wiadro z prasą, kij, uchwyt 30cm, mop. Idealny do małych pomieszczeń i toalet.',
            imageSrc: '/products/mop-hotelowy-plaski-rasant-ecolab.webp',
            features: ['Kompletny zestaw', 'Małe biura', 'Toalety'],
            href: '/produkty/rasant-xpress-mini',
            category: 'Zestawy'
        },

        // HANDLES & HOLDERS
        {
            title: 'Uchwyt Rasant 40cm',
            description: 'Profesjonalny uchwyt do mopów kieszeniowych. Składany przyciskiem nożnym, magnetyczny.',
            imageSrc: '/products/mop-hotelowy-plaski-rasant-ecolab.webp',
            features: ['Składany', 'Magnetyczny', 'Trwały'],
            href: '/produkty/uchwyt-rasant',
            category: 'Akcesoria'
        },
        {
            title: 'Kij Aluminiowy 140cm',
            description: 'Lekki i wytrzymały kij aluminiowy. Pasuje do wszystkich uchwytów Rasant. Ergonomiczna rączka.',
            imageSrc: '/products/mop-hotelowy-plaski-rasant-ecolab.webp',
            features: ['Aluminium', '140cm', 'Lekki'],
            href: '/produkty/kij-alu',
            category: 'Akcesoria'
        }
    ];

    return (
        <main>
            <PageHeader
                title="Mopy i Systemy Myjące"
                subtitle="Profesjonalne Narzędzia"
                description="Kompletne systemy mopowania dla hoteli. Od klasycznych mopów bawełnianych Rasant, przez zaawansowane mikrowłókna, aż po ekologiczną linię Planet z recyklingu. Gwarancja najwyższej higieny i wydajności."
                parentHref="/sprzet-akcesoria"
                parentLabel="Wróć do Sprzętu"
            />

            <section className={styles.section}>
                <div className="container">
                    <div className={styles.grid}>
                        {products.map((product, index) => (
                            <ProductCard
                                key={index}
                                title={product.title}
                                description={product.description}
                                imageSrc={product.imageSrc}
                                features={product.features}
                                href={product.href}
                                category={product.category}
                                actionLabel="Zobacz szczegóły"
                            />
                        ))}
                    </div>
                </div>
            </section>

            <TeamContactCTA
                member={teamMembers[2]}
                title="Get in touch"
                description="Potrzebujesz pomocy w wyborze odpowiedniej nakładki rasant lub blizzard? Skontaktuj się ze mną - doradzę, które rozwiązanie najlepiej sprawdzi się na Twoich posadzkach."
            />
        </main>
    );
}
