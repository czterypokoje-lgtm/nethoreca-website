// Structured Data (JSON-LD) for Google E-E-A-T signals and AEO

const LOGO_URL = 'https://nethoreca.pl/nethoreca-logo.webp';
const BASE_URL = 'https://nethoreca.pl';

export const organizationSchema = {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService"],
    "@id": `${BASE_URL}/#organization`,
    "name": "NetHoreca",
    "legalName": "NetHoreca Sp. z o.o.",
    "url": BASE_URL,
    "logo": {
        "@type": "ImageObject",
        "url": LOGO_URL,
        "width": 200,
        "height": 60
    },
    "image": LOGO_URL,
    "foundingDate": "1998",
    "numberOfEmployees": { "@type": "QuantitativeValue", "value": 25 },
    "description": "Oficjalny partner Ecolab w Polsce. Kompleksowe rozwiązania B2B dla hoteli - tekstylia hotelowe, chemia profesjonalna Ecolab, produkty papierowe Selpak Professional, sprzęt sprzątający. Wynajem i sprzedaż.",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "Lazurowa 19/72",
        "addressLocality": "Warszawa",
        "addressRegion": "Mazowieckie",
        "postalCode": "01-314",
        "addressCountry": "PL"
    },
    "geo": {
        "@type": "GeoCoordinates",
        "latitude": 52.2297,
        "longitude": 20.9752
    },
    "areaServed": {
        "@type": "Country",
        "name": "Polska",
        "@id": "https://www.wikidata.org/wiki/Q36"
    },
    "serviceArea": [
        { "@type": "City", "name": "Warszawa" },
        { "@type": "City", "name": "Kraków" },
        { "@type": "City", "name": "Gdańsk" },
        { "@type": "City", "name": "Wrocław" },
        { "@type": "City", "name": "Poznań" },
        { "@type": "City", "name": "Łódź" },
        { "@type": "City", "name": "Zakopane" },
        { "@type": "City", "name": "Sopot" }
    ],
    "contactPoint": [
        {
            "@type": "ContactPoint",
            "telephone": "+48-500-312-292",
            "contactType": "sales",
            "areaServed": "PL",
            "availableLanguage": ["pl", "en"],
            "hoursAvailable": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "08:00",
                "closes": "17:00"
            }
        },
        {
            "@type": "ContactPoint",
            "telephone": "+48-572-582-727",
            "contactType": "customer service",
            "areaServed": "PL",
            "availableLanguage": ["pl"],
            "hoursAvailable": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "08:00",
                "closes": "17:00"
            }
        },
        {
            "@type": "ContactPoint",
            "email": "biuro@nethoreca.pl",
            "contactType": "sales",
            "areaServed": "PL"
        }
    ],
    "sameAs": [
        "https://www.facebook.com/nethoreca",
        "https://www.linkedin.com/company/nethoreca"
    ],
    "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "127",
        "bestRating": "5",
        "worstRating": "1"
    },
    "hasCredential": [
        {
            "@type": "EducationalOccupationalCredential",
            "name": "Certyfikowany Partner Ecolab"
        },
        {
            "@type": "EducationalOccupationalCredential",
            "name": "ISO 9001:2015"
        },
        {
            "@type": "EducationalOccupationalCredential",
            "name": "HACCP"
        }
    ],
    "knowsAbout": [
        "Tekstylia hotelowe",
        "Chemia profesjonalna Ecolab",
        "Wynajem pościeli hotelowej",
        "Sprzęt do sprzątania hoteli",
        "Selpak Professional - produkty papierowe",
        "Dozowniki papierowe dla hoteli",
        "Outsourcing pralni hotelowej",
        "Rozwiązania dla branży HoReCa"
    ],
    "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Katalog Produktów i Usług NetHoreca",
        "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Wynajem Tekstyliów Hotelowych", "url": `${BASE_URL}/tekstylia-hotelowe` } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Chemia Profesjonalna Ecolab", "url": `${BASE_URL}/chemia-ecolab` } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Selpak Professional - Produkty Papierowe", "url": `${BASE_URL}/selpak-professional` } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Pralnia dla Hoteli - Model HUB", "url": `${BASE_URL}/pralnia-dla-hoteli` } },
            { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Sprzęt i Akcesoria Sprzątające", "url": `${BASE_URL}/sprzet-akcesoria` } }
        ]
    }
};

// City-specific LocalBusiness schemas for geo SEO
const cityGeoData: Record<string, { lat: number; lng: number; postalCode: string; region: string }> = {
    warszawa: { lat: 52.2297, lng: 20.9752, postalCode: "01-314", region: "Mazowieckie" },
    krakow: { lat: 50.0647, lng: 19.9450, postalCode: "31-000", region: "Małopolskie" },
    gdansk: { lat: 54.3520, lng: 18.6466, postalCode: "80-001", region: "Pomorskie" },
    wroclaw: { lat: 51.1079, lng: 17.0385, postalCode: "50-001", region: "Dolnośląskie" },
    poznan: { lat: 52.4064, lng: 16.9252, postalCode: "60-001", region: "Wielkopolskie" },
    lodz: { lat: 51.7592, lng: 19.4560, postalCode: "90-001", region: "Łódźkie" },
    zakopane: { lat: 49.2992, lng: 19.9496, postalCode: "34-500", region: "Małopolskie" },
    sopot: { lat: 54.4418, lng: 18.5601, postalCode: "81-701", region: "Pomorskie" },
};

export const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${BASE_URL}/#local-business`,
    "name": "NetHoreca",
    "image": LOGO_URL,
    "url": BASE_URL,
    "telephone": "+48-500-312-292",
    "email": "biuro@nethoreca.pl",
    "priceRange": "$$",
    "currenciesAccepted": "PLN",
    "paymentAccepted": "Przelew bankowy, faktura VAT",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "Lazurowa 19/72",
        "addressLocality": "Warszawa",
        "addressRegion": "Mazowieckie",
        "postalCode": "01-314",
        "addressCountry": "PL"
    },
    "geo": {
        "@type": "GeoCoordinates",
        "latitude": 52.2297,
        "longitude": 20.9752
    },
    "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "17:00"
    },
    "areaServed": [
        { "@type": "City", "name": "Warszawa" },
        { "@type": "City", "name": "Kraków" },
        { "@type": "City", "name": "Gdańsk" },
        { "@type": "City", "name": "Wrocław" },
        { "@type": "City", "name": "Poznań" },
        { "@type": "City", "name": "Zakopane" },
        { "@type": "City", "name": "Sopot" },
        { "@type": "Country", "name": "Polska" }
    ],
    "sameAs": [
        "https://www.facebook.com/nethoreca",
        "https://www.linkedin.com/company/nethoreca"
    ],
    "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "127",
        "bestRating": "5",
        "worstRating": "1"
    }
};

// City-specific service schema for /pralnia-dla-hoteli/[city] pages
export const cityServiceSchema = (citySlug: string, cityName: string) => {
    const geo = cityGeoData[citySlug] || cityGeoData['warszawa'];
    return {
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": `${BASE_URL}/pralnia-dla-hoteli/${citySlug}#service`,
        "name": `Pralnia Hotelowa ${cityName} - NetHoreca`,
        "description": `Profesjonalna obsługa pralnicza hoteli w ${cityName}. Wynajem tekstyliów, pranie przemysłowe, transport 24/7. NetHoreca HUB - sieć 15 pralni partnerskich.`,
        "provider": {
            "@type": "Organization",
            "@id": `${BASE_URL}/#organization`,
            "name": "NetHoreca"
        },
        "areaServed": {
            "@type": "City",
            "name": cityName,
            "geo": {
                "@type": "GeoCoordinates",
                "latitude": geo.lat,
                "longitude": geo.lng
            }
        },
        "serviceType": "Pralnia Przemysłowa dla Hoteli",
        "url": `${BASE_URL}/pralnia-dla-hoteli/${citySlug}`,
        "offers": {
            "@type": "Offer",
            "seller": { "@type": "Organization", "name": "NetHoreca" },
            "priceCurrency": "PLN",
            "availability": "https://schema.org/InStock"
        }
    };
};

export const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "Czy jesteście oficjalnym partnerem Ecolab?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Tak, jesteśmy certyfikowanym, oficjalnym partnerem Ecolab w Polsce. Oferujemy pełną gamę produktów chemicznych Ecolab wraz z profesjonalnym wsparciem technicznym i szkoleniami."
            }
        },
        {
            "@type": "Question",
            "name": "Jakie tekstylia hotelowe oferujecie?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Oferujemy kompletny asortyment tekstyliów hotelowych: ręczniki (16 linii produktowych od NetHoreca), pościel hotelową, szlafroki, obrusy, serwetki i stopki łazienkowe. Wszystkie produkty dostępne w opcji wynajmu lub zakupu."
            }
        },
        {
            "@type": "Question",
            "name": "Czy oferujecie wynajem tekstyliów hotelowych?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Tak, oferujemy kompleksowy wynajem tekstyliów hotelowych z regularną wymianą, praniem i konserwacją. Usługa obejmuje dostawę, odbiór i profesjonalne pranie w specjalistycznej pralni."
            }
        },
        {
            "@type": "Question",
            "name": "Jakie produkty Ecolab są dostępne?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Oferujemy ponad 130 produktów Ecolab: środki do pralni (ECOBRITE), czyszczące do powierzchni, dezynfekcję (DRYSAN OXY), higienę kuchni, pielęgnację podłóg, środki do mycia naczyń i systemy dozujące."
            }
        },
        {
            "@type": "Question",
            "name": "Czy zapewniacie szkolenia z obsługi produktów Ecolab?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Tak, jako oficjalny partner Ecolab zapewniamy profesjonalne szkolenia dla personelu hotelowego w zakresie prawidłowego stosowania chemii, dozowania i bezpieczeństwa."
            }
        },
        {
            "@type": "Question",
            "name": "Jaki jest minimalny okres wynajmu tekstyliów?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Minimalna umowa wynajmu to 12 miesięcy. Oferujemy elastyczne warunki dostosowane do wielkości hotelu i sezonowości. Skontaktuj się z nami po indywidualną wycenę."
            }
        },
        {
            "@type": "Question",
            "name": "Czy oferujecie sprzęt do sprzątania?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Tak, oferujemy profesjonalny sprzęt: mopy Rasant (w tym ekologiczne Rasant Planet), wózki sprzątające Mobilette (Vario FLEXX, Healthguard), systemy dozujące Topmater i kompletne akcesoria."
            }
        },
        {
            "@type": "Question",
            "name": "Jak szybko realizujecie zamówienia?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Standardowe produkty magazynowe dostarczamy w ciągu 2-3 dni roboczych. Produkty na specjalne zamówienie - około 6 tygodni. Zapewniamy terminowe dostawy na terenie całej Polski."
            }
        },
        {
            "@type": "Question",
            "name": "Czy produkty są ekologiczne?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Tak, oferujemy linie ekologiczne: ręczniki GEKON (100% recykling), mopy Rasant Planet (100% materiały z recyklingu), ściereczki Polifix Microclin Planet. Produkty Ecolab spełniają najwyższe standardy środowiskowe."
            }
        },
        {
            "@type": "Question",
            "name": "Obsługujecie hotele w całej Polsce?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Tak, obsługujemy hotele na terenie całej Polski. Posiadamy sieć 15 pralni partnerskich w kluczowych miastach: Warszawa, Kraków, Gdańsk, Wrocław, Poznań, Zakopane, Sopot i inne."
            }
        },
        {
            "@type": "Question",
            "name": "Co to jest Selpak Professional?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Selpak Professional to linia profesjonalnych produktów papierowych dla branży HoReCa: ręczniki papierowe, papier toaletowy, serwetki, oraz nowoczesne dozowniki mechaniczne i automatyczne. Jako autoryzowany dystrybutor oferujemy pełną gamę produktów Selpak na polskim rynku."
            }
        }
    ]
};

export const breadcrumbSchema = (items: Array<{ name: string, url: string }>) => ({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.name,
        "item": item.url.startsWith('http') ? item.url : `${BASE_URL}${item.url}`
    }))
});

export const productSchema = (product: {
    name: string;
    description: string;
    image: string;
    sku: string;
    brand: string;
    price?: number;
    availability: string;
    category: string;
}) => ({
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "description": product.description,
    "image": product.image.startsWith('http') ? product.image : `${BASE_URL}${product.image}`,
    "sku": product.sku,
    "brand": {
        "@type": "Brand",
        "name": product.brand
    },
    ...(product.price && {
        "offers": {
            "@type": "Offer",
            "url": `${BASE_URL}/produkty/${product.sku}`,
            "priceCurrency": "PLN",
            "price": product.price,
            "priceValidUntil": new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
            "availability": `https://schema.org/${product.availability}`,
            "seller": {
                "@type": "Organization",
                "name": "NetHoreca"
            }
        }
    }),
    "category": product.category,
    "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.7",
        "reviewCount": "23"
    }
});

export const reviewSchema = (review: {
    author: string;
    rating: number;
    reviewBody: string;
    datePublished: string;
    hotelName: string;
}) => ({
    "@context": "https://schema.org",
    "@type": "Review",
    "author": {
        "@type": "Person",
        "name": review.author
    },
    "reviewRating": {
        "@type": "Rating",
        "ratingValue": review.rating,
        "bestRating": "5",
        "worstRating": "1"
    },
    "reviewBody": review.reviewBody,
    "datePublished": review.datePublished,
    "publisher": {
        "@type": "Organization",
        "name": review.hotelName
    }
});

export const serviceSchema = (service: {
    name: string;
    description: string;
    provider: string;
    areaServed: string;
    serviceType: string;
    url?: string;
}) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": service.serviceType,
    "name": service.name,
    "description": service.description,
    "url": service.url || BASE_URL,
    "provider": {
        "@type": "Organization",
        "@id": `${BASE_URL}/#organization`,
        "name": service.provider
    },
    "areaServed": {
        "@type": "Country",
        "name": service.areaServed
    },
    "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Katalog Usług Hotelowych",
        "itemListElement": [
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Wynajem Tekstyliów Hotelowych"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Sprzedaż Chemii Ecolab"
                }
            }
        ]
    }
});

// WebSite schema for Google sitelinks searchbox
export const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BASE_URL}/#website`,
    "name": "NetHoreca",
    "alternateName": "NetHoreca - Tekstylia Hotelowe i Chemia Ecolab",
    "url": BASE_URL,
    "inLanguage": "pl-PL",
    "description": "Kompleksowe rozwiązania B2B dla hoteli - tekstylia hotelowe, chemia Ecolab, Selpak Professional, sprzęt sprzątający. Wynajem i sprzedaż.",
    "publisher": {
        "@type": "Organization",
        "@id": `${BASE_URL}/#organization`,
        "name": "NetHoreca"
    },
    "potentialAction": {
        "@type": "SearchAction",
        "target": {
            "@type": "EntryPoint",
            "urlTemplate": `${BASE_URL}/?q={search_term_string}`
        },
        "query-input": "required name=search_term_string"
    }
};

// Article schema for blog posts
export const articleSchema = (article: {
    title: string;
    description: string;
    url: string;
    image: string;
    datePublished: string;
    dateModified: string;
    authorName: string;
    section: string;
}) => ({
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.description,
    "image": article.image.startsWith('http') ? article.image : `${BASE_URL}${article.image}`,
    "url": article.url.startsWith('http') ? article.url : `${BASE_URL}${article.url}`,
    "datePublished": article.datePublished,
    "dateModified": article.dateModified,
    "author": {
        "@type": "Person",
        "name": article.authorName
    },
    "publisher": {
        "@type": "Organization",
        "@id": `${BASE_URL}/#organization`,
        "name": "NetHoreca",
        "logo": {
            "@type": "ImageObject",
            "url": LOGO_URL
        }
    },
    "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": article.url.startsWith('http') ? article.url : `${BASE_URL}${article.url}`
    },
    "articleSection": article.section,
    "inLanguage": "pl-PL"
});

// ItemList schema for product category pages
export const itemListSchema = (items: Array<{ name: string; url: string; image?: string; position?: number }>) => ({
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": items.map((item, index) => ({
        "@type": "ListItem",
        "position": item.position || index + 1,
        "name": item.name,
        "url": item.url.startsWith('http') ? item.url : `${BASE_URL}${item.url}`,
        ...(item.image && { "image": item.image.startsWith('http') ? item.image : `${BASE_URL}${item.image}` })
    }))
});

// Speakable schema for AEO (Answer Engine Optimization)
export const speakableSchema = (pageUrl: string, cssSelectors: string[]) => ({
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": pageUrl.startsWith('http') ? pageUrl : `${BASE_URL}${pageUrl}`,
    "url": pageUrl.startsWith('http') ? pageUrl : `${BASE_URL}${pageUrl}`,
    "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": cssSelectors
    }
});
