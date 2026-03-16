import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './page.module.css';
import { createPageMetadata } from '@/lib/seo-metadata';

export const metadata: Metadata = createPageMetadata({
    title: 'Polityka Prywatności | NetHoreca',
    description: 'Polityka prywatności NetHoreca Sp. z o.o. Informacja o przetwarzaniu danych osobowych zgodnie z RODO. Prawa użytkowników i pliki cookies.',
    path: '/polityka-prywatnosci',
    keywords: ['polityka prywatności NetHoreca', 'RODO NetHoreca', 'ochrona danych osobowych'],
});

export default function PrivacyPolicyPage() {
    return (
        <main className={styles.main}>
            <div className={styles.container}>
                <article className={styles.content}>
                    <header className={styles.header}>
                        <h1>Polityka Prywatności</h1>
                        <p className={styles.updated}>Ostatnia aktualizacja: 1 lutego 2026</p>
                    </header>

                    <section>
                        <h2>1. Administrator danych</h2>
                        <p>
                            Administratorem Twoich danych osobowych jest NetHoreca Sp. z o.o.
                            z siedzibą w Warszawie, ul. Przykładowa 123, 00-001 Warszawa,
                            NIP: 1234567890, KRS: 0000123456.
                        </p>
                        <p>
                            Kontakt z Inspektorem Ochrony Danych: <a href="mailto:iod@nethoreca.pl">iod@nethoreca.pl</a>
                        </p>
                    </section>

                    <section>
                        <h2>2. Jakie dane zbieramy</h2>
                        <p>Zbieramy następujące kategorie danych:</p>
                        <ul>
                            <li><strong>Dane kontaktowe:</strong> imię, nazwisko, email, telefon</li>
                            <li><strong>Dane firmowe:</strong> nazwa firmy, NIP, adres</li>
                            <li><strong>Dane dotyczące zamówień:</strong> historia zamówień, preferencje</li>
                            <li><strong>Dane techniczne:</strong> adres IP, cookies, dane analityczne</li>
                        </ul>
                    </section>

                    <section>
                        <h2>3. Cele przetwarzania</h2>
                        <p>Twoje dane przetwarzamy w celu:</p>
                        <ul>
                            <li>Realizacji zamówień i umów (art. 6 ust. 1 lit. b RODO)</li>
                            <li>Obsługi zapytań i korespondencji (art. 6 ust. 1 lit. f RODO)</li>
                            <li>Marketingu bezpośredniego (art. 6 ust. 1 lit. a lub f RODO)</li>
                            <li>Wypełnienia obowiązków prawnych (art. 6 ust. 1 lit. c RODO)</li>
                            <li>Analiz statystycznych i ulepszania usług (art. 6 ust. 1 lit. f RODO)</li>
                        </ul>
                    </section>

                    <section>
                        <h2>4. Okres przechowywania</h2>
                        <p>
                            Dane przechowujemy przez okres niezbędny do realizacji celów, dla
                            których zostały zebrane, a następnie przez okres wymagany przepisami
                            prawa (np. dokumentacja księgowa - 5 lat).
                        </p>
                    </section>

                    <section>
                        <h2>5. Twoje prawa</h2>
                        <p>Przysługują Ci następujące prawa:</p>
                        <ul>
                            <li>Prawo dostępu do danych</li>
                            <li>Prawo do sprostowania danych</li>
                            <li>Prawo do usunięcia danych ("prawo do bycia zapomnianym")</li>
                            <li>Prawo do ograniczenia przetwarzania</li>
                            <li>Prawo do przenoszenia danych</li>
                            <li>Prawo do sprzeciwu</li>
                            <li>Prawo do cofnięcia zgody w dowolnym momencie</li>
                            <li>Prawo do wniesienia skargi do PUODO</li>
                        </ul>
                    </section>

                    <section>
                        <h2>6. Cookies</h2>
                        <p>
                            Nasza strona wykorzystuje pliki cookies w celu zapewnienia prawidłowego
                            działania, analizy ruchu i personalizacji treści. Możesz zarządzać
                            ustawieniami cookies w swojej przeglądarce.
                        </p>
                        <p>Rodzaje wykorzystywanych cookies:</p>
                        <ul>
                            <li><strong>Niezbędne:</strong> wymagane do działania strony</li>
                            <li><strong>Analityczne:</strong> Google Analytics (anonimowe statystyki)</li>
                            <li><strong>Marketingowe:</strong> za Twoją zgodą</li>
                        </ul>
                    </section>

                    <section>
                        <h2>7. Bezpieczeństwo</h2>
                        <p>
                            Stosujemy odpowiednie środki techniczne i organizacyjne w celu ochrony
                            Twoich danych przed nieuprawnionym dostępem, utratą lub zniszczeniem.
                            Strona zabezpieczona jest certyfikatem SSL.
                        </p>
                    </section>

                    <section>
                        <h2>8. Kontakt</h2>
                        <p>
                            W sprawach związanych z ochroną danych osobowych możesz skontaktować
                            się z nami:
                        </p>
                        <ul>
                            <li>Email: <a href="mailto:iod@nethoreca.pl">iod@nethoreca.pl</a></li>
                            <li>Adres: NetHoreca Sp. z o.o., ul. Przykładowa 123, 00-001 Warszawa</li>
                        </ul>
                    </section>

                    <footer className={styles.footer}>
                        <Link href="/kontakt">Kontakt</Link>
                        <Link href="/regulamin">Regulamin</Link>
                    </footer>
                </article>
            </div>
        </main>
    );
}
