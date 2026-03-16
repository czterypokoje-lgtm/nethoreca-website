'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import {
    Calculator,
    Renew,
    DeliveryTruck,
    Checkmark,
    Phone,
    Email,
    Money,
    Partnership,
    ArrowRight,
    Close,
    WarningAlt,
    CheckmarkFilled,
    ChevronDown,
    Time,
    UserMultiple,
    Document,
    Star,
    Security,
    Certificate
} from '@carbon/icons-react';
import styles from './page.module.css';

// Structured Data for SEO
const landingPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Kalkulator Oszczędności na Tekstyliach Hotelowych",
    "description": "Oblicz ile Twój hotel może zaoszczędzić na wynajmie tekstyliów. Bezpłatna wycena dla hoteli w Polsce.",
    "url": "https://nethoreca.pl/kalkulator-oszczednosci",
    "mainEntity": {
        "@type": "Service",
        "name": "Wynajem Tekstyliów Hotelowych",
        "provider": {
            "@type": "Organization",
            "name": "NetHoreca",
            "foundingDate": "1998",
            "address": {
                "@type": "PostalAddress",
                "addressCountry": "PL"
            }
        }
    }
};

// FAQ Data for the landing page
const faqItems = [
    {
        question: "Ile mogę realnie zaoszczędzić przechodząc na wynajem tekstyliów?",
        answer: "Hotele przechodzące na wynajem tekstyliów od NetHoreca oszczędzają średnio 15-25% w porównaniu do zakupu i prania we własnym zakresie. Oszczędności wynikają z eliminacji kosztów: zakupu tekstyliów, pralni, magazynowania, wymiany zużytych produktów oraz zarządzania dostawcami."
    },
    {
        question: "Czy wynajem jest opłacalny dla małych hoteli (poniżej 50 pokoi)?",
        answer: "Tak, szczególnie dla mniejszych obiektów wynajem jest bardzo opłacalny. Eliminuje konieczność dużej inwestycji początkowej w tekstylia oraz utrzymywania własnej pralni. Oferujemy elastyczne warunki dopasowane do wielkości hotelu."
    },
    {
        question: "Jak szybko mogę rozpocząć współpracę?",
        answer: "Od pierwszego kontaktu do pierwszej dostawy tekstyliów mija zazwyczaj 5-7 dni roboczych. Po otrzymaniu zapytania kontaktujemy się w ciągu 24 godzin z indywidualną ofertą dopasowaną do Pana/Pani hotelu."
    },
    {
        question: "Co jeśli jakość tekstyliów mnie nie zadowoli?",
        answer: "Oferujemy bezpłatne próbki przed podjęciem decyzji. Ponadto, nasze tekstylia są objęte gwarancją jakości — jeśli nie spełnią Pana/Pani oczekiwań, wymienimy je bez dodatkowych kosztów."
    },
    {
        question: "Jakie są warunki elastyczności sezonowej?",
        answer: "Rozumiemy specyfikę branży hotelarskiej. Dostosowujemy ilość dostarczanych tekstyliów do sezonu — więcej w wysokim sezonie, mniej poza nim. Nie płaci Pan/Pani za tekstylia, których nie potrzebuje."
    }
];

// Testimonials focused on cost savings
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

export default function CalculatorLandingPage() {
    // Calculator state
    const [roomCount, setRoomCount] = useState<number>(50);
    const [currentSpend, setCurrentSpend] = useState<number>(15000);
    const [calculatedSavings, setCalculatedSavings] = useState<number>(0);
    const [hasCalculated, setHasCalculated] = useState(false);

    // Form state
    const [formData, setFormData] = useState({
        hotelName: '',
        contactName: '',
        email: '',
        phone: '',
        roomCountForm: '',
        gdprConsent: false
    });
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [formError, setFormError] = useState('');

    // Exit intent popup state
    const [showExitPopup, setShowExitPopup] = useState(false);
    const [exitPopupShown, setExitPopupShown] = useState(false);

    // FAQ accordion state
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

    // Calculate savings
    const calculateSavings = useCallback(() => {
        // Savings calculation: 15-25% of current spend
        // Larger hotels get higher percentage savings (economies of scale)
        let savingsPercentage = 0.15; // Base 15%
        if (roomCount > 100) savingsPercentage = 0.20;
        if (roomCount > 200) savingsPercentage = 0.22;
        if (roomCount > 300) savingsPercentage = 0.25;

        const monthlySavings = Math.round(currentSpend * savingsPercentage);
        setCalculatedSavings(monthlySavings);
        setHasCalculated(true);

        // Scroll to results
        const resultsElement = document.getElementById('calculator-results');
        if (resultsElement) {
            resultsElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }, [roomCount, currentSpend]);

    // Exit intent detection
    useEffect(() => {
        const handleMouseLeave = (e: MouseEvent) => {
            if (e.clientY <= 0 && !exitPopupShown && !formSubmitted) {
                setShowExitPopup(true);
                setExitPopupShown(true);
            }
        };

        document.addEventListener('mouseleave', handleMouseLeave);
        return () => document.removeEventListener('mouseleave', handleMouseLeave);
    }, [exitPopupShown, formSubmitted]);

    // Handle form submission
    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.gdprConsent) {
            setFormError('Proszę wyrazić zgodę na przetwarzanie danych osobowych.');
            return;
        }

        // Simulate form submission
        // In production, this would send to your backend/CRM
        console.log('Form submitted:', formData);
        setFormSubmitted(true);
        setFormError('');
        setShowExitPopup(false);

        // Track conversion event
        if (typeof window !== 'undefined' && (window as any).gtag) {
            (window as any).gtag('event', 'generate_lead', {
                currency: 'PLN',
                value: calculatedSavings * 12
            });
        }
    };

    // Format currency
    const formatCurrency = (value: number) => {
        return new Intl.NumberFormat('pl-PL', {
            style: 'currency',
            currency: 'PLN',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(value);
    };

    return (
        <>
            {/* Structured Data */}
            <Script
                id="landing-page-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(landingPageSchema) }}
            />

            <main className={styles.main}>
                {/* ================================
            HERO SECTION
            ================================ */}
                <section className={styles.hero}>
                    <div className={styles.container}>
                        <div className={styles.heroGrid}>
                            {/* Left Column - Text */}
                            <div className={styles.heroText}>
                                <span className={styles.heroLabel}>
                                    <span className={styles.labelDot}></span>
                                    KALKULATOR OSZCZĘDNOŚCI
                                </span>
                                <h1 className={styles.heroTitle}>
                                    Oblicz ile <span className={styles.highlight}>zaoszczędzisz</span> na tekstyliach hotelowych
                                </h1>
                                <p className={styles.heroDescription}>
                                    Hotele współpracujące z NetHoreca oszczędzają średnio <strong>15-25% rocznie</strong> na
                                    tekstyliach. Wprowadź dane Twojego hotelu i zobacz realną kwotę oszczędności.
                                </p>
                                <div className={styles.heroButtons}>
                                    <a href="#calculator" className={styles.btnPrimary}>
                                        <Calculator size={20} />
                                        Oblicz Oszczędności
                                    </a>
                                    <a href="tel:+48123456789" className={styles.btnSecondary}>
                                        <Phone size={20} />
                                        Zadzwoń: +48 123 456 789
                                    </a>
                                </div>
                                <div className={styles.heroTrust}>
                                    <span className={styles.trustLabel}>PONAD 500 HOTELI W CAŁEJ POLSCE UZYSKAŁO OSZCZĘDNOŚCI</span>
                                </div>
                            </div>

                            {/* Right Column - Calculator Preview */}
                            <div className={styles.heroVisual}>
                                <div className={styles.calculatorPreview}>
                                    <div className={styles.previewHeader}>
                                        <Calculator size={24} />
                                        <span>Kalkulator Oszczędności</span>
                                    </div>
                                    <div className={styles.previewBody}>
                                        <div className={styles.previewStat}>
                                            <span className={styles.previewLabel}>Średnie oszczędności</span>
                                            <span className={styles.previewValue}>15-25%</span>
                                        </div>
                                        <div className={styles.previewStat}>
                                            <span className={styles.previewLabel}>Czas zwrotu inwestycji</span>
                                            <span className={styles.previewValue}>od 1 miesiąca</span>
                                        </div>
                                        <div className={styles.previewStat}>
                                            <span className={styles.previewLabel}>Hoteli z oszczędnościami</span>
                                            <span className={styles.previewValue}>500+</span>
                                        </div>
                                    </div>
                                    <a href="#calculator" className={styles.previewCta}>
                                        Rozpocznij Kalkulację <ArrowRight size={16} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ================================
            TRUST BAR - STATISTICS
            ================================ */}
                <section className={styles.trustBar}>
                    <div className={styles.container}>
                        <div className={styles.trustGrid}>
                            <div className={styles.trustStat}>
                                <span className={styles.trustNumber}>26+</span>
                                <span className={styles.trustText}>Lat Doświadczenia</span>
                            </div>
                            <div className={styles.trustDivider}></div>
                            <div className={styles.trustStat}>
                                <span className={styles.trustNumber}>500+</span>
                                <span className={styles.trustText}>Obsługiwanych Hoteli</span>
                            </div>
                            <div className={styles.trustDivider}></div>
                            <div className={styles.trustStat}>
                                <span className={styles.trustNumber}>99.8%</span>
                                <span className={styles.trustText}>Dostaw Na Czas</span>
                            </div>
                            <div className={styles.trustDivider}></div>
                            <div className={styles.trustStat}>
                                <span className={styles.trustNumber}>48h</span>
                                <span className={styles.trustText}>Czas Realizacji</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ================================
            INTERACTIVE CALCULATOR
            ================================ */}
                <section id="calculator" className={styles.calculatorSection}>
                    <div className={styles.container}>
                        <div className={styles.sectionHeader}>
                            <span className={styles.sectionLabel}>KALKULATOR OSZCZĘDNOŚCI</span>
                            <h2 className={styles.sectionTitle}>
                                Ile <span className={styles.highlight}>zaoszczędzisz</span> miesięcznie?
                            </h2>
                            <p className={styles.sectionDescription}>
                                Wprowadź podstawowe informacje o Twoim hotelu, a my pokażemy Ci
                                realne oszczędności, jakie możesz uzyskać dzięki współpracy z NetHoreca.
                            </p>
                        </div>

                        <div className={styles.calculatorWrapper}>
                            <div className={styles.calculatorCard}>
                                <div className={styles.calculatorInputs}>
                                    {/* Room Count Input */}
                                    <div className={styles.inputGroup}>
                                        <label htmlFor="roomCount" className={styles.inputLabel}>
                                            Liczba pokoi w hotelu
                                        </label>
                                        <div className={styles.inputWrapper}>
                                            <input
                                                type="range"
                                                id="roomCount"
                                                min="10"
                                                max="500"
                                                step="10"
                                                value={roomCount}
                                                onChange={(e) => setRoomCount(Number(e.target.value))}
                                                className={styles.rangeInput}
                                                aria-describedby="roomCountValue"
                                            />
                                            <div className={styles.rangeLabels}>
                                                <span>10</span>
                                                <span>250</span>
                                                <span>500</span>
                                            </div>
                                        </div>
                                        <div className={styles.inputValue} id="roomCountValue">
                                            <span className={styles.valueNumber}>{roomCount}</span>
                                            <span className={styles.valueLabel}>pokoi</span>
                                        </div>
                                    </div>

                                    {/* Current Monthly Spend Input */}
                                    <div className={styles.inputGroup}>
                                        <label htmlFor="currentSpend" className={styles.inputLabel}>
                                            Obecne miesięczne wydatki na tekstylia (zakup + pranie)
                                        </label>
                                        <div className={styles.inputWrapper}>
                                            <input
                                                type="range"
                                                id="currentSpend"
                                                min="5000"
                                                max="100000"
                                                step="1000"
                                                value={currentSpend}
                                                onChange={(e) => setCurrentSpend(Number(e.target.value))}
                                                className={styles.rangeInput}
                                                aria-describedby="currentSpendValue"
                                            />
                                            <div className={styles.rangeLabels}>
                                                <span>5 000 zł</span>
                                                <span>50 000 zł</span>
                                                <span>100 000 zł</span>
                                            </div>
                                        </div>
                                        <div className={styles.inputValue} id="currentSpendValue">
                                            <span className={styles.valueNumber}>{formatCurrency(currentSpend)}</span>
                                            <span className={styles.valueLabel}>miesięcznie</span>
                                        </div>
                                    </div>

                                    <button
                                        onClick={calculateSavings}
                                        className={styles.calculateBtn}
                                        type="button"
                                    >
                                        <Calculator size={20} />
                                        Oblicz Oszczędności
                                    </button>
                                </div>

                                {/* Calculator Results */}
                                <div
                                    id="calculator-results"
                                    className={`${styles.calculatorResults} ${hasCalculated ? styles.visible : ''}`}
                                    aria-live="polite"
                                >
                                    {hasCalculated && (
                                        <>
                                            <div className={styles.resultsHeader}>
                                                <CheckmarkFilled size={32} className={styles.successIcon} />
                                                <h3>Twoje szacowane oszczędności</h3>
                                            </div>

                                            <div className={styles.resultsGrid}>
                                                <div className={styles.resultCard}>
                                                    <span className={styles.resultLabel}>Oszczędności miesięcznie</span>
                                                    <span className={styles.resultValue}>{formatCurrency(calculatedSavings)}</span>
                                                </div>
                                                <div className={styles.resultCard}>
                                                    <span className={styles.resultLabel}>Oszczędności rocznie</span>
                                                    <span className={styles.resultValueLarge}>{formatCurrency(calculatedSavings * 12)}</span>
                                                </div>
                                                <div className={styles.resultCard}>
                                                    <span className={styles.resultLabel}>Oszczędności w 3 lata</span>
                                                    <span className={styles.resultValue}>{formatCurrency(calculatedSavings * 36)}</span>
                                                </div>
                                            </div>

                                            <div className={styles.resultsNote}>
                                                <WarningAlt size={20} />
                                                <p>
                                                    <strong>Uwaga:</strong> Powyższa kalkulacja jest szacunkowa.
                                                    Finalna oferta zostanie przygotowana indywidualnie na podstawie
                                                    szczegółowej analizy potrzeb Pana/Pani hotelu.
                                                </p>
                                            </div>

                                            <a href="#contact-form" className={styles.resultsCta}>
                                                Zamów Bezpłatną Pełną Analizę
                                                <ArrowRight size={18} />
                                            </a>
                                        </>
                                    )}
                                </div>
                            </div>

                            {/* Calculator Trust Badges */}
                            <div className={styles.calculatorBadges}>
                                <div className={styles.badge}>
                                    <Security size={24} />
                                    <span>Bezpłatna wycena</span>
                                </div>
                                <div className={styles.badge}>
                                    <Time size={24} />
                                    <span>Odpowiedź w 24h</span>
                                </div>
                                <div className={styles.badge}>
                                    <Document size={24} />
                                    <span>Bez zobowiązań</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ================================
            BENEFITS SECTION
            ================================ */}
                <section className={styles.benefits}>
                    <div className={styles.container}>
                        <div className={styles.sectionHeader}>
                            <span className={styles.sectionLabel}>DLACZEGO WYNAJEM</span>
                            <h2 className={styles.sectionTitle}>
                                Skąd pochodzą <span className={styles.highlight}>oszczędności</span>?
                            </h2>
                            <p className={styles.sectionDescription}>
                                Wynajem tekstyliów eliminuje wiele ukrytych kosztów, których większość
                                hoteli nie uwzględnia w swoich kalkulacjach.
                            </p>
                        </div>

                        <div className={styles.benefitsGrid}>
                            <div className={styles.benefitCard}>
                                <div className={styles.benefitIconWrapper}>
                                    <Money size={28} />
                                </div>
                                <h4>Brak Inwestycji Początkowej</h4>
                                <p>
                                    Nie musisz wydawać 50 000 - 200 000 zł na zakup tekstyliów na start.
                                    Te środki możesz przeznaczyć na rozwój hotelu lub marketing.
                                </p>
                                <span className={styles.benefitSaving}>Oszczędność: 50-200 tys. zł</span>
                            </div>

                            <div className={styles.benefitCard}>
                                <div className={styles.benefitIconWrapper}>
                                    <Renew size={28} />
                                </div>
                                <h4>Brak Kosztów Wymiany</h4>
                                <p>
                                    Zużyte tekstylia wymieniamy bezpłatnie. Koniec z nagłymi wydatkami
                                    na nowe ręczniki czy pościel po kilku sezonach użytkowania.
                                </p>
                                <span className={styles.benefitSaving}>Oszczędność: 15-30 tys. zł/rok</span>
                            </div>

                            <div className={styles.benefitCard}>
                                <div className={styles.benefitIconWrapper}>
                                    <DeliveryTruck size={28} />
                                </div>
                                <h4>Eliminacja Kosztów Pralni</h4>
                                <p>
                                    Nie płacisz za pralnię — ani własną (sprzęt, energia, personel),
                                    ani zewnętrzną. Pranie wliczone w miesięczną opłatę.
                                </p>
                                <span className={styles.benefitSaving}>Oszczędność: 20-50 tys. zł/rok</span>
                            </div>

                            <div className={styles.benefitCard}>
                                <div className={styles.benefitIconWrapper}>
                                    <UserMultiple size={28} />
                                </div>
                                <h4>Jeden Dostawca</h4>
                                <p>
                                    Zamiast zarządzać dziesiątkami umów z dostawcami tekstyliów, chemii
                                    i sprzętu — masz jednego partnera i jedną fakturę.
                                </p>
                                <span className={styles.benefitSaving}>Oszczędność czasu: 10+ h/mies.</span>
                            </div>

                            <div className={styles.benefitCard}>
                                <div className={styles.benefitIconWrapper}>
                                    <Time size={28} />
                                </div>
                                <h4>Elastyczność Sezonowa</h4>
                                <p>
                                    W wysokim sezonie dostarczamy więcej, poza sezonem — mniej.
                                    Nie płacisz za tekstylia, które leżą w magazynie.
                                </p>
                                <span className={styles.benefitSaving}>Oszczędność: 10-20%</span>
                            </div>

                            <div className={styles.benefitCard}>
                                <div className={styles.benefitIconWrapper}>
                                    <Partnership size={28} />
                                </div>
                                <h4>Partner Ecolab</h4>
                                <p>
                                    Jako oficjalny partner Ecolab oferujemy profesjonalną chemię
                                    w atrakcyjnych cenach. Kompletna obsługa housekeepingu.
                                </p>
                                <span className={styles.benefitSaving}>Dodatkowe 5-10% oszczędności</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ================================
            HOW IT WORKS - 3 STEPS
            ================================ */}
                <section className={styles.howItWorks}>
                    <div className={styles.container}>
                        <div className={styles.sectionHeader}>
                            <span className={styles.sectionLabel}>JAK TO DZIAŁA</span>
                            <h2 className={styles.sectionTitle}>
                                <span className={styles.highlight}>3 kroki</span> do oszczędności
                            </h2>
                            <p className={styles.sectionDescription}>
                                Rozpoczęcie współpracy z NetHoreca jest proste i szybkie.
                                Od pierwszego kontaktu do pierwszej dostawy — zwykle 5-7 dni.
                            </p>
                        </div>

                        <div className={styles.stepsGrid}>
                            <div className={styles.stepCard}>
                                <div className={styles.stepNumber}>1</div>
                                <div className={styles.stepContent}>
                                    <h4>Zapytanie i Analiza</h4>
                                    <p>
                                        Wypełnij formularz lub zadzwoń. W ciągu 24 godzin skontaktuje się
                                        z Panem/Panią nasz doradca, który zbierze informacje o potrzebach hotelu.
                                    </p>
                                    <span className={styles.stepTime}>
                                        <Time size={16} /> Do 24 godzin
                                    </span>
                                </div>
                            </div>

                            <div className={styles.stepLine}></div>

                            <div className={styles.stepCard}>
                                <div className={styles.stepNumber}>2</div>
                                <div className={styles.stepContent}>
                                    <h4>Indywidualna Oferta</h4>
                                    <p>
                                        Przygotowujemy spersonalizowaną ofertę z kalkulacją oszczędności,
                                        propozycją asortymentu i warunkami współpracy.
                                    </p>
                                    <span className={styles.stepTime}>
                                        <Time size={16} /> 2-3 dni robocze
                                    </span>
                                </div>
                            </div>

                            <div className={styles.stepLine}></div>

                            <div className={styles.stepCard}>
                                <div className={styles.stepNumber}>3</div>
                                <div className={styles.stepContent}>
                                    <h4>Start Współpracy</h4>
                                    <p>
                                        Po akceptacji oferty realizujemy pierwszą dostawę. Dedykowany
                                        opiekun klienta dba o bezproblemową obsługę.
                                    </p>
                                    <span className={styles.stepTime}>
                                        <Time size={16} /> 2-3 dni robocze
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className={styles.stepsCtaWrapper}>
                            <a href="#contact-form" className={styles.btnPrimary}>
                                Rozpocznij Teraz — To Nic Nie Kosztuje
                                <ArrowRight size={18} />
                            </a>
                        </div>
                    </div>
                </section>

                {/* ================================
            TESTIMONIALS - COST FOCUSED
            ================================ */}
                <section className={styles.testimonials}>
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

                        <div className={styles.testimonialsGrid}>
                            {testimonials.map((testimonial) => (
                                <div key={testimonial.id} className={styles.testimonialCard}>
                                    <div className={styles.testimonialSavings}>
                                        <span className={styles.savingsLabel}>Oszczędności</span>
                                        <span className={styles.savingsValue}>{testimonial.savings}</span>
                                    </div>
                                    <div className={styles.testimonialRating}>
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <Star key={i} size={16} className={styles.starIcon} />
                                        ))}
                                    </div>
                                    <p className={styles.testimonialText}>&quot;{testimonial.text}&quot;</p>
                                    <div className={styles.testimonialAuthor}>
                                        <div className={styles.authorAvatar}>
                                            {testimonial.author.charAt(0)}
                                        </div>
                                        <div className={styles.authorInfo}>
                                            <div className={styles.authorName}>{testimonial.author}</div>
                                            <div className={styles.authorPosition}>{testimonial.position}</div>
                                            <div className={styles.authorHotel}>{testimonial.hotel}</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ================================
            FAQ SECTION
            ================================ */}
                <section className={styles.faq}>
                    <div className={styles.container}>
                        <div className={styles.faqLayout}>
                            <div className={styles.faqHeader}>
                                <span className={styles.sectionLabel}>FAQ</span>
                                <h2 className={styles.faqTitle}>
                                    Najczęściej<br />
                                    zadawane<br />
                                    pytania
                                </h2>
                                <p className={styles.faqSubtitle}>
                                    Odpowiedzi na pytania o oszczędności i współpracę
                                </p>
                            </div>

                            <div className={styles.faqList}>
                                {faqItems.map((item, index) => (
                                    <div
                                        key={index}
                                        className={`${styles.faqItem} ${openFaqIndex === index ? styles.open : ''}`}
                                    >
                                        <button
                                            className={styles.faqQuestion}
                                            onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                                            aria-expanded={openFaqIndex === index}
                                        >
                                            <span>{item.question}</span>
                                            <ChevronDown size={20} className={styles.faqChevron} />
                                        </button>
                                        <div className={styles.faqAnswer}>
                                            <p>{item.answer}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* ================================
            CONTACT FORM + FINAL CTA
            ================================ */}
                <section id="contact-form" className={styles.contactSection}>
                    <div className={styles.container}>
                        <div className={styles.contactGrid}>
                            {/* Left Column - CTA Content */}
                            <div className={styles.contactContent}>
                                <span className={styles.sectionLabel}>BEZPŁATNA WYCENA</span>
                                <h2 className={styles.contactTitle}>
                                    Zamów <span className={styles.highlightWhite}>pełną analizę</span> oszczędności
                                </h2>
                                <p className={styles.contactDescription}>
                                    Wypełnij formularz, a nasz doradca skontaktuje się z Panem/Panią
                                    w ciągu 24 godzin z indywidualną ofertą i szczegółową kalkulacją oszczędności.
                                </p>

                                <div className={styles.contactBenefits}>
                                    <div className={styles.contactBenefit}>
                                        <Checkmark size={20} />
                                        <span>Bezpłatna wycena bez zobowiązań</span>
                                    </div>
                                    <div className={styles.contactBenefit}>
                                        <Checkmark size={20} />
                                        <span>Odpowiedź w ciągu 24 godzin</span>
                                    </div>
                                    <div className={styles.contactBenefit}>
                                        <Checkmark size={20} />
                                        <span>Bezpłatne próbki tekstyliów</span>
                                    </div>
                                    <div className={styles.contactBenefit}>
                                        <Checkmark size={20} />
                                        <span>Indywidualna kalkulacja oszczędności</span>
                                    </div>
                                </div>

                                <div className={styles.contactDirect}>
                                    <p>Wolisz porozmawiać telefonicznie?</p>
                                    <a href="tel:+48123456789" className={styles.contactPhone}>
                                        <Phone size={24} />
                                        <span>+48 123 456 789</span>
                                    </a>
                                </div>
                            </div>

                            {/* Right Column - Form */}
                            <div className={styles.contactFormWrapper}>
                                {!formSubmitted ? (
                                    <form onSubmit={handleFormSubmit} className={styles.contactForm}>
                                        <h3 className={styles.formTitle}>Formularz Zapytania</h3>

                                        <div className={styles.formGroup}>
                                            <label htmlFor="hotelName">Nazwa hotelu *</label>
                                            <input
                                                type="text"
                                                id="hotelName"
                                                required
                                                value={formData.hotelName}
                                                onChange={(e) => setFormData({ ...formData, hotelName: e.target.value })}
                                                placeholder="np. Hotel Mariacki"
                                            />
                                        </div>

                                        <div className={styles.formGroup}>
                                            <label htmlFor="contactName">Imię i nazwisko *</label>
                                            <input
                                                type="text"
                                                id="contactName"
                                                required
                                                value={formData.contactName}
                                                onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                                                placeholder="np. Jan Kowalski"
                                            />
                                        </div>

                                        <div className={styles.formRow}>
                                            <div className={styles.formGroup}>
                                                <label htmlFor="email">Email *</label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    required
                                                    value={formData.email}
                                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                    placeholder="email@hotel.pl"
                                                />
                                            </div>
                                            <div className={styles.formGroup}>
                                                <label htmlFor="phone">Telefon *</label>
                                                <input
                                                    type="tel"
                                                    id="phone"
                                                    required
                                                    value={formData.phone}
                                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                    placeholder="+48 123 456 789"
                                                />
                                            </div>
                                        </div>

                                        <div className={styles.formGroup}>
                                            <label htmlFor="roomCountForm">Liczba pokoi</label>
                                            <input
                                                type="number"
                                                id="roomCountForm"
                                                value={formData.roomCountForm}
                                                onChange={(e) => setFormData({ ...formData, roomCountForm: e.target.value })}
                                                placeholder="np. 50"
                                            />
                                        </div>

                                        <div className={styles.formCheckbox}>
                                            <input
                                                type="checkbox"
                                                id="gdprConsent"
                                                checked={formData.gdprConsent}
                                                onChange={(e) => setFormData({ ...formData, gdprConsent: e.target.checked })}
                                            />
                                            <label htmlFor="gdprConsent">
                                                Wyrażam zgodę na przetwarzanie moich danych osobowych przez NetHoreca
                                                w celu przedstawienia oferty handlowej. Zapoznałem/am się z{' '}
                                                <Link href="/polityka-prywatnosci">Polityką Prywatności</Link>.
                                            </label>
                                        </div>

                                        {formError && (
                                            <div className={styles.formError}>
                                                <WarningAlt size={20} />
                                                <span>{formError}</span>
                                            </div>
                                        )}

                                        <button type="submit" className={styles.submitBtn}>
                                            Zamów Bezpłatną Wycenę
                                            <ArrowRight size={18} />
                                        </button>

                                        <p className={styles.formNote}>
                                            Twoje dane są bezpieczne. Nie wysyłamy spamu.
                                        </p>
                                    </form>
                                ) : (
                                    <div className={styles.formSuccess}>
                                        <CheckmarkFilled size={48} className={styles.successIconLarge} />
                                        <h3>Dziękujemy za zapytanie!</h3>
                                        <p>
                                            Nasz doradca skontaktuje się z Panem/Panią w ciągu 24 godzin
                                            z indywidualną ofertą i szczegółową kalkulacją oszczędności.
                                        </p>
                                        <div className={styles.successContact}>
                                            <p>W pilnych sprawach prosimy o kontakt:</p>
                                            <a href="tel:+48123456789">
                                                <Phone size={20} /> +48 123 456 789
                                            </a>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </section>

                {/* ================================
            TRUST BADGES FOOTER
            ================================ */}
                <section className={styles.trustBadges}>
                    <div className={styles.container}>
                        <div className={styles.badgesGrid}>
                            <div className={styles.badgeItem}>
                                <Certificate size={32} />
                                <span>ISO 9001</span>
                            </div>
                            <div className={styles.badgeItem}>
                                <Security size={32} />
                                <span>RABC Certified</span>
                            </div>
                            <div className={styles.badgeItem}>
                                <Partnership size={32} />
                                <span>Partner Ecolab</span>
                            </div>
                            <div className={styles.badgeItem}>
                                <Certificate size={32} />
                                <span>Oeko-Tex Standard</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ================================
            STICKY MOBILE CTA
            ================================ */}
                <div className={styles.stickyCta}>
                    <a href="#contact-form" className={styles.stickyCtaBtn}>
                        Zamów Bezpłatną Wycenę
                    </a>
                </div>

                {/* ================================
            EXIT INTENT POPUP
            ================================ */}
                {showExitPopup && (
                    <div className={styles.exitPopupOverlay} role="dialog" aria-modal="true">
                        <div className={styles.exitPopup}>
                            <button
                                className={styles.exitPopupClose}
                                onClick={() => setShowExitPopup(false)}
                                aria-label="Zamknij"
                            >
                                <Close size={24} />
                            </button>
                            <div className={styles.exitPopupContent}>
                                <span className={styles.exitPopupBadge}>EKSKLUZYWNA OFERTA</span>
                                <h3>Zanim wyjdziesz...</h3>
                                <p>
                                    Zamów wycenę teraz i otrzymaj <strong>15% rabatu</strong> na pierwszy
                                    miesiąc współpracy + bezpłatne próbki premium tekstyliów.
                                </p>
                                <a href="#contact-form" onClick={() => setShowExitPopup(false)} className={styles.exitPopupBtn}>
                                    Skorzystaj z Oferty
                                    <ArrowRight size={18} />
                                </a>
                                <button
                                    className={styles.exitPopupDismiss}
                                    onClick={() => setShowExitPopup(false)}
                                >
                                    Nie, dziękuję
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </main>
        </>
    );
}
