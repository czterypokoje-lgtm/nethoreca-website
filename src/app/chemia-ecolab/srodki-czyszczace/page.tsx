import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import ProductCard from '@/components/ProductCard';
import styles from '../page.module.css';
import { createPageMetadata } from '@/lib/seo-metadata';

export const metadata: Metadata = createPageMetadata({
    title: 'Środki Czyszczące Ecolab - Oasis Pro, Maxx2 | NetHoreca',
    description: 'Profesjonalne środki czyszczące Ecolab do hoteli: Oasis Pro, Maxx2, Brial. Housekeeping, łazienki, podłogi. Systemy dozujące. Szkolenia personelu gratis!',
    path: '/chemia-ecolab/srodki-czyszczace',
    keywords: ['środki czyszczące Ecolab', 'Oasis Pro Ecolab', 'Maxx2 Ecolab', 'chemia housekeeping', 'środki do sprzątania hotel'],
});

export default function CleaningAgentsPage() {
    const products = [
        // HOUSEKEEPING - OASIS PRO SERIES
        {
            title: 'Oasis Pro 14 Premium',
            description: 'Wysoce wydajny, uniwersalny środek czyszczący do wszystkich powierzchni zmywalnych. Idealny do pokoi hotelowych.',
            imageSrc: '/products/srodek-czyszczacy-ecolab-oasis-pro.webp',
            features: ['Uniwersalny', 'Koncentrat', 'Housekeeping'],
            href: '/produkty/oasis-pro-14',
            category: 'Oasis Pro'
        },
        {
            title: 'Oasis Pro 16 Neutral',
            description: 'Neutralny środek myjący, bezpieczny dla delikatnych powierzchni (marmur, granit).',
            imageSrc: '/products/srodek-czyszczacy-ecolab-oasis-pro.webp',
            features: ['pH Neutralne', 'Bezpieczny', 'Marmur/Granit'],
            href: '/produkty/oasis-pro-16',
            category: 'Oasis Pro'
        },
        {
            title: 'Oasis Pro 20 Cleaner-Disinfectant',
            description: 'Środek myjąco-dezynfekujący do powierzchni. Skuteczny przeciwko szerokiemu spektrum drobnoustrojów.',
            imageSrc: '/products/srodek-czyszczacy-ecolab-oasis-pro.webp',
            features: ['Dezynfekcja', 'Mycie', 'Bakteriobójczy'],
            href: '/produkty/oasis-pro-20',
            category: 'Oasis Pro'
        },
        {
            title: 'Oasis Pro 61 Premium',
            description: 'Kwasowy środek do codziennego mycia sanitariatów. Usuwa osady wapienne i mydlane.',
            imageSrc: '/products/srodek-czyszczacy-ecolab-oasis-pro.webp',
            features: ['Sanitariaty', 'Odkamienianie', 'Świeży zapach'],
            href: '/produkty/oasis-pro-61',
            category: 'Oasis Pro'
        },
        {
            title: 'Oasis Pro 62 descale',
            description: 'Silny środek do okresowego odkamieniania łazienek i usuwania trudnych osadów.',
            imageSrc: '/products/srodek-czyszczacy-ecolab-oasis-pro.webp',
            features: ['Silne Odkamienianie', 'Gruntowne Mycie', 'Sanitariaty'],
            href: '/produkty/oasis-pro-62',
            category: 'Oasis Pro'
        },
        {
            title: 'Oasis Pro 48 Glass',
            description: 'Profesjonalny płyn do mycia szyb i luster. Nie pozostawia smug, szybko odparowuje.',
            imageSrc: '/products/srodek-czyszczacy-ecolab-oasis-pro.webp',
            features: ['Szyby/Lustra', 'Bez smug', 'Szybkie schnięcie'],
            href: '/produkty/oasis-pro-48',
            category: 'Oasis Pro'
        },
        {
            title: 'Oasis Pro 72 Odour',
            description: 'Neutralizator nieprzyjemnych zapachów (np. dym tytoniowy). Pozostawia długotrwałą świeżość.',
            imageSrc: '/products/srodek-czyszczacy-ecolab-oasis-pro.webp',
            features: ['Neutralizacja Zapachów', 'Dym Tytoniowy', 'Odświeżanie'],
            href: '/produkty/oasis-pro-72',
            category: 'Oasis Pro'
        },

        // FLOOR CARE - MAXX SERIES
        {
            title: 'MAXX2 Magic',
            description: 'Uniwersalny środek do mycia podłóg o zwiększonej zwilżalności. Nie wymaga spłukiwania.',
            imageSrc: '/products/srodek-czyszczacy-ecolab-oasis-pro.webp',
            features: ['Podłogi', 'Bez spłukiwania', 'Antypoślizgowy'],
            href: '/produkty/maxx2-magic',
            category: 'MAXX2'
        },
        {
            title: 'MAXX2 Indur',
            description: 'Środek do mycia i pielęgnacji podłóg zabezpieczonych polimerami. Czyści i konserwuje jednocześnie.',
            imageSrc: '/products/srodek-czyszczacy-ecolab-oasis-pro.webp',
            features: ['Pielęgnacja', 'Polimery', 'Połysk'],
            href: '/produkty/maxx2-indur',
            category: 'MAXX2'
        },
        {
            title: 'MAXX2 Into',
            description: 'Kwaśny środek do mycia sanitariatów i podłóg ceramicznych. Skutecznie usuwa kamień.',
            imageSrc: '/products/srodek-czyszczacy-ecolab-oasis-pro.webp',
            features: ['Kwaśny', 'Gres/Ceramika', 'Sanitariaty'],
            href: '/produkty/maxx2-into',
            category: 'MAXX2'
        },
        {
            title: 'P3-Topax 66',
            description: 'Profesjonalny preparat do mycia i dezynfekcji posadzek w strefach basenowych i SPA.',
            imageSrc: '/products/srodek-czyszczacy-ecolab-oasis-pro.webp',
            features: ['Baseny', 'Chlorowy', 'Wybielający'],
            href: '/produkty/topax-66',
            category: 'Specjalistyczny'
        },
        {
            title: 'Topshine',
            description: 'Polimerowa powłoka nabłyszczająca do posadzek elastycznych (PCV, linoleum).',
            imageSrc: '/products/srodek-czyszczacy-ecolab-oasis-pro.webp',
            features: ['Polimer', 'Połysk', 'Ochrona'],
            href: '/produkty/topshine',
            category: 'Pielęgnacja'
        },
        {
            title: 'Topstrip',
            description: 'Środek do gruntownego czyszczenia i usuwania starych powłok polimerowych (striper).',
            imageSrc: '/products/srodek-czyszczacy-ecolab-oasis-pro.webp',
            features: ['Striper', 'Gruntowne mycie', 'Usuwanie powłok'],
            href: '/produkty/topstrip',
            category: 'Gruntowne'
        },

        // GLASS & SURFACES
        {
            title: 'Glance NA',
            description: 'Płyn do mycia szyb bez amoniaku. Bezpieczny, nie pozostawia smug. Koncentrat.',
            imageSrc: '/products/srodek-czyszczacy-ecolab-oasis-pro.webp',
            features: ['Bez amoniaku', 'Szyby', 'Koncentrat'],
            href: '/produkty/glance-na',
            category: 'Szyby'
        },
        {
            title: 'Solid Multi Surface',
            description: 'Uniwersalny środek w kostce do mycia powierzchni zmywalnych. System Solid.',
            imageSrc: '/products/srodek-czyszczacy-ecolab-oasis-pro.webp',
            features: ['Kostka', 'Zero Plastic', 'Uniwersalny'],
            href: '/produkty/solid-multi',
            category: 'System Solid'
        },

        // STAINLESS STEEL
        {
            title: 'Oasis Pro 28 Stainless Steel',
            description: 'Specjalistyczny preparat do czyszczenia i konserwacji stali nierdzewnej. Zapobiega palcowaniu.',
            imageSrc: '/products/srodek-czyszczacy-ecolab-oasis-pro.webp',
            features: ['Stal nierdzewna', 'Ochrona', 'Nabłyszczanie'],
            href: '/produkty/oasis-pro-28',
            category: 'Stal'
        },
        {
            title: 'Stainblaster Stainless Steel',
            description: 'Gotowy do użycia preparat do pielęgnacji stali szlachetnej. Idealny do wind i poręczy.',
            imageSrc: '/products/srodek-czyszczacy-ecolab-oasis-pro.webp',
            features: ['Spray', 'Windy', 'Gotowy do użycia'],
            href: '/produkty/stainblaster-stainless',
            category: 'Stal'
        },

        // DISINFECTION & HYGIENE
        {
            title: 'Incidin OxyFoam S',
            description: 'Gotowa do użycia pianka do mycia i dezynfekcji powierzchni (również medycznych).',
            imageSrc: '/products/srodek-czyszczacy-ecolab-oasis-pro.webp',
            features: ['Pianka', 'Medyczna', 'Szybka dezynfekcja'],
            href: '/produkty/incidin-oxy',
            category: 'Dezynfekcja'
        },
        {
            title: 'Incidin Plus',
            description: 'Koncentrat do dezynfekcji powierzchni na bazie glukoprotaminy.',
            imageSrc: '/products/srodek-czyszczacy-ecolab-oasis-pro.webp',
            features: ['Koncentrat', 'Szpitalny', 'Glukoprotamina'],
            href: '/produkty/incidin-plus',
            category: 'Dezynfekcja'
        },
        {
            title: 'Skinman Soft Protect',
            description: 'Płyn do chirurgicznej i higienicznej dezynfekcji rąk. Zawiera składniki pielęgnujące.',
            imageSrc: '/products/srodek-czyszczacy-ecolab-oasis-pro.webp',
            features: ['Do Rąk', 'Pielęgnacja', 'Szpitalna skuteczność'],
            href: '/produkty/skinman',
            category: 'Higiena Rąk'
        }
    ];
    return (
        <main>
            <PageHeader
                title="Utrzymanie Czystości"
                subtitle="Ecolab Housekeeping"
                description="Systemowe rozwiązania dla działu służby pięter. Koncentraty Ecolab to oszczędność kosztów i miejsca w magazynie. Gwarantują najwyższy standard czystości w pokojach hotelowych."
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
