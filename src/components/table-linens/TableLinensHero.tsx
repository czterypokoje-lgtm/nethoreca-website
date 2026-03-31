'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from '@/app/tekstylia-hotelowe/posciel/page.module.css';
import { Checkmark, Star, Certificate, Restaurant } from '@carbon/icons-react';

export default function TableLinensHero() {
    return (
        <section className={styles.heroSection}>
            <div className={styles.container}>
                <div className={styles.heroGrid}>
                    <div className={styles.heroContent}>
                        <div className={styles.badge}>
                            <Certificate size={16} />
                            PROFESJONALNE TEKSTYLIA GASTRONOMICZNE
                        </div>
                        <h1 className={styles.heroTitle} style={{ color: '#ffffff' }}>
                            Elegancja <br />
                            <span className={styles.highlight} style={{ color: '#6dc7b8' }}>Na Twoim Stole</span>
                        </h1>
                        <p className={styles.heroSubtitle}>
                            Obrusy plamoodporne i satynowe, które budują prestiż restauracji.
                            Szyte na wymiar, trwałe i łatwe w pielęgnacji. Idealne tło dla Twoich dań.
                        </p>

                        <div className={styles.heroButtons}>
                            <Link href="#kolekcja" className={styles.btnPrimary}>
                                Zobacz Tkaniny
                            </Link>
                            <Link href="/zapytanie-ofertowe" className={styles.btnSecondary}>
                                Zamów Próbnik
                            </Link>
                        </div>

                        <div className={styles.trustPoints}>
                            <div className={styles.point}>
                                <Star size={20} /> Szycie na wymiar
                            </div>
                            <div className={styles.point}>
                                <Checkmark size={20} /> Plamoodporność
                            </div>
                            <div className={styles.point}>
                                <Restaurant size={20} /> Dla Gastronomii
                            </div>
                        </div>
                    </div>

                    <div className={styles.heroVisual}>
                        <div className={styles.heroImageWrapper}>
                            <Image
                                src="/images/products/table-linens/obrus-standard.webp"
                                alt="Elegancki obrus premium z owocami dekoracyjnymi na stole bankietowym"
                                width={600}
                                height={800}
                                priority
                                style={{ objectFit: 'cover' }}
                            />
                        </div>

                        <div className={styles.floatingCard} style={{ background: '#ffffff', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                            <Restaurant size={32} style={{ color: '#004b87' }} />
                            <div>
                                <strong style={{ color: '#0f172a', display: 'block' }}>Goście to docenią</strong>
                                <span style={{ color: '#004b87', fontSize: '0.875rem', fontWeight: '500' }}>Wyjątkowa estetyka</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
