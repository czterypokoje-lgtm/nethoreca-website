import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import TeamContactCTA from '@/components/shared/TeamContactCTA';
import { teamMembers } from '@/lib/trust-signals';
import styles from './page.module.css';
import { createPageMetadata } from '@/lib/seo-metadata';
import {
    Checkmark,
    ArrowRight,
    Favorite,
    Star,
    Idea,
    ColorPalette,
    UserProfile,
    Worship
} from '@carbon/icons-react';

export const metadata: Metadata = createPageMetadata({
    title: 'Rozwiązania dla Hoteli Butikowych - Personalizacja | NetHoreca',
    description: 'Indywidualne rozwiązania NetHoreca dla hoteli butikowych: personalizowane tekstylia z logo, dobrane zapachy, ekskluzywna chemia. Tworzymy unikalne doświadczenia gości.',
    path: '/branze/hotele-butikowe',
    keywords: ['hotel butikowy wyposażenie', 'personalizacja tekstyliów hotel', 'tekstylia z logo hotelu', 'dostawca hotel butikowy'],
});

const industrySchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Rozwiązania dla Hoteli Butikowych",
    "provider": {
        "@type": "Organization",
        "name": "NetHoreca"
    },
    "description": "Ekskluzywne rozwiązania dla hoteli butikowych"
};

const boutiqueNeeds = [
    {
        Icon: Favorite,
        title: 'Wyjątkowość',
        description: 'Produkty podkreślające unikalny charakter i osobowość hotelu.'
    },
    {
        Icon: ColorPalette,
        title: 'Personalizacja',
        description: 'Możliwość dopasowania kolorów i haftu do identyfikacji wizualnej.'
    },
    {
        Icon: Star,
        title: 'Jakość premium',
        description: 'Materiały najwyższej klasy spełniające najwyższe standardy branżowe.'
    },
    {
        Icon: UserProfile,
        title: 'Indywidualne podejście',
        description: 'Elastyczność zamówień i dedykowana obsługa.'
    }
];

const premiumProducts = [
    {
        name: 'Pościel 400TC+',
        description: 'Satyna bawełniana w eleganckich odcieniach',
        features: ['100% Egyptian Cotton', 'Personalizowany haft', 'Kolorystyka na zamówienie']
    },
    {
        name: 'Ręczniki Premium',
        description: 'Miękkie, chłonne, z haftem logo hotelu',
        features: ['550-700 GSM', 'Zero-twist technology', 'Personalizacja']
    },
    {
        name: 'Szlafroki SPA Deluxe',
        description: 'Ekskluzywne szlafroki dla gości',
        features: ['Welurowe / Frotte', 'Haft monogramu', 'Kapcie w zestawie']
    },
    {
        name: 'Akcesoria łazienkowe',
        description: 'Dywaniki, ręczniki dla gości',
        features: ['Matching colors', 'Logo hotelu', 'Premium finish']
    }
];

export default function BoutiqueHotelsPage() {
    return (
        <>
            <Script
                id="industry-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(industrySchema) }}
            />

            <main className={styles.main}>
                {/* Hero Section */}
                <section className={styles.hero}>
                    <div className={styles.container}>
                        <div className={styles.heroContent}>
                            <div className={styles.industryBadge}>
                                <Worship size={16} />
                                HOTELE BUTIKOWE
                            </div>
                            <h1 className={styles.heroTitle}>
                                Ekskluzywność<br />
                                <span className={styles.highlight}>w każdym detalu</span>
                            </h1>
                            <p className={styles.heroDescription}>
                                Rozumiemy, że w hotelach butikowych liczy się każdy szczegół.
                                Oferujemy <strong>produkty premium z możliwością personalizacji</strong>,
                                które podkreślą unikalny charakter Twojego obiektu.
                            </p>
                            <div className={styles.heroButtons}>
                                <Link href="/zapytanie-ofertowe" className={styles.btnPrimary}>
                                    Porozmawiajmy o Twoim hotelu
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Needs Section */}
                <section className={styles.needsSection}>
                    <div className={styles.container}>
                        <div className={styles.sectionHeader}>
                            <h2>Rozumiemy potrzeby hoteli butikowych</h2>
                        </div>
                        <div className={styles.needsGrid}>
                            {boutiqueNeeds.map((need, index) => (
                                <div key={index} className={styles.needCard}>
                                    <need.Icon size={32} />
                                    <h3>{need.title}</h3>
                                    <p>{need.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Products Section */}
                <section className={styles.productsSection}>
                    <div className={styles.container}>
                        <div className={styles.sectionHeader}>
                            <h2>Produkty premium dla hoteli butikowych</h2>
                            <p>Materiały najwyższej jakości z możliwością personalizacji</p>
                        </div>
                        <div className={styles.productsGrid}>
                            {premiumProducts.map((product, index) => (
                                <div key={index} className={styles.productCard}>
                                    <h3>{product.name}</h3>
                                    <p>{product.description}</p>
                                    <ul>
                                        {product.features.map((feature, idx) => (
                                            <li key={idx}>
                                                <Checkmark size={14} />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Personalization Section */}
                <section className={styles.personalizationSection}>
                    <div className={styles.container}>
                        <div className={styles.personalizationContent}>
                            <h2>Personalizacja bez limitów</h2>
                            <p>
                                Oferujemy pełną personalizację tekstyliów - od haftu logo po
                                niestandardowe kolory i materiały. Minimalne zamówienie już od 50 sztuk.
                            </p>
                            <ul className={styles.personalizationList}>
                                <li><Checkmark size={16} /> Haft logo hotelu</li>
                                <li><Checkmark size={16} /> Kolorystyka na zamówienie</li>
                                <li><Checkmark size={16} /> Monogramy dla gości VIP</li>
                                <li><Checkmark size={16} /> Indywidualne projekty</li>
                            </ul>
                            <Link href="/zapytanie-ofertowe" className={styles.btnPrimary}>
                                Zapytaj o personalizację
                            </Link>
                        </div>
                    </div>
                </section>

                <TeamContactCTA
                    member={teamMembers[0]}
                    title="Get in touch"
                    description="Zarządzasz hotelem butikowym i szukasz unikalnych rozwiązań? Pomogę Ci dobrać tekstylia i produkty, które podkreślą wyjątkowy charakter Twojego obiektu."
                />

                {/* CTA Section */}
                <section className={styles.ctaSection}>
                    <div className={styles.container}>
                        <div className={styles.ctaContent}>
                            <h2>Stwórzmy razem coś wyjątkowego</h2>
                            <p>
                                Każdy hotel butikowy jest inny. Porozmawiajmy o tym,
                                jak możemy podkreślić unikalność Twojego obiektu.
                            </p>
                            <Link href="/zapytanie-ofertowe" className={styles.btnCta}>
                                Umów konsultację
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
