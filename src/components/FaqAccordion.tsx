'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from '@carbon/icons-react';
import styles from './FaqAccordion.module.css';

interface FaqItem {
    q: string;
    a: string;
}

interface FaqAccordionProps {
    items: FaqItem[];
}

export default function FaqAccordion({ items }: FaqAccordionProps) {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleItem = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className={styles.accordion}>
            {items.map((item, index) => (
                <div
                    key={index}
                    className={`${styles.item} ${activeIndex === index ? styles.active : ''}`}
                >
                    <button
                        className={styles.question}
                        onClick={() => toggleItem(index)}
                        aria-expanded={activeIndex === index}
                    >
                        <span className={styles.questionText}>{item.q}</span>
                        <span className={styles.icon}>
                            {activeIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                        </span>
                    </button>
                    <div
                        className={styles.answer}
                        style={{ maxHeight: activeIndex === index ? '500px' : '0' }}
                    >
                        <div className={styles.answerContent}>
                            <p>{item.a}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
