'use client';

import {
    Building,
    Idea,
    SettingsAdjust,
    DeliveryTruck,
    CheckmarkOutline,
    Events
} from '@carbon/icons-react';
import styles from '../../app/page.module.css';

// Temporary inline styles for speed, will refactor to laundry.module.css later if needed
const hubSteps = [
    {
        id: 1,
        title: 'Twój Hotel',
        icon: Building,
        desc: 'Zgłaszasz zapotrzebowanie na tekstylia (np. 500 kompletów).',
        color: '#3b82f6'
    },
    {
        id: 2,
        title: 'Nethoreca HUB',
        icon: Idea, // Using Idea as "Brain/Hub"
        desc: 'Dobieramy najlepszą pralnię i harmonogram dla Ciebie.',
        color: '#8b5cf6'
    },
    {
        id: 3,
        title: 'Pralnia Partnerska',
        icon: SettingsAdjust,
        desc: 'Profesjonalne pranie przemysłowe (85-90°C) z certyfikatem.',
        color: '#10b981'
    },
    {
        id: 4,
        title: 'Transport 24/7',
        icon: DeliveryTruck,
        desc: 'Regularny odbiór i dostawa z trackingiem GPS.',
        color: '#f59e0b'
    },
    {
        id: 5,
        title: 'Kontrola Jakości',
        icon: CheckmarkOutline,
        desc: 'Weryfikacja bieli, plam i kompletności każdej sztuki.',
        color: '#ef4444'
    },
    {
        id: 6,
        title: 'Dostawa do Hotelu',
        icon: Events, // Using Events as "Delivery/Handover"
        desc: 'Otrzymujesz czyste, zafoliowane tekstylia na czas.',
        color: '#06b6d4'
    }
];

export default function HubExplanation() {
    return (
        <section style={{ padding: '6rem 0', background: 'white' }}>
            <div className={styles.container}>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <span style={{ color: '#3b82f6', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: '1rem' }}>
                        Jak To Działa?
                    </span>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0f172a', marginBottom: '1.5rem' }}>
                        Model HUB: Ty Zarządzasz Hotelem, <br /> My Zarządzamy Resztą
                    </h2>
                    <p style={{ fontSize: '1.25rem', color: '#64748b', maxWidth: '700px', margin: '0 auto' }}>
                        Jesteśmy Twoim jednym punktem kontaktu. Łączymy Cię z siecią najlepszych pralni,
                        zapewniając bezpieczeństwo, ciągłość i niższą cenę.
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem',
                    position: 'relative'
                }}>
                    {/* Connecting line visualization could be added here with absolute positioning or SVG */}

                    {hubSteps.map((step, index) => (
                        <div key={step.id} style={{
                            padding: '2rem',
                            background: '#f8fafc',
                            borderRadius: '16px',
                            border: '1px solid #e2e8f0',
                            position: 'relative',
                            transition: 'transform 0.2s',
                            textAlign: 'left'
                        }}>
                            <div style={{
                                width: '60px',
                                height: '60px',
                                background: step.color,
                                borderRadius: '12px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'white',
                                marginBottom: '1.5rem',
                                boxShadow: `0 10px 20px -5px ${step.color}66`
                            }}>
                                <step.icon size={32} />
                            </div>
                            <span style={{
                                position: 'absolute',
                                top: '2rem',
                                right: '2rem',
                                fontSize: '4rem',
                                fontWeight: 900,
                                color: '#e2e8f0',
                                opacity: 0.5,
                                lineHeight: 1
                            }}>
                                {step.id}
                            </span>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.5rem' }}>
                                {step.title}
                            </h3>
                            <p style={{ color: '#64748b', lineHeight: 1.6 }}>
                                {step.desc}
                            </p>
                        </div>
                    ))}
                </div>

                <div style={{ marginTop: '4rem', padding: '2rem', background: '#eff6ff', borderRadius: '16px', border: '1px solid #dbeafe', textAlign: 'center' }}>
                    <h4 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1e40af', marginBottom: '0.5rem' }}>
                        💡 TY NIE KONTAKTUJESZ SIĘ Z PRALNIĄ!
                    </h4>
                    <p style={{ color: '#1e3a8a' }}>
                        Wszystkie problemy, reklamacje, planowanie — to my zarządzamy.
                        Jeden telefon do nas rozwiązuje wszystko.
                    </p>
                </div>
            </div>
        </section>
    );
}
