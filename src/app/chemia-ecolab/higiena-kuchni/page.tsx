import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import ProductCard from '@/components/ProductCard';
import styles from '../page.module.css';
import { createPageMetadata } from '@/lib/seo-metadata';

export const metadata: Metadata = createPageMetadata({
    title: 'Higiena Kuchni HACCP - Apex Ecolab, Zmywanie | NetHoreca',
    description: 'Systemy HACCP Ecolab dla kuchni hotelowych: Apex (bloki do zmywarek), Topax (czyszczenie), Cosa. Audyty higieniczne, szkolenia i dokumentacja.',
    path: '/chemia-ecolab/higiena-kuchni',
    keywords: ['higiena kuchni HACCP', 'Apex Ecolab', 'bloki do zmywarek hotelowych', 'HACCP hotel', 'czyszczenie kuchni profesjonalne'],
});

export default function KitchenHygienePage() {
    const products = [
        // DISHWASHING
        {
            title: 'Solid Brilliant',
            description: 'Skoncentrowany środek do maszynowego mycia naczyń w kostkach. Zapewnia lśniące naczynia i ochronę szkła. System zamknięty = bezpieczeństwo.',
            imageSrc: '/products/chemia-ecolab-zmywarka-apex.webp',
            features: ['Nabłyszczanie', 'Kostki 4.5kg', 'Bezpieczny'],
            href: '/produkty/solid-brilliant',
            category: 'Zmywarki'
        },
        {
            title: 'Solid Power XL',
            description: 'Silnie skoncentrowany detergent do mycia naczyń w wodzie twardej i średniej. Usuwa uporczywe zabrudzenia skrobiowe.',
            imageSrc: '/products/chemia-ecolab-zmywarka-apex.webp',
            features: ['Woda Twarda', 'Silny', 'Wydajny'],
            href: '/produkty/solid-power',
            category: 'Zmywarki'
        },
        {
            title: 'Apex Rinse',
            description: 'Nabłyszczacz do zmywarek w postaci stałej. Przyspiesza schnięcie, zapobiega zaciekom. 100% wykorzystania produktu.',
            imageSrc: '/products/chemia-ecolab-zmywarka-apex.webp',
            features: ['Nabłyszczanie', 'System Apex', 'Ekologiczny'],
            href: '/produkty/apex-rinse',
            category: 'Zmywarki'
        },

        // KITCHEN CLEANING & DEGREASING
        {
            title: 'Grease Express Fast Foam',
            description: 'Szybko działająca pianka do odtłuszczania gorących powierzchni (grille, piece). Działa już w 60 sekund.',
            imageSrc: '/products/chemia-ecolab-zmywarka-apex.webp',
            features: ['Gorące powierzchnie', 'Szybkie działanie', 'Odtłuszczacz'],
            href: '/produkty/grease-express',
            category: 'Grille i Piece'
        },
        {
            title: 'Lime-A-Way Extra',
            description: 'Profesjonalny odkamieniacz do sprzętów kuchennych (zmywarki, bemary, ekspresy). Skutecznie usuwa osady wapienne.',
            imageSrc: '/products/chemia-ecolab-zmywarka-apex.webp',
            features: ['Odkamienianie', 'Sprzęt', 'Usuwanie osadów'],
            href: '/produkty/lime-a-way',
            category: 'Odkamienianie'
        },

        // SURFACE DISINFECTION
        {
            title: 'Oasis Pro 20 Cleaner',
            description: 'Środek myjąco-dezynfekujący do powierzchni kuchennych. Zgodny z normami EN. Bezpieczny w kontakcie z żywnością.',
            imageSrc: '/products/chemia-ecolab-zmywarka-apex.webp',
            features: ['Dezynfekcja', 'HACCP', 'Mycie'],
            href: '/produkty/oasis-pro-20',
            category: 'Dezynfekcja'
        },
        {
            title: 'Mikro-Quat Classic',
            description: 'Płynny preparat myjąco-dezynfekujący. Szerokie spektrum działania, ekonomiczny w użyciu.',
            imageSrc: '/products/chemia-ecolab-zmywarka-apex.webp',
            features: ['Ekonomiczny', 'HACCP', 'Szerokie spektrum'],
            href: '/produkty/mikro-quat',
            category: 'Dezynfekcja'
        }
    ];

    return (
        <main>
            <PageHeader
                title="Higiena Kuchni (HACCP)"
                subtitle="Ecolab Kitchen"
                description="Kompleksowe rozwiązania dla gastronomii hotelowej. Systemy dozowania (Solid, Apex) gwarantują kontrolę kosztów, bezpieczeństwo personelu i idealną czystość naczyń. Produkty zgodne z rygorystycznymi normami HACCP."
                parentHref="/chemia-ecolab"
                parentLabel="Wróć do Ecolab"
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
                </div>
            </section>
        </main>
    );
}
