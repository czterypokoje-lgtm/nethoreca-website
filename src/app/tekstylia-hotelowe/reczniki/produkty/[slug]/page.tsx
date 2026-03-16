import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Script from 'next/script';
import { nethorecaProducts, getNetHorecaProductBySlug, getRelatedNetHorecaProducts } from '@/lib/nethoreca-products';
import styles from './page.module.css';
import {
    ArrowLeft,
    Checkmark,
    ShoppingCart,
    DocumentDownload,
    ColorPalette
} from '@carbon/icons-react';

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return nethorecaProducts.map((product) => ({
        slug: product.slug,
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const product = getNetHorecaProductBySlug(slug);

    if (!product) {
        return { title: 'Produkt nie znaleziony' };
    }

    return {
        title: `${product.name} | NetHoreca Professional | NetHoreca`,
        description: product.description,
        keywords: [
            product.name,
            'NetHoreca Professional',
            'ręczniki hotelowe',
            product.subcategory,
            product.grammage,
            'tekstylia hotelowe'
        ],
        openGraph: {
            title: product.name,
            description: product.description,
            images: [{ url: product.image, alt: product.name }],
        },
    };
}

export default async function ProductPage({ params }: PageProps) {
    const { slug } = await params;
    const product = getNetHorecaProductBySlug(slug);

    if (!product) {
        notFound();
    }

    const relatedProducts = getRelatedNetHorecaProducts(product.id);

    const productSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": product.name,
        "description": product.description,
        "image": `https://nethoreca.pl${product.image}`,
        "brand": {
            "@type": "Brand",
            "name": "NetHoreca Professional"
        },
        "category": product.subcategory,
        "material": product.material,
        "offers": {
            "@type": "Offer",
            "availability": "https://schema.org/InStock",
            "priceCurrency": "PLN",
            "seller": {
                "@type": "Organization",
                "name": "NetHoreca"
            }
        }
    };

    return (
        <>
            <Script
                id="product-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
            />

            <main className={styles.main}>
                {/* Breadcrumb */}
                <nav className={styles.breadcrumb}>
                    <div className={styles.container}>
                        <Link href="/">Strona główna</Link>
                        <span>/</span>
                        <Link href="/tekstylia-hotelowe">Tekstylia Hotelowe</Link>
                        <span>/</span>
                        <Link href="/tekstylia-hotelowe/reczniki">Ręczniki</Link>
                        <span>/</span>
                        <span className={styles.current}>{product.name}</span>
                    </div>
                </nav>

                {/* Product Section */}
                <section className={styles.productSection}>
                    <div className={styles.container}>
                        <div className={styles.productGrid}>
                            {/* Product Image */}
                            <div className={styles.productImage}>
                                <div className={styles.imageWrapper}>
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        width={500}
                                        height={500}
                                        className={styles.mainImage}
                                        priority
                                    />
                                    {product.badge && (
                                        <span className={`${styles.imageBadge} ${styles[product.badge.toLowerCase()]}`}>
                                            {product.badge}
                                        </span>
                                    )}
                                </div>
                            </div>

                            {/* Product Info */}
                            <div className={styles.productInfo}>
                                <Link href="/tekstylia-hotelowe/reczniki" className={styles.backLink}>
                                    <ArrowLeft size={16} /> Powrót do ręczników
                                </Link>

                                <span className={styles.subcategory}>{product.subcategory}</span>
                                <h1 className={styles.productTitle}>{product.name}</h1>

                                <div className={styles.grammageTag}>
                                    <strong>{product.grammage}</strong> · {product.material}
                                </div>

                                {/* Size Options */}
                                {product.options && product.options.length > 0 && (
                                    <div className={styles.optionsSection}>
                                        <h3>Dostępne rozmiary</h3>
                                        <div className={styles.optionsGrid}>
                                            {product.options.map((option, index) => (
                                                <button
                                                    key={index}
                                                    className={`${styles.optionBtn} ${index === 0 ? styles.active : ''}`}
                                                >
                                                    {option.label}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Color Options */}
                                {product.colors && product.colors.length > 0 && (
                                    <div className={styles.colorsSection}>
                                        <h3><ColorPalette size={16} /> Dostępne kolory</h3>
                                        <div className={styles.colorsGrid}>
                                            {product.colors.map((color, index) => (
                                                <div
                                                    key={index}
                                                    className={`${styles.colorSwatch} ${index === 0 ? styles.activeColor : ''}`}
                                                    title={color.name}
                                                >
                                                    <span
                                                        className={styles.colorCircle}
                                                        style={{ backgroundColor: color.hex }}
                                                    />
                                                    <span className={styles.colorName}>{color.name}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Product Features Table */}
                                <div className={styles.specsSection}>
                                    <h3>Specyfikacja produktu</h3>
                                    <table className={styles.specsTable}>
                                        <tbody>
                                            {product.specs.map((spec, index) => (
                                                <tr key={index}>
                                                    <td className={styles.specLabel}>{spec.label}</td>
                                                    <td className={styles.specValue}>{spec.value}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>

                                {/* Features List */}
                                {product.features && product.features.length > 0 && (
                                    <div className={styles.featuresSection}>
                                        <h3>Cechy produktu</h3>
                                        <ul className={styles.featuresList}>
                                            {product.features.map((feature, index) => (
                                                <li key={index}>
                                                    <Checkmark size={16} />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {/* CTA Buttons */}
                                <div className={styles.ctaButtons}>
                                    <Link href="/zapytanie-ofertowe" className={styles.btnPrimary}>
                                        <ShoppingCart size={18} />
                                        Zapytaj o cenę
                                    </Link>
                                    <button className={styles.btnSecondary}>
                                        <DocumentDownload size={18} />
                                        Karta produktu PDF
                                    </button>
                                </div>

                                {/* Supplier Info */}
                                <div className={styles.supplierInfo}>
                                    <span>Oficjalny dostawca:</span>
                                    <a href="https://nethoreca.pl" target="_blank" rel="noopener noreferrer">
                                        nethoreca.pl
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Description Section */}
                <section className={styles.descriptionSection}>
                    <div className={styles.container}>
                        <h2>Opis produktu</h2>
                        <p>{product.description}</p>
                    </div>
                </section>

                {/* Related Products */}
                {relatedProducts.length > 0 && (
                    <section className={styles.relatedSection}>
                        <div className={styles.container}>
                            <h2>Inne produkty</h2>
                            <div className={styles.relatedGrid}>
                                {relatedProducts.map((related) => (
                                    <Link
                                        key={related.id}
                                        href={`/tekstylia-hotelowe/reczniki/produkty/${related.slug}`}
                                        className={styles.relatedCard}
                                    >
                                        <div className={styles.relatedImage}>
                                            <Image
                                                src={related.image}
                                                alt={related.name}
                                                width={200}
                                                height={200}
                                            />
                                        </div>
                                        <h4>{related.name}</h4>
                                        <span className={styles.relatedGrammage}>{related.grammage}</span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* CTA Section */}
                <section className={styles.ctaSection}>
                    <div className={styles.container}>
                        <h2>Potrzebujesz większej ilości?</h2>
                        <p>Zapytaj o cenę hurtową i warunki wynajmu dla Twojego hotelu</p>
                        <Link href="/zapytanie-ofertowe" className={styles.btnCta}>
                            Zapytaj o ofertę
                        </Link>
                    </div>
                </section>
            </main>
        </>
    );
}
