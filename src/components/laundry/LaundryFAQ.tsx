'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from '@carbon/icons-react';

const faqs = [
    {
        q: 'Czy Nethoreca to pralnia?',
        a: 'NIE! Jesteśmy HUBem technologicznym i logistycznym. Łączymy hotele z najlepszymi pralniami przemysłowymi. Zarządzamy procesem, jakością i transportem, ale samo pranie wykonują nasi certyfikowani partnerzy.'
    },
    {
        q: 'Co jeśli pralnia będzie miała awarię?',
        a: 'To nasza największa przewaga. Mamy sieć 15+ pralni. Jeśli jedna ma awarię, natychmiast przekierowujemy Twoje pranie do innej pralni partnerskiej w regionie (Backup System). Twój hotel jest bezpieczny.'
    },
    {
        q: 'Czy obsługujecie mniejsze hotele (poniżej 30 pokoi)?',
        a: 'Tak, mamy specjalne pakiety dla mniejszych obiektów i pensjonatów, szczególnie w modelu sezonowym (np. płacisz tylko w sezonie wysokim).'
    },
    {
        q: 'Jakie certyfikaty posiadają Wasze pralnie?',
        a: 'Wymagamy absolutnego minimum: HACCP (bezpieczeństwo sanitarne) oraz ubezpieczenia OC na 1 mln PLN. Większość partnerów posiada również ISO 9001 oraz certyfikaty ekologiczne.'
    },
    {
        q: 'Czy mogę dostać próbki tekstyliów?',
        a: 'Oczywiście. Przed podpisaniem umowy nasz przedstawiciel dostarczy bezpłatny set próbny (pościel, ręczniki), abyś mógł ocenić jakość.'
    }
];

export default function LaundryFAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section style={{ padding: '6rem 0', background: '#f8fafc' }}>
            <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 2rem' }}>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0f172a', marginBottom: '1rem' }}>
                        Częste Pytania (FAQ)
                    </h2>
                </div>

                <div style={{ display: 'grid', gap: '1rem' }}>
                    {faqs.map((faq, idx) => (
                        <div key={idx} style={{ background: 'white', borderRadius: '12px', overflow: 'hidden', border: '1px solid #e2e8f0' }}>
                            <button
                                onClick={() => setOpenIndex(idx === openIndex ? null : idx)}
                                style={{
                                    width: '100%',
                                    padding: '1.5rem',
                                    background: 'none',
                                    border: 'none',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    cursor: 'pointer',
                                    textAlign: 'left'
                                }}
                            >
                                <span style={{ fontSize: '1.125rem', fontWeight: 700, color: '#0f172a' }}>{faq.q}</span>
                                {idx === openIndex ? <ChevronUp /> : <ChevronDown />}
                            </button>

                            {idx === openIndex && (
                                <div style={{ padding: '0 1.5rem 1.5rem 1.5rem', color: '#475569', lineHeight: 1.6 }}>
                                    {faq.a}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
