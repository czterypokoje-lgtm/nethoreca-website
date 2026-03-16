import { Metadata } from 'next';
import LaundryHero from '@/components/laundry/LaundryHero';
import HubProcessCycle from '@/components/laundry/HubProcessCycle';
import LaundryServices from '@/components/laundry/LaundryServices';
import RentVsBuyLaundry from '@/components/laundry/RentVsBuyLaundry';
import LaundryCalculator from '@/components/laundry/LaundryCalculator';
import NetworkMap from '@/components/laundry/NetworkMap';
import LaundryPricing from '@/components/laundry/LaundryPricing';
import LaundryFAQ from '@/components/laundry/LaundryFAQ';
import { cityServiceSchema, breadcrumbSchema } from '@/lib/structured-data';

// City Data Map
const cityData: Record<string, { name: string; capacity: string; hotels: string; partners: number; desc: string }> = {
    'warszawa': {
        name: 'Warszawa',
        capacity: '5,000 kg/dzień',
        hotels: '25 Hoteli',
        partners: 3,
        desc: 'Obsługujemy Śródmieście, Mokotów, Wolę i okolice do 50km. Największa sieć prania w stolicy.'
    },
    'krakow': {
        name: 'Kraków',
        capacity: '3,500 kg/dzień',
        hotels: '18 Hoteli',
        partners: 2,
        desc: 'Specjalizujemy się w obsłudze hoteli boutique na Starym Mieście i Kazimierzu.'
    },
    'gdansk': {
        name: 'Gdańsk',
        capacity: '2,800 kg/dzień',
        hotels: '15 Hoteli',
        partners: 2,
        desc: 'Obsługa Trójmiasta. Gotowi na sezon letni z elastycznym zwiększaniem mocy o 200%.'
    },
    'wroclaw': {
        name: 'Wrocław',
        capacity: '2,200 kg/dzień',
        hotels: '12 Hoteli',
        partners: 1,
        desc: 'Ekologiczne pranie dla biznesowych hoteli we Wrocławiu.'
    },
    'poznan': {
        name: 'Poznań',
        capacity: '1,800 kg/dzień',
        hotels: '10 Hoteli',
        partners: 1,
        desc: 'Szybki serwis dla Targów Poznańskich i okolic.'
    },
    'katowice': {
        name: 'Katowice',
        capacity: '1,500 kg/dzień',
        hotels: '8 Hoteli',
        partners: 1,
        desc: 'Obsługa Aglomeracji Śląskiej z transportem daily.'
    },
    'zakopane': {
        name: 'Zakopane',
        capacity: '1,200 kg/dzień',
        hotels: '20+ Obiektów',
        partners: 1,
        desc: 'Specjalna oferta sezonowa dla pensjonatów i resortów SPA.'
    },
    'lodz': {
        name: 'Łódź',
        capacity: 'Nowe Otwarcie',
        hotels: '5 Hoteli',
        partners: 1,
        desc: 'Rozwijamy sieć w Łodzi. Zapytaj o ofertę promocyjną.'
    }
};

export async function generateStaticParams() {
    return Object.keys(cityData).map((city) => ({
        city: city,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
    const { city: cityKey } = await params;
    const city = cityData[cityKey] || cityData['warszawa'];
    const canonicalUrl = `https://nethoreca.pl/pralnia-dla-hoteli/${cityKey}`;
    return {
        title: `Pralnia dla Hoteli ${city.name} - Wynajem + Pranie + Transport | NetHoreca`,
        description: `Profesjonalna pralnia dla hoteli w ${city.name}. Obsługujemy ${city.hotels}. Model HUB - gwarancja ciągłości 24/7. Wynajem tekstyliów + pranie + transport. Oblicz oszczędności!`,
        alternates: {
            canonical: canonicalUrl,
        },
        openGraph: {
            type: 'website',
            url: canonicalUrl,
            title: `Pralnia dla Hoteli ${city.name} - NetHoreca HUB`,
            description: `Obsługujemy ${city.hotels} w ${city.name}. ${city.desc}`,
            images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
        },
    };
}

export default async function CityPage({ params }: { params: Promise<{ city: string }> }) {
    const { city: cityKey } = await params;
    const city = cityData[cityKey];

    if (!city) {
        return <div style={{ padding: '4rem', textAlign: 'center' }}>
            <h1>Miasto nie znalezione</h1>
            <a href="/pralnia-dla-hoteli" style={{ color: 'blue' }}>Wróć do strony głównej</a>
        </div>;
    }

    const jsonLd = cityServiceSchema(cityKey, city.name);
    const breadcrumbs = breadcrumbSchema([
        { name: 'Strona Główna', url: '/' },
        { name: 'Pralnia dla Hoteli', url: '/pralnia-dla-hoteli' },
        { name: city.name, url: `/pralnia-dla-hoteli/${cityKey}` },
    ]);

    return (
        <main>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
            />
            {/* Customized Hero for City */}
            <section style={{
                background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
                color: 'white',
                padding: '8rem 0 6rem 0',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <h1 style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '1.5rem', position: 'relative' }}>
                    Pralnia dla Hoteli <span style={{ color: '#38bdf8' }}>{city.name}</span>
                </h1>
                <p style={{ fontSize: '1.5rem', color: '#cbd5e1', maxWidth: '800px', margin: '0 auto 2rem auto', position: 'relative' }}>
                    {city.desc}
                </p>
                <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap', position: 'relative' }}>
                    <div style={{ background: 'rgba(255,255,255,0.1)', padding: '1rem 2rem', borderRadius: '12px' }}>
                        <span style={{ display: 'block', fontSize: '0.875rem', color: '#94a3b8' }}>Moc Przerobowa:</span>
                        <strong style={{ fontSize: '1.25rem' }}>{city.capacity}</strong>
                    </div>
                    <div style={{ background: 'rgba(255,255,255,0.1)', padding: '1rem 2rem', borderRadius: '12px' }}>
                        <span style={{ display: 'block', fontSize: '0.875rem', color: '#94a3b8' }}>Partnerzy w Regionie:</span>
                        <strong style={{ fontSize: '1.25rem' }}>{city.partners} Pralnie</strong>
                    </div>
                </div>
            </section>

            <HubProcessCycle />

            {/* Localized Services Intro */}
            <div style={{ padding: '2rem', textAlign: 'center', background: '#f8fafc' }}>
                <h3 style={{ fontSize: '2rem', fontWeight: 800, color: '#0f172a' }}>
                    Kompleksowa Obsługa Pralnicza w {city.name}
                </h3>
            </div>

            <LaundryServices />
            <RentVsBuyLaundry />
            <LaundryCalculator />
            <NetworkMap />
            <LaundryPricing />
            <LaundryFAQ />

            <section style={{ padding: '4rem 0', background: 'white', textAlign: 'center' }}>
                <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '2rem' }}>
                    Szukasz Pralni w Innym Mieście?
                </h2>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                    {Object.keys(cityData).map((c) => (
                        <a key={c} href={`/pralnia-dla-hoteli/${c}`} style={{
                            padding: '0.75rem 1.5rem',
                            background: '#f1f5f9',
                            borderRadius: '8px',
                            textDecoration: 'none',
                            color: '#334155',
                            fontWeight: 600
                        }}>
                            {cityData[c].name}
                        </a>
                    ))}
                </div>
            </section>
        </main>
    );
}
