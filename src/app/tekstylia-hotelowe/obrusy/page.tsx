import type { Metadata } from 'next';
import TableLinensHero from '@/components/table-linens/TableLinensHero';
import TableLinensCollections from '@/components/table-linens/TableLinensCollections';
import TableMeasurementGuide from '@/components/table-linens/TableMeasurementGuide';
import TableLinensSpecs from '@/components/table-linens/TableLinensSpecs';
import ProductCTA from '@/components/shared/ProductCTA';
import ProductFAQ from '@/components/shared/ProductFAQ';
import TrustBar from '@/components/shared/TrustBar';
import ProductSchema from '@/components/shared/ProductSchema';
import TeamContactCTA from '@/components/shared/TeamContactCTA';
import { teamMembers } from '@/lib/trust-signals';
import styles from '@/app/tekstylia-hotelowe/posciel/page.module.css';
import { createPageMetadata } from '@/lib/seo-metadata';

export const metadata: Metadata = createPageMetadata({
    title: 'Obrusy Hotelowe i Serwetki - Plamoodporne, Na Wymiar | NetHoreca',
    description: 'Profesjonalne obrusy hotelowe i gastronomiczne marki NetHoreca. Tkaniny plamoodporne, szycie na wymiar, serwetki. Idealne do restauracji i sal bankietowych. Zamów bezpłatne próbki!',
    path: '/tekstylia-hotelowe/obrusy',
    keywords: ['obrusy hotelowe', 'obrusy gastronomiczne', 'obrusy plamoodporne', 'serwetki hotelowe', 'obrusy na wymiar', 'obrusy bankietowe'],
});

const productData = {
    name: "Obrusy Gastronomiczne",
    image: "/products/york/obrus-satyna.jpg",
    description: "Profesjonalne obrusy i serwetki dla restauracji. Satyna, plamoodporne, żakard."
};

const tableLinenFaqs = [
    {
        question: "Jak obliczyć rozmiar obrusu na stół?",
        answer: "Zwis standardowy: 20-30 cm z każdej strony. Dla stołu 80x80 cm zalecamy obrus 140x140 cm. Dla bankietów: zwis 40-50 cm. Oferujemy kalkulator rozmiaru i szycie na wymiar."
    },
    {
        question: "Czym różni się obrus satynowy od plamoodpornego?",
        answer: "Satynowy (50% CO/50% PES): elegancki połysk, łatwe prasowanie, dla restauracji fine dining. Plamoodporny (100% PES): płyny nie wsiąkają, bez prasowania, idealny do ogródków i śniadań."
    },
    {
        question: "Czy obrusy nadają się do prania przemysłowego?",
        answer: "Tak, wszystkie nasze obrusy są przystosowane do prania tunelowego w 60-90°C i maglowania. Obrusy plamoodporne nie wymagają prasowania."
    },
    {
        question: "Czy szyjecie obrusy na niestandardowe wymiary?",
        answer: "Tak, jako producent szyjemy obrusy na dowolny wymiar: prostokątne, kwadratowe, okrągłe, owalne. Minimalne zamówienie: 10 szt. Czas realizacji: 7-14 dni."
    },
    {
        question: "Jakie kolory obrusów są dostępne?",
        answer: "Standardowo: biały, kremowy, szary. Dla zamówień powyżej 100 szt. realizujemy dowolne kolory Pantone. Popularne: bordowy, granatowy, butelkowa zieleń."
    },
    {
        question: "Czy oferujecie skirtingi na stoły bankietowe?",
        answer: "Tak, oferujemy skirtingi z plisą pudełkową, wysokość 75 cm, montaż na rzepy. Szyte na wymiar według obwodu stołu. Idealne na wesela i konferencje."
    }
];

export default function TableLinensPage() {
    return (
        <main className={styles.main}>
            <ProductSchema product={productData} faq={tableLinenFaqs} />
            <TableLinensHero />
            <TrustBar />
            <TableLinensCollections />
            <TableMeasurementGuide />
            <TableLinensSpecs />
            <ProductFAQ faqs={tableLinenFaqs} title="Pytania o Obrusy Gastronomiczne" />

            <TeamContactCTA
                member={teamMembers[1]}
                title="Get in touch"
                description="Obrusy to wizytówka Twojej restauracji. Pomogę Ci dobrać tkaniny, które są nie tylko piękne, ale też łatwe w utrzymaniu i trwałe."
            />

            <ProductCTA
                productName="Obrusy Professional?"
                description="Skontaktuj się z nami, aby otrzymać ofertę dopasowaną do potrzeb Twojej restauracji. Odpowiadamy w ciągu 24 godzin."
            />
        </main>
    );
}
