import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import { nethorecaProducts, getNetHorecaTowels, getNetHorecaBathMats } from '@/lib/nethoreca-products';
import styles from './page.module.css';
import { createPageMetadata } from '@/lib/seo-metadata';
import {
    ArrowRight,
    ColorPalette
} from '@carbon/icons-react';

export const metadata: Metadata = createPageMetadata({
    title: 'Katalog Ręczników Hotelowych - Wszystkie Modele | NetHoreca',
    description: 'Pełny katalog ręczników hotelowych NetHoreca. Porównaj modele: Classic, Premium, Luxury. Różne gramatury (400-650 g/m²), rozmiary i kolory. Zamów próbki!',
    path: '/tekstylia-hotelowe/reczniki/produkty',
    keywords: ['katalog ręczników hotelowych', 'ręczniki hotelowe modele', 'ręczniki NetHoreca', 'ręczniki frotte katalog'],
});

const productListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": nethorecaProducts.map((product, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
            "@type": "Product",
            "name": product.name,
            "url": `https://nethoreca.pl/tekstylia-hotelowe/reczniki/produkty/${product.slug}`,
            "image": `https://nethoreca.pl${product.image}`
        }
    }))
};

export default function NetHorecaTowelsPage() {
    const towels = getNetHorecaTowels();
    const bathMats = getNetHorecaBathMats();

    return (
        <>
            <Script
                id="products-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(productListSchema) }}
            />

            <main className={styles.main}>
                {/* Hero */}
                <section className={styles.hero}>
                    <div className={styles.container}>
                        <nav className={styles.breadcrumb}>
                            <Link href="/">Strona główna</Link>
                            <span>/</span>
                            <Link href="/tekstylia-hotelowe">Tekstylia Hotelowe</Link>
                            <span>/</span>
                            <Link href="/tekstylia-hotelowe/reczniki">Ręczniki</Link>
                            <span>/</span>
                            <span>Produkty NetHoreca</span>
                        </nav>
                        <h1>Ręczniki Hotelowe NetHoreca Professional</h1>
                        <p>Profesjonalna kolekcja ręczników od oficjalnego dostawcy nethoreca.pl</p>
                        <div className={styles.heroStats}>
                            <div className={styles.stat}>
                                <strong>{nethorecaProducts.length}</strong>
                                <span>produktów</span>
                            </div>
                            <div className={styles.stat}>
                                <strong>400-550</strong>
                                <span>g/m² gramatura</span>
                            </div>
                            <div className={styles.stat}>
                                <strong>100%</strong>
                                <span>bawełna</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Towels Grid */}
                <section className={styles.productsSection}>
                    <div className={styles.container}>
                        <h2 className={styles.sectionTitle}>Ręczniki hotelowe</h2>
                        <div className={styles.productsGrid}>
                            {towels.map((product) => (
                                <Link
                                    key={product.id}
                                    href={`/tekstylia-hotelowe/reczniki/produkty/${product.slug}`}
                                    className={styles.productCard}
                                >
                                    <div className={styles.productImage}>
                                        <Image
                                            src={product.image}
                                            alt={product.name}
                                            width={280}
                                            height={280}
                                            className={styles.image}
                                        />
                                        {product.badge && (
                                            <span className={`${styles.badge} ${styles[product.badge.toLowerCase()]}`}>
                                                {product.badge}
                                            </span>
                                        )}
                                    </div>
                                    <div className={styles.productInfo}>
                                        <span className={styles.category}>{product.subcategory}</span>
                                        <h3>{product.name}</h3>
                                        <div className={styles.grammage}>{product.grammage}</div>

                                        {/* Size options preview */}
                                        <div className={styles.sizesPreview}>
                                            {product.options.slice(0, 3).map((opt, i) => (
                                                <span key={i} className={styles.sizeTag}>
                                                    {opt.label}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Colors preview */}
                                        <div className={styles.colorsPreview}>
                                            <ColorPalette size={14} />
                                            {product.colors.slice(0, 4).map((color, i) => (
                                                <span
                                                    key={i}
                                                    className={styles.colorDot}
                                                    style={{ backgroundColor: color.hex }}
                                                    title={color.name}
                                                />
                                            ))}
                                            {product.colors.length > 4 && (
                                                <span className={styles.moreColors}>+{product.colors.length - 4}</span>
                                            )}
                                        </div>

                                        <span className={styles.viewLink}>
                                            Zobacz szczegóły <ArrowRight size={14} />
                                        </span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Bath Mats */}
                {bathMats.length > 0 && (
                    <section className={styles.productsSection} style={{ background: '#f8fafc' }}>
                        <div className={styles.container}>
                            <h2 className={styles.sectionTitle}>Dywaniki łazienkowe</h2>
                            <div className={styles.productsGrid}>
                                {bathMats.map((product) => (
                                    <Link
                                        key={product.id}
                                        href={`/tekstylia-hotelowe/reczniki/produkty/${product.slug}`}
                                        className={styles.productCard}
                                    >
                                        <div className={styles.productImage}>
                                            <Image
                                                src={product.image}
                                                alt={product.name}
                                                width={280}
                                                height={280}
                                                className={styles.image}
                                            />
                                        </div>
                                        <div className={styles.productInfo}>
                                            <span className={styles.category}>{product.subcategory}</span>
                                            <h3>{product.name}</h3>
                                            <div className={styles.grammage}>{product.grammage}</div>
                                            <span className={styles.viewLink}>
                                                Zobacz szczegóły <ArrowRight size={14} />
                                            </span>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* Supplier Info */}
                <section className={styles.supplierSection}>
                    <div className={styles.container}>
                        <div className={styles.supplierCard}>
                            <h2>Oficjalny dystrybutor</h2>
                            <p>Wszystkie produkty NetHoreca Professional dostępne są poprzez oficjalnego dostawcę nethoreca.pl. Skontaktuj się z nami po spersonalizowaną ofertę.</p>
                            <a href="https://nethoreca.pl" target="_blank" rel="noopener noreferrer" className={styles.supplierLink}>
                                Odwiedź nethoreca.pl
                            </a>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className={styles.ctaSection}>
                    <div className={styles.container}>
                        <h2>Potrzebujesz spersonalizowanej oferty?</h2>
                        <p>Zapytaj o cenę hurtową i warunki wynajmu dla Twojego hotelu</p>
                        <Link href="/zapytanie-ofertowe" className={styles.ctaBtn}>
                            Zapytaj o cenę
                        </Link>
                    </div>
                </section>
            </main>
        </>
    );
}
