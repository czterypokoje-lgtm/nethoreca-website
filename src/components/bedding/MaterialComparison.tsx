'use client';

import { StarFilled, Star } from '@carbon/icons-react';
import styles from '../../app/tekstylia-hotelowe/posciel/page.module.css';

export default function MaterialComparison() {
    return (
        <section className={styles.comparisonSection}>
            <div className={styles.container}>
                <div className={styles.sectionHeader}>
                    <span className={styles.sectionLabel}>Porównanie Materiałów</span>
                    <h2 className={styles.sectionTitle}>
                        Jaki materiał wybrać dla Twojego hotelu?
                    </h2>
                </div>

                <div className={styles.tableWrapper} style={{ overflowX: 'auto' }}>
                    <table className={styles.comparisonTable}>
                        <thead>
                            <tr>
                                <th>Cecha</th>
                                <th>Bawełna Gładka</th>
                                <th>Satyna Bawełniana</th>
                                <th>Percale (Perkal)</th>
                                <th>Mieszanka (Poly/Cotton)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Wygląd</strong></td>
                                <td>Matowy, klasyczny</td>
                                <td>Lekki połysk, elegancki</td>
                                <td>Matowy, "chrupki"</td>
                                <td>Standardowy</td>
                            </tr>
                            <tr>
                                <td><strong>Dotyk</strong></td>
                                <td>Miękki</td>
                                <td>Jedwabisty, gładki</td>
                                <td>Chłodny, sztywny</td>
                                <td>Szorstki (na początku)</td>
                            </tr>
                            <tr>
                                <td><strong>Trwałość (Prania)</strong></td>
                                <td>150 cykli</td>
                                <td>200 cykli</td>
                                <td>250+ cykli</td>
                                <td>300+ cykli</td>
                            </tr>
                            <tr>
                                <td><strong>Łatwość Prasowania</strong></td>
                                <td>Średnia</td>
                                <td>Dobra</td>
                                <td>Trudniejsza</td>
                                <td>Bardzo Dobra</td>
                            </tr>
                            <tr>
                                <td><strong>Cena</strong></td>
                                <td>$$</td>
                                <td>$$$</td>
                                <td>$$$$</td>
                                <td>$</td>
                            </tr>
                            <tr>
                                <td><strong>Rekomendacja</strong></td>
                                <td>Hotel 2-3*</td>
                                <td>Hotel 4-5*</td>
                                <td>Hotel 5* / Boutique</td>
                                <td>Hostel / Budżet</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className={styles.recommendations}>
                    <div className={styles.recCard}>
                        <h3>EKONOMIA</h3>
                        <p>Bawełna Gładka</p>
                        <div style={{ color: '#ffdd00', margin: '0.5rem 0' }}>
                            <StarFilled size={16} /><StarFilled size={16} /><StarFilled size={16} /><Star size={16} /><Star size={16} />
                        </div>
                        <span>Dla hoteli 2-3*</span>
                    </div>
                    <div className={styles.recCard} style={{ borderColor: '#004b87', borderWidth: '2px' }}>
                        <h3>BESTSELLER</h3>
                        <p>Satyna Bawełniana</p>
                        <div style={{ color: '#ffdd00', margin: '0.5rem 0' }}>
                            <StarFilled size={16} /><StarFilled size={16} /><StarFilled size={16} /><StarFilled size={16} /><Star size={16} />
                        </div>
                        <span style={{ background: '#004b87', color: 'white' }}>Dla hoteli 4*</span>
                    </div>
                    <div className={styles.recCard}>
                        <h3>PREMIUM</h3>
                        <p>Percale 400TC</p>
                        <div style={{ color: '#ffdd00', margin: '0.5rem 0' }}>
                            <StarFilled size={16} /><StarFilled size={16} /><StarFilled size={16} /><StarFilled size={16} /><StarFilled size={16} />
                        </div>
                        <span>Dla hoteli 5* i Apartamentów</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
