'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from '@/app/tekstylia-hotelowe/posciel/page.module.css';
import { Checkmark, Star, Certificate, WarningAlt } from '@carbon/icons-react';

export default function BathMatsHero() {
    return (
        <section className={styles.heroSection}>
            <div className={styles.container}>
                <div className={styles.heroGrid}>
                    <div className={styles.heroContent}>
                        <div className={styles.badge}>
                            <Certificate size={16} />
                            BEZPIECZEŃSTWO I HIGIENA
                        </div>
                        <h1 className={styles.heroTitle} style={{ color: '#ffffff' }}>
                            Stopki Hotelowe <br />
                            <span className={styles.highlight} style={{ color: '#6dc7b8' }}>Premium</span>
                        </h1>
                        <p className={styles.heroSubtitle}>
                            Grube i chłonne dywaniki łazienkowe o gramaturze 500-700 g/m².
                            Zapewnij gościom komfort i bezpieczeństwo po wyjściu z kąpieli.
                            Wzory stopek dopasowane do naszych kolekcji ręczników.
                        </p>

                        <div className={styles.heroButtons}>
                            <Link href="#kolekcja" className={styles.btnPrimary}>
                                Zobacz Wzory
                            </Link>
                            <Link href="/zapytanie-ofertowe" className={styles.btnSecondary}>
                                Zamów Wycenę
                            </Link>
                        </div>

                        <div className={styles.trustPoints}>
                            <div className={styles.point}>
                                <Star size={20} /> Gramatura 650g+
                            </div>
                            <div className={styles.point}>
                                <Checkmark size={20} /> Wzór Grecki / Gładki
                            </div>
                            <div className={styles.point}>
                                <WarningAlt size={20} /> Antypoślizgowe*
                            </div>
                        </div>
                    </div>

                    <div className={styles.heroVisual}>
                        <div className={styles.heroImageWrapper}>
                            <Image
                                src="/products/york/stopka-rosa-70x50-kol-01-white-500g%2Fm2.jpg"
                                alt="Stopka łazienkowa hotelowa frotte"
                                width={600}
                                height={800}
                                priority
                                style={{ objectFit: 'cover' }}
                            />
                        </div>

                        <div className={styles.floatingCard} style={{ background: '#ffffff', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                            <Checkmark size={32} style={{ color: '#004b87' }} />
                            <div>
                                <strong style={{ color: '#0f172a', display: 'block' }}>100% Bawełna</strong>
                                <span style={{ color: '#475569', fontSize: '0.875rem' }}>Maksymalna chłonność</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
