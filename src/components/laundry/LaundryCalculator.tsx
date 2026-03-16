'use client';

import { useState, useEffect } from 'react';
import { Calculator, ArrowRight } from '@carbon/icons-react';

export default function LaundryCalculator() {
    const [rooms, setRooms] = useState(50);
    const [frequency, setFrequency] = useState('daily');
    const [currentSolution, setCurrentSolution] = useState('own-laundry');
    const [city, setCity] = useState('warszawa');

    const [results, setResults] = useState({
        currentCost: 0,
        nethorecaCost: 0,
        savings: 0,
        annualSavings: 0,
        setsCount: 0
    });

    useEffect(() => {
        calculate();
    }, [rooms, frequency, currentSolution, city]);

    const calculate = () => {
        // Base Logic
        const basePerRoom = 250; // PLN standard base
        let nethorecaCost = rooms * basePerRoom;

        // Frequency Adjustment
        if (frequency === 'daily') nethorecaCost *= 1.2;
        if (frequency === 'weekly') nethorecaCost *= 0.7;

        // City Adjustment (Major cities vs others)
        if (['warszawa', 'krakow'].includes(city)) nethorecaCost *= 1.1;

        // Current Cost Estimation logic
        let currentCostMultiplier = 1.35; // Default outsourcing
        if (currentSolution === 'own-laundry') currentCostMultiplier = 1.55; // Most expensive
        else if (currentSolution === 'buy-textiles') currentCostMultiplier = 1.45;
        else if (currentSolution === 'other-rental') currentCostMultiplier = 1.25;

        const calculatedCurrentCost = nethorecaCost * currentCostMultiplier;
        const savings = calculatedCurrentCost - nethorecaCost;

        setResults({
            currentCost: Math.round(calculatedCurrentCost),
            nethorecaCost: Math.round(nethorecaCost),
            savings: Math.round(savings),
            annualSavings: Math.round(savings * 12),
            setsCount: Math.round(rooms * 2.5)
        });
    };

    return (
        <section id="kalkulator" style={{ padding: '6rem 0', background: '#f8fafc' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0f172a' }}>Ile Zaoszczędzisz?</h2>
                    <p style={{ color: '#64748b' }}>Wypełnij 4 proste pola - wynik natychmiast</p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
                    {/* Inputs */}
                    <div style={{ background: 'white', padding: '2rem', borderRadius: '16px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
                        <div style={{ marginBottom: '2rem' }}>
                            <label style={{ display: 'block', fontWeight: 700, marginBottom: '0.5rem', color: '#0f172a' }}>1. Liczba pokoi w hotelu</label>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <input
                                    type="range"
                                    min="10"
                                    max="300"
                                    value={rooms}
                                    onChange={(e) => setRooms(parseInt(e.target.value))}
                                    style={{ flex: 1, accentColor: '#3b82f6' }}
                                />
                                <span style={{ fontWeight: 800, fontSize: '1.25rem', color: '#3b82f6', minWidth: '80px', textAlign: 'right' }}>{rooms}</span>
                            </div>
                        </div>

                        <div style={{ marginBottom: '2rem' }}>
                            <label style={{ display: 'block', fontWeight: 700, marginBottom: '0.5rem', color: '#0f172a' }}>2. Częstotliwość wymiany</label>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.5rem' }}>
                                <button
                                    onClick={() => setFrequency('daily')}
                                    style={{ padding: '0.75rem', borderRadius: '8px', border: frequency === 'daily' ? '2px solid #3b82f6' : '1px solid #cbd5e1', background: frequency === 'daily' ? '#eff6ff' : 'white', fontWeight: 600, cursor: 'pointer' }}
                                >
                                    Codziennie
                                </button>
                                <button
                                    onClick={() => setFrequency('2-3days')}
                                    style={{ padding: '0.75rem', borderRadius: '8px', border: frequency === '2-3days' ? '2px solid #3b82f6' : '1px solid #cbd5e1', background: frequency === '2-3days' ? '#eff6ff' : 'white', fontWeight: 600, cursor: 'pointer' }}
                                >
                                    Co 2-3 dni
                                </button>
                                <button
                                    onClick={() => setFrequency('weekly')}
                                    style={{ padding: '0.75rem', borderRadius: '8px', border: frequency === 'weekly' ? '2px solid #3b82f6' : '1px solid #cbd5e1', background: frequency === 'weekly' ? '#eff6ff' : 'white', fontWeight: 600, cursor: 'pointer' }}
                                >
                                    Raz/tydz.
                                </button>
                            </div>
                        </div>

                        <div style={{ marginBottom: '2rem' }}>
                            <label style={{ display: 'block', fontWeight: 700, marginBottom: '0.5rem', color: '#0f172a' }}>3. Obecne rozwiązanie</label>
                            <select
                                value={currentSolution}
                                onChange={(e) => setCurrentSolution(e.target.value)}
                                style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #cbd5e1' }}
                            >
                                <option value="own-laundry">Własna pralnia (Personel, Media, Maszyny)</option>
                                <option value="buy-textiles">Kupno tekstyliów + Pranie na zewnątrz</option>
                                <option value="outsource-local">Lokalna pralnia (Outsourcing)</option>
                            </select>
                        </div>

                        <div>
                            <label style={{ display: 'block', fontWeight: 700, marginBottom: '0.5rem', color: '#0f172a' }}>4. Lokalizacja</label>
                            <select
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                                style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #cbd5e1' }}
                            >
                                <option value="warszawa">Warszawa</option>
                                <option value="krakow">Kraków</option>
                                <option value="gdansk">Gdańsk</option>
                                <option value="wroclaw">Wrocław</option>
                                <option value="other">Inne miasto</option>
                            </select>
                        </div>
                    </div>

                    {/* Results */}
                    <div style={{ background: '#1e293b', padding: '2.5rem', borderRadius: '16px', color: 'white', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' }}>
                        <div style={{ marginBottom: '2rem', paddingBottom: '2rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                            <span style={{ fontSize: '0.875rem', color: '#94a3b8', display: 'block', marginBottom: '0.5rem' }}>TWÓJ OBECNY KOSZT (EST.):</span>
                            <div style={{ fontSize: '2rem', fontWeight: 700, color: '#ef4444' }}>{results.currentCost.toLocaleString()} PLN <span style={{ fontSize: '1rem', color: '#94a3b8' }}>/mies.</span></div>
                        </div>

                        <div style={{ marginBottom: '2rem' }}>
                            <span style={{ fontSize: '0.875rem', color: '#94a3b8', display: 'block', marginBottom: '0.5rem' }}>Z NETHORECA HUB:</span>
                            <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#4ade80' }}>{results.nethorecaCost.toLocaleString()} PLN <span style={{ fontSize: '1rem', color: '#94a3b8' }}>/mies.</span></div>
                        </div>

                        <div style={{ background: 'rgba(56, 189, 248, 0.1)', padding: '1.5rem', borderRadius: '12px', marginBottom: '2rem' }}>
                            <span style={{ fontSize: '0.875rem', color: '#38bdf8', display: 'block', marginBottom: '0.5rem', fontWeight: 700, textTransform: 'uppercase' }}>Twoja Oszczędność:</span>
                            <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'white' }}>{results.savings.toLocaleString()} PLN / mies.</div>
                            <div style={{ fontSize: '1.125rem', color: '#38bdf8', marginTop: '0.5rem' }}>= {results.annualSavings.toLocaleString()} PLN rocznie! 💰</div>
                        </div>

                        <button style={{ width: '100%', padding: '1rem', background: '#3b82f6', color: 'white', fontWeight: 700, borderRadius: '8px', border: 'none', cursor: 'pointer', fontSize: '1.125rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                            Zapytaj o Ofertę dla Mojego Hotelu <ArrowRight />
                        </button>
                        <p style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '1rem', textAlign: 'center' }}>
                            * Szacunki oparte o średnie rynkowe. Finalna oferta po audycie.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
