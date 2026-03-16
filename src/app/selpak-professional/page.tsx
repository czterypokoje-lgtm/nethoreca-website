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
    TreeView,
    ChartPie,
    Store,
    Sprout,
    BatchJob,
    Cube,
    Restaurant,
    Clean,
    Application,
    HospitalBed
} from '@carbon/icons-react';

export const metadata: Metadata = createPageMetadata({
    title: 'Selpak Professional - Papier Toaletowy, Ręczniki Papierowe, Dozowniki | NetHoreca',
    description: 'Oficjalny dystrybutor Selpak Professional w Polsce. Papier toaletowy Jumbo, ręczniki papierowe Z-Fold, serwetki, dozowniki Touch/Wave/Natura. Seria Recycled FSC. Zamów próbki!',
    path: '/selpak-professional',
    keywords: [
        'Selpak Professional',
        'papier toaletowy hotelowy',
        'papier toaletowy Jumbo',
        'ręczniki papierowe profesjonalne',
        'ręczniki Z-Fold',
        'serwetki hotelowe',
        'dozowniki papieru Touch',
        'dozowniki Selpak',
        'Selpak Recycled FSC',
        'dystrybutor Selpak Polska'
    ],
});

const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Selpak Professional - Produkty Papierowe",
    "brand": {
        "@type": "Brand",
        "name": "Selpak Professional"
    },
    "description": "Profesjonalna linia produktów papierowych dla hoteli i obiektów away-from-home",
    "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "PLN",
        "availability": "https://schema.org/InStock"
    }
};

// Product categories based on Selpak Professional catalog
const productCategories = [
    {
        id: 'reczniki',
        title: 'Ręczniki Papierowe',
        description: 'Profesjonalne ręczniki do dozowników i na rolkach',
        Icon: BatchJob,
        products: [
            'Ręczniki Z-Fold do dozowników',
            'Ręczniki automatyczne 21cm - 135m',
            'Ręczniki Center Feed 140-250m',
            'Ręczniki Premium Handy',
            'Ręczniki Jumbo 510m'
        ],
        badge: 'BESTSELLER',
        color: '#2563eb'
    },
    {
        id: 'papier-toaletowy',
        title: 'Papier Toaletowy',
        description: 'Od standardowych rolek po systemy jumbo',
        Icon: Cube,
        products: [
            'Papier toaletowy 24 rolki',
            'Jumbo Toilet Paper 85-150m',
            'Center Feed Toilet Paper 120-220m',
            'Premium Toilet Paper',
            'Seria Extra - wysoka chłonność'
        ],
        badge: null,
        color: '#10b981'
    },
    {
        id: 'serwetki',
        title: 'Serwetki',
        description: 'Eleganckie serwetki dla gastronomii hotelowej',
        Icon: Restaurant,
        products: [
            'Serwetki 1/8 Fold 40x40',
            'Serwetki 33x33 - 100 szt',
            'Mini Napkin 24x24',
            'V-Fold Dispenser Napkin',
            'Serwetki w kolorach (White, Burgundy)'
        ],
        badge: null,
        color: '#8b5cf6'
    },
    {
        id: 'chusteczki',
        title: 'Chusteczki & Wet Wipes',
        description: 'Chusteczki higieniczne i nawilżane',
        Icon: Clean,
        products: [
            'Facial Tissue 50, 80 szt',
            'Boutique Facial Tissue',
            'Wet Wipes 60 szt',
            'Chusteczki antybakteryjne'
        ],
        badge: null,
        color: '#f59e0b'
    },
    {
        id: 'dozowniki',
        title: 'Dozowniki',
        description: 'Nowoczesne systemy dozujące',
        Icon: Application,
        products: [
            'Touch Jumbo Toilet Paper Dispenser',
            'Wave Automated Towel Dispenser',
            'Natura Automated Dispenser',
            'Z-Fold Towel Dispenser',
            'Domi Napkin Dispenser'
        ],
        badge: 'SYSTEMY',
        color: '#0f172a'
    },
    {
        id: 'higiena',
        title: 'Higiena Specjalistyczna',
        description: 'Produkty do higieny profesjonalnej',
        Icon: HospitalBed,
        products: [
            'Couch Cover 50m',
            'Toilet Seat Cover',
            'Cleaning Cloth Blue',
            'Selin Cologne 1L/5L'
        ],
        badge: null,
        color: '#ec4899'
    }
];


const sustainabilityFeatures = [
    {
        icon: Recycle,
        title: 'Seria Recycled',
        description: '50% z recyklingu, 30% odzysk, 20% celuloza pierwotna'
    },
    {
        icon: TreeView,
        title: 'FSC Certified',
        description: '100% celuloza z lasów zarządzanych odpowiedzialnie'
    },
    {
        icon: Sprout,
        title: 'Minimalizacja odpadów',
        description: 'Optymalne dozowanie redukuje zużycie o 30%'
    },
    {
        icon: ChartPie,
        title: '60+ krajów',
        description: 'Globalny zasięg i sprawdzona jakość'
    }
];

export default function SelpakProfessionalPage() {
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
                                    OFICJALNY DYSTRYBUTOR W POLSCE
                                </div>
                                <h1 className={styles.heroTitle}>
                                    <span className={styles.brandName}>Selpak Professional</span>
                                    <span className={styles.heroSubtitle}>
                                        Profesjonalne produkty papierowe dla branży HoReCa
                                    </span>
                                </h1>
                                <p className={styles.heroDescription}>
                                    Jako oficjalny dystrybutor Selpak Professional oferujemy pełną gamę
                                    profesjonalnych produktów papierowych - od ręczników i papieru toaletowego
                                    po serwetki i nowoczesne systemy dozujące. <strong>Seria Recycled</strong> to
                                    ekologiczne rozwiązania bez kompromisów w jakości.
                                </p>
                                <div className={styles.heroButtons}>
                                    <Link href="/zapytanie-ofertowe" className={styles.btnPrimary}>
                                        Zapytaj o ofertę
                                    </Link>
                                    <Link href="/selpak-professional/produkty" className={styles.btnSecondary}>
                                        Zobacz pełny katalog
                                    </Link>
                                </div>
                                <div className={styles.trustBadges}>
                                    <span className={styles.trustBadge}>
                                        <Checkmark size={16} /> FSC Certified
                                    </span>
                                    <span className={styles.trustBadge}>
                                        <Checkmark size={16} /> Seria Recycled
                                    </span>
                                    <span className={styles.trustBadge}>
                                        <Checkmark size={16} /> 60+ krajów
                                    </span>
                                </div>
                            </div>
                            <div className={styles.heroVisual}>
                                <div className={styles.heroImageWrapper}>
                                    <Image
                                        src="/products/selpak/selpak-banner-new.webp"
                                        alt="Selpak Professional - Premium Quality Smart Choice"
                                        width={800}
                                        height={400}
                                        priority
                                        className={styles.heroImage}
                                    />
                                </div>
                                <div className={styles.floatingCard}>
                                    <Recycle size={24} />
                                    <div>
                                        <strong>Seria Recycled</strong>
                                        <span>50% z recyklingu</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* About Selpak Section */}
                <section className={styles.aboutSection}>
                    <div className={styles.container}>
                        <div className={styles.aboutContent}>
                            <span className={styles.sectionLabel}>
                                <span className={styles.labelDot}></span>
                                O marce
                            </span>
                            <h2 className={styles.aboutTitle}>
                                Czołowa marka produktów<br />papierowych away-from-home
                            </h2>
                            <div className={styles.aboutText}>
                                <p>
                                    Selpak Professional to jedna z wiodących marek produktów higienicznych
                                    dla sektora away-from-home. Z naciskiem na jakość obsługi i ekspertyzę,
                                    marka oferuje profesjonalne rozwiązania w kategoriach: <strong>produkty
                                        papierowe, higiena i czystość, oraz higiena medyczna</strong>.
                                </p>
                                <p>
                                    Jako pionier digitalizacji w branży, Selpak Professional nieustannie
                                    rozwija swoje usługi, aby sprostać zmieniającym się potrzebom klientów.
                                    <strong> SP Academy</strong> zapewnia szkolenia i konsultacje dla firm,
                                    pomagając osiągać najwyższe standardy czystości i higieny.
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
                                <span className={styles.labelDotGreen}></span>
                                Zrównoważony rozwój
                            </span>
                            <h2 className={styles.sustainabilityTitle}>
                                Ekologia bez kompromisów
                            </h2>
                            <p className={styles.sustainabilitySubtitle}>
                                Selpak Professional stawia zrównoważony rozwój w centrum działalności.
                                Seria Recycled minimalizuje wpływ na środowisko bez rezygnacji z jakości.
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
                                Katalog produktów
                            </span>
                            <h2 className={styles.sectionTitle}>
                                Pełna gama produktów <span className={styles.highlight}>Selpak Professional</span>
                            </h2>
                            <p className={styles.sectionDescription}>
                                Od ręczników papierowych po kompletne systemy dozujące - oferujemy
                                wszystko, czego potrzebuje profesjonalny hotel.
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
                                        Zapytaj o ofertę <ArrowRight size={16} />
                                    </Link>
                                </div>
                            ))}
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '48px' }}>
                            <Link href="/selpak-professional/produkty" className={styles.btnPrimary}>
                                Zobacz wszystkie produkty Selpak →
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Dispensers Highlight */}
                <section className={styles.dispensersSection}>
                    <div className={styles.container}>
                        <div className={styles.dispensersGrid}>
                            <div className={styles.dispensersContent}>
                                <span className={styles.sectionLabel}>
                                    <span className={styles.labelDot}></span>
                                    Systemy dozujące
                                </span>
                                <h2 className={styles.dispensersTitle}>
                                    Nowoczesne dozowniki<br />dla profesjonalnych łazienek
                                </h2>
                                <p className={styles.dispensersText}>
                                    Selpak Professional oferuje szeroki wybór eleganckich dozowników
                                    w kolorach białym i czarnym. Systemy automatyczne, mechaniczne
                                    i dotykowe zapewniają higienę i oszczędność.
                                </p>
                                <ul className={styles.dispensersList}>
                                    <li>
                                        <Checkmark size={20} />
                                        <span><strong>Touch</strong> - Dozowniki bezkontaktowe na papier jumbo</span>
                                    </li>
                                    <li>
                                        <Checkmark size={20} />
                                        <span><strong>Wave</strong> - Automatyczne dozowniki ręczników</span>
                                    </li>
                                    <li>
                                        <Checkmark size={20} />
                                        <span><strong>Natura</strong> - Mechaniczne i automatyczne systemy</span>
                                    </li>
                                    <li>
                                        <Checkmark size={20} />
                                        <span><strong>Domi</strong> - Dozowniki serwetek (White, Smoke, Silver)</span>
                                    </li>
                                    <li>
                                        <Checkmark size={20} />
                                        <span><strong>Pickasso</strong> - V-Fold dozowniki serwetek</span>
                                    </li>
                                </ul>
                                <Link href="/zapytanie-ofertowe" className={styles.btnPrimary}>
                                    Zamów katalog dozowników
                                </Link>
                            </div>
                            <div className={styles.dispensersImage}>
                                <Image
                                    src="/products/selpak/selpak-warehouse.webp"
                                    alt="Dozowniki Selpak Professional"
                                    width={450}
                                    height={350}
                                    className={styles.dispensersImg}
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why Choose Section */}
                <section className={styles.whySection}>
                    <div className={styles.container}>
                        <h2 className={styles.whyTitle}>Dlaczego Selpak Professional z NetHoreca?</h2>
                        <div className={styles.whyGrid}>
                            <div className={styles.whyCard}>
                                <Store size={32} />
                                <h3>Oficjalny Dystrybutor</h3>
                                <p>Gwarancja oryginalnych produktów i pełnego asortymentu</p>
                            </div>
                            <div className={styles.whyCard}>
                                <Delivery size={32} />
                                <h3>Dostawa 48h</h3>
                                <p>Szybka realizacja zamówień w całej Polsce</p>
                            </div>
                            <div className={styles.whyCard}>
                                <ChartPie size={32} />
                                <h3>Kompleksowa oferta</h3>
                                <p>Tekstylia + Ecolab + Selpak z jednego źródła</p>
                            </div>
                            <div className={styles.whyCard}>
                                <Certificate size={32} />
                                <h3>Wsparcie techniczne</h3>
                                <p>Dobór produktów i systemy dozujące</p>
                            </div>
                        </div>
                    </div>
                </section>

                <ReferenceSection />

                <TeamContactCTA
                    member={teamMembers[0]}
                    title="Get in touch"
                    description="Jako oficjalny partner Selpak Professional, gwarantuję dostęp do pełnej oferty produktowej i najlepszych warunków handlowych na rynku."
                />

                {/* CTA Section */}
                <section className={styles.ctaSection}>
                    <div className={styles.container}>
                        <div className={styles.ctaContent}>
                            <h2>Gotowy na Selpak Professional?</h2>
                            <p>
                                Skontaktuj się z nami, aby otrzymać ofertę dopasowaną do potrzeb
                                Twojego hotelu. Odpowiadamy w ciągu 24 godzin.
                            </p>
                            <div className={styles.ctaButtons}>
                                <Link href="/zapytanie-ofertowe" className={styles.btnWhite}>
                                    Zapytaj o ofertę
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
