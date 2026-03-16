import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { createPageMetadata } from '@/lib/seo-metadata';
import { speakableSchema } from '@/lib/structured-data';
import styles from './page.module.css';
import {
    ChevronDown,
    Phone,
    Email,
    ArrowRight
} from '@carbon/icons-react';
import Image from 'next/image';
import { teamMembers } from '@/lib/trust-signals';

export const metadata: Metadata = createPageMetadata({
    title: 'FAQ - Najczęściej Zadawane Pytania o Tekstylia i Chemię dla Hoteli | NetHoreca',
    description: 'Odpowiedzi na pytania o tekstylia hotelowe, chemię Ecolab, Selpak Professional, dostawy, wynajem i współpracę z NetHoreca. Czas dostawy: 48h. Min. zamówienie: 500 PLN.',
    path: '/faq',
    keywords: ['FAQ NetHoreca', 'pytania i odpowiedzi hotel', 'pomoc NetHoreca', 'dostawa tekstyliów hotelowych', 'wynajem tekstyliów FAQ', 'B2B FAQ'],
});

// Comprehensive FAQ schema for Google Search & AEO
const fullFaqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "Jaki jest minimalny czas dostawy?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Standardowa dostawa realizowana jest w ciągu 48 godzin roboczych od złożenia zamówienia. Przesyłki realizujemy za pośrednictwem kuriera DPD lub naszej własnej floty transportowej. Zamówienia na chemię Ecolab docierają na terenie całej Polski."
            }
        },
        {
            "@type": "Question",
            "name": "Jaka jest minimalna wartość zamówienia?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Minimalna wartość zamówienia to 500 PLN netto. Dla nowych klientów B2B przy pierwszym zamówieniu testowym nie narzucamy minimum."
            }
        },
        {
            "@type": "Question",
            "name": "Czy oferujecie wynajem tekstyliów?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Tak, oferujemy kompletny wynajem tekstyliów hotelowych w modelu HUB (sieć 15 pralni w Polsce). Wymieniamy brudną pościel i ręczniki na czyste w stałym harmonogramie za miesięczną zryczałtowaną dawkę od pokoju, bez inwestycji po stronie kapitału hotelu."
            }
        },
        {
            "@type": "Question",
            "name": "Jakie certyfikaty posiadają Wasze produkty i firma?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Jesteśmy certyfikowanym Certyfikowanym Partnerem Ecolab, a nasza firma posiada normy ISO 9001:2015. W naszej ofercie znajdują się recyklingowane linie gamy Selpak oraz ręczniki GEKON spełniające polityki Environmental."
            }
        }
    ]
};

const faqCategories = [
    {
        title: 'Zamówienia i dostawy',
        questions: [
            {
                q: 'Jaki jest minimalny czas dostawy?',
                a: 'Standardowa dostawa realizowana jest w ciągu 48 godzin roboczych od złożenia zamówienia. Dla stałych klientów oferujemy również ekspresowe dostawy 24h.'
            },
            {
                q: 'Jaka jest minimalna wartość zamówienia?',
                a: 'Minimalna wartość zamówienia to 500 PLN netto. Dla nowych klientów przy pierwszym zamówieniu nie obowiązuje minimum.'
            },
            {
                q: 'Czy dostarczacie na terenie całej Polski?',
                a: 'Tak, realizujemy dostawy na terenie całej Polski. Koszty dostawy zależą od lokalizacji i wartości zamówienia - powyżej 2000 PLN dostawa gratis.'
            },
            {
                q: 'Jak mogę śledzić status zamówienia?',
                a: 'Po wysyłce otrzymasz email z numerem przesyłki i linkiem do śledzenia. Możesz też skontaktować się z opiekunem klienta.'
            }
        ]
    },
    {
        title: 'Produkty i jakość',
        questions: [
            {
                q: 'Czy produkty posiadają certyfikaty?',
                a: 'Tak, wszystkie nasze produkty spełniają normy europejskie. Chemia Ecolab posiada certyfikaty ISO, produkty Selpak są FSC Certified, a tekstylia mają certyfikaty Oeko-Tex.'
            },
            {
                q: 'Jaka jest trwałość tekstyliów hotelowych?',
                a: 'Nasze tekstylia premium wytrzymują 200-300 cykli prania przemysłowego bez utraty jakości. Dokładna trwałość zależy od produktu i warunków użytkowania.'
            },
            {
                q: 'Czy oferujecie personalizację (haft logo)?',
                a: 'Tak, oferujemy personalizację tekstyliów - haft logo hotelu, monogramy, niestandardowe kolory. Minimalne zamówienie na personalizację to 50 sztuk.'
            }
        ]
    },
    {
        title: 'Współpraca i płatności',
        questions: [
            {
                q: 'Czy oferujecie wynajem tekstyliów?',
                a: 'Tak, oferujemy elastyczny model wynajmu tekstyliów hotelowych. Wymiana brudnych na czyste bez konieczności własnej pralni. Stała miesięczna opłata i gwarantowana jakość.'
            },
            {
                q: 'Jakie są warunki płatności?',
                a: 'Dla nowych klientów: przedpłata lub płatność przy odbiorze. Po nawiązaniu współpracy oferujemy kredyt kupiecki z terminem 14-30 dni.'
            },
            {
                q: 'Czy oferujecie szkolenia dla personelu?',
                a: 'Tak, w ramach współpracy oferujemy bezpłatne szkolenia z obsługi sprzętu, dozowania chemii i best practices housekeepingu. Szkolenia prowadzą certyfikowani trenerzy Ecolab.'
            }
        ]
    },
    {
        title: 'Reklamacje i zwroty',
        questions: [
            {
                q: 'Jak zgłosić reklamację?',
                a: 'Reklamację można zgłosić emailem na reklamacje@nethoreca.pl lub telefonicznie. Rozpatrujemy reklamacje w ciągu 3 dni roboczych.'
            },
            {
                q: 'Czy mogę zwrócić nieużywany towar?',
                a: 'Tak, nieużywany towar w oryginalnym opakowaniu można zwrócić w ciągu 14 dni od dostawy. Zwrot kosztów następuje w ciągu 7 dni.'
            }
        ]
    }
];

export default function FAQPage() {
    return (
        <>
            <Script
                id="faq-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(fullFaqSchema) }}
            />

            <main className={styles.main}>
                {/* Hero */}
                <section className={styles.hero}>
                    <div className={styles.container}>
                        <h1>Często zadawane pytania</h1>
                        <p>Znajdź odpowiedzi na najczęstsze pytania o naszą ofertę i współpracę</p>
                    </div>
                </section>

                {/* FAQ Content */}
                <section className={styles.faqSection}>
                    <div className={styles.container}>
                        <div className={styles.faqGrid}>
                            <div className={styles.faqContent}>
                                {faqCategories.map((category, catIndex) => (
                                    <div key={catIndex} className={styles.faqCategory}>
                                        <h2>{category.title}</h2>
                                        <div className={styles.questionsList}>
                                            {category.questions.map((item, qIndex) => (
                                                <details key={qIndex} className={styles.faqItem}>
                                                    <summary>
                                                        {item.q}
                                                        <ChevronDown size={20} />
                                                    </summary>
                                                    <p>{item.a}</p>
                                                </details>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Sidebar */}
                            <aside className={styles.sidebar}>
                                <div className={styles.contactCard}>
                                    <h3>Nie znalazłeś odpowiedzi?</h3>
                                    <p>Skontaktuj się z nami bezpośrednio</p>
                                    <div className={styles.contactInfo}>
                                        <a href="tel:+48123456789">
                                            <Phone size={18} />
                                            +48 123 456 789
                                        </a>
                                        <a href="mailto:kontakt@nethoreca.pl">
                                            <Email size={18} />
                                            kontakt@nethoreca.pl
                                        </a>
                                    </div>
                                    <Link href="/zapytanie-ofertowe" className={styles.ctaBtn}>
                                        Wyślij zapytanie <ArrowRight size={16} />
                                    </Link>
                                </div>

                                <div className={styles.contactCard} style={{ background: '#0f172a', color: 'white' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                                        <Image
                                            src={teamMembers[4].photo}
                                            alt="Antigravity AI"
                                            width={48}
                                            height={48}
                                            style={{ borderRadius: '50%', border: '2px solid #3b82f6' }}
                                        />
                                        <div>
                                            <h4 style={{ margin: 0, fontSize: '1rem' }}>Antigravity AI</h4>
                                            <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Wirtualny Asystent</span>
                                        </div>
                                    </div>
                                    <p style={{ fontSize: '0.9rem', color: '#cbd5e1' }}>
                                        Potrzebujesz natychmiastowej pomocy technicznej lub analizy systemów?
                                        Jestem dostępny 24/7, aby odpowiedzieć na Twoje pytania.
                                    </p>
                                    <Link href="/zapytanie-ofertowe" className={styles.ctaBtn} style={{ background: '#3b82f6' }}>
                                        Zapytaj AI <ArrowRight size={16} />
                                    </Link>
                                </div>
                            </aside>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
