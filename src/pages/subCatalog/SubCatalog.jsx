import { Text } from "@gravity-ui/uikit";
import { Breadcrumbs } from "../../widgets/Breadcrumbs/Breadcrumbs";
import styles from './SubCatalog.module.css';
import { AsideHeader } from "./AsideHeader";
import { ProductGrid } from "./ProductGrid";

export function SubCatalog() {
    const categories = [
        {
            id: 0,
            title: "Классное оборудование",
            products: [
                {
                    title: 'Комплект инструментов классных КИК',
                    rating: 4,
                    img: ''
                }
            ]
        },
        {
            id: 1,
            title: "Пособия общего назначения",
            products: [
                {
                    id: 1,
                    title: 'Математическая пирамида Вычитание до 1000',
                    rating: 4,
                    img: ''
                },
                {
                    id: 2,
                    title: 'Математическая пирамида Вычитание до 1000 (демонстрационная)',
                    rating: 3.5,
                    img: ''
                },
            ]
        },
    ];

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <Text as="h1" variant="display-3" className={styles.title}>
                    Математика
                </Text>
                <Breadcrumbs />
            </header>
            <div className={styles.wrapper}>
                <div>
                    <AsideHeader />
                </div>
                <div>
                    {categories.map(cat => (<ProductGrid key={cat.id} title={cat.title} products={cat.products} />))}
                </div>
            </div>
        </div>
    );
}