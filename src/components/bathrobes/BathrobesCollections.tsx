import Image from 'next/image';
import Link from 'next/link';
import styles from '@/app/tekstylia-hotelowe/szlafroki/szlafroki.module.css';
import { getNetHorecaBathrobes } from '@/lib/nethoreca-products';
import { ArrowRight, Ruler, WatsonHealthDicomOverlay } from '@carbon/icons-react';

export default function BathrobesCollections() {
    const products = getNetHorecaBathrobes();

    return (
        <section id="kolekcja" className={styles.collectionsSection}>
            <div className={styles.container}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>Modele Szlafroków</h2>
                    <p className={styles.sectionDesc}>
                        Wybierz idealny model dla swojego obiektu. Od profesjonalnych szlafroków obiektowych
                        welurowych po praktyczne i lekkie szlafroki waflowe.
                    </p>
                </div>

                <div className={styles.collectionsGrid}>
                    {products.map((product) => (
                        <div key={product.id} className={styles.productCard}>
                            <div className={styles.productImageWrapper}>
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>
                            <div className={styles.productInfo}>
                                <div className={styles.badge} style={{ marginBottom: '0.5rem', padding: '0.25rem 0.75rem' }}>{product.subcategory}</div>
                                <h3 className={styles.cardTitle}>{product.name}</h3>

                                <div className={styles.trustPoints} style={{ marginTop: '0.5rem', marginBottom: '1rem', gap: '1rem' }}>
                                    <div className={styles.point} style={{ color: '#64748b' }}>
                                        <Ruler size={16} /> {product.grammage}
                                    </div>
                                    <div className={styles.point} style={{ color: '#64748b' }}>
                                        <WatsonHealthDicomOverlay size={16} /> {product.specs.find(s => s.label === 'Typ')?.value || 'Unisex'}
                                    </div>
                                </div>

                                <p style={{ color: '#64748b', fontSize: '0.9rem', marginBottom: '1.5rem', lineHeight: '1.5' }}>
                                    {product.description}
                                </p>

                                <Link href="/zapytanie-ofertowe" className={styles.btnPrimary} style={{ display: 'inline-flex', padding: '0.75rem 1.5rem', fontSize: '0.9rem' }}>
                                    Zapytaj o cenę <ArrowRight size={16} style={{ marginLeft: '0.5rem' }} />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
