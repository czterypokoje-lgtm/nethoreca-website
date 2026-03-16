import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import styles from './page.module.css';
import { createPageMetadata } from '@/lib/seo-metadata';
import {
    Checkmark,
    ArrowRight,
    Touch_1 as Touch,
    Automatic,
    Settings,
    ColorPalette,
    Clean,
    Delivery,
    Application
} from '@carbon/icons-react';

export const metadata: Metadata = createPageMetadata({
    title: 'Dozowniki Selpak Professional - Touch, Wave, Natura | NetHoreca',
    description: 'Dozowniki Selpak Professional: seria Touch (bezdotykowe), Wave (automatyczne), Natura (drewnopodobne). Papier toaletowy, ręczniki. Elegancja i higiena. Zamów katalog!',
    path: '/selpak-professional/dozowniki',
    keywords: ['dozowniki Selpak Professional', 'dozowniki hotelowe', 'dozowniki bezdotykowe', 'dozownik papieru toaletowego', 'dozownik ręczników papierowych', 'seria Touch Selpak'],
});

const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Selpak Professional Dozowniki",
    "brand": {
        "@type": "Brand",
        "name": "Selpak Professional"
    },
    "description": "Profesjonalne systemy dozujące dla hoteli - automatyczne i mechaniczne rozwiązania"
};

const dispenserSeries = [
    {
        id: 'touch',
        name: 'TOUCH',
        tagline: 'Bezkontaktowa higiena',
        description: 'Seria Touch to bezkontaktowe dozowniki na papier jumbo, zapewniające maksymalną higienę w łazienkach hotelowych.',
        features: [
            'Bezkontaktowe dozowanie',
            'Zamek na klucz',
            'Wskaźnik poziomu papieru',
            'Łatwe uzupełnianie'
        ],
        products: [
            'Touch Jumbo Toilet Paper Dispenser - White',
            'Touch Jumbo Toilet Paper Dispenser - Black'
        ],
        color: '#0f172a'
    },
    {
        id: 'wave',
        name: 'WAVE',
        tagline: 'Automatyczna elegancja',
        description: 'Automatyczne dozowniki ręczników z eleganckim designem. Idealne rozwiązanie dla nowoczesnych łazienek premium.',
        features: [
            'Automatyczne dozowanie',
            'Sensor ruchu',
            'Cicha praca',
            'Regulacja długości ręcznika'
        ],
        products: [
            'Wave Automated Towel Dispenser - White',
            'Wave Automated Towel Dispenser - Black',
            'Wave Center Feed Towel Dispenser',
            'Wave Center Feed Toilet Paper Dispenser',
            'Wave Z-Fold Towel Dispenser'
        ],
        color: '#2563eb'
    },
    {
        id: 'natura',
        name: 'NATURA',
        tagline: 'Mechaniczna niezawodność',
        description: 'Niezawodne dozowniki mechaniczne i automatyczne w naturalnym designie. Sprawdzony wybór dla obiektów o wysokim standardzie.',
        features: [
            'Wersja mechaniczna i automatyczna',
            'Wytrzymała konstrukcja',
            'Uniwersalne zastosowanie',
            'Prosta konserwacja'
        ],
        products: [
            'Natura Automated Towel Dispenser - White',
            'Natura Automated Towel Dispenser - Black',
            'Natura Mechanic Dispenser - White',
            'Natura Mechanic Dispenser - Black'
        ],
        color: '#10b981'
    },
    {
        id: 'domi',
        name: 'DOMI',
        tagline: 'Serwetki pod kontrolą',
        description: 'Kompaktowe dozowniki serwetek w trzech eleganckich kolorach. Idealne na stoły restauracyjne i bary.',
        features: [
            '3 warianty kolorów',
            'Kompaktowy design',
            'Łatwe uzupełnianie',
            'Stabilna podstawa'
        ],
        products: [
            'Domi Napkin Dispenser - White',
            'Domi Napkin Dispenser - Smoke',
            'Domi Napkin Dispenser - Silver'
        ],
        color: '#8b5cf6'
    },
    {
        id: 'pickasso',
        name: 'PICKASSO',
        tagline: 'Artystyczny akcent',
        description: 'Eleganckie dozowniki V-Fold serwetek w trzech wariantach kolorystycznych. Połączenie funkcjonalności ze stylem.',
        features: [
            'V-Fold system',
            'Nowoczesny design',
            'Przezroczyste okienko',
            '3 kolory do wyboru'
        ],
        products: [
            'Pickasso V-Fold Napkin Dispenser - White',
            'Pickasso V-Fold Napkin Dispenser - Gray',
            'Pickasso V-Fold Napkin Dispenser - Black'
        ],
        color: '#f59e0b'
    }
];

const dispenserTypes = [
    {
        Icon: Application,
        title: 'Ręczniki papierowe',
        description: 'Z-Fold, Center Feed, Jumbo',
        products: 'Touch, Wave, Natura'
    },
    {
        Icon: Clean,
        title: 'Papier toaletowy',
        description: 'Jumbo, Center Feed',
        products: 'Touch, Wave'
    },
    {
        Icon: Settings,
        title: 'Serwetki',
        description: 'V-Fold, Standard',
        products: 'Domi, Pickasso'
    },
    {
        Icon: ColorPalette,
        title: 'Kolory',
        description: 'White, Black, Gray, Silver, Smoke',
        products: 'Wszystkie serie'
    }
];

export default function DozownikiPage() {
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
                        <div className={styles.heroContent}>
                            <Link href="/selpak-professional" className={styles.breadcrumb}>
                                ← Selpak Professional
                            </Link>
                            <h1 className={styles.heroTitle}>
                                Dozowniki<br />
                                <span className={styles.highlight}>Selpak Professional</span>
                            </h1>
                            <p className={styles.heroDescription}>
                                Kompletna gama profesjonalnych dozowników do łazienek i restauracji hotelowych.
                                <strong> 5 serii produktów</strong> - od automatycznych systemów premium po
                                eleganckie dozowniki serwetek.
                            </p>
                            <div className={styles.heroButtons}>
                                <Link href="/zapytanie-ofertowe" className={styles.btnPrimary}>
                                    Zapytaj o ofertę
                                </Link>
                                <Link href="#serie" className={styles.btnSecondary}>
                                    Przeglądaj serie
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Types Overview */}
                <section className={styles.typesSection}>
                    <div className={styles.container}>
                        <div className={styles.typesGrid}>
                            {dispenserTypes.map((type, index) => (
                                <div key={index} className={styles.typeCard}>
                                    <type.Icon size={28} />
                                    <h3>{type.title}</h3>
                                    <p>{type.description}</p>
                                    <span className={styles.typeProducts}>{type.products}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Dispenser Series */}
                <section className={styles.seriesSection} id="serie">
                    <div className={styles.container}>
                        <div className={styles.sectionHeader}>
                            <h2>Seria dozowników</h2>
                            <p>Wybierz serię odpowiadającą potrzebom Twojego hotelu</p>
                        </div>

                        <div className={styles.seriesList}>
                            {dispenserSeries.map((series, index) => (
                                <div key={series.id} className={styles.seriesCard} style={{ '--accent-color': series.color } as React.CSSProperties}>
                                    <div className={styles.seriesHeader}>
                                        <div className={styles.seriesName} style={{ background: series.color }}>
                                            {series.name}
                                        </div>
                                        <span className={styles.seriesTagline}>{series.tagline}</span>
                                    </div>
                                    <p className={styles.seriesDescription}>{series.description}</p>

                                    <div className={styles.seriesContent}>
                                        <div className={styles.seriesFeatures}>
                                            <h4>Cechy</h4>
                                            <ul>
                                                {series.features.map((feature, idx) => (
                                                    <li key={idx}>
                                                        <Checkmark size={14} />
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className={styles.seriesProducts}>
                                            <h4>Produkty</h4>
                                            <ul>
                                                {series.products.map((product, idx) => (
                                                    <li key={idx}>{product}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    <Link href="/zapytanie-ofertowe" className={styles.seriesLink}>
                                        Zapytaj o serię {series.name} <ArrowRight size={16} />
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Benefits Section */}
                <section className={styles.benefitsSection}>
                    <div className={styles.container}>
                        <div className={styles.benefitsGrid}>
                            <div className={styles.benefitsContent}>
                                <h2>Dlaczego dozowniki Selpak Professional?</h2>
                                <ul className={styles.benefitsList}>
                                    <li>
                                        <Checkmark size={20} />
                                        <div>
                                            <strong>Higiena i oszczędność</strong>
                                            <span>Kontrolowane dozowanie redukuje zużycie o 30%</span>
                                        </div>
                                    </li>
                                    <li>
                                        <Checkmark size={20} />
                                        <div>
                                            <strong>Kompatybilność</strong>
                                            <span>Wszystkie dozowniki pasują do produktów Selpak</span>
                                        </div>
                                    </li>
                                    <li>
                                        <Checkmark size={20} />
                                        <div>
                                            <strong>Design premium</strong>
                                            <span>Eleganckie wzornictwo pasujące do nowoczesnych łazienek</span>
                                        </div>
                                    </li>
                                    <li>
                                        <Checkmark size={20} />
                                        <div>
                                            <strong>Łatwa konserwacja</strong>
                                            <span>Szybkie uzupełnianie i czyszczenie</span>
                                        </div>
                                    </li>
                                    <li>
                                        <Checkmark size={20} />
                                        <div>
                                            <strong>Wieloletnia gwarancja</strong>
                                            <span>Solidna konstrukcja i wsparcie techniczne</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className={styles.benefitsVisual}>
                                <div className={styles.colorOptions}>
                                    <h4>Dostępne kolory</h4>
                                    <div className={styles.colorSwatches}>
                                        <span className={styles.swatch} style={{ background: '#ffffff', border: '1px solid #e5e7eb' }} title="White"></span>
                                        <span className={styles.swatch} style={{ background: '#1f2937' }} title="Black"></span>
                                        <span className={styles.swatch} style={{ background: '#6b7280' }} title="Gray"></span>
                                        <span className={styles.swatch} style={{ background: '#9ca3af' }} title="Silver"></span>
                                        <span className={styles.swatch} style={{ background: '#78716c' }} title="Smoke"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className={styles.ctaSection}>
                    <div className={styles.container}>
                        <div className={styles.ctaContent}>
                            <h2>Potrzebujesz pomocy w doborze dozowników?</h2>
                            <p>
                                Nasi eksperci pomogą dobrać odpowiednie systemy dozujące
                                do potrzeb Twojego hotelu. Bezpłatna konsultacja.
                            </p>
                            <Link href="/zapytanie-ofertowe" className={styles.btnCta}>
                                Zamów bezpłatną konsultację
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
