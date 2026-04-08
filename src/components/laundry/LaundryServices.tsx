'use client';

import {
    Clean,
    DeliveryTruck,
    ChartLine,
    CheckmarkFilled,
    Money,
    Task
} from '@carbon/icons-react';
import Link from 'next/link';

const services = [
    {
        title: 'Wynajem Tekstyliów',
        icon: Task,
        items: ['Pościel Premium (Satyna/Percale)', 'Ręczniki Hotelowe (400-600 GSM)', 'Obrusy i Serwetki', 'Uniformy Personelu']
    },
    {
        title: 'Pranie Profesjonalne',
        icon: Clean,
        items: ['Temp. 85-90°C (Dezynfekcja)', 'Chemia Ecolab Professional', 'Maglowanie i Prasowanie', 'Pakowanie w folię']
    },
    {
        title: 'Transport Całodobowy',
        icon: DeliveryTruck,
        items: ['Odbiór 24/7', 'Dostawa w 48h (Express 24h)', 'Tracking GPS', 'Auta chłodnie (Separacja)']
    },
    {
        title: 'Kontrola Jakości',
        icon: CheckmarkFilled,
        items: ['Inspekcja każdej sztuki', 'Brak plam (99.9%)', 'Pomiar bieli', 'Automatyczna wymiana zużytych']
    },
    {
        title: 'Raportowanie Online',
        icon: ChartLine,
        items: ['Panel Klienta', 'Historia dostaw', 'Faktury i Statystyki', 'Zgłoszenia online']
    },
    {
        title: 'Rozliczenie (1 Faktura)',
        icon: Money,
        items: ['Jedna faktura miesięcznie', 'Stałe stawki', 'Termin 30 dni', 'Brak ukrytych kosztów']
    }
];

import styles from './LaundryComponents.module.css';

export default function LaundryServices() {
    return (
        <section style={{ padding: '6rem 0', background: '#f8fafc' }}>
            <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0f172a', marginBottom: '1rem' }}>
                        Kompleksowa Obsługa: Co Zawiera Usługa?
                    </h2>
                    <p style={{ color: '#64748b', fontSize: '1.25rem' }}>
                        Wszystko, czego potrzebuje Twój hotel, w jednej przejrzystej ofercie.
                    </p>
                </div>

                <div className={styles.servicesGrid}>
                    {services.map((service, idx) => (
                        <div key={idx} style={{ background: 'white', padding: '2rem', borderRadius: '16px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)', border: '1px solid #f1f5f9' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', borderBottom: '1px solid #f1f5f9', paddingBottom: '1rem' }}>
                                <div style={{ color: '#3b82f6' }}>
                                    <service.icon size={24} />
                                </div>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f172a' }}>{service.title}</h3>
                            </div>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                {service.items.map((item, i) => (
                                    <li key={i} style={{ display: 'flex', gap: '0.75rem', marginBottom: '0.75rem', color: '#475569' }}>
                                        <div style={{ width: '6px', height: '6px', background: '#cbd5e1', borderRadius: '50%', marginTop: '8px', flexShrink: 0 }}></div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div style={{ textAlign: 'center', marginTop: '4rem' }}>
                    <Link href="#cennik" style={{ display: 'inline-block', padding: '1rem 2.5rem', background: '#0f172a', color: 'white', fontWeight: 700, borderRadius: '8px', textDecoration: 'none' }}>
                        Zobacz Cennik Dla Twojego Hotelu
                    </Link>
                </div>
            </div>
        </section>
    );
}
