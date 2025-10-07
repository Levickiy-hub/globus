
import styles from './ProductCard.module.css';

export function ProductCard({ children }) {
    return (
        <div className={styles.container}>
            <h2>Картинка</h2>
            <h1>{children}</h1>
        </div>
    );
}
