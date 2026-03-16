import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://nethoreca.pl';
    const lastModified = new Date('2026-03-06');

    // Core Pages
    const corePages = [
        { path: '', priority: 1.0 },
        { path: '/o-nas', priority: 0.8 },
        { path: '/kontakt', priority: 0.9 },
        { path: '/zapytanie-ofertowe', priority: 0.9 },
        { path: '/faq', priority: 0.7 },
        { path: '/polityka-prywatnosci', priority: 0.3 },
        { path: '/regulamin', priority: 0.3 },
    ];

    // Product Pages - High Priority
    const productPages = [
        { path: '/tekstylia-hotelowe', priority: 0.95 },
        { path: '/tekstylia-hotelowe/posciel', priority: 0.9 },
        { path: '/tekstylia-hotelowe/reczniki', priority: 0.9 },
        { path: '/tekstylia-hotelowe/reczniki/produkty', priority: 0.85 },
        { path: '/tekstylia-hotelowe/szlafroki', priority: 0.9 },
        { path: '/tekstylia-hotelowe/obrusy', priority: 0.9 },
        { path: '/tekstylia-hotelowe/stopki', priority: 0.85 },
        { path: '/chemia-ecolab', priority: 0.95 },
        { path: '/chemia-ecolab/srodki-czyszczace', priority: 0.85 },
        { path: '/chemia-ecolab/dezynfekcja', priority: 0.85 },
        { path: '/chemia-ecolab/higiena-kuchni', priority: 0.85 },
        { path: '/chemia-ecolab/pielegnacja-tkanin', priority: 0.85 },
        { path: '/selpak-professional', priority: 0.95 },
        { path: '/selpak-professional/produkty', priority: 0.85 },
        { path: '/selpak-professional/seria-recycled', priority: 0.85 },
        { path: '/selpak-professional/dozowniki', priority: 0.85 },
        { path: '/sprzet-akcesoria', priority: 0.9 },
        { path: '/sprzet-akcesoria/wozki', priority: 0.85 },
        { path: '/sprzet-akcesoria/mopy', priority: 0.85 },
        { path: '/sprzet-akcesoria/maszyny', priority: 0.85 },
        { path: '/sprzet-akcesoria/akcesoria', priority: 0.85 },
    ];

    // Service Pages
    const servicePages = [
        { path: '/pralnia-dla-hoteli', priority: 0.9 },
        { path: '/pralnie-partnerskie', priority: 0.8 },
    ];

    // Industry & Trust Pages
    const industryPages = [
        { path: '/branze/hotele-resorty', priority: 0.8 },
        { path: '/branze/hotele-butikowe', priority: 0.8 },
        { path: '/branze/aparthotele', priority: 0.8 },
        { path: '/case-studies', priority: 0.7 },
    ];

    // Blog Pages
    const blogPages = [
        { path: '/blog', priority: 0.7 },
        { path: '/blog/jak-zmniejszyc-koszty-pralnicze-w-hotelu', priority: 0.7 },
    ];

    // Tools
    const toolPages = [
        { path: '/kalkulator-oszczednosci', priority: 0.8 },
    ];

    const allEntries: MetadataRoute.Sitemap = [];

    const addEntries = (pages: { path: string; priority: number }[], changeFreq: 'daily' | 'weekly' | 'monthly') => {
        pages.forEach(page => {
            allEntries.push({
                url: `${baseUrl}${page.path}`,
                lastModified,
                changeFrequency: changeFreq,
                priority: page.priority,
            });
        });
    };

    addEntries(corePages, 'monthly');
    addEntries(productPages, 'weekly');
    addEntries(servicePages, 'weekly');
    addEntries(industryPages, 'monthly');
    addEntries(blogPages, 'weekly');
    addEntries(toolPages, 'monthly');

    return allEntries;
}
