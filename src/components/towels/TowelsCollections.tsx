'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckmarkFilled, Catalog as CatalogIcon } from '@carbon/icons-react';
import styles from '@/app/tekstylia-hotelowe/reczniki/reczniki.module.css';

const collections = [
    {
        id: 'standard',
        name: 'Standard Line',
        gsm: '400-450 GSM',
        features: ['Ekonomiczne rozwiązanie', 'Szybkie schnięcie', 'Podwójne obszycie'],
        image: '/images/towels/standard.webp',
        tag: 'Dla Hosteli i Budget'
    },
    {
        id: 'premium',
        name: 'Premium Line',
        gsm: '500 GSM',
        features: ['Najpopularniejszy wybór', 'Wysoka miękkość', 'Pętelka 16/1'],
        image: '/images/towels/premium.webp',
        tag: 'Dla Hoteli 3-4*'
    },
    {
        id: 'spa',
        name: 'SPA & Wellness',
        gsm: '600+ GSM',
        features: ['Ultra puszyste', 'Maksymalna chłonność', 'Ekskluzywny chwyt'],
        image: '/images/towels/spa.webp',
        tag: 'Dla Hoteli 5* i SPA'
    }
];

export default function TowelsCollections() {
    return (
        <section id="kolekcje" className={styles.collectionsSection}>
            <div className={styles.container}>
                <div className={styles.sectionHeader}>
                    <span className={styles.sectionLabel}>Nasze Kolekcje</span>
                    <h2 className={styles.sectionTitle}>Ręczniki dopasowane do standardu</h2>
                </div>

                <div className={styles.collectionsGrid}>
                    {collections.map((col) => (
                        <div key={col.id} className={styles.collectionCard}>
                            <div className={styles.cardImageWrapper}>
                                <Image
                                    src={col.image}
                                    alt={col.name}
                                    fill
                                    className={styles.cardImage}
                                    style={{ objectFit: 'cover' }}
                                />
                                <span className={styles.cardTag}>{col.tag}</span>
                            </div>
                            <div className={styles.cardContent}>
                                <div className={styles.cardHeader}>
                                    <h3>{col.name}</h3>
                                    <span style={{ color: '#6dc7b8', fontWeight: '700' }}>{col.gsm}</span>
                                </div>
                                <ul className={styles.cardFeatures}>
                                    {col.features.map((feature, idx) => (
                                        <li key={idx}>
                                            <CheckmarkFilled size={16} /> {feature}
                                        </li>
                                    ))}
                                </ul>
                                <Link href="/zapytanie-ofertowe" className={styles.btnOutline} style={{ width: '100%', justifyContent: 'center', display: 'flex', textDecoration: 'none' }}>
                                    Zobacz {col.name} <ArrowRight size={16} />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                    <Link href="/tekstylia-hotelowe/reczniki/produkty" className={styles.btnPrimary} style={{ textDecoration: 'none' }}>
                        <CatalogIcon size={20} style={{ marginRight: '8px' }} /> Zobacz Pełną Ofertę Produktów
                    </Link>
                </div>
            </div>
        </section>
    );
}
