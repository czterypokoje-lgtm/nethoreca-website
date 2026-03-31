// NetHoreca Professional Towels Product Database
// Based on hurtownianethoreca.pl supplier

export interface NetHorecaProduct {
    id: string;
    name: string;
    slug: string;
    category: 'towels' | 'bath-mats' | 'bathrobes' | 'table-linens';
    subcategory: string;
    description: string;
    image: string;
    imageAlt?: string;
    grammage: string;
    material: string;
    specs: { label: string; value: string }[];
    options: { label: string; size: string; code?: string }[];
    colors: { name: string; code: string; hex: string }[];
    features: string[];
    badge?: string;
}

export const nethorecaProducts: NetHorecaProduct[] = [
    // AQUA Series - 400g/m²
    {
        id: 'nethoreca-aqua-400',
        name: 'Ręcznik Aqua 400g/m²',
        slug: 'recznik-aqua-400',
        category: 'towels',
        subcategory: 'Ręczniki hotelowe',
        description: 'Wysokiej jakości ręcznik hotelowy z serii Aqua. Gramatura 400g/m² zapewnia optymalny balans między miękkością a szybkim schaniem. Idealny do obiektów z częstą wymianą ręczników.',
        image: '/products/nethoreca/aqua-400g%2Fm2-100-x-50-kol-01-white-.jpg',
        grammage: '400 g/m²',
        material: '100% bawełna',
        specs: [
            { label: 'Gramatura', value: '400 g/m²' },
            { label: 'Materiał', value: '100% bawełna' },
            { label: 'Seria', value: 'Aqua' },
            { label: 'Wykończenie', value: 'Bordiura tkana' },
            { label: 'Pranie', value: 'Do 90°C' }
        ],
        options: [
            { label: '30×50 cm', size: '30x50' },
            { label: '50×100 cm', size: '50x100' },
            { label: '70×140 cm', size: '70x140' }
        ],
        colors: [
            { name: 'White', code: '01', hex: '#FFFFFF' },
            { name: 'Cream', code: '02', hex: '#F5F5DC' },
            { name: 'Steel', code: '04', hex: '#71797E' }
        ],
        features: ['Szybkoschnący', 'Odporny na pranie przemysłowe', 'Bordiura dekoracyjna'],
        badge: 'BESTSELLER'
    },

    // BELLO Series - 450g/m²
    {
        id: 'nethoreca-bello',
        name: 'Ręcznik Bello Premium',
        slug: 'recznik-bello-premium',
        category: 'towels',
        subcategory: 'Ręczniki premium',
        description: 'Ekskluzywny ręcznik z serii Bello o podwyższonej gramaturze. Puszysty i niezwykle chłonny, idealny dla hoteli premium i spa. Gęsty splot zapewnia wyjątkową miękkość.',
        image: '/products/nethoreca/bello-100x50-kol-01-white-.jpg',
        grammage: '450 g/m²',
        material: '100% bawełna czesana',
        specs: [
            { label: 'Gramatura', value: '450 g/m²' },
            { label: 'Materiał', value: '100% bawełna czesana' },
            { label: 'Seria', value: 'Bello' },
            { label: 'Wykończenie', value: 'Bordiura premium' },
            { label: 'Pranie', value: 'Do 90°C' }
        ],
        options: [
            { label: '30×50 cm', size: '30x50' },
            { label: '50×100 cm', size: '50x100' },
            { label: '70×140 cm', size: '70x140' }
        ],
        colors: [
            { name: 'White', code: '01', hex: '#FFFFFF' },
            { name: 'Cream', code: '02', hex: '#F5F5DC' }
        ],
        features: ['Bawełna czesana', 'Extra puszysty', 'Dla hoteli premium'],
        badge: 'PREMIUM'
    },

    // FORUM Series - 500g/m²
    {
        id: 'nethoreca-forum',
        name: 'Ręcznik Forum 500g/m²',
        slug: 'recznik-forum-500',
        category: 'towels',
        subcategory: 'Ręczniki hotelowe',
        description: 'Profesjonalny ręcznik hotelowy z serii Forum o wysokiej gramaturze 500g/m². Dostępny w wielu kolorach, w tym unikalnym Sunset Canyon. Idealny do łazienek gościnnych.',
        image: '/products/nethoreca/forum-50-x-30-kol-09-sunset-canyon-.jpg',
        grammage: '500 g/m²',
        material: '100% bawełna',
        specs: [
            { label: 'Gramatura', value: '500 g/m²' },
            { label: 'Materiał', value: '100% bawełna' },
            { label: 'Seria', value: 'Forum' },
            { label: 'Wykończenie', value: 'Bordiura elegancka' },
            { label: 'Pranie', value: 'Do 90°C' }
        ],
        options: [
            { label: '30×50 cm', size: '30x50' },
            { label: '50×100 cm', size: '50x100' },
            { label: '70×140 cm', size: '70x140' }
        ],
        colors: [
            { name: 'White', code: '01', hex: '#FFFFFF' },
            { name: 'Sunset Canyon', code: '09', hex: '#E07C4F' },
            { name: 'Beige', code: '11', hex: '#D4C4A8' }
        ],
        features: ['Wysoka gramatura', 'Bogata paleta kolorów', 'Trwały i wytrzymały']
    },

    // GOMEZ Series - 500g/m²
    {
        id: 'nethoreca-gomez',
        name: 'Ręcznik Gomez Kolorowy',
        slug: 'recznik-gomez-kolorowy',
        category: 'towels',
        subcategory: 'Ręczniki kolorowe',
        description: 'Kolorowy ręcznik z serii Gomez, dostępny w unikalnych odcieniach w tym Lilac. Gramatura 500g/m² zapewnia doskonałą chłonność. Idealny do hoteli butikowych.',
        image: '/products/nethoreca/gomez-140x70-kol-04-lilac-.jpg',
        grammage: '500 g/m²',
        material: '100% bawełna',
        specs: [
            { label: 'Gramatura', value: '500 g/m²' },
            { label: 'Materiał', value: '100% bawełna' },
            { label: 'Seria', value: 'Gomez' },
            { label: 'Wykończenie', value: 'Bordiura kontrastowa' },
            { label: 'Pranie', value: 'Do 60°C (kolory)' }
        ],
        options: [
            { label: '30×50 cm', size: '30x50' },
            { label: '50×100 cm', size: '50x100' },
            { label: '70×140 cm', size: '70x140' }
        ],
        colors: [
            { name: 'White', code: '01', hex: '#FFFFFF' },
            { name: 'Lilac', code: '04', hex: '#C8A2C8' },
            { name: 'Steel', code: '06', hex: '#71797E' }
        ],
        features: ['Unikalne kolory', 'Odporność koloru', 'Dla hoteli butikowych']
    },

    // LARISA II Series - 450g/m²
    {
        id: 'nethoreca-larisa',
        name: 'Ręcznik Larisa II',
        slug: 'recznik-larisa-ii',
        category: 'towels',
        subcategory: 'Ręczniki hotelowe',
        description: 'Elegancki ręcznik z serii Larisa II o gramaturze 450g/m². Klasyczny design z subtelną bordiurą. Dostępny w stonowanych kolorach idealnych dla hoteli biznesowych.',
        image: '/products/nethoreca/larisa-ii-100-x-50-kol-04-steel-.jpg',
        grammage: '450 g/m²',
        material: '100% bawełna',
        specs: [
            { label: 'Gramatura', value: '450 g/m²' },
            { label: 'Materiał', value: '100% bawełna' },
            { label: 'Seria', value: 'Larisa II' },
            { label: 'Wykończenie', value: 'Subtelna bordiura' },
            { label: 'Pranie', value: 'Do 90°C' }
        ],
        options: [
            { label: '30×50 cm', size: '30x50' },
            { label: '50×100 cm', size: '50x100' },
            { label: '70×140 cm', size: '70x140' }
        ],
        colors: [
            { name: 'White', code: '01', hex: '#FFFFFF' },
            { name: 'Steel', code: '04', hex: '#71797E' },
            { name: 'Anthracite', code: '08', hex: '#383838' }
        ],
        features: ['Elegancki design', 'Stonowane kolory', 'Dla hoteli biznesowych']
    },

    // MARCO Series - 550g/m²
    {
        id: 'nethoreca-marco',
        name: 'Ręcznik Marco 550g/m²',
        slug: 'recznik-marco-550',
        category: 'towels',
        subcategory: 'Ręczniki premium',
        description: 'Profesjonalny ręcznik obiektowy z serii Marco o najwyższej gramaturze 550g/m². Niezwykle puszysty i gęsty, zapewnia poczucie wysokiego standardu. Dostępny w kolorach Clear Water i Steel.',
        image: '/products/nethoreca/marco-140x70-kol-05-clear-water-550.jpg',
        grammage: '550 g/m²',
        material: '100% bawełna egipska',
        specs: [
            { label: 'Gramatura', value: '550 g/m²' },
            { label: 'Materiał', value: '100% bawełna egipska' },
            { label: 'Seria', value: 'Marco' },
            { label: 'Wykończenie', value: 'Elegancka bordiura' },
            { label: 'Pranie', value: 'Do 90°C' }
        ],
        options: [
            { label: '30×50 cm', size: '30x50' },
            { label: '50×100 cm', size: '50x100' },
            { label: '70×140 cm', size: '70x140' }
        ],
        colors: [
            { name: 'White', code: '01', hex: '#FFFFFF' },
            { name: 'Clear Water', code: '05', hex: '#5DADE2' },
            { name: 'Steel', code: '06', hex: '#71797E' }
        ],
        features: ['Bawełna egipska', 'Najwyższa gramatura', 'Uczucie luksusu'],
        badge: 'LUXURY'
    },

    // MODENA Series - 480g/m²
    {
        id: 'nethoreca-modena',
        name: 'Ręcznik Modena Classic',
        slug: 'recznik-modena-classic',
        category: 'towels',
        subcategory: 'Ręczniki hotelowe',
        description: 'Klasyczny ręcznik hotelowy z serii Modena. Gramatura 480g/m² zapewnia doskonały kompromis między komfortem a praktycznością. Dostępny w naturalnych odcieniach.',
        image: '/products/nethoreca/modena-50x30-kol-11-beige-.jpg',
        grammage: '480 g/m²',
        material: '100% bawełna',
        specs: [
            { label: 'Gramatura', value: '480 g/m²' },
            { label: 'Materiał', value: '100% bawełna' },
            { label: 'Seria', value: 'Modena' },
            { label: 'Wykończenie', value: 'Bordiura klasyczna' },
            { label: 'Pranie', value: 'Do 90°C' }
        ],
        options: [
            { label: '30×50 cm', size: '30x50' },
            { label: '50×100 cm', size: '50x100' },
            { label: '70×140 cm', size: '70x140' }
        ],
        colors: [
            { name: 'White', code: '01', hex: '#FFFFFF' },
            { name: 'Beige', code: '11', hex: '#D4C4A8' },
            { name: 'Cream', code: '02', hex: '#F5F5DC' }
        ],
        features: ['Klasyczny design', 'Naturalne kolory', 'Uniwersalne zastosowanie']
    },

    // PARMA Series - 500g/m²
    {
        id: 'nethoreca-parma',
        name: 'Ręcznik Parma Kolorowy',
        slug: 'recznik-parma-kolorowy',
        category: 'towels',
        subcategory: 'Ręczniki kolorowe',
        description: 'Kolorowy ręcznik z serii Parma w intensywnych odcieniach w tym Arra Blue. Gramatura 500g/m² i trwałe barwy odporne na wielokrotne pranie.',
        image: '/products/nethoreca/parma-100x50-kol-07-arra-blue-.jpg',
        grammage: '500 g/m²',
        material: '100% bawełna',
        specs: [
            { label: 'Gramatura', value: '500 g/m²' },
            { label: 'Materiał', value: '100% bawełna' },
            { label: 'Seria', value: 'Parma' },
            { label: 'Wykończenie', value: 'Bordiura w kolorze' },
            { label: 'Pranie', value: 'Do 60°C (kolory)' }
        ],
        options: [
            { label: '30×50 cm', size: '30x50' },
            { label: '50×100 cm', size: '50x100' },
            { label: '70×140 cm', size: '70x140' }
        ],
        colors: [
            { name: 'White', code: '01', hex: '#FFFFFF' },
            { name: 'Arra Blue', code: '07', hex: '#4169E1' },
            { name: 'Navy', code: '20', hex: '#000080' }
        ],
        features: ['Intensywne kolory', 'Odporność na blaknięcie', 'Elegancka bordiura']
    },

    // TANGO Series - 450g/m²
    {
        id: 'nethoreca-tango',
        name: 'Ręcznik Tango',
        slug: 'recznik-tango',
        category: 'towels',
        subcategory: 'Ręczniki hotelowe',
        description: 'Popularny ręcznik hotelowy z serii Tango. Gramatura 450g/m² i szeroka gama kolorów. Sprawdzony wybór dla obiektów hotelowych szukających jakości w dobrej cenie.',
        image: '/products/nethoreca/recznik-tango-50-x-30-kol-11-beige-.jpg',
        grammage: '450 g/m²',
        material: '100% bawełna',
        specs: [
            { label: 'Gramatura', value: '450 g/m²' },
            { label: 'Materiał', value: '100% bawełna' },
            { label: 'Seria', value: 'Tango' },
            { label: 'Wykończenie', value: 'Bordiura standard' },
            { label: 'Pranie', value: 'Do 90°C' }
        ],
        options: [
            { label: '30×50 cm', size: '30x50' },
            { label: '50×100 cm', size: '50x100' },
            { label: '70×140 cm', size: '70x140' }
        ],
        colors: [
            { name: 'White', code: '01', hex: '#FFFFFF' },
            { name: 'Beige', code: '11', hex: '#D4C4A8' },
            { name: 'Cream', code: '02', hex: '#F5F5DC' }
        ],
        features: ['Dobra jakość/cena', 'Szeroka gama kolorów', 'Sprawdzona seria'],
        badge: 'POPULAR'
    },

    // RIMINI Series - 500g/m²
    {
        id: 'nethoreca-rimini',
        name: 'Ręcznik Rimini Elegance',
        slug: 'recznik-rimini-elegance',
        category: 'towels',
        subcategory: 'Ręczniki premium',
        description: 'Elegancki ręcznik z serii Rimini dostępny w głębokim czarnym kolorze. Gramatura 500g/m² i stylowa bordiura. Idealny dla nowoczesnych hoteli i spa.',
        image: '/products/nethoreca/rimini-50-x-30-kol-30-black-.jpg',
        grammage: '500 g/m²',
        material: '100% bawełna',
        specs: [
            { label: 'Gramatura', value: '500 g/m²' },
            { label: 'Materiał', value: '100% bawełna' },
            { label: 'Seria', value: 'Rimini' },
            { label: 'Wykończenie', value: 'Elegancka bordiura' },
            { label: 'Pranie', value: 'Do 60°C (kolory)' }
        ],
        options: [
            { label: '30×50 cm', size: '30x50' },
            { label: '50×100 cm', size: '50x100' },
            { label: '70×140 cm', size: '70x140' }
        ],
        colors: [
            { name: 'White', code: '01', hex: '#FFFFFF' },
            { name: 'Black', code: '30', hex: '#1C1C1C' },
            { name: 'Anthracite', code: '08', hex: '#383838' }
        ],
        features: ['Głębokie kolory', 'Nowoczesny styl', 'Dla spa i wellness']
    },

    // ROSA Bath Mat - 500g/m²
    {
        id: 'nethoreca-rosa-stopka',
        name: 'Stopka łazienkowa Rosa',
        slug: 'stopka-lazienkowa-rosa',
        category: 'bath-mats',
        subcategory: 'Dywaniki łazienkowe',
        description: 'Profesjonalna stopka łazienkowa z serii Rosa. Gramatura 500g/m² zapewnia doskonałą absorpcję wody. Antypoślizgowy spód i trwała konstrukcja do intensywnego użytkowania hotelowego.',
        image: '/images/products/bathmats/stopka-rosa.webp',
        imageAlt: 'Stopka łazienkowa hotelowa Rosa antypoślizgowa 500g NetHoreca',
        grammage: '500 g/m²',
        material: '100% bawełna',
        specs: [
            { label: 'Gramatura', value: '500 g/m²' },
            { label: 'Materiał', value: '100% bawełna' },
            { label: 'Seria', value: 'Rosa' },
            { label: 'Rozmiar', value: '50×70 cm' },
            { label: 'Pranie', value: 'Do 90°C' }
        ],
        options: [
            { label: '50×70 cm', size: '50x70' }
        ],
        colors: [
            { name: 'White', code: '01', hex: '#FFFFFF' },
            { name: 'Beige', code: '11', hex: '#D4C4A8' }
        ],
        features: ['Antypoślizgowy', 'Wysoka absorpcja', 'Trwały w praniu przemysłowym']
    },

    // --- BATH ROBES ---
    {
        id: 'nethoreca-sky-velour',
        name: 'Szlafrok Welurowy Sky',
        slug: 'szlafrok-welurowy-sky',
        category: 'bathrobes',
        subcategory: 'Szlafroki hotelowe',
        description: 'Profesjonalny szlafrok welurowy z kołnierzem szalowym. Zewnętrzna strona welurowa zapewnia wysoką estetykę, wewnętrzna frotte doskonałą chłonność. Idealny dla obiektów o podwyższonym standardzie.',
        image: '/images/szlafroki/szlafrok-welurowy-sky.webp',
        grammage: '400 g/m²',
        material: '100% bawełna (Welurowy)',
        specs: [
            { label: 'Gramatura', value: '400 g/m²' },
            { label: 'Materiał', value: '100% bawełna' },
            { label: 'Typ', value: 'Kołnierz szalowy' },
            { label: 'Rozmiar', value: 'Unisex L/XL' }
        ],
        options: [
            { label: 'L', size: 'L' },
            { label: 'XL', size: 'XL' },
            { label: 'XXL', size: 'XXL' }
        ],
        colors: [
            { name: 'White', code: '01', hex: '#FFFFFF' }
        ],
        features: ['Miękki welur', 'Elegancki krój', 'Wysoka chłonność'],
        badge: 'LUXURY'
    },
    {
        id: 'nethoreca-waffle',
        name: 'Szlafrok Waflowy Spa',
        slug: 'szlafrok-waflowy-spa',
        category: 'bathrobes',
        subcategory: 'Szlafroki SPA',
        description: 'Lekki szlafrok o strukturze wafla (wafel). Szybkoschnący i przewiewny, idealny do stref SPA i na lato. Krój kimono dla swobody ruchów.',
        image: '/images/szlafroki/wafel-closeup.webp',
        grammage: '240 g/m²',
        material: '100% bawełna',
        specs: [
            { label: 'Gramatura', value: '240 g/m²' },
            { label: 'Materiał', value: '100% bawełna' },
            { label: 'Typ', value: 'Kimono' },
            { label: 'Splot', value: 'Waflowy' }
        ],
        options: [
            { label: 'L', size: 'L' },
            { label: 'XL', size: 'XL' }
        ],
        colors: [
            { name: 'White', code: '01', hex: '#FFFFFF' }
        ],
        features: ['Lekki i przewiewny', 'Szybkoschnący', 'Struktura wafla']
    },

    // --- TABLE LINENS ---
    {
        id: 'nethoreca-satyna-obrus',
        name: 'Obrus Satynowy Gastro',
        slug: 'obrus-satynowy-gastro',
        category: 'table-linens',
        subcategory: 'Bielizna stołowa',
        description: 'Profesjonalny obrus gastronomiczny o splocie atłasowym (satynowym). Gładki, lśniący i niezwykle elegancki. Mieszanka bawełniano-poliestrowa dla trwałości.',
        image: '/images/products/table-linens/obrus-standard.webp',
        imageAlt: 'Biały obrus satynowy gastronomiczny na stół restauracyjny',
        grammage: '210 g/m²',
        material: '50% bawełna / 50% poliester',
        specs: [
            { label: 'Gramatura', value: '210 g/m²' },
            { label: 'Skład', value: '50/50 CO/PES' },
            { label: 'Splot', value: 'Satynowy gładki' },
            { label: 'Wykończenie', value: 'Na zakładkę' }
        ],
        options: [
            { label: '140×140 cm', size: '140x140' },
            { label: '140×180 cm', size: '140x180' },
            { label: 'Okrągły 300 cm', size: 'fi300' }
        ],
        colors: [
            { name: 'White', code: '01', hex: '#FFFFFF' },
            { name: 'Ecru', code: '02', hex: '#F5F5DC' }
        ],
        features: ['Elegancki połysk', 'Łatwe prasowanie', 'Wysoka trwałość']
    },
    {
        id: 'nethoreca-plamoodporne',
        name: 'Obrus Plamoodporny',
        slug: 'obrus-plamoodporny',
        category: 'table-linens',
        subcategory: 'Obrusy plamoodporne',
        description: 'Praktyczny obrus z wykończeniem plamoodpornym. Płyny nie wsiąkają w strukturę tkaniny ("efekt lotosu"). Idealny do ogródków restauracyjnych i śniadaniowych.',
        image: '/images/products/table-linens/obrus-standard.webp',
        imageAlt: 'Biały obrus hotelowy plamoodporny z efektem lotosu',
        grammage: '230 g/m²',
        material: '100% poliester',
        specs: [
            { label: 'Gramatura', value: '230 g/m²' },
            { label: 'Materiał', value: '100% poliester' },
            { label: 'Appretura', value: 'Plamoodporna' }
        ],
        options: [
            { label: '140×140 cm', size: '140x140' }
        ],
        colors: [
            { name: 'White', code: '01', hex: '#FFFFFF' },
            { name: 'Gray', code: '15', hex: '#808080' }
        ],
        features: ['Plamoodporny', 'Nie wymaga maglowania', 'Ekonomiczny']
    },

    // --- ADDITIONAL BATH MAT ---
    {
        id: 'nethoreca-grecka-stopka',
        name: 'Stopka Grecka Premium',
        slug: 'stopka-grecka-premium',
        category: 'bath-mats',
        subcategory: 'Dywaniki łazienkowe',
        description: 'Ekskluzywna stopka łazienkowa z tłoczonym wzorem greckim. Wysoka gramatura 650g/m² daje uczucie miękkości pod stopami.',
        image: '/images/products/bathmats/stopka-grecka-premium.webp',
        imageAlt: 'Gruba stopka łazienkowa hotelowa ze wzorem greckim 650g NetHoreca',
        grammage: '650 g/m²',
        material: '100% bawełna',
        specs: [
            { label: 'Gramatura', value: '650 g/m²' },
            { label: 'Wzór', value: 'Grecki' },
            { label: 'Rozmiar', value: '50×70 cm' }
        ],
        options: [
            { label: '50×70 cm', size: '50x70' }
        ],
        colors: [
            { name: 'White', code: '01', hex: '#FFFFFF' }
        ],
        features: ['Wzór grecki', 'Extra gruba', 'Premium']
    },

    // --- ADDITIONAL BATHROBES ---
    {
        id: 'nethoreca-kids-bathrobe',
        name: 'Szlafrok Dziecięcy Junior',
        slug: 'szlafrok-dzieciency-junior',
        category: 'bathrobes',
        subcategory: 'Szlafroki dziecięce',
        description: 'Miękki szlafrok frotte dla dzieci. Gramatura 360 g/m² zapewnia komfort i szybkie schnięcie. Idealny dla hoteli rodzinnych i resortów z programem Kids Club.',
        image: '/images/szlafroki/szlafrok-dzieciecy.webp',
        grammage: '360 g/m²',
        material: '100% bawełna',
        specs: [
            { label: 'Gramatura', value: '360 g/m²' },
            { label: 'Materiał', value: '100% bawełna frotte' },
            { label: 'Typ', value: 'Kołnierz szalowy' },
            { label: 'Rozmiary', value: '6-8 lat, 10-12 lat' }
        ],
        options: [
            { label: 'S (6-8 lat)', size: 'S' },
            { label: 'M (10-12 lat)', size: 'M' }
        ],
        colors: [
            { name: 'White', code: '01', hex: '#FFFFFF' }
        ],
        features: ['Dla dzieci', 'Miękki frotte', 'Łatwy w pielęgnacji'],
        badge: 'FAMILY'
    },
    {
        id: 'nethoreca-premium-velour',
        name: 'Szlafrok Welurowy Royal',
        slug: 'szlafrok-welurowy-royal',
        category: 'bathrobes',
        subcategory: 'Szlafroki premium',
        description: 'Ekskluzywny szlafrok welurowy o podwyższonej gramaturze 450 g/m². Zewnętrzna strona z miękkiego weluru, wewnętrzna z chłonnego frotte. Sanforyzowany - minimalna kurczliwość. Standard 5*.',
        image: '/images/szlafroki/szlafrok-welurowy-royal.webp',
        grammage: '450 g/m²',
        material: '100% bawełna egipska',
        specs: [
            { label: 'Gramatura', value: '450 g/m²' },
            { label: 'Materiał', value: '100% bawełna egipska' },
            { label: 'Typ', value: 'Kołnierz szalowy premium' },
            { label: 'Obróbka', value: 'Sanforyzacja' }
        ],
        options: [
            { label: 'L', size: 'L' },
            { label: 'XL', size: 'XL' },
            { label: 'XXL', size: 'XXL' }
        ],
        colors: [
            { name: 'White', code: '01', hex: '#FFFFFF' },
            { name: 'Cream', code: '02', hex: '#F5F5DC' }
        ],
        features: ['Bawełna egipska', 'Sanforyzowany', 'Extra miękki'],
        badge: 'LUXURY'
    },
    {
        id: 'nethoreca-waffle-grey',
        name: 'Szlafrok Waflowy Szary',
        slug: 'szlafrok-waflowy-szary',
        category: 'bathrobes',
        subcategory: 'Szlafroki SPA',
        description: 'Nowoczesny szlafrok waflowy w kolorze szarym. Splot waflowy (pique) o gramaturze 240 g/m² zapewnia lekkość i oddychalność. Idealny do stref wellness i saun. Szybko schnie po użyciu.',
        image: '/images/szlafroki/wafel-closeup.webp',
        grammage: '240 g/m²',
        material: '100% bawełna',
        specs: [
            { label: 'Gramatura', value: '240 g/m²' },
            { label: 'Materiał', value: '100% bawełna' },
            { label: 'Splot', value: 'Waflowy (pique)' },
            { label: 'Typ', value: 'Kimono' }
        ],
        options: [
            { label: 'L', size: 'L' },
            { label: 'XL', size: 'XL' }
        ],
        colors: [
            { name: 'Grey', code: '15', hex: '#808080' },
            { name: 'White', code: '01', hex: '#FFFFFF' }
        ],
        features: ['Splot waflowy', 'Szybkoschnący', 'Nowoczesny design'],
        badge: 'BESTSELLER'
    },
    {
        id: 'nethoreca-kimono-light',
        name: 'Szlafrok Kimono Light',
        slug: 'szlafrok-kimono-light',
        category: 'bathrobes',
        subcategory: 'Szlafroki letnie',
        description: 'Lekki szlafrok kimono o gramaturze 360 g/m². Krój bez kołnierza, wiązany paskiem. Idealny na ciepłe miesiące i do stref basenowych. 100% bawełna zapewnia komfort i higieny.',
        image: '/images/szlafroki/szlafrok-kimono-light.webp',
        grammage: '360 g/m²',
        material: '100% bawełna',
        specs: [
            { label: 'Gramatura', value: '360 g/m²' },
            { label: 'Materiał', value: '100% bawełna' },
            { label: 'Typ', value: 'Kimono bez kołnierza' },
            { label: 'Sezon', value: 'Letni' }
        ],
        options: [
            { label: 'L/XL', size: 'L/XL' }
        ],
        colors: [
            { name: 'White', code: '01', hex: '#FFFFFF' }
        ],
        features: ['Lekki', 'Krój kimono', 'Przewiewny']
    },

    // --- ADDITIONAL TABLE LINENS ---
    {
        id: 'nethoreca-linen-look',
        name: 'Obrus Lniany Premium',
        slug: 'obrus-lniany-premium',
        category: 'table-linens',
        subcategory: 'Obrusy premium',
        description: 'Obrus o wyglądzie naturalnego lnu. Tkanina poliestrowa o gramaturze 240 g/m² imitująca len - łatwa w pielęgnacji, nie wymaga prasowania. Idealny dla restauracji eko i bistro.',
        image: '/images/products/table-linens/obrus-standard.webp',
        imageAlt: 'Obrus bielony imitujący naturalny len dla restauracji premium',
        grammage: '240 g/m²',
        material: '100% poliester (imitacja lnu)',
        specs: [
            { label: 'Gramatura', value: '240 g/m²' },
            { label: 'Materiał', value: '100% poliester' },
            { label: 'Wykończenie', value: 'Linen-look' },
            { label: 'Pielęgnacja', value: 'Bez prasowania' }
        ],
        options: [
            { label: '140×140 cm', size: '140x140' },
            { label: '140×200 cm', size: '140x200' }
        ],
        colors: [
            { name: 'Natural', code: '20', hex: '#E8DCC4' },
            { name: 'White', code: '01', hex: '#FFFFFF' }
        ],
        features: ['Wygląd lnu', 'Bez prasowania', 'Eko styl']
    },
    {
        id: 'nethoreca-jacquard',
        name: 'Obrus Żakardowy Elegance',
        slug: 'obrus-zakardowy-elegance',
        category: 'table-linens',
        subcategory: 'Obrusy żakardowe',
        description: 'Elegancki obrus żakardowy z subtelnym wzorem. Gramatura 220 g/m², mieszanka bawełniano-poliestrowa. Tkany wzór dodaje prestiżu, idealny na bankiety i uroczystości.',
        image: '/images/products/table-linens/obrus-standard.webp',
        imageAlt: 'Biały obrus żakardowy na stół bankietowy z eleganckim wzorem',
        grammage: '220 g/m²',
        material: '50% bawełna / 50% poliester',
        specs: [
            { label: 'Gramatura', value: '220 g/m²' },
            { label: 'Skład', value: '50/50 CO/PES' },
            { label: 'Wzór', value: 'Żakardowy' },
            { label: 'Zastosowanie', value: 'Bankiety' }
        ],
        options: [
            { label: '140×180 cm', size: '140x180' },
            { label: 'Okrągły 300 cm', size: 'fi300' }
        ],
        colors: [
            { name: 'White', code: '01', hex: '#FFFFFF' },
            { name: 'Cream', code: '02', hex: '#F5F5DC' }
        ],
        features: ['Wzór żakardowy', 'Elegancki', 'Dla bankietów'],
        badge: 'PREMIUM'
    },
    {
        id: 'nethoreca-napkins',
        name: 'Serwetki Bawełniane 50×50',
        slug: 'serwetki-bawelniane-50x50',
        category: 'table-linens',
        subcategory: 'Serwetki',
        description: 'Profesjonalne serwetki bawełniane 50×50 cm. 100% bawełna o gramaturze 180 g/m². Idealne do składania w dekoracyjne formy. Dostępne w wielu kolorach.',
        image: '/images/products/table-linens/serwetka.webp',
        imageAlt: 'Biała serwetka bawełniana gastronomiczna 50x50 cm idealna do składania',
        grammage: '180 g/m²',
        material: '100% bawełna',
        specs: [
            { label: 'Gramatura', value: '180 g/m²' },
            { label: 'Materiał', value: '100% bawełna' },
            { label: 'Rozmiar', value: '50×50 cm' },
            { label: 'Wykończenie', value: 'Brzeg obszyty' }
        ],
        options: [
            { label: '50×50 cm', size: '50x50' }
        ],
        colors: [
            { name: 'White', code: '01', hex: '#FFFFFF' },
            { name: 'Cream', code: '02', hex: '#F5F5DC' },
            { name: 'Grey', code: '15', hex: '#808080' }
        ],
        features: ['100% bawełna', 'Łatwe składanie', 'Trwałe']
    },
    {
        id: 'nethoreca-skirting',
        name: 'Skirting Plisowany Bankietowy',
        slug: 'skirting-plisowany-bankietowy',
        category: 'table-linens',
        subcategory: 'Skirtingi',
        description: 'Profesjonalny skirting (obicia stołów) z plisą pudełkową. Wysokość 75 cm, szyty na wymiar. Materiał poliestrowy, łatwy w montażu na rzepy. Idealny na wesela i konferencje.',
        image: '/images/products/table-linens/obrus-standard.webp',
        imageAlt: 'Klasyczny biały obrus i skirting plisowany na stoły bankietowe',
        grammage: '200 g/m²',
        material: '100% poliester',
        specs: [
            { label: 'Wysokość', value: '75 cm' },
            { label: 'Materiał', value: '100% poliester' },
            { label: 'Plisa', value: 'Pudełkowa' },
            { label: 'Montaż', value: 'Rzepy' }
        ],
        options: [
            { label: 'Na wymiar', size: 'custom' }
        ],
        colors: [
            { name: 'White', code: '01', hex: '#FFFFFF' },
            { name: 'Cream', code: '02', hex: '#F5F5DC' }
        ],
        features: ['Plisa pudełkowa', 'Montaż na rzepy', 'Szycie na wymiar']
    },

    // --- ADDITIONAL BATH MATS ---
    {
        id: 'nethoreca-premium-700',
        name: 'Stopka Premium 700g',
        slug: 'stopka-premium-700',
        category: 'bath-mats',
        subcategory: 'Dywaniki premium',
        description: 'Najgrubsza stopka w ofercie - gramatura 700 g/m². Wyjątkowo chłonna i miękka. Podwójny obszyć zapewnia trwałość. Standard dla hoteli 5*.',
        image: '/images/products/bathmats/stopka-premium-700g.webp',
        imageAlt: 'Najgrubsza hotelowa stopka łazienkowa premium 700g biała z podwójnym obszyciem',
        grammage: '700 g/m²',
        material: '100% bawełna',
        specs: [
            { label: 'Gramatura', value: '700 g/m²' },
            { label: 'Materiał', value: '100% bawełna' },
            { label: 'Obszycie', value: 'Podwójne' },
            { label: 'Rozmiar', value: '50×70 cm' }
        ],
        options: [
            { label: '50×70 cm', size: '50x70' }
        ],
        colors: [
            { name: 'White', code: '01', hex: '#FFFFFF' }
        ],
        features: ['Najwyższa gramatura', 'Extra miękka', 'Standard 5*'],
        badge: 'LUXURY'
    },
    {
        id: 'nethoreca-grey-mat',
        name: 'Stopka Szara Elegance',
        slug: 'stopka-szara-elegance',
        category: 'bath-mats',
        subcategory: 'Dywaniki kolorowe',
        description: 'Nowoczesna stopka w kolorze szarym. Gramatura 650 g/m² zapewnia stabilność i chłonność. Idealny do łazienek w stylu minimalistycznym i industrial.',
        image: '/images/products/bathmats/stopka-szara-elegance.webp',
        imageAlt: 'Szara stopka łazienkowa hotelowa Elegance 650g do nowoczesnych łazienek',
        grammage: '650 g/m²',
        material: '100% bawełna',
        specs: [
            { label: 'Gramatura', value: '650 g/m²' },
            { label: 'Materiał', value: '100% bawełna' },
            { label: 'Kolor', value: 'Szary' },
            { label: 'Rozmiar', value: '50×70 cm' }
        ],
        options: [
            { label: '50×70 cm', size: '50x70' }
        ],
        colors: [
            { name: 'Grey', code: '15', hex: '#808080' },
            { name: 'Anthracite', code: '08', hex: '#383838' }
        ],
        features: ['Nowoczesny kolor', 'Wysoka gramatura', 'Minimalistyczny styl']
    }
];

// Helper functions
export function getNetHorecaProductBySlug(slug: string): NetHorecaProduct | undefined {
    return nethorecaProducts.find(p => p.slug === slug);
}

export function getRelatedNetHorecaProducts(productId: string, limit = 4): NetHorecaProduct[] {
    const product = nethorecaProducts.find(p => p.id === productId);
    if (!product) return [];

    return nethorecaProducts
        .filter(p => p.id !== productId && p.category === product.category)
        .slice(0, limit);
}

export function getNetHorecaTowels(): NetHorecaProduct[] {
    return nethorecaProducts.filter(p => p.category === 'towels');
}

export function getNetHorecaBathMats(): NetHorecaProduct[] {
    return nethorecaProducts.filter(p => p.category === 'bath-mats');
}

export function getNetHorecaBathrobes(): NetHorecaProduct[] {
    return nethorecaProducts.filter(p => p.category === 'bathrobes');
}

export function getNetHorecaTableLinens(): NetHorecaProduct[] {
    return nethorecaProducts.filter(p => p.category === 'table-linens');
}
