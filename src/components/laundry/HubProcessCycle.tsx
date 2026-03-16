'use client';

import Image from 'next/image';
import styles from './hub-process.module.css';
import {
    Building,
    DeliveryTruck,
    SettingsAdjust,
    CheckmarkOutline,
    Package,
    Events
} from '@carbon/icons-react';

const steps = [
    {
        id: 1,
        title: 'Twój Hotel',
        icon: Building,
        desc: 'Zgłoszenie zapotrzebowania',
        // Position: Top Center (High) - adjust for circular flow
        // Let's go clockwise starting from Top (12 o'clock)
        // 12:00 -> Hotel (Start)
        top: '0%', left: '50%'
    },
    {
        id: 2,
        title: 'Odbiór 24/7',
        icon: DeliveryTruck,
        desc: 'Transport do pralni',
        // 2:00
        top: '25%', left: '93%'
    },
    {
        id: 3,
        title: 'Pranie & Magiel',
        icon: SettingsAdjust,
        desc: 'Temp. 85°C + Norma PN-EN 14065',
        // 4:00 -> Bottom Right
        top: '75%', left: '93%'
    },
    {
        id: 4,
        title: 'Kontrola Jakości',
        icon: CheckmarkOutline,
        desc: 'Skanowanie i weryfikacja',
        // 6:00 -> Bottom Center
        top: '100%', left: '50%'
    },
    {
        id: 5,
        title: 'Pakowanie',
        icon: Package,
        desc: 'Foliowanie kompletów',
        // 8:00 -> Bottom Left
        top: '75%', left: '7%'
    },
    {
        id: 6,
        title: 'Dostawa',
        icon: Events, // or Delivery again
        desc: 'Czysta pościel w hotelu',
        // 10:00 -> Top Left
        top: '25%', left: '7%'
    }
];

export default function HubProcessCycle() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.intro}>
                    <span style={{ color: '#3b82f6', fontWeight: 300, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                        Jak To Działa?
                    </span>
                    <h2 className={styles.title}>
                        Model HUB w 6 Krokach
                    </h2>
                    <p className={styles.subtitle}>
                        Zamknięty obieg czystości monitorowany przez Nethoreca.
                        Safety First: Każdy etap jest kontrolowany cyfrowo.
                    </p>
                </div>

                <div className={styles.grid}>
                    {/* Left: Image (Like reference photo 1) */}
                    <div className={styles.visualSide}>
                        <Image
                            src="/images/towels/texture-macro.webp" // Macro texture looks more "microbiological"
                            alt="Czyste ręczniki hotelowe"
                            fill
                            className={styles.visualImage}
                            sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                        <div className={styles.hygieneBox}>
                            <h3 className={styles.hygieneTitle}>Standard Higieny</h3>
                            <p className={styles.hygieneText}>
                                Gwarantujemy czystość mikrobiologiczną zgodnie z normą
                                <strong style={{ color: '#3b82f6', display: 'block', fontSize: '1.1rem', marginTop: '4px', fontWeight: 300 }}>PN-EN 14065</strong>
                            </p>
                            <div className={styles.connectionLine}></div>
                        </div>
                    </div>

                    {/* Right: Circular Process */}
                    <div className={styles.processSide}>
                        {/* Desktop Circle */}
                        <div className={styles.cycleContainer}>
                            {/* Orbit Line */}
                            <div className={styles.orbitCircle}></div>

                            {/* Center Hub */}
                            <div className={styles.hubCenter}>
                                <span className={styles.hubLogo}>net<span style={{ color: '#3b82f6' }}>HORECA</span></span>
                                <span className={styles.hubSub}>HUB CENTER</span>
                            </div>

                            {/* Steps */}
                            {steps.map((step) => (
                                <div
                                    key={step.id}
                                    className={styles.step}
                                    style={{ top: step.top, left: step.left }}
                                >
                                    <div className={styles.stepIcon}>
                                        <step.icon size={24} />
                                    </div>
                                    <div className={styles.stepTitle}>
                                        {step.id}. {step.title}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Mobile List (Visible only on small screens) */}
                        <div className={styles.mobileSteps}>
                            {steps.map((step) => (
                                <div key={step.id} className={styles.mobileStepCard}>
                                    <div style={{
                                        width: '48px', height: '48px', background: '#eff6ff',
                                        color: '#3b82f6', borderRadius: '50%', display: 'flex',
                                        alignItems: 'center', justifyContent: 'center', fontWeight: 300
                                    }}>
                                        {step.id}
                                    </div>
                                    <div>
                                        <h4 style={{ margin: 0, fontSize: '1.125rem' }}>{step.title}</h4>
                                        <p style={{ margin: 0, fontSize: '0.875rem', color: '#64748b' }}>{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
