import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { companyInfo } from '@/lib/trust-signals';
import { localBusinessSchema } from '@/lib/structured-data';
import { createPageMetadata } from '@/lib/seo-metadata';
import styles from './page.module.css';
import { Phone, Email, Location, Time, Checkmark } from '@carbon/icons-react';

export const metadata: Metadata = createPageMetadata({
    title: 'Kontakt - NetHoreca | Tekstylia Hotelowe i Chemia Ecolab',
    description: 'Skontaktuj się z NetHoreca. Tel: +48 500 312 292. Email: kontakt@nethoreca.pl. Bezpłatna wycena w 24h. 26+ lat doświadczenia, oficjalny partner Ecolab. Warszawa.',
    path: '/kontakt',
    keywords: ['kontakt NetHoreca', 'telefon NetHoreca', 'email NetHoreca', 'zapytanie ofertowe hotel', 'partner Ecolab Polska', 'dostawca tekstyliów hotelowych'],
});

export default function ContactPage() {
    return (
        <>
            <Script
                id="local-business-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
            />

            <main className={styles.main}>
                {/* Hero Section */}
                <section className={styles.hero}>
                    <div className={styles.container}>
                        <div className={styles.heroContent}>
                            <span className={styles.badge}>Kontakt</span>
                            <h1 className={styles.heroTitle}>
                                Porozmawiajmy o<br />
                                <span className={styles.highlight}>Twoim hotelu</span>
                            </h1>
                            <p className={styles.heroText}>
                                Jesteśmy tu, żeby pomóc. Skontaktuj się z nami,
                                a odezwiemy się w ciągu 24 godzin.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Trust Bar */}
                <section className={styles.trustBar}>
                    <div className={styles.container}>
                        <div className={styles.trustGrid}>
                            <div className={styles.trustItem}>
                                <Checkmark size={20} />
                                <span>Oficjalny Partner Ecolab</span>
                            </div>
                            <div className={styles.trustItem}>
                                <Checkmark size={20} />
                                <span>26+ lat na rynku</span>
                            </div>
                            <div className={styles.trustItem}>
                                <Checkmark size={20} />
                                <span>500+ hoteli obsługiwanych</span>
                            </div>
                            <div className={styles.trustItem}>
                                <Checkmark size={20} />
                                <span>Odpowiedź w 24h</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Main Contact Section */}
                <section className={styles.contactSection}>
                    <div className={styles.container}>
                        <div className={styles.contactGrid}>

                            {/* Contact Form */}
                            <div className={styles.formCard}>
                                <h2 className={styles.formTitle}>Wyślij wiadomość</h2>
                                <p className={styles.formSubtitle}>
                                    Opisz swoje potrzeby, a nasz zespół przygotuje dla Ciebie indywidualną ofertę.
                                </p>

                                <form className={styles.form}>
                                    <div className={styles.formRow}>
                                        <div className={styles.formGroup}>
                                            <label htmlFor="name">Imię i nazwisko *</label>
                                            <input type="text" id="name" name="name" required placeholder="Jan Kowalski" />
                                        </div>
                                        <div className={styles.formGroup}>
                                            <label htmlFor="hotel">Nazwa hotelu</label>
                                            <input type="text" id="hotel" name="hotel" placeholder="Hotel Warszawa" />
                                        </div>
                                    </div>

                                    <div className={styles.formRow}>
                                        <div className={styles.formGroup}>
                                            <label htmlFor="email">Email *</label>
                                            <input type="email" id="email" name="email" required placeholder="jan@hotel.pl" />
                                        </div>
                                        <div className={styles.formGroup}>
                                            <label htmlFor="phone">Telefon *</label>
                                            <input type="tel" id="phone" name="phone" required placeholder="+48 500 000 000" />
                                        </div>
                                    </div>

                                    <div className={styles.formGroup}>
                                        <label htmlFor="subject">Temat</label>
                                        <select id="subject" name="subject">
                                            <option value="">Wybierz temat</option>
                                            <option value="textiles">Tekstylia hotelowe</option>
                                            <option value="chemicals">Chemia Ecolab</option>
                                            <option value="equipment">Sprzęt i akcesoria</option>
                                            <option value="rental">Wynajem tekstyliów</option>
                                            <option value="quote">Zapytanie ofertowe</option>
                                            <option value="other">Inne</option>
                                        </select>
                                    </div>

                                    <div className={styles.formGroup}>
                                        <label htmlFor="message">Wiadomość *</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={5}
                                            required
                                            placeholder="Opisz swoje potrzeby..."
                                        ></textarea>
                                    </div>

                                    <button type="submit" className={styles.submitBtn}>
                                        Wyślij wiadomość
                                    </button>

                                    <p className={styles.privacyNote}>
                                        Wysyłając formularz, wyrażasz zgodę na przetwarzanie danych osobowych
                                        zgodnie z naszą <Link href="/polityka-prywatnosci">polityką prywatności</Link>.
                                    </p>
                                </form>
                            </div>

                            {/* Contact Info */}
                            <div className={styles.infoColumn}>
                                <div className={styles.infoCard}>
                                    <h3>Dane kontaktowe</h3>

                                    <div className={styles.infoItem}>
                                        <div className={styles.infoIcon}>
                                            <Phone size={24} />
                                        </div>
                                        <div className={styles.infoContent}>
                                            <strong>Telefon</strong>
                                            <a href={`tel:${companyInfo.contact.phone1.replace(/\s/g, '')}`}>
                                                {companyInfo.contact.phone1}
                                            </a>
                                            <a href={`tel:${companyInfo.contact.phone2.replace(/\s/g, '')}`}>
                                                {companyInfo.contact.phone2}
                                            </a>
                                        </div>
                                    </div>

                                    <div className={styles.infoItem}>
                                        <div className={styles.infoIcon}>
                                            <Email size={24} />
                                        </div>
                                        <div className={styles.infoContent}>
                                            <strong>Email</strong>
                                            <a href={`mailto:${companyInfo.contact.email}`}>
                                                {companyInfo.contact.email}
                                            </a>
                                        </div>
                                    </div>

                                    <div className={styles.infoItem}>
                                        <div className={styles.infoIcon}>
                                            <Location size={24} />
                                        </div>
                                        <div className={styles.infoContent}>
                                            <strong>Adres</strong>
                                            <span>{companyInfo.name}</span>
                                            <span>{companyInfo.address.street}</span>
                                            <span>{companyInfo.address.postal} {companyInfo.address.city}</span>
                                        </div>
                                    </div>

                                    <div className={styles.infoItem}>
                                        <div className={styles.infoIcon}>
                                            <Time size={24} />
                                        </div>
                                        <div className={styles.infoContent}>
                                            <strong>Godziny pracy</strong>
                                            <span>{companyInfo.contact.hours}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Trust Card */}
                                <div className={styles.trustCard}>
                                    <h4>Dlaczego NetHoreca?</h4>
                                    <ul className={styles.trustList}>
                                        <li>
                                            <Checkmark size={16} />
                                            <span>Oficjalny partner Ecolab od 2010</span>
                                        </li>
                                        <li>
                                            <Checkmark size={16} />
                                            <span>26+ lat doświadczenia</span>
                                        </li>
                                        <li>
                                            <Checkmark size={16} />
                                            <span>Ponad 500 zadowolonych klientów</span>
                                        </li>
                                        <li>
                                            <Checkmark size={16} />
                                            <span>Dostawa w 48h do całej Polski</span>
                                        </li>
                                        <li>
                                            <Checkmark size={16} />
                                            <span>100% polski kapitał</span>
                                        </li>
                                    </ul>
                                </div>

                                {/* Quick CTA */}
                                <div className={styles.quickCta}>
                                    <p>Potrzebujesz szybkiej wyceny?</p>
                                    <Link href="/zapytanie-ofertowe" className={styles.ctaLink}>
                                        Zapytanie ofertowe →
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Map Section */}
                <section className={styles.mapSection}>
                    <div className={styles.container}>
                        <h2 className={styles.mapTitle}>Nasza lokalizacja</h2>
                        <p className={styles.mapSubtitle}>Zapraszamy do naszego biura w Warszawie</p>
                        <div className={styles.mapBox}>
                            <div className={styles.mapPlaceholder}>
                                <Location size={48} />
                                <p>{companyInfo.address.street}, {companyInfo.address.city}</p>
                                <a
                                    href={`https://maps.google.com/?q=${encodeURIComponent(companyInfo.address.street + ', ' + companyInfo.address.city)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.mapLink}
                                >
                                    Otwórz w Google Maps
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* E-E-A-T Section */}
                <section className={styles.eatSection}>
                    <div className={styles.container}>
                        <div className={styles.eatGrid}>
                            <div className={styles.eatCard}>
                                <h4>Doświadczenie</h4>
                                <p>26+ lat na rynku hotelarskim. Wiemy, czego potrzebują hotele.</p>
                            </div>
                            <div className={styles.eatCard}>
                                <h4>Ekspertyza</h4>
                                <p>Certyfikowani specjaliści Ecolab. Szkolenia i wsparcie techniczne.</p>
                            </div>
                            <div className={styles.eatCard}>
                                <h4>Autorytet</h4>
                                <p>Oficjalny partner Ecolab. Rekomendowani przez wiodące hotele.</p>
                            </div>
                            <div className={styles.eatCard}>
                                <h4>Zaufanie</h4>
                                <p>500+ zadowolonych klientów. 98% wskaźnik satysfakcji.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
