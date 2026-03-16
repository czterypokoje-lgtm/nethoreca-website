'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from '@carbon/icons-react';
import styles from '@/app/tekstylia-hotelowe/posciel/page.module.css';

const faqs = [
    {
        question: "Czy oferujecie kompleksową obsługę pralni?",
        answer: "Tak! Oferujemy usługę ALL-IN-ONE: wynajem tekstyliów + pranie + wymiana. Nie musisz inwestować w pralnię - dostarczamy czyste tekstylia, a zabieramy brudne. Stała miesięczna opłata, bez ukrytych kosztów."
    },
    {
        question: "Dlaczego warto wybrać markę NetHoreca?",
        answer: "Jesteśmy polskim producentem z 26-letnim doświadczeniem. Nasze tekstylia przechodzą rygorystyczne testy wytrzymałości na pranie przemysłowe (150-200 cykli). Oferujemy pełne wsparcie doradcze, szybką realizację (nawet 24h) oraz gwarancję powtarzalności kolekcji."
    },
    {
        question: "Jaka jest minimalna ilość zamówienia?",
        answer: "Przy zakupie hurtowym minimum to 10 sztuk. Nie ma limitu maksymalnego - obsługujemy zarówno małe pensjonaty, jak i duże sieci hotelowe."
    },
    {
        question: "Czy realizujecie zamówienia niestandardowe?",
        answer: "Tak, jako producent posiadamy własną szwalnię. Szyjemy obrusy, pościel i inne tekstylia na dowolny wymiar. Oferujemy również usługę haftu logo na ręcznikach, szlafrokach i pościeli (minimum 50 szt.)."
    },
    {
        question: "Czym charakteryzuje się pościel i szlafroki waflowe?",
        answer: "Produkty o splocie waflowym posiadają charakterystyczną strukturę kratki. Zalety: oddychalność (idealne na lato), gramatura 240-280 g/m², nowoczesny styl spa, szybkie schnięcie - oszczędność czasu i energii."
    },
    {
        question: "Jaka jest optymalna gramatura dla tekstyliów hotelowych?",
        answer: "Ręczniki: standard 450-500 g/m², premium 550-600 g/m². Szlafroki: welur/frotte 400 g/m², wafel 240 g/m². Stopki: minimum 500 g/m², zalecane 650-700 g/m². Pościel: satyna 145-160 g/m²."
    },
    {
        question: "Jak długo trwa realizacja zamówienia?",
        answer: "Produkty standardowe (białe, gładkie) wysyłamy w 24-48h. Zamówienia z haftem logo lub niestandardowe rozmiary realizujemy w 14-21 dni roboczych."
    },
    {
        question: "Czy tekstylia nadają się do prania przemysłowego?",
        answer: "Tak, wszystkie nasze tekstylia są przeznaczone do prania wodnego w tunelach pralniczych (do 90°C) oraz maglowania. Są sanforyzowane - minimalna kurczliwość. Nie zalecamy czyszczenia chemicznego."
    },
    {
        question: "Czy oferujecie certyfikaty jakości?",
        answer: "Tak, nasze tekstylia posiadają certyfikat Oeko-Tex Standard 100, który gwarantuje brak substancji szkodliwych. Jesteśmy również certyfikowanym partnerem Ecolab w zakresie chemii profesjonalnej."
    },
    {
        question: "Jaka jest żywotność tekstyliów przy intensywnym użytkowaniu?",
        answer: "Przy zachowaniu zalecanych parametrów prania, nasze tekstylia wytrzymują średnio 150-200 cykli (pościel, ręczniki) do 300 cykli (stopki premium), co przekłada się na około 2-3 lata intensywnego użytkowania hotelowego."
    },
    {
        question: "Czy dostarczacie na terenie całej Polski?",
        answer: "Tak, realizujemy dostawy na terenie całej Polski. Standardowa dostawa w 48h. Dla stałych klientów oferujemy ekspresową dostawę 24h. Dostawa gratis przy zamówieniach powyżej 2000 PLN."
    },
    {
        question: "Jakie są warunki płatności?",
        answer: "Dla nowych klientów: przedpłata lub płatność przy odbiorze. Po nawiązaniu współpracy oferujemy kredyt kupiecki z terminem 14-30 dni. Akceptujemy przelewy bankowe i faktury."
    }
];

export default function VisibleFAQ() {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    const toggle = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className={styles.faqSection} style={{ background: '#ffffff', padding: '4rem 0' }}>
            <div className={styles.container}>
                <div className={styles.sectionHeader}>
                    <span className={styles.sectionLabel}>Pytania i Odpowiedzi</span>
                    <h2 className={styles.sectionTitle}>Najczęściej Zadawane Pytania</h2>
                    <p className={styles.sectionDesc}>
                        Poznaj standardy naszej marki i dowiedz się więcej o specyfikacji tekstyliów hotelowych
                    </p>
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
