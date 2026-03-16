import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import { Suspense } from 'react';
import { selpakProducts } from '@/lib/selpak-products';
import SelpakProductsClient from './SelpakProductsClient';
import styles from './page.module.css';
import { createPageMetadata } from '@/lib/seo-metadata';

export const metadata: Metadata = createPageMetadata({
    title: 'Katalog Selpak Professional - Papier, Ręczniki, Serwetki | NetHoreca',
    description: 'Pełny katalog produktów Selpak Professional. Papier toaletowy Jumbo/Mini Jumbo, ręczniki Z-Fold/V-Fold/Autocut, serwetki. Porównanie modeli i cen.',
    path: '/selpak-professional/produkty',
    keywords: ['katalog Selpak Professional', 'papier toaletowy Jumbo', 'ręczniki papierowe ZFold', 'serwetki Selpak', 'produkty papierowe hotelowe'],
});

const productListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": selpakProducts.slice(0, 20).map((product, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
            "@type": "Product",
            "name": product.name,
            "url": `https://nethoreca.pl/selpak-professional/produkty/${product.slug}`,
            "image": `https://nethoreca.pl${product.image}`
        }
    }))
};



export default function SelpakProductsPage() {
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
                            <Link href="/selpak-professional">Selpak Professional</Link>
                            <span>/</span>
                            <span>Produkty</span>
                        </nav>
                        <h1>Produkty Selpak Professional</h1>
                        <p>Pełny katalog profesjonalnych produktów higienicznych dla hoteli i gastronomii</p>
                    </div>
                </section>

                {/* Client Component for Filtering */}
                <Suspense fallback={<div className="container" style={{ padding: '40px', textAlign: 'center' }}>Ładowanie katalogu...</div>}>
                    <SelpakProductsClient />
                </Suspense>

                {/* CTA */}
                <section className={styles.ctaSection}>
                    <div className={styles.container}>
                        <h2>Potrzebujesz spersonalizowanej oferty?</h2>
                        <p>Skontaktuj się z nami po indywidualną wycenę dla Twojego obiektu</p>
                        <Link href="/zapytanie-ofertowe" className={styles.ctaBtn}>
                            Zapytaj o cenę
                        </Link>
                    </div>
                </section>
            </main>
        </>
    );
}
