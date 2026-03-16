'use client';

import styles from '@/app/tekstylia-hotelowe/posciel/page.module.css';

export default function TableLinensSpecs() {
    return (
        <section className={styles.specsSection}>
            <div className={styles.container}>
                <div className={styles.sectionHeader}>
                    <span className={styles.sectionLabel}>Jakość i Praktyczność</span>
                    <h2 className={styles.sectionTitle}>Technologia dla Gastronomii</h2>
                    <p className={styles.sectionDesc}>
                        Nasze tkaniny łączą wygląd klasy premium z parametrami technicznymi
                        wymaganymi w intensywnym użytkowaniu restauracyjnym.
                    </p>
                </div>

                <div className={styles.specsGrid}>
                    <div className={styles.specBox}>
                        <h3>Apretura Plamoodporna</h3>
                        <p style={{ color: '#4b5563', lineHeight: '1.6' }}>
                            Wybrane kolekcje posiadają powłokę hydrofobową, która sprawia, że
                            rozlane płyny (wino, kawa, soki) nie wnikają w strukturę włókien,
                            lecz tworzą krople ("efekt lotosu"), które łatwo zebrać serwetką.
                        </p>
                    </div>
                    <div className={styles.specBox}>
                        <h3>Szycie na Wymiar</h3>
                        <p style={{ color: '#4b5563', lineHeight: '1.6' }}>
                            Szyjemy obrusy na każdy wymiar stołu: kwadratowe, prostokątne,
                            okrągłe (do średnicy 320 cm bez szwu). Oferujemy różne wykończenia:
                            zakładka, listwa, wypustka.
                        </p>
                    </div>
                    <div className={styles.specBox}>
                        <h3>Łatwość Pielegnacji</h3>
                        <p style={{ color: '#4b5563', lineHeight: '1.6' }}>
                            Tkaniny poliestrowe i mieszankowe schną bardzo szybko i są łatwe w prasowaniu (Easy Iron).
                            Wysoka odporność na pilingowanie i mechacenie.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
