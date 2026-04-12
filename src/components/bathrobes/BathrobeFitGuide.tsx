import styles from '@/app/tekstylia-hotelowe/szlafroki/szlafroki.module.css';
import { User, Ruler } from '@carbon/icons-react';

export default function BathrobeFitGuide() {
    return (
        <section className={styles.guideSection}>
            <div className={styles.container}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>Dobierz Idealny Rozmiar</h2>
                    <p className={styles.sectionDesc}>
                        Nasze szlafroki posiadają krój Unisex, zaprojektowany tak, aby pasował
                        na większość sylwetek gości hotelowych. Zalecamy wybór rozmiarów L i XL jako standard wyposażenia.
                    </p>
                </div>

                <div className={styles.guideGrid}>
                    <div className={styles.howToMeasure}>
                        <h3 className={styles.measureTitle}>
                            <User size={24} /> Jak Mierzyć?
                        </h3>
                        <ul className={styles.measureList}>
                            <li className={styles.measureItem}>
                                <strong>1. Długość całkowita:</strong>
                                <span>Mierzona od karku w dół pleców.</span>
                            </li>
                            <li className={styles.measureItem}>
                                <strong>2. Obwód w klatce:</strong>
                                <span>Mierzony na płasko pod pachami (x2 dla obwodu). Szlafroki mają zapas (zakładkę) ok. 15-20cm.</span>
                            </li>
                            <li className={styles.measureItem}>
                                <strong>3. Długość rękawa:</strong>
                                <span>Mierzona od wszycia na ramieniu do mankietu.</span>
                            </li>
                        </ul>
                        <div className={styles.tipBox}>
                            <h4 className={styles.tipTitle}>
                                <Ruler size={16} /> Wskazówka
                            </h4>
                            <p className={styles.tipText}>
                                Szlafroki bawełniane mogą ulec wykurczeniu o ok. 3-5% po pierwszym praniu w 90°C.
                                Tabela uwzględnia wymiary przed praniem.
                            </p>
                        </div>
                    </div>

                    <div className={styles.tableWrapper}>
                        <table className={styles.sizeTable}>
                            <thead>
                                <tr>
                                    <th>Rozmiar</th>
                                    <th>Długość (cm)</th>
                                    <th>Obwód (cm)</th>
                                    <th>Rękaw (cm)</th>
                                    <th>Rekomendacja</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>L (Standard)</strong></td>
                                    <td>120</td>
                                    <td>125</td>
                                    <td>54</td>
                                    <td>Najpopularniejszy</td>
                                </tr>
                                <tr>
                                    <td><strong>XL (Universal)</strong></td>
                                    <td>125</td>
                                    <td>135</td>
                                    <td>56</td>
                                    <td>Dla wyższych osób</td>
                                </tr>
                                <tr>
                                    <td><strong>XXL (Plus)</strong></td>
                                    <td>130</td>
                                    <td>145</td>
                                    <td>58</td>
                                    <td>Oversize</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
}
