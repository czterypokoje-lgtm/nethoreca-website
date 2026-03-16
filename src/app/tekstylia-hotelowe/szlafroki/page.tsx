import type { Metadata } from 'next';
import BathrobesHero from '@/components/bathrobes/BathrobesHero';
import BathrobesCollections from '@/components/bathrobes/BathrobesCollections';
import BathrobeFitGuide from '@/components/bathrobes/BathrobeFitGuide';
import BathrobesSpecs from '@/components/bathrobes/BathrobesSpecs';
import ProductCTA from '@/components/shared/ProductCTA';
import ProductFAQ from '@/components/shared/ProductFAQ';
import TrustBar from '@/components/shared/TrustBar';
import ProductSchema from '@/components/shared/ProductSchema';
import TeamContactCTA from '@/components/shared/TeamContactCTA';
import { teamMembers } from '@/lib/trust-signals';
import styles from '@/app/tekstylia-hotelowe/posciel/page.module.css';
import { createPageMetadata } from '@/lib/seo-metadata';

export const metadata: Metadata = createPageMetadata({
    title: 'Szlafroki Hotelowe - Welurowe, Waflowe, Kimono | NetHoreca',
    description: 'Profesjonalne szlafroki obiektowe marki NetHoreca: welurowe (450 g/m²), waflowe, kimono, szalowe. Personalizacja B2B z haftem logo. Wynajem lub zakup. Dostawa 48h!',
    path: '/tekstylia-hotelowe/szlafroki',
    keywords: ['szlafroki hotelowe', 'szlafroki welurowe hotel', 'szlafroki waflowe', 'szlafroki kimono hotel', 'szlafroki z logo hotelu', 'wynajem szlafroków'],
});

const productData = {
    name: "Szlafroki Hotelowe Premium",
    image: "/products/york/szlafrok-sky.jpg",
    description: "Profesjonalne szlafroki obiektowe: welurowe, waflowe, frotte. Gramatura 240-450 g/m²."
};

const bathrobeFaqs = [
    {
        question: "Jaki rozmiar szlafroka wybrać dla hotelu?",
        answer: "Zalecamy rozmiar L/XL jako uniwersalny unisex (pasuje na 90% gości). Dla hoteli premium oferujemy pełną gamę S-XXL. Nasze szlafroki są sanforyzowane - kurczliwość max 3%."
    },
    {
        question: "Czym różni się szlafrok welurowy od waflowego?",
        answer: "Welurowy (450g/m²): profesjonalny, miękki, chłonny - idealny na zimę i hotele 5*. Waflowy (240g/m²): lekki, przewiewny, szybkoschnący - doskonały do SPA i na lato."
    },
    {
        question: "Czy oferujecie haft logo na szlafrokach?",
        answer: "Tak, wykonujemy haft komputerowy logo hotelu na piersi lub plecach. Minimalne zamówienie: 50 szt. Czas realizacji: 14-21 dni. Koszt haftu: od 15 zł/szt."
    },
    {
        question: "Jak prać szlafroki hotelowe?",
        answer: "Szlafroki frotte i welurowe: pranie tunelowe do 60°C, wirowanie max 800 obr/min. Szlafroki waflowe: do 90°C. Wszystkie nadają się do suszenia bębnowego w niskiej temperaturze."
    },
    {
        question: "Jaka jest trwałość szlafroków przy intensywnym użytkowaniu?",
        answer: "Nasze szlafroki wytrzymują 100-150 cykli prania przemysłowego. Przy rotacji 3-4 szlafroki na pokój, żywotność to około 2-3 lata w hotelu."
    },
    {
        question: "Czy można zamówić szlafroki w niestandardowych kolorach?",
        answer: "Tak, realizujemy zamówienia w dowolnych kolorach Pantone przy zamówieniu min. 200 szt. Standardowo oferujemy: biały, kremowy, szary, granatowy."
    }
];

export default function BathrobesPage() {
    return (
        <main className={styles.main}>
            <ProductSchema product={productData} faq={bathrobeFaqs} />
            <BathrobesHero />
            <TrustBar />
            <BathrobesCollections />
            <BathrobeFitGuide />
            <BathrobesSpecs />
            <ProductFAQ faqs={bathrobeFaqs} title="Pytania o Szlafroki Hotelowe" />

            <TeamContactCTA
                member={teamMembers[1]}
                title="Get in touch"
                description="Dobór odpowiednich szlafroków to klucz do komfortu gości SPA. Pomogę Ci wybrać modele, które najlepiej sprawdzą się w Twoim obiekcie."
            />

            <ProductCTA
                productName="Szlafroki Professional?"
                description="Skontaktuj się z nami, aby otrzymać ofertę dopasowaną do potrzeb Twojego hotelu. Odpowiadamy w ciągu 24 godzin."
            />
        </main>
    );
}
