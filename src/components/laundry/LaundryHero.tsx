'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { CheckmarkFilled, DeliveryTruck, Phone, Hotel, Certificate } from '@carbon/icons-react';
import styles from '../../app/page.module.css';

export default function LaundryHero() {
    const router = useRouter();
    const [selectedCity, setSelectedCity] = useState('');

    const handleCityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const city = e.target.value;
        setSelectedCity(city);
    };

    return (
        <section className={styles.heroSection} style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)', position: 'relative', overflow: 'hidden', padding: '120px 0 80px' }}>
            {/* Background Texture/Image Overlay */}
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, opacity: 0.1, backgroundImage: 'url("/images/pattern-grid.png")' }}></div>

            <div className={styles.container} style={{ position: 'relative', zIndex: 2 }}>
                <div className={styles.heroGrid} style={{ alignItems: 'center', gap: '4rem' }}>
                    <div className={styles.heroContent}>
                        {/* Premium Glassmorphism Badge */}
                        <div style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.75rem',
                            background: 'rgba(56, 189, 248, 0.15)',
                            backdropFilter: 'blur(12px)',
                            border: '1px solid rgba(56, 189, 248, 0.3)',
                            padding: '0.625rem 1.25rem',
                            borderRadius: '50px',
                            color: '#38bdf8',
                            fontSize: '0.925rem',
                            fontWeight: 300,
                            marginBottom: '2.5rem',
                            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                            letterSpacing: '0.02em',
                            textTransform: 'uppercase'
                        }}>
                            <div style={{ width: '8px', height: '8px', background: '#38bdf8', borderRadius: '50%', boxShadow: '0 0 10px #38bdf8' }}></div>
                            Model HUB: Wynajem + Pranie + Transport
                        </div>

                        <h1 className={styles.heroTitle} style={{ fontSize: '4rem', lineHeight: 1.1, marginBottom: '1.5rem', color: 'white', fontWeight: 300, letterSpacing: '-0.02em' }}>
                            Pralnia dla Hoteli <br />
                            <span style={{
                                background: 'linear-gradient(to right, #38bdf8, #818cf8)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent'
                            }}>
                                Kompleksowa Obsługa
                            </span>
                        </h1>

                        <p className={styles.heroSubtitle} style={{ fontSize: '1.25rem', color: '#cbd5e1', maxWidth: '600px', lineHeight: 1.6, marginBottom: '2.5rem' }}>
                            Jesteśmy HUBem łączącym hotele z profesjonalnymi pralniami.
                            Ty zarządzasz hotelem — my zarządzamy Twoimi tekstyliami.
                            <span style={{ display: 'block', marginTop: '1rem', color: '#38bdf8', fontWeight: 300 }}> Oszczędź do 35% kosztów operacyjnych.</span>
                        </p>

                        {/* City Selector - Modern Search Bar */}
                        <div style={{ background: 'white', padding: '0.5rem', borderRadius: '16px', boxShadow: '0 20px 40px rgba(0,0,0,0.2)', marginBottom: '3rem', display: 'flex', alignItems: 'center', gap: '1rem', maxWidth: '600px' }}>
                            <div style={{ paddingLeft: '1.5rem', flex: 1 }}>
                                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 300, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '4px' }}>
                                    Znajdź Pralnię w Twoim Mieście
                                </label>
                                <select
                                    value={selectedCity}
                                    onChange={handleCityChange}
                                    style={{
                                        width: '100%',
                                        border: 'none',
                                        background: 'transparent',
                                        fontSize: '1.125rem',
                                        fontWeight: 300,
                                        color: '#0f172a',
                                        padding: '0.5rem 0',
                                        outline: 'none',
                                        cursor: 'pointer'
                                    }}
                                >
                                    <option value="">Wybierz lokalizację...</option>
                                    <option value="warszawa">Warszawa</option>
                                    <option value="krakow">Kraków</option>
                                    <option value="gdansk">Gdańsk</option>
                                    <option value="wroclaw">Wrocław</option>
                                    <option value="poznan">Poznań</option>
                                    <option value="katowice">Katowice</option>
                                    <option value="zakopane">Zakopane</option>
                                    <option value="lodz">Łódź</option>
                                </select>
                            </div>
                            <button
                                onClick={() => selectedCity && router.push(`/pralnia-dla-hoteli/${selectedCity}`)}
                                style={{
                                    background: '#3b82f6',
                                    color: 'white',
                                    border: 'none',
                                    padding: '1rem 2rem',
                                    borderRadius: '12px',
                                    fontWeight: 300,
                                    fontSize: '1rem',
                                    cursor: 'pointer',
                                    transition: 'background 0.2s',
                                    height: '100%',
                                    margin: '4px'
                                }}
                            >
                                Szukaj
                            </button>
                        </div>

                        <div className={styles.heroButtons} style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                            <Link href="#kalkulator" style={{
                                background: 'white',
                                color: '#0f172a',
                                fontWeight: 300,
                                padding: '1rem 2rem',
                                borderRadius: '50px',
                                textDecoration: 'none',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.75rem',
                                border: 'none'
                            }}>
                                Oblicz Koszt dla Hotelu
                            </Link>
                            <a href="tel:+48790033033" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'white', fontWeight: 300, textDecoration: 'none' }}>
                                <Phone size={20} /> +48 790 033 033
                            </a>
                        </div>

                        <div className={styles.trustPoints} style={{
                            marginTop: '4rem',
                            borderTop: '1px solid rgba(255,255,255,0.1)',
                            paddingTop: '2.5rem',
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: '2.5rem'
                        }}>
                            <div className={styles.point} style={{ color: '#f8fafc', display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: 300 }}>
                                <Hotel size={20} color="#38bdf8" /> Obsługa 50+ Hoteli
                            </div>
                            <div className={styles.point} style={{ color: '#f8fafc', display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: 300 }}>
                                <DeliveryTruck size={20} color="#38bdf8" /> Transport 24/7
                            </div>
                            <div className={styles.point} style={{ color: '#f8fafc', display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: 300 }}>
                                <Certificate size={20} color="#38bdf8" /> Gwarancja Jakości
                            </div>
                        </div>
                    </div>

                    <div className={styles.heroVisual} style={{ position: 'relative' }}>
                        <div style={{
                            width: '100%',
                            height: '500px',
                            borderRadius: '24px',
                            overflow: 'hidden',
                            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                            border: '8px solid rgba(255, 255, 255, 0.1)',
                            position: 'relative'
                        }}>
                            <Image
                                src="/images/pralnia-dla-hoteli-przemyslowa.webp"
                                alt="Nowoczesna Pralnia Przemysłowa Nethoreca"
                                fill
                                style={{ objectFit: 'cover' }}
                                priority
                            />
                        </div>

                        {/* Floating Stats Card */}
                        <div className={styles.floatingCard} style={{
                            position: 'absolute',
                            bottom: '40px',
                            left: '-40px',
                            background: 'white',
                            padding: '1.5rem',
                            borderRadius: '16px',
                            boxShadow: '0 10px 40px rgba(0,0,0,0.2)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1rem',
                            maxWidth: '280px',
                            animation: 'float 6s ease-in-out infinite'
                        }}>
                            <div style={{ background: '#ecfdf5', padding: '0.75rem', borderRadius: '50%', color: '#10b981' }}>
                                <CheckmarkFilled size={24} />
                            </div>
                            <div>
                                <span style={{ display: 'block', fontSize: '0.875rem', color: '#64748b', fontWeight: 300 }}>Średnia Oszczędność</span>
                                <strong style={{ fontSize: '1.5rem', color: '#0f172a', fontWeight: 300 }}>35%</strong>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
