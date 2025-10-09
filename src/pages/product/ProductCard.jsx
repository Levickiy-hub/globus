import { useState } from "react";
import { Card, Text, Button } from "@gravity-ui/uikit";
import { ShoppingCart, Heart, HeartFill, Star, StarFill, ArrowShapeTurnUpRight } from "@gravity-ui/icons";
import styles from "./ProductCard.module.css";
import { QuantityCounter } from "./QuantityCounter";

export function ProductCard({ product }) {
    const [isFavorite, setIsFavorite] = useState(false);

    const renderStars = (rating) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;

        for (let i = 0; i < 5; i++) {
            if (i < fullStars) {
                stars.push(<StarFill key={i} className={styles.star} />);
            } else if (i === fullStars && hasHalfStar) {
                stars.push(<Star key={i} className={styles.star} />);
            } else {
                stars.push(<Star key={i} className={styles.starEmpty} />);
            }
        }
        return stars;
    };

    return (
        <Card className={styles.productCard}>
            <div className={styles.row}>
                <Text className={styles.name}>
                    Угольник пластмассовый 30-60°
                </Text>
                <div className={styles.actionButtons}>
                    <Button
                        view="outlined"
                        size="m"
                        onClick={() => setIsFavorite(!isFavorite)}
                        className={styles.favoriteButton}
                    >
                        {isFavorite ? <HeartFill className={styles.heart} /> : <Heart />}
                    </Button>
                    <Button
                        view="outlined"
                        size="m"
                        onClick={() => setIsFavorite(!isFavorite)}
                        className={styles.favoriteButton}
                    >
                        <ArrowShapeTurnUpRight />
                    </Button>
                </div>
            </div>
            <Text color="secondary" className={styles.sku}>
                Артикул: {product.sku}
            </Text>

            <Text color="secondary" className={styles.ratingRow}>
                <span className={styles.stars}>{renderStars(product.rating)}</span> {product.rating} ({product.reviewsCount} отзывов)
            </Text>


            <Text variant="body-2" color="secondary">Изготовитель: {product.manufacturer}</Text>

            <div className={styles.actions}>
                <QuantityCounter initial={1} />
                <Button view="action" size="xl" className={styles.cartButton}>
                    <ShoppingCart /> Добавить в корзину
                </Button>
            </div>
            <div className={styles.tags}>
                {product.tags.map((tag, index) => (
                    <div key={index} className={styles.tag}>
                        <Text variant="caption-1" className={styles.tagText}>
                            {tag}
                        </Text>
                    </div>
                ))}
            </div>
            <div className={styles.features}>
                <Text variant="subheader-2" as="h3">Особенности:</Text>
                <ul className={styles.featuresList}>
                    {product.features.map((f, i) => (
                        <li key={i}><Text variant="body-2">{f}</Text></li>
                    ))}
                </ul>
            </div>
        </Card>
    );
}
