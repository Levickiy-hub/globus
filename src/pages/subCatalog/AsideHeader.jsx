import { useState } from "react";
import { Text, Icon, Button } from "@gravity-ui/uikit";
import { ChevronLeft, ChevronRight } from "@gravity-ui/icons";
import { useLocation, Link } from "react-router-dom";
import styles from "./AsideHeader.module.css";

export function AsideHeader() {
    const [collapsed, setCollapsed] = useState(false);
    const location = useLocation();

    const categories = [
        { id: 0, title: "Математика", img: "math.png", path: "/catalog/math" },
        { id: 1, title: "Черчение и ИЗО", img: "drawing.png", path: "/catalog/drawing" },
        { id: 2, title: "ОБЖ", img: "Lifysafity.png", path: "/catalog/lifysafety" },
        { id: 3, title: "Физика", img: "physics.png", path: "/catalog/physics" },
        { id: 4, title: "Столярное дело", img: "joinery.png", path: "/catalog/joinery" },
        { id: 5, title: "Биология", img: "biology.png", path: "/catalog/biology" },
        { id: 6, title: "География", img: "geo.png", path: "/catalog/geo" },
        { id: 7, title: "Спорт", img: "sport.png", path: "/catalog/sport" },
        { id: 8, title: "Химия", img: "chemistry.png", path: "/catalog/chemistry" },
        { id: 9, title: "История", img: "history.png", path: "/catalog/history" },
    ];

    const currentPath = location.pathname;

    return (
        <aside className={`${styles.aside} ${collapsed ? styles.collapsed : ""}`}>
            <div className={styles.header}>
                <Text variant="subheader-3" weight="bold" className={styles.title}>
                    Категории
                </Text>
                <Button
                    view="flat"
                    size="l"
                    onClick={() => setCollapsed(prev => !prev)}
                    className={styles.toggleBtn}
                >
                    <Icon data={collapsed ? ChevronRight : ChevronLeft} size={20} />
                </Button>
            </div>

            <nav className={styles.nav}>
                {categories.map(cat => {
                    const isActive = currentPath.includes(cat.path);
                    return (
                        <Link
                            key={cat.id}
                            to={cat.path}
                            className={`${styles.category} ${isActive ? styles.active : ""}`}
                        >
                            <img src={`../../../public/${cat.img}`} alt={cat.title} className={styles.icon} />
                            {!collapsed && (
                                <Text className={styles.categoryTitle}>{cat.title}</Text>
                            )}
                        </Link>
                    );
                })}
            </nav>
        </aside>
    );
}
