import styles from "./ProductGallery.module.css";

export function ProductGallery({ product }) {
    return (
        <div className={styles.imageSection}>
            <div className={styles.mainImage}>
                <img src={product.images[0]} alt={product.title} />
            </div>
            <div className={styles.imageThumbnails}>
                {product.images.map((image, index) => (
                    <div key={index} className={styles.thumbnail}>
                        <img src={image} alt={`${product.title} ${index + 1}`} />
                    </div>
                ))}
            </div>
        </div>
    );
}
