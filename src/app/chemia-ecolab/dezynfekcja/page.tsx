import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import ProductCard from '@/components/ProductCard';
import styles from '../page.module.css';
import { createPageMetadata } from '@/lib/seo-metadata';

export const metadata: Metadata = createPageMetadata({
    title: 'Dezynfekcja Hotelowa Ecolab - Skinman, Incidin | NetHoreca',
    description: 'Profesjonalna dezynfekcja Ecolab dla hoteli: Skinman (higiena rąk), Incidin (powierzchnie), P3-Alcodes. Zgodność z normami EN. Dozowniki i szkolenia.',
    path: '/chemia-ecolab/dezynfekcja',
    keywords: ['dezynfekcja hotelowa', 'Skinman Ecolab', 'Incidin Ecolab', 'dezynfekcja rąk hotel', 'środki dezynfekujące profesjonalne'],
});

export default function DisinfectionPage() {
    const products = [
        // SURFACE DISINFECTION
        {
            title: 'Incidin OxyFoam S',
            description: 'Gotowa do użycia pianka do mycia i dezynfekcji powierzchni. Działa w 3 minuty. Skuteczna przeciwko wirusom otoczkowym.',
            imageSrc: '/products/akcesoria-do-sprzatania-housekeeping.webp',
            features: ['Pianka', 'Powierzchnie medyczne', 'Szybkie działanie'],
            href: '/produkty/incidin-oxy-foam',
            category: 'Powierzchnie'
        },
        {
            title: 'Incidin Pro',
            description: 'Skoncentrowany preparat do dezynfekcji dużych powierzchni. Bez aldehydów. Przyjemny zapach.',
            imageSrc: '/products/akcesoria-do-sprzatania-housekeeping.webp',
            features: ['Koncentrat', 'Bez aldehydów', 'Podłogi'],
            href: '/produkty/incidin-pro',
            category: 'Powierzchnie'
        },
        {
            title: 'Incidin Plus',
            description: 'Preparat do mycia i dezynfekcji powierzchni na bazie glukoprotaminy. Silne działanie bakteriobójcze.',
            imageSrc: '/products/akcesoria-do-sprzatania-housekeeping.webp',
            features: ['Glukoprotamina', 'Silny', 'Szpitalny'],
            href: '/produkty/incidin-plus',
            category: 'Powierzchnie'
        },
        {
            title: 'DrySan Oxy',
            description: 'Środek do szybkiej dezynfekcji bez spłukiwania. Idealny do gastronomii i powierzchni mających kontakt z żywnością.',
            imageSrc: '/products/akcesoria-do-sprzatania-housekeeping.webp',
            features: ['Bez spłukiwania', 'Gastronomia', 'HACCP'],
            href: '/produkty/drysan-oxy',
            category: 'Gastronomia'
        },

        // HAND DISINFECTION
        {
            title: 'Skinman Soft Protect',
            description: 'Płyn do chirurgicznej dezynfekcji rąk z witaminą E, gliceryną i pantenolem. Pielęgnuje skórę przy częstym stosowaniu.',
            imageSrc: '/products/akcesoria-do-sprzatania-housekeeping.webp',
            features: ['Witamina E', 'Chirurgiczna', 'Pielęgnacja'],
            href: '/produkty/skinman-protect',
            category: 'Ręce'
        },
        {
            title: 'Skinman Soft N',
            description: 'Klasyczny preparat do dezynfekcji rąk. Skuteczny i sprawdzony. Łagodny dla skóry.',
            imageSrc: '/products/akcesoria-do-sprzatania-housekeeping.webp',
            features: ['Klasyczny', 'Skuteczny', 'Łagodny'],
            href: '/produkty/skinman-soft',
            category: 'Ręce'
        },
        {
            title: 'Manodes',
            description: 'Mydło dezynfekujące do rąk. Myje i dezynfekuje w jednym kroku. Idealne do kuchni hotelowej.',
            imageSrc: '/products/akcesoria-do-sprzatania-housekeeping.webp',
            features: ['Mydło+Dezynfekcja', 'Kuchnia', 'HACCP'],
            href: '/produkty/manodes',
            category: 'Ręce'
        },

        // TOOLS/INSTRUMENTS
        {
            title: 'Sekusept Aktiv',
            description: 'Proszek do mycia i dezynfekcji narzędzi (również medycznych i kosmetycznych). Pełne spektrum wirusobójcze.',
            imageSrc: '/products/akcesoria-do-sprzatania-housekeeping.webp',
            features: ['Proszek', 'Narzędzia SPA', 'Pełne spektrum'],
            href: '/produkty/sekusept',
            category: 'Narzędzia'
        }
    ];

    return (
        <main>
            <PageHeader
                title="Dezynfekcja Profesjonalna"
                subtitle="Ecolab Healthcare"
                description="Rozwiązania dezynfekcyjne klasy medycznej dla hoteli. Produkty Incidin i Skinman gwarantują najwyższy poziom bezpieczeństwa mikrobiologicznego dla Twoich gości i personelu, spełniając najnowsze normy europejskie."
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
