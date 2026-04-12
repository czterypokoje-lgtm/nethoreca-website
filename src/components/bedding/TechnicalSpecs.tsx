'use client';

import { Temperature, Clean, Time, WarningFilled } from '@carbon/icons-react';
import styles from '@/app/tekstylia-hotelowe/posciel/posciel.module.css';

export default function TechnicalSpecs() {
    return (
        <section className={styles.specsSection}>
            <div className={styles.container}>
                <div className={styles.sectionHeader}>
                    <span className={styles.sectionLabel}>Specyfikacja</span>
                    <h2 className={styles.sectionTitle} style={{ color: 'white' }}>
                        Szczegóły Techniczne i Pranie
                    </h2>
                    <p className={styles.sectionDesc} style={{ color: 'rgba(255,255,255,0.7)' }}>
                        Dbamy o to, aby nasze produkty spełniały najwyższe standardy prania przemysłowego.
                    </p>
                </div>

                <div className={styles.specsGrid}>
                    <div className={styles.specBox}>
                        <h3>Skład Kompletu</h3>
                        <ul className={styles.specList}>
                            <li><strong>Single:</strong> 1x Prześcieradło, 1x Poszwa 140x200, 1x Poduszka</li>
                            <li><strong>Double:</strong> 1x Prześcieradło, 1x Poszwa 160x200, 2x Poduszka</li>
                            <li><strong>King:</strong> 1x Prześcieradło, 1x Poszwa 220x200, 2x Poduszka</li>
                        </ul>
                    </div>

                    <div className={styles.specBox}>
                        <h3>Opcje Wykończenia</h3>
                        <ul className={styles.specList}>
                            <li><strong>Ramka Płaska:</strong> Standardowe, łatwe prasowanie</li>
                            <li><strong>Ramka Oksfordzka:</strong> Ozdobny brzeg 5cm (Premium)</li>
                            <li><strong>Zapięcie:</strong> Zakład hotelowy (standard) lub zamek</li>
                        </ul>
                    </div>

                    <div className={styles.specBox}>
                        <h3>Parametry Prania</h3>
                        <ul className={styles.specList}>
                            <li className={styles.specListItemFlex}>
                                <Temperature size={20} color="#6dc7b8" />
                                <span><strong>Temp:</strong> 60-90°C (Biel)</span>
                            </li>
                            <li className={styles.specListItemFlex}>
                                <Clean size={20} color="#6dc7b8" />
                                <span><strong>Wybielanie:</strong> Dozwolone (tlenowe)</span>
                            </li>
                            <li className={styles.specListItemFlex}>
                                <Time size={20} color="#6dc7b8" />
                                <span><strong>Suszenie:</strong> Tunelowe 80°C</span>
                            </li>
                            <li className={styles.specListItemFlex}>
                                <WarningFilled size={20} color="#6dc7b8" />
                                <span><strong>Maglowanie:</strong> 150-180°C</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
