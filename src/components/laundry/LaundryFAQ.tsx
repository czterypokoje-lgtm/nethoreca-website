'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from '@carbon/icons-react';
import styles from '@/app/pralnia-dla-hoteli/pralnia.module.css';

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
        <section className={styles.faqSection}>
            <div className={styles.container} style={{ maxWidth: '800px' }}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>
                        Częste Pytania (FAQ)
                    </h2>
                </div>

                <div className={styles.faqList}>
                    {faqs.map((faq, idx) => (
                        <div key={idx} className={styles.faqItem}>
                            <button
                                onClick={() => setOpenIndex(idx === openIndex ? null : idx)}
                                className={styles.faqButton}
                            >
                                <span className={styles.faqQuestion}>{faq.q}</span>
                                {idx === openIndex ? <ChevronUp /> : <ChevronDown />}
                            </button>

                            {idx === openIndex && (
                                <div className={styles.faqAnswer}>
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
