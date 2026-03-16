import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import ProductCard from '@/components/ProductCard';
import ReferenceSection from '@/components/sections/ReferenceSection';
import TeamContactCTA from '@/components/shared/TeamContactCTA';
import { teamMembers } from '@/lib/trust-signals';
import styles from '../page.module.css';
import { createPageMetadata } from '@/lib/seo-metadata';

export const metadata: Metadata = createPageMetadata({
    title: 'Wózki Hotelowe Mobilette - Vario FLEXX, Healthguard | NetHoreca',
    description: 'Profesjonalne wózki hotelowe Mobilette: Vario FLEXX (modułowy), Vario fiXX, Healthguard (dezynfekcja). Ciche koła, ergonomia, estetyczny design. Zamów demo!',
    path: '/sprzet-akcesoria/wozki',
    keywords: ['wózki hotelowe Mobilette', 'wózki serwisowe', 'wózek housekeeping', 'Vario FLEXX Mobilette', 'wózki do sprzątania hotel'],
});

export default function TrolleysPage() {
    const products = [
        // BASIC LINE - PERFEKT
        {
            title: 'Wózek Perfekt Duo',
            description: 'Podstawowy wózek do mycia posadzek. Dwa wiadra 18L (niebieskie/czerwone), prasa pionowa, skrętne koła 75mm.',
            imageSrc: '/products/wozek-serwisowy-hotelowy-mobilette.webp',
            features: ['2x 18L', 'Prasa', 'Podstawowy'],
            href: '/produkty/perfekt-duo',
            category: 'Perfekt'
        },
        {
            title: 'Wózek Uniwersalny',
            description: 'Kompaktowy wózek serwisowy. Wiadro 18L, 2x wiaderka 6L, kuweta, uchwyt na worek 70L. Wszystko co niezbędne w małym hotelu.',
            imageSrc: '/products/wozek-serwisowy-hotelowy-mobilette.webp',
            features: ['Kompaktowy', 'Worek 70L', 'Wszechstronny'],
            href: '/produkty/wozek-uniwersalny',
            category: 'Perfekt'
        },

        // ADVANCED LINE - MOBILETTE PERFEKT
        {
            title: 'Mobilette Perfekt Hygiene',
            description: 'Specjalistyczny wózek do dezynfekcji. Wanna dezynfekcyjna 45L, 4 wiadra 6L kodowane kolorami, 2 worki 70L.',
            imageSrc: '/products/wozek-serwisowy-hotelowy-mobilette.webp',
            features: ['Dezynfekcja', 'Kodowanie kolorami', 'Higiena'],
            href: '/produkty/mobilette-hygiene',
            category: 'Mobilette'
        },
        {
            title: 'Mobilette Parat',
            description: 'Kompletny wózek serwisowy. Prasa, 2x wiadro 15L, 2x wiadro 6L, 2x worek 70L. Dedykowany do profesjonalnego housekeepingu.',
            imageSrc: '/products/wozek-serwisowy-hotelowy-mobilette.webp',
            features: ['Kompletny system', 'Duża pojemność', 'Ergonomia'],
            href: '/produkty/mobilette-parat',
            category: 'Mobilette'
        },

        // MODULAR LINE - VARIO FLEXX
        {
            title: 'Vario FLEXX Universal',
            description: 'Nowoczesny wózek modułowy. Zamknięta konstrukcja, estetyczny wygląd (Grey/Blue). W pełni konfigurowalny.',
            imageSrc: '/products/wozek-serwisowy-hotelowy-mobilette.webp',
            features: ['Modułowy', 'Design', 'Konfigurowalny'],
            href: '/produkty/vario-flexx-universal',
            category: 'Vario FLEXX'
        },
        {
            title: 'Vario FLEXX Hygiene',
            description: 'Modułowy wózek w wersji higienicznej. Szuflady na mopy wstępnie przygotowane. Separacja stref czystej i brudnej.',
            imageSrc: '/products/wozek-serwisowy-hotelowy-mobilette.webp',
            features: ['System kuwetowy', 'Wstępne namaczanie', 'Premium'],
            href: '/produkty/vario-flexx-hygiene',
            category: 'Vario FLEXX'
        },

        // MEDICAL/HIGH HYGIENE - HEALTHGUARD
        {
            title: 'Healthguard Large',
            description: 'Wózek o podwyższonym standardzie sanitarnym. Antybakteryjne tworzywo, zamykane strefy, pełna higiena.',
            imageSrc: '/products/wozek-serwisowy-hotelowy-mobilette.webp',
            features: ['Antybakteryjny', 'Zamykany', 'Szpitalny standard'],
            href: '/produkty/healthguard',
            category: 'Healthguard'
        },

        // LAUNDRY TRANSPORT
        {
            title: 'Wózek na bieliznę Typ X',
            description: 'Lekki stelaż składany z workiem 120L na brudną bieliznę. Niezastąpiony przy zbiórce pościeli.',
            imageSrc: '/products/wozek-serwisowy-hotelowy-mobilette.webp',
            features: ['Składany', 'Worek 120L', 'Lekki'],
            href: '/produkty/wozek-x',
            category: 'Transport'
        }
    ];

    return (
        <main>
            <PageHeader
                title="Wózki Hotelowe"
                subtitle="Logistyka Pięter"
                description="Wózki, które ułatwiają ciężką pracę pokojowych. Ergonomiczne, ciche i estetyczne - nie zaburzają spokoju gości i pasują do wnętrz hotelowych. Oferujemy modele modułowe z możliwością konfiguracji."
                parentHref="/sprzet-akcesoria"
                parentLabel="Wróć do Sprzętu"
            />

            <section className={styles.section}>
                <div className="container">
                    <div className={styles.grid}>
                        {products.map((product, index) => (
                            <ProductCard
                                key={index}
                                title={product.title}
                                description={product.description}
                                imageSrc={product.imageSrc}
                                features={product.features}
                                href={product.href}
                                category={product.category}
                                actionLabel="Zobacz szczegóły"
                            />
                        ))}
                    </div>
                    <ReferenceSection />
                </div>
            </section>

            <TeamContactCTA
                member={teamMembers[2]}
                title="Get in touch"
                description="Zastanawiasz się, który wózek serwisowy będzie najbardziej ergonomiczny dla Twojego personelu? Marek Nowak doradzi Ci w wyborze i konfiguracji zestawu Mobilette."
            />

            {/* CTA Section */}
        </main>
    );
}
