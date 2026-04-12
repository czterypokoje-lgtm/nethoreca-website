'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Checkmark, Star, Certificate, Hotel } from '@carbon/icons-react';
import styles from '@/app/tekstylia-hotelowe/szlafroki/szlafroki.module.css';

export default function BathrobesHero() {
    return (
        <section className={styles.heroSection}>
            <div className={styles.container}>
                <div className={styles.heroGrid}>
                    <div className={styles.heroContent}>
                        <div className={styles.badge}>
                            <Certificate size={16} />
                            KOLEKCJA NETHORECA SPA & WELLNESS
                        </div>
                        <h1 className={styles.heroTitle}>
                            Profesjonalne <br />
                            <span className={styles.highlight}>Szlafroki Hotelowe</span>
                        </h1>
                        <p className={styles.heroSubtitle}>
                            Otul swoich gości miękkością. Oferujemy szlafroki welurowe Premium
                            oraz lekkie modele waflowe do stref SPA. Najwyższa jakość bawełny
                            i trwałość w praniu przemysłowym.
                        </p>

                        <div className={styles.heroButtons}>
                            <Link href="#kolekcja" className={styles.btnPrimary}>
                                Zobacz Modele
                            </Link>
                            <Link href="/zapytanie-ofertowe" className={styles.btnSecondary}>
                                Zamów Wycenę
                            </Link>
                        </div>

                        <div className={styles.trustPoints}>
                            <div className={styles.point}>
                                <Star size={20} /> Bawełna 100%
                            </div>
                            <div className={styles.point}>
                                <Checkmark size={20} /> Niska kurczliwość
                            </div>
                            <div className={styles.point}>
                                <Hotel size={20} /> Standard 5*
                            </div>
                        </div>
                    </div>

                    <div className={styles.heroVisual}>
                        <div className={styles.heroImageWrapper}>
                            <Image
                                src="/images/szlafroki/szlafroki-hero.webp"
                                alt="Profesjonalny szlafrok obiektowy NetHoreca"
                                fill
                                priority
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        {/* Floating Feature Card */}
                        <div className={styles.floatingCard}>
                            <Certificate size={32} style={{ color: '#004b87' }} />
                            <div>
                                <strong style={{ color: '#0f172a', display: 'block' }}>Welurowa Miękkość</strong>
                                <span style={{ color: '#475569', fontSize: '0.875rem' }}>Ekskluzywne wykończenie</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
