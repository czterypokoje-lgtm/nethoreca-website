import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { createPageMetadata } from '@/lib/seo-metadata';
import styles from './page.module.css';
import {
    ArrowRight,
    Blog,
    Time,
    Tag
} from '@carbon/icons-react';

export const metadata: Metadata = createPageMetadata({
    title: 'Blog - Porady i Wiedza dla Hotelarzy | NetHoreca',
    description: 'Blog NetHoreca: jak zmniejszyć koszty pralni hotelowej, optymalizacja housekeepingu, trendy w hotelarstwie. 26 lat doświadczenia w branży HoReCa.',
    path: '/blog',
    keywords: [
        'blog hotelowy',
        'porady dla hoteli',
        'housekeeping porady',
        'optymalizacja kosztów hotel',
        'koszty pralni hotelowej',
        'trendy hotelarskie'
    ],
});

const blogPosts = [
    {
        slug: 'jak-zmniejszyc-koszty-pralnicze-w-hotelu',
        title: 'Jak zmniejszyć koszty pralnicze w hotelu o 30%?',
        excerpt: 'Praktyczne strategie redukcji kosztów pralni hotelowej bez utraty jakości. Model wynajmu tekstyliów, systemy dozujące i optymalizacja procesów.',
        category: 'Optymalizacja kosztów',
        date: '2026-02-05',
        readTime: '5 min',
        featured: true
    },
    {
        slug: 'eco-hotel-zrownowazona-higiena',
        title: 'Eco Hotel: Jak wdrożyć zrównoważoną higienę?',
        excerpt: 'Przewodnik po ekologicznych rozwiązaniach dla hoteli - od produktów z recyklingu po certyfikaty środowiskowe.',
        category: 'Sustainability',
        date: '2026-01-28',
        readTime: '7 min',
        featured: false
    },
    {
        slug: 'housekeeping-efektywnosc-i-jakosc',
        title: 'Housekeeping: 10 sposobów na zwiększenie efektywności',
        excerpt: 'Sprawdzone metody optymalizacji pracy działu housekeeping. Standaryzacja, szkolenia i odpowiedni sprzęt.',
        category: 'Housekeeping',
        date: '2026-01-20',
        readTime: '6 min',
        featured: false
    }
];

const categories = [
    { name: 'Wszystkie', count: 3, active: true },
    { name: 'Optymalizacja kosztów', count: 1, active: false },
    { name: 'Sustainability', count: 1, active: false },
    { name: 'Housekeeping', count: 1, active: false }
];

export default function BlogPage() {
    return (
        <>
            <Script
                id="blog-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Blog",
                        "name": "Blog NetHoreca",
                        "description": "Wiedza i porady dla hotelarzy",
                        "url": "https://nethoreca.pl/blog"
                    })
                }}
            />

            <main className={styles.main}>
                {/* Hero Section */}
                <section className={styles.hero}>
                    <div className={styles.container}>
                        <div className={styles.heroContent}>
                            <div className={styles.badge}>
                                <Blog size={16} />
                                BLOG & RESOURCES
                            </div>
                            <h1 className={styles.heroTitle}>
                                Wiedza dla<br />
                                <span className={styles.highlight}>hotelarzy</span>
                            </h1>
                            <p className={styles.heroDescription}>
                                Porady, trendy i najlepsze praktyki w zarządzaniu hotelem.
                                Dzielimy się 26-letnim doświadczeniem.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Blog Content */}
                <section className={styles.blogSection}>
                    <div className={styles.container}>
                        <div className={styles.blogGrid}>
                            {/* Main Content */}
                            <div className={styles.postsContainer}>
                                {/* Featured Post */}
                                {blogPosts.filter(p => p.featured).map((post) => (
                                    <article key={post.slug} className={styles.featuredPost}>
                                        <span className={styles.featuredBadge}>POLECANE</span>
                                        <div className={styles.postMeta}>
                                            <span className={styles.postCategory}>{post.category}</span>
                                            <span className={styles.postDate}>{post.date}</span>
                                        </div>
                                        <h2>
                                            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                                        </h2>
                                        <p>{post.excerpt}</p>
                                        <Link href={`/blog/${post.slug}`} className={styles.readMore}>
                                            Czytaj więcej <ArrowRight size={16} />
                                        </Link>
                                    </article>
                                ))}

                                {/* Regular Posts */}
                                <div className={styles.postsList}>
                                    {blogPosts.filter(p => !p.featured).map((post) => (
                                        <article key={post.slug} className={styles.postCard}>
                                            <div className={styles.postMeta}>
                                                <span className={styles.postCategory}>{post.category}</span>
                                                <span className={styles.postDate}>{post.date}</span>
                                            </div>
                                            <h3>
                                                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                                            </h3>
                                            <p>{post.excerpt}</p>
                                            <div className={styles.postFooter}>
                                                <span className={styles.readTime}>
                                                    <Time size={14} /> {post.readTime}
                                                </span>
                                                <Link href={`/blog/${post.slug}`} className={styles.readMore}>
                                                    Czytaj <ArrowRight size={14} />
                                                </Link>
                                            </div>
                                        </article>
                                    ))}
                                </div>
                            </div>

                            {/* Sidebar */}
                            <aside className={styles.sidebar}>
                                <div className={styles.sidebarCard}>
                                    <h4>Kategorie</h4>
                                    <ul className={styles.categoryList}>
                                        {categories.map((cat, index) => (
                                            <li key={index} className={cat.active ? styles.active : ''}>
                                                <span>{cat.name}</span>
                                                <span className={styles.count}>{cat.count}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className={styles.sidebarCard}>
                                    <h4>Newsletter</h4>
                                    <p>Otrzymuj porady prosto na skrzynkę</p>
                                    <form className={styles.newsletterForm}>
                                        <input type="email" placeholder="Twój email" />
                                        <button type="submit">Zapisz się</button>
                                    </form>
                                </div>

                                <div className={styles.sidebarCta}>
                                    <h4>Potrzebujesz porady?</h4>
                                    <p>Skontaktuj się z naszymi ekspertami</p>
                                    <Link href="/zapytanie-ofertowe">
                                        Bezpłatna konsultacja
                                    </Link>
                                </div>
                            </aside>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
