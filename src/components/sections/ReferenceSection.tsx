'use client';

import React from 'react';
import { Star } from '@carbon/icons-react';
import styles from './ReferenceSection.module.css';

// Testimonials data - Centralized for consistency across all pages
const testimonials = [
    {
        id: 1,
        text: "Przejście na wynajem tekstyliów od NetHoreca pozwoliło nam zaoszczędzić ponad 40 000 zł rocznie. Dodatkowo, jakość pościeli i ręczników znacząco wzrosła, co doceniają nasi goście.",
        author: "Tomasz Kowalski",
        position: "Dyrektor Generalny",
        hotel: "Hotel Mariacki, Kraków",
        savings: "40 000 zł/rok",
        rating: 5
    },
    {
        id: 2,
        text: "Jako manager housekeepingu cenię sobie przede wszystkim niezawodność — 99.8% dostaw na czas to nie slogan, ale rzeczywistość. Eliminacja stresu związanego z brakami tekstyliów jest bezcenna.",
        author: "Anna Wiśniewska",
        position: "Manager Housekeepingu",
        hotel: "Resort & Spa Mazury",
        savings: "28 000 zł/rok",
        rating: 5
    },
    {
        id: 3,
        text: "Współpraca z NetHoreca to najlepsza decyzja biznesowa, jaką podjąłem dla naszego aparthotelu. Jeden dostawca, jedna faktura, zero problemów. ROI przekroczył nasze oczekiwania.",
        author: "Michał Nowak",
        position: "Właściciel",
        hotel: "Aparthotel Modern, Warszawa",
        savings: "22 000 zł/rok",
        rating: 5
    }
];

export default function ReferenceSection() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.sectionHeader}>
                    <span className={styles.sectionLabel}>OPINIE KLIENTÓW</span>
                    <h2 className={styles.sectionTitle}>
                        Hotele, które <span className={styles.highlight}>oszczędzają</span>
                    </h2>
                    <p className={styles.sectionDescription}>
                        Poznaj historie hoteli, które już zoptymalizowały swoje wydatki
                        na tekstylia dzięki współpracy z NetHoreca.
                    </p>
                </div>

                <div className={styles.grid}>
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className={styles.card}>
                            <div className={styles.savingsBadge}>
                                <span className={styles.savingsLabel}>Oszczędności</span>
                                <span className={styles.savingsValue}>{testimonial.savings}</span>
                            </div>
                            <div className={styles.rating}>
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} size={16} className={styles.starIcon} />
                                ))}
                            </div>
                            <p className={styles.text}>&quot;{testimonial.text}&quot;</p>
                            <div className={styles.author}>
                                <div className={styles.avatar}>
                                    {testimonial.author.charAt(0)}
                                </div>
                                <div className={styles.authorInfo}>
                                    <div className={styles.name}>{testimonial.author}</div>
                                    <div className={styles.position}>{testimonial.position}</div>
                                    <div className={styles.hotel}>{testimonial.hotel}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
