'use client';

import styles from '@/app/tekstylia-hotelowe/posciel/page.module.css';
import { WarningAlt, Clean, Recycle } from '@carbon/icons-react';

export default function BathMatPlacementGuide() {
    return (
        <section className={styles.sizeGuideSection} style={{ background: '#fff' }}>
            <div className={styles.container}>
                <div className={styles.sectionHeader}>
                    <span className={styles.sectionLabel}>Standardy Higieny</span>
                    <h2 className={styles.sectionTitle}>Bezpieczeństwo i Czystość</h2>
                    <p className={styles.sectionDesc}>
                        Stopki łazienkowe pełnią kluczową rolę w zapewnieniu bezpieczeństwa gości
                        oraz utrzymaniu wysokiego standardu higienicznego w łazience hotelowej.
                    </p>
                </div>

                <div className={styles.specsGrid}>
                    <div className={styles.specBox} style={{ textAlign: 'center' }}>
                        <div style={{ color: '#004b87', marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>
                            <WarningAlt size={48} />
                        </div>
                        <h3>Strefa Bezpieczna</h3>
                        <p style={{ color: '#4b5563', lineHeight: '1.6' }}>
                            Umieść stopkę bezpośrednio przy wyjściu z kabiny prysznicowej lub wanny.
                            Zapobiega to poślizgnięciu się gościa na mokrej posadzce.
                        </p>
                    </div>
                    <div className={styles.specBox} style={{ textAlign: 'center' }}>
                        <div style={{ color: '#15803d', marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>
                            <Clean size={48} />
                        </div>
                        <h3>Dezynfekcja 90°C</h3>
                        <p style={{ color: '#4b5563', lineHeight: '1.6' }}>
                            Nasze stopki są przystosowane do prania w wysokich temperaturach,
                            co gwarantuje pełną dezynfekcję i sterylność dla każdego nowego gościa.
                        </p>
                    </div>
                    <div className={styles.specBox} style={{ textAlign: 'center' }}>
                        <div style={{ color: '#0369a1', marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>
                            <Recycle size={48} />
                        </div>
                        <h3>Cykl Wymiany</h3>
                        <p style={{ color: '#4b5563', lineHeight: '1.6' }}>
                            Stopka powinna być wymieniana przy każdym sprzątaniu pokoju (stayover)
                            oraz obowiązkowo przy wymianie gości (checkout).
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
