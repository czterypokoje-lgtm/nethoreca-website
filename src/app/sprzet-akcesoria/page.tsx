import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import ReferenceSection from '@/components/sections/ReferenceSection';
import { createPageMetadata } from '@/lib/seo-metadata';
import styles from './page.module.css';
import {
    Checkmark,
    ArrowRight,
    Certificate,
    Delivery,
    SettingsAdjust,
    Partnership,
    Clean,
    ToolBox,
    Chemistry,
    ChartCustom
} from '@carbon/icons-react';
import TeamContactCTA from '@/components/shared/TeamContactCTA';
import { teamMembers } from '@/lib/trust-signals';

export const metadata: Metadata = createPageMetadata({
    title: 'Sprzęt i Akcesoria do Sprzątania - Mopy Rasant, Wózki Mobilette | NetHoreca',
    description: 'Profesjonalny sprzęt do sprzątania Ecolab: mopy Rasant (mikrofibra), wózki serwisowe Mobilette, systemy dozujące, akcesoria HACCP. Ergonomia i wydajność. Zamów katalog!',
    path: '/sprzet-akcesoria',
    keywords: [
        'sprzęt do sprzątania Ecolab',
        'mopy Rasant',
        'mopy mikrofibra hotelowe',
        'wózki serwisowe Mobilette',
        'wózki hotelowe',
        'systemy dozujące Ecolab',
        'akcesoria housekeeping',
        'sprzęt HACCP',
        'wyposażenie housekeepingu'
    ],
});

const equipmentCategories = [
    {
        id: 'mopy',
        title: 'Mopy i Systemy Myjące',
        description: 'System Rasant i Rasantec to gwarancja higieny i ergonomii. Płaskie mopy, stelaże magnetyczne i wytrzymałe kije teleskopowe.',
        image: '/products/mop-hotelowy-plaski-rasant-ecolab.webp',
        features: ['System Rasant / Rasantec', 'Wkłady Mikrofibrowe', 'Kije Teleskopowe'],
        link: '/sprzet-akcesoria/mopy'
    },
    {
        id: 'wozki',
        title: 'Wózki Serwisowe',
        description: 'Modułowe wózki do sprzątania i serwisu hotelowego. Ciche, zwrotne i estetyczne rozwiązania dla profesjonalistów.',
        image: '/products/wozek-serwisowy-hotelowy-mobilette.webp',
        features: ['Wózki Hotelowe', 'Wózki do Sprzątania', 'Systemy Kuwetowe'],
        link: '/sprzet-akcesoria/wozki'
    },
    {
        id: 'dozowniki',
        title: 'Systemy Dozujące',
        description: 'Precyzyjne dozowniki naścienne i pompy dozujące. Zapewniają bezpieczeństwo pracy i kontrolę zużycia chemii.',
        image: '/products/system-dozujacy-chemie-ecolab.webp',
        features: ['Dozowniki Naścienne', 'Pompy Perystaltyczne', 'Stacje Rozcieńczania'],
        link: '/sprzet-akcesoria/systemy-dozujace'
    },
    {
        id: 'akcesoria',
        title: 'Akcesoria i Drobny Sprzęt',
        description: 'Ścierki z mikrofibry, gąbki, skrobaki i znaki ostrzegawcze. Wszystko, co niezbędne do codziennej pracy housekeepingu.',
        image: '/products/akcesoria-do-sprzatania-housekeeping.webp',
        features: ['Ścierki Mikrofibra', 'Gąbki i Czyściki', 'Znaki Ostrzegawcze'],
        link: '/sprzet-akcesoria/akcesoria'
    }
];

export default function EquipmentPage() {
    return (
        <main className={styles.main}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.container}>
                    <div className={styles.heroGrid}>
                        <div className={styles.heroContent}>
                            <div className={styles.partnerBadge}>
                                <Certificate size={16} />
                                AUTORYZOWANY DYSTRYBUTOR ECOLAB
                            </div>
                            <h1 className={styles.heroTitle}>
                                <span className={styles.brandName}>Profesjonalny Sprzęt</span>
                                <span className={styles.heroSubtitle}>
                                    i akcesoria do utrzymania czystości
                                </span>
                            </h1>
                            <p className={styles.heroDescription}>
                                Zwiększ wydajność i ergonomię pracy dzięki <strong>systemom sprzętowym Ecolab</strong>.
                                Oferujemy kompletne rozwiązania: od legendarnych mopów Rasant po zaawansowane
                                systemy dozowania chemii.
                            </p>
                            <div className={styles.heroButtons}>
                                <Link href="/zapytanie-ofertowe" className={styles.btnPrimary}>
                                    Zapytaj o Ofertę
                                </Link>
                                <Link href="#kategorie" className={styles.btnSecondary}>
                                    Przeglądaj Katalog
                                </Link>
                            </div>
                            <div className={styles.trustBadges}>
                                <span className={styles.trustBadge}>
                                    <Partnership size={16} /> Partner Ecolab
                                </span>
                                <span className={styles.trustBadge}>
                                    <SettingsAdjust size={16} /> Serwis Techniczny
                                </span>
                                <span className={styles.trustBadge}>
                                    <Delivery size={16} /> Szybka Dostawa
                                </span>
                            </div>
                        </div>
                        <div className={styles.heroVisual}>
                            <div className={styles.heroImageWrapper}>
                                <Image
                                    src="/products/wozek-serwisowy-hotelowy-mobilette.webp"
                                    alt="Profesjonalny wózek serwisowy Ecolab"
                                    width={500}
                                    height={500}
                                    priority
                                    className={styles.heroImage}
                                    style={{ objectFit: 'contain' }}
                                />
                            </div>
                            <div className={styles.floatingCard}>
                                <Checkmark size={24} />
                                <div>
                                    <strong>Ergonomia Pracy</strong>
                                    <span>Mniej wysiłku, lepszy efekt</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className={styles.featuresSection}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionLabel}>
                            <span className={styles.labelDot}></span>
                            Dlaczego Sprzęt Ecolab?
                        </span>
                        <h2 className={styles.aboutTitle}>
                            Innowacje w służbie czystości
                        </h2>
                        <p className={styles.aboutText} style={{ maxWidth: '700px', margin: '0 auto' }}>
                            Sprzęt Ecolab to nie tylko narzędzia, to przemyślane systemy zaprojektowane
                            w celu minimalizacji kosztów pracy i maksymalizacji standardów higieny.
                        </p>
                    </div>

                    <div className={styles.featuresGrid}>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>
                                <Clean size={32} />
                            </div>
                            <h3>System Rasant</h3>
                            <p>Legendarny system mopów płaskich zapewniający maksymalne pokrycie powierzchni przy minimum wysiłku.</p>
                        </div>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>
                                <ToolBox size={32} />
                            </div>
                            <h3>Trwałość</h3>
                            <p>Wykonane z najwyższej jakości materiałów tworzywa i metale gwarantują lata bezawaryjnej pracy.</p>
                        </div>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>
                                <Chemistry size={32} />
                            </div>
                            <h3>Precyzja Dozowania</h3>
                            <p>Systemy dozujące eliminują błędy ludzkie i zapewniają idealne stężenie roztworów roboczych.</p>
                        </div>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>
                                <ChartCustom size={32} />
                            </div>
                            <h3>Kodowanie Kolorami</h3>
                            <p>Pełna zgodność z systemem HACCP dzięki czytelnemu kodowaniu kolorystycznemu sprzętu.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Categories Section */}
            <section className={styles.categoriesSection} id="kategorie">
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionLabel}>
                            <span className={styles.labelDot}></span>
                            Kategorie Produktów
                        </span>
                        <h2 className={styles.aboutTitle}>
                            Kompleksowe wyposażenie
                        </h2>
                    </div>

                    <div className={styles.categoriesGrid}>
                        {equipmentCategories.map((category) => (
                            <Link href={category.link} key={category.id} className={styles.categoryCard}>
                                <div className={styles.categoryImageWrapper}>
                                    <Image
                                        src={category.image}
                                        alt={category.title}
                                        width={300}
                                        height={300}
                                        className={styles.categoryImage}
                                    />
                                </div>
                                <div className={styles.categoryContent}>
                                    <h3 className={styles.categoryTitle}>{category.title}</h3>
                                    <p className={styles.categoryDesc}>{category.description}</p>
                                    <ul className={styles.categoryFeatures}>
                                        {category.features.map((feature, idx) => (
                                            <li key={idx}>
                                                <Checkmark size={16} /> {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    <span className={styles.categoryLink}>
                                        Zobacz Produkty <ArrowRight size={16} />
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <ReferenceSection />

            <TeamContactCTA
                member={teamMembers[2]}
                title="Get in touch"
                description="Masz pytania dotyczące systemów mopowania lub wózków serwisowych? Marek Nowak, nasz specjalista ds. technologii, pomoże Ci dobrać sprzęt, który usprawni pracę Twojego zespołu."
            />

            {/* CTA Section */}
            <section className={styles.ctaSection}>
                <div className={styles.container}>
                    <div className={styles.ctaContent}>
                        <h2>Potrzebujesz doradztwa w doborze sprzętu?</h2>
                        <p>
                            Nasi eksperci pomogą Ci dobrać optymalne systemy sprzątające
                            dostosowane do specyfiki Twojego obiektu i budżetu.
                        </p>
                        <div className={styles.ctaButtons}>
                            <Link href="/zapytanie-ofertowe" className={styles.btnWhite}>
                                Zamów Audyt i Wycenę
                            </Link>
                            <Link href="/kontakt" className={styles.btnOutline}>
                                Skontaktuj się
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
