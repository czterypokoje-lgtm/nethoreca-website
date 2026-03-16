'use client';

import styles from '@/app/tekstylia-hotelowe/posciel/page.module.css';
import { Badge, Delivery, Trophy, Enterprise } from '@carbon/icons-react';
import Image from 'next/image';

export default function TrustBar() {
    return (
        <div style={{ background: '#f8fafc', padding: '2rem 0', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
            <div className={styles.container} style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', gap: '2rem', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ background: '#eef5ff', padding: '10px', borderRadius: '50%', color: '#004b87' }}>
                        <Enterprise size={24} />
                    </div>
                    <div>
                        <strong style={{ display: 'block', color: '#0f172a', fontSize: '0.9rem' }}>26 Lat Doświadczenia</strong>
                        <span style={{ fontSize: '0.8rem', color: '#64748b' }}>Zaufany Partner Hoteli</span>
                    </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ position: 'relative', width: '44px', height: '44px' }}>
                        <Image
                            src="/images/certificates/oeko-tex.svg"
                            alt="Oeko-Tex"
                            fill
                            style={{ objectFit: 'contain' }}
                        />
                    </div>
                    <div>
                        <strong style={{ display: 'block', color: '#0f172a', fontSize: '0.9rem' }}>Certyfikat Oeko-Tex</strong>
                        <span style={{ fontSize: '0.8rem', color: '#64748b' }}>Bezpieczne Tekstylia</span>
                    </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ background: '#eef5ff', padding: '10px', borderRadius: '50%', color: '#004b87' }}>
                        <Trophy size={24} />
                    </div>
                    <div>
                        <strong style={{ display: 'block', color: '#0f172a', fontSize: '0.9rem' }}>Jakość Premium</strong>
                        <span style={{ fontSize: '0.8rem', color: '#64748b' }}>Standard 4-5 Gwiazdek</span>
                    </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ background: '#eef5ff', padding: '10px', borderRadius: '50%', color: '#004b87' }}>
                        <Delivery size={24} />
                    </div>
                    <div>
                        <strong style={{ display: 'block', color: '#0f172a', fontSize: '0.9rem' }}>Szybka Dostawa</strong>
                        <span style={{ fontSize: '0.8rem', color: '#64748b' }}>Wysyłka w 24h</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
