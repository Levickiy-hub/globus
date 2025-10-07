import { Text, TextInput } from "@gravity-ui/uikit";
import { Breadcrumbs } from "../../widgets/Breadcrumbs";
import { ProductCard } from "./ProductCard";
import styles from './Catalog.module.css';

export function Catalog() {
    const categories = [
        "Математика",
        "Черчение и ИЗО",
        "ОБЖ",
        "Физика",
        "Столярное дело",
        "Биология",
        "География",
        "Глобус",
        "Химия",
        "История",
        "Литература",
        "Иностранные языки",
        "Школьная мебель",
        "НВП",
        "Русский язык",
        "Слесарное дело",
        "Начальная школа",
        "Дошкольное образование",
        "Домоводство",
        "Астраномия",
        "Лингафонные кабиниты",
        "Литература и музыка",
        "Материалы для ЦТ",
    ];

    // Разделяем категории по рядам
    const firstRowCategories = categories.slice(0, 5); // Первые 4 для первого ряда
    const secondRowLeft = categories[6]; // Для левой карточки второго ряда
    const secondRowRight = categories[7]; // Для правой карточки второго ряда
    const thirdRowCategories = categories.slice(8, 13); // Следующие 3 для третьего ряда
    const fourthRowCategories = categories.slice(13); // Остальные для четвертого ряда

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <Text as="h1" variant="display-3" className={styles.title}>
                    Каталог товаров
                </Text>
                <div className={styles.breadcrumbsWrapper}>
                    <Breadcrumbs />
                </div>
            </div>

            <div className={styles.mainContent}>
                {/* Первый ряд - только карточки */}
                <div className={styles.firstRow}>
                    {firstRowCategories.map((category, index) => (
                        <div key={index} className={styles.cardWrapper}>
                            <ProductCard>
                                {category}
                            </ProductCard>
                        </div>
                    ))}
                </div>

                {/* Второй ряд - карточка-поиск-карточка */}
                <div className={styles.secondRow}>
                    {/* Левая карточка */}
                    {secondRowLeft && (
                        <div className={styles.cardWrapper}>
                            <ProductCard>
                                {secondRowLeft}
                            </ProductCard>
                        </div>
                    )}
                    <div>
                        <TextInput
                            placeholder="Введите название товара или категории..."
                            size="xl"
                            hasClear
                        />
                    </div>
                    {/* Правая карточка */}
                    {secondRowRight && (
                        <div className={styles.cardWrapper}>
                            <ProductCard>
                                {secondRowRight}
                            </ProductCard>
                        </div>
                    )}
                </div>

                {/* Третий ряд - 3 карточки */}
                <div className={styles.thirdRow}>
                    {thirdRowCategories.map((category, index) => (
                        <div key={index} className={styles.cardWrapper}>
                            <ProductCard>
                                {category}
                            </ProductCard>
                        </div>
                    ))}
                </div>

                {/* Четвертый ряд - остальные карточки */}
                <div className={styles.fourthRow}>
                    {fourthRowCategories.map((category, index) => (
                        <div key={index} className={styles.cardWrapper}>
                            <ProductCard>
                                {category}
                            </ProductCard>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}