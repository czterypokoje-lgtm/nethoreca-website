'use client';

import { useState } from 'react';
import { Calculator, ArrowRight, ChartLine, CheckmarkFilled, CloseFilled } from '@carbon/icons-react';
import styles from '../../app/tekstylia-hotelowe/posciel/page.module.css';

export default function CostCalculator() {
    const [rooms, setRooms] = useState(50);
    const [occupancy, setOccupancy] = useState(70);
    const [changeFreq, setChangeFreq] = useState(3); // days

    // Simplified calculation logic
    const calculateCosts = () => {
        // Assumptions (Updated for Market Realism - Internal Only)
        // Market Service: ~35-45 PLN per set/month (Full Service)
        // Self Service: Purchase + Wash (Labor/Energy/Chems) + Replacement

        const setsPerRoom = 2.5;
        const washCostPerSet = 18; // PLN (Real cost of internal washing loaded)
        const purchaseCostPerSet = 120; // PLN
        const rentalCostPerSetMonth = 35; // PLN (Realistic Market Proxy)

        // Rental
        const rentalMonthly = rooms * setsPerRoom * rentalCostPerSetMonth;
        const rentalYearly = rentalMonthly * 12;

        // Purchase
        const initialPurchase = rooms * 3 * purchaseCostPerSet; // 3 sets needed
        const washesPerYear = (365 / changeFreq) * rooms * (occupancy / 100);
        const washCostYearly = washesPerYear * washCostPerSet;
        const replacementCostYearly = initialPurchase * 0.35; // 35% replacement rate (higher in self-wash)

        // Amortized ownership cost per year
        const purchaseYearlyTotal = (initialPurchase / 2.5) + washCostYearly + replacementCostYearly;

        return {
            rentalYearly: Math.round(rentalYearly),
            purchaseYearly: Math.round(purchaseYearlyTotal),
            savings: Math.round(purchaseYearlyTotal - rentalYearly)
        };
    };

    const costs = calculateCosts();

    return (
        <section id="kalkulator" className={styles.calculatorSection}>
            <div className={styles.container}>
                <div className={styles.calculatorGrid}>
                    <div className={styles.calculatorForm}>
                        <h2 className={styles.calcTitle}>
                            <Calculator size={32} />
                            Oblicz Twoje Oszczędności
                        </h2>
                        <p className={styles.calcDesc}>
                            Sprawdź, ile możesz zaoszczędzić przechodząc na model wynajmu.
                            Wpisz parametry swojego hotelu poniżej.
                        </p>

                        <div className={styles.inputGroup}>
                            <label>
                                <span>Liczba Pokoi</span>
                                <span className={styles.highlight}>{rooms}</span>
                            </label>
                            <input
                                type="range"
                                min="10"
                                max="200"
                                step="5"
                                value={rooms}
                                onChange={(e) => setRooms(parseInt(e.target.value))}
                                className={styles.rangeInput}
                            />
                        </div>

                        <div className={styles.inputGroup}>
                            <label>
                                <span>Obłożenie Hotelu</span>
                                <span className={styles.highlight}>{occupancy}%</span>
                            </label>
                            <input
                                type="range"
                                min="10"
                                max="100"
                                step="5"
                                value={occupancy}
                                onChange={(e) => setOccupancy(parseInt(e.target.value))}
                                className={styles.rangeInput}
                            />
                        </div>

                        <div className={styles.inputGroup}>
                            <label>
                                <span>Częstotliwość Wymiany</span>
                                <span className={styles.highlight}>Co {changeFreq} dni</span>
                            </label>
                            <input
                                type="range"
                                min="1"
                                max="7"
                                value={changeFreq}
                                onChange={(e) => setChangeFreq(parseInt(e.target.value))}
                                className={styles.rangeInput}
                            />
                        </div>
                    </div>

                    <div className={styles.calculatorResults}>
                        <div className={styles.resultCard}>
                            <h3>Twój Wynik Roczny</h3>
                            <div className={styles.savingHighlight}>
                                <span>Oszczędzasz</span>
                                <strong>{costs.savings > 0 ? costs.savings.toLocaleString() : 0} PLN</strong>
                            </div>

                            <div className={styles.comparisonRow}>
                                <span>Koszt Wynajmu:</span>
                                <strong>{costs.rentalYearly.toLocaleString()} PLN</strong>
                            </div>
                            <div className={styles.comparisonRow}>
                                <span>Koszt Zakupu:</span>
                                <strong className={styles.strike}>{costs.purchaseYearly.toLocaleString()} PLN</strong>
                            </div>

                            <button className={styles.btnPrimaryFull}>
                                Umów Konsultację <ArrowRight size={16} />
                            </button>

                            <p className={styles.disclaimer} style={{ color: 'rgba(255,255,255,0.6)', marginTop: '1rem', textAlign: 'center' }}>
                                *Szacunkowe wyliczenia dla standardu 3-4*
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
