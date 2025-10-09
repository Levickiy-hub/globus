import { Text } from "@gravity-ui/uikit";
import { Breadcrumbs } from "../../widgets/Breadcrumbs/Breadcrumbs";
import styles from "./Product.module.css";
import { ProductGallery } from "./ProductGallery";
import { ProductCard } from "./ProductCard";
import { ProductTabs } from "./ProductTabs";

export function Product() {
    const product = {
        id: 1,
        title: "Угольник пластмассовый 30-60°",
        images: [
            "/Square30.jpg",
            "/Square45.jpg",
            "/line25.jpg"
        ],
        rating: 4.2,
        reviewsCount: 15,
        category: "Классное оборудование",
        manufacturer: "Россия, ООО Канцтовары",
        description: `Профессиональный угольник для черчения и геометрических построений. 
        Идеально подходит для уроков математики, черчения и технологии в средней школе.`,
        features: [
            "Материал: прочный пластик",
            "Углы: 30° и 60°",
            "Длина сторон: 20 см",
            "Точная градуировка",
            "Износостойкое покрытие",
            "Гипоаллергенный материал"
        ],
        specifications: {
            "Материал": "Пластик ABS",
            "Размер": "20 × 12 см",
            "Толщина": "3 мм",
            "Цвет": "Прозрачный",
            "Вес": "45 г",
            "Сертификация": "ГОСТ 427-75"
        },
        sku: "MATH-0030",
        tags: ['Школьные принадлежности', 'Математика', 'Линейка', '25см', 'Алгебра', 'Геометрия', 'Черчение']
    };

    return (
        <div className={styles.wrapper}>
            <header className={styles.header}>
                <Text as="h1" variant="display-3" className={styles.title}>
                    {product.title}
                </Text>
                <Breadcrumbs />
            </header>

            <div className={styles.content}>
                <div className={styles.mainSection}>
                    <ProductGallery product={product} />
                    <ProductCard product={product} />
                </div>

                <ProductTabs product={product} />
            </div>
        </div>
    );
}
