'use client';

import { CheckmarkFilled, CloseFilled } from '@carbon/icons-react';
import styles from '../../app/page.module.css'; // Reusing global styles for simplicity

export default function RentVsBuyLaundry() {
    return (
        <section className={styles.comparisonSection} style={{ padding: '6rem 0', background: 'white' }}>
            <div className={styles.container}>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0f172a', marginBottom: '1rem' }}>
                        Własna Pralnia vs Nethoreca HUB
                    </h2>
                    <p style={{ fontSize: '1.25rem', color: '#64748b' }}>
                        Dlaczego coraz więcej hoteli rezygnuje z własnej pralni?
                    </p>
                </div>

                <div className={styles.comparisonTableWrapper} style={{ overflowX: 'auto', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', borderRadius: '16px' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '800px' }}>
                        <thead>
                            <tr style={{ background: '#f8fafc' }}>
                                <th style={{ padding: '1.5rem', textAlign: 'left', color: '#64748b', fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Kryterium</th>
                                <th style={{ padding: '1.5rem', textAlign: 'left', color: '#ef4444', fontSize: '1.125rem', fontWeight: 800 }}>Własna Pralnia</th>
                                <th style={{ padding: '1.5rem', textAlign: 'left', color: '#3b82f6', fontSize: '1.125rem', fontWeight: 800 }}>Nethoreca HUB (Outsourcing)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                {
                                    feature: 'Inwestycja Początkowa',
                                    own: '150,000 - 300,000 PLN',
                                    ownDesc: 'Maszyny, instalacje, wentylacja',
                                    hub: '0 PLN',
                                    hubDesc: 'Model abonamentowy (Płacisz od użycia)',
                                    winner: 'hub'
                                },
                                {
                                    feature: 'Pracownicy',
                                    own: '2-3 Etaty (ok. 15k/mies.)',
                                    ownDesc: 'Rekrutacja, L4, urlopy, ZUS',
                                    hub: '0 Etatów',
                                    hubDesc: 'Zarządzamy my. Ty masz spokój.',
                                    winner: 'hub'
                                },
                                {
                                    feature: 'Media (Woda/Prąd/Gaz)',
                                    own: 'Wysokie koszty zmienne',
                                    ownDesc: '12-18k PLN/mies. (ryzyko podwyżek)',
                                    hub: 'Wliczone w cenę',
                                    hubDesc: 'Stała stawka za sztukę/kg',
                                    winner: 'hub'
                                },
                                {
                                    feature: 'Powierzchnia',
                                    own: 'Zajmuje 40-60 m²',
                                    ownDesc: 'Utracony przychód z wynajmu pokoi',
                                    hub: '0 m²',
                                    hubDesc: 'Uwolnioną przestrzeń zmień na pokoje',
                                    winner: 'hub'
                                },
                                {
                                    feature: 'Serwis i Awarie',
                                    own: 'Na Twój koszt',
                                    ownDesc: 'Przestoje = brak pościeli dla gości',
                                    hub: 'Gwarancja ciągłości',
                                    hubDesc: 'Backup pralnia przejmuje w 24h',
                                    winner: 'hub'
                                },
                                {
                                    feature: 'Certyfikaty Jakości',
                                    own: 'Musisz uzyskać sam',
                                    ownDesc: 'Kosztowne audyty i wdrożenia',
                                    hub: 'Zapewnione',
                                    hubDesc: 'HACCP, ISO 9001 w standardzie',
                                    winner: 'hub'
                                }
                            ].map((row, idx) => (
                                <tr key={idx} style={{ borderBottom: '1px solid #f1f5f9' }}>
                                    <td style={{ padding: '1.5rem', fontWeight: 600, color: '#0f172a' }}>{row.feature}</td>
                                    <td style={{ padding: '1.5rem', background: '#fef2f2' }}>
                                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                                            <CloseFilled color="#ef4444" size={20} style={{ minWidth: '20px' }} />
                                            <div>
                                                <strong style={{ display: 'block', color: '#0f172a' }}>{row.own}</strong>
                                                <span style={{ fontSize: '0.875rem', color: '#64748b' }}>{row.ownDesc}</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td style={{ padding: '1.5rem', background: '#eff6ff' }}>
                                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                                            <CheckmarkFilled color="#3b82f6" size={20} style={{ minWidth: '20px' }} />
                                            <div>
                                                <strong style={{ display: 'block', color: '#0f172a' }}>{row.hub}</strong>
                                                <span style={{ fontSize: '0.875rem', color: '#64748b' }}>{row.hubDesc}</span>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className={styles.caseSnippet} style={{ marginTop: '3rem', padding: '2rem', background: '#1e293b', borderRadius: '16px', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
                    <div>
                        <h4 style={{ margin: 0, fontSize: '1.25rem', color: '#94a3b8' }}>Realny Przykład (Hotel 80 pokoi):</h4>
                        <div style={{ fontSize: '2rem', fontWeight: 800, marginTop: '0.5rem' }}>
                            <span style={{ color: '#ef4444', textDecoration: 'line-through', marginRight: '1rem', fontSize: '1.5rem' }}>498,000 PLN</span>
                            <span style={{ color: '#4ade80' }}>324,000 PLN</span>
                        </div>
                        <p style={{ margin: 0, color: '#cbd5e1' }}>Roczny koszt operacyjny (Własna vs Nethoreca)</p>
                    </div>
                    <div>
                        <span style={{ display: 'block', fontSize: '0.875rem', color: '#94a3b8', marginBottom: '0.5rem' }}>TWOJA OSZCZĘDNOŚĆ:</span>
                        <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#38bdf8' }}>174,000 PLN / rok</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
