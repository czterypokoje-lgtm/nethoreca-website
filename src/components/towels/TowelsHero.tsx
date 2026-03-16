'use client';

import Link from 'next/link';
import Image from 'next/image';
import { CheckmarkFilled, Calculator, Catalog, StarFilled, Enterprise, TaskComplete, Partnership } from '@carbon/icons-react';
import styles from '../../app/tekstylia-hotelowe/posciel/page.module.css';

export default function TowelsHero() {
    return (
        <section className={styles.heroSection}>
            <div className={styles.container}>
                <div className={styles.heroGrid}>
                    <div className={styles.heroContent}>
                        <div className={styles.badge}>
                            <StarFilled size={16} color="#ffd700" />
                            Wynajem i Sprzedaż
                        </div>
                        <h1 className={styles.heroTitle} style={{ color: '#ffffff' }}>
                            Ręczniki Hotelowe <br />
                            <span className={styles.highlight}>Miękkość i Trwałość</span>
                        </h1>
                        <p className={styles.heroSubtitle}>
                            Profesjonalne ręczniki frotty do hoteli i SPA.
                            <strong>Podwójne obszycie</strong> i wzmocniona konstrukcja pętelkowa.
                            Dostępne w modelu Pay-Per-Use (płacisz za pranie).
                        </p>

                        <div className={styles.heroButtons}>
                            <Link href="#kalkulator" className={styles.btnPrimary}>
                                <Calculator size={20} />
                                Oblicz Oszczędności
                            </Link>
                            <Link href="#kolekcje" className={styles.btnSecondary}>
                                <Catalog size={20} />
                                Zobacz Kolekcje
                            </Link>
                        </div>

                        <div className={styles.trustPoints}>
                            <div className={styles.point}>
                                <Enterprise size={20} />
                                <span>Bawełna Egejska 100%</span>
                            </div>
                            <div className={styles.point}>
                                <TaskComplete size={20} />
                                <span>Gramatura 400-600 GSM</span>
                            </div>
                            <div className={styles.point}>
                                <Partnership size={20} />
                                <span>Niska kurczliwość</span>
                            </div>
                        </div>
                    </div>

                    <div className={styles.heroVisual}>
                        <div className={styles.heroImageWrapper}>
                            <Image
                                src="/images/towels/luxury-stack.webp"
                                alt="Puszyste ręczniki hotelowe premium"
                                width={600}
                                height={500}
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                    display: 'block',
                                    objectFit: 'cover',
                                    borderRadius: '1rem'
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
                                    Wysoka Chłonność
                                </strong>
                                <span style={{ fontSize: '0.875rem', color: '#64748b' }}>
                                    Testowane na 200 cykli
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
