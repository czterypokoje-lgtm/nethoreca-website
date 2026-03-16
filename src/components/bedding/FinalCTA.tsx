'use client';

import Link from 'next/link';
import { ArrowRight, CheckmarkFilled } from '@carbon/icons-react';
import styles from '../../app/tekstylia-hotelowe/posciel/page.module.css';

export default function FinalCTA() {
    return (
        <section className={styles.finalCtaSection}>
            <div className={styles.container}>
                <div className={styles.ctaBox}>
                    <h2 style={{ color: 'white' }}>Gotowy na zmianę standardu?</h2>
                    <p style={{ marginBottom: '2rem', fontSize: '1.25rem', color: 'rgba(255,255,255,0.9)' }}>
                        Dołącz do 50+ hoteli, które zaoszczędziły średnio 35,000 PLN rocznie z Nethoreca.
                    </p>

                    <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '3rem' }}>
                        <a href="#kalkulator" className={styles.btnWhite}>
                            Oblicz Oszczędności
                        </a>
                        <Link href="/kontakt" className={styles.btnOutline}>
                            Umów Konsultację
                        </Link>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap' }}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'white' }}>
                            <CheckmarkFilled size={20} /> Bezpłatne próbki
                        </span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'white' }}>
                            <CheckmarkFilled size={20} /> Pierwsza dostawa w 48h
                        </span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'white' }}>
                            <CheckmarkFilled size={20} /> Gwarancja satysfakcji
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
