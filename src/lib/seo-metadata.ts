// Centralized SEO metadata helper for NetHoreca
// Generates canonical URLs, OpenGraph, Twitter, and alternates for every page

import type { Metadata } from 'next';

const BASE_URL = 'https://nethoreca.pl';
const DEFAULT_OG_IMAGE = '/og-image.jpg';
const SITE_NAME = 'NetHoreca';

interface PageSEOConfig {
    title: string;
    description: string;
    path: string;
    keywords?: string[];
    ogImage?: string;
    ogImageAlt?: string;
    noIndex?: boolean;
    article?: {
        publishedTime?: string;
        modifiedTime?: string;
        authors?: string[];
        section?: string;
    };
}

/**
 * Creates complete metadata with canonical URL, OpenGraph, Twitter cards, and alternates.
 * Use this on EVERY page to ensure consistent SEO metadata.
 */
export function createPageMetadata({
    title,
    description,
    path,
    keywords,
    ogImage,
    ogImageAlt,
    noIndex = false,
    article,
}: PageSEOConfig): Metadata {
    const canonicalUrl = `${BASE_URL}${path}`;
    const imageUrl = ogImage || DEFAULT_OG_IMAGE;
    const imageAlt = ogImageAlt || title;

    return {
        title,
        description,
        ...(keywords && { keywords }),
        alternates: {
            canonical: canonicalUrl,
            languages: {
                'pl': canonicalUrl,
                'x-default': canonicalUrl,
            },
        },
        openGraph: {
            type: article ? 'article' : 'website',
            locale: 'pl_PL',
            url: canonicalUrl,
            siteName: SITE_NAME,
            title,
            description,
            images: [
                {
                    url: imageUrl,
                    width: 1200,
                    height: 630,
                    alt: imageAlt,
                },
            ],
            ...(article && {
                publishedTime: article.publishedTime,
                modifiedTime: article.modifiedTime,
                authors: article.authors,
                section: article.section,
            }),
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [imageUrl],
        },
        ...(noIndex && {
            robots: {
                index: false,
                follow: false,
            },
        }),
    };
}

export { BASE_URL, DEFAULT_OG_IMAGE, SITE_NAME };
