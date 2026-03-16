'use client';

import { Temperature, Clean, Time, WarningFilled } from '@carbon/icons-react';
import styles from '../../app/tekstylia-hotelowe/posciel/page.module.css';

export default function TechnicalSpecs() {
    return (
        <section className={styles.specsSection}>
            <div className={styles.container}>
                <div className={styles.sectionHeader}>
                    <span className={styles.sectionLabel}>Specyfikacja</span>
                    <h2 className={styles.sectionTitle}>
                        Szczegóły Techniczne i Pranie
                    </h2>
                    <p className={styles.sectionDesc}>
                        Dbamy o to, aby nasze produkty spełniały najwyższe standardy prania przemysłowego.
                    </p>
                </div>

                <div className={styles.specsGrid}>
                    <div className={styles.specBox}>
                        <h3>Skład Kompletu</h3>
                        <ul className={styles.specList} style={{ listStyle: 'none', padding: 0 }}>
                            <li style={{ marginBottom: '0.75rem' }}><strong>Single:</strong> 1x Prześcieradło, 1x Poszwa 140x200, 1x Poduszka</li>
                            <li style={{ marginBottom: '0.75rem' }}><strong>Double:</strong> 1x Prześcieradło, 1x Poszwa 160x200, 2x Poduszka</li>
                            <li style={{ marginBottom: '0.75rem' }}><strong>King:</strong> 1x Prześcieradło, 1x Poszwa 220x200, 2x Poduszka</li>
                        </ul>
                    </div>

                    <div className={styles.specBox}>
                        <h3>Opcje Wykończenia</h3>
                        <ul className={styles.specList} style={{ listStyle: 'none', padding: 0 }}>
                            <li style={{ marginBottom: '0.75rem' }}><strong>Ramka Płaska:</strong> Standardowe, łatwe prasowanie</li>
                            <li style={{ marginBottom: '0.75rem' }}><strong>Ramka Oksfordzka:</strong> Ozdobny brzeg 5cm (Premium)</li>
                            <li style={{ marginBottom: '0.75rem' }}><strong>Zapięcie:</strong> Zakład hotelowy (standard) lub zamek</li>
                        </ul>
                    </div>

                    <div className={styles.specBox}>
                        <h3>Parametry Prania</h3>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                                <Temperature size={20} color="#004b87" />
                                <strong>Temp:</strong> 60-90°C (Biel)
                            </li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                                <Clean size={20} color="#004b87" />
                                <strong>Wybielanie:</strong> Dozwolone (tlenowe)
                            </li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                                <Time size={20} color="#004b87" />
                                <strong>Suszenie:</strong> Tunelowe 80°C
                            </li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                                <WarningFilled size={20} color="#004b87" />
                                <strong>Maglowanie:</strong> 150-180°C
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
