'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from '@/app/tekstylia-hotelowe/posciel/page.module.css';
import { getNetHorecaTableLinens } from '@/lib/nethoreca-products';
import { ArrowRight, Grid, Chemistry } from '@carbon/icons-react';

export default function TableLinensCollections() {
    const products = getNetHorecaTableLinens();

    return (
        <section id="kolekcja" className={styles.collectionsSection}>
            <div className={styles.container}>
                <div className={styles.sectionHeader}>
                    <span className={styles.sectionLabel}>Tkaniny Stołowe</span>
                    <h2 className={styles.sectionTitle}>Kolekcje Obrusowe</h2>
                    <p className={styles.sectionDesc}>
                        Od klasycznej satyny bawełnianej po nowoczesne tkaniny plamoodporne.
                        Oferujemy pełną konfekcję: obrusy, serwety, bieżniki i skirtingi.
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
                                        <Grid size={16} /> {product.grammage}
                                    </span>
                                    <span>
                                        <Chemistry size={16} /> {product.specs.find(s => s.label === 'Skład' || s.label === 'Materiał')?.value}
                                    </span>
                                </div>

                                <p style={{ color: '#666', fontSize: '0.9rem', marginBottom: '1.5rem', lineHeight: '1.5' }}>
                                    {product.description}
                                </p>

                                <Link href="/zapytanie-ofertowe" className={styles.cardLink}>
                                    Wyceń wymiar <ArrowRight size={16} />
                                </Link>
                            </div>
                        </div>
                    ))}

                    {/* Add a generic card for Skirting if not in DB */}
                    <div className={styles.collectionCard}>
                        <div className={styles.placeholderImage} style={{ background: '#f8fafc', flexDirection: 'column', gap: '1rem' }}>
                            <Grid size={48} style={{ opacity: 0.2 }} />
                            <span>Skirtingi i Falbany</span>
                        </div>
                        <div className={styles.cardContent}>
                            <div className={styles.cardSubtitle}>Dekoracja Stołów</div>
                            <h3 className={styles.cardTitle}>Skirtingi Bankietowe</h3>
                            <p style={{ color: '#666', fontSize: '0.9rem', marginBottom: '1.5rem', lineHeight: '1.5' }}>
                                Eleganckie falbany do stołów szwedzkich i prezydialnych.
                                Mocowanie na rzep, łatwy montaż. Tkaniny matowe i błyszczące.
                            </p>
                            <Link href="/zapytanie-ofertowe" className={styles.cardLink}>
                                Zapytaj o ofertę <ArrowRight size={16} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
