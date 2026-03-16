import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import styles from './page.module.css';
import { createPageMetadata } from '@/lib/seo-metadata';
import {
    ArrowRight,
    ChartLineSmooth,
    Time,
    Favorite,
    Trophy
} from '@carbon/icons-react';

export const metadata: Metadata = createPageMetadata({
    title: 'Case Studies - Realizacje i Referencje | NetHoreca',
    description: 'Poznaj nasze realizacje: hotele sieciowe, butikowe, resorty. Jak NetHoreca pomogła klientom zoptymalizować koszty i podnieść standardy. Sprawdzone efekty.',
    path: '/case-studies',
    keywords: ['case studies hotele', 'referencje NetHoreca', 'realizacje hotelowe', 'optymalizacja kosztów hotel case study'],
});

const caseStudies = [
    {
        id: 'hotel-maraton',
        title: 'Hotel Maraton Warszawa ****',
        category: 'Hotel miejski',
        rooms: '150 pokoi',
        challenge: 'Wysokie koszty pralni i nierównomierna jakość tekstyliów od różnych dostawców.',
        solution: 'Wdrożenie modelu wynajmu tekstyliów z chemią Ecolab ECOBRITE. Jeden dostawca dla wszystkich potrzeb.',
        results: [
            { value: '35%', label: 'Redukcja kosztów pralniczych' },
            { value: '40%', label: 'Dłuższa żywotność tekstyliów' },
            { value: '100%', label: 'Spójność jakości' }
        ],
        quote: 'Współpraca z NetHoreca to najlepsza decyzja logistyczna, jaką podjęliśmy. Jeden dostawca, jeden kontakt, zero problemów.',
        author: 'Krzysztof Nowak, Dyrektor Generalny',
        color: '#2563eb'
    },
    {
        id: 'resort-spa-kielce',
        title: 'Resort & SPA Kielce *****',
        category: 'Resort wellness',
        rooms: '80 pokoi + SPA',
        challenge: 'Potrzeba premium tekstyliów dla strefy SPA i personalizacji z logo hotelu.',
        solution: 'Tekstylia premium z haftem, szlafroki SPA, kompletna oferta produktów papierowych Selpak Professional.',
        results: [
            { value: '4.9/5', label: 'Ocena gości za jakość' },
            { value: '25%', label: 'Wzrost rezerwacji SPA' },
            { value: '0', label: 'Reklamacji dotyczących tekstyliów' }
        ],
        quote: 'Nasi goście zauważają różnicę. Jakość tekstyliów to pierwszy kontakt z luksusem, który oferujemy.',
        author: 'Magdalena Wiśniewska, Housekeeping Manager',
        color: '#8b5cf6'
    },
    {
        id: 'aparthotel-baltica',
        title: 'Aparthotel Baltica',
        category: 'Aparthotel',
        rooms: '45 apartamentów',
        challenge: 'Zarządzanie wyposażeniem 45 apartamentów z różnymi cyklami rotacji gości.',
        solution: 'Pakiety startowe dla nowych jednostek, regularny system dostaw, produkty o wysokiej trwałości.',
        results: [
            { value: '60%', label: 'Szybsze przygotowanie apartamentu' },
            { value: '200+', label: 'Cykli prania bez utraty jakości' },
            { value: '15%', label: 'Oszczędność vs. poprzedni dostawca' }
        ],
        quote: 'Skalowanie biznesu wymaga niezawodnych partnerów. NetHoreca rośnie razem z nami.',
        author: 'Tomasz Kowalczyk, Właściciel',
        color: '#0d9488'
    }
];

export default function CaseStudiesPage() {
    return (
        <>
            <Script
                id="case-studies-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "ItemList",
                        "name": "Case Studies NetHoreca",
                        "itemListElement": caseStudies.map((study, index) => ({
                            "@type": "ListItem",
                            "position": index + 1,
                            "name": study.title
                        }))
                    })
                }}
            />

            <main className={styles.main}>
                {/* Hero Section */}
                <section className={styles.hero}>
                    <div className={styles.container}>
                        <div className={styles.heroContent}>
                            <div className={styles.badge}>
                                <Trophy size={16} />
                                CASE STUDIES
                            </div>
                            <h1 className={styles.heroTitle}>
                                Historie<br />
                                <span className={styles.highlight}>sukcesu</span>
                            </h1>
                            <p className={styles.heroDescription}>
                                Zobacz jak pomagamy hotelom osiągać mierzalne rezultaty.
                                Redukcja kosztów, poprawa jakości, optymalizacja procesów.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Case Studies List */}
                <section className={styles.casesSection}>
                    <div className={styles.container}>
                        {caseStudies.map((study, index) => (
                            <article key={study.id} className={styles.caseCard}>
                                <div className={styles.caseHeader}>
                                    <div className={styles.caseMeta}>
                                        <span className={styles.caseCategory}>{study.category}</span>
                                        <span className={styles.caseBadge}>{study.rooms}</span>
                                    </div>
                                    <h2 className={styles.caseTitle}>{study.title}</h2>
                                </div>

                                <div className={styles.caseContent}>
                                    <div className={styles.caseStory}>
                                        <div className={styles.storyBlock}>
                                            <h3>Wyzwanie</h3>
                                            <p>{study.challenge}</p>
                                        </div>
                                        <div className={styles.storyBlock}>
                                            <h3>Rozwiązanie</h3>
                                            <p>{study.solution}</p>
                                        </div>
                                    </div>

                                    <div className={styles.caseResults}>
                                        <h3>Rezultaty</h3>
                                        <div className={styles.resultsGrid}>
                                            {study.results.map((result, idx) => (
                                                <div key={idx} className={styles.resultItem} style={{ borderColor: study.color }}>
                                                    <span className={styles.resultValue} style={{ color: study.color }}>{result.value}</span>
                                                    <span className={styles.resultLabel}>{result.label}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <blockquote className={styles.caseQuote}>
                                    <p>„{study.quote}"</p>
                                    <cite>— {study.author}</cite>
                                </blockquote>
                            </article>
                        ))}
                    </div>
                </section>

                {/* CTA Section */}
                <section className={styles.ctaSection}>
                    <div className={styles.container}>
                        <div className={styles.ctaContent}>
                            <h2>Twój hotel może być kolejny</h2>
                            <p>
                                Porozmawiajmy o tym, jak możemy pomóc Twojemu obiektowi
                                osiągnąć podobne rezultaty.
                            </p>
                            <Link href="/zapytanie-ofertowe" className={styles.btnCta}>
                                Skontaktuj się z nami
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
