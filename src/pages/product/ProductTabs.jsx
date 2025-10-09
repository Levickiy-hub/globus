import { useState } from "react";
import { Text, Card } from "@gravity-ui/uikit";
import { Star, StarFill } from "@gravity-ui/icons";
import styles from "./ProductTabs.module.css";

export function ProductTabs({ product }) {
    const [activeTab, setActiveTab] = useState("description");

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
        <Card className={styles.detailsCard}>
            <div className={styles.tabs}>
                {["description", "specifications", "reviews"].map(tab => (
                    <button
                        key={tab}
                        className={`${styles.tab} ${activeTab === tab ? styles.tabActive : ""}`}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab === "description" && "Описание"}
                        {tab === "specifications" && "Характеристики"}
                        {tab === "reviews" && `Отзывы (${product.reviewsCount})`}
                    </button>
                ))}
            </div>

            <div className={styles.tabContent}>
                {activeTab === 'description' && (
                    <div className={styles.description}>
                        <Text variant="body-1" className={styles.descriptionText}>
                            {product.description}
                        </Text>
                        <div className={styles.usage}>
                            <Text variant="subheader-2" as="h4">Применение:</Text>
                            <ul>
                                <li><Text variant="body-2">Построение углов 30° и 60°</Text></li>
                                <li><Text variant="body-2">Черчение параллельных линий</Text></li>
                                <li><Text variant="body-2">Геометрические построения</Text></li>
                                <li><Text variant="body-2">Проверка прямых углов</Text></li>
                            </ul>
                        </div>
                    </div>
                )}

                {activeTab === 'specifications' && (
                    <div className={styles.specifications}>
                        {Object.entries(product.specifications).map(([key, value]) => (
                            <div key={key} className={styles.specRow}>
                                <Text variant="body-2" className={styles.specKey}>{key}:</Text>
                                <Text variant="body-2" className={styles.specValue}>{value}</Text>
                            </div>
                        ))}
                    </div>
                )}

                {activeTab === 'reviews' && (
                    <div className={styles.reviews}>
                        <div className={styles.reviewSummary}>
                            <div className={styles.ratingOverview}>
                                <Text variant="header-1" className={styles.ratingNumber}>
                                    {product.rating}
                                </Text>
                                <div className={styles.stars}>
                                    {renderStars(product.rating)}
                                </div>
                                <Text color="secondary">
                                    На основе {product.reviewsCount} отзывов
                                </Text>
                            </div>
                        </div>

                        {/* Моковые отзывы */}
                        <div className={styles.reviewList}>
                            <div className={styles.review}>
                                <div className={styles.reviewHeader}>
                                    <Text variant="body-2" weight="medium">Анна Петрова</Text>
                                    <div className={styles.stars}>
                                        {renderStars(product.rating)}
                                    </div>
                                </div>
                                <Text variant="body-2" color="secondary">
                                    Отличный угольник! Точно соответствует заявленным характеристикам.
                                    Дети на уроках геометрии с удовольствием работают.
                                </Text>
                            </div>

                            <div className={styles.review}>
                                <div className={styles.reviewHeader}>
                                    <Text variant="body-2" weight="medium">Иван Сидоров</Text>
                                    <div className={styles.stars}>
                                        {renderStars(product.rating)}
                                    </div>
                                </div>
                                <Text variant="body-2" color="secondary">
                                    Хорошее качество за свою цену. Пластик прочный, не царапается.
                                    Рекомендую для школьного использования.
                                </Text>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </Card>
    );
}
