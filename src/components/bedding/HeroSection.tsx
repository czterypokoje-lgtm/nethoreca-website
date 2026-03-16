'use client';

import Link from 'next/link';
import Image from 'next/image';
import { CheckmarkFilled, Calculator, Catalog, StarFilled } from '@carbon/icons-react';
import styles from '../../app/tekstylia-hotelowe/posciel/page.module.css';

export default function HeroSection() {
    return (
        <section className={styles.heroSection}>
            <div className={styles.container}>
                <div className={styles.heroGrid}>
                    <div className={styles.heroContent}>
                        <div className={styles.badge}>
                            <StarFilled size={16} color="#ffd700" />
                            Wynajem i Sprzedaż
                        </div>
                        <h1 className={styles.heroTitle}>
                            Pościel Hotelowa <br />
                            <span className={styles.highlight}>Klasy Premium</span>
                        </h1>
                        <p className={styles.heroSubtitle}>
                            Kompleksowe rozwiązanie dla hoteli, pensjonatów i resortów.
                            <strong>Model Pay-Per-Use</strong>: Płacisz tylko za wykorzystaną pościel.
                            System bezinwestycyjny.
                        </p>

                        <div className={styles.heroButtons}>
                            <a href="#kalkulator" className={styles.btnPrimary}>
                                <Calculator size={20} />
                                Oblicz Koszt
                            </a>
                            <a href="#kolekcje" className={styles.btnSecondary}>
                                <Catalog size={20} />
                                Zobacz Katalog
                            </a>
                        </div>

                        <div className={styles.trustPoints}>
                            <div className={styles.point}>
                                <CheckmarkFilled size={20} />
                                <span>50+ hoteli już nam ufa</span>
                            </div>
                            <div className={styles.point}>
                                <CheckmarkFilled size={20} />
                                <span>Gramatura 200-300 TC</span>
                            </div>
                            <div className={styles.point}>
                                <CheckmarkFilled size={20} />
                                <span>Dostawa w 48h</span>
                            </div>
                        </div>
                    </div>

                    <div className={styles.heroVisual}>
                        <div className={styles.heroImageWrapper}>
                            <Image
                                src="/images/bedding/luxury.webp"
                                alt="Pościel hotelowa premium"
                                width={600}
                                height={500}
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                    display: 'block'
                                }}
                                priority
                            />
                        </div>
                        <div className={styles.floatingCard}>
                            <div style={{ background: '#e0f2ff', padding: '0.75rem', borderRadius: '50%' }}>
                                <CheckmarkFilled size={24} color="#004b87" />
                            </div>
                            <div>
                                <strong style={{ display: 'block', color: '#0f172a', fontSize: '1rem' }}>
                                    Gwarancja Bieli
                                </strong>
                                <span style={{ fontSize: '0.875rem', color: '#64748b' }}>
                                    Certyfikat Oeko-Tex®
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
