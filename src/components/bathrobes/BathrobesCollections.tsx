'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from '@/app/tekstylia-hotelowe/posciel/page.module.css'; // Reusing consistent styles
import { getNetHorecaBathrobes } from '@/lib/nethoreca-products';
import { ArrowRight, Ruler, WatsonHealthDicomOverlay } from '@carbon/icons-react';

export default function BathrobesCollections() {
    const products = getNetHorecaBathrobes();
    console.log("Reloading Bathrobe Collections with new image paths", products.length);

    return (
        <section id="kolekcja" className={styles.collectionsSection}>
            <div className={styles.container}>
                <div className={styles.sectionHeader}>
                    <span className={styles.sectionLabel}>Nasza Kolekcja</span>
                    <h2 className={styles.sectionTitle}>Modele Szlafroków</h2>
                    <p className={styles.sectionDesc}>
                        Wybierz idealny model dla swojego obiektu. Od profesjonalnych szlafroków obiektowych
                        welurowych po praktyczne i lekkie szlafroki waflowe.
                    </p>
                </div>

                <div className={styles.collectionsGrid}>
                    {products.map((product) => (
                        <div key={product.id} className={styles.collectionCard}>
                            <div className={styles.placeholderImage}>
                                {/* Using placeholder logic if image fails, but referencing actual image path */}
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
                                        <WatsonHealthDicomOverlay size={16} /> {product.specs.find(s => s.label === 'Typ')?.value || 'Unisex'}
                                    </span>
                                </div>

                                <p style={{ color: '#666', fontSize: '0.9rem', marginBottom: '1.5rem', lineHeight: '1.5' }}>
                                    {product.description}
                                </p>

                                <Link href="/zapytanie-ofertowe" className={styles.cardLink}>
                                    Zapytaj o cenę <ArrowRight size={16} />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
