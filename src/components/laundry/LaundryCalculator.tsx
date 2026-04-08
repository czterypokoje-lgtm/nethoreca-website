'use client';

import { useState, useEffect } from 'react';
import { ArrowRight } from '@carbon/icons-react';
import styles from './LaundryCalculator.module.css';

type Frequency = 'daily' | '2-3days' | 'weekly';
type Solution = 'own-laundry' | 'buy-textiles' | 'outsource-local';
type City = 'warszawa' | 'krakow' | 'gdansk' | 'wroclaw' | 'other';

const FREQ_OPTIONS: { value: Frequency; label: string }[] = [
    { value: 'daily', label: 'Codziennie' },
    { value: '2-3days', label: 'Co 2-3 dni' },
    { value: 'weekly', label: 'Raz/tydz.' },
];

export default function LaundryCalculator() {
    const [rooms, setRooms] = useState(50);
    const [frequency, setFrequency] = useState<Frequency>('daily');
    const [currentSolution, setCurrentSolution] = useState<Solution>('own-laundry');
    const [city, setCity] = useState<City>('warszawa');

    const [results, setResults] = useState({
        currentCost: 0,
        nethorecaCost: 0,
        savings: 0,
        annualSavings: 0,
        setsCount: 0,
    });

    useEffect(() => {
        calculate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [rooms, frequency, currentSolution, city]);

    const calculate = () => {
        const basePerRoom = 250;
        let nethorecaCost = rooms * basePerRoom;

        if (frequency === 'daily') nethorecaCost *= 1.2;
        if (frequency === 'weekly') nethorecaCost *= 0.7;

        if (['warszawa', 'krakow'].includes(city)) nethorecaCost *= 1.1;

        let currentCostMultiplier = 1.35;
        if (currentSolution === 'own-laundry') currentCostMultiplier = 1.55;
        else if (currentSolution === 'buy-textiles') currentCostMultiplier = 1.45;
        else if (currentSolution === 'outsource-local') currentCostMultiplier = 1.25;

        const calculatedCurrentCost = nethorecaCost * currentCostMultiplier;
        const savings = calculatedCurrentCost - nethorecaCost;

        setResults({
            currentCost: Math.round(calculatedCurrentCost),
            nethorecaCost: Math.round(nethorecaCost),
            savings: Math.round(savings),
            annualSavings: Math.round(savings * 12),
            setsCount: Math.round(rooms * 2.5),
        });
    };

    return (
        <section id="kalkulator" className={styles.section}>
            <div className={styles.container}>
                {/* Header */}
                <div className={styles.header}>
                    <h2 className={styles.title}>Ile Zaoszczędzisz?</h2>
                    <p className={styles.subtitle}>Wypełnij 4 proste pola - wynik natychmiast</p>
                </div>

                <div className={styles.grid}>
                    {/* ── Inputs Card ── */}
                    <div className={styles.formCard}>
                        {/* 1. Number of rooms */}
                        <div className={styles.inputGroup}>
                            <label className={styles.inputLabel}>
                                1. Liczba pokoi w hotelu
                            </label>
                            <div className={styles.rangeRow}>
                                <input
                                    type="range"
                                    min="10"
                                    max="300"
                                    value={rooms}
                                    onChange={(e) => setRooms(parseInt(e.target.value))}
                                    className={styles.rangeInput}
                                    aria-label="Liczba pokoi"
                                />
                                <span className={styles.rangeValue}>{rooms}</span>
                            </div>
                        </div>

                        {/* 2. Frequency */}
                        <div className={styles.inputGroup}>
                            <label className={styles.inputLabel}>
                                2. Częstotliwość wymiany
                            </label>
                            <div className={styles.freqGrid}>
                                {FREQ_OPTIONS.map((opt) => (
                                    <button
                                        key={opt.value}
                                        onClick={() => setFrequency(opt.value)}
                                        className={`${styles.freqBtn} ${frequency === opt.value ? styles.freqBtnActive : ''}`}
                                        aria-pressed={frequency === opt.value}
                                    >
                                        {opt.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* 3. Current solution */}
                        <div className={styles.inputGroup}>
                            <label className={styles.inputLabel} htmlFor="calc-solution">
                                3. Obecne rozwiązanie
                            </label>
                            <select
                                id="calc-solution"
                                value={currentSolution}
                                onChange={(e) => setCurrentSolution(e.target.value as Solution)}
                                className={styles.select}
                            >
                                <option value="own-laundry">Własna pralnia (Personel, Media, Maszyny)</option>
                                <option value="buy-textiles">Kupno tekstyliów + Pranie na zewnątrz</option>
                                <option value="outsource-local">Lokalna pralnia (Outsourcing)</option>
                            </select>
                        </div>

                        {/* 4. Location */}
                        <div className={styles.inputGroup} style={{ marginBottom: 0 }}>
                            <label className={styles.inputLabel} htmlFor="calc-city">
                                4. Lokalizacja
                            </label>
                            <select
                                id="calc-city"
                                value={city}
                                onChange={(e) => setCity(e.target.value as City)}
                                className={styles.select}
                            >
                                <option value="warszawa">Warszawa</option>
                                <option value="krakow">Kraków</option>
                                <option value="gdansk">Gdańsk</option>
                                <option value="wroclaw">Wrocław</option>
                                <option value="other">Inne miasto</option>
                            </select>
                        </div>
                    </div>

                    {/* ── Results Card ── */}
                    <div className={styles.resultsCard}>
                        {/* Current cost */}
                        <div className={styles.currentCostBlock}>
                            <span className={styles.costLabel}>Twój obecny koszt (est.):</span>
                            <div className={styles.currentCostValue}>
                                {results.currentCost.toLocaleString()} PLN{' '}
                                <span className={styles.unit}>/mies.</span>
                            </div>
                        </div>

                        {/* Nethoreca cost */}
                        <div className={styles.nethorecaBlock}>
                            <span className={styles.costLabel}>Z Nethoreca Hub:</span>
                            <div className={styles.nethorecaCostValue}>
                                {results.nethorecaCost.toLocaleString()} PLN{' '}
                                <span className={styles.unit}>/mies.</span>
                            </div>
                        </div>

                        {/* Savings highlight */}
                        <div className={styles.savingsBlock}>
                            <span className={styles.savingsLabel}>Twoja Oszczędność:</span>
                            <div className={styles.savingsMonthly}>
                                {results.savings.toLocaleString()} PLN / mies.
                            </div>
                            <div className={styles.savingsAnnual}>
                                = {results.annualSavings.toLocaleString()} PLN rocznie! 💰
                            </div>
                        </div>

                        {/* CTA */}
                        <button className={styles.ctaBtn}>
                            Zapytaj o Ofertę dla Mojego Hotelu <ArrowRight />
                        </button>
                        <p className={styles.disclaimer}>
                            * Szacunki oparte o średnie rynkowe. Finalna oferta po audycie.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
