'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import styles from './Navigation.module.css';

const navItems = [
    {
        label: 'Tekstylia Hotelowe',
        href: '/tekstylia-hotelowe',
        sub: [
            { label: 'Ręczniki', href: '/tekstylia-hotelowe/reczniki' },
            { label: 'Pościel', href: '/tekstylia-hotelowe/posciel' },
            { label: 'Szlafroki', href: '/tekstylia-hotelowe/szlafroki' },
            { label: 'Obrusy i Serwetki', href: '/tekstylia-hotelowe/obrusy' },
            { label: 'Stopki Łazienkowe', href: '/tekstylia-hotelowe/stopki' },
        ],
    },
    {
        label: 'Chemia Ecolab',
        href: '/chemia-ecolab',
        sub: [
            { label: 'Pralnia (ECOBRITE)', href: '/chemia-ecolab/pralnia' },
            { label: 'Środki Czyszczące', href: '/chemia-ecolab/czyszczenie' },
            { label: 'Dezynfekcja', href: '/chemia-ecolab/dezynfekcja' },
            { label: 'Higiena Kuchni', href: '/chemia-ecolab/kuchnia' },
            { label: 'Pielęgnacja Podłóg', href: '/chemia-ecolab/podlogi' },
        ],
    },
    {
        label: 'Pralnia dla Hoteli',
        href: '/pralnia-dla-hoteli',
        sub: [
            { label: 'Warszawa', href: '/pralnia-dla-hoteli/warszawa' },
            { label: 'Kraków', href: '/pralnia-dla-hoteli/krakow' },
            { label: 'Gdańsk & Sopot', href: '/pralnia-dla-hoteli/gdansk' },
            { label: 'Wrocław', href: '/pralnia-dla-hoteli/wroclaw' },
            { label: 'Poznań', href: '/pralnia-dla-hoteli/poznan' },
            { label: 'Zakopane', href: '/pralnia-dla-hoteli/zakopane' },
        ],
    },
    {
        label: 'Selpak Professional',
        href: '/selpak-professional',
        sub: [
            { label: 'Ręczniki Papierowe', href: '/selpak-professional/produkty?category=tissue-paper' },
            { label: 'Papier Toaletowy', href: '/selpak-professional/produkty?category=tissue-paper' },
            { label: 'Serwetki', href: '/selpak-professional/produkty?category=napkins' },
            { label: 'Dozowniki', href: '/selpak-professional/produkty?category=dispensers' },
        ],
    },
    {
        label: 'Sprzęt i Akcesoria',
        href: '/sprzet-akcesoria',
        sub: [
            { label: 'Mopy Rasant', href: '/sprzet-akcesoria/mopy' },
            { label: 'Wózki Mobilette', href: '/sprzet-akcesoria/wozki' },
            { label: 'Systemy Dozujące', href: '/sprzet-akcesoria/systemy-dozujace' },
            { label: 'Akcesoria', href: '/sprzet-akcesoria/akcesoria' },
        ],
    },
    { label: 'Wynajem', href: '/kalkulator-oszczednosci', sub: [] },
    { label: 'O Nas', href: '/o-nas', sub: [] },
    { label: 'Kontakt', href: '/kontakt', sub: [] },
];

export default function Navigation() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const navRef = useRef<HTMLElement>(null);

    // Close mobile menu on Escape key
    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setMobileOpen(false);
                setOpenDropdown(null);
            }
        };
        document.addEventListener('keydown', handleKey);
        return () => document.removeEventListener('keydown', handleKey);
    }, []);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (mobileOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [mobileOpen]);

    const closeMobile = () => {
        setMobileOpen(false);
        setOpenDropdown(null);
    };

    const toggleMobileDropdown = (label: string) => {
        setOpenDropdown(prev => prev === label ? null : label);
    };

    return (
        <nav className={styles.nav} ref={navRef} role="navigation" aria-label="Główna nawigacja">
            <div className="container">
                <div className={styles.navContent}>
                    {/* Logo */}
                    <Link href="/" className={styles.logo} onClick={closeMobile}>
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
                        {navItems.map((item) =>
                            item.sub.length > 0 ? (
                                <div key={item.label} className={styles.dropdown}>
                                    <Link href={item.href} className={styles.navLink}>
                                        {item.label}
                                    </Link>
                                    <div className={styles.dropdownMenu}>
                                        {item.sub.map((s) => (
                                            <Link key={s.label} href={s.href}>{s.label}</Link>
                                        ))}
                                    </div>
                                </div>
                            ) : (
                                <Link key={item.label} href={item.href} className={styles.navLink}>
                                    {item.label}
                                </Link>
                            )
                        )}
                    </div>

                    {/* Desktop CTA Button */}
                    <Link href="/zapytanie-ofertowe" className={styles.ctaButton}>
                        Zapytanie Ofertowe
                    </Link>

                    {/* Hamburger Button */}
                    <button
                        className={`${styles.mobileMenuBtn} ${mobileOpen ? styles.mobileMenuBtnOpen : ''}`}
                        aria-label={mobileOpen ? 'Zamknij menu' : 'Otwórz menu'}
                        aria-expanded={mobileOpen}
                        aria-controls="mobile-menu"
                        onClick={() => setMobileOpen(prev => !prev)}
                    >
                        <span />
                        <span />
                        <span />
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                id="mobile-menu"
                className={`${styles.mobileMenu} ${mobileOpen ? styles.mobileMenuOpen : ''}`}
                aria-hidden={!mobileOpen}
            >
                <div className={styles.mobileMenuInner}>
                    {/* Mobile CTA */}
                    <Link
                        href="/zapytanie-ofertowe"
                        className={styles.mobileCta}
                        onClick={closeMobile}
                    >
                        Zapytanie Ofertowe
                    </Link>

                    {/* Mobile Nav Items */}
                    <ul className={styles.mobileNavList}>
                        {navItems.map((item) => (
                            <li key={item.label} className={styles.mobileNavItem}>
                                {item.sub.length > 0 ? (
                                    <>
                                        <button
                                            className={styles.mobileNavToggle}
                                            onClick={() => toggleMobileDropdown(item.label)}
                                            aria-expanded={openDropdown === item.label}
                                        >
                                            <span>{item.label}</span>
                                            <svg
                                                className={`${styles.chevron} ${openDropdown === item.label ? styles.chevronOpen : ''}`}
                                                width="20" height="20" viewBox="0 0 20 20" fill="none"
                                                aria-hidden="true"
                                            >
                                                <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </button>
                                        <ul className={`${styles.mobileSubList} ${openDropdown === item.label ? styles.mobileSubListOpen : ''}`}>
                                            <li>
                                                <Link href={item.href} className={styles.mobileSubLink} onClick={closeMobile}>
                                                    → Wszystkie {item.label}
                                                </Link>
                                            </li>
                                            {item.sub.map((s) => (
                                                <li key={s.label}>
                                                    <Link href={s.href} className={styles.mobileSubLink} onClick={closeMobile}>
                                                        {s.label}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </>
                                ) : (
                                    <Link href={item.href} className={styles.mobileNavLink} onClick={closeMobile}>
                                        {item.label}
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>

                    {/* Contact info at bottom */}
                    <div className={styles.mobileContact}>
                        <a href="tel:+48500312292">📞 +48 500 312 292</a>
                        <a href="mailto:kontakt@nethoreca.pl">✉ kontakt@nethoreca.pl</a>
                    </div>
                </div>
            </div>

            {/* Backdrop */}
            <div
                className={`${styles.mobileBackdrop} ${mobileOpen ? styles.mobileBackdropOpen : ''}`}
                onClick={closeMobile}
                aria-hidden="true"
            />
        </nav>
    );
}
