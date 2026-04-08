'use client';

import styles from './LaundryComponents.module.css';

const cities = [
    { name: 'Warszawa', capacity: '5,000 kg/dzień', hotels: '25 Hoteli', code: 'WAW' },
    { name: 'Kraków', capacity: '3,500 kg/dzień', hotels: '18 Hoteli', code: 'KRK' },
    { name: 'Gdańsk/Sopot', capacity: '2,800 kg/dzień', hotels: '15 Hoteli', code: 'GDN' },
    { name: 'Wrocław', capacity: '2,200 kg/dzień', hotels: '12 Hoteli', code: 'WRO' },
    { name: 'Poznań', capacity: '1,800 kg/dzień', hotels: '10 Hoteli', code: 'POZ' },
    { name: 'Zakopane', capacity: '1,200 kg/dzień', hotels: '20+ Obiektów', code: 'ZAK' },
];

export default function NetworkMap() {
    return (
        <section style={{ padding: '6rem 0', background: '#0f172a', color: 'white', fontWeight: 300 }}>
            <div style={{ maxWidth: '1600px', margin: '0 auto', padding: '0 2rem' }}>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: 400, color: 'white', marginBottom: '1rem' }}>
                        Nasza Sieć Pralni Partnerskich
                    </h2>
                    <p style={{ color: '#94a3b8', fontSize: '1.25rem', fontWeight: 300 }}>
                        15+ Pralni Przemysłowych w Całej Polsce. Gwarancja Backup 24h.
                    </p>
                </div>

                <div className={styles.gridContainer}>
                    {/* Visual Map */}
                    <div style={{
                        position: 'relative',
                        width: '100%',
                        borderRadius: '24px',
                        overflow: 'hidden',
                        background: 'linear-gradient(145deg, rgba(30, 41, 59, 1) 0%, rgba(15, 23, 42, 1) 100%)',
                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255,255,255,0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '1rem',
                    }}>
                        <div style={{
                            position: 'relative',
                            width: '100%',
                            borderRadius: '16px',
                            overflow: 'hidden',
                            boxShadow: '0 10px 15px -3px rgba(0,0,0,0.3)',
                        }}>
                            <Image
                                src="/images/nethoreca-flota-ev.webp"
                                alt="Własna flota transportowa NetHoreca"
                                width={1200}
                                height={800}
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                    display: 'block',
                                    objectFit: 'contain'
                                }}
                                quality={100}
                            />
                        </div>
                    </div>

                    {/* City List */}
                    <div style={{ display: 'grid', gap: '1rem' }}>
                        {cities.map((city, idx) => (
                            <div key={idx} style={{
                                display: 'flex',
                                alignItems: 'center',
                                padding: '1.25rem',
                                background: 'rgba(30, 41, 59, 0.5)', /* Lighter transparent bg */
                                border: '1px solid rgba(51, 65, 85, 0.5)',
                                borderRadius: '12px',
                                transition: 'transform 0.2s',
                                cursor: 'pointer'
                            }}>
                                <div style={{
                                    width: '40px',
                                    height: '40px',
                                    background: 'rgba(59, 130, 246, 0.2)',
                                    color: '#60a5fa',
                                    borderRadius: '8px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontWeight: 600,
                                    marginRight: '1rem'
                                }}>
                                    {city.code}
                                </div>
                                <div style={{ flex: 1 }}>
                                    <h3 style={{ fontSize: '1.125rem', fontWeight: 500, margin: 0, color: 'white' }}>{city.name}</h3>
                                    <span style={{ fontSize: '0.875rem', color: '#cbd5e1', fontWeight: 300 }}>{city.capacity}</span>
                                </div>
                                <div style={{ textAlign: 'right' }}>
                                    <span style={{ fontSize: '0.875rem', color: '#4ade80', fontWeight: 400 }}>{city.hotels}</span>
                                </div>
                            </div>
                        ))}

                        <div style={{ padding: '1.5rem', background: '#3b82f6', borderRadius: '12px', marginTop: '1rem', color: 'white' }}>
                            <h4 style={{ fontWeight: 600, marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'white' }}>
                                <CheckmarkFilled /> Standard Pralni:
                            </h4>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '0.9rem', opacity: 1 }}>
                                <li style={{ marginBottom: '4px', color: 'white', fontWeight: 300 }}>• Koniec z awariami (Backup System)</li>
                                <li style={{ marginBottom: '4px', color: 'white', fontWeight: 300 }}>• Certyfikat HACCP + ISO 9001</li>
                                <li style={{ color: 'white', fontWeight: 300 }}>• Ubezpieczenie OC 1,000,000 PLN</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
