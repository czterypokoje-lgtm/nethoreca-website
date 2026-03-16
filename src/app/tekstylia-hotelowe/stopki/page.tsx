import type { Metadata } from 'next';
import BathMatsHero from '@/components/bath-mats/BathMatsHero';
import BathMatsCollections from '@/components/bath-mats/BathMatsCollections';
import BathMatsSpecs from '@/components/bath-mats/BathMatsSpecs';
import BathMatPlacementGuide from '@/components/bath-mats/BathMatPlacementGuide';
import ProductCTA from '@/components/shared/ProductCTA';
import ProductFAQ from '@/components/shared/ProductFAQ';
import TrustBar from '@/components/shared/TrustBar';
import ProductSchema from '@/components/shared/ProductSchema';
import TeamContactCTA from '@/components/shared/TeamContactCTA';
import { teamMembers } from '@/lib/trust-signals';
import styles from '@/app/tekstylia-hotelowe/posciel/page.module.css';
import { createPageMetadata } from '@/lib/seo-metadata';

export const metadata: Metadata = createPageMetadata({
    title: 'Stopki Łazienkowe Hotelowe - Antypoślizgowe, Premium | NetHoreca',
    description: 'Grube stopki łazienkowe hotelowe do 700 g/m². Antypoślizgowe, 100% bawełna. Idealne do łazienek hotelowych i SPA. Wynajem lub zakup. Dostawa 48h!',
    path: '/tekstylia-hotelowe/stopki',
    keywords: ['stopki łazienkowe hotelowe', 'dywaniki łazienkowe hotel', 'stopki antypoślizgowe', 'maty łazienkowe hotelowe', 'stopki bawełniane 700g'],
});

const productData = {
    name: "Stopki Hotelowe Premium",
    image: "/products/york/stopka-rosa-70x50-kol-01-white-500g%2Fm2.jpg",
    description: "Grube stopki hotelowe frotte o gramaturze do 700g/m2."
};

const bathMatFaqs = [
    {
        question: "Jaka gramatura stopki jest najlepsza dla hotelu?",
        answer: "Zalecamy minimum 500 g/m² dla standardu ekonomicznego i 650-700 g/m² dla obiektów premium. Wyższa gramatura = większa chłonność i stabilność."
    },
    {
        question: "Czy stopki są antypoślizgowe?",
        answer: "Nasze stopki mają wysoką przyczepność dzięki ciężkiej gramaturze i gęstemu splotowi. Nie posiadają gumowego podkładu (dla możliwości prania w 90°C), ale ich waga zapobiega przesuwaniu się."
    },
    {
        question: "Jak często wymieniać stopki w hotelu?",
        answer: "Stopka powinna być wymieniana przy każdym sprzątaniu pokoju (stayover) oraz obowiązkowo przy wymianie gości (checkout). Zalecamy rotację 3-4 stopki na pokój."
    },
    {
        question: "Czy stopki nadają się do prania w 90°C?",
        answer: "Tak, wszystkie nasze stopki są przystosowane do prania tunelowego w temperaturze do 90°C, co gwarantuje pełną dezynfekcję i sterylność dla każdego nowego gościa."
    },
    {
        question: "Jaka jest żywotność stopek hotelowych?",
        answer: "Przy prawidłowym praniu (90°C, wirowanie max 800 obr/min), nasze stopki wytrzymują 200-250 cykli prania, co przekłada się na około 2-3 lata użytkowania."
    },
    {
        question: "Czy oferujecie stopki w kolorach?",
        answer: "Standardowo: biały, beżowy, szary. Dla zamówień powyżej 100 szt. realizujemy dowolne kolory. Popularne w SPA: grafit, antracyt, ciemny brąz."
    }
];

export default function BathMatsPage() {
    return (
        <main className={styles.main}>
            <ProductSchema product={productData} faq={bathMatFaqs} />
            <BathMatsHero />
            <TrustBar />
            <BathMatsCollections />
            <BathMatPlacementGuide />
            <BathMatsSpecs />
            <ProductFAQ faqs={bathMatFaqs} title="Pytania o Stopki Hotelowe" />

            <TeamContactCTA
                member={teamMembers[1]}
                title="Get in touch"
                description="Stopki łazienkowe to kluczowy element bezpieczeństwa i higieny. Doradzę Ci gramaturę, która zapewni gościom komfort i wytrzyma setki prań."
            />

            <ProductCTA
                productName="Stopki Professional?"
                description="Skontaktuj się z nami, aby otrzymać ofertę dopasowaną do potrzeb Twojego hotelu. Odpowiadamy w ciągu 24 godzin."
            />
        </main>
    );
}
