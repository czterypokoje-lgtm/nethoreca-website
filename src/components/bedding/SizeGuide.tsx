'use client';

import { Ruler } from '@carbon/icons-react';
import styles from '../../app/tekstylia-hotelowe/posciel/page.module.css';

export default function SizeGuide() {
    return (
        <section className={styles.sizeGuideSection}>
            <div className={styles.container}>
                <div className={styles.sectionHeader}>
                    <span className={styles.sectionLabel}>Tabela Rozmiarów</span>
                    <h2 className={styles.sectionTitle}>Standardowe Rozmiary Hotelowe</h2>
                    <p className={styles.sectionDesc}>
                        Dobierz odpowiedni rozmiar pościeli do materacy w Twoim obiekcie.
                        Poniżej prezentujemy najpopularniejsze standardy w Polsce.
                    </p>
                </div>

                <div className={styles.sizeTableWrapper} style={{ overflowX: 'auto', marginBottom: '3rem' }}>
                    <table className={styles.sizeTable}>
                        <thead>
                            <tr>
                                <th>Typ Łóżka</th>
                                <th>Prześcieradło</th>
                                <th>Poszwa na Kołdrę</th>
                                <th>Poduszka</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Single (Pojedyncze)</strong><br /><span className={styles.subText}>Materac 90x200 cm</span></td>
                                <td>160x280 cm</td>
                                <td>140x200 cm</td>
                                <td>70x80 cm (1 szt)</td>
                            </tr>
                            <tr>
                                <td><strong>Double (Podwójne)</strong><br /><span className={styles.subText}>Materac 140x200 cm</span></td>
                                <td>220x280 cm</td>
                                <td>160x200 cm</td>
                                <td>70x80 cm (2 szt)</td>
                            </tr>
                            <tr>
                                <td><strong>Queen</strong><br /><span className={styles.subText}>Materac 160x200 cm</span></td>
                                <td>240x280 cm</td>
                                <td>200x200 cm</td>
                                <td>70x80 cm (2 szt)</td>
                            </tr>
                            <tr>
                                <td><strong>King</strong><br /><span className={styles.subText}>Materac 180x200 cm</span></td>
                                <td>260x280 cm</td>
                                <td>220x200 cm</td>
                                <td>70x80 cm (2 szt)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className={styles.measurementGuide} style={{ background: '#eef5ff', border: '1px solid #cce0ff', borderRadius: '12px', padding: '2rem', textAlign: 'center' }}>
                    <h3 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', color: '#004b87', marginBottom: '1.5rem' }}>
                        <Ruler size={24} /> Jak Zmierzyć Łóżko?
                    </h3>
                    <ul style={{ listStyle: 'none', padding: 0, marginBottom: '1.5rem' }}>
                        <li style={{ marginBottom: '0.75rem', color: '#004b87' }}>1. Zmierz szerokość materaca (np. 90 cm)</li>
                        <li style={{ marginBottom: '0.75rem', color: '#004b87' }}>2. Zmierz wysokość materaca (standard to 20-25 cm)</li>
                        <li style={{ marginBottom: '0.75rem', color: '#004b87' }}>3. Do prześcieradła dodaj po 30 cm zakładki z każdej strony</li>
                    </ul>
                    <button className={styles.btnOutline} style={{ borderColor: '#004b87', color: '#004b87' }}>
                        Pobierz PDF z Instrukcją
                    </button>
                </div>
            </div>
        </section>
    );
}
