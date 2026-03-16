'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from '@/app/tekstylia-hotelowe/posciel/page.module.css';
import { getNetHorecaBathMats } from '@/lib/nethoreca-products';
import { ArrowRight, Ruler, Grid } from '@carbon/icons-react';

export default function BathMatsCollections() {
    const products = getNetHorecaBathMats();

    return (
        <section id="kolekcja" className={styles.collectionsSection}>
            <div className={styles.container}>
                <div className={styles.sectionHeader}>
                    <span className={styles.sectionLabel}>Oferta Produktowa</span>
                    <h2 className={styles.sectionTitle}>Modele Stopek</h2>
                    <p className={styles.sectionDesc}>
                        Wybierz stopkę pasującą do standardu Twojej łazienki.
                        Oferujemy klasyczne gładkie wzory oraz eleganckie tłoczenia greckie.
                    </p>
                </div>

                <div className={styles.collectionsGrid}>
                    {products.map((product) => (
                        <div key={product.id} className={styles.collectionCard}>
                            <div className={styles.placeholderImage}>
                                <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        fill
                                        style={{ objectFit: 'cover' }}
                                    />
                                </div>
                            </div>
                            <div className={styles.cardContent}>
                                <div className={styles.cardSubtitle}>{product.subcategory}</div>
                                <h3 className={styles.cardTitle}>{product.name}</h3>

                                <div className={styles.cardSpecs}>
                                    <span>
                                        <Ruler size={16} /> {product.grammage}
                                    </span>
                                    <span>
                                        <Grid size={16} /> {product.specs.find(s => s.label === 'Wzór' || s.label === 'Seria')?.value}
                                    </span>
                                </div>

                                <p style={{ color: '#666', fontSize: '0.9rem', marginBottom: '1.5rem', lineHeight: '1.5' }}>
                                    {product.description}
                                </p>

                                <Link href="/zapytanie-ofertowe" className={styles.cardLink}>
                                    Zamów online <ArrowRight size={16} />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
