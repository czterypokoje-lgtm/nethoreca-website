'use client';

import styles from '@/app/tekstylia-hotelowe/posciel/page.module.css';
import { Maximize, TableSplit } from '@carbon/icons-react';

export default function TableMeasurementGuide() {
    return (
        <section className={styles.sizeGuideSection} style={{ background: '#fff' }}>
            <div className={styles.container}>
                <div className={styles.sectionHeader}>
                    <span className={styles.sectionLabel}>Poradnik Wymiarowania</span>
                    <h2 className={styles.sectionTitle}>Jak dobrać rozmiar obrusu?</h2>
                    <p className={styles.sectionDesc}>
                        Idealnie dobrany obrus powinien mieć odpowiedni tzw. "zwis" (opad) z każdej strony stołu.
                        Standard hotelowy to 20-30 cm z każdej strony.
                    </p>
                </div>

                <div className={styles.heroGrid} style={{ alignItems: 'start' }}>

                    <div className={styles.specBox} style={{ border: 'none', background: 'transparent', padding: 0 }}>
                        <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
                            <Maximize size={24} /> Zasada Obliczania
                        </h3>
                        <div style={{ background: '#f8fafc', padding: '2rem', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                            <p style={{ fontSize: '1.1rem', marginBottom: '1rem', color: '#334155' }}>
                                <strong>Długość Obrusa</strong> = Dł. stołu + (2 × Zwis)
                            </p>
                            <p style={{ fontSize: '1.1rem', marginBottom: '0', color: '#334155' }}>
                                <strong>Szerokość Obrusa</strong> = Szer. stołu + (2 × Zwis)
                            </p>
                        </div>
                        <div style={{ marginTop: '2rem' }}>
                            <h4 style={{ color: '#0f172a', marginBottom: '0.5rem' }}>Przykład:</h4>
                            <p style={{ color: '#64748b' }}>
                                Stół 90x90 cm, zwis 25 cm.<br />
                                90 + (2×25) = 140 cm.<br />
                                <strong>Idealny obrus: 140x140 cm.</strong>
                            </p>
                        </div>
                    </div>

                    <div style={{ overflowX: 'auto' }}>
                        <table className={styles.sizeTable}>
                            <thead>
                                <tr>
                                    <th>Kształt Stołu</th>
                                    <th>Wymiar Blatu (cm)</th>
                                    <th>Zalecany Obrus (cm)</th>
                                    <th>Zastosowanie</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>Kwadratowy</strong></td>
                                    <td>80x80 / 90x90</td>
                                    <td>140x140</td>
                                    <td>Kawiarnia / Śniadania</td>
                                </tr>
                                <tr>
                                    <td><strong>Kwadratowy</strong></td>
                                    <td>100x100</td>
                                    <td>150x150</td>
                                    <td>Restauracja</td>
                                </tr>
                                <tr>
                                    <td><strong>Prostokątny</strong></td>
                                    <td>80x120</td>
                                    <td>140x180</td>
                                    <td>Stolik 4-osobowy</td>
                                </tr>
                                <tr>
                                    <td><strong>Okrągły</strong></td>
                                    <td>fi 180 (Bankiet)</td>
                                    <td>fi 300-320</td>
                                    <td>Wesele (do ziemi)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
}
