'use client';

import { CheckmarkFilled, CheckmarkOutline } from '@carbon/icons-react';

const pricingTiers = [
    {
        name: 'Mały Hotel',
        desc: '10-30 Pokoi',
        price: '300 PLN',
        unit: '/pokój',
        features: ['Pościel + Ręczniki', 'Transport 2x w tygodniu', 'Panel Online', 'Wsparcie 8:00-16:00'],
        highlight: false
    },
    {
        name: 'Standard',
        desc: '31-60 Pokoi',
        price: '250 PLN',
        unit: '/pokój',
        features: ['Wszystko co w Mały Hotel', '+ Obrusy', 'Transport 3x w tygodniu', 'Dedykowany Opiekun', 'Wsparcie 24/7'],
        highlight: true
    },
    {
        name: 'Premium / Sieć',
        desc: '60+ Pokoi',
        price: '220 PLN',
        unit: '/pokój',
        features: ['Pełen Pakiet Tekstyliów', '+ Uniformy & SPA', 'Transport 5x w tygodniu', 'Express 24h w cenie', 'Raportowanie API'],
        highlight: false
    }
];

export default function LaundryPricing() {
    return (
        <section id="cennik" style={{ padding: '6rem 0', background: 'white' }}>
            <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0f172a', marginBottom: '1rem' }}>
                        Przejrzysty Model Rozliczeń
                    </h2>
                    <p style={{ color: '#64748b', fontSize: '1.25rem' }}>
                        Jedna faktura miesięcznie. Wszystko wliczone (Wynajem + Pranie + Transport).
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', alignItems: 'center' }}>
                    {pricingTiers.map((tier, idx) => (
                        <div key={idx} style={{
                            padding: '2.5rem',
                            borderRadius: '24px',
                            border: tier.highlight ? '2px solid #3b82f6' : '1px solid #e2e8f0',
                            background: tier.highlight ? '#eff6ff' : 'white',
                            position: 'relative',
                            boxShadow: tier.highlight ? '0 20px 25px -5px rgba(59, 130, 246, 0.1)' : 'none',
                            transform: tier.highlight ? 'scale(1.05)' : 'none'
                        }}>
                            {tier.highlight && (
                                <span style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', background: '#3b82f6', color: 'white', padding: '0.25rem 1rem', borderRadius: '20px', fontSize: '0.875rem', fontWeight: 700 }}>
                                    Najczęściej Wybierany
                                </span>
                            )}

                            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.5rem' }}>{tier.name}</h3>
                            <p style={{ color: '#64748b', marginBottom: '2rem' }}>{tier.desc}</p>

                            <div style={{ marginBottom: '2rem' }}>
                                <span style={{ fontSize: '2.5rem', fontWeight: 800, color: tier.highlight ? '#3b82f6' : '#0f172a' }}>~{tier.price}</span>
                                <span style={{ color: '#64748b' }}>{tier.unit}</span>
                            </div>

                            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0' }}>
                                {tier.features.map((feature, i) => (
                                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', color: '#475569' }}>
                                        <CheckmarkFilled color={tier.highlight ? '#3b82f6' : '#94a3b8'} />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <button style={{
                                width: '100%',
                                padding: '1rem',
                                borderRadius: '12px',
                                border: 'none',
                                background: tier.highlight ? '#3b82f6' : '#0f172a',
                                color: 'white',
                                fontWeight: 700,
                                cursor: 'pointer',
                                transition: 'background 0.2s'
                            }}>
                                Wybierz Pakiet
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
