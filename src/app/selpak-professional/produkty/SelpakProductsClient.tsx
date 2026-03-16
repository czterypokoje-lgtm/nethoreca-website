'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import { selpakProducts } from '@/lib/selpak-products';
import styles from './page.module.css';
import { ArrowRight, Recycle } from '@carbon/icons-react';

const categories = [
    { id: 'all', name: 'Wszystkie' },
    { id: 'tissue-paper', name: 'Papier i ręczniki' },
    { id: 'dispensers', name: 'Dozowniki' },
    { id: 'napkins', name: 'Serwetki' },
];

export default function SelpakProductsClient() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const categoryParam = searchParams.get('category');
    const [selectedCategory, setSelectedCategory] = useState(categoryParam || 'all');

    useEffect(() => {
        setSelectedCategory(categoryParam || 'all');
    }, [categoryParam]);

    const handleCategoryChange = (id: string) => {
        setSelectedCategory(id);
        const params = new URLSearchParams(searchParams.toString());
        if (id === 'all') {
            params.delete('category');
        } else {
            params.set('category', id);
        }
        router.push(`/selpak-professional/produkty?${params.toString()}`, { scroll: false });
    };

    const filteredProducts = selpakProducts.filter(product => {
        if (selectedCategory === 'all') return true;
        // Handle combined category "tissue-paper" if needed, but currently mapped 1:1
        return product.category === selectedCategory;
    });

    const categoriesWithCounts = categories.map(cat => ({
        ...cat,
        count: cat.id === 'all'
            ? selpakProducts.length
            : selpakProducts.filter(p => p.category === cat.id).length
    }));

    return (
        <>
            {/* Categories */}
            <section className={styles.categoriesSection}>
                <div className={styles.container}>
                    <div className={styles.categoriesBar}>
                        {categoriesWithCounts.map((cat) => (
                            <button
                                key={cat.id}
                                className={`${styles.categoryBtn} ${selectedCategory === cat.id ? styles.active : ''}`}
                                onClick={() => handleCategoryChange(cat.id)}
                            >
                                {cat.name}
                                <span className={styles.count}>{cat.count}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Products Grid */}
            <section className={styles.productsSection}>
                <div className={styles.container}>
                    <div className={styles.productsGrid}>
                        {filteredProducts.map((product) => (
                            <Link
                                key={product.id}
                                href={`/selpak-professional/produkty/${product.slug}`}
                                className={styles.productCard}
                            >
                                <div className={styles.productImage}>
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        width={200}
                                        height={200}
                                        className={styles.image}
                                    />
                                    {product.badge && (
                                        <span className={`${styles.badge} ${styles[product.badge.toLowerCase()]}`}>
                                            {product.badge}
                                        </span>
                                    )}
                                    {product.isRecycled && (
                                        <span className={styles.ecoBadge}>
                                            <Recycle size={12} />
                                        </span>
                                    )}
                                </div>
                                <div className={styles.productInfo}>
                                    <span className={styles.category}>{product.subcategory}</span>
                                    <h3>{product.name}</h3>
                                    {product.options && product.options.length > 0 && (
                                        <div className={styles.options}>
                                            {product.options.map((opt, i) => (
                                                <span key={i} className={styles.optionTag}>
                                                    {opt.label}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                    <span className={styles.viewLink}>
                                        Zobacz produkt <ArrowRight size={14} />
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                    {filteredProducts.length === 0 && (
                        <div style={{ textAlign: 'center', padding: '40px', color: '#6b7280' }}>
                            Nie znaleziono produktów w tej kategorii.
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}
