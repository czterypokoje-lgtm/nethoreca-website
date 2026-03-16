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
    Home,
    Renew,
    Time,
    WatsonHealthStackedScrolling_1 as StackedScrolling,
    Subtract
} from '@carbon/icons-react';

export const metadata: Metadata = createPageMetadata({
    title: 'Rozwiązania dla Aparthoteli i Apartamentów | NetHoreca',
    description: 'Rozwiązania NetHoreca dla aparthoteli: wynajem tekstyliów, chemia Ecolab, Selpak Professional. Elastyczne pakiety dopasowane do sezonowości. Stała cena za apartament.',
    path: '/branze/aparthotele',
    keywords: ['aparthotel wyposażenie', 'dostawca aparthotele', 'tekstylia dla aparthoteli', 'wynajem tekstyliów apartament'],
});

const industrySchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Rozwiązania dla Aparthoteli",
    "provider": {
        "@type": "Organization",
        "name": "NetHoreca"
    },
    "description": "Rozwiązania dla aparthoteli i apartamentów na wynajem"
};

const aparthotelNeeds = [
    {
        Icon: Renew,
        title: 'Szybka rotacja',
        description: 'Produkty odporne na częste pranie i intensywne użytkowanie.'
    },
    {
        Icon: StackedScrolling,
        title: 'Wiele jednostek',
        description: 'Spójne wyposażenie dla 10, 50 czy 200 apartamentów.'
    },
    {
        Icon: Time,
        title: 'Efektywność',
        description: 'Rozwiązania oszczędzające czas przy sprzątaniu.'
    },
    {
        Icon: Subtract,
        title: 'Optymalizacja kosztów',
        description: 'Trwałe produkty z najlepszym stosunkiem jakości do ceny.'
    }
];

const solutions = [
    {
        title: 'Pakiet Start - Nowy apartament',
        description: 'Kompletne wyposażenie dla nowego apartamentu',
        items: ['Zestaw pościeli 2x', 'Ręczniki (6 szt)', 'Dywanik łazienkowy', 'Podkład na materac'],
        price: 'od 450 PLN / apartament'
    },
    {
        title: 'Pakiet Uzupełniający',
        description: 'Produkty do regularnej wymiany',
        items: ['Pościel na wymianę', 'Ręczniki', 'Chemia czyszcząca', 'Produkty papierowe'],
        price: 'Wycena indywidualna'
    },
    {
        title: 'Wynajem tekstyliów',
        description: 'Elastyczny model bez dużych inwestycji',
        items: ['Wymiana brudne/czyste', 'Brak kosztów prania', 'Stała jakość', 'Przewidywalne koszty'],
        price: 'od 35 PLN / wymiana'
    }
];

export default function AparthotelsPage() {
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
                                <Home size={16} />
                                APARTHOTELE
                            </div>
                            <h1 className={styles.heroTitle}>
                                Skalowalność i<br />
                                <span className={styles.highlight}>efektywność kosztowa</span>
                            </h1>
                            <p className={styles.heroDescription}>
                                Zarządzasz 10 czy 200 apartamentami? Oferujemy <strong>skalowalne
                                    rozwiązania</strong> dla aparthoteli i wynajmu krótkoterminowego -
                                trwałe produkty, które wytrzymają intensywną rotację gości.
                            </p>
                            <div className={styles.heroButtons}>
                                <Link href="/zapytanie-ofertowe" className={styles.btnPrimary}>
                                    Zapytaj o ofertę
                                </Link>
                                <Link href="#pakiety" className={styles.btnSecondary}>
                                    Zobacz pakiety
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Needs Section */}
                <section className={styles.needsSection}>
                    <div className={styles.container}>
                        <div className={styles.needsGrid}>
                            {aparthotelNeeds.map((need, index) => (
                                <div key={index} className={styles.needCard}>
                                    <need.Icon size={28} />
                                    <h3>{need.title}</h3>
                                    <p>{need.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Solutions Section */}
                <section className={styles.solutionsSection} id="pakiety">
                    <div className={styles.container}>
                        <div className={styles.sectionHeader}>
                            <h2>Pakiety dla aparthoteli</h2>
                            <p>Gotowe rozwiązania dopasowane do Twojej skali</p>
                        </div>
                        <div className={styles.solutionsGrid}>
                            {solutions.map((solution, index) => (
                                <div key={index} className={styles.solutionCard}>
                                    <h3>{solution.title}</h3>
                                    <p>{solution.description}</p>
                                    <ul>
                                        {solution.items.map((item, idx) => (
                                            <li key={idx}>
                                                <Checkmark size={14} />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                    <div className={styles.price}>{solution.price}</div>
                                    <Link href="/zapytanie-ofertowe" className={styles.solutionLink}>
                                        Więcej szczegółów <ArrowRight size={16} />
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Benefits Section */}
                <section className={styles.benefitsSection}>
                    <div className={styles.container}>
                        <div className={styles.benefitsContent}>
                            <h2>Dlaczego aparthotele wybierają NetHoreca?</h2>
                            <div className={styles.benefitsGrid}>
                                <div className={styles.benefitItem}>
                                    <Checkmark size={20} />
                                    <span><strong>Skalowalność</strong> - od 10 do 500+ jednostek</span>
                                </div>
                                <div className={styles.benefitItem}>
                                    <Checkmark size={20} />
                                    <span><strong>Trwałość</strong> - produkty na 200+ cykli prania</span>
                                </div>
                                <div className={styles.benefitItem}>
                                    <Checkmark size={20} />
                                    <span><strong>Spójność</strong> - jednolity standard we wszystkich jednostkach</span>
                                </div>
                                <div className={styles.benefitItem}>
                                    <Checkmark size={20} />
                                    <span><strong>Elastyczność</strong> - zakup, wynajem lub mix</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <TeamContactCTA
                    member={teamMembers[0]}
                    title="Get in touch"
                    description="Zarządzasz siecią apartamentów i szukasz skalowalnych rozwiązań? Przygotuję ofertę, która połączy wysoką trwałość z optymalizacją kosztów operacyjnych."
                />

                {/* CTA Section */}
                <section className={styles.ctaSection}>
                    <div className={styles.container}>
                        <div className={styles.ctaContent}>
                            <h2>Skaluj swój biznes z nami</h2>
                            <p>
                                Niezależnie od liczby zarządzanych apartamentów, znajdziemy
                                rozwiązanie dopasowane do Twojego modelu biznesowego.
                            </p>
                            <Link href="/zapytanie-ofertowe" className={styles.btnCta}>
                                Porozmawiajmy
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
