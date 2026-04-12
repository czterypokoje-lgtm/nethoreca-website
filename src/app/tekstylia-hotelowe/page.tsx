import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import ReferenceSection from '@/components/sections/ReferenceSection';
import TeamContactCTA from '@/components/shared/TeamContactCTA';
import { teamMembers } from '@/lib/trust-signals';
import { breadcrumbSchema, itemListSchema } from '@/lib/structured-data';
import { createPageMetadata } from '@/lib/seo-metadata';
import styles from './page.module.css';
import {
    Checkmark,
    ArrowRight,
    Star,
    Certificate,
    Delivery,
    Hotel,
    Catalog,
    DataVis_1,
    Product
} from '@carbon/icons-react';

export const metadata: Metadata = createPageMetadata({
    title: 'Tekstylia Hotelowe Premium - Ręczniki, Pościel, Szlafroki, Obrusy | NetHoreca',
    description: 'Profesjonalne tekstylia obiektowe marki NetHoreca. Ręczniki frotte 400-650 g/m², pościel satynowa, szlafroki welurowe, obrusy. Rozwiązania B2B, wynajem i zakup. Dostawa 48h.',
    path: '/tekstylia-hotelowe',
    keywords: [
        'tekstylia hotelowe',
        'ręczniki hotelowe frotte',
        'pościel hotelowa satynowa',
        'szlafroki hotelowe welurowe',
        'obrusy gastronomiczne',
        'marka NetHoreca',
        'wyposażenie pokoi hotelowych',
        'wynajem tekstyliów',
        'stopki łazienkowe hotelowe',
        'bawełna egipska ręczniki'
    ],
});

const textileCategories = [
    {
        id: 'reczniki',
        title: 'Ręczniki Hotelowe',
        description: 'Puszyste i chłonne ręczniki frotte, które zachwycą Twoich gości. Wyjątkowa trwałość dzięki podwójnym obszyciom.',
        image: '/products/reczniki-hotelowe-frotte-komplet.webp',
        features: ['Gramatura 400-650 g/m²', '100% Bawełna Egejska', 'Wzmocnione brzegi'],
        link: '/tekstylia-hotelowe/reczniki'
    },
    {
        id: 'posciel',
        title: 'Pościel Hotelowa',
        description: 'Śnieżnobiała pościel o gładkim lub żakardowym splocie. Gwarancja komfortowego snu i łatwości prania.',
        image: '/products/posciel-hotelowa-premium.webp',
        features: ['Bawełna i Satyna', 'Splot Paskowy 1cm/2cm', 'Certyfikat Oeko-Tex'],
        link: '/tekstylia-hotelowe/posciel'
    },
    {
        id: 'szlafroki',
        title: 'Szlafroki i Kapcie',
        description: 'Miękkie szlafroki welurowe i waflowe oraz wygodne kapcie hotelowe. Idealne dopełnienie strefy SPA.',
        image: '/products/szlafrok-hotelowy-welurowy-gruby.webp',
        features: ['Kołnierz Szalowy/Kimono', 'Unisex', 'Możliwość Haftu'],
        link: '/tekstylia-hotelowe/szlafroki'
    },
    {
        id: 'obrusy',
        title: 'Tekstylia Gastronomiczne',
        description: 'Profesjonalna bielizna stołowa odporna na plamy. Obrusy, serwetki i skirtingi szyte na wymiar.',
        image: '/products/obrus-hotelowy-plamoodporny.webp',
        features: ['Tkaniny Plamoodporne', 'Szeroka Gama Kolorów', 'Szycie na Wymiar'],
        link: '/tekstylia-hotelowe/obrusy'
    },
    {
        id: 'stopki',
        title: 'Stopki Łazienkowe',
        description: 'Grube i chłonne dywaniki łazienkowe o gramaturze do 700 g/m². Zapewnij bezpieczeństwo i komfort.',
        image: '/images/products/bathmats/stopka-hero.webp',
        features: ['Gramatura 500-700 g/m²', 'Wzór Grecki', 'Antypoślizgowe'],
        link: '/tekstylia-hotelowe/stopki'
    }
];

export default function TextilesPage() {
    return (
        <main className={styles.main}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.container}>
                    <div className={styles.heroGrid}>
                        <div className={styles.heroContent}>
                            <div className={styles.partnerBadge}>
                                <Certificate size={16} />
                                OFICJALNY DYSTRYBUTOR NETHORECA
                            </div>
                            <h1 className={styles.heroTitle}>
                                <span className={styles.brandName}>Profesjonalny Serwis Tekstyliów</span>
                                <span className={styles.heroSubtitle}>
                                    dla hoteli
                                </span>
                            </h1>
                            <p className={styles.heroDescription}>
                                Kompleksowe zaopatrzenie B2B w tekstylia obiektowe <strong>NetHoreca</strong>.
                                Oferujemy asortyment charakteryzujący się optymalnym kosztem użytkowania,
                                najwyższą gramaturą oraz maksymalną wytrzymałością w warunkach prania przemysłowego.
                            </p>
                            <div className={styles.heroButtons}>
                                <Link href="/zapytanie-ofertowe" className={styles.btnPrimary}>
                                    Zapytaj o Ofertę
                                </Link>
                                <Link href="#kolekcje" className={styles.btnSecondary}>
                                    Zobacz Kolekcje
                                </Link>
                            </div>
                            <div className={styles.trustBadges}>
                                <span className={styles.trustBadge}>
                                    <Star size={16} /> Premium Quality
                                </span>
                                <span className={styles.trustBadge}>
                                    <Certificate size={16} /> Oeko-Tex 100
                                </span>
                                <span className={styles.trustBadge}>
                                    <Hotel size={16} /> Hotel Standard
                                </span>
                            </div>
                        </div>
                        <div className={styles.heroVisual}>
                            <div className={styles.heroImageWrapper}>
                                <Image
                                    src="/products/posciel-hotelowa-satynowa-splot.webp"
                                    alt="Luksusowa pościel hotelowa w eleganckim pokoju"
                                    width={600}
                                    height={450}
                                    priority
                                    className={styles.heroImage}
                                />
                            </div>
                            <div className={styles.floatingCard}>
                                <Checkmark size={24} />
                                <div>
                                    <strong>Bawełna 100%</strong>
                                    <span>Najwyższa chłonność</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why NetHoreca Section */}
            <section className={styles.featuresSection}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionLabel}>
                            <span className={styles.labelDot}></span>
                            Dlaczego NetHoreca?
                        </span>
                        <h2 className={styles.aboutTitle}>
                            Jakość, którą poczują Twoi goście
                        </h2>
                        <p className={styles.aboutText}>
                            Nasze tekstylia są projektowane z myślą o intensywnym użytkowaniu w hotelach.
                            Gwarantujemy zachowanie parametrów nawet po wielokrotnym praniu przemysłowym.
                        </p>
                    </div>

                    <div className={styles.featuresGrid}>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>
                                <DataVis_1 size={32} />
                            </div>
                            <h3>Trwałość Kolorów</h3>
                            <p>Zaawansowane barwienie reaktywne zapewnia odporność na blaknięcie i pranie w 90°C.</p>
                        </div>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>
                                <Certificate size={32} />
                            </div>
                            <h3>Certyfikat Oeko-Tex</h3>
                            <p>Wszystkie produkty są wolne od szkodliwych substancji i bezpieczne dla skóry.</p>
                        </div>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>
                                <Product size={32} />
                            </div>
                            <h3>Powtarzalność</h3>
                            <p>Gwarantujemy stałą dostępność kolekcji, umożliwiając łatwe uzupełnianie stanów.</p>
                        </div>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>
                                <Delivery size={32} />
                            </div>
                            <h3>Szybka Dostawa</h3>
                            <p>Utrzymujemy wysokie stany magazynowe w Polsce. Realizacja zamówień w 48h.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Categories Showcase */}
            <section className={styles.categoriesSection} id="kolekcje">
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionLabel}>
                            <span className={styles.labelDot}></span>
                            Nasze Kolekcje
                        </span>
                        <h2 className={styles.aboutTitle}>
                            Kompleksowe wyposażenie tekstylne
                        </h2>
                    </div>

                    <div className={styles.categoriesGrid}>
                        {textileCategories.map((category) => (
                            <Link href={category.link} key={category.id} className={styles.categoryCard}>
                                <div className={styles.categoryImageWrapper}>
                                    <Image
                                        src={category.image}
                                        alt={category.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 50vw"
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

            <TeamContactCTA
                member={teamMembers[1]}
                title="Get in touch"
                description="Potrzebujesz próbek tkanin lub indywidualnej wyceny tekstyliów? Anna Kowalska pomoże Ci dobrać rozwiązania idealnie dopasowane do standardu Twojego hotelu."
            />

            <ReferenceSection />

            {/* CTA Section */}
            <section className={styles.ctaSection}>
                <div className={styles.container}>
                    <div className={styles.ctaContent}>
                        <h2>Stwórz wyjątkowy klimat w swoim hotelu</h2>
                        <p>
                            Skontaktuj się z nami, aby zamówić próbki tkanin lub otrzymać wycenę
                            dla Twojego obiektu. Doradzamy w doborze gramatur i splotów.
                        </p>
                        <div className={styles.ctaButtons}>
                            <Link href="/zapytanie-ofertowe" className={styles.btnWhite}>
                                Zamów Wycenę
                            </Link>
                            <Link href="/kontakt" className={styles.btnOutline}>
                                Kontakt
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
