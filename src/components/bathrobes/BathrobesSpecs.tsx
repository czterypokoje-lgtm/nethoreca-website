'use client';

import styles from '@/app/tekstylia-hotelowe/posciel/page.module.css';

export default function BathrobesSpecs() {
    return (
        <section className={styles.specsSection}>
            <div className={styles.container}>
                <div className={styles.sectionHeader}>
                    <span className={styles.sectionLabel}>Specyfikacja Techniczna</span>
                    <h2 className={styles.sectionTitle}>Standardy Jakości NetHoreca</h2>
                    <p className={styles.sectionDesc}>
                        Nasze szlafroki są produkowane ze ściśle wyselekcjonowanej bawełny,
                        aby sprostać rygorom prania przemysłowego przy zachowaniu miękkości.
                    </p>
                </div>

                <div className={styles.specsGrid}>
                    <div className={styles.specBox}>
                        <h3>Kurczliwość</h3>
                        <p style={{ color: '#4b5563', lineHeight: '1.6' }}>
                            Dzięki procesowi sanforyzacji, nasze szlafroki charakteryzują się
                            niską kurczliwością (do 3-5% w temp. 90°C), co gwarantuje
                            zachowanie rozmiaru przez długi czas użytkowania.
                        </p>
                    </div>
                    <div className={styles.specBox}>
                        <h3>Szycie i Wykończenie</h3>
                        <p style={{ color: '#4b5563', lineHeight: '1.6' }}>
                            Wzmocnione szwy na ramionach i przy kieszeniach.
                            Kołnierz szalowy lub kimono wykończone staranną lamówką.
                            Pasek z podwójnymi szlufkami dla lepszego dopasowania.
                        </p>
                    </div>
                    <div className={styles.specBox}>
                        <h3>Konserwacja</h3>
                        <ul style={{ paddingLeft: '1.2rem', color: '#4b5563', lineHeight: '1.6' }}>
                            <li>Pranie: 90°C (Białe), 60°C (Kolor)</li>
                            <li>Wybielanie: Dozwolone (tylko białe)</li>
                            <li>Suszenie: W suszarkach bębnowych</li>
                        </ul>
                    </div>
                </div>

                {/* Size Guide */}
                <div style={{ marginTop: '4rem' }}>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1.5rem', textAlign: 'center' }}>Tabela Rozmiarów (Unisex)</h3>
                    <div style={{ overflowX: 'auto' }}>
                        <table className={styles.sizeTable}>
                            <thead>
                                <tr>
                                    <th>Rozmiar</th>
                                    <th>Długość (cm)</th>
                                    <th>Obwód klatki (cm)</th>
                                    <th>Długość rękawa (cm)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>L</strong></td>
                                    <td>120</td>
                                    <td>125</td>
                                    <td>54</td>
                                </tr>
                                <tr>
                                    <td><strong>XL</strong></td>
                                    <td>125</td>
                                    <td>135</td>
                                    <td>56</td>
                                </tr>
                                <tr>
                                    <td><strong>XXL</strong></td>
                                    <td>130</td>
                                    <td>145</td>
                                    <td>58</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
}
