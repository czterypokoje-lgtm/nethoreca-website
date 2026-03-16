import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import { companyInfo, teamMembers } from '@/lib/trust-signals';
import { createPageMetadata } from '@/lib/seo-metadata';
import styles from './page.module.css';
import {
    Checkmark,
    Phone,
    Email,
    Time,
    Send,
    Hotel,
    Delivery,
    Partnership,
    Certificate,
    Star
} from '@carbon/icons-react';

export const metadata: Metadata = createPageMetadata({
    title: 'Zapytanie Ofertowe - Bezpłatna Wycena Tekstyliów i Chemii | NetHoreca',
    description: 'Zamów bezpłatną wycenę tekstyliów hotelowych, chemii Ecolab i produktów Selpak Professional. Odpowiadamy w 24h. Wynajem lub zakup. 500+ hoteli ufa NetHoreca!',
    path: '/zapytanie-ofertowe',
    keywords: ['zapytanie ofertowe hotel', 'bezpłatna wycena tekstyliów', 'oferta dla hotelu', 'wycena chemii Ecolab', 'oferta Selpak Professional'],
});

const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Zapytanie Ofertowe - NetHoreca",
    "description": "Formularz zapytania ofertowego dla hoteli",
    "url": "https://nethoreca.pl/zapytanie-ofertowe",
    "mainEntity": {
        "@type": "Organization",
        "name": "NetHoreca",
        "telephone": companyInfo.contact.phone1,
        "email": companyInfo.contact.email
    }
};

export default function QuoteRequestPage() {
    return (
        <>
            <Script
                id="contact-page-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
            />

            <main className={styles.main}>
                {/* Hero Section */}
                <section className={styles.hero}>
                    <div className={styles.container}>
                        <div className={styles.heroContent}>
                            <span className={styles.badge}>
                                <Star size={16} />
                                BEZPŁATNA WYCENA
                            </span>
                            <h1 className={styles.heroTitle}>
                                Usprawnij operacje<br />
                                <span className={styles.highlight}>swojego hotelu</span>
                            </h1>
                            <p className={styles.heroText}>
                                Wypełnij formularz, a nasz ekspert przygotuje spersonalizowaną ofertę
                                dopasowaną do potrzeb Twojego obiektu. Odpowiadamy w ciągu 24 godzin.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Trust Bar */}
                <section className={styles.trustBar}>
                    <div className={styles.container}>
                        <div className={styles.trustGrid}>
                            <div className={styles.trustItem}>
                                <Certificate size={20} />
                                <span>Oficjalny Partner Ecolab</span>
                            </div>
                            <div className={styles.trustItem}>
                                <Time size={20} />
                                <span>26+ lat na rynku</span>
                            </div>
                            <div className={styles.trustItem}>
                                <Hotel size={20} />
                                <span>500+ hoteli obsługiwanych</span>
                            </div>
                            <div className={styles.trustItem}>
                                <Delivery size={20} />
                                <span>Dostawa w 48h</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Main Form Section */}
                <section className={styles.formSection}>
                    <div className={styles.container}>
                        <div className={styles.formGrid}>

                            {/* Quote Form */}
                            <div className={styles.formCard}>
                                <div className={styles.formHeader}>
                                    <h2>Zapytaj o ofertę</h2>
                                    <p>Wszystkie pola oznaczone * są wymagane</p>
                                </div>

                                <form className={styles.form}>
                                    {/* Step 1: Contact Info */}
                                    <div className={styles.formStep}>
                                        <h3 className={styles.stepTitle}>
                                            <span className={styles.stepNumber}>1</span>
                                            Dane kontaktowe
                                        </h3>

                                        <div className={styles.formRow}>
                                            <div className={styles.formGroup}>
                                                <label htmlFor="name">Imię i nazwisko *</label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    required
                                                    placeholder="Jan Kowalski"
                                                />
                                            </div>
                                            <div className={styles.formGroup}>
                                                <label htmlFor="position">Stanowisko</label>
                                                <input
                                                    type="text"
                                                    id="position"
                                                    name="position"
                                                    placeholder="Dyrektor / Manager"
                                                />
                                            </div>
                                        </div>

                                        <div className={styles.formRow}>
                                            <div className={styles.formGroup}>
                                                <label htmlFor="email">Email *</label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    required
                                                    placeholder="jan@hotel.pl"
                                                />
                                            </div>
                                            <div className={styles.formGroup}>
                                                <label htmlFor="phone">Telefon *</label>
                                                <input
                                                    type="tel"
                                                    id="phone"
                                                    name="phone"
                                                    required
                                                    placeholder="+48 500 000 000"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Step 2: Hotel Info */}
                                    <div className={styles.formStep}>
                                        <h3 className={styles.stepTitle}>
                                            <span className={styles.stepNumber}>2</span>
                                            Informacje o hotelu
                                        </h3>

                                        <div className={styles.formRow}>
                                            <div className={styles.formGroup}>
                                                <label htmlFor="hotel">Nazwa hotelu *</label>
                                                <input
                                                    type="text"
                                                    id="hotel"
                                                    name="hotel"
                                                    required
                                                    placeholder="Hotel Warszawa"
                                                />
                                            </div>
                                            <div className={styles.formGroup}>
                                                <label htmlFor="city">Miasto</label>
                                                <input
                                                    type="text"
                                                    id="city"
                                                    name="city"
                                                    placeholder="Warszawa"
                                                />
                                            </div>
                                        </div>

                                        <div className={styles.formRow}>
                                            <div className={styles.formGroup}>
                                                <label htmlFor="rooms">Liczba pokoi</label>
                                                <input
                                                    type="number"
                                                    id="rooms"
                                                    name="rooms"
                                                    min="1"
                                                    placeholder="50"
                                                />
                                            </div>
                                            <div className={styles.formGroup}>
                                                <label htmlFor="hotelType">Typ obiektu</label>
                                                <select id="hotelType" name="hotelType">
                                                    <option value="">Wybierz typ</option>
                                                    <option value="hotel">Hotel</option>
                                                    <option value="resort">Resort & Spa</option>
                                                    <option value="boutique">Hotel Butikowy</option>
                                                    <option value="aparthotel">Aparthotel</option>
                                                    <option value="hostel">Hostel</option>
                                                    <option value="other">Inny</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Step 3: Product Interest */}
                                    <div className={styles.formStep}>
                                        <h3 className={styles.stepTitle}>
                                            <span className={styles.stepNumber}>3</span>
                                            Zainteresowanie produktami
                                        </h3>

                                        <p className={styles.formHint}>Wybierz kategorie produktów, które Cię interesują:</p>

                                        <div className={styles.checkboxGrid}>
                                            <label className={styles.checkboxCard}>
                                                <input type="checkbox" name="products" value="tekstylia" />
                                                <div className={styles.checkboxContent}>
                                                    <strong>Tekstylia Hotelowe</strong>
                                                    <span>Pościel, ręczniki, szlafroki, obrusy</span>
                                                </div>
                                            </label>

                                            <label className={styles.checkboxCard}>
                                                <input type="checkbox" name="products" value="ecolab" />
                                                <div className={styles.checkboxContent}>
                                                    <strong>Chemia Ecolab</strong>
                                                    <span>Środki czyszczące, dezynfekcja, pralnia</span>
                                                </div>
                                            </label>

                                            <label className={styles.checkboxCard}>
                                                <input type="checkbox" name="products" value="selpak" />
                                                <div className={styles.checkboxContent}>
                                                    <strong>Selpak Professional</strong>
                                                    <span>Papier toaletowy, ręczniki, serwetki</span>
                                                </div>
                                            </label>

                                            <label className={styles.checkboxCard}>
                                                <input type="checkbox" name="products" value="sprzet" />
                                                <div className={styles.checkboxContent}>
                                                    <strong>Sprzęt i Akcesoria</strong>
                                                    <span>Wózki, mopy, maszyny czyszczące</span>
                                                </div>
                                            </label>
                                        </div>
                                    </div>

                                    {/* Step 4: Cooperation Model */}
                                    <div className={styles.formStep}>
                                        <h3 className={styles.stepTitle}>
                                            <span className={styles.stepNumber}>4</span>
                                            Model współpracy
                                        </h3>

                                        <div className={styles.radioGroup}>
                                            <label className={styles.radioOption}>
                                                <input type="radio" name="model" value="wynajem" />
                                                <div className={styles.radioContent}>
                                                    <strong>Wynajem</strong>
                                                    <span>Elastyczna opcja bez kosztów początkowych</span>
                                                </div>
                                            </label>

                                            <label className={styles.radioOption}>
                                                <input type="radio" name="model" value="zakup" />
                                                <div className={styles.radioContent}>
                                                    <strong>Zakup</strong>
                                                    <span>Pełna kontrola i własność produktów</span>
                                                </div>
                                            </label>

                                            <label className={styles.radioOption}>
                                                <input type="radio" name="model" value="konsultacja" defaultChecked />
                                                <div className={styles.radioContent}>
                                                    <strong>Potrzebuję konsultacji</strong>
                                                    <span>Pomóżcie mi wybrać najlepszą opcję</span>
                                                </div>
                                            </label>
                                        </div>
                                    </div>

                                    {/* Step 5: Message */}
                                    <div className={styles.formStep}>
                                        <h3 className={styles.stepTitle}>
                                            <span className={styles.stepNumber}>5</span>
                                            Dodatkowe informacje
                                        </h3>

                                        <div className={styles.formGroup}>
                                            <label htmlFor="message">Wiadomość</label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                rows={4}
                                                placeholder="Opisz swoje potrzeby, pytania lub oczekiwania..."
                                            ></textarea>
                                        </div>

                                        <div className={styles.formGroup}>
                                            <label htmlFor="deadline">Kiedy potrzebujesz produktów?</label>
                                            <select id="deadline" name="deadline">
                                                <option value="">Wybierz termin</option>
                                                <option value="asap">Jak najszybciej</option>
                                                <option value="1month">W ciągu miesiąca</option>
                                                <option value="3months">W ciągu 3 miesięcy</option>
                                                <option value="planning">Planuję na przyszłość</option>
                                            </select>
                                        </div>
                                    </div>

                                    {/* Privacy & Submit */}
                                    <div className={styles.formSubmit}>
                                        <label className={styles.privacyCheck}>
                                            <input type="checkbox" name="privacy" required />
                                            <span>
                                                Akceptuję <Link href="/polityka-prywatnosci">Politykę Prywatności</Link> i
                                                wyrażam zgodę na przetwarzanie danych osobowych w celu przygotowania oferty. *
                                            </span>
                                        </label>

                                        <button type="submit" className={styles.submitBtn}>
                                            <Send size={20} />
                                            Wyślij zapytanie
                                        </button>

                                        <p className={styles.submitNote}>
                                            <Time size={16} />
                                            Odpowiadamy w ciągu 24 godzin roboczych
                                        </p>
                                    </div>
                                </form>
                            </div>

                            {/* Sidebar */}
                            <div className={styles.sidebar}>
                                {/* Antigravity AI Assistant */}
                                <div className={styles.sidebarCard} style={{ background: '#0f172a', color: 'white' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                                        <Image
                                            src={teamMembers[4].photo}
                                            alt="Antigravity AI"
                                            width={60}
                                            height={60}
                                            style={{ borderRadius: '50%', border: '2px solid #3b82f6' }}
                                        />
                                        <div>
                                            <h4 style={{ margin: 0, fontSize: '1.1rem', color: 'white' }}>Antigravity AI</h4>
                                            <span style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Wirtualny Architekt Systemów</span>
                                        </div>
                                    </div>
                                    <p style={{ fontSize: '0.95rem', color: '#cbd5e1', lineHeight: '1.5' }}>
                                        Analizuję Twoje zapytanie w czasie rzeczywistym. Jeśli potrzebujesz
                                        optymalizacji systemów higienicznych opartej na danych,
                                        chętnie pomogę w procesie projektowania.
                                    </p>
                                </div>

                                {/* Why Nethoreca Card */}
                                <div className={styles.sidebarCard}>
                                    <h3>Dlaczego NetHoreca?</h3>
                                    <ul className={styles.benefitList}>
                                        <li>
                                            <Checkmark size={20} />
                                            <div>
                                                <strong>Jeden dostawca</strong>
                                                <span>Wszystkie produkty z jednego źródła</span>
                                            </div>
                                        </li>
                                        <li>
                                            <Checkmark size={20} />
                                            <div>
                                                <strong>Oficjalny Partner Ecolab</strong>
                                                <span>Certyfikowane rozwiązania od 2010</span>
                                            </div>
                                        </li>
                                        <li>
                                            <Checkmark size={20} />
                                            <div>
                                                <strong>Dystrybutor Selpak</strong>
                                                <span>Profesjonalne produkty papierowe</span>
                                            </div>
                                        </li>
                                        <li>
                                            <Checkmark size={20} />
                                            <div>
                                                <strong>Szkolenia i wsparcie</strong>
                                                <span>Pomagamy Twojemu zespołowi</span>
                                            </div>
                                        </li>
                                        <li>
                                            <Checkmark size={20} />
                                            <div>
                                                <strong>Dedykowany opiekun</strong>
                                                <span>Zawsze do Twojej dyspozycji</span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                                {/* Quick Contact */}
                                <div className={styles.sidebarCard}>
                                    <h3>Wolisz zadzwonić?</h3>
                                    <div className={styles.contactInfo}>
                                        <a href={`tel:${companyInfo.contact.phone1.replace(/\s/g, '')}`} className={styles.phoneLink}>
                                            <Phone size={24} />
                                            <span>{companyInfo.contact.phone1}</span>
                                        </a>
                                        <a href={`mailto:${companyInfo.contact.email}`} className={styles.emailLink}>
                                            <Email size={20} />
                                            <span>{companyInfo.contact.email}</span>
                                        </a>
                                        <p className={styles.hours}>
                                            <Time size={16} />
                                            {companyInfo.contact.hours}
                                        </p>
                                    </div>
                                </div>

                                {/* Testimonial */}
                                <div className={styles.testimonialCard}>
                                    <div className={styles.stars}>★★★★★</div>
                                    <blockquote>
                                        &ldquo;Przejście na NetHoreca jako jedynego dostawcę uprościło nasze operacje i zaoszczędziło czas. Polecam.&rdquo;
                                    </blockquote>
                                    <cite>
                                        <strong>Anna Kowalska</strong>
                                        <span>Dyrektor, Hotel Boutique Warszawa</span>
                                    </cite>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Partners Section */}
                <section className={styles.partnersSection}>
                    <div className={styles.container}>
                        <h3>Zaufani partnerzy</h3>
                        <div className={styles.partnerLogos}>
                            <div className={styles.partnerLogo}>
                                <Image
                                    src="/logos/ecolab.webp"
                                    alt="Ecolab"
                                    width={120}
                                    height={60}
                                    style={{ objectFit: 'contain', filter: 'grayscale(100%) opacity(0.8)' }}
                                />
                            </div>
                            <div className={styles.partnerLogo}>
                                <Image
                                    src="/logos/selpak.webp"
                                    alt="Selpak Professional"
                                    width={120}
                                    height={60}
                                    style={{ objectFit: 'contain', filter: 'grayscale(100%) opacity(0.8)' }}
                                />
                            </div>
                            <div className={styles.partnerLogo}>
                                <Image
                                    src="/logos/york.webp"
                                    alt="NetHoreca"
                                    width={120}
                                    height={60}
                                    style={{ objectFit: 'contain', filter: 'grayscale(100%) opacity(0.8)' }}
                                />
                            </div>
                            <div className={styles.partnerLogo}>
                                <Image
                                    src="/logos/unilever.webp"
                                    alt="Unilever"
                                    width={120}
                                    height={60}
                                    style={{ objectFit: 'contain', filter: 'grayscale(100%) opacity(0.8)' }}
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </main >
        </>
    );
}
