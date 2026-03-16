'use client';

import styles from '@/app/tekstylia-hotelowe/posciel/page.module.css';
import { User, Ruler } from '@carbon/icons-react';

export default function BathrobeFitGuide() {
    return (
        <section className={styles.sizeGuideSection} style={{ background: '#fff' }}>
            <div className={styles.container}>
                <div className={styles.sectionHeader}>
                    <span className={styles.sectionLabel}>Tabela Rozmiarów</span>
                    <h2 className={styles.sectionTitle}>Dobierz Idealny Rozmiar</h2>
                    <p className={styles.sectionDesc}>
                        Nasze szlafroki posiadają krój Unisex, zaprojektowany tak, aby pasował
                        na większość sylwetek gości hotelowych. Zalecamy wybór rozmiarów L i XL jako standard wyposażenia.
                    </p>
                </div>

                <div className={styles.heroGrid} style={{ alignItems: 'start' }}>

                    <div className={styles.specBox} style={{ border: 'none', background: 'transparent', padding: 0 }}>
                        <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
                            <User size={24} /> Jak Mierzyć?
                        </h3>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                            <li style={{ marginBottom: '1.5rem', display: 'grid', gridTemplateColumns: 'minmax(160px, max-content) 1fr', gap: '0.75rem', fontSize: '1.125rem', alignItems: 'start' }}>
                                <strong style={{ fontWeight: 600 }}>1. Długość całkowita:</strong>
                                <span style={{ color: '#4b5563', lineHeight: '1.6' }}>Mierzona od karku w dół pleców.</span>
                            </li>
                            <li style={{ marginBottom: '1.5rem', display: 'grid', gridTemplateColumns: 'minmax(160px, max-content) 1fr', gap: '0.75rem', fontSize: '1.125rem', alignItems: 'start' }}>
                                <strong style={{ fontWeight: 600 }}>2. Obwód w klatce:</strong>
                                <span style={{ color: '#4b5563', lineHeight: '1.6' }}>Mierzony na płasko pod pachami (x2 dla obwodu). Szlafroki mają zapas (zakładkę) ok. 15-20cm.</span>
                            </li>
                            <li style={{ marginBottom: '1.5rem', display: 'grid', gridTemplateColumns: 'minmax(160px, max-content) 1fr', gap: '0.75rem', fontSize: '1.125rem', alignItems: 'start' }}>
                                <strong style={{ fontWeight: 600 }}>3. Długość rękawa:</strong>
                                <span style={{ color: '#4b5563', lineHeight: '1.6' }}>Mierzona od wszycia na ramieniu do mankietu.</span>
                            </li>
                        </ul>
                        <div style={{ background: '#f0fdf4', padding: '1.5rem', borderRadius: '12px', marginTop: '1rem' }}>
                            <h4 style={{ color: '#166534', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <Ruler size={16} /> Wskazówka
                            </h4>
                            <p style={{ color: '#15803d', fontSize: '0.9rem' }}>
                                Szlafroki bawełniane mogą ulec wykurczeniu o ok. 3-5% po pierwszym praniu w 90°C.
                                Tabela uwzględnia wymiary przed praniem.
                            </p>
                        </div>
                    </div>

                    <div style={{ overflowX: 'auto' }}>
                        <table className={styles.sizeTable}>
                            <thead>
                                <tr>
                                    <th>Rozmiar</th>
                                    <th>Długość (cm)</th>
                                    <th>Obwód (cm)</th>
                                    <th>Rękaw (cm)</th>
                                    <th>Rekomendacja</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>L (Standard)</strong></td>
                                    <td>120</td>
                                    <td>125</td>
                                    <td>54</td>
                                    <td>Najpopularniejszy</td>
                                </tr>
                                <tr>
                                    <td><strong>XL (Universal)</strong></td>
                                    <td>125</td>
                                    <td>135</td>
                                    <td>56</td>
                                    <td>Dla wyższych osób</td>
                                </tr>
                                <tr>
                                    <td><strong>XXL (Plus)</strong></td>
                                    <td>130</td>
                                    <td>145</td>
                                    <td>58</td>
                                    <td>Oversize</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
}
