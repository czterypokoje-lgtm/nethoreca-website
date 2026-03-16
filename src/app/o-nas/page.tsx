import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import { companyInfo, teamMembers } from '@/lib/trust-signals';
import { organizationSchema } from '@/lib/structured-data';
import { createPageMetadata } from '@/lib/seo-metadata';
import styles from './page.module.css';
import { LogoLinkedin, Checkmark, Partnership, Certificate, Time, Delivery } from '@carbon/icons-react';

export const metadata: Metadata = createPageMetadata({
    title: 'O Nas - NetHoreca | Partner Ecolab od 1998 | 500+ Hoteli w Polsce',
    description: 'Poznaj NetHoreca - od 1998 roku wspieramy hotele w Polsce. Oficjalny partner Ecolab, dystrybutor Selpak Professional, 500+ zadowolonych klientów, 26 lat doświadczenia. Polski kapitał.',
    path: '/o-nas',
    keywords: ['o firmie NetHoreca', 'partner Ecolab Polska', 'historia NetHoreca', 'dostawca tekstyliów hotelowych', 'polski dostawca dla hoteli'],
});

export default function AboutPage() {
    return (
        <>
            <Script
                id="organization-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
            />

            <main className={styles.main}>
                {/* Hero Section with Trust Composition */}
                <section className={styles.hero}>
                    <div className={styles.container}>
                        <div className={styles.heroGrid}>
                            <div className={styles.heroContent}>
                                <span className={styles.sectionLabel}>
                                    <span className={styles.labelDot}></span>
                                    O nas
                                </span>
                                <h1 className={styles.heroTitle}>
                                    Cześć, jesteśmy NetHoreca
                                </h1>
                                <p className={styles.heroSubtitle}>
                                    Nie jesteśmy tu, żeby sprzedawać produkty.<br />
                                    Jesteśmy tu, żeby pomagać hotelom <strong>działać lepiej</strong>.
                                </p>
                            </div>

                            {/* Trust Composition - replacing photo */}
                            <div className={styles.trustComposition}>
                                <div className={styles.trustCard}>
                                    <div className={styles.trustLogo}>
                                        <span className={styles.logoText}>NetHoreca</span>
                                        <span className={styles.logoSubtext}>PARTNER ECOLAB</span>
                                    </div>

                                    <div className={styles.trustBadges}>
                                        <div className={styles.badge}>
                                            <div className={styles.badgeIcon}>
                                                <Certificate size={24} />
                                            </div>
                                            <div className={styles.badgeText}>
                                                <strong>Oficjalny Partner</strong>
                                                <span>Ecolab od 2010</span>
                                            </div>
                                        </div>
                                        <div className={styles.badge}>
                                            <div className={styles.badgeIcon}>
                                                <Time size={24} />
                                            </div>
                                            <div className={styles.badgeText}>
                                                <strong>26+ lat</strong>
                                                <span>na rynku</span>
                                            </div>
                                        </div>
                                        <div className={styles.badge}>
                                            <div className={styles.badgeIcon}>
                                                <Partnership size={24} />
                                            </div>
                                            <div className={styles.badgeText}>
                                                <strong>500+ hoteli</strong>
                                                <span>obsługiwanych</span>
                                            </div>
                                        </div>
                                        <div className={styles.badge}>
                                            <div className={styles.badgeIcon}>
                                                <Delivery size={24} />
                                            </div>
                                            <div className={styles.badgeText}>
                                                <strong>Dostawa 48h</strong>
                                                <span>cała Polska</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={styles.trustStats}>
                                        <div className={styles.trustStat}>
                                            <span className={styles.statValue}>98%</span>
                                            <span className={styles.statDesc}>zadowolonych klientów</span>
                                        </div>
                                        <div className={styles.trustStat}>
                                            <span className={styles.statValue}>100%</span>
                                            <span className={styles.statDesc}>polski kapitał</span>
                                        </div>
                                    </div>

                                    <div className={styles.trustCerts}>
                                        <span className={styles.certBadge}>ISO 9001</span>
                                        <span className={styles.certBadge}>ECOLAB CERTIFIED</span>
                                        <span className={styles.certBadge}>HACCP</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Mission Section */}
                <section className={styles.section}>
                    <div className={styles.container}>
                        <span className={styles.sectionLabel}>
                            <span className={styles.labelDot}></span>
                            Nasza misja
                        </span>
                        <h2 className={styles.missionTitle}>
                            Uwolnić potencjał hotelarzy
                        </h2>
                        <div className={styles.missionText}>
                            <p>
                                Zbyt długo hotelarze musieli radzić sobie z mniej — mniej czasu,
                                mniej wsparcia, mniej jakości od dostawców.
                            </p>
                            <p>Jesteśmy tu, żeby to zmienić.</p>
                            <p>Żeby uprościć zaopatrzenie hotelu.</p>
                            <p>Żeby dostarczać produkty, które naprawdę działają.</p>
                            <p>
                                I żeby dać hotelarzom <strong>czas na to, co robią najlepiej</strong> —
                                tworzenie niezapomnianych doświadczeń dla gości.
                            </p>
                            <p>
                                Bo kiedy hotelarze mogą się skupić na gościach,
                                <strong> dzieją się wielkie rzeczy</strong>.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Story Section */}
                <section className={styles.section}>
                    <div className={styles.container}>
                        <span className={styles.sectionLabel}>
                            <span className={styles.labelDot}></span>
                            Nasza historia
                        </span>
                        <h2 className={styles.storyHeadline}>
                            Hotelarstwo zasługiwało na więcej.<br />
                            Więc to stworzyliśmy.
                        </h2>

                        <div className={styles.storyCard}>
                            <div className={styles.storyCardContent}>
                                <p>
                                    W <strong>1998 roku</strong> Grzegorz Sułowski założył firmę NetHoreca
                                    z prostą ideą: hotele zasługują na lepszych dostawców.
                                </p>
                                <p>
                                    Jako ktoś, kto przez lata współpracował z hotelami, widział ten sam
                                    problem: świetni hotelarze, robiący wszystko dobrze, zawiedzeni
                                    przez dostawców niskiej jakości.
                                </p>
                                <p>
                                    Zbudowaliśmy NetHoreca w przekonaniu, że hotelarze zasługują na więcej.
                                    Nie tylko lepsze produkty, ale <strong>lepszy sposób współpracy</strong> —
                                    taki, który daje siłę tym, którzy tworzą niezapomniane podróże.
                                </p>
                                <p>
                                    W <strong>2010 roku</strong> zostaliśmy oficjalnym partnerem Ecolab,
                                    łącząc naszą wiedzę o tekstyliach z technologią chemiczną światowego lidera.
                                </p>
                            </div>
                            <div className={styles.storyCardImage}>
                                <Image
                                    src="/about/historia-firmy-nethoreca-1998.webp"
                                    alt="Historia NetHoreca"
                                    width={400}
                                    height={300}
                                    className={styles.storyImg}
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Quick Facts */}
                <section className={styles.factsSection}>
                    <div className={styles.container}>
                        <h3 className={styles.factsTitle}>Szybkie fakty</h3>
                        <div className={styles.factsGrid}>
                            <div className={styles.factCard}>
                                <div className={styles.factNumber}>26+</div>
                                <div className={styles.factLabel}>Lat doświadczenia</div>
                            </div>
                            <div className={styles.factCard}>
                                <div className={styles.factNumber}>500+</div>
                                <div className={styles.factLabel}>Obsługiwanych hoteli</div>
                            </div>
                            <div className={styles.factCard}>
                                <div className={styles.factNumber}>98%</div>
                                <div className={styles.factLabel}>Zadowolonych klientów</div>
                            </div>
                            <div className={styles.factCard}>
                                <div className={styles.factNumber}>270+</div>
                                <div className={styles.factLabel}>Produktów w ofercie</div>
                            </div>
                            <div className={styles.factCard}>
                                <div className={styles.factNumber}>48h</div>
                                <div className={styles.factLabel}>Czas dostawy</div>
                            </div>
                            <div className={styles.factCard}>
                                <div className={styles.factNumber}>100%</div>
                                <div className={styles.factLabel}>Polski kapitał</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Partners Section */}
                <section className={styles.section}>
                    <div className={styles.container}>
                        <div className={styles.partnersIntro}>
                            <div className={styles.partnersLeft}>
                                <span className={styles.sectionLabel}>
                                    <span className={styles.labelDot}></span>
                                    Nasi partnerzy
                                </span>
                                <h2 className={styles.partnersTitle}>
                                    Wspierani przez najlepszych
                                </h2>
                            </div>
                            <div className={styles.partnersRight}>
                                <p>
                                    Jesteśmy dumni ze współpracy z wiodącymi markami branży —
                                    razem tworzymy rozwiązania, które napędzają sukces hoteli w całej Polsce.
                                </p>
                            </div>
                        </div>
                        <div className={styles.partnersLogos}>
                            <div className={styles.partnerLogo}>
                                <Image
                                    src="/logos/unilever-new.webp"
                                    alt="Partner Unilever"
                                    width={160}
                                    height={80}
                                    className={styles.partnerImg}
                                />
                            </div>
                            <div className={styles.partnerLogo}>
                                <Image
                                    src="/logos/selpak.webp"
                                    alt="Partner Selpak Professional"
                                    width={140}
                                    height={70}
                                    className={styles.partnerImg}
                                />
                            </div>
                            <div className={styles.partnerLogo}>
                                <Image
                                    src="/logos/unilever.webp"
                                    alt="Partner Unilever"
                                    width={80}
                                    height={80}
                                    className={styles.partnerImg}
                                />
                            </div>
                            <div className={styles.partnerLogo}>
                                <Image
                                    src="/logos/york.webp"
                                    alt="Partner NetHoreca"
                                    width={140}
                                    height={70}
                                    className={styles.partnerImg}
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Leadership Section */}
                <section className={styles.section}>
                    <div className={styles.container}>
                        <div className={styles.leadershipIntro}>
                            <div className={styles.leadershipLeft}>
                                <span className={styles.sectionLabel}>
                                    <span className={styles.labelDot}></span>
                                    Nasz zespół
                                </span>
                                <h2 className={styles.leadershipTitle}>
                                    Przewodzimy z sercem,<br />
                                    budujemy z celem
                                </h2>
                            </div>
                            <div className={styles.leadershipRight}>
                                <p>
                                    Nasz zespół łączy bogate doświadczenie w branży hotelarskiej,
                                    wiedzę techniczną i pasję do pomagania. Działamy z otwartością
                                    — gdzie każdy głos jest słyszany, a każda idea jest wartościowa.
                                </p>
                                <Link href="/kontakt" className={styles.mediaButton}>
                                    Skontaktuj się →
                                </Link>
                            </div>
                        </div>

                        <div className={styles.teamGrid}>
                            {teamMembers.map((member, index) => (
                                <div key={index} className={styles.teamCard}>
                                    <div className={styles.teamCardInner}>
                                        <div className={styles.teamPhoto}>
                                            {member.photo ? (
                                                <Image
                                                    src={member.photo}
                                                    alt={member.name}
                                                    fill
                                                    style={{ objectFit: 'cover' }}
                                                />
                                            ) : (
                                                <div className={styles.photoPlaceholder}></div>
                                            )}
                                        </div>
                                        {member.linkedin && (
                                            <a href={member.linkedin} className={styles.linkedinIcon} target="_blank" rel="noopener noreferrer">
                                                <LogoLinkedin size={20} />
                                            </a>
                                        )}
                                    </div>
                                    <h4 className={styles.teamName}>{member.name}</h4>
                                    <p className={styles.teamRole}>{member.position}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* How We Work */}
                <section className={styles.workSection}>
                    <div className={styles.container}>
                        <div className={styles.workGrid}>
                            <div className={styles.workContent}>
                                <span className={styles.sectionLabelLight}>
                                    <span className={styles.labelDotLight}></span>
                                    Jak działamy
                                </span>
                                <h2 className={styles.workTitle}>
                                    Partnerstwo,<br />nie tylko sprzedaż
                                </h2>
                                <p className={styles.workText}>
                                    NetHoreca to nie hurtownia. To partner, który rozumie Twój hotel.
                                </p>
                                <p className={styles.workText}>
                                    Oznacza to indywidualne doradztwo, szkolenia dla personelu,
                                    elastyczne warunki współpracy i wsparcie, kiedy go potrzebujesz.
                                </p>
                                <Link href="/kontakt" className={styles.workButton}>
                                    Porozmawiajmy →
                                </Link>
                            </div>
                            <div className={styles.workImage}>
                                <Image
                                    src="/about/zespol-nethoreca-eksperci.webp"
                                    alt="Zespół NetHoreca"
                                    width={400}
                                    height={350}
                                    className={styles.workImg}
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Yellow CTA Banner */}
                <section className={styles.yellowCta}>
                    <div className={styles.container}>
                        <h2 className={styles.yellowCtaTitle}>
                            Razem rozwijajmy hotelarstwo.<br />
                            Razem.
                        </h2>
                        <p className={styles.yellowCtaText}>
                            NetHoreca współpracuje z hotelarzami, którzy chcą robić rzeczy inaczej.
                            Od pierwszego zamówienia po pełne partnerstwo — jesteśmy z Tobą na każdym kroku.
                        </p>
                        <Link href="/zapytanie-ofertowe" className={styles.yellowCtaButton}>
                            Zapytaj o ofertę →
                        </Link>
                    </div>
                </section>

                {/* Certifications */}
                <section className={styles.section}>
                    <div className={styles.container}>
                        <span className={styles.sectionLabel}>
                            <span className={styles.labelDot}></span>
                            Certyfikaty
                        </span>
                        <h2 className={styles.partnersTitle}>
                            Oficjalny Partner Ecolab od 2010
                        </h2>
                        <p className={styles.partnersText}>
                            Jako certyfikowany partner Ecolab — światowego lidera rozwiązań higienicznych —
                            oferujemy pełną gamę profesjonalnej chemii wraz z szkoleniami i wsparciem technicznym.
                        </p>

                        <div className={styles.certGrid}>
                            {companyInfo.certifications.map((cert, index) => (
                                <div key={index} className={styles.certCard}>
                                    <div className={styles.certYear}>{cert.year}</div>
                                    <h4>{cert.name}</h4>
                                    <p>{cert.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Press/Contact Section */}
                <section className={styles.pressSection}>
                    <div className={styles.container}>
                        <div className={styles.pressGrid}>
                            <div className={styles.pressLeft}>
                                <h3 className={styles.pressTitle}>Zapytania prasowe</h3>
                            </div>
                            <div className={styles.pressRight}>
                                <p>
                                    Chętnie współpracujemy z dziennikarzami. Jeśli chcesz się z nami skontaktować,
                                    wyślij email na <a href="mailto:biuro@nethoreca.pl">biuro@nethoreca.pl</a>.
                                    W pozostałych sprawach skorzystaj z <Link href="/kontakt">formularza kontaktowego</Link>.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
