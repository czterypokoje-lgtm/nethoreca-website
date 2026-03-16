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
            <div style={{ padding: '6rem 0', background: '#0f172a' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '4rem', alignItems: 'center', padding: '1rem' }}>
                    <div style={{ order: 1 }}>
                        <span style={{ color: '#6dc7b8', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: '1rem' }}>Case Study</span>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: 300, margin: '1rem 0', color: 'white' }}>Hotel Verde Montana 4* Oszczędził 174,000 PLN</h2>
                        <p style={{ fontSize: '1.5rem', color: 'rgba(255,255,255,0.9)', fontStyle: 'light', borderLeft: '3px solid #6dc7b8', paddingLeft: '2rem', margin: '2rem 0' }}>
                            "Przejście na model Nethoreca to najlepsza decyzja operacyjna.
                            Uwolniliśmy przestrzeń po starej pralni na 2 nowe pokoje."
                        </p>
                        <div style={{ marginTop: '1rem', fontWeight: 300, color: 'rgba(255,255,255,0.7)' }}>
                            - Dyrektor Operacyjny, Hotel Verde Montana
                        </div>
                    </div>
                    <div style={{ order: 2, position: 'relative', height: '400px', borderRadius: '24px', overflow: 'hidden' }}>
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
            <section style={{ padding: '6rem 0', background: '#0f172a', textAlign: 'center', color: 'white' }}>
                <h2 style={{ fontSize: '3rem', fontWeight: 300, marginBottom: '2rem', color: 'white' }}>Gotowy na Zmianę?</h2>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
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
