'use client';

import Link from 'next/link';
import styles from '@/app/tekstylia-hotelowe/posciel/page.module.css';

interface ProductCTAProps {
    productName: string;
    description: string;
}

export default function ProductCTA({ productName, description }: ProductCTAProps) {
    return (
        <section className={styles.productCtaSection}>
            <div className={styles.container}>
                <div className={styles.productCtaContent}>
                    <h2 className={styles.productCtaTitle} style={{ color: '#ffffff' }}>
                        Gotowy na {productName}
                    </h2>
                    <p className={styles.productCtaDesc}>
                        {description}
                    </p>
                    <div className={styles.productCtaButtons}>
                        <Link href="/zapytanie-ofertowe" className={styles.btnCtaPrimary}>
                            Zapytaj o ofertę
                        </Link>
                        <Link href="/kontakt" className={styles.btnCtaSecondary}>
                            Kontakt
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
