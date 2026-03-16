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
    Hotel,
    Star,
    Time,
    Delivery,
    Partnership,
    Certificate,
    ChartLineSmooth,
    UserMultiple
} from '@carbon/icons-react';

export const metadata: Metadata = createPageMetadata({
    title: 'Rozwiązania dla Hoteli i Resortów - Kompleksowe Wyposażenie | NetHoreca',
    description: 'Kompleksowe rozwiązania NetHoreca dla hoteli sieciowych i resortów: tekstylia premium, chemia Ecolab, Selpak Professional, sprzęt. 500+ hoteli obsługiwanych.',
    path: '/branze/hotele-resorty',
    keywords: ['wyposażenie hoteli sieciowych', 'dostawca dla resortów', 'kompleksowe wyposażenie hoteli', 'tekstylia dla hoteli sieciowych'],
});

const industrySchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Rozwiązania dla Hoteli i Resortów",
    "provider": {
        "@type": "Organization",
        "name": "NetHoreca"
    },
    "description": "Kompleksowe rozwiązania higieniczne dla hoteli i resortów",
    "areaServed": "Poland"
};

const challenges = [
    {
        title: 'Wysokie obłożenie',
        description: 'Ciągły ruch gości wymaga niezawodnego zaopatrzenia i szybkich dostaw.',
        solution: 'Dostawy w 48h i dedykowany opiekun klienta'
    },
    {
        title: 'Różnorodność potrzeb',
        description: 'Pokoje, restauracja, spa, basen - każda strefa ma inne wymagania.',
        solution: 'Kompletna oferta od jednego dostawcy'
    },
    {
        title: 'Standardy jakości',
        description: 'Goście oczekują premium doświadczeń na każdym kroku.',
        solution: 'Produkty Ecolab i tekstylia hotelowe klasy premium'
    },
    {
        title: 'Koszty operacyjne',
        description: 'Balansowanie jakości z efektywnością kosztową.',
        solution: 'Model wynajmu i systemy dozujące redukujące zużycie'
    }
];

const solutions = [
    {
        category: 'Tekstylia Hotelowe',
        items: ['Pościel premium 300TC+', 'Ręczniki hotelowe', 'Szlafroki SPA', 'Obrusy i serwetki'],
        link: '/tekstylia-hotelowe',
        color: '#2563eb'
    },
    {
        category: 'Chemia Ecolab',
        items: ['Środki pralnicze ECOBRITE', 'Dezynfekcja powierzchni', 'Higiena kuchni', 'Pielęgnacja podłóg'],
        link: '/chemia-ecolab',
        color: '#10b981'
    },
    {
        category: 'Selpak Professional',
        items: ['Ręczniki papierowe', 'Papier toaletowy jumbo', 'Serwetki premium', 'Dozowniki automatyczne'],
        link: '/selpak-professional',
        color: '#8b5cf6'
    },
    {
        category: 'Sprzęt i Akcesoria',
        items: ['Wózki housekeeping', 'Mopy profesjonalne', 'Maszyny czyszczące', 'Systemy dozujące'],
        link: '/sprzet-akcesoria',
        color: '#f59e0b'
    }
];

const stats = [
    { value: '500+', label: 'Hoteli obsługiwanych' },
    { value: '26+', label: 'Lat doświadczenia' },
    { value: '48h', label: 'Czas dostawy' },
    { value: '98%', label: 'Zadowolonych klientów' }
];

const testimonials = [
    {
        quote: 'Współpraca z NetHoreca to gwarancja jakości i terminowości. Nasi goście zauważają różnicę.',
        author: 'Krzysztof Nowak',
        role: 'Dyrektor Generalny',
        hotel: 'Hotel Maraton Warszawa ****'
    },
    {
        quote: 'Jedno źródło dla wszystkich potrzeb higienicznych - to ogromne uproszczenie logistyki.',
        author: 'Magdalena Wiśniewska',
        role: 'Housekeeping Manager',
        hotel: 'Resort & SPA Kielce *****'
    }
];

export default function HotelsResortsPage() {
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
                                <Hotel size={16} />
                                BRANŻA HOTELOWA
                            </div>
                            <h1 className={styles.heroTitle}>
                                Rozwiązania dla<br />
                                <span className={styles.highlight}>Hoteli i Resortów</span>
                            </h1>
                            <p className={styles.heroDescription}>
                                Obsługujemy obiekty od kameralnych hoteli butikowych po duże resorty
                                z setkami pokoi. <strong>Jeden dostawca</strong> dla tekstyliów, chemii
                                profesjonalnej i produktów papierowych.
                            </p>
                            <div className={styles.heroButtons}>
                                <Link href="/zapytanie-ofertowe" className={styles.btnPrimary}>
                                    Zapytaj o ofertę
                                </Link>
                                <Link href="#rozwiazania" className={styles.btnSecondary}>
                                    Zobacz rozwiązania
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Stats Bar */}
                <section className={styles.statsBar}>
                    <div className={styles.container}>
                        <div className={styles.statsGrid}>
                            {stats.map((stat, index) => (
                                <div key={index} className={styles.statItem}>
                                    <span className={styles.statValue}>{stat.value}</span>
                                    <span className={styles.statLabel}>{stat.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Challenges Section */}
                <section className={styles.challengesSection}>
                    <div className={styles.container}>
                        <div className={styles.sectionHeader}>
                            <h2>Znamy wyzwania branży hotelowej</h2>
                            <p>I mamy na nie sprawdzone odpowiedzi</p>
                        </div>
                        <div className={styles.challengesGrid}>
                            {challenges.map((challenge, index) => (
                                <div key={index} className={styles.challengeCard}>
                                    <h3>{challenge.title}</h3>
                                    <p className={styles.challengeDesc}>{challenge.description}</p>
                                    <div className={styles.challengeSolution}>
                                        <Checkmark size={16} />
                                        <span>{challenge.solution}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Solutions Section */}
                <section className={styles.solutionsSection} id="rozwiazania">
                    <div className={styles.container}>
                        <div className={styles.sectionHeader}>
                            <h2>Kompleksowa oferta dla Twojego hotelu</h2>
                            <p>Wszystko z jednego źródła</p>
                        </div>
                        <div className={styles.solutionsGrid}>
                            {solutions.map((solution, index) => (
                                <div key={index} className={styles.solutionCard} style={{ borderTopColor: solution.color }}>
                                    <h3 style={{ color: solution.color }}>{solution.category}</h3>
                                    <ul>
                                        {solution.items.map((item, idx) => (
                                            <li key={idx}>
                                                <Checkmark size={14} />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                    <Link href={solution.link} className={styles.solutionLink} style={{ color: solution.color }}>
                                        Zobacz ofertę <ArrowRight size={16} />
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Why Us Section */}
                <section className={styles.whySection}>
                    <div className={styles.container}>
                        <div className={styles.whyGrid}>
                            <div className={styles.whyContent}>
                                <h2>Dlaczego hotele wybierają NetHoreca?</h2>
                                <ul className={styles.whyList}>
                                    <li>
                                        <Partnership size={24} />
                                        <div>
                                            <strong>Oficjalny Partner Ecolab</strong>
                                            <span>Certyfikowane rozwiązania od światowego lidera higieny</span>
                                        </div>
                                    </li>
                                    <li>
                                        <Certificate size={24} />
                                        <div>
                                            <strong>Dystrybutor Selpak Professional</strong>
                                            <span>Profesjonalne produkty papierowe z gwarancją jakości</span>
                                        </div>
                                    </li>
                                    <li>
                                        <Delivery size={24} />
                                        <div>
                                            <strong>Dostawa w 48h</strong>
                                            <span>Szybka realizacja w całej Polsce</span>
                                        </div>
                                    </li>
                                    <li>
                                        <UserMultiple size={24} />
                                        <div>
                                            <strong>Dedykowany opiekun</strong>
                                            <span>Jeden punkt kontaktu dla wszystkich spraw</span>
                                        </div>
                                    </li>
                                    <li>
                                        <ChartLineSmooth size={24} />
                                        <div>
                                            <strong>Szkolenia dla personelu</strong>
                                            <span>Podnosimy kompetencje Twojego zespołu</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Testimonials */}
                <section className={styles.testimonialsSection}>
                    <div className={styles.container}>
                        <h2>Co mówią nasi klienci</h2>
                        <div className={styles.testimonialsGrid}>
                            {testimonials.map((testimonial, index) => (
                                <div key={index} className={styles.testimonialCard}>
                                    <div className={styles.stars}>★★★★★</div>
                                    <blockquote>{testimonial.quote}</blockquote>
                                    <cite>
                                        <strong>{testimonial.author}</strong>
                                        <span>{testimonial.role}</span>
                                        <span className={styles.hotelName}>{testimonial.hotel}</span>
                                    </cite>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <TeamContactCTA
                    member={teamMembers[0]}
                    title="Get in touch"
                    description="Zarządzasz dużym obiektem lub siecią hoteli? Przygotuję dla Twojej organizacji szyte na miarę rozwiązania, które zoptymalizują procesy higieniczne i obniżą koszty operacyjne."
                />

                {/* CTA Section */}
                <section className={styles.ctaSection}>
                    <div className={styles.container}>
                        <div className={styles.ctaContent}>
                            <h2>Porozmawiajmy o potrzebach Twojego hotelu</h2>
                            <p>
                                Bezpłatna konsultacja i wycena dopasowana do specyfiki Twojego obiektu.
                                Odpowiadamy w ciągu 24 godzin.
                            </p>
                            <Link href="/zapytanie-ofertowe" className={styles.btnCta}>
                                Zapytaj o ofertę
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
