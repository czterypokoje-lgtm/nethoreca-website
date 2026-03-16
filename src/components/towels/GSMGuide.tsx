'use client';

import { Ruler } from '@carbon/icons-react';
import styles from '../../app/tekstylia-hotelowe/posciel/page.module.css';

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

                <div className={styles.sizeTableWrapper} style={{ overflowX: 'auto', marginBottom: '3rem' }}>
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

                <div className={styles.measurementGuide} style={{ background: '#eef5ff', border: '1px solid #cce0ff', borderRadius: '12px', padding: '2rem', textAlign: 'center' }}>
                    <h3 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', color: '#004b87', marginBottom: '1.5rem' }}>
                        <Ruler size={24} /> Standardowe Rozmiary
                    </h3>
                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem' }}>
                        <div>
                            <strong>Ręczniczek do rąk</strong><br />
                            <span style={{ color: '#64748b' }}>30x50 cm</span>
                        </div>
                        <div>
                            <strong>Ręcznik do twarzy</strong><br />
                            <span style={{ color: '#64748b' }}>50x100 cm</span>
                        </div>
                        <div>
                            <strong>Ręcznik kąpielowy</strong><br />
                            <span style={{ color: '#64748b' }}>70x140 cm</span>
                        </div>
                        <div>
                            <strong>Ręcznik SPA / Plażowy</strong><br />
                            <span style={{ color: '#64748b' }}>100x150 cm</span>
                        </div>
                        <div>
                            <strong>Stopka hotelowa</strong><br />
                            <span style={{ color: '#64748b' }}>50x70 cm (700 GSM)</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
