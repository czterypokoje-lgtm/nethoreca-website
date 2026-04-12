import Image from 'next/image';
import { CheckmarkFilled } from '@carbon/icons-react';
import styles from '@/app/pralnia-dla-hoteli/pralnia.module.css';

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
        <section className={styles.networkSection}>
            <div className={styles.container}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle} style={{ color: 'white' }}>
                        Nasza Sieć Pralni Partnerskich
                    </h2>
                    <p className={styles.sectionDesc} style={{ color: '#94a3b8' }}>
                        15+ Pralni Przemysłowych w Całej Polsce. Gwarancja Backup 24h.
                    </p>
                </div>

                <div className={styles.networkGrid}>
                    {/* Visual Map / Image */}
                    <div className={styles.visualMapWrapper}>
                        <div className={styles.visualMapInner}>
                            <Image
                                src="/images/nethoreca-flota-ev.webp"
                                alt="Własna flota transportowa NetHoreca"
                                width={1200}
                                height={800}
                                className={styles.networkImage}
                                quality={100}
                            />
                        </div>
                    </div>

                    {/* City List */}
                    <div className={styles.cityListGrid}>
                        {cities.map((city, idx) => (
                            <div key={idx} className={styles.cityCard}>
                                <div className={styles.cityIcon}>
                                    {city.code}
                                </div>
                                <div className={styles.cityInfo}>
                                    <h3 className={styles.cityName}>{city.name}</h3>
                                    <span className={styles.cityCapacity}>{city.capacity}</span>
                                </div>
                                <div className={styles.cityHotels}>
                                    <span>{city.hotels}</span>
                                </div>
                            </div>
                        ))}

                        <div className={styles.standardCard}>
                            <h4 className={styles.standardTitle}>
                                <CheckmarkFilled size={20} /> Standard Pralni:
                            </h4>
                            <ul className={styles.standardList}>
                                <li>• Koniec z awariami (Backup System)</li>
                                <li>• Certyfikat HACCP + ISO 9001</li>
                                <li>• Ubezpieczenie OC 1,000,000 PLN</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
