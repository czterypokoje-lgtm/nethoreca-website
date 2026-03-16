'use client';

import { CheckmarkFilled, TemperatureHot, Scales, Rule } from '@carbon/icons-react';
import Image from 'next/image';
import styles from '../../app/tekstylia-hotelowe/posciel/page.module.css';

const collections = [
    {
        id: 'classic',
        title: 'CLASSIC LINE',
        subtitle: 'Biała pościel',
        image: '/images/bedding/classic.webp',
        details: {
            composition: '100% Bawełna Czesana',
            weave: 'Splot Płócienny (Canvas)',
            weight: '140-150 g/m²',
            finish: 'Sanforyzacja (Ochrona przed kurczeniem)',
            wash: 'Pranie: 60-90°C'
        }
    },
    {
        id: 'luxury',
        title: 'LUXURY LINE',
        subtitle: 'Satyna Jedwabista',
        image: '/images/bedding/luxury.webp',
        details: {
            composition: '100% Bawełna Egipska',
            weave: 'Splot Satynowy 4/1 (250-300 TC)',
            weight: '120-130 g/m²',
            finish: 'Merceryzowana (Połysk), Sanforyzowana',
            wash: 'Pranie: 60-90°C'
        }
    },
    {
        id: 'premium',
        title: 'PREMIUM LINE',
        subtitle: 'Percale Crisp',
        image: '/images/bedding/premium.webp',
        details: {
            composition: '100% Bawełna Percale',
            weave: 'Splot Płócienny Gęsty (200-220 TC)',
            weight: '115-125 g/m²',
            finish: 'Easy-Iron (Łatwe prasowanie)',
            wash: 'Wysoka odporność mechaniczna'
        }
    },
    {
        id: 'budget',
        title: 'BUDGET LINE',
        subtitle: 'Mieszanka Hotelowa',
        image: '/images/bedding/budget.webp',
        details: {
            composition: '50% Bawełna / 50% Poliester',
            weave: 'Wzmocniony splot (Heavy Duty)',
            weight: '135-145 g/m²',
            finish: 'Niskie zagniecenia, Szybkie schnięcie',
            wash: 'Ekonomiczne pranie'
        }
    },
    {
        id: 'boutique',
        title: 'BOUTIQUE LINE',
        subtitle: 'Paski 4mm / 20mm',
        image: '/images/bedding/boutique.webp',
        details: {
            composition: '80% Bawełna / 20% PES',
            weave: 'Żakardowy (Paski Hotelowe)',
            weight: '145-155 g/m²',
            finish: 'Merceryzacja, Wybielanie optyczne',
            wash: 'Zachowuje biel przez długi czas'
        }
    },
    {
        id: 'eco',
        title: 'ECO LINE',
        subtitle: 'Zrównoważony Rozwój',
        image: '/images/bedding/eco.webp',
        details: {
            composition: '100% Organiczna Bawełna (GOTS)',
            weave: 'Renforce / Canvas',
            weight: '140-150 g/m²',
            finish: 'Bez chloru, Oeko-Tex Made in Green',
            wash: 'Hipoalergiczna'
        }
    }
];

export default function ProductCollections() {
    return (
        <section id="kolekcje" className={styles.collectionsSection}>
            <div className={styles.container}>
                <div className={styles.sectionHeader}>
                    <span className={styles.sectionLabel}>Katalog Produktów</span>
                    <h2 className={styles.sectionTitle}>
                        Specyfikacja Techniczna Pościeli
                    </h2>
                    <p className={styles.sectionDesc}>
                        Nasze tekstylia spełniają rygorystyczne normy prania przemysłowego.
                        Dostosowane do magli nieckowych i tuneli pralniczych.
                    </p>
                </div>

                <div className={styles.collectionsGrid}>
                    {collections.map((col) => (
                        <div key={col.id} className={styles.collectionCard}>
                            <div className={styles.placeholderImage} style={{ display: 'block', height: 'auto', position: 'relative' }}>
                                <Image
                                    src={col.image}
                                    alt={col.title}
                                    width={400}
                                    height={300}
                                    style={{
                                        width: '100%',
                                        height: '240px',
                                        objectFit: 'cover',
                                        display: 'block'
                                    }}
                                />
                                <div style={{
                                    position: 'absolute',
                                    bottom: 0,
                                    left: 0,
                                    right: 0,
                                    background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
                                    padding: '20px 20px 10px',
                                    color: 'white'
                                }}>
                                    <span style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', opacity: 0.9 }}>
                                        {col.subtitle}
                                    </span>
                                </div>
                            </div>

                            <div className={styles.cardContent}>
                                <h3 className={styles.cardTitle}>{col.title}</h3>

                                <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '0.875rem', color: '#616061' }}>
                                    <li style={{ marginBottom: '8px', display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                                        <CheckmarkFilled size={16} color="#004b87" style={{ flexShrink: 0, marginTop: '2px' }} />
                                        <span><strong>Skład:</strong> {col.details.composition}</span>
                                    </li>
                                    <li style={{ marginBottom: '8px', display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                                        <Scales size={16} color="#004b87" style={{ flexShrink: 0, marginTop: '2px' }} />
                                        <span><strong>Gramatura:</strong> {col.details.weight}</span>
                                    </li>
                                    <li style={{ marginBottom: '8px', display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                                        <Rule size={16} color="#004b87" style={{ flexShrink: 0, marginTop: '2px' }} />
                                        <span><strong>Wykończenie:</strong> {col.details.finish}</span>
                                    </li>
                                    <li style={{ marginBottom: '0', display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                                        <TemperatureHot size={16} color="#004b87" style={{ flexShrink: 0, marginTop: '2px' }} />
                                        <span>{col.details.wash}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

                <div style={{ textAlign: 'center' }}>
                    <a href="/Katalog_NetHoreca_2025.pdf" download className={styles.btnPrimary} style={{ textDecoration: 'none' }}>
                        Pobierz Katalog PDF (2025)
                    </a>
                    <p style={{ marginTop: '1rem', fontSize: '0.875rem', color: '#616061' }}>
                        Dostępne certyfikaty: Oeko-Tex Standard 100, ISO 9001
                    </p>
                </div>
            </div>
        </section>
    );
}
