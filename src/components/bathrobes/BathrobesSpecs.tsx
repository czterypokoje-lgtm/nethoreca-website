import styles from '@/app/tekstylia-hotelowe/szlafroki/szlafroki.module.css';

export default function BathrobesSpecs() {
    return (
        <section className={styles.specsSection}>
            <div className={styles.container}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>Standardy Jakości NetHoreca</h2>
                    <p className={styles.sectionDesc}>
                        Nasze szlafroki są produkowane ze ściśle wyselekcjonowanej bawełny,
                        aby sprostać rygorom prania przemysłowego przy zachowaniu miękkości.
                    </p>
                </div>

                <div className={styles.specsGrid}>
                    <div className={styles.specRow}>
                        <h3>Kurczliwość</h3>
                        <p>
                            Dzięki procesowi sanforyzacji, nasze szlafroki charakteryzują się
                            niską kurczliwością (do 3-5% w temp. 90°C), co gwarantuje
                            zachowanie rozmiaru przez długi czas użytkowania.
                        </p>
                    </div>
                    <div className={styles.specRow}>
                        <h3>Szycie i Wykończenie</h3>
                        <p>
                            Wzmocnione szwy na ramionach i przy kieszeniach.
                            Kołnierz szalowy lub kimono wykończone staranną lamówką.
                            Pasek z podwójnymi szlufkami dla lepszego dopasowania.
                        </p>
                    </div>
                    <div className={styles.specRow}>
                        <h3>Konserwacja</h3>
                        <ul>
                            <li>Pranie: 90°C (Białe), 60°C (Kolor)</li>
                            <li>Wybielanie: Dozwolone (tylko białe)</li>
                            <li>Suszenie: W suszarkach bębnowych</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
