import Link from 'next/link';
import { ArrowLeft } from '@carbon/icons-react';
import styles from './PageHeader.module.css';

interface PageHeaderProps {
    title: string;
    subtitle?: string;
    description: string;
    parentHref?: string;
    parentLabel?: string;
}

export default function PageHeader({
    title,
    subtitle,
    description,
    parentHref = '/',
    parentLabel = 'Wróć do strony głównej'
}: PageHeaderProps) {
    return (
        <div className={styles.header}>
            <div className="container">
                <div className={styles.navigation}>
                    <Link href={parentHref} className={styles.backLink}>
                        <ArrowLeft size={16} />
                        <span>{parentLabel}</span>
                    </Link>
                </div>
                <div className={styles.content}>
                    <h1 className={styles.title}>
                        {subtitle && <span className={styles.subtitle}>{subtitle}</span>}
                        {title}
                    </h1>
                    <p className={styles.description}>{description}</p>
                </div>
            </div>
        </div>
    );
}
