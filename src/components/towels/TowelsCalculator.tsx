'use client';

import { useState } from 'react';
import { Calculator, ArrowRight } from '@carbon/icons-react';
import styles from '@/app/tekstylia-hotelowe/reczniki/reczniki.module.css';

export default function TowelsCalculator() {
    const [rooms, setRooms] = useState(50);
    const [occupancy, setOccupancy] = useState(70);
    const [changeFreq, setChangeFreq] = useState(2); // Towels changed more often

    const calculateCosts = () => {
        // Assumptions for Towels
        // Set = Recznik do rak + Kapielowy + Stopka (avg)

        const setsPerRoom = 3.0; // Par + Spare
        const washCostPerSet = 8; // PLN (Cheaper to wash than bedding)
        const purchaseCostPerSet = 65; // PLN (Avg quality)
        const rentalCostPerSetMonth = 18; // PLN (Market Proxy)

        // Rental
        const rentalMonthly = rooms * setsPerRoom * rentalCostPerSetMonth;
        const rentalYearly = rentalMonthly * 12;

        // Purchase & Laundry (Self-Service/Outsourced)
        const initialPurchase = rooms * 3 * purchaseCostPerSet;
        // Towels washed more often, basically everyday for new guests or every 2 days
        const washesPerYear = (365 / changeFreq) * rooms * (occupancy / 100) * 1.5; // *1.5 for multiple towels used
        const washCostYearly = washesPerYear * washCostPerSet;
        const replacementCostYearly = initialPurchase * 0.45; // Higher replacement for towels (stains, tearing)

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
                            Kalkulator Ręczników
                        </h2>
                        <p className={styles.calcDesc}>
                            Zobacz, ile zyskasz rezygnując z zakupu ręczników na rzecz wynajmu.
                            Uwzględniamy częstsze pranie i szybsze zużycie frotte.
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
                                <span>Wymiana (co ile dni)</span>
                                <span className={styles.highlight}>Co {changeFreq} dni</span>
                            </label>
                            <input
                                type="range"
                                min="1"
                                max="4"
                                value={changeFreq}
                                onChange={(e) => setChangeFreq(parseInt(e.target.value))}
                                className={styles.rangeInput}
                            />
                        </div>
                    </div>

                    <div className={styles.calculatorResults}>
                        <div className={styles.resultCard}>
                            <h3>Prognoza Oszczędności</h3>
                            <div className={styles.savingHighlight}>
                                <span>Oszczędzasz</span>
                                <strong>{costs.savings > 0 ? costs.savings.toLocaleString() : 0} PLN</strong>
                            </div>

                            <div className={styles.comparisonRow}>
                                <span>Koszt Wynajmu:</span>
                                <strong>{costs.rentalYearly.toLocaleString()} PLN</strong>
                            </div>
                            <div className={styles.comparisonRow}>
                                <span>Koszt Własny (Zakup+Pranie):</span>
                                <strong className={styles.strike}>{costs.purchaseYearly.toLocaleString()} PLN</strong>
                            </div>

                            <button className={styles.btnPrimaryFull}>
                                Zamów Audyt Frotte <ArrowRight size={16} />
                            </button>

                            <p className={styles.disclaimer}>
                                *Szacunek dla zestawu 3 ręczników/pokój
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
