import type { Metadata } from 'next';
import Link from 'next/link';
import styles from '../polityka-prywatnosci/page.module.css';
import { createPageMetadata } from '@/lib/seo-metadata';

export const metadata: Metadata = createPageMetadata({
    title: 'Regulamin | NetHoreca',
    description: 'Regulamin serwisu internetowego NetHoreca. Warunki korzystania ze strony, polityka zamówień i zwrotów.',
    path: '/regulamin',
    keywords: ['regulamin NetHoreca', 'warunki korzystania', 'regulamin serwisu'],
});

export default function TermsPage() {
    return (
        <main className={styles.main}>
            <div className={styles.container}>
                <article className={styles.content}>
                    <header className={styles.header}>
                        <h1>Regulamin</h1>
                        <p className={styles.updated}>Ostatnia aktualizacja: 1 lutego 2026</p>
                    </header>

                    <section>
                        <h2>1. Postanowienia ogólne</h2>
                        <p>
                            Niniejszy Regulamin określa zasady korzystania ze strony internetowej
                            nethoreca.pl oraz warunki świadczenia usług przez NetHoreca Sp. z o.o.
                        </p>
                        <p>
                            Właścicielem strony jest NetHoreca Sp. z o.o. z siedzibą w Warszawie,
                            ul. Przykładowa 123, 00-001 Warszawa, NIP: 1234567890.
                        </p>
                    </section>

                    <section>
                        <h2>2. Definicje</h2>
                        <ul>
                            <li><strong>Sprzedawca</strong> - NetHoreca Sp. z o.o.</li>
                            <li><strong>Klient</strong> - podmiot dokonujący zakupów</li>
                            <li><strong>Zamówienie</strong> - oświadczenie woli Klienta zmierzające do zawarcia umowy</li>
                            <li><strong>Towar</strong> - produkty oferowane przez Sprzedawcę</li>
                        </ul>
                    </section>

                    <section>
                        <h2>3. Składanie zamówień</h2>
                        <p>
                            Zamówienia można składać poprzez formularz kontaktowy na stronie,
                            email, telefon lub bezpośrednio u opiekuna klienta.
                        </p>
                        <p>
                            Złożenie zamówienia stanowi ofertę zawarcia umowy sprzedaży.
                            Umowa zostaje zawarta w momencie potwierdzenia przyjęcia zamówienia
                            przez Sprzedawcę.
                        </p>
                    </section>

                    <section>
                        <h2>4. Ceny i płatności</h2>
                        <p>
                            Wszystkie ceny podane na stronie są cenami netto (bez VAT),
                            wyrażonymi w polskich złotych.
                        </p>
                        <p>Akceptowane formy płatności:</p>
                        <ul>
                            <li>Przelew bankowy</li>
                            <li>Płatność przy odbiorze (dla zamówień do 5000 PLN)</li>
                            <li>Kredyt kupiecki (dla stałych klientów)</li>
                        </ul>
                    </section>

                    <section>
                        <h2>5. Dostawa</h2>
                        <p>
                            Dostawa realizowana jest na terenie całej Polski. Standardowy czas
                            dostawy wynosi 48 godzin roboczych od momentu potwierdzenia zamówienia.
                        </p>
                        <p>
                            Koszty dostawy zależą od wartości zamówienia i lokalizacji.
                            Przy zamówieniach powyżej 2000 PLN netto dostawa jest bezpłatna.
                        </p>
                    </section>

                    <section>
                        <h2>6. Reklamacje i zwroty</h2>
                        <p>
                            Reklamacje należy zgłaszać w ciągu 7 dni od daty dostawy na adres
                            <a href="mailto:reklamacje@nethoreca.pl"> reklamacje@nethoreca.pl</a>.
                        </p>
                        <p>
                            Zwrot nieużywanego towaru w oryginalnym opakowaniu możliwy jest
                            w ciągu 14 dni od daty dostawy. Koszty zwrotu ponosi Klient.
                        </p>
                    </section>

                    <section>
                        <h2>7. Odpowiedzialność</h2>
                        <p>
                            Sprzedawca odpowiada za wady fizyczne i prawne dostarczonych towarów
                            zgodnie z przepisami Kodeksu cywilnego.
                        </p>
                        <p>
                            Odpowiedzialność Sprzedawcy ograniczona jest do wartości zamówienia,
                            chyba że szkoda powstała z winy umyślnej.
                        </p>
                    </section>

                    <section>
                        <h2>8. Ochrona danych osobowych</h2>
                        <p>
                            Zasady przetwarzania danych osobowych określa
                            <Link href="/polityka-prywatnosci"> Polityka Prywatności</Link>.
                        </p>
                    </section>

                    <section>
                        <h2>9. Postanowienia końcowe</h2>
                        <p>
                            W sprawach nieuregulowanych niniejszym Regulaminem zastosowanie
                            mają przepisy prawa polskiego, w szczególności Kodeksu cywilnego.
                        </p>
                        <p>
                            Sprzedawca zastrzega sobie prawo do zmiany Regulaminu. Zmiany
                            wchodzą w życie z dniem publikacji na stronie.
                        </p>
                    </section>

                    <footer className={styles.footer}>
                        <Link href="/kontakt">Kontakt</Link>
                        <Link href="/polityka-prywatnosci">Polityka Prywatności</Link>
                    </footer>
                </article>
            </div>
        </main>
    );
}
