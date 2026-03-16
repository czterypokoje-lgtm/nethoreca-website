'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from '@carbon/icons-react';
import styles from '@/app/tekstylia-hotelowe/posciel/page.module.css';

interface FAQ {
    question: string;
    answer: string;
}

interface ProductFAQProps {
    faqs: FAQ[];
    title?: string;
}

export default function ProductFAQ({ faqs, title = "Najczęściej Zadawane Pytania" }: ProductFAQProps) {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    const toggle = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className={styles.faqSection} style={{ background: '#ffffff', padding: '4rem 0' }}>
            <div className={styles.container}>
                <div className={styles.sectionHeader}>
                    <span className={styles.sectionLabel}>FAQ</span>
                    <h2 className={styles.sectionTitle}>{title}</h2>
                </div>

                <div className={styles.faqList} style={{ maxWidth: '900px', margin: '0 auto' }}>
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
                                    color: activeIndex === index ? '#004b87' : '#1d1c1d',
                                    fontWeight: 500,
                                    fontSize: '1.125rem'
                                }}
                            >
                                {faq.question}
                                {activeIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                            </button>
                            {activeIndex === index && (
                                <div className={styles.faqAnswer} style={{ padding: '0 1.5rem 1.5rem', color: '#616061', lineHeight: '1.7', fontSize: '1rem' }}>
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
