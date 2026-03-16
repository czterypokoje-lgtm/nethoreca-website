import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Checkmark } from '@carbon/icons-react';
import styles from './ProductCard.module.css';

interface ProductCardProps {
    title: string;
    description: string;
    imageSrc: string;
    category?: string;
    features?: string[];
    href: string;
    actionLabel?: string;
}

export default function ProductCard({
    title,
    description,
    imageSrc,
    category,
    features = [],
    href,
    actionLabel = 'Zobacz szczegóły'
}: ProductCardProps) {
    return (
        <Link href={href} className={styles.card}>
            <div className={styles.imageWrapper}>
                <Image
                    src={imageSrc}
                    alt={title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className={styles.image}
                />
                {category && <span className={styles.categoryLabel}>{category}</span>}
            </div>
            <div className={styles.content}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.description}>{description}</p>

                {features.length > 0 && (
                    <ul className={styles.featureList}>
                        {features.slice(0, 3).map((feature, index) => (
                            <li key={index} className={styles.featureItem}>
                                <Checkmark size={16} className={styles.featureIcon} />
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>
                )}

                <div className={styles.action}>
                    <span className={styles.actionLabel}>{actionLabel}</span>
                    <ArrowRight size={16} className={styles.actionIcon} />
                </div>
            </div>
        </Link>
    );
}
