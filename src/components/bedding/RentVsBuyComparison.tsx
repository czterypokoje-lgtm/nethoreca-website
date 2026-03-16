'use client';

import { CheckmarkFilled, CloseFilled } from '@carbon/icons-react';
import styles from '../../app/tekstylia-hotelowe/posciel/page.module.css';

export default function RentVsBuyComparison() {
    return (
        <section className={styles.rvbSection}>
            <div className={styles.container}>
                <div className={styles.sectionHeader}>
                    <span className={styles.sectionLabel}>Decyzja Biznesowa</span>
                    <h2 className={styles.sectionTitle}>
                        Wynajem vs Zakup – Co się opłaca?
                    </h2>
                </div>

                <div className={styles.rvbGrid}>
                    {/* Wynajem Column */}
                    <div className={styles.rvbColumn}>
                        <h3 className={styles.colTitle}>Wynajem Pościeli</h3>
                        <div className={styles.costHighlight}>
                            <span style={{ display: 'block', fontSize: '2.5rem', fontWeight: 800, color: '#004b87' }}>0 PLN</span>
                            <span style={{ display: 'block', color: '#616061', fontSize: '0.875rem' }}>Koszt początkowy</span>
                        </div>
                        <ul className={styles.featureList}>
                            <li style={{ color: '#004b87' }}>
                                <CheckmarkFilled size={20} /> <strong>Indywidualna wycena</strong> (Pay-Per-Use)
                            </li>
                            <li style={{ color: '#004b87' }}>
                                <CheckmarkFilled size={20} /> Pranie i serwis w cenie
                            </li>
                            <li style={{ color: '#004b87' }}>
                                <CheckmarkFilled size={20} /> Automatyczna wymiana zużytych sztuk
                            </li>
                            <li style={{ color: '#004b87' }}>
                                <CheckmarkFilled size={20} /> Brak zamrożonego kapitału
                            </li>
                            <li style={{ color: '#004b87' }}>
                                <CheckmarkFilled size={20} /> <strong>Brak ukrytych opłat</strong> za plamy
                            </li>
                            <li style={{ color: '#004b87' }}>
                                <CheckmarkFilled size={20} /> Przewidywalne koszty
                            </li>
                        </ul>
                    </div>

                    {/* Zakup Column */}
                    <div className={`${styles.rvbColumn} ${styles.buyColumn}`}>
                        <h3 className={styles.colTitle}>Zakup Pościeli</h3>
                        <div className={styles.costHighlight}>
                            <span style={{ display: 'block', fontSize: '2.5rem', fontWeight: 800, color: '#da1e28' }}>25,000 PLN</span>
                            <span style={{ display: 'block', color: '#616061', fontSize: '0.875rem' }}>Inwestycja (50 pokoi)</span>
                        </div>
                        <ul className={styles.featureList}>
                            <li style={{ color: '#da1e28' }}>
                                <CloseFilled size={20} /> Koszt prania (4-6 PLN/szt)
                            </li>
                            <li style={{ color: '#da1e28' }}>
                                <CloseFilled size={20} /> Koszt wymiany zużytej pościeli
                            </li>
                            <li style={{ color: '#da1e28' }}>
                                <CloseFilled size={20} /> Magazynowanie zapasów
                            </li>
                            <li style={{ color: '#da1e28' }}>
                                <CloseFilled size={20} /> Zamrożony kapitał
                            </li>
                            <li style={{ color: '#da1e28' }}>
                                <CloseFilled size={20} /> Ryzyko zniszczeń i kradzieży
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
