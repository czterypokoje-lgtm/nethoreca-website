import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import ReferenceSection from '@/components/sections/ReferenceSection';
import TeamContactCTA from '@/components/shared/TeamContactCTA';
import { teamMembers } from '@/lib/trust-signals';
import { createPageMetadata } from '@/lib/seo-metadata';
import styles from './page.module.css';
import {
    Checkmark,
    ArrowRight,
    Recycle,
    Certificate,
    Delivery,
    ChartPie,
    Store,
    Sprout,
    Chemistry,
    Clean,
    Save,
    Settings,
    UserFilled,
    WarningAlt,
    DataVis_1
} from '@carbon/icons-react';

export const metadata: Metadata = createPageMetadata({
    title: 'Chemia Ecolab - Profesjonalne Środki Czystości dla Hoteli | NetHoreca',
    description: 'Autoryzowany partner Ecolab w Polsce. 130+ profesjonalnych środków do pralni (Ecobrite), kuchni HACCP (Apex), housekeepingu (Oasis Pro), dezynfekcji. Szkolenia gratis. Zamów bezpłatny audyt!',
    path: '/chemia-ecolab',
    keywords: [
        'chemia Ecolab',
        'chemia dla hoteli',
        'profesjonalne środki czystości',
        'Ecobrite Ecolab',
        'Oasis Pro Ecolab',
        'Apex Ecolab zmywarka',
        'systemy dozujące hotelowe',
        'HACCP dla gastronomii',
        'dezynfekcja hotelowa',
        'partner Ecolab Polska'
    ],
});

const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Chemia Profesjonalna Ecolab",
    "brand": {
        "@type": "Brand",
        "name": "Ecolab"
    },
    "description": "Profesjonalne środki czystości i systemy higieny dla branży HoReCa",
    "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "PLN",
        "availability": "https://schema.org/InStock"
    }
};

// Product categories based on Ecolab catalog
const productCategories = [
    {
        id: 'uzytkowanie-czystosci',
        title: 'Utrzymanie Czystości (Housekeeping)',
        description: 'Systemy Oasis Pro i Maxx dla perfekcyjnej czystości pokoi',
        Icon: Clean,
        products: [
            'Oasis Pro - Superkoncentraty do pokoi',
            'Maxx2 - Ekologiczne środki do podłóg',
            'Dezynfekcja powierzchni dotykowych',
            'Oasis Pro Air - Odświeżacze powietrza',
            'Srodki do pielęgnacji mebli'
        ],
        badge: 'H HOUSEKEEPING',
        color: '#0066cc'
    },
    {
        id: 'higiena-kuchni',
        title: 'Higiena Kuchni (HACCP)',
        description: 'Mniej wody, energii i odpadów dzięki systemowi Apex',
        Icon: Restaurant,
        products: [
            'Apex - Stałe bloki do zmywarek',
            'Greasecutter - Usuwanie tłuszczu',
            'Dezynfekcja powierzchni kuchennych',
            'Higiena osobista pracowników',
            'Systemy namaczania sztućców'
        ],
        badge: 'K KITCHEN',
        color: '#eab308'
    },
    {
        id: 'pralnia',
        title: 'Pralnia Hotelowa',
        description: 'Nieskazitelna biel i miękkość przy niższych temperaturach',
        Icon: Chemistry,
        products: [
            'Ecobrite - Płynny system piorący',
            'Oxybrite - Wybielanie w 40°C',
            'Softener - Profesjonalne zmiękczacze',
            'Emulsje piorące 40°C - 90°C',
            'Specjalistyczne odplamiacze'
        ],
        badge: 'L LAUNDRY',
        color: '#3b82f6'
    },
    {
        id: 'dezynfekcja',
        title: 'Dezynfekcja i Higiena',
        description: 'Bezpieczeństwo gości i personelu zgodne z normami UE',
        Icon: WarningAlt,
        products: [
            'Skinman Soft - Dezynfekcja rąk',
            'Manisoft - Delikatne mydła w płynie',
            'Incidin - Dezynfekcja powierzchni',
            'Sirafan - Szybka dezynfekcja kuchni',
            'Stacje dezynfekcji rąk'
        ],
        badge: 'S SAFETY',
        color: '#ef4444'
    },
    {
        id: 'dozowniki-ecolab',
        title: 'Systemy Dozujące',
        description: 'Precyzja, oszczędność i bezpieczeństwo pracy',
        Icon: Settings,
        products: [
            'Stacje dozujące do zmywarek',
            'Systemy dozowania do pralnic',
            'Penguin Pro - Dozowanie koncentratów',
            'Dozowniki mydła i dezynfekcji',
            'Zabezpieczenia przed kradzieżą'
        ],
        badge: 'D DISPENSERS',
        color: '#64748b'
    },
    {
        id: 'szkolenia',
        title: 'Wsparcie i Szkolenia',
        description: 'Edukacja personelu i optymalizacja procesów',
        Icon: UserFilled,
        products: [
            'Audyty higieniczne obiektu',
            'Szkolenia personelu sprzątającego',
            'Plany higieny HACCP',
            'Wsparcie przy otwarciu hotelu',
            'Serwis techniczny 24/7'
        ],
        badge: 'T TRAINING',
        color: '#10b981'
    }
];

const sustainabilityFeatures = [
    {
        icon: Sprout,
        title: 'Ochrona Zasobów',
        description: 'Rozwiązania zmniejszające zużycie wody o 30% i energii o 20%'
    },
    {
        icon: Certificate,
        title: 'Certyfikaty Eko',
        description: 'Produkty z certyfikatem EU Ecolabel i Nordic Swan'
    },
    {
        icon: Recycle,
        title: 'Mniej Odpadów',
        description: 'Systemy koncentratów redukują ilość plastiku o 85%'
    },
    {
        icon: Save,
        title: 'Bezpieczeństwo',
        description: 'Formuły bezpieczne dla użytkowników i środowiska'
    }
];

// Helper component for category icon since we can't store component ref directly in object cleanly if imports change
function Restaurant(props: any) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" {...props}>
            <path d="M4 28H8V14L2 14 2 11C2 7.14 5.14 4 9 4 12.86 4 16 7.14 16 11L16 14 10 14 10 28H14V30H4V28ZM14 11C14 8.24 11.76 6 9 6 6.24 6 4 8.24 4 11L4 12 14 12 14 11Z" />
            <path d="M25,2a1,1,0,0,0-1,1V7.18L21.05,2.42A1,1,0,0,0,19.33,3.5l3.52,5.63L19.5,14.5a1,1,0,0,0,1.82.83l2.68-5.8V30h2V2ZM27,2V30h2V9.54l2.68,5.8a1,1,0,0,0,1.82-.84L30.15,9.13l3.52-5.63a1,1,0,1,0-1.72-1.08L28,7.18V3a1,1,0,0,0-2,0Z" />
        </svg>
    )
}

export default function EcolabPage() {
    return (
        <>
            <Script
                id="product-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
            />

            <main className={styles.main}>
                {/* Hero Section */}
                <section className={styles.hero}>
                    <div className={styles.container}>
                        <div className={styles.heroGrid}>
                            <div className={styles.heroContent}>
                                <div className={styles.partnerBadge}>
                                    <Certificate size={16} />
                                    OFICJALNY PARTNER ECOLAB
                                </div>
                                <h1 className={styles.heroTitle}>
                                    <span className={styles.brandName}>Chemia Ecolab</span>
                                    <span className={styles.heroSubtitle}>
                                        Profesjonalne rozwiązania higieniczne dla hoteli
                                    </span>
                                </h1>
                                <p className={styles.heroDescription}>
                                    Jako autoryzowany partner <strong>Ecolab</strong> dostarczamy kompletne systemy czystości.
                                    Od pralni gwarantujących śnieżną biel, przez higienę kuchni zgodną z HACCP,
                                    aż po perfekcyjnie czyste pokoje. <strong>Bezpieczeństwo, wydajność i ekologia</strong> w jednym.
                                </p>
                                <div className={styles.heroButtons}>
                                    <Link href="/zapytanie-ofertowe" className={styles.btnPrimary}>
                                        Zapytaj o ofertę
                                    </Link>
                                    <Link href="#produkty" className={styles.btnSecondary}>
                                        Zobacz rozwiązania
                                    </Link>
                                </div>
                                <div className={styles.trustBadges}>
                                    <span className={styles.trustBadge}>
                                        <Checkmark size={16} /> Certyfikat EU Ecolabel
                                    </span>
                                    <span className={styles.trustBadge}>
                                        <Checkmark size={16} /> Szkolenia w cenie
                                    </span>
                                    <span className={styles.trustBadge}>
                                        <Checkmark size={16} /> Serwis 24/7
                                    </span>
                                </div>
                            </div>
                            <div className={styles.heroVisual}>
                                <div className={styles.heroImageWrapper}>
                                    <Image
                                        src="/products/ecolab-housekeepers.webp"
                                        alt="Chemia Ecolab dla hoteli - housekeeping, kuchnia, pralnia"
                                        width={500}
                                        height={400}
                                        priority
                                        className={styles.heroImage}
                                        style={{ objectFit: 'contain' }}
                                    />
                                </div>
                                <div className={styles.floatingCard}>
                                    <DataVis_1 size={24} />
                                    <div>
                                        <strong>Mniejsze zużycie</strong>
                                        <span>Skoncentrowane formuły</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* About Section */}
                <section className={styles.aboutSection}>
                    <div className={styles.container}>
                        <div className={styles.aboutContent}>
                            <span className={styles.sectionLabel}>
                                <span className={styles.labelDot}></span>
                                O marce
                            </span>
                            <h2 className={styles.aboutTitle}>
                                Światowy lider w dziedzinie wody,<br />higieny i zapobiegania zakażeniom
                            </h2>
                            <div className={styles.aboutText}>
                                <p>
                                    Ecolab to zaufany partner w blisko trzech milionach lokalizacji klientów komercyjnych.
                                    Jest światowym liderem w dziedzinie rozwiązań i usług związanych z wodą, higieną
                                    i zapobieganiem zakażeniom. Z roczną sprzedażą na poziomie 13 miliardów dolarów
                                    i ponad 47 000 pracowników, Ecolab dostarcza kompleksowe rozwiązania, oparte na danych.
                                </p>
                                <p>
                                    Wspólnie z NetHoreca łączymy globalną technologię z lokalnym wsparciem i logistyką.
                                    Dostarczamy nie tylko produkty, ale <strong>wartość</strong>: czystsze hotele,
                                    bezpieczniejszą żywność i zoptymalizowane zużycie wody i energii.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Sustainability Section */}
                <section className={styles.sustainabilitySection}>
                    <div className={styles.container}>
                        <div className={styles.sustainabilityHeader}>
                            <span className={styles.sectionLabel}>
                                <span className={styles.labelDot}></span>
                                Zrównoważony rozwój
                            </span>
                            <h2 className={styles.sustainabilityTitle}>
                                Ekologia, która się opłaca
                            </h2>
                            <p className={styles.sustainabilitySubtitle}>
                                Produkty Ecolab pomagają hotelom realizować cele zrównoważonego rozwoju,
                                jednocześnie obniżając koszty operacyjne dzięki wydajności koncentratów.
                            </p>
                        </div>
                        <div className={styles.sustainabilityGrid}>
                            {sustainabilityFeatures.map((feature, index) => (
                                <div key={index} className={styles.sustainabilityCard}>
                                    <div className={styles.sustainabilityIcon}>
                                        <feature.icon size={28} />
                                    </div>
                                    <h3>{feature.title}</h3>
                                    <p>{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Products Section */}
                <section className={styles.productsSection} id="produkty">
                    <div className={styles.container}>
                        <div className={styles.sectionHeader}>
                            <span className={styles.sectionLabel}>
                                <span className={styles.labelDot}></span>
                                Katalog rozwiązań
                            </span>
                            <h2 className={styles.sectionTitle}>
                                Kompleksowa oferta <span className={styles.highlight}>Ecolab</span>
                            </h2>
                            <p className={styles.sectionDescription}>
                                Od recepcji po zaplecze kuchenne — mamy specjalistyczne rozwiązania
                                dla każdej strefy Twojego hotelu.
                            </p>
                        </div>

                        <div className={styles.productsGrid}>
                            {productCategories.map((category) => (
                                <div key={category.id} className={styles.productCard}>
                                    <div className={styles.productCardHeader} style={{ borderColor: category.color }}>
                                        <span className={styles.productIcon} style={{ color: category.color }}>
                                            <category.Icon size={32} />
                                        </span>
                                        {category.badge && (
                                            <span className={styles.productBadge} style={{ background: category.color }}>
                                                {category.badge}
                                            </span>
                                        )}
                                    </div>
                                    <h3 className={styles.productTitle}>{category.title}</h3>
                                    <p className={styles.productDescription}>{category.description}</p>
                                    <ul className={styles.productList}>
                                        {category.products.map((product, idx) => (
                                            <li key={idx}>
                                                <Checkmark size={14} />
                                                {product}
                                            </li>
                                        ))}
                                    </ul>
                                    <Link href="/zapytanie-ofertowe" className={styles.productLink}>
                                        Zapytaj o program <ArrowRight size={16} />
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Dispensers/Service Highlight */}
                <section className={styles.dispensersSection}>
                    <div className={styles.container}>
                        <div className={styles.dispensersGrid}>
                            <div className={styles.dispensersContent}>
                                <span className={styles.sectionLabel}>
                                    <span className={styles.labelDot}></span>
                                    Technologia i Serwis
                                </span>
                                <h2 className={styles.dispensersTitle}>
                                    Więcej niż chemia:<br />Systemy, które pracują dla Ciebie
                                </h2>
                                <p className={styles.dispensersText}>
                                    Kluczem do skuteczności i oszczędności jest precyzyjne dozowanie.
                                    Oferujemy zaawansowane stacje dozujące, które eliminują błędy ludzkie
                                    i zapewniają powtarzalne rezultaty przy każdym myciu.
                                </p>
                                <ul className={styles.dispensersList}>
                                    <li>
                                        <Checkmark size={20} />
                                        <span><strong>Audyty</strong> - Regularne wizyty serwisowe i raporty zużycia</span>
                                    </li>
                                    <li>
                                        <Checkmark size={20} />
                                        <span><strong>Szkolenia</strong> - Edukacja personelu z zakresu higieny i BHP</span>
                                    </li>
                                    <li>
                                        <Checkmark size={20} />
                                        <span><strong>Oasis Pro</strong> - Bezpieczne dozowanie chemii do pokoi</span>
                                    </li>
                                    <li>
                                        <Checkmark size={20} />
                                        <span><strong>Ecobrite</strong> - Automatyczne systemy pralnicze</span>
                                    </li>
                                    <li>
                                        <Checkmark size={20} />
                                        <span><strong>Apex</strong> - Kontrola kosztów zmywania naczyń</span>
                                    </li>
                                </ul>
                                <Link href="/zapytanie-ofertowe" className={styles.btnPrimary}>
                                    Umów bezpłatny audyt
                                </Link>
                            </div>
                            <div className={styles.dispensersImage}>
                                <Image
                                    src="/products/schemat-dozowania-chemii-ecolab.webp"
                                    alt="Systemy dozujące Ecolab w hotelu"
                                    width={500}
                                    height={400}
                                    className={styles.dispensersImg}
                                    style={{ objectFit: 'contain' }}
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why Choose Section */}
                <section className={styles.whySection}>
                    <div className={styles.container}>
                        <h2 className={styles.whyTitle}>Dlaczego Ecolab z NetHoreca?</h2>
                        <div className={styles.whyGrid}>
                            <div className={styles.whyCard}>
                                <Certificate size={32} />
                                <h3>Autoryzowany Partner</h3>
                                <p>Jesteśmy oficjalnym partnerem Ecolab w Polsce od ponad 10 lat</p>
                            </div>
                            <div className={styles.whyCard}>
                                <UserFilled size={32} />
                                <h3>Dedykowany Opiekun</h3>
                                <p>Wsparcie techniczne i doradztwo technologiczne w cenie współpracy</p>
                            </div>
                            <div className={styles.whyCard}>
                                <Delivery size={32} />
                                <h3>Logistyka 48h</h3>
                                <p>Szybkie dostawy produktów chemicznych z naszego magazynu</p>
                            </div>
                            <div className={styles.whyCard}>
                                <ChartPie size={32} />
                                <h3>Optymalizacja Kosztów</h3>
                                <p>Płacisz za efekt czystości, a nie za litry wody w produkcie</p>
                            </div>
                        </div>
                    </div>
                </section>

                <ReferenceSection />

                <TeamContactCTA
                    member={teamMembers[2]}
                    title="Get in touch"
                    description="Jako certyfikowany trener Ecolab, pomogę Ci dobrać optymalne systemy dozujące i przeszkolę Twój personel z ich obsługi."
                />

                {/* CTA Section */}
                <section className={styles.ctaSection}>
                    <div className={styles.container}>
                        <div className={styles.ctaContent}>
                            <h2>Gotowy na standard Ecolab?</h2>
                            <p>
                                Skontaktuj się z nami, aby przeprowadzić testy w swoim obiekcie.
                                Przekonaj się, jak profesjonalna chemia zmienia jakość hotelu.
                            </p>
                            <div className={styles.ctaButtons}>
                                <Link href="/zapytanie-ofertowe" className={styles.btnWhite}>
                                    Zamów bezpłatny audyt
                                </Link>
                                <Link href="/kontakt" className={styles.btnOutline}>
                                    Kontakt
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
