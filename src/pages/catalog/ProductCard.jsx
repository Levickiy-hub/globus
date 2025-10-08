import { Card, Text } from '@gravity-ui/uikit';
import styles from './ProductCard.module.css';

export function ProductCard({ children, image }) {
    return (
        <Card className={styles.container}>
            <div className={styles.imageWrapper}>
                <img src={image} alt={children} className={styles.image} />
            </div>

            <Text variant="subheader-3" weight="bold" className={styles.title}>
                {children}
            </Text>

        </Card>
    );
}
