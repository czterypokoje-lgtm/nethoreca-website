'use client';

import Image from 'next/image';
import { CheckmarkFilled, Warning } from '@carbon/icons-react';
import styles from '@/app/tekstylia-hotelowe/reczniki/reczniki.module.css';

export default function TowelsSpecs() {
    return (
        <section className={styles.specsSection}>
            <div className={styles.container}>
                <div className={styles.towelsSpecsGrid}>
                    <div className={styles.specsContent}>
                        <span className={styles.sectionLabel}>Specyfikacja Techniczna</span>
                        <h2 className={styles.sectionTitle}>Durability by Design</h2>
                        <p className={styles.sectionDesc}>
                            Nasze ręczniki są projektowane z myślą o intensywnym użytkowaniu w pralniach przemysłowych.
                            Każdy detal ma znaczenie dla trwałości inwestycji.
                        </p>

                        <ul className={styles.specsList}>
                            <li>
                                <div className={styles.specIcon}>
                                    <CheckmarkFilled size={20} />
                                </div>
                                <div>
                                    <strong>Podwójne obszycie (Double Stitch)</strong>
                                    <p>Zapobiega strzępieniu się brzegów nawet po 100+ cyklach prania.</p>
                                </div>
                            </li>
                            <li>
                                <div className={styles.specIcon}>
                                    <CheckmarkFilled size={20} />
                                </div>
                                <div>
                                    <strong>Przędza Ring Spun 16/1</strong>
                                    <p>Gęsta pętelka zapewniająca puszystość i mniejszą kurczliwość.</p>
                                </div>
                            </li>
                            <li>
                                <div className={styles.specIcon}>
                                    <CheckmarkFilled size={20} />
                                </div>
                                <div>
                                    <strong>Wykończenie Soft-Flow</strong>
                                    <p>Proces zmiękczania zapewniający przyjemny chwyt od pierwszego dotyku.</p>
                                </div>
                            </li>
                            <li>
                                <div className={styles.specIcon}>
                                    <CheckmarkFilled size={20} />
                                </div>
                                <div>
                                    <strong>Biel Optyczna</strong>
                                    <p>Wysoki wskaźnik bieli odporny na żółknięcie w procesie chlorowania.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.specsVisual}>
                        <div className={styles.specsImageWrapper}>
                            <Image
                                src="/images/towels/texture-macro.webp"
                                alt="Zbliżenie na splot pętelkowy (Ring Spun)"
                                fill
                                className={styles.specsImage}
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
