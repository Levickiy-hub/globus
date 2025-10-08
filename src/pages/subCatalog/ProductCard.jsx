import { Text, Button, Card } from "@gravity-ui/uikit";
import { Heart, HeartFill, Star, StarFill, ShoppingCart } from '@gravity-ui/icons';
import styles from "./ProductCard.module.css";
import { useState } from 'react';

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
        <Card className={styles.container}>
            <div 
                className={styles.iconContainer}
                onClick={() => setIsFavorite(!isFavorite)}
            >
                {isFavorite ? 
                    <HeartFill className={styles.icon} /> : 
                    <Heart className={styles.icon} />
                }
            </div>
            
            <div className={styles.imageContainer}>
                <img src={product.img} alt={product.title} />
            </div>
            
            <Text variant="body-2" className={styles.title}>{product.title}</Text>
            
            <div className={styles.rating}>
                <div className={styles.stars}>
                    {renderStars(product.rating)}
                </div>
                <Text className={styles.ratingValue}>{product.rating}</Text>
            </div>
            
            <div className={styles.buttonContainer}>
                <Button 
                    view='action' 
                    className={styles.button} 
                    size="l"
                >
                    Добавить в корзину 
                    <ShoppingCart />
                </Button>
            </div>
        </Card>
    );
}