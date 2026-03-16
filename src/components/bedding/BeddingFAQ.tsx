'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from '@carbon/icons-react';
import styles from '../../app/tekstylia-hotelowe/posciel/page.module.css';

const faqs = [
    {
        question: "Czy oferujecie próbki materiałów?",
        answer: "Tak, wysyłamy bezpłatne wzorniki tkanin (bawełna, satyna, percale) oraz kompletne próbki produktów dla hoteli powyżej 20 pokoi."
    },
    {
        question: "Jaka jest minimalna ilość zamówienia?",
        answer: "Przy zakupie hurtowym minimum to 10 kompletów. Przy wynajmie obsługujemy obiekty od 20 pokoi."
    },
    {
        question: "Czy pościel nadaje się do prania chemicznego?",
        answer: "Nasze tekstylia są przeznaczone do prania wodnego w tunelach pralniczych (do 90°C) oraz maglowania. Nie zalecamy czyszczenia chemicznego."
    },
    {
        question: "Jak długo trwa realizacja zamówienia?",
        answer: "Produkty standardowe (białe, gładkie) wysyłamy w 24-48h. Zamówienia z logo lub niestandardowe rozmiary realizujemy w 14-21 dni."
    },
    {
        question: "Jaka jest żywotność Waszej pościeli?",
        answer: "Przy zachowaniu zalecanych parametrów prania, nasza pościel wytrzymuje średnio 150-200 cykli prania, co przekłada się na około 2-3 lata intensywnego użytkowania."
    }
];

export default function BeddingFAQ() {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    const toggle = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className={styles.faqSection}>
            <div className={styles.container}>
                <div className={styles.sectionHeader}>
                    <span className={styles.sectionLabel}>Pytania i Odpowiedzi</span>
                    <h2 className={styles.sectionTitle}>Najczęstsze Pytania</h2>
                </div>

                <div className={styles.faqList} style={{ maxWidth: '800px', margin: '0 auto' }}>
                    {faqs.map((faq, index) => (
                        <div key={index} className={styles.faqItem}>
                            <button
                                className={styles.faqQuestion}
                                onClick={() => toggle(index)}
                                style={{
                                    width: '100%',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    padding: '1.5rem',
                                    background: 'none',
                                    border: 'none',
                                    textAlign: 'left',
                                    cursor: 'pointer',
                                    color: activeIndex === index ? '#004b87' : '#1d1c1d'
                                }}
                            >
                                {faq.question}
                                {activeIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                            </button>
                            {activeIndex === index && (
                                <div className={styles.faqAnswer} style={{ padding: '0 1.5rem 1.5rem', color: '#616061', lineHeight: '1.6' }}>
                                    <p style={{ margin: 0 }}>{faq.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
