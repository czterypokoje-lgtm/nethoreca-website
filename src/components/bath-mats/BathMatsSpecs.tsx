'use client';

import styles from '@/app/tekstylia-hotelowe/posciel/page.module.css';

export default function BathMatsSpecs() {
    return (
        <section className={styles.specsSection}>
            <div className={styles.container}>
                <div className={styles.sectionHeader}>
                    <span className={styles.sectionLabel}>Parametry Techniczne</span>
                    <h2 className={styles.sectionTitle}>Wytrzymałość Hotelowa</h2>
                    <p className={styles.sectionDesc}>
                        Stopki NetHoreca zaprojektowano z myślą o codziennym praniu przemysłowym
                        i intensywnej eksploatacji w hotelowych łazienkach.
                    </p>
                </div>

                <div className={styles.specsGrid}>
                    <div className={styles.specBox}>
                        <h3>Wysoka Gęstość Splotu</h3>
                        <p style={{ color: '#4b5563', lineHeight: '1.6' }}>
                            Podwójna pętelka i gramatura od 500 do 700 g/m² sprawiają, że
                            stopka jest mięsista, stabilnie leży na podłodze i nie zwija się.
                        </p>
                    </div>
                    <div className={styles.specBox}>
                        <h3>Chłonność</h3>
                        <p style={{ color: '#4b5563', lineHeight: '1.6' }}>
                            100% Bawełna Egejska błyskawicznie wchłania wodę, zapobiegając
                            zachlapaniu łazienki. Szybko wysycha po użyciu.
                        </p>
                    </div>
                    <div className={styles.specBox}>
                        <h3>Trwałość Koloru</h3>
                        <p style={{ color: '#4b5563', lineHeight: '1.6' }}>
                            Barwienie reaktywne zapewnia trwałość koloru nawet przy praniu
                            w wysokich temperaturach (95°C dla bieli).
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
