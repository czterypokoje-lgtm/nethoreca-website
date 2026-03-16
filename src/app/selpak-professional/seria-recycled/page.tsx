import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import styles from './page.module.css';
import { createPageMetadata } from '@/lib/seo-metadata';
import {
    Checkmark,
    ArrowRight,
    Recycle,
    TreeView,
    Sprout,
    Earth,
    Renew,
    ChartPie,
    Certificate
} from '@carbon/icons-react';

export const metadata: Metadata = createPageMetadata({
    title: 'Selpak Recycled - Ekologiczne Produkty Papierowe FSC | NetHoreca',
    description: 'Seria Selpak Professional Recycled: ekologiczny papier toaletowy i ręczniki z recyklingu. Certyfikat FSC, EU Ecolabel. Zrównoważone rozwiązania dla hoteli eco.',
    path: '/selpak-professional/seria-recycled',
    keywords: ['Selpak Recycled', 'ekologiczny papier toaletowy', 'FSC certified papier', 'EU Ecolabel hotel', 'produkty papierowe z recyklingu', 'eco hotel papier'],
});

const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Selpak Professional Recycled Series",
    "brand": {
        "@type": "Brand",
        "name": "Selpak Professional"
    },
    "description": "Ekologiczna seria produktów papierowych - 50% z recyklingu, FSC Certified",
    "additionalProperty": [
        {
            "@type": "PropertyValue",
            "name": "Recycled Content",
            "value": "50%"
        },
        {
            "@type": "PropertyValue",
            "name": "Certification",
            "value": "FSC Certified"
        }
    ]
};

const recycledProducts = [
    {
        name: 'Ręczniki Z-Fold Recycled',
        description: 'Profesjonalne ręczniki do dozowników z 50% zawartością recyklingu',
        specs: ['200 listków', 'Wysoka chłonność', 'FSC Certified'],
        type: 'reczniki'
    },
    {
        name: 'Ręczniki Automatyczne Recycled 21cm',
        description: 'Rolki do dozowników automatycznych z eko włókna',
        specs: ['135m długości', 'Kompatybilne z Wave/Natura', '6 rolek/opakowanie'],
        type: 'reczniki'
    },
    {
        name: 'Papier Toaletowy Jumbo Recycled',
        description: 'Duże rolki idealne do łazienek hotelowych o wysokim natężeniu ruchu',
        specs: ['150m długości', '2-warstwowy', '12 rolek/opakowanie'],
        type: 'papier'
    },
    {
        name: 'Papier Toaletowy Center Feed Recycled',
        description: 'System centralnego pobierania z materiału z odzysku',
        specs: ['120m długości', 'Higieniczne dozowanie', '6 rolek/opakowanie'],
        type: 'papier'
    },
    {
        name: 'Serwetki Recycled 33x33',
        description: 'Eleganckie serwetki dla restauracji hotelowych',
        specs: ['100 szt/opakowanie', '1-warstwowe', 'Kolor naturalny'],
        type: 'serwetki'
    }
];

const sustainabilityStats = [
    { value: '50%', label: 'Włókna z recyklingu', sublabel: 'w każdym produkcie' },
    { value: '30%', label: 'Włókna odzyskane', sublabel: 'z procesów produkcji' },
    { value: '20%', label: 'Celuloza pierwotna', sublabel: 'FSC Certified' },
    { value: '100%', label: 'Biodegradowalne', sublabel: 'i kompostowalne' }
];

const ecoFeatures = [
    {
        Icon: Recycle,
        title: 'Produkcja z recyklingu',
        description: 'Połowa włókien pochodzi z przetworzonych materiałów, redukując zapotrzebowanie na surowce pierwotne.'
    },
    {
        Icon: TreeView,
        title: 'Certyfikat FSC',
        description: 'Celuloza pierwotna pochodzi wyłącznie z lasów zarządzanych w sposób odpowiedzialny.'
    },
    {
        Icon: Sprout,
        title: 'Mniejszy ślad węglowy',
        description: 'Produkcja z recyklingu zużywa 70% mniej energii i 50% mniej wody niż tradycyjna.'
    },
    {
        Icon: Earth,
        title: 'Zero kompromisów',
        description: 'Seria Recycled oferuje taką samą miękkość i chłonność jak produkty premium.'
    }
];

export default function RecycledSeriesPage() {
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
                                <Link href="/selpak-professional" className={styles.breadcrumb}>
                                    ← Selpak Professional
                                </Link>
                                <div className={styles.ecoBadge}>
                                    <Recycle size={16} />
                                    SERIA RECYCLED
                                </div>
                                <h1 className={styles.heroTitle}>
                                    Ekologia bez<br />
                                    <span className={styles.highlight}>kompromisów</span>
                                </h1>
                                <p className={styles.heroDescription}>
                                    Seria Recycled łączy najwyższą jakość z troską o środowisko.
                                    <strong> 50% włókien z recyklingu</strong>, certyfikat FSC i pełna
                                    biodegradowalność - wszystko czego potrzebuje hotel dbający o zrównoważony rozwój.
                                </p>
                                <div className={styles.heroButtons}>
                                    <Link href="/zapytanie-ofertowe" className={styles.btnPrimary}>
                                        Zapytaj o ofertę
                                    </Link>
                                    <Link href="#produkty" className={styles.btnSecondary}>
                                        Zobacz produkty
                                    </Link>
                                </div>
                            </div>
                            <div className={styles.heroVisual}>
                                <div className={styles.statsRing}>
                                    {sustainabilityStats.map((stat, index) => (
                                        <div key={index} className={styles.statItem}>
                                            <span className={styles.statValue}>{stat.value}</span>
                                            <span className={styles.statLabel}>{stat.label}</span>
                                            <span className={styles.statSublabel}>{stat.sublabel}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Eco Features */}
                <section className={styles.featuresSection}>
                    <div className={styles.container}>
                        <div className={styles.sectionHeader}>
                            <h2>Dlaczego Recycled?</h2>
                            <p>Seria stworzona z myślą o przyszłości naszej planety</p>
                        </div>
                        <div className={styles.featuresGrid}>
                            {ecoFeatures.map((feature, index) => (
                                <div key={index} className={styles.featureCard}>
                                    <div className={styles.featureIcon}>
                                        <feature.Icon size={28} />
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
                            <h2>Produkty serii Recycled</h2>
                            <p>Pełna gama ekologicznych rozwiązań dla Twojego hotelu</p>
                        </div>
                        <div className={styles.productsGrid}>
                            {recycledProducts.map((product, index) => (
                                <div key={index} className={styles.productCard}>
                                    <div className={styles.productBadge}>
                                        <Recycle size={14} /> ECO
                                    </div>
                                    <h3>{product.name}</h3>
                                    <p>{product.description}</p>
                                    <ul className={styles.productSpecs}>
                                        {product.specs.map((spec, idx) => (
                                            <li key={idx}>
                                                <Checkmark size={14} />
                                                {spec}
                                            </li>
                                        ))}
                                    </ul>
                                    <Link href="/zapytanie-ofertowe" className={styles.productLink}>
                                        Zapytaj o cenę <ArrowRight size={16} />
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Certification Section */}
                <section className={styles.certSection}>
                    <div className={styles.container}>
                        <div className={styles.certGrid}>
                            <div className={styles.certContent}>
                                <h2>Certyfikaty i standardy</h2>
                                <p>
                                    Seria Recycled spełnia najwyższe międzynarodowe standardy
                                    zrównoważonej produkcji i bezpieczeństwa.
                                </p>
                                <ul className={styles.certList}>
                                    <li>
                                        <Certificate size={24} />
                                        <div>
                                            <strong>FSC Certified</strong>
                                            <span>Celuloza z odpowiedzialnie zarządzanych lasów</span>
                                        </div>
                                    </li>
                                    <li>
                                        <Renew size={24} />
                                        <div>
                                            <strong>EU Ecolabel Ready</strong>
                                            <span>Spełnia kryteria europejskiego oznakowania ekologicznego</span>
                                        </div>
                                    </li>
                                    <li>
                                        <ChartPie size={24} />
                                        <div>
                                            <strong>ISO 14001</strong>
                                            <span>System zarządzania środowiskowego</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className={styles.certVisual}>
                                <div className={styles.certBadge}>
                                    <TreeView size={48} />
                                    <span>FSC<br />CERTIFIED</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className={styles.ctaSection}>
                    <div className={styles.container}>
                        <div className={styles.ctaContent}>
                            <h2>Zrób krok ku zrównoważonemu hotelarstwu</h2>
                            <p>
                                Dołącz do hoteli, które wybierają produkty przyjazne środowisku
                                bez rezygnacji z jakości. Skontaktuj się z nami po ofertę.
                            </p>
                            <Link href="/zapytanie-ofertowe" className={styles.btnCta}>
                                Zapytaj o ofertę Recycled
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
