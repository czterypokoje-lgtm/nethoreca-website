import Link from 'next/link';
import styles from './Navigation.module.css';

export default function Navigation() {
    return (
        <nav className={styles.nav}>
            <div className="container">
                <div className={styles.navContent}>
                    {/* Logo */}
                    <Link href="/" className={styles.logo}>
                        <div className={styles.logoWrapper}>
                            <img
                                src="/nethoreca-logo.webp"
                                alt="NetHoreca"
                                className={styles.logoImage}
                            />
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className={styles.navLinks}>
                        <div className={styles.dropdown}>
                            <Link href="/tekstylia-hotelowe" className={styles.navLink}>
                                Tekstylia Hotelowe
                            </Link>
                            <div className={styles.dropdownMenu}>
                                <Link href="/tekstylia-hotelowe/reczniki">Ręczniki</Link>
                                <Link href="/tekstylia-hotelowe/posciel">Pościel</Link>
                                <Link href="/tekstylia-hotelowe/szlafroki">Szlafroki</Link>
                                <Link href="/tekstylia-hotelowe/obrusy">Obrusy i Serwetki</Link>
                                <Link href="/tekstylia-hotelowe/stopki">Stopki Łazienkowe</Link>
                            </div>
                        </div>

                        <div className={styles.dropdown}>
                            <Link href="/chemia-ecolab" className={styles.navLink}>
                                Chemia Ecolab
                            </Link>
                            <div className={styles.dropdownMenu}>
                                <Link href="/chemia-ecolab/pralnia">Pralnia (ECOBRITE)</Link>
                                <Link href="/chemia-ecolab/czyszczenie">Środki Czyszczące</Link>
                                <Link href="/chemia-ecolab/dezynfekcja">Dezynfekcja</Link>
                                <Link href="/chemia-ecolab/kuchnia">Higiena Kuchni</Link>
                                <Link href="/chemia-ecolab/podlogi">Pielęgnacja Podłóg</Link>
                            </div>
                        </div>

                        <div className={styles.dropdown}>
                            <Link href="/pralnia-dla-hoteli" className={styles.navLink}>
                                Pralnia dla Hoteli
                            </Link>
                            <div className={styles.dropdownMenu}>
                                <Link href="/pralnia-dla-hoteli/warszawa">Warszawa</Link>
                                <Link href="/pralnia-dla-hoteli/krakow">Kraków</Link>
                                <Link href="/pralnia-dla-hoteli/gdansk">Gdańsk & Sopot</Link>
                                <Link href="/pralnia-dla-hoteli/wroclaw">Wrocław</Link>
                                <Link href="/pralnia-dla-hoteli/poznan">Poznań</Link>
                                <Link href="/pralnia-dla-hoteli/zakopane">Zakopane</Link>
                                <Link href="/pralnia-dla-hoteli">Zobacz więcej...</Link>
                            </div>
                        </div>

                        <div className={styles.dropdown}>
                            <Link href="/selpak-professional" className={styles.navLink}>
                                Selpak Professional
                            </Link>
                            <div className={styles.dropdownMenu}>
                                <Link href="/selpak-professional/produkty?category=tissue-paper">Ręczniki Papierowe</Link>
                                <Link href="/selpak-professional/produkty?category=tissue-paper">Papier Toaletowy</Link>
                                <Link href="/selpak-professional/produkty?category=napkins">Serwetki</Link>
                                <Link href="/selpak-professional/produkty?category=dispensers">Dozowniki</Link>
                            </div>
                        </div>

                        <div className={styles.dropdown}>
                            <Link href="/sprzet-akcesoria" className={styles.navLink}>
                                Sprzęt i Akcesoria
                            </Link>
                            <div className={styles.dropdownMenu}>
                                <Link href="/sprzet-akcesoria/mopy">Mopy Rasant</Link>
                                <Link href="/sprzet-akcesoria/wozki">Wózki Mobilette</Link>
                                <Link href="/sprzet-akcesoria/systemy-dozujace">Systemy Dozujące</Link>
                                <Link href="/sprzet-akcesoria/akcesoria">Akcesoria</Link>
                            </div>
                        </div>

                        <Link href="/kalkulator-oszczednosci" className={styles.navLink}>Wynajem</Link>
                        <Link href="/o-nas" className={styles.navLink}>O Nas</Link>
                        <Link href="/kontakt" className={styles.navLink}>Kontakt</Link>
                    </div>

                    {/* CTA Button */}
                    <Link href="/zapytanie-ofertowe" className={styles.ctaButton}>
                        Zapytanie Ofertowe
                    </Link>

                    {/* Mobile Menu Button */}
                    <button className={styles.mobileMenuBtn} aria-label="Menu">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>
        </nav>
    );
}
