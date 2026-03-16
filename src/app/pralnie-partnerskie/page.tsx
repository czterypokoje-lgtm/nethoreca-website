import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';
import { createPageMetadata } from '@/lib/seo-metadata';
import {
    Map,
    Hotel,
    Partnership,
    CheckmarkFilled,
    ArrowRight,
    Search,
    UserFollow,
    Growth,
    Delivery,
    SettingsAdjust
} from '@carbon/icons-react';

export const metadata: Metadata = createPageMetadata({
    title: 'Sieć Pralni Partnerskich w Polsce - 15 Lokalizacji | NetHoreca HUB',
    description: 'Sieć 15 pralni partnerskich NetHoreca HUB w całej Polsce. Pełne pokrycie: Warszawa, Kraków, Gdańsk, Wrocław. Jedna umowa, transport 24/7. Sprawdź dostępność!',
    path: '/pralnie-partnerskie',
    keywords: ['pralnie partnerskie', 'sieć pralni Polska', 'pralnia hotelowa Warszawa', 'pralnia hotelowa Kraków', 'NetHoreca HUB pralnie'],
});

const regions = [
    {
        name: 'Mazowsze & Centrum',
        cities: [
            { name: 'Warszawa', partners: '12 Pralni' },
            { name: 'Łódź', partners: '5 Pralni' },
            { name: 'Radom', partners: '3 Pralnie' }
        ]
    },
    {
        name: 'Pomorze & Północ',
        cities: [
            { name: 'Trójmiasto', partners: '9 Pralni' },
            { name: 'Kołobrzeg', partners: '4 Pralnie' },
            { name: 'Szczecin', partners: '5 Pralni' }
        ]
    },
    {
        name: 'Małopolska & Południe',
        cities: [
            { name: 'Kraków', partners: '8 Pralni' },
            { name: 'Zakopane', partners: '6 Pralni' },
            { name: 'Katowice', partners: '7 Pralni' }
        ]
    },
    {
        name: 'Wielkopolska & Zachód',
        cities: [
            { name: 'Poznań', partners: '5 Pralni' },
            { name: 'Wrocław', partners: '7 Pralni' },
            { name: 'Zielona Góra', partners: '3 Pralnie' }
        ]
    }
];

export default function PartnerHubPage() {
    return (
        <main className={styles.main}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.container}>
                    <div className={styles.heroGrid}>
                        <div className={styles.heroContent}>
                            <div className={styles.partnerBadge}>
                                <Partnership size={16} />
                                SIEĆ PARTNERSKA NETHORECA
                            </div>
                            <span className={styles.heroSubtitle}>Lokalne Usługi, Globalny Standard</span>
                            <h1 className={styles.heroTitle}>
                                Znajdź najlepszą pralnię dla Twojego hotelu
                            </h1>
                            <p className={styles.heroDescription}>
                                Łączymy hotele z siecią certyfikowanych pralni przemysłowych.
                                Gwarantujemy jakość Ecolab, papier Selpak i ujednolicone standardy obsługi
                                w całej Polsce.
                            </p>
                            <div className={styles.heroButtons}>
                                <Link href="#znajdz-pralnie" className={styles.btnPrimary}>
                                    <Search size={20} /> Znajdź Pralnię
                                </Link>
                                <Link href="#dolacz" className={styles.btnSecondary}>
                                    <UserFollow size={20} /> Dla Właścicieli Pralni
                                </Link>
                            </div>

                            <div className={styles.heroStats}>
                                <div className={styles.statItem}>
                                    <strong>50+</strong>
                                    <span>Certyfikowanych Pralni</span>
                                </div>
                                <div className={styles.statItem}>
                                    <strong>1M+</strong>
                                    <span>Kg prania miesięcznie</span>
                                </div>
                                <div className={styles.statItem}>
                                    <strong>24h</strong>
                                    <span>Czas reakcji</span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.heroVisual}>
                            {/* Real Poland Map Visualization */}
                            <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Image
                                    src="/products/obslugiwane-hotele-polska-mapa.webp"
                                    alt="Mapa sieci pralni Nethoreca w Polsce"
                                    width={700}
                                    height={600}
                                    style={{ objectFit: 'contain', filter: 'drop-shadow(0 0 20px rgba(109, 199, 184, 0.3))' }}
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Network Map Section */}
            <section className={styles.mapSection}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionLabel}>Zasięg Ogólnopolski</span>
                        <h2 className={styles.sectionTitle}>Jesteśmy tam, gdzie Twój biznes</h2>
                        <p className={styles.sectionDesc}>
                            Współpracujemy z wiodącymi pralniami w kluczowych regionach turystycznych i biznesowych.
                        </p>
                    </div>

                    <div className={styles.regionsGrid}>
                        {regions.map((region, idx) => (
                            <div key={idx} className={styles.regionCard}>
                                <h3 className={styles.regionTitle}>{region.name}</h3>
                                <ul className={styles.cityList}>
                                    {region.cities.map((city, cIdx) => (
                                        <li key={cIdx}>
                                            <span className={styles.cityName}>{city.name}</span>
                                            <span className={styles.partnerCount}>{city.partners}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                        <Link href="/kontakt" className={styles.btnPrimary} style={{ background: '#004b87', color: 'white' }}>
                            <Map size={20} /> Sprawdź dostępność w Twoim mieście
                        </Link>
                    </div>
                </div>
            </section>

            {/* Dual Audience Section */}
            <section className={styles.splitSection}>
                {/* Available for Hotels */}
                <div className={styles.audienceBlock + ' ' + styles.forHotels} id="znajdz-pralnie">
                    <div className={styles.contentWrapper}>
                        <span className={styles.audienceBadge + ' ' + styles.bgBlue}>DLA HOTELI</span>
                        <h2 className={styles.audienceTitle}>Bezpieczeństwo i Jakość Standardu</h2>
                        <ul className={styles.benefitList}>
                            <li>
                                <CheckmarkFilled size={20} />
                                <span><strong>Certyfikowana Chemia</strong> - Tylko oryginalne produkty Ecolab.</span>
                            </li>
                            <li>
                                <CheckmarkFilled size={20} />
                                <span><strong>Audyt Jakości</strong> - Regularne kontrole bieli i pH tekstyliów.</span>
                            </li>
                            <li>
                                <CheckmarkFilled size={20} />
                                <span><strong>Gwarancja Zastępcza</strong> - Pralnia zapasowa w razie awarii.</span>
                            </li>
                            <li>
                                <CheckmarkFilled size={20} />
                                <span><strong>Jedna Faktura</strong> - Możliwość łączenia usług (pranie + najem).</span>
                            </li>
                        </ul>
                        <Link href="/zapytanie-ofertowe" className={styles.btnPrimary} style={{ background: '#004b87', color: 'white' }}>
                            Znajdź Pralnię <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>

                {/* Opportunity for Laundries */}
                <div className={styles.audienceBlock + ' ' + styles.forLaundries} id="dolacz">
                    <div className={styles.contentWrapper}>
                        <span className={styles.audienceBadge + ' ' + styles.bgGreen}>DLA PRALNI</span>
                        <h2 className={styles.audienceTitle}>Rozwijaj Biznes z Nethoreca</h2>
                        <ul className={styles.benefitList}>
                            <li>
                                <CheckmarkFilled size={20} />
                                <span><strong>Nowi Klienci</strong> - Przekazujemy leady z hoteli w Twoim regionie.</span>
                            </li>
                            <li>
                                <CheckmarkFilled size={20} />
                                <span><strong>Niższe Koszty</strong> - Preferencyjne ceny na chemię Ecolab i maszyny.</span>
                            </li>
                            <li>
                                <CheckmarkFilled size={20} />
                                <span><strong>Technologia</strong> - Wsparcie we wdrażaniu systemów dozujących.</span>
                            </li>
                            <li>
                                <CheckmarkFilled size={20} />
                                <span><strong>Wsparcie Ekspertów</strong> - Szkolenia i serwis techniczny 24/7.</span>
                            </li>
                        </ul>
                        <Link href="/kontakt" className={styles.btnPrimary}>
                            Dołącz do Sieci <Growth size={20} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA / Application Section */}
            <section className={styles.formSection}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionLabel}>Współpraca</span>
                        <h2 className={styles.sectionTitle}>Skontaktuj się z nami</h2>
                        <p className={styles.sectionDesc}>
                            Wybierz odpowiednią ścieżkę i porozmawiajmy o możliwościach współpracy.
                        </p>
                    </div>

                    <div className={styles.formGrid}>
                        <div className={styles.formCard}>
                            <div className={styles.cardIcon}>
                                <Hotel size={32} />
                            </div>
                            <h3>Szukam Pralni</h3>
                            <p>Dla hoteli, pensjonatów i obiektów noclegowych szukających serwisu.</p>
                            <Link href="/zapytanie-ofertowe" className={styles.btnSecondary} style={{ color: '#0f172a', borderColor: '#cbd5e1' }}>
                                Wypełnij Formularz
                            </Link>
                        </div>
                        <div className={styles.formCard}>
                            <div className={styles.cardIcon}>
                                <SettingsAdjust size={32} />
                            </div>
                            <h3>Zgłoś Pralnię</h3>
                            <p>Dla właścicieli pralni chcących dołączyć do certyfikowanej sieci.</p>
                            <Link href="/kontakt" className={styles.btnSecondary} style={{ color: '#0f172a', borderColor: '#cbd5e1' }}>
                                Aplikuj do Sieci
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
