'use client';

import Link from 'next/link';
import { ArrowRight, CheckmarkFilled } from '@carbon/icons-react';
import styles from '@/app/tekstylia-hotelowe/posciel/posciel.module.css';

export default function FinalCTA() {
    return (
        <section className={styles.finalCtaSection}>
            <div className={styles.container}>
                <div className={styles.ctaBox}>
                    <h2 className={styles.ctaTitle}>Gotowy na zmianę standardu?</h2>
                    <p className={styles.ctaDesc}>
                        Dołącz do 50+ hoteli, które zaoszczędziły średnio 35,000 PLN rocznie z Nethoreca.
                    </p>

                    <div className={styles.ctaButtons}>
                        <a href="#kalkulator" className={styles.btnPrimary}>
                            Oblicz Oszczędności
                        </a>
                        <Link href="/kontakt" className={styles.btnSecondary}>
                            Umów Konsultację
                        </Link>
                    </div>

                    <div className={styles.ctaTrustPills}>
                        <span className={styles.trustPill}>
                            <CheckmarkFilled size={20} /> Bezpłatne próbki
                        </span>
                        <span className={styles.trustPill}>
                            <CheckmarkFilled size={20} /> Pierwsza dostawa w 48h
                        </span>
                        <span className={styles.trustPill}>
                            <CheckmarkFilled size={20} /> Gwarancja satysfakcji
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
