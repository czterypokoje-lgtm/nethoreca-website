import { Metadata } from 'next';
import LaundryHero from '@/components/laundry/LaundryHero';
import HubProcessCycle from '@/components/laundry/HubProcessCycle';
import LaundryServices from '@/components/laundry/LaundryServices';
import RentVsBuyLaundry from '@/components/laundry/RentVsBuyLaundry';
import LaundryCalculator from '@/components/laundry/LaundryCalculator';
import NetworkMap from '@/components/laundry/NetworkMap';
import LaundryPricing from '@/components/laundry/LaundryPricing';
import LaundryFAQ from '@/components/laundry/LaundryFAQ';
import ReferenceSection from '@/components/sections/ReferenceSection';
import TeamContactCTA from '@/components/shared/TeamContactCTA';
import { teamMembers } from '@/lib/trust-signals';
import { createPageMetadata } from '@/lib/seo-metadata';
import styles from './page.module.css';

export const metadata: Metadata = createPageMetadata({
    title: 'Pralnia dla Hoteli - Wynajem Tekstyliów + Pranie + Transport | Model HUB',
    description: 'NetHoreca HUB: sieć 15 pralni przemysłowych w Polsce. Kompleksowa obsługa pralnicza hoteli - wynajem, pranie, transport 24/7. Oszczędność do 35%. Jedna umowa, jeden kontakt. Oblicz oszczędności!',
    path: '/pralnia-dla-hoteli',
    keywords: [
        'pralnia dla hoteli',
        'pralnia hotelowa',
        'wynajem tekstyliów hotelowych',
        'pranie hotelowe',
        'pralnia przemysłowa hotel',
        'outsourcing pralni hotel',
        'koszty pralni hotelowej',
        'NetHoreca HUB',
    ],
});

export default function PralniaPage() {
    return (
        <main>
            <LaundryHero />
            <HubProcessCycle />
            <LaundryServices />
            <RentVsBuyLaundry />
            <LaundryCalculator />
            <NetworkMap />
            <LaundryPricing />
            <ReferenceSection />

            {/* Case Study Section */}
            <div className={styles.caseStudyWrapper}>
                <div className={styles.caseStudyGrid}>
                    <div style={{ order: 1 }}>
                        <span style={{ color: '#6dc7b8', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: '1rem' }}>Case Study</span>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: 300, margin: '1rem 0', color: 'white' }}>Hotel Verde Montana 4* Oszczędził 174,000 PLN</h2>
                        <p className={styles.quote}>
                            "Przejście na model Nethoreca to najlepsza decyzja operacyjna.
                            Uwolniliśmy przestrzeń po starej pralni na 2 nowe pokoje."
                        </p>
                        <div style={{ marginTop: '1rem', fontWeight: 300, color: 'rgba(255,255,255,0.7)' }}>
                            - Dyrektor Operacyjny, Hotel Verde Montana
                        </div>
                    </div>
                    <div className={styles.caseStudyImageWrapper} style={{ order: 2 }}>
                        <img
                            src="/images/case-studies/hotel-verde-montana-case-study.webp"
                            alt="Hotel Verde Montana"
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </div>
                </div>
            </div>

            <TeamContactCTA
                member={teamMembers[3]}
                title="Get in touch"
                description="Zastanawiasz się, ile możesz zaoszczędzić na wynajmie tekstyliów? Przygotuję dla Ciebie kalkulację i plan wdrożenia usługi."
            />

            <LaundryFAQ />

            {/* Final CTA Block */}
            <section className={styles.finalCtaSection}>
                <h2>Gotowy na Zmianę?</h2>
                <div className={styles.ctaButtonGroup}>
                    <a href="#kalkulator" style={{ padding: '1rem 2rem', background: 'white', color: '#0f172a', borderRadius: '8px', fontWeight: 300, textDecoration: 'none' }}>
                        Oblicz Oszczędności
                    </a>
                    <a href="/kontakt" style={{ padding: '1rem 2rem', border: '1px solid white', color: 'white', borderRadius: '8px', fontWeight: 300, textDecoration: 'none' }}>
                        Skontaktuj się
                    </a>
                </div>
            </section>
        </main>
    );
}
