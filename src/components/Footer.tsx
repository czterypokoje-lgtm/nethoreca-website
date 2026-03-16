'use client';

import Link from 'next/link';
import { useState } from 'react';
import { companyInfo } from '@/lib/trust-signals';
import styles from './Footer.module.css';
import { Phone, Email, Close, ArrowRight } from '@carbon/icons-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const [showCallPanel, setShowCallPanel] = useState(false);
    const [showEmailPanel, setShowEmailPanel] = useState(false);

    return (
        <>
            {/* Floating Contact Buttons - Right Side */}
            <div className={styles.floatingButtons}>
                <button
                    className={`${styles.floatingBtn} ${styles.callBtn}`}
                    onClick={() => { setShowCallPanel(true); setShowEmailPanel(false); }}
                    aria-label="Zadzwoń do nas"
                >
                    <Phone size={24} />
                    <span>Call</span>
                </button>
                <button
                    className={`${styles.floatingBtn} ${styles.emailBtn}`}
                    onClick={() => { setShowEmailPanel(true); setShowCallPanel(false); }}
                    aria-label="Napisz do nas"
                >
                    <Email size={24} />
                    <span>Email</span>
                </button>
            </div>

            {/* Call Panel */}
            {showCallPanel && (
                <div className={styles.contactPanel}>
                    <div className={styles.panelHeader}>
                        <h3>ZADZWOŃ DO NAS</h3>
                        <button className={styles.closePanel} onClick={() => setShowCallPanel(false)}>
                            <Close size={24} />
                        </button>
                    </div>
                    <div className={styles.panelContent}>
                        <p><strong>NetHoreca</strong></p>
                        <p>Lazurowa 19/72<br />01-314 Warszawa</p>
                        <p>Skontaktuj się z nami, aby dowiedzieć się więcej o naszych produktach.</p>
                        <div className={styles.phoneNumbers}>
                            <a href={`tel:${companyInfo.contact.phone1.replace(/\s/g, '')}`} className={styles.phoneLink}>
                                <Phone size={20} /> {companyInfo.contact.phone1}
                            </a>
                            <a href={`tel:${companyInfo.contact.phone2.replace(/\s/g, '')}`} className={styles.phoneLink}>
                                <Phone size={20} /> {companyInfo.contact.phone2}
                            </a>
                        </div>
                        <p className={styles.hours}>Godziny pracy: {companyInfo.contact.hours}</p>
                    </div>
                </div>
            )}

            {/* Email Panel */}
            {showEmailPanel && (
                <div className={styles.contactPanel}>
                    <div className={styles.panelHeader}>
                        <h3>NAPISZ DO NAS</h3>
                        <button className={styles.closePanel} onClick={() => setShowEmailPanel(false)}>
                            <Close size={24} />
                        </button>
                    </div>
                    <div className={styles.panelContent}>
                        <p><strong>NetHoreca</strong></p>
                        <p>Chętnie odpowiemy na Twoje pytania.</p>
                        <a href={`mailto:${companyInfo.contact.email}`} className={styles.emailLink}>
                            <Email size={20} /> {companyInfo.contact.email}
                        </a>
                        <p className={styles.responseTime}>Odpowiadamy w ciągu 24 godzin</p>
                        <Link href="/zapytanie-ofertowe" className={styles.panelCta}>
                            Formularz kontaktowy <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            )}

            {/* Blue Description Banner - Ecolab Style */}
            <section className={styles.descriptionBanner}>
                <div className="container">
                    <p className={styles.bannerText}>
                        NetHoreca jest liderem w dostawach profesjonalnych produktów dla branży hotelarskiej w Polsce.
                        Od ponad 26 lat dostarczamy kompleksowe rozwiązania obejmujące tekstylia hotelowe,
                        chemię profesjonalną Ecolab, produkty papierowe Selpak Professional oraz sprzęt sprzątający.
                        Pomagamy hotelom utrzymać najwyższe standardy jakości i higieny.
                    </p>
                </div>
            </section>

            {/* Main Footer */}
            <footer className={styles.footer}>
                <div className="container">
                    <div className={styles.footerContent}>
                        {/* PRODUTY 1: TEKSTYLIA */}
                        <div className={styles.footerSection}>
                            <h4>Tekstylia Hotelowe</h4>
                            <ul className={styles.footerLinks}>
                                <li><Link href="/tekstylia-hotelowe">Tekstylia Hotelowe <ArrowRight size={12} /></Link></li>
                                <li><Link href="/tekstylia-hotelowe/reczniki">Ręczniki Hotelowe <ArrowRight size={12} /></Link></li>
                                <li><Link href="/tekstylia-hotelowe/posciel">Pościel Hotelowa <ArrowRight size={12} /></Link></li>
                                <li><Link href="/tekstylia-hotelowe/szlafroki">Szlafroki Hotelowe <ArrowRight size={12} /></Link></li>
                                <li><Link href="/tekstylia-hotelowe/obrusy">Obrusy i Serwetki <ArrowRight size={12} /></Link></li>
                                <li><Link href="/tekstylia-hotelowe/stopki">Stopki Łazienkowe <ArrowRight size={12} /></Link></li>
                                <li>
                                    <Link href="/kalkulator-oszczednosci" className={styles.link}>
                                        Wynajem Tekstyliów <ArrowRight size={12} />
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* PRODUKTY 2: HIGIENA & CHEMIA */}
                        <div className={styles.footerSection}>
                            <h4>Higiena i Chemia</h4>
                            <ul className={styles.footerLinks}>
                                <li><Link href="/selpak-professional">Selpak Professional <ArrowRight size={12} /></Link></li>
                                <li><Link href="/selpak-professional#reczniki">Ręczniki Papierowe <ArrowRight size={12} /></Link></li>
                                <li><Link href="/selpak-professional#papier">Papier Toaletowy <ArrowRight size={12} /></Link></li>
                                <li><Link href="/selpak-professional#dozowniki">Dozowniki <ArrowRight size={12} /></Link></li>
                                <li style={{ marginTop: '12px' }}><Link href="/chemia-ecolab">Chemia Ecolab <ArrowRight size={12} /></Link></li>
                                <li><Link href="/sprzet-akcesoria">Sprzęt i Akcesoria <ArrowRight size={12} /></Link></li>
                            </ul>
                        </div>

                        {/* PRALNIA LOCATIONS - SEO */}
                        <div className={styles.footerSection}>
                            <h4>Pralnia dla Hoteli</h4>
                            <ul className={styles.footerLinks}>
                                <li><Link href="/pralnia-dla-hoteli/warszawa">Pralnia Warszawa <ArrowRight size={12} /></Link></li>
                                <li><Link href="/pralnia-dla-hoteli/krakow">Pralnia Kraków <ArrowRight size={12} /></Link></li>
                                <li><Link href="/pralnia-dla-hoteli/gdansk">Pralnia Gdańsk <ArrowRight size={12} /></Link></li>
                                <li><Link href="/pralnia-dla-hoteli/wroclaw">Pralnia Wrocław <ArrowRight size={12} /></Link></li>
                                <li><Link href="/pralnia-dla-hoteli/poznan">Pralnia Poznań <ArrowRight size={12} /></Link></li>
                                <li><Link href="/pralnia-dla-hoteli/zakopane">Pralnia Zakopane <ArrowRight size={12} /></Link></li>
                            </ul>
                        </div>

                        {/* STREFA KLIENTA (MERGED) */}
                        <div className={styles.footerSection}>
                            <h4>Strefa Klienta</h4>
                            <ul className={styles.footerLinks}>
                                <li><Link href="/o-nas">O Nas <ArrowRight size={12} /></Link></li>
                                <li><Link href="/blog">Blog & Aktualności <ArrowRight size={12} /></Link></li>
                                <li><Link href="/case-studies">Case Studies <ArrowRight size={12} /></Link></li>
                                <li><Link href="/faq">FAQ <ArrowRight size={12} /></Link></li>
                                <li><Link href="/polityka-prywatnosci">Polityka Prywatności <ArrowRight size={12} /></Link></li>
                                <li><Link href="/kontakt">Kontakt <ArrowRight size={12} /></Link></li>
                            </ul>
                        </div>

                        {/* DANE KONTAKTOWE */}
                        <div className={styles.footerSection}>
                            <h4>Dane Kontaktowe</h4>
                            <div className={styles.contactDetails}>
                                <p><strong>NetHoreca Sp. z o.o.</strong></p>
                                <p>{companyInfo.address.street}</p>
                                <p>{companyInfo.address.postal} {companyInfo.address.city}</p>
                                <p style={{ marginTop: '12px' }}>Biuro Obsługi Klienta:</p>
                                <a href={`tel:${companyInfo.contact.phone1.replace(/\s/g, '')}`}>
                                    {companyInfo.contact.phone1}
                                </a>
                                <br />
                                <a href={`mailto:${companyInfo.contact.email}`}>
                                    {companyInfo.contact.email}
                                </a>
                                <p style={{ marginTop: '12px', fontSize: '13px', color: 'rgba(255,255,255,0.6)' }}>
                                    {companyInfo.contact.hours}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className={styles.footerBottom}>
                        <div className={styles.copyright}>
                            © {currentYear} NetHoreca. Wszelkie prawa zastrzeżone.
                        </div>
                        <div className={styles.footerLogo}>
                            <span className={styles.logoText}>net<span>HORECA</span></span>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
