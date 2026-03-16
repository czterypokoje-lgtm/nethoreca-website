import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import ProductCard from '@/components/ProductCard';
import styles from '../page.module.css';
import { createPageMetadata } from '@/lib/seo-metadata';

export const metadata: Metadata = createPageMetadata({
    title: 'Pielęgnacja Tkanin Ecolab - Ecobrite, Systemy Pralnicze | NetHoreca',
    description: 'Profesjonalne systemy pralnicze Ecolab: Ecobrite do pralni hotelowych. Optymalizacja kosztów prania, ochrona tkanin, dozowanie. Audyty i szkolenia.',
    path: '/chemia-ecolab/pielegnacja-tkanin',
    keywords: ['pielęgnacja tkanin Ecolab', 'Ecobrite Ecolab', 'chemia do pralni hotelowej', 'systemy pralnicze profesjonalne', 'pranie hotelowe chemia'],
});

export default function LaundryPage() {
    const products = [
        // ECOBRITE SYSTEM
        {
            title: 'Ecobrite Magic',
            description: 'Skoncentrowany płynny środek piorący. Doskonale usuwa brud w każdej twardości wody. System Ecobrite.',
            imageSrc: '/products/system-dozujacy-chemie-ecolab.webp',
            features: ['Płynny', 'Koncentrat', 'Wszystkie twardości'],
            href: '/produkty/ecobrite-magic',
            category: 'Ecobrite'
        },
        {
            title: 'Ecobrite Booster',
            description: 'Zasadowy wzmacniacz prania. Podnosi pH kąpieli piorącej, ułatwiając usuwanie tłustych zabrudzeń.',
            imageSrc: '/products/system-dozujacy-chemie-ecolab.webp',
            features: ['Alkaliczny', 'Wzmacniacz', 'Tłuste plamy'],
            href: '/produkty/ecobrite-booster',
            category: 'Ecobrite'
        },
        {
            title: 'Ecobrite Delicate',
            description: 'Płyn do prania tkanin delikatnych (wełna, jedwab) i kolorowych. Chroni włókna i kolory.',
            imageSrc: '/products/system-dozujacy-chemie-ecolab.webp',
            features: ['Delikatne tkaniny', 'Ochrona koloru', 'Wełna/Jedwab'],
            href: '/produkty/ecobrite-delicate',
            category: 'Ecobrite'
        },

        // BLEACHING & DISINFECTION
        {
            title: 'Ecobrite Oxy',
            description: 'Tlenowy środek wybielający i dezynfekujący. Skuteczny już w 40°C. Bezpieczny dla większości tkanin kolorowych.',
            imageSrc: '/products/system-dozujacy-chemie-ecolab.webp',
            features: ['Tlenowy', 'Dezynfekcja 40°C', 'Bezpieczny'],
            href: '/produkty/ecobrite-oxy',
            category: 'Wybielanie'
        },
        {
            title: 'Ecobrite Des',
            description: 'Środek na bazie kwasu nadoctowego do chemiczno-termicznej dezynfekcji prania. Certyfikat RKI.',
            imageSrc: '/products/system-dozujacy-chemie-ecolab.webp',
            features: ['Kwas nadoctowy', 'Dezynfekcja', 'RKI'],
            href: '/produkty/ecobrite-des',
            category: 'Wybielanie'
        },
        {
            title: 'Ecobrite Blue',
            description: 'Chlorowy środek wybielający. Tylko do białej bawełny. Silne działanie wybielające i dezynfekujące.',
            imageSrc: '/products/system-dozujacy-chemie-ecolab.webp',
            features: ['Chlorowy', 'Tylko białe', 'Silny'],
            href: '/produkty/ecobrite-blue',
            category: 'Wybielanie'
        },

        // FABRIC CARE / SOFTENERS
        {
            title: 'Soft Care Fabric',
            description: 'Profesjonalny płyn do płukania tkanin. Nadaje miękkość, zapobiega elektryzowaniu, ułatwia maglowanie.',
            imageSrc: '/products/system-dozujacy-chemie-ecolab.webp',
            features: ['Zmiękczanie', 'Antystatyczny', 'Łatwe prasowanie'],
            href: '/produkty/soft-care-fabric',
            category: 'Pielęgnacja'
        },
        {
            title: 'Lavender Fresh',
            description: 'Płyn zmiękczający o długotrwałym zapachu lawendy. Pozostawia świeżość na długo po praniu.',
            imageSrc: '/products/system-dozujacy-chemie-ecolab.webp',
            features: ['Zapach Lawendy', 'Świeżość', 'Zmiękczanie'],
            href: '/produkty/lavender-fresh',
            category: 'Pielęgnacja'
        },

        // STAIN REMOVAL
        {
            title: 'StainBlaster Multi Purpose',
            description: 'Uniwersalny odplamiacz w sprayu. Usuwa plamy z makijażu, tłuszczu, jedzenia. Do stosowania przed praniem.',
            imageSrc: '/products/system-dozujacy-chemie-ecolab.webp',
            features: ['Uniwersalny', 'Spray', 'Makijaż/Tłuszcz'],
            href: '/produkty/stainblaster-multi',
            category: 'Odplamiacze'
        },
        {
            title: 'StainBlaster Rust Remover',
            description: 'Specjalistyczny odplamiacz do usuwania rdzy i plam metalicznych z tkanin.',
            imageSrc: '/products/system-dozujacy-chemie-ecolab.webp',
            features: ['Rdza', 'Specjalistyczny', 'Mocny'],
            href: '/produkty/stainblaster-rust',
            category: 'Odplamiacze'
        },
        {
            title: 'StainBlaster Enzymatic',
            description: 'Enzymatyczny odplamiacz do plam białkowych (krew, jedzenie, trawa). Niezbędny w pralni hotelowej.',
            imageSrc: '/products/system-dozujacy-chemie-ecolab.webp',
            features: ['Enzymy', 'Białko/Krew', 'Skuteczny'],
            href: '/produkty/stainblaster-enzymatic',
            category: 'Odplamiacze'
        }
    ];

    return (
        <main>
            <PageHeader
                title="Pralnia Hotelowa"
                subtitle="System Ecobrite"
                description="Kompleksowe rozwiązania dla pralni hotelowych. System Ecobrite gwarantuje śnieżną biel, ochronę tkanin i dezynfekcję. Profesjonalne odplamiacze StainBlaster radzą sobie z każdym zabrudzeniem hotelowym."
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
