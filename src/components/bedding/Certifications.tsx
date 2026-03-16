'use client';

import Image from 'next/image';
import styles from '../../app/tekstylia-hotelowe/posciel/page.module.css';

export default function Certifications() {
    return (
        <section className={styles.certSection}>
            <div className={styles.container}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>
                        Certyfikaty Jakości i Bezpieczeństwa
                    </h2>
                </div>

                <div className={styles.certGrid} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>

                    {/* OEKO-TEX */}
                    <div className={styles.certCard} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                        <div style={{ position: 'relative', width: '120px', height: '120px', marginBottom: '1.5rem' }}>
                            <Image
                                src="/images/certificates/oeko-tex.svg"
                                alt="OEKO-TEX STANDARD 100"
                                fill
                                style={{ objectFit: 'contain' }}
                            />
                        </div>
                        <h3>OEKO-TEX STANDARD 100</h3>
                        <p>Brak substancji szkodliwych. Bezpieczne dla skóry gości.</p>
                    </div>

                    {/* EU ECOLABEL */}
                    <div className={styles.certCard} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                        <div style={{ position: 'relative', width: '120px', height: '120px', marginBottom: '1.5rem' }}>
                            <Image
                                src="/images/certificates/eu-ecolabel.svg"
                                alt="EU ECOLABEL"
                                fill
                                style={{ objectFit: 'contain' }}
                            />
                        </div>
                        <h3>EU ECOLABEL</h3>
                        <p>Produkcja ekologiczna i niski ślad węglowy.</p>
                    </div>

                    {/* ISO 9001 */}
                    <div className={styles.certCard} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                        <div style={{ position: 'relative', width: '120px', height: '120px', marginBottom: '1.5rem' }}>
                            <Image
                                src="/images/certificates/iso-9001.svg"
                                alt="ISO 9001:2015"
                                fill
                                style={{ objectFit: 'contain' }}
                            />
                        </div>
                        <h3>ISO 9001:2015</h3>
                        <p>Gwarancja stałej, powtarzalnej jakości produkcji.</p>
                    </div>

                    {/* REACH COMPLIANCE */}
                    <div className={styles.certCard} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                        <div style={{ position: 'relative', width: '120px', height: '120px', marginBottom: '1.5rem' }}>
                            <Image
                                src="/images/certificates/reach.svg"
                                alt="REACH COMPLIANCE"
                                fill
                                style={{ objectFit: 'contain' }}
                            />
                        </div>
                        <h3>REACH COMPLIANCE</h3>
                        <p>Bezpieczne barwniki i chemikalia. Brak alergenów.</p>
                    </div>

                </div>
            </div>
        </section>
    );
}
