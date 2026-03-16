import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Script from 'next/script';
import { selpakProducts, getProductBySlug, getRelatedProducts } from '@/lib/selpak-products';
import styles from './page.module.css';
import {
    ArrowLeft,
    Checkmark,
    ShoppingCart,
    DocumentDownload,
    Recycle
} from '@carbon/icons-react';

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return selpakProducts.map((product) => ({
        slug: product.slug,
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const product = getProductBySlug(slug);

    if (!product) {
        return { title: 'Produkt nie znaleziony' };
    }

    return {
        title: `${product.name} | Selpak Professional | NetHoreca`,
        description: product.description,
        keywords: [
            product.name,
            product.nameEn,
            'Selpak Professional',
            product.subcategory,
            'produkty hotelowe',
            'higiena profesjonalna'
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
    const product = getProductBySlug(slug);

    if (!product) {
        notFound();
    }

    const relatedProducts = getRelatedProducts(product.id);

    const productSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": product.name,
        "description": product.description,
        "image": `https://nethoreca.pl${product.image}`,
        "brand": {
            "@type": "Brand",
            "name": "Selpak Professional"
        },
        "category": product.subcategory,
        "sku": product.specs.find(s => s.label === 'Kod produktu')?.value,
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
                        <Link href="/selpak-professional">Selpak Professional</Link>
                        <span>/</span>
                        <Link href="/selpak-professional/produkty">Produkty</Link>
                        <span>/</span>
                        <span>{product.subcategory}</span>
                        <span>/</span>
                        <span className={styles.current}>{product.name}</span>
                    </div>
                </nav>

                {/* Product Section */}
                <section className={styles.productSection}>
                    <div className={styles.container}>
                        <div className={styles.productGrid}>
                            {/* Product Info */}
                            <div className={styles.productInfo}>
                                <Link href="/selpak-professional/produkty" className={styles.backLink}>
                                    <ArrowLeft size={16} /> Powrót do produktów
                                </Link>

                                <h1 className={styles.productTitle}>{product.name}</h1>

                                {product.badge && (
                                    <span className={`${styles.badge} ${styles[product.badge.toLowerCase()]}`}>
                                        {product.badge}
                                    </span>
                                )}

                                {product.isRecycled && (
                                    <span className={styles.recycledBadge}>
                                        <Recycle size={14} /> ECO
                                    </span>
                                )}

                                <p className={styles.subcategory}>{product.subcategory}</p>

                                {/* Product Options */}
                                {product.options && product.options.length > 0 && (
                                    <div className={styles.optionsSection}>
                                        <h3>Opcje produktu</h3>
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
                            </div>

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
                                    {product.isRecycled && (
                                        <div className={styles.ecoLabel}>
                                            <Recycle size={20} />
                                            <span>Przyjazny środowisku</span>
                                        </div>
                                    )}
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
                                        href={`/selpak-professional/produkty/${related.slug}`}
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
                        <p>Skontaktuj się z nami po indywidualną wycenę dla Twojego hotelu</p>
                        <Link href="/zapytanie-ofertowe" className={styles.btnCta}>
                            Zapytaj o ofertę
                        </Link>
                    </div>
                </section>
            </main>
        </>
    );
}
