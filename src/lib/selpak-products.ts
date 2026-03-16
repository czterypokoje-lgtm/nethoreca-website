// Selpak Professional Products Database
// Based on sanipakprofessional.com.tr catalog

export interface ProductOption {
    value: string;
    label: string;
    code?: string;
}

export interface ProductSpec {
    label: string;
    value: string;
}

export interface SelpakProduct {
    id: string;
    slug: string;
    name: string;
    nameEn: string;
    category: 'tissue-paper' | 'cleaning-hygiene' | 'dispensers' | 'napkins';
    subcategory: string;
    description: string;
    image: string;
    options?: ProductOption[];
    specs: ProductSpec[];
    features?: string[];
    relatedProducts?: string[];
    badge?: string;
    isRecycled?: boolean;
}

export const selpakProducts: SelpakProduct[] = [
    // ==================== TOWELS ====================
    {
        id: 'extra-z-fold-towel',
        slug: 'recznik-z-fold-extra',
        name: 'Selpak Professional Extra Ręcznik Z-Fold',
        nameEn: 'Selpak Professional Extra Z-Fold Dispenser Towel',
        category: 'tissue-paper',
        subcategory: 'Ręczniki papierowe',
        description: 'Wysokiej jakości ręcznik papierowy Z-Fold z linii Extra. Idealne rozwiązanie dla jednostek hotelowych i gastronomicznych o wysokim standardzie sanitarnym. Wysoka chłonność, miękka struktura.',
        image: '/products/selpak/selpak-professional-extra-z-fold-dispenser-towel.webp',
        specs: [
            { label: 'Kod produktu', value: '7904981' },
            { label: 'Kolor', value: 'Biały' },
            { label: 'Liczba warstw', value: '2' },
            { label: 'Wymiary listka', value: '21.5 x 23 cm' },
            { label: 'Ilość w opakowaniu', value: '200 listków' },
            { label: 'Ilość w kartonie', value: '12 opakowań' },
        ],
        features: ['Wysoka chłonność', 'Certyfikat FSC', 'Pasuje do dozowników Z-Fold'],
        relatedProducts: ['z-fold-towel', 'extra-plus-z-fold-towel'],
        badge: 'BESTSELLER'
    },
    {
        id: 'z-fold-towel',
        slug: 'recznik-z-fold',
        name: 'Selpak Professional Ręcznik Z-Fold',
        nameEn: 'Selpak Professional Z-Fold Dispenser Towel',
        category: 'tissue-paper',
        subcategory: 'Ręczniki papierowe',
        description: 'Standardowy ręcznik papierowy Z-Fold do dozowników. Ekonomiczne rozwiązanie dla obiektów o dużym natężeniu ruchu.',
        image: '/products/selpak/selpak-professional-z-fold-dispenser-towel.webp',
        specs: [
            { label: 'Kod produktu', value: '7904982' },
            { label: 'Kolor', value: 'Biały' },
            { label: 'Liczba warstw', value: '1' },
            { label: 'Wymiary listka', value: '21 x 22.5 cm' },
            { label: 'Ilość w opakowaniu', value: '200 listków' },
            { label: 'Ilość w kartonie', value: '12 opakowań' },
        ],
        features: ['Ekonomiczny wybór', 'Certyfikat FSC', 'Uniwersalne dopasowanie'],
        relatedProducts: ['extra-z-fold-towel', 'extra-plus-z-fold-towel']
    },
    {
        id: 'extra-plus-z-fold-towel',
        slug: 'recznik-z-fold-extra-plus',
        name: 'Selpak Professional Extra Plus Ręcznik Z-Fold',
        nameEn: 'Selpak Professional Extra Plus Z-Fold Dispenser Towel',
        category: 'tissue-paper',
        subcategory: 'Ręczniki papierowe',
        description: 'Najwyższa jakość w linii Z-Fold. Trójwarstwowa struktura zapewnia wyjątkową chłonność i miękkość.',
        image: '/products/selpak/selpak-professional-extra-plus-z-fold-dispenser-towel.webp',
        specs: [
            { label: 'Kod produktu', value: '7904983' },
            { label: 'Kolor', value: 'Biały' },
            { label: 'Liczba warstw', value: '3' },
            { label: 'Wymiary listka', value: '21.5 x 24 cm' },
            { label: 'Ilość w opakowaniu', value: '150 listków' },
            { label: 'Ilość w kartonie', value: '12 opakowań' },
        ],
        features: ['Premium jakość', '3 warstwy', 'Maksymalna chłonność'],
        relatedProducts: ['extra-z-fold-towel', 'z-fold-towel'],
        badge: 'PREMIUM'
    },
    {
        id: 'automated-towel-21cm',
        slug: 'recznik-automatyczny-21cm',
        name: 'Selpak Professional Ręcznik Automatyczny 21cm',
        nameEn: 'Selpak Professional Automated Dispenser Towel 21cm',
        category: 'tissue-paper',
        subcategory: 'Ręczniki papierowe',
        description: 'Ręcznik w roli do dozowników automatycznych. Dostępny w różnych długościach. Bezdotykowe podawanie zapewnia higienę.',
        image: '/products/selpak/selpak-professional-automated-dispenser-towel-21cm.webp',
        options: [
            { value: '135m', label: '135 m', code: '7906631' },
            { value: '70m', label: '70 m', code: '7906632' },
            { value: '85m', label: '85 m', code: '7906633' },
        ],
        specs: [
            { label: 'Kod produktu', value: '7906631' },
            { label: 'Kolor', value: 'Biały' },
            { label: 'Liczba warstw', value: '2' },
            { label: 'Szerokość arkusza', value: '21 cm' },
            { label: 'Długość rolki (m)', value: '135' },
            { label: 'Waga netto (kg)', value: '6,12' },
            { label: 'Ilość rolek', value: '6' },
        ],
        features: ['Dotykowy dozownik', 'Ekonomiczne użytkowanie', 'Kontrola ilości'],
        relatedProducts: ['automated-towel-21-5cm', 'automated-towel-25cm']
    },
    {
        id: 'automated-towel-21-5cm',
        slug: 'recznik-automatyczny-21-5cm',
        name: 'Selpak Professional Ręcznik Automatyczny 21.5cm',
        nameEn: 'Selpak Professional Automated Dispenser Towel 21.5cm',
        category: 'tissue-paper',
        subcategory: 'Ręczniki papierowe',
        description: 'Ręcznik w roli do dozowników automatycznych o szerokości 21.5cm. Idealne dopasowanie do dozowników Wave i Natura.',
        image: '/products/selpak/selpak-professional-automated-dispenser-towel-21-5cm.webp',
        options: [
            { value: '140m', label: '140 m', code: '7906641' },
            { value: '100m', label: '100 m', code: '7906642' },
        ],
        specs: [
            { label: 'Kod produktu', value: '7906641' },
            { label: 'Kolor', value: 'Biały' },
            { label: 'Liczba warstw', value: '2' },
            { label: 'Szerokość arkusza', value: '21.5 cm' },
            { label: 'Długość rolki (m)', value: '140' },
            { label: 'Ilość rolek', value: '6' },
        ],
        features: ['Kompatybilny z Wave/Natura', 'Wysoka wydajność'],
        relatedProducts: ['automated-towel-21cm', 'automated-towel-25cm']
    },
    {
        id: 'automated-towel-19-5cm',
        slug: 'recznik-automatyczny-19-5cm',
        name: 'Selpak Professional Ręcznik Automatyczny 19.5cm',
        nameEn: 'Selpak Professional Automated Dispenser Towel 19.5cm',
        category: 'tissue-paper',
        subcategory: 'Ręczniki papierowe',
        description: 'Kompaktowy ręcznik w roli do mniejszych dozowników automatycznych.',
        image: '/products/selpak/selpak-professional-automated-dispenser-towel-19-5cm.webp',
        specs: [
            { label: 'Kod produktu', value: '7906651' },
            { label: 'Kolor', value: 'Biały' },
            { label: 'Liczba warstw', value: '2' },
            { label: 'Szerokość arkusza', value: '19.5 cm' },
            { label: 'Długość rolki (m)', value: '120' },
            { label: 'Ilość rolek', value: '6' },
        ],
        features: ['Kompaktowy rozmiar', 'Ekonomiczny'],
        relatedProducts: ['automated-towel-21cm']
    },
    {
        id: 'automated-towel-25cm',
        slug: 'recznik-automatyczny-25cm',
        name: 'Selpak Professional Ręcznik Automatyczny 25cm',
        nameEn: 'Selpak Professional Automated Dispenser Towel 25cm',
        category: 'tissue-paper',
        subcategory: 'Ręczniki papierowe',
        description: 'Szeroki ręcznik w roli do dozowników automatycznych. Większa powierzchnia osuszania.',
        image: '/products/selpak/selpak-professional-automated-dispenser-towel-25cm.webp',
        options: [
            { value: '150m', label: '150 m', code: '7906661' },
            { value: '100m', label: '100 m', code: '7906662' },
        ],
        specs: [
            { label: 'Kod produktu', value: '7906661' },
            { label: 'Kolor', value: 'Biały' },
            { label: 'Liczba warstw', value: '2' },
            { label: 'Szerokość arkusza', value: '25 cm' },
            { label: 'Długość rolki (m)', value: '150' },
            { label: 'Ilość rolek', value: '6' },
        ],
        features: ['Największy format', 'Wysoka wydajność'],
        relatedProducts: ['automated-towel-21cm', 'automated-towel-21-5cm']
    },
    {
        id: 'extra-automated-towel-21cm',
        slug: 'recznik-automatyczny-extra-21cm',
        name: 'Selpak Professional Extra Ręcznik Automatyczny 21cm',
        nameEn: 'Selpak Professional Extra Automated Dispenser Towel 21cm',
        category: 'tissue-paper',
        subcategory: 'Ręczniki papierowe',
        description: 'Premium ręcznik do dozowników automatycznych z linii Extra. Wyższa gramatura i chłonność.',
        image: '/products/selpak/selpak-professional-extra-automated-dispenser-towel-21cm.webp',
        options: [
            { value: '140m', label: '140 m', code: '7906671' },
            { value: '100m', label: '100 m', code: '7906672' },
        ],
        specs: [
            { label: 'Kod produktu', value: '7906671' },
            { label: 'Kolor', value: 'Biały' },
            { label: 'Liczba warstw', value: '2' },
            { label: 'Szerokość arkusza', value: '21 cm' },
            { label: 'Długość rolki (m)', value: '140' },
            { label: 'Gramatura', value: '2 x 17 g/m²' },
            { label: 'Ilość rolek', value: '6' },
        ],
        features: ['Linia Extra', 'Wyższa gramatura', 'Premium jakość'],
        relatedProducts: ['automated-towel-21cm'],
        badge: 'EXTRA'
    },
    {
        id: 'center-feed-towel',
        slug: 'recznik-centralnego-rozwijania',
        name: 'Selpak Professional Ręcznik Centralnego Rozwijania',
        nameEn: 'Selpak Professional Center Feed Towel',
        category: 'tissue-paper',
        subcategory: 'Ręczniki papierowe',
        description: 'Ręcznik w roli z centralnym podawaniem. Idealne rozwiązanie do kuchni i stref roboczych.',
        image: '/products/selpak/selpak-professional-center-feed-towel.webp',
        specs: [
            { label: 'Kod produktu', value: '7907101' },
            { label: 'Kolor', value: 'Biały' },
            { label: 'Liczba warstw', value: '2' },
            { label: 'Długość rolki (m)', value: '120' },
            { label: 'Ilość rolek', value: '6' },
        ],
        features: ['Centralne podawanie', 'Higieniczne użytkowanie'],
        relatedProducts: ['extra-center-feed-towel']
    },
    {
        id: 'extra-center-feed-towel',
        slug: 'recznik-centralnego-rozwijania-extra',
        name: 'Selpak Professional Extra Ręcznik Centralnego Rozwijania',
        nameEn: 'Selpak Professional Extra Center Feed Towel',
        category: 'tissue-paper',
        subcategory: 'Ręczniki papierowe',
        description: 'Premium ręcznik w roli z centralnym podawaniem z linii Extra.',
        image: '/products/selpak/selpak-professional-extra-center-feed-towel.webp',
        specs: [
            { label: 'Kod produktu', value: '7907111' },
            { label: 'Kolor', value: 'Biały' },
            { label: 'Liczba warstw', value: '2' },
            { label: 'Długość rolki (m)', value: '140' },
            { label: 'Ilość rolek', value: '6' },
        ],
        features: ['Linia Extra', 'Wyższa gramatura'],
        relatedProducts: ['center-feed-towel'],
        badge: 'EXTRA'
    },
    {
        id: 'jumbo-towel-510m',
        slug: 'recznik-jumbo-510m',
        name: 'Selpak Professional Ręcznik Jumbo 510m',
        nameEn: 'Selpak Professional Jumbo Towel 510m',
        category: 'tissue-paper',
        subcategory: 'Ręczniki papierowe',
        description: 'Ekonomiczny ręcznik w wielkiej roli Jumbo. Idealne dla obiektów o bardzo dużym zużyciu.',
        image: '/products/selpak/selpak-professional-jumbo-towel-510m.webp',
        specs: [
            { label: 'Kod produktu', value: '7907201' },
            { label: 'Kolor', value: 'Biały' },
            { label: 'Liczba warstw', value: '1' },
            { label: 'Długość rolki (m)', value: '510' },
            { label: 'Średnica rolki', value: '25 cm' },
            { label: 'Ilość rolek', value: '6' },
        ],
        features: ['Największa wydajność', 'Ekonomiczny wybór'],
        relatedProducts: ['center-feed-towel']
    },
    {
        id: 'premium-handy-towel',
        slug: 'recznik-handy-premium',
        name: 'Selpak Professional Premium Ręcznik Handy',
        nameEn: 'Selpak Professional Premium Handy Dispenser Towel',
        category: 'tissue-paper',
        subcategory: 'Ręczniki papierowe',
        description: 'Kompaktowy ręcznik do małych dozowników. Idealne rozwiązanie dla pokojów hotelowych.',
        image: '/products/selpak/selpak-professional-premium-handy-dispenser-towel.webp',
        specs: [
            { label: 'Kod produktu', value: '7907301' },
            { label: 'Kolor', value: 'Biały' },
            { label: 'Liczba warstw', value: '2' },
            { label: 'Ilość w opakowaniu', value: '100 listków' },
            { label: 'Ilość w kartonie', value: '20 opakowań' },
        ],
        features: ['Kompaktowy rozmiar', 'Idealne do pokojów'],
        relatedProducts: ['extra-z-fold-towel'],
        badge: 'PREMIUM'
    },
    {
        id: 'towel-8-rolls',
        slug: 'recznik-8-rolek',
        name: 'Selpak Professional Ręcznik 8 Rolek',
        nameEn: 'Selpak Professional Towel 8 Rolls',
        category: 'tissue-paper',
        subcategory: 'Ręczniki papierowe',
        description: 'Klasyczny ręcznik papierowy w rolkach. Wszechstronne zastosowanie.',
        image: '/products/selpak/selpak-professional-towel-8-rolls.webp',
        specs: [
            { label: 'Kod produktu', value: '7908101' },
            { label: 'Kolor', value: 'Biały' },
            { label: 'Liczba warstw', value: '2' },
            { label: 'Ilość rolek', value: '8' },
            { label: 'Arkuszy na rolce', value: '50' },
        ],
        features: ['Uniwersalne zastosowanie', 'Wygodne opakowanie'],
        relatedProducts: ['extra-towel-8-rolls']
    },
    {
        id: 'extra-towel-8-rolls',
        slug: 'recznik-extra-8-rolek',
        name: 'Selpak Professional Extra Ręcznik 8 Rolek',
        nameEn: 'Selpak Professional Extra Towel 8 Rolls',
        category: 'tissue-paper',
        subcategory: 'Ręczniki papierowe',
        description: 'Premium ręcznik papierowy w rolkach z linii Extra.',
        image: '/products/selpak/selpak-professional-extra-towels-8-rolls.webp',
        specs: [
            { label: 'Kod produktu', value: '7908111' },
            { label: 'Kolor', value: 'Biały' },
            { label: 'Liczba warstw', value: '3' },
            { label: 'Ilość rolek', value: '8' },
            { label: 'Arkuszy na rolce', value: '50' },
        ],
        features: ['Linia Extra', '3 warstwy', 'Premium jakość'],
        relatedProducts: ['towel-8-rolls'],
        badge: 'EXTRA'
    },

    // ==================== TOILET PAPER ====================
    {
        id: 'jumbo-toilet-paper-150m',
        slug: 'papier-toaletowy-jumbo-150m',
        name: 'Selpak Professional Extra Papier Toaletowy Jumbo 150m',
        nameEn: 'Selpak Professional Extra Jumbo Toilet Paper 150m',
        category: 'tissue-paper',
        subcategory: 'Papier toaletowy',
        description: 'Profesjonalny papier toaletowy Jumbo o długości 150m. Ekonomiczne rozwiązanie dla obiektów publicznych.',
        image: '/products/selpak/selpak-professional-extra-jumbo-toilet-paper-150m.webp',
        options: [
            { value: '150m', label: '150 m', code: '7909101' },
            { value: '100m', label: '100 m', code: '7909102' },
        ],
        specs: [
            { label: 'Kod produktu', value: '7909101' },
            { label: 'Kolor', value: 'Biały' },
            { label: 'Liczba warstw', value: '2' },
            { label: 'Długość rolki (m)', value: '150' },
            { label: 'Średnica rolki', value: '19 cm' },
            { label: 'Ilość rolek', value: '12' },
        ],
        features: ['Jumbo format', 'Długotrwałe użytkowanie', 'Linia Extra'],
        relatedProducts: ['center-feed-toilet-paper'],
        badge: 'BESTSELLER'
    },
    {
        id: 'center-feed-toilet-paper',
        slug: 'papier-toaletowy-centralnego-rozwijania',
        name: 'Selpak Professional Papier Toaletowy Centralnego Rozwijania',
        nameEn: 'Selpak Professional Center Feed Toilet Paper',
        category: 'tissue-paper',
        subcategory: 'Papier toaletowy',
        description: 'Papier toaletowy z centralnym podawaniem do specjalnych dozowników.',
        image: '/products/selpak/selpak-professional-center-feed-toilet-paper.webp',
        specs: [
            { label: 'Kod produktu', value: '7909201' },
            { label: 'Kolor', value: 'Biały' },
            { label: 'Liczba warstw', value: '2' },
            { label: 'Długość rolki (m)', value: '120' },
            { label: 'Ilość rolek', value: '12' },
        ],
        features: ['Centralne podawanie', 'Higieniczne rozwiązanie'],
        relatedProducts: ['jumbo-toilet-paper-150m']
    },
    {
        id: 'extra-toilet-paper-24',
        slug: 'papier-toaletowy-extra-24-rolki',
        name: 'Selpak Professional Extra Papier Toaletowy 24 Rolki',
        nameEn: 'Selpak Professional Extra Toilet Paper 24 Rolls',
        category: 'tissue-paper',
        subcategory: 'Papier toaletowy',
        description: 'Premium papier toaletowy w standardowych rolkach. Pakowany po 24 sztuki.',
        image: '/products/selpak/selpak-professional-extra-tiolet-paper-24-rolls.webp',
        specs: [
            { label: 'Kod produktu', value: '7909301' },
            { label: 'Kolor', value: 'Biały' },
            { label: 'Liczba warstw', value: '3' },
            { label: 'Ilość rolek', value: '24' },
            { label: 'Arkuszy na rolce', value: '150' },
        ],
        features: ['Linia Extra', '3 warstwy', 'Duże opakowanie'],
        relatedProducts: ['jumbo-toilet-paper-150m'],
        badge: 'EXTRA'
    },

    // ==================== NAPKINS ====================
    {
        id: 'v-fold-napkin',
        slug: 'serwetka-v-fold',
        name: 'Selpak Professional Serwetka V-Fold',
        nameEn: 'Selpak Professional V Fold Napkin',
        category: 'napkins',
        subcategory: 'Serwetki',
        description: 'Serwetki składane V-Fold do dozowników. Eleganckie wykończenie stołu w restauracji.',
        image: '/products/selpak/selpak-professional-v-fold-napkin.webp',
        specs: [
            { label: 'Kod produktu', value: '7910101' },
            { label: 'Kolor', value: 'Biały' },
            { label: 'Liczba warstw', value: '1' },
            { label: 'Wymiary', value: '21 x 16 cm' },
            { label: 'Ilość w opakowaniu', value: '200 szt' },
            { label: 'Ilość w kartonie', value: '5 opakowań' },
        ],
        features: ['Do dozowników', 'Elegancki wygląd'],
        relatedProducts: ['dispenser-napkin']
    },
    {
        id: 'dispenser-napkin',
        slug: 'serwetka-do-dozownika',
        name: 'Selpak Professional Serwetka do Dozownika',
        nameEn: 'Selpak Professional Dispenser Napkin',
        category: 'napkins',
        subcategory: 'Serwetki',
        description: 'Kompaktowe serwetki do dozowników stołowych. Ekonomiczne i estetyczne.',
        image: '/products/selpak/selpak-professional-dispenser-napkin.webp',
        specs: [
            { label: 'Kod produktu', value: '7910201' },
            { label: 'Kolor', value: 'Biały' },
            { label: 'Liczba warstw', value: '1' },
            { label: 'Wymiary', value: '17 x 17 cm' },
            { label: 'Ilość w opakowaniu', value: '250 szt' },
            { label: 'Ilość w kartonie', value: '18 opakowań' },
        ],
        features: ['Kompaktowy rozmiar', 'Ekonomiczne'],
        relatedProducts: ['v-fold-napkin']
    },

    // ==================== DISPENSERS - TOUCH ====================
    {
        id: 'touch-z-fold-dispenser-white',
        slug: 'dozownik-touch-z-fold-bialy',
        name: 'Selpak Professional Touch Dozownik Z-Fold Biały',
        nameEn: 'Selpak Professional Touch Z Fold Towel Dispenser White',
        category: 'dispensers',
        subcategory: 'Dozowniki Touch',
        description: 'Nowoczesny dozownik ręczników Z-Fold z serii Touch. Elegancki design w kolorze białym.',
        image: '/products/selpak/selpak-professional-touch-z-fold-towel-dispenser-white.webp',
        specs: [
            { label: 'Kod produktu', value: 'TOUCH-ZF-W' },
            { label: 'Kolor', value: 'Biały' },
            { label: 'Materiał', value: 'ABS' },
            { label: 'Typ ręcznika', value: 'Z-Fold' },
            { label: 'Wymiary', value: '27.5 x 13 x 37 cm' },
            { label: 'Pojemność', value: '400 listków' },
        ],
        features: ['Seria Touch', 'Nowoczesny design', 'Łatwe uzupełnianie'],
        relatedProducts: ['touch-z-fold-dispenser-black', 'extra-z-fold-towel']
    },
    {
        id: 'touch-z-fold-dispenser-black',
        slug: 'dozownik-touch-z-fold-czarny',
        name: 'Selpak Professional Touch Dozownik Z-Fold Czarny',
        nameEn: 'Selpak Professional Touch Z Fold Towel Dispenser Black',
        category: 'dispensers',
        subcategory: 'Dozowniki Touch',
        description: 'Nowoczesny dozownik ręczników Z-Fold z serii Touch. Elegancki design w kolorze czarnym.',
        image: '/products/selpak/selpak-professional-touch-z-fold-towel-dispenser-black.webp',
        specs: [
            { label: 'Kod produktu', value: 'TOUCH-ZF-B' },
            { label: 'Kolor', value: 'Czarny' },
            { label: 'Materiał', value: 'ABS' },
            { label: 'Typ ręcznika', value: 'Z-Fold' },
            { label: 'Wymiary', value: '27.5 x 13 x 37 cm' },
            { label: 'Pojemność', value: '400 listków' },
        ],
        features: ['Seria Touch', 'Elegancka czerń', 'Łatwe uzupełnianie'],
        relatedProducts: ['touch-z-fold-dispenser-white', 'extra-z-fold-towel']
    },

    // ==================== DISPENSERS - WAVE ====================
    {
        id: 'wave-automated-dispenser-white',
        slug: 'dozownik-wave-automatyczny-bialy',
        name: 'Selpak Professional Wave Dozownik Automatyczny Biały',
        nameEn: 'Selpak Professional Wave Automated Towel Dispenser White',
        category: 'dispensers',
        subcategory: 'Dozowniki Wave',
        description: 'Automatyczny bezdotykowy dozownik ręczników z serii Wave. Maksymalna higiena.',
        image: '/products/selpak/selpak-professional-wawe-automated-towel-dispenser-white.webp',
        specs: [
            { label: 'Kod produktu', value: 'WAVE-AUTO-W' },
            { label: 'Kolor', value: 'Biały' },
            { label: 'Materiał', value: 'ABS' },
            { label: 'Typ', value: 'Automatyczny' },
            { label: 'Zasilanie', value: 'Baterie / 230V' },
            { label: 'Wymiary', value: '32 x 22 x 40 cm' },
        ],
        features: ['Seria Wave', 'Bezdotykowy', 'Sensoryczne podawanie'],
        relatedProducts: ['wave-automated-dispenser-black', 'automated-towel-21cm'],
        badge: 'BEZDOTYKOWY'
    },
    {
        id: 'wave-automated-dispenser-black',
        slug: 'dozownik-wave-automatyczny-czarny',
        name: 'Selpak Professional Wave Dozownik Automatyczny Czarny',
        nameEn: 'Selpak Professional Wave Automated Towel Dispenser Black',
        category: 'dispensers',
        subcategory: 'Dozowniki Wave',
        description: 'Automatyczny bezdotykowy dozownik ręczników z serii Wave w eleganckiej czerni.',
        image: '/products/selpak/selpak-professional-wawe-automated-towel-dispenser-black.webp',
        specs: [
            { label: 'Kod produktu', value: 'WAVE-AUTO-B' },
            { label: 'Kolor', value: 'Czarny' },
            { label: 'Materiał', value: 'ABS' },
            { label: 'Typ', value: 'Automatyczny' },
            { label: 'Zasilanie', value: 'Baterie / 230V' },
            { label: 'Wymiary', value: '32 x 22 x 40 cm' },
        ],
        features: ['Seria Wave', 'Bezdotykowy', 'Premium design'],
        relatedProducts: ['wave-automated-dispenser-white', 'automated-towel-21cm'],
        badge: 'BEZDOTYKOWY'
    },
    {
        id: 'wave-center-feed-dispenser-white',
        slug: 'dozownik-wave-center-feed-bialy',
        name: 'Selpak Professional Wave Dozownik Center Feed Biały',
        nameEn: 'Selpak Professional Wave Center Feed Towel Dispenser White',
        category: 'dispensers',
        subcategory: 'Dozowniki Wave',
        description: 'Dozownik do ręczników z centralnym podawaniem z serii Wave.',
        image: '/products/selpak/selpak-professional-wawe-center-feed-towel-dispenser-white.webp',
        specs: [
            { label: 'Kod produktu', value: 'WAVE-CF-W' },
            { label: 'Kolor', value: 'Biały' },
            { label: 'Materiał', value: 'ABS' },
            { label: 'Typ ręcznika', value: 'Center Feed' },
            { label: 'Wymiary', value: '25 x 25 x 35 cm' },
        ],
        features: ['Seria Wave', 'Center Feed', 'Higieniczne'],
        relatedProducts: ['wave-center-feed-dispenser-black', 'center-feed-towel']
    },
    {
        id: 'wave-center-feed-dispenser-black',
        slug: 'dozownik-wave-center-feed-czarny',
        name: 'Selpak Professional Wave Dozownik Center Feed Czarny',
        nameEn: 'Selpak Professional Wave Center Feed Towel Dispenser Black',
        category: 'dispensers',
        subcategory: 'Dozowniki Wave',
        description: 'Dozownik do ręczników z centralnym podawaniem z serii Wave w czerni.',
        image: '/products/selpak/selpak-professional-wawe-center-feed-towel-dispenser-black.webp',
        specs: [
            { label: 'Kod produktu', value: 'WAVE-CF-B' },
            { label: 'Kolor', value: 'Czarny' },
            { label: 'Materiał', value: 'ABS' },
            { label: 'Typ ręcznika', value: 'Center Feed' },
            { label: 'Wymiary', value: '25 x 25 x 35 cm' },
        ],
        features: ['Seria Wave', 'Center Feed', 'Elegancka czerń'],
        relatedProducts: ['wave-center-feed-dispenser-white', 'center-feed-towel']
    },
    {
        id: 'wave-toilet-paper-dispenser-white',
        slug: 'dozownik-wave-papier-toaletowy-bialy',
        name: 'Selpak Professional Wave Dozownik Papieru Toaletowego Biały',
        nameEn: 'Selpak Professional Wave Center Feed Toilet Paper Dispenser White',
        category: 'dispensers',
        subcategory: 'Dozowniki Wave',
        description: 'Dozownik papieru toaletowego z centralnym podawaniem z serii Wave.',
        image: '/products/selpak/selpak-professional-wawe-center-feed-toilet-paper-dispenser-white.webp',
        specs: [
            { label: 'Kod produktu', value: 'WAVE-TP-W' },
            { label: 'Kolor', value: 'Biały' },
            { label: 'Materiał', value: 'ABS' },
            { label: 'Typ papieru', value: 'Jumbo / Center Feed' },
            { label: 'Wymiary', value: '30 x 14 x 30 cm' },
        ],
        features: ['Seria Wave', 'Do papieru Jumbo'],
        relatedProducts: ['wave-toilet-paper-dispenser-black', 'jumbo-toilet-paper-150m']
    },
    {
        id: 'wave-toilet-paper-dispenser-black',
        slug: 'dozownik-wave-papier-toaletowy-czarny',
        name: 'Selpak Professional Wave Dozownik Papieru Toaletowego Czarny',
        nameEn: 'Selpak Professional Wave Center Feed Toilet Paper Dispenser Black',
        category: 'dispensers',
        subcategory: 'Dozowniki Wave',
        description: 'Dozownik papieru toaletowego z centralnym podawaniem z serii Wave w czerni.',
        image: '/products/selpak/selpak-professional-wawe-center-feed-toilet-paper-dispenser-black.webp',
        specs: [
            { label: 'Kod produktu', value: 'WAVE-TP-B' },
            { label: 'Kolor', value: 'Czarny' },
            { label: 'Materiał', value: 'ABS' },
            { label: 'Typ papieru', value: 'Jumbo / Center Feed' },
            { label: 'Wymiary', value: '30 x 14 x 30 cm' },
        ],
        features: ['Seria Wave', 'Elegancka czerń'],
        relatedProducts: ['wave-toilet-paper-dispenser-white', 'jumbo-toilet-paper-150m']
    },

    // ==================== DISPENSERS - NATURA ====================
    {
        id: 'natura-automated-dispenser-white',
        slug: 'dozownik-natura-automatyczny-bialy',
        name: 'Selpak Professional Natura Dozownik Automatyczny Biały',
        nameEn: 'Selpak Professional Natura Automated Towel Dispenser White',
        category: 'dispensers',
        subcategory: 'Dozowniki Natura',
        description: 'Automatyczny dozownik ręczników z ekologicznej serii Natura. Naturalny design.',
        image: '/products/selpak/selpak-professional-natura-autoamted-towel-dispenser.webp',
        specs: [
            { label: 'Kod produktu', value: 'NATURA-AUTO-W' },
            { label: 'Kolor', value: 'Biały' },
            { label: 'Materiał', value: 'ABS Recycled' },
            { label: 'Typ', value: 'Automatyczny' },
            { label: 'Wymiary', value: '30 x 20 x 38 cm' },
        ],
        features: ['Seria Natura', 'Eco-friendly', 'Materiał z recyklingu'],
        relatedProducts: ['natura-automated-dispenser-black', 'automated-towel-21cm'],
        isRecycled: true
    },
    {
        id: 'natura-automated-dispenser-black',
        slug: 'dozownik-natura-automatyczny-czarny',
        name: 'Selpak Professional Natura Dozownik Automatyczny Czarny',
        nameEn: 'Selpak Professional Natura Automated Towel Dispenser Black',
        category: 'dispensers',
        subcategory: 'Dozowniki Natura',
        description: 'Automatyczny dozownik ręczników z ekologicznej serii Natura w kolorze czarnym.',
        image: '/products/selpak/selpak-professional-natura-autoamted-towel-dispenser-black.webp',
        specs: [
            { label: 'Kod produktu', value: 'NATURA-AUTO-B' },
            { label: 'Kolor', value: 'Czarny' },
            { label: 'Materiał', value: 'ABS Recycled' },
            { label: 'Typ', value: 'Automatyczny' },
            { label: 'Wymiary', value: '30 x 20 x 38 cm' },
        ],
        features: ['Seria Natura', 'Eco-friendly', 'Materiał z recyklingu'],
        relatedProducts: ['natura-automated-dispenser-white', 'automated-towel-21cm'],
        isRecycled: true
    },
    {
        id: 'natura-mechanic-dispenser-white',
        slug: 'dozownik-natura-mechaniczny-bialy',
        name: 'Selpak Professional Natura Dozownik Mechaniczny Biały',
        nameEn: 'Selpak Professional Natura Mechanic Dispenser White',
        category: 'dispensers',
        subcategory: 'Dozowniki Natura',
        description: 'Mechaniczny dozownik ręczników z ekologicznej serii Natura.',
        image: '/products/selpak/selpak-professional-natura-mechanic-dispenser-white.webp',
        specs: [
            { label: 'Kod produktu', value: 'NATURA-MECH-W' },
            { label: 'Kolor', value: 'Biały' },
            { label: 'Materiał', value: 'ABS Recycled' },
            { label: 'Typ', value: 'Mechaniczny' },
            { label: 'Wymiary', value: '28 x 18 x 36 cm' },
        ],
        features: ['Seria Natura', 'Bezprądowy', 'Eco-friendly'],
        relatedProducts: ['natura-mechanic-dispenser-black'],
        isRecycled: true
    },
    {
        id: 'natura-mechanic-dispenser-black',
        slug: 'dozownik-natura-mechaniczny-czarny',
        name: 'Selpak Professional Natura Dozownik Mechaniczny Czarny',
        nameEn: 'Selpak Professional Natura Mechanic Dispenser Black',
        category: 'dispensers',
        subcategory: 'Dozowniki Natura',
        description: 'Mechaniczny dozownik ręczników z ekologicznej serii Natura w czerni.',
        image: '/products/selpak/selpak-professional-natura-mechanic-dispenser-black.webp',
        specs: [
            { label: 'Kod produktu', value: 'NATURA-MECH-B' },
            { label: 'Kolor', value: 'Czarny' },
            { label: 'Materiał', value: 'ABS Recycled' },
            { label: 'Typ', value: 'Mechaniczny' },
            { label: 'Wymiary', value: '28 x 18 x 36 cm' },
        ],
        features: ['Seria Natura', 'Bezprądowy', 'Eco-friendly'],
        relatedProducts: ['natura-mechanic-dispenser-white'],
        isRecycled: true
    },

    // ==================== OTHER DISPENSERS ====================
    {
        id: 'pickasso-napkin-dispenser',
        slug: 'dozownik-serwetek-pickasso',
        name: 'Selpak Professional Pickasso Dozownik Serwetek V-Fold',
        nameEn: 'Selpak Professional Pickasso V-Fold Napkin Dispenser',
        category: 'dispensers',
        subcategory: 'Dozowniki Pickasso',
        description: 'Elegancki dozownik serwetek V-Fold z serii Pickasso. Idealne na stoły restauracyjne.',
        image: '/products/selpak/selpak-prefessional-pickassso-v-fold-napkin-dispenser.webp',
        specs: [
            { label: 'Kod produktu', value: 'PICK-NAPKIN' },
            { label: 'Kolor', value: 'Chromowany' },
            { label: 'Materiał', value: 'Metal chromowany' },
            { label: 'Typ serwetki', value: 'V-Fold' },
            { label: 'Pojemność', value: '200 serwetek' },
        ],
        features: ['Seria Pickasso', 'Na stoły', 'Elegancki design'],
        relatedProducts: ['v-fold-napkin']
    },
    {
        id: 'toilet-seat-cover-dispenser',
        slug: 'dozownik-nakladek-na-deski',
        name: 'Selpak Professional Dozownik Nakładek na Deski Sedesowe',
        nameEn: 'Selpak Professional Toilet Seat Cover Dispenser',
        category: 'dispensers',
        subcategory: 'Dozowniki specjalne',
        description: 'Profesjonalny dozownik nakładek higienicznych na deski sedesowe.',
        image: '/products/selpak/selpak-professional-toilet-seat-cover-dispenser.webp',
        specs: [
            { label: 'Kod produktu', value: 'TSC-DISP' },
            { label: 'Kolor', value: 'Biały' },
            { label: 'Materiał', value: 'ABS' },
            { label: 'Pojemność', value: '250 nakładek' },
        ],
        features: ['Maksymalna higiena', 'Łatwe uzupełnianie'],
        relatedProducts: []
    },

    // ==================== SENS LINE ====================
    {
        id: 'sens-toilet-paper-24',
        slug: 'sens-papier-toaletowy-24',
        name: 'Sens Papier Toaletowy 24 Rolki',
        nameEn: 'Sens Toilet Paper 24 Rolls',
        category: 'tissue-paper',
        subcategory: 'Linia Sens',
        description: 'Ekonomiczna linia papieru toaletowego Sens. Dobra jakość w przystępnej cenie.',
        image: '/products/selpak/sens-toilet-paper-24.webp',
        specs: [
            { label: 'Kod produktu', value: 'SENS-TP-24' },
            { label: 'Kolor', value: 'Biały' },
            { label: 'Liczba warstw', value: '2' },
            { label: 'Ilość rolek', value: '24' },
        ],
        features: ['Linia Sens', 'Ekonomiczny wybór'],
        relatedProducts: ['sens-towel-8x3', 'sens-z-fold-towel']
    },
    {
        id: 'sens-towel-8x3',
        slug: 'sens-recznik-8x3',
        name: 'Sens Ręcznik 8x3',
        nameEn: 'Sens Towel 8x3',
        category: 'tissue-paper',
        subcategory: 'Linia Sens',
        description: 'Ekonomiczny ręcznik papierowy z linii Sens. Pakowany po 3 opakowania x 8 rolek.',
        image: '/products/selpak/sens-towel-8x3.webp',
        specs: [
            { label: 'Kod produktu', value: 'SENS-TW-8X3' },
            { label: 'Kolor', value: 'Biały' },
            { label: 'Liczba warstw', value: '2' },
            { label: 'Ilość rolek', value: '24 (3x8)' },
        ],
        features: ['Linia Sens', 'Duże opakowanie'],
        relatedProducts: ['sens-toilet-paper-24', 'sens-z-fold-towel']
    },
    {
        id: 'sens-z-fold-towel',
        slug: 'sens-recznik-z-fold-200',
        name: 'Sens Ręcznik Z-Fold 200',
        nameEn: 'Sens Z-Fold Dispenser Towel 200',
        category: 'tissue-paper',
        subcategory: 'Linia Sens',
        description: 'Ekonomiczny ręcznik Z-Fold z linii Sens. 200 listków w opakowaniu.',
        image: '/products/selpak/sens-z-fold-dispenser-towel-200.webp',
        specs: [
            { label: 'Kod produktu', value: 'SENS-ZF-200' },
            { label: 'Kolor', value: 'Biały' },
            { label: 'Liczba warstw', value: '1' },
            { label: 'Ilość w opakowaniu', value: '200 listków' },
            { label: 'Ilość w kartonie', value: '12 opakowań' },
        ],
        features: ['Linia Sens', 'Ekonomiczny'],
        relatedProducts: ['sens-toilet-paper-24', 'sens-towel-8x3']
    },

    // ==================== SOLO LINE ====================
    {
        id: 'solo-16-fold-napkin',
        slug: 'solo-serwetka-16-fold',
        name: 'Solo Professional Serwetka 16-Fold 26.5x33',
        nameEn: 'Solo Professional 16 Fold Napkin 26.5x33',
        category: 'napkins',
        subcategory: 'Linia Solo',
        description: 'Serwetki składane 16-Fold z linii Solo Professional. Eleganckie wykończenie.',
        image: '/products/selpak/solo-professional-16-fold-napkin-26-5x33.webp',
        specs: [
            { label: 'Kod produktu', value: 'SOLO-NAP-16F' },
            { label: 'Kolor', value: 'Biały' },
            { label: 'Liczba warstw', value: '1' },
            { label: 'Wymiary', value: '26.5 x 33 cm' },
            { label: 'Składanie', value: '16-Fold' },
        ],
        features: ['Linia Solo', 'Eleganckie', 'Na stoły'],
        relatedProducts: ['v-fold-napkin', 'dispenser-napkin']
    },
];

// Helper functions
export function getProductBySlug(slug: string): SelpakProduct | undefined {
    return selpakProducts.find(p => p.slug === slug);
}

export function getProductsByCategory(category: SelpakProduct['category']): SelpakProduct[] {
    return selpakProducts.filter(p => p.category === category);
}

export function getRelatedProducts(productId: string): SelpakProduct[] {
    const product = selpakProducts.find(p => p.id === productId);
    if (!product || !product.relatedProducts) return [];
    return product.relatedProducts
        .map(id => selpakProducts.find(p => p.id === id))
        .filter((p): p is SelpakProduct => p !== undefined);
}

export function getAllCategories(): string[] {
    return [...new Set(selpakProducts.map(p => p.subcategory))];
}
