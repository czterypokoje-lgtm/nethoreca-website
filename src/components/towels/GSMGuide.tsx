'use client';

import { Ruler } from '@carbon/icons-react';
import styles from '@/app/tekstylia-hotelowe/reczniki/reczniki.module.css';

export default function GSMGuide() {
    return (
        <section className={styles.sizeGuideSection}>
            <div className={styles.container}>
                <div className={styles.sectionHeader}>
                    <span className={styles.sectionLabel}>Przewodnik po Gramaturach</span>
                    <h2 className={styles.sectionTitle}>Jaki ręcznik wybrać?</h2>
                    <p className={styles.sectionDesc}>
                        Gramatura (GSM - gram per square meter) to kluczowy parametr określający
                        grubość, chłonność i przeznaczenie ręcznika.
                    </p>
                </div>

                <div className={styles.sizeTableWrapper}>
                    <table className={styles.sizeTable}>
                        <thead>
                            <tr>
                                <th>Parametr</th>
                                <th>Standard (400 GSM)</th>
                                <th>Optimum (500 GSM)</th>
                                <th>Premium (600+ GSM)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Zastosowanie</strong></td>
                                <td>Ekonomiczne hotele, hostele, siłownie</td>
                                <td>Hotele 3-4*, Apartamenty</td>
                                <td>Hotele 5*, SPA, Luxury Resorts</td>
                            </tr>
                            <tr>
                                <td><strong>Chłonność</strong></td>
                                <td>Dobra</td>
                                <td>Bardzo Dobra</td>
                                <td>Znakomita</td>
                            </tr>
                            <tr>
                                <td><strong>Czas Schnięcia</strong></td>
                                <td>Szybki (energooszczędny)</td>
                                <td>Średni</td>
                                <td>Długi (wymaga mocniejszego suszenia)</td>
                            </tr>
                            <tr>
                                <td><strong>Miękkość</strong></td>
                                <td>Standardowa</td>
                                <td>Wysoka (Soft Touch)</td>
                                <td>Ultra Miękka (Puszysta)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className={styles.measurementGuide}>
                    <h3 className={styles.measurementTitle}>
                        <Ruler size={24} /> Standardowe Rozmiary
                    </h3>
                    <div className={styles.measurementGrid}>
                        <div className={styles.measurementItem}>
                            <strong>Ręczniczek do rąk</strong><br />
                            <span>30x50 cm</span>
                        </div>
                        <div className={styles.measurementItem}>
                            <strong>Ręcznik do twarzy</strong><br />
                            <span>50x100 cm</span>
                        </div>
                        <div className={styles.measurementItem}>
                            <strong>Ręcznik kąpielowy</strong><br />
                            <span>70x140 cm</span>
                        </div>
                        <div className={styles.measurementItem}>
                            <strong>Ręcznik SPA / Plażowy</strong><br />
                            <span>100x150 cm</span>
                        </div>
                        <div className={styles.measurementItem}>
                            <strong>Stopka hotelowa</strong><br />
                            <span>50x70 cm (700 GSM)</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
