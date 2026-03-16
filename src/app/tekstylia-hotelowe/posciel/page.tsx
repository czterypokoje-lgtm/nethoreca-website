import type { Metadata } from 'next';
import HeroSection from '@/components/bedding/HeroSection';
import CostCalculator from '@/components/bedding/CostCalculator';
import SizeGuide from '@/components/bedding/SizeGuide';
import MaterialComparison from '@/components/bedding/MaterialComparison';
import RentVsBuyComparison from '@/components/bedding/RentVsBuyComparison';
import ProductCollections from '@/components/bedding/ProductCollections';
import TechnicalSpecs from '@/components/bedding/TechnicalSpecs';
import CaseStudy from '@/components/bedding/CaseStudy';
import Certifications from '@/components/bedding/Certifications';
import BeddingFAQ from '@/components/bedding/BeddingFAQ';
import FinalCTA from '@/components/bedding/FinalCTA';
import TeamContactCTA from '@/components/shared/TeamContactCTA';
import { teamMembers } from '@/lib/trust-signals';
import styles from './page.module.css';
import { createPageMetadata } from '@/lib/seo-metadata';

export const metadata: Metadata = createPageMetadata({
    title: 'Pościel Hotelowa Premium - Satyna, Splot Paskowy | NetHoreca',
    description: 'Ekskluzywna pościel hotelowa marki NetHoreca. Satyna bawełniana, splot paskowy, gramatura 200-300 TC. Wynajem lub zakup. Haft logo hotelu. Dostawa 48h w całej Polsce!',
    path: '/tekstylia-hotelowe/posciel',
    keywords: ['pościel hotelowa', 'pościel satynowa dla hoteli', 'pościel splot paskowy', 'wynajem pościeli hotelowej', 'pościel bawełniana premium', 'personalizacja pościeli logo'],
});

export default function BeddingPage() {
    return (
        <main className={styles.main}>
            <HeroSection />
            <CostCalculator />
            <SizeGuide />
            <MaterialComparison />
            <RentVsBuyComparison />
            <ProductCollections />
            <TechnicalSpecs />
            <CaseStudy />
            <Certifications />
            <BeddingFAQ />
            <TeamContactCTA
                member={teamMembers[1]}
                title="Get in touch"
                description="Masz wątpliwości dotyczące doboru splotu lub rozmiarów pościeli? Anna Kowalska pomoże Ci skompletować idealny zestaw dla Twojego obiektu."
            />
            <FinalCTA />
        </main>
    );
}
