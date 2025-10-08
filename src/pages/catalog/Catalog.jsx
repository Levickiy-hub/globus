import { Text, TextInput, Card } from "@gravity-ui/uikit";
import { Breadcrumbs } from "../../widgets/Breadcrumbs/Breadcrumbs";
import { ProductCard } from "./ProductCard";
import styles from './Catalog.module.css';

export function Catalog() {
    const categories = [
        { id: 0, title: "Математика", img: 'math.png' },
        { id: 1, title: "Черчение и ИЗО", img: 'drawing.png' },
        { id: 2, title: "ОБЖ", img: 'Lifysafity.png' },
        { id: 3, title: "Физика", img: 'physics.png' },
        { id: 4, title: "Столярное дело", img: 'joinery.png' },
        { id: 5, title: "Биология", img: 'biology.png' },
        { id: 6, title: "География", img: 'geo.png' },
        { id: 7, title: "Спорт", img: 'sport.png' },
        { id: 8, title: "Химия", img: 'chemistry.png' },
        { id: 9, title: "История", img: 'history.png' },
        { id: 10, title: "Иностранные языки", img: 'language.png' },
        { id: 11, title: "Школьная мебель", img: 'furniture.png' },
        { id: 12, title: "НВП", img: 'militaryTraining.png' },
        { id: 13, title: "Русский язык", img: 'RussianLanguage.png' },
        { id: 14, title: "Слесарное дело", img: 'locksmithing.png' },
        { id: 15, title: "Начальная школа", img: 'beginerSchool.png' },
        { id: 16, title: "Дошкольное образование", img: 'PreschoolEducation.png' },
        { id: 17, title: "Домоводство", img: 'housekeeping.png' },
        { id: 18, title: "Астрономия", img: 'astronomy.png' },
        { id: 19, title: "Лингафонные кабинеты", img: 'languageLaboratory.png' },
        { id: 20, title: "Литература и музыка", img: 'literature.png' },
        { id: 21, title: "Материалы для ЦТ", img: 'centralizedTesting.png' },
    ];

    const categoriesWithSearch = [
        ...categories.slice(0, 6),
        { id: "search", isSearch: true },
        ...categories.slice(6),
    ];

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <Text as="h1" variant="display-3" className={styles.title}>
                    Каталог товаров
                </Text>
                <Breadcrumbs />
            </header>

            <section className={styles.grid}>
                {categoriesWithSearch.map((category, index) =>
                    category.isSearch ? (
                        <Card key="search" className={styles.searchCard}>
                            <Text variant="header-2" weight="bold" className={styles.searchTitle}>
                                Найдётся всё!
                            </Text>
                            <Text variant="subheader-3" className={styles.searchDescription}>
                                Введите название товара, раздела или учебного предмета, чтобы быстро найти нужное оборудование, мебель или материалы.
                            </Text>

                            <TextInput
                                placeholder="Например: микроскоп, мебель для класса, набор по химии..."
                                size="xl"
                                hasClear
                                className={styles.searchInput}
                            />
                        </Card>
                    ) : (
                        <ProductCard key={category.id} image={category.img}>
                            {category.title}
                        </ProductCard>
                    )
                )}
            </section>
        </div>
    );
}