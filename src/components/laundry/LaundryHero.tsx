'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { CheckmarkFilled, DeliveryTruck, Phone, Hotel, Certificate } from '@carbon/icons-react';
import styles from '@/app/pralnia-dla-hoteli/pralnia.module.css';

export default function LaundryHero() {
    const router = useRouter();
    const [selectedCity, setSelectedCity] = useState('');

    const handleCityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const city = e.target.value;
        setSelectedCity(city);
    };

    return (
        <section className={styles.heroSection}>
            <div className={styles.heroBackgroundPattern}></div>

            <div className={styles.container}>
                <div className={styles.heroGrid}>
                    <div className={styles.heroContent}>
                        <div className={styles.heroBadge}>
                            <div className={styles.badgePulse}></div>
                            Model HUB: Wynajem + Pranie + Transport
                        </div>

                        <h1 className={styles.heroTitle}>
                            Pralnia dla Hoteli <br />
                            <span className={styles.gradientText}>
                                Kompleksowa Obsługa
                            </span>
                        </h1>

                        <p className={styles.sectionDesc} style={{ color: '#cbd5e1', marginBottom: '2.5rem', textAlign: 'left', marginLeft: 0 }}>
                            Jesteśmy HUBem łączącym hotele z profesjonalnymi pralniami.
                            Ty zarządzasz hotelem — my zarządzamy Twoimi tekstyliami.
                            <span style={{ display: 'block', marginTop: '1rem', color: '#38bdf8' }}> Oszczędź do 35% kosztów operacyjnych.</span>
                        </p>

                        {/* City Selector */}
                        <div className={styles.citySelectorWrapper}>
                            <div className={styles.selectorLabelGroup}>
                                <label>
                                    Znajdź Pralnię w Twoim Mieście
                                </label>
                                <select
                                    value={selectedCity}
                                    onChange={handleCityChange}
                                    className={styles.citySelect}
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
                                className={styles.selectorButton}
                            >
                                Szukaj
                            </button>
                        </div>

                        <div className={styles.heroButtons}>
                            <Link href="#kalkulator" className={styles.btnPrimary}>
                                Oblicz Koszt dla Hotelu
                            </Link>
                            <a href="tel:+48790033033" className={styles.phoneLink}>
                                <Phone size={20} /> +48 790 033 033
                            </a>
                        </div>

                        <div className={styles.trustPoints}>
                            <div className={styles.point}>
                                <Hotel size={20} /> Obsługa 50+ Hoteli
                            </div>
                            <div className={styles.point}>
                                <DeliveryTruck size={20} /> Transport 24/7
                            </div>
                            <div className={styles.point}>
                                <Certificate size={20} /> Gwarancja Jakości
                            </div>
                        </div>
                    </div>

                    <div className={styles.heroVisual}>
                        <div className={styles.heroImageWrapper}>
                            <Image
                                src="/images/pralnia-dla-hoteli-przemyslowa.webp"
                                alt="Nowoczesna Pralnia Przemysłowa Nethoreca"
                                fill
                                style={{ objectFit: 'cover' }}
                                priority
                                className={styles.heroImage}
                            />
                        </div>

                        {/* Floating Stats Card */}
                        <div className={styles.floatingCard}>
                            <div className={styles.statsIcon}>
                                <CheckmarkFilled size={24} />
                            </div>
                            <div>
                                <span className={styles.statsLabel}>Średnia Oszczędność</span>
                                <strong className={styles.statsValue}>35%</strong>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
