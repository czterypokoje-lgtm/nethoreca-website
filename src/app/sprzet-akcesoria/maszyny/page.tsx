import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import ProductCard from '@/components/ProductCard';
import styles from '../page.module.css';
import { createPageMetadata } from '@/lib/seo-metadata';

export const metadata: Metadata = createPageMetadata({
    title: 'Maszyny Czyszczące dla Hoteli - Szorowarki, Odkurzacze | NetHoreca',
    description: 'Profesjonalne maszyny czyszczące dla hoteli: szorowarki, odkurzacze przemysłowe, ekstrakcyjne. Leasing lub zakup. Serwis i szkolenia. Zamów prezentację!',
    path: '/sprzet-akcesoria/maszyny',
    keywords: ['maszyny czyszczące hotel', 'szorowarki hotelowe', 'odkurzacze przemysłowe hotel', 'maszyny do podłóg'],
});

export default function MachinesPage() {
    const products = [
        // VACUUM CLEANERS
        {
            title: 'Odkurzacz Hotelowy NVP 180',
            description: 'Klasyk Numatic. Cichy, niezawodny odkurzacz do pracy ciągłej. Pojemność 8L, kabel 10m. Idealny do pokoi.',
            imageSrc: '/products/odkurzacz-hotelowy-przemyslowy.webp',
            features: ['Cicha praca', '8L', 'Kabel 10m'],
            href: '/produkty/nvp-180',
            category: 'Odkurzacze'
        },
        {
            title: 'Odkurzacz Plecakowy RSV 130',
            description: 'Wygodny odkurzacz plecakowy do sprzątania w ciągach komunikacyjnych, na schodach i w kinach. Ergonomiczne szelki.',
            imageSrc: '/products/odkurzacz-hotelowy-przemyslowy.webp',
            features: ['Plecakowy', 'Ergonomia', 'Mobilny'],
            href: '/produkty/rsv-130',
            category: 'Odkurzacze'
        },
        {
            title: 'Odkurzacz Piorący GVE 370',
            description: 'Odkurzacz ekstrakcyjny do prania wykładzin i tapicerek (George). Funkcja zbierania wody i prania.',
            imageSrc: '/products/odkurzacz-hotelowy-przemyslowy.webp',
            features: ['Piorący', 'Ekstrakcja', '4-w-1'],
            href: '/produkty/gve-370',
            category: 'Piorące'
        },

        // SCRUBBERS & POLISHERS
        {
            title: 'Automat Szorujący TTB 1840',
            description: 'Kompaktowy automat bateryjny. Mieści się w każdym zakamarku. Idealny do małych recepcji i holi.',
            imageSrc: '/products/odkurzacz-hotelowy-przemyslowy.webp',
            features: ['Bateryjny', 'Kompaktowy', '18L'],
            href: '/produkty/ttb-1840',
            category: 'Automaty'
        },
        {
            title: 'Polerka Jednotarczowa HFM 1515',
            description: 'Maszyna jednotarczowa do szorowania, prania wykładzin i polerowania podłóg. Wolnoobrotowa (150 obr/min).',
            imageSrc: '/products/odkurzacz-hotelowy-przemyslowy.webp',
            features: ['Szorowarka', '450mm', 'Wszechstronna'],
            href: '/produkty/hfm-1515',
            category: 'Polerki'
        },
        {
            title: 'Automat Kablowy TT 4045',
            description: 'Wydajny automat kablowy do średnich powierzchni hotelowych. Szerokość pracy 45cm, zbiorniki 40L.',
            imageSrc: '/products/odkurzacz-hotelowy-przemyslowy.webp',
            features: ['Kablowy', 'Wydajny', '40L'],
            href: '/produkty/tt-4045',
            category: 'Automaty'
        },
        {
            title: 'Polerka Wysokoobrotowa HFX',
            description: 'Polerka do uzyskiwania "efektu lustra" na posadzkach kamiennych i PCV. 1500 obr/min.',
            imageSrc: '/products/odkurzacz-hotelowy-przemyslowy.webp',
            features: ['1500 obr/min', 'Polerowanie', 'Lustrzany połysk'],
            href: '/produkty/hfx',
            category: 'Polerki'
        }
    ];

    return (
        <main>
            <PageHeader
                title="Maszyny Czyszczące"
                subtitle="Numatic & Taski"
                description="Niezawodne maszyny sprzątające to podstawa czystości w dużym obiekcie. Oferujemy kultowe odkurzacze Numatic oraz profesjonalne automaty szorujące, które skrócą czas sprzątania o 50%."
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
                </div>
            </section>
        </main>
    );
}
