import { Card, Text } from "@gravity-ui/uikit";
import styles from "./ProductGrid.module.css";
import { ProductCard } from "./ProductCard";
import { ChevronDown } from '@gravity-ui/icons';
import { useState } from "react";

export function ProductGrid({ title, products }) {
    const [isExpanded, setIsExpanded] = useState(true);

    const toggleExpanded = () => {
        setIsExpanded(prev => !prev);
    };

    return (
        <Card className={styles.container}>
            <div className={styles.titleContainer} onClick={toggleExpanded}>
                <Text as="h2" variant="header-2" className={styles.title}>
                    {title}
                </Text>
                <div className={styles.iconContainer}>
                    <ChevronDown className={`${styles.arrowIcon} ${isExpanded ? styles.arrowIconDown : styles.arrowIconUp}`} />
                </div>
            </div>
            <div className={`${styles.gridWrapper} ${isExpanded ? styles.expanded : styles.collapsed}`}>
                <div className={styles.grid}>
                    {products.map(product => (
                        <ProductCard key={`product-${product.id}`} product={product} />
                    ))}
                </div>
            </div>
        </Card>
    );
}
