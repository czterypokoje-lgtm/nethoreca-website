'use client';

import Link from 'next/link';
import styles from '@/app/tekstylia-hotelowe/posciel/page.module.css';
import { Email, Phone } from '@carbon/icons-react';

export default function QuoteRequestCTA() {
    return (
        <section className={styles.ctaSection} style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)' }}>
            <div className={styles.container}>
                <div className={styles.ctaContent}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Zamówienia Hurtowe dla Hoteli</h2>
                    <p style={{ fontSize: '1.25rem', color: '#ffffff', marginBottom: '2.5rem' }}>
                        Potrzebujesz indywidualnej wyceny lub doradztwa w doborze tekstyliów?
                        Nasi eksperci pomogą Ci dopasować ofertę do standardu Twojego obiektu.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Link href="/zapytanie-ofertowe" className={styles.btnWhite} style={{ padding: '1.25rem 2.5rem', fontSize: '1.1rem', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}>
                            Poproś o Wycenę
                        </Link>
                        <a href="tel:+48221234567" className={styles.btnOutline} style={{ padding: '1.25rem 2.5rem', fontSize: '1.1rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
                            <Phone size={20} /> Zadzwoń do nas
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
