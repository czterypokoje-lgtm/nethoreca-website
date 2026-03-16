import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import TeamContactCTA from '@/components/shared/TeamContactCTA';
import { teamMembers } from '@/lib/trust-signals';
import ProductCard from '@/components/ProductCard';
import styles from '../page.module.css';
import { createPageMetadata } from '@/lib/seo-metadata';

export const metadata: Metadata = createPageMetadata({
    title: 'Akcesoria do Sprzątania - Ścierki Mikrofibra, Gąbki | NetHoreca',
    description: 'Profesjonalne akcesoria do sprzątania: ścierki z mikrofibry (kodowanie kolorami HACCP), gąbki, skrobaki, znaki ostrzegawcze. Kompletne wyposażenie housekeepingu.',
    path: '/sprzet-akcesoria/akcesoria',
    keywords: ['akcesoria do sprzątania hotel', 'ścierki mikrofibra hotelowe', 'gąbki profesjonalne', 'kodowanie kolorami HACCP', 'wyposażenie housekeepingu'],
});

export default function AccessoriesPage() {
    const products = [
        // MICROFIBER CLOTHS
        {
            title: 'Ścierka Polifix Microclin (40cm)',
            description: 'Najwyższej jakości ścierka z mikrofibry. Kodowana kolorami (Niebieska/Czerwona/Żółta/Zielona) dla różnych stref higieny.',
            imageSrc: '/products/akcesoria-do-sprzatania-housekeeping.webp',
            features: ['Mikrofibra Premium', '4 kolory', '40x40cm'],
            href: '/produkty/polifix-microclin',
            category: 'Ściereczki'
        },
        {
            title: 'Ścierka Polifix Eco (32cm)',
            description: 'Ekonomiczna wersja ścierki mikrowłóknowej. Cieńsza, ale nadal skuteczna. Idealna do dużych obiektów.',
            imageSrc: '/products/akcesoria-do-sprzatania-housekeeping.webp',
            features: ['Ekonomiczna', '32x32cm', 'Kodowanie kolorami'],
            href: '/produkty/polifix-eco',
            category: 'Ściereczki'
        },
        {
            title: 'Polifix Microclin Planet',
            description: 'Ścierka w 100% z mikrofibry z recyklingu. Tak samo skuteczna, a przyjazna dla środowiska.',
            imageSrc: '/products/akcesoria-do-sprzatania-housekeeping.webp',
            features: ['100% Recykling', 'Eco Friendly', 'Premium'],
            href: '/produkty/polifix-planet',
            category: 'Ściereczki'
        },

        // DISPENSERS
        {
            title: 'Dozownik Papieru Toaletowego',
            description: 'Uniwersalny dozownik papieru toaletowego. Wytrzymałe tworzywo ABS, łatwe uzupełnianie, zamykany na kluczyk.',
            imageSrc: '/products/akcesoria-do-sprzatania-housekeeping.webp',
            features: ['ABS', 'System Jumbo', 'Wandaloodporny'],
            href: '/produkty/dozownik-papier-toaletowy',
            category: 'Dozowniki'
        },
        {
            title: 'Dozownik Ręczników "ZZ"',
            description: 'Dozownik do ręczników składanych typu ZZ/V. Pojemny, estetyczny, z okienkiem kontrolnym.',
            imageSrc: '/products/akcesoria-do-sprzatania-housekeeping.webp',
            features: ['Ręczniki ZZ', 'Pojemny', 'Naścienny'],
            href: '/produkty/dozownik-zz',
            category: 'Dozowniki'
        },
        {
            title: 'Dozownik Systemu Epicare',
            description: 'Dozownik łokciowy do mydła i dezynfekcji. Dedykowany do kuchni i stref o podwyższonym reżimie higienicznym.',
            imageSrc: '/products/akcesoria-do-sprzatania-housekeeping.webp',
            features: ['Łokciowy', 'Dezynfekcja', 'Higieniczny'],
            href: '/produkty/dozownik-epicare',
            category: 'Dozowniki'
        },

        // SMALL EQUIPMENT
        {
            title: 'Spryskiwacz 600ml Czerwony',
            description: 'Profesjonalna butelka ze spryskiwaczem do chemii sanitarnej. Wytrzymała głowica rozpylająca.',
            imageSrc: '/products/akcesoria-do-sprzatania-housekeeping.webp',
            features: ['600ml', 'Czerwony', 'Sanitariaty'],
            href: '/produkty/spryskiwacz-czerwony',
            category: 'Butelki'
        },
        {
            title: 'Spryskiwacz 600ml Niebieski',
            description: 'Profesjonalna butelka ze spryskiwaczem do powierzchni ogólnych i szyb.',
            imageSrc: '/products/akcesoria-do-sprzatania-housekeeping.webp',
            features: ['600ml', 'Niebieski', 'Szyby/Meble'],
            href: '/produkty/spryskiwacz-niebieski',
            category: 'Butelki'
        },
        {
            title: 'Ściągaczka do wody 55cm',
            description: 'Profesjonalna ściągaczka podłogowa z białą gumą. Nie pozostawia śladów, idealna do łazienek.',
            imageSrc: '/products/akcesoria-do-sprzatania-housekeeping.webp',
            features: ['Biała guma', '55cm', 'Higieniczna'],
            href: '/produkty/sciagaczka',
            category: 'Sprzęt'
        },
        {
            title: 'Drążek Aluminiowy 140cm',
            description: 'Uniwersalny kij aluminiowy do mopów i ściągaczek. Lekki, anodowany, odporny na korozję.',
            imageSrc: '/products/akcesoria-do-sprzatania-housekeeping.webp',
            features: ['140cm', 'Aluminium', 'Uniwersalny'],
            href: '/produkty/kij-alu',
            category: 'Akcesoria'
        },
        {
            title: 'Drążek Teleskopowy 2x100cm',
            description: 'Rozsuwany kij teleskopowy do prac na wysokości (mycie okien, odkurzanie sufitów).',
            imageSrc: '/products/akcesoria-do-sprzatania-housekeeping.webp',
            features: ['Teleskop', '200cm', 'Praca na wysokości'],
            href: '/produkty/kij-teleskop',
            category: 'Akcesoria'
        },
        {
            title: 'Kranik do kanistra 5L',
            description: 'Kranik spustowy pasujący do kanistrów Ecolab 5/6kg. Umożliwia bezpieczne dozowanie.',
            imageSrc: '/products/akcesoria-do-sprzatania-housekeeping.webp',
            features: ['Gwint DIN', '5L', 'Bezpieczeństwo'],
            href: '/produkty/kranik-5l',
            category: 'Dozowanie'
        },
        {
            title: 'Kranik do kanistra 10L/20L',
            description: 'Większy kranik do dużych kanistrów 10L i 20L. Solidna konstrukcja, duży przepływ.',
            imageSrc: '/products/akcesoria-do-sprzatania-housekeeping.webp',
            features: ['Gwint DIN', 'Duży', 'Szybki przepływ'],
            href: '/produkty/kranik-10l',
            category: 'Dozowanie'
        },
        {
            title: 'Pompka dozująca 20ml',
            description: 'Pompka nakręcana na kanister. Dozuje precyzyjną dawkę 20ml lub 30ml koncentratu.',
            imageSrc: '/products/akcesoria-do-sprzatania-housekeeping.webp',
            features: ['Precyzja', '20-30ml', 'Oszczędność'],
            href: '/produkty/pompka',
            category: 'Dozowanie'
        },
        {
            title: 'Półka na kanistry (Stacjonarna)',
            description: 'Metalowa półka ścienna na kanistry 5L/10L. Uporządkowuje chemię w magazynie.',
            imageSrc: '/products/akcesoria-do-sprzatania-housekeeping.webp',
            features: ['Naśćienna', 'Metal', 'Porządek'],
            href: '/produkty/polka-kanistry',
            category: 'Magazyn'
        },
        {
            title: 'Tabliczka "Uwaga Ślisko"',
            description: 'Żółty potykacz ostrzegawczy. Obowiązkowy podczas serwisu sprzątającego w miejscach publicznych.',
            imageSrc: '/products/akcesoria-do-sprzatania-housekeeping.webp',
            features: ['BHP', 'Składana', 'Widoczna'],
            href: '/produkty/tabliczka-slisko',
            category: 'BHP'
        }
    ];

    return (
        <main>
            <PageHeader
                title="Akcesoria i Drobny Sprzęt"
                subtitle="Wyposażenie Uzupełniające"
                description="Niezbędne drobiazgi, które tworzą profesjonalny system sprzątania. Kolorowe ściereczki mikrofibrowe Polifix zapobiegają zakażeniom krzyżowym, a trwałe dozowniki zapewniają higienę w łazienkach publicznych."
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
                description="Szukasz konkretnych akcesoriów lub rozwiązania problemu, którego nie widzisz w katalogu? Od 12 lat wspieram hotele w doborze profesjonalnego sprzętu - zapraszam do kontaktu."
            />
        </main>
    );
}
