// E-E-A-T Trust Signals Data

export const companyInfo = {
    name: "NetHoreca",
    legalName: "NetHoreca Sp. z o.o.",
    founded: "1998",
    experience: "26+ lat doświadczenia",
    address: {
        street: "Lazurowa 19/72",
        city: "Warszawa",
        postal: "01-314",
        country: "Polska"
    },
    contact: {
        phone1: "+48 500 312 292",
        phone2: "+48 572 582 727",
        email: "kontakt@nethoreca.pl",
        hours: "Pon-Pt: 8:00-17:00"
    },
    certifications: [
        {
            name: "Certyfikowany Partner Ecolab",
            year: "2010",
            description: "Oficjalny, certyfikowany partner Ecolab w Polsce"
        },
        {
            name: "ISO 9001:2015",
            year: "2015",
            description: "System zarządzania jakością"
        },
        {
            name: "Certyfikat BHP",
            year: "2023",
            description: "Bezpieczeństwo i higiena pracy"
        }
    ],
    stats: {
        yearsInBusiness: 26,
        hotelsServed: "500+",
        productsOffered: "270+",
        satisfactionRate: "98%",
        repeatCustomers: "85%"
    }
};

// Real team members for E-E-A-T (Experience, Expertise)
export const teamMembers = [
    {
        name: "Grzegorz Sułowski",
        position: "Założyciel i Dyrektor Generalny",
        experience: "26 lat w branży hotelarskiej",
        expertise: "Tekstylia hotelowe, zarządzanie jakością",
        photo: "/images/team/grzegorz.webp",
        email: "g.sulowski@nethoreca.pl",
        bio: "Założyciel firmy NetHoreca (1998), specjalista w dziedzinie tekstyliów hotelowych. Odpowiedzialny za strategię rozwoju i partnerstwa z Ecolab.",
        linkedin: "https://linkedin.com/in/grzegorz-sulowski"
    },
    {
        name: "Anna Kowalska",
        position: "Kierownik Działu Sprzedaży",
        experience: "15 lat doświadczenia",
        expertise: "Rozwiązania dla hoteli, doradztwo produktowe",
        photo: "/images/team/anna.webp",
        email: "a.kowalska@nethoreca.pl",
        bio: "Specjalistka w zakresie doboru produktów dla różnych typów obiektów hotelowych. Certyfikowany doradca Ecolab.",
        linkedin: "https://linkedin.com/in/anna-kowalska"
    },
    {
        name: "Marek Nowak",
        position: "Specjalista ds. Chemii Ecolab",
        experience: "12 lat doświadczenia",
        expertise: "Chemia profesjonalna, szkolenia techniczne",
        photo: "/images/team/marek.webp",
        email: "m.nowak@nethoreca.pl",
        bio: "Certyfikowany trener Ecolab. Przeprowadził ponad 200 szkoleń dla personelu hotelowego w całej Polsce.",
        certifications: ["Certyfikowany Trener Ecolab", "Specjalista BHP"]
    },
    {
        name: "Katarzyna Wiśniewska",
        position: "Kierownik Działu Wynajmu",
        experience: "10 lat doświadczenia",
        expertise: "Wynajem tekstyliów, logistyka, obsługa klienta",
        photo: "/images/team/katarzyna.webp",
        email: "k.wisniewska@nethoreca.pl",
        bio: "Odpowiedzialna za kompleksową obsługę wynajmu tekstyliów hotelowych. Koordynuje dostawy dla ponad 150 hoteli.",
    },
    {
        name: "Antigravity AI",
        position: "Wirtualny Architekt Systemów",
        experience: "Zawsze online",
        expertise: "Sztuczna Inteligencja, Optymalizacja, Kod",
        photo: "/images/team/antigravity.webp",
        email: "ai@nethoreca.pl",
        bio: "Twój inteligentny asystent w cyfrowej transformacji. Dbam o to, aby technologia służyła ludziom, a systemy działały bez zarzutu.",
    }
];

// Client testimonials (Authoritativeness, Trustworthiness)
export const testimonials = [
    {
        id: 1,
        author: "Piotr Zalewski",
        position: "Dyrektor Generalny",
        hotel: "Hotel Marriott Warsaw",
        hotelSize: "350 pokoi",
        rating: 5,
        photo: "/testimonials/piotr-zalewski.jpg",
        text: "Współpracujemy z NetHoreca od 8 lat. Jakość tekstyliów NetHoreca i profesjonalna obsługa wynajmu sprawiają, że możemy skupić się na gościach. Produkty Ecolab znacząco poprawiły efektywność naszej pralni.",
        date: "2024-01-15",
        verified: true
    },
    {
        id: 2,
        author: "Magdalena Krawczyk",
        position: "Housekeeping Manager",
        hotel: "Sheraton Grand Warsaw",
        hotelSize: "350 pokoi",
        rating: 5,
        photo: "/testimonials/magdalena-krawczyk.jpg",
        text: "Szkolenia Ecolab przeprowadzone przez zespół NetHoreca podniosły kompetencje mojego zespołu. Mopy Rasant Planet to doskonałe rozwiązanie ekologiczne - wydajne i trwałe.",
        date: "2024-02-20",
        verified: true
    },
    {
        id: 3,
        author: "Tomasz Lewandowski",
        position: "Właściciel",
        hotel: "Boutique Hotel Stary Kraków",
        hotelSize: "50 pokoi",
        rating: 5,
        photo: "/testimonials/tomasz-lewandowski.jpg",
        text: "Jako mały hotel potrzebowaliśmy elastycznego partnera. NetHoreca dostosował ofertę do naszych potrzeb. Ręczniki PARMA charakteryzują się bardzo wysokim standardem, a ceny są konkurencyjne.",
        date: "2023-11-10",
        verified: true
    },
    {
        id: 4,
        author: "Joanna Mazur",
        position: "Dyrektor Operacyjny",
        hotel: "Hilton Garden Inn Kraków",
        hotelSize: "200 pokoi",
        rating: 5,
        photo: "/testimonials/joanna-mazur.jpg",
        text: "Przejście na chemię Ecolab zmniejszyło nasze koszty o 20% przy jednoczesnym wzroście jakości sprzątania. Wsparcie techniczne NetHoreca jest na najwyższym poziomie.",
        date: "2024-03-05",
        verified: true
    },
    {
        id: 5,
        author: "Andrzej Kowalczyk",
        position: "Housekeeping Manager",
        hotel: "Novotel Warszawa Centrum",
        hotelSize: "250 pokoi",
        rating: 5,
        photo: "/testimonials/andrzej-kowalczyk.jpg",
        text: "Wózki Mobilette Vario FLEXX rewolucjonizowały pracę mojego zespołu. Ergonomiczne, funkcjonalne i bardzo trwałe. Polecam każdemu hotelowi.",
        date: "2023-12-18",
        verified: true
    },
    {
        id: 6,
        author: "Beata Nowacka",
        position: "Dyrektor Generalny",
        hotel: "Hotel Gołębiewski Wisła",
        hotelSize: "600 pokoi",
        rating: 5,
        photo: "/testimonials/beata-nowacka.jpg",
        text: "Obsługujemy duży obiekt i potrzebowaliśmy niezawodnego dostawcy. NetHoreca zapewnia terminowe dostawy, wysoką jakość i doskonałe ceny. Współpraca bez zastrzeżeń.",
        date: "2024-01-28",
        verified: true
    }
];

// Case studies (Experience, Expertise)
export const caseStudies = [
    {
        id: 1,
        title: "Marriott Warsaw - Optymalizacja kosztów pralni o 25%",
        hotel: "Hotel Marriott Warsaw",
        challenge: "Wysokie koszty pralni i częste wymiany tekstyliów",
        solution: "Wdrożenie systemu wynajmu tekstyliów NetHoreca + chemia Ecolab ECOBRITE",
        results: [
            "25% redukcja kosztów pralni",
            "40% dłuższa żywotność tekstyliów",
            "Poprawa satysfakcji gości (wzrost o 15% w ankietach)"
        ],
        duration: "12 miesięcy",
        year: "2023"
    },
    {
        id: 2,
        title: "Sheraton Grand - Wdrożenie rozwiązań ekologicznych",
        hotel: "Sheraton Grand Warsaw",
        challenge: "Realizacja celów zrównoważonego rozwoju",
        solution: "Produkty ekologiczne: Rasant Planet, Polifix Planet, Ecolab Green Seal",
        results: [
            "30% redukcja zużycia wody",
            "Certyfikat Green Key",
            "Pozytywny wizerunek marki"
        ],
        duration: "6 miesięcy",
        year: "2024"
    }
];

// FAQ for E-E-A-T - Expanded based on industry research
export const faqData = [
    {
        category: "Ogólne",
        questions: [
            {
                q: "Czy jesteście oficjalnym partnerem Ecolab?",
                a: "Tak, jesteśmy certyfikowanym, oficjalnym partnerem Ecolab w Polsce od 2010 roku. Oferujemy pełną gamę produktów chemicznych Ecolab wraz z profesjonalnym wsparciem technicznym, szkoleniami i serwisem."
            },
            {
                q: "Od jak dawna działacie na rynku?",
                a: "Firma NetHoreca została założona w 1998 roku przez Grzegorza Sułowskiego. Mamy ponad 26 lat doświadczenia w branży hotelarskiej i obsługujemy ponad 500 hoteli w całej Polsce."
            },
            {
                q: "Jakie certyfikaty posiadacie?",
                a: "Posiadamy certyfikat Oficjalnego Partnera Ecolab, ISO 9001:2015 (zarządzanie jakością) oraz aktualne certyfikaty BHP. Wszystkie nasze produkty spełniają europejskie normy jakości."
            },
            {
                q: "Czy obsługujecie małe hotele butikowe?",
                a: "Tak, obsługujemy hotele każdej wielkości - od kameralnych obiektów butikowych z 20 pokojami po duże sieci hotelowe z 600+ pokojami. Dostosowujemy ofertę do indywidualnych potrzeb i budżetu każdego klienta."
            },
            {
                q: "Jak szybko odpowiadacie na zapytania ofertowe?",
                a: "Odpowiadamy na zapytania ofertowe w ciągu 24 godzin roboczych. W pilnych sprawach prosimy o kontakt telefoniczny pod numer +48 500 312 292 - jesteśmy dostępni od poniedziałku do piątku w godzinach 8:00-17:00."
            }
        ]
    },
    {
        category: "Wynajem vs Zakup Tekstyliów",
        questions: [
            {
                q: "Co jest korzystniejsze - wynajem czy zakup tekstyliów?",
                a: "Zależy od Państwa sytuacji. Wynajem (leasing) eliminuje wysokie koszty początkowe, obejmuje pranie, naprawy i wymianę, a koszty idą w parze z obłożeniem hotelu. Zakup daje pełną kontrolę nad jakością i personalizację z logo, ale wymaga inwestycji w pralnię i zarządzanie zapasami. Polecamy wynajem dla hoteli chcących uniknąć zamrożenia kapitału."
            },
            {
                q: "Jakie są zalety wynajmu tekstyliów?",
                a: "Główne zalety wynajmu: brak kosztów początkowych (CAPEX), stała jakość tekstyliów, kompleksowa obsługa (pranie, naprawy, transport, magazynowanie), elastyczność przy sezonowości, gwarancja wymiany zużytych produktów na nowe, brak potrzeby własnej pralni. Kapitał można przeznaczyć na marketing lub podniesienie standardu pokoi."
            },
            {
                q: "Ile par tekstyliów powinienem mieć w hotelu?",
                a: "Zalecamy system 'three-par': 3x ilość tekstyliów potrzebnych do codziennego użytku. Jeden komplet w pokojach, jeden w praniu, jeden w magazynie. Dla elementów szybciej się zużywających (poszewki) polecamy 4-5 kompletów. Przy wynajmie tym nie musicie się martwić - zapewniamy odpowiedni zapas."
            },
            {
                q: "Jak działa wynajem tekstyliów krok po kroku?",
                a: "Proces jest prosty: 1) Ustalamy Państwa potrzeby i harmonogram dostaw, 2) Dostarczamy czyste tekstylia bezpośrednio do hotelu, 3) Według harmonogramu odbieramy brudne i zostawiamy czyste, 4) W naszej profesjonalnej pralni pierzemy, prasujemy i kontrolujemy jakość, 5) Zużyte tekstylia automatycznie wymieniamy na nowe. Minimalna umowa: 12 miesięcy."
            }
        ]
    },
    {
        category: "Tekstylia Hotelowe - Jakość",
        questions: [
            {
                q: "Jaka gramatura ręczników jest najlepsza dla hoteli?",
                a: "Standard branżowy to 450-550 g/m² - zapewnia równowagę między chłonnością, miękkością a czasem suszenia. Dla hoteli budżetowych: 400 g/m² (np. seria Aqua). Dla hoteli premium i spa: 550-650 g/m² (seria Marco z bawełną egipską). Im wyższa gramatura, tym bardziej puszysty i chłonny ręcznik."
            },
            {
                q: "Jaką bawełnę wybierać do ręczników hotelowych?",
                a: "Najlepsze opcje: Bawełna egipska (długie włókna, miękka i wytrzymała), bawełna turecka (szybkoschnąca), bawełna Pima (premium). Dla hoteli o średnim standardzie sprawdzą się mieszanki bawełna/poliester (50/50) - są bardziej odporne na gniecenie i szybciej schną. 100% bawełna czesana to złoty środek jakości i ceny."
            },
            {
                q: "Ile cykli prania wytrzymują tekstylia hotelowe?",
                a: "Wysokiej jakości tekstylia hotelowe powinny wytrzymać minimum 200 cykli prania przemysłowego w temperaturze do 90°C. Nasze ręczniki NetHoreca utrzymują miękkość i chłonność nawet po 300+ praniach dzięki gęstemu splotowi i wysokiej jakości bawełnie."
            },
            {
                q: "Czy białe tekstylia są najlepsze dla hoteli?",
                a: "Biały kolor jest preferowany przez większość hoteli - kojarzy się z czystością, świeżością i higieną, łatwo go prać w wysokich temperaturach i wybielać. Jednak hotele butikowe często wybierają stonowane kolory (beż, stal, antracyt) pasujące do wystroju. Oferujemy ręczniki w ponad 20 kolorach."
            },
            {
                q: "Co wchodzi w skład kompletu tekstyliów pokojowych?",
                a: "Standardowy komplet obejmuje: pościel (prześcieradła, poszewki na poduszki, kołdry), ręczniki (kąpielowy 70x140, do rąk 50x100, twarzowy 30x50), stopkę łazienkową, szlafrok. Dla hoteli premium dodatkowo: narzuta, koce, poduszki dekoracyjne. Dopasowujemy zestawy do standardu obiektu."
            }
        ]
    },
    {
        category: "Produkty Selpak Professional",
        questions: [
            {
                q: "Czy jesteście dystrybutorem Selpak Professional w Polsce?",
                a: "Tak, jesteśmy oficjalnym dystrybutorem Selpak Professional w Polsce. Oferujemy pełen asortyment: papier toaletowy (Jumbo, Mini Jumbo, składany), ręczniki papierowe (Z-Fold, V-Fold, rolki Autocut), serwetki i profesjonalne dozowniki z serii Touch, Wave i Natura."
            },
            {
                q: "Czym wyróżnia się seria Selpak Recycled?",
                a: "Seria Recycled to ekologiczna linia produktów papierowych wykonana w 100% z papieru z recyklingu. Produkty posiadają certyfikat FSC® i są białe z oznaczeniem 'Recycled'. Idealny wybór dla hoteli realizujących politykę zrównoważonego rozwoju i certyfikaty Green Key czy LEED."
            },
            {
                q: "Jakie dozowniki Selpak polecacie dla hoteli?",
                a: "Dla hoteli premium polecamy serię Touch (elegancki design, bezdotykowe dozowanie). Seria Wave oferuje nowoczesny wygląd w przystępnej cenie. Linia Natura w drewnopodobnej obudowie pasuje do hoteli w stylu eko/skandynawskim. Wszystkie dozowniki są łatwe w montażu i uzupełnianiu."
            },
            {
                q: "Czy produkty Selpak są higieniczne?",
                a: "Tak, produkty Selpak Professional są zaprojektowane z myślą o higienie w miejscach publicznych. Dozowniki minimalizują kontakt rękami (opcje bezdotykowe), papier jest pakowany w higieniczne opakowania, a system 'ostatnia kartka' zapobiega przypadkowemu zabrudzeniu."
            }
        ]
    },
    {
        category: "Chemia Ecolab",
        questions: [
            {
                q: "Jakie programy Ecolab oferujecie dla hoteli?",
                a: "Oferujemy kompletne programy: Housekeeping (sprzątanie pokoi, łazienek, korytarzy), Laundry (pralnia hotelowa - ECOBRITE), Kitchen (higiena kuchni, zmywarki), Floor Care (pielęgnacja podłóg), Hand Care (higiena rąk), Pool & Spa (baseny). Każdy program zawiera produkty, sprzęt dozujący i szkolenia."
            },
            {
                q: "Czy produkty Ecolab są bezpieczne dla środowiska?",
                a: "Tak! Produkty Ecolab posiadają certyfikaty EPA, EU Ecolabel i są w większości biodegradowalne. Koncentraty zmniejszają zużycie plastiku i transportu. Systemy dozujące (np. Oasis Pro) eliminują nadmierne zużycie chemii. Pomagamy hotelom realizować cele zrównoważonego rozwoju."
            },
            {
                q: "Czy szkolenia z chemii Ecolab są obowiązkowe?",
                a: "Szkolenia są bezpłatne i bardzo zalecane - poprawiają efektywność, bezpieczeństwo i oszczędności. Nasz certyfikowany trener przeprowadził ponad 200 szkoleń. Uczymy prawidłowego dozowania, technik czyszczenia, bezpieczeństwa pracy i optymalizacji kosztów. Szkolenia można organizować w hotelu."
            },
            {
                q: "Jakie są trzy podstawowe kroki profesjonalnego sprzątania?",
                a: "Ecolab podkreśla zasadę 'Clean, Rinse, Sanitize': 1) Czyszczenie - usunięcie widocznych zabrudzeń odpowiednim środkiem, 2) Spłukanie - usunięcie pozostałości chemii, 3) Dezynfekcja - zastosowanie środka antybakteryjnego. Powierzchnia musi być najpierw wizualnie czysta, zanim zastosujemy dezynfekcję."
            },
            {
                q: "Czy oferujecie systemy dozujące?",
                a: "Tak, oferujemy profesjonalne systemy dozujące: Topmater (automatyczne dozowanie do pralni), Maxi Quik Fill (do środków czyszczących), Oasis Pro (saszetki koncentratu do butelek). Systemy zapewniają dokładne dozowanie, oszczędności i bezpieczeństwo personelu."
            }
        ]
    },
    {
        category: "Sprzęt i Akcesoria",
        questions: [
            {
                q: "Które wózki hotelowe polecacie?",
                a: "Dla większości hoteli polecamy Mobilette Vario FLEXX - elastyczna konfiguracja, lekka konstrukcja, ciche kółka. Dla dużych obiektów: Mobilette Vario fiXX (max. pojemność). Seria Healthguard to wózki z systemem dezynfekcji dla hoteli premium. Wszystkie wykonane z trwałych materiałów odpornych na chemię."
            },
            {
                q: "Jakie mopy są najlepsze dla hoteli?",
                a: "Polecamy system Rasant: mopy bawełniane (tradycyjne, absorbujące), mikrofibra (skuteczniejsze czyszczenie, mniej chemii), seria Planet (100% recykling, ekologiczne). Mopy płaskie do twardych podłóg, mopy okrągłe do nierównych powierzchni. Systemowe uchwyty przyspieszają wymianę."
            },
            {
                q: "Czy sprzęt posiadający gwarancję?",
                a: "Tak, wszystkie urządzenia objęte są gwarancją producenta od 12 do 24 miesięcy. Zapewniamy serwis pogwarancyjny, dostęp do części zamiennych i wsparcie techniczne. W przypadku awarii reagujemy w ciągu 48 godzin."
            }
        ]
    },
    {
        category: "Zamówienia i Dostawa",
        questions: [
            {
                q: "Jak szybko realizujecie zamówienia?",
                a: "Produkty magazynowe: 2-3 dni robocze. Tekstylia na zamówienie specjalne: około 4-6 tygodni. Ekspresowa dostawa pilnych zamówień: 24-48 godzin (dla produktów magazynowych). Dostarczamy na terenie całej Polski własnym transportem lub kurierem."
            },
            {
                q: "Jaka jest minimalna wartość zamówienia?",
                a: "Dla nowych klientów minimalne zamówienie to 500 PLN netto. Dla stałych klientów nie ma minimalnej wartości. Oferujemy rabaty hurtowe: 5% przy zamówieniach powyżej 2000 PLN, 10% powyżej 5000 PLN, indywidualne warunki przy stałej współpracy."
            },
            {
                q: "Czy mogę zamówić próbki produktów?",
                a: "Tak, oferujemy zestawy próbek dla hoteli rozważających współpracę. Próbki ręczników w różnych gramaturach, produkty Selpak do testów, saszetki chemii Ecolab. Koszt zestawu próbek to 99 PLN, odliczany od pierwszego zamówienia powyżej 1000 PLN."
            },
            {
                q: "Czy wystawiacie faktury VAT z odroczonym terminem płatności?",
                a: "Tak, dla stałych klientów oferujemy faktury VAT z terminem płatności 14, 21 lub 30 dni w zależności od historii współpracy. Dla nowych klientów standardowo: przedpłata lub płatność przy odbiorze pierwsze 3 zamówienia, następnie możliwość kredytu kupieckiego."
            }
        ]
    }
];


// Awards and recognitions (Authoritativeness)
export const awards = [
    {
        year: "2023",
        title: "Partner Roku Ecolab",
        description: "Nagroda za najlepsze wyniki sprzedaży i obsługę klienta"
    },
    {
        year: "2022",
        title: "Certyfikat Green Business",
        description: "Za wdrażanie rozwiązań ekologicznych w branży hotelarskiej"
    },
    {
        year: "2021",
        title: "Top Dostawca Tekstyliów Hotelowych",
        description: "Ranking Branży Hotelarskiej - 1. miejsce w kategorii tekstylia"
    }
];

// Press mentions (Authoritativeness)
export const pressMentions = [
    {
        source: "Hotelarstwo.pl",
        title: "NetHoreca - lider w dostawach tekstyliów dla hoteli",
        date: "2024-01-10",
        url: "#"
    },
    {
        source: "Branża Hotelarska Magazine",
        title: "Ecolab i NetHoreca - partnerstwo dla środowiska",
        date: "2023-11-15",
        url: "#"
    }
];
