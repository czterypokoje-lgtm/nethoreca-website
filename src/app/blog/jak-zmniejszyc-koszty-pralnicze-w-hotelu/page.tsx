import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './page.module.css';
import { createPageMetadata } from '@/lib/seo-metadata';
import {
    ArrowLeft,
    Time,
    Share,
    Checkmark
} from '@carbon/icons-react';

export const metadata: Metadata = createPageMetadata({
    title: 'Jak Zmniejszyć Koszty Pralnicze w Hotelu o 30%? | Blog NetHoreca',
    description: 'Praktyczne strategie redukcji kosztów pralni hotelowej: model wynajmu tekstyliów, systemy dozujące Ecobrite, outsourcing pralni. Kalkulator oszczędności.',
    path: '/blog/jak-zmniejszyc-koszty-pralnicze-w-hotelu',
    keywords: ['koszty pralni hotelowej', 'jak zmniejszyć koszty prania hotel', 'outsourcing pralni hotel', 'wynajem tekstyliów oszczędności'],
});

export default function BlogPostPage() {
    return (
        <main className={styles.main}>
            {/* Article Header */}
            <header className={styles.header}>
                <div className={styles.container}>
                    <Link href="/blog" className={styles.backLink}>
                        <ArrowLeft size={16} /> Powrót do bloga
                    </Link>
                    <div className={styles.meta}>
                        <span className={styles.category}>Optymalizacja kosztów</span>
                        <span className={styles.date}>5 lutego 2026</span>
                        <span className={styles.readTime}><Time size={14} /> 5 min czytania</span>
                    </div>
                    <h1>Jak zmniejszyć koszty pralnicze w hotelu o 30%?</h1>
                    <p className={styles.subtitle}>
                        Praktyczne strategie redukcji kosztów pralni hotelowej bez utraty jakości
                    </p>
                </div>
            </header>

            {/* Article Content */}
            <article className={styles.article}>
                <div className={styles.container}>
                    <div className={styles.content}>
                        <p className={styles.lead}>
                            Koszty pralnicze mogą stanowić nawet 15-20% całkowitych kosztów operacyjnych
                            housekeepingu. Dobra wiadomość? Można je znacząco zredukować bez kompromisów
                            w jakości obsługi gości.
                        </p>

                        <h2>1. Model wynajmu tekstyliów</h2>
                        <p>
                            Zamiast prać tekstylia we własnym zakresie, rozważ model wynajmu.
                            Wymiana brudnych na czyste eliminuje koszty pralni, środków piorących
                            i amortyzacji sprzętu.
                        </p>
                        <div className={styles.keyPoint}>
                            <strong>Korzyści modelu wynajmu:</strong>
                            <ul>
                                <li><Checkmark size={14} /> Stała, przewidywalna cena za wymianę</li>
                                <li><Checkmark size={14} /> Brak inwestycji w sprzęt pralniczy</li>
                                <li><Checkmark size={14} /> Gwarantowana jakość tekstyliów</li>
                                <li><Checkmark size={14} /> Elastyczność w sezonie</li>
                            </ul>
                        </div>

                        <h2>2. Systemy dozujące Ecolab</h2>
                        <p>
                            Profesjonalne systemy dozujące automatycznie dostarczają optymalną ilość
                            środków piorących. Eliminują błędy personelu i marnotrawstwo chemii.
                        </p>
                        <p>
                            Seria <strong>ECOBRITE</strong> od Ecolab to sprawdzony system dla pralni
                            hotelowych, który redukuje zużycie środków o 20-30% przy zachowaniu
                            najwyższej jakości prania.
                        </p>

                        <h2>3. Optymalizacja cykli prania</h2>
                        <p>
                            Nie wszystkie tekstylia wymagają tego samego traktowania. Segregacja
                            i dobór odpowiednich programów prania może znacząco obniżyć koszty:
                        </p>
                        <ul>
                            <li>Ręczniki gości: 60°C z dezynfekcją</li>
                            <li>Pościel: 40-60°C w zależności od materiału</li>
                            <li>Obrusy i serwetki: dedykowany program</li>
                        </ul>

                        <h2>4. Inwestycja w trwałe tekstylia</h2>
                        <p>
                            Tekstylia premium, choć droższe na starcie, wytrzymują 200-300 cykli prania
                            bez utraty jakości. Tańsze zamienniki rozpadają się po 50-100 cyklach.
                        </p>

                        <div className={styles.callout}>
                            <h3>Potrzebujesz pomocy?</h3>
                            <p>
                                Nasi eksperci przeprowadzą bezpłatny audyt kosztów pralniczych
                                w Twoim hotelu i zaproponują optymalne rozwiązania.
                            </p>
                            <Link href="/zapytanie-ofertowe" className={styles.ctaButton}>
                                Zamów bezpłatny audyt
                            </Link>
                        </div>

                        <h2>Podsumowanie</h2>
                        <p>
                            Redukcja kosztów pralniczych o 30% jest realna i osiągalna. Kluczem jest
                            połączenie odpowiedniego modelu dostaw (wynajem vs. własność),
                            profesjonalnych systemów dozujących oraz inwestycji w trwałe tekstylia.
                        </p>
                    </div>

                    {/* Sidebar */}
                    <aside className={styles.sidebar}>
                        <div className={styles.authorCard}>
                            <h4>O autorze</h4>
                            <p><strong>Zespół NetHoreca</strong></p>
                            <p>26 lat doświadczenia w branży hotelarskiej</p>
                        </div>

                        <div className={styles.relatedCard}>
                            <h4>Powiązane artykuły</h4>
                            <ul>
                                <li>
                                    <Link href="/blog/eco-hotel-zrownowazona-higiena">
                                        Eco Hotel: Zrównoważona higiena
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/blog/housekeeping-efektywnosc-i-jakosc">
                                        10 sposobów na efektywność housekeepingu
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </aside>
                </div>
            </article>
        </main>
    );
}
