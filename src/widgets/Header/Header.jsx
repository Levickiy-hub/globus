import { useState, useEffect } from "react";
import { Button, TextInput } from "@gravity-ui/uikit";
import { Handset } from '@gravity-ui/icons';
import { OrderCallModal } from "../Modal/OrderCallModal.jsx";
import { Link } from "react-router";
import styles from "./Header.module.css";

function Header() {
    const [isCompact, setIsCompact] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const threshold = 190;
            setIsCompact(scrollY > threshold);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`${styles.header} ${isCompact ? styles.compact : ''}`}>
            {/* Верхняя полоса */}
            <div className={styles.topBar}>
                {/* Лого и название */}
                <div className={styles.logoBlock}>
                    <Link to={'/'}>
                        <div className={styles.logo}>
                            <img
                                src="/logoGlobus.png"
                                alt="logo"
                                width={isCompact ? 60 : 150}
                                height={isCompact ? 40 : 100}
                            />
                        </div>
                    </Link>
                    <div className={styles.brand}>
                        <h2 className={isCompact ? styles.hidden : ''}> РУП БТО «Глобус»</h2>
                        <span className={`${styles.tagline} ${isCompact ? styles.hidden : ''}`}>
                            Магазин товаров для образования
                        </span>

                        {/* Компактное название - видно только в компактном режиме */}
                        <span className={`${styles.compactTitle} ${!isCompact ? styles.hidden : ''}`}>
                            Глобус
                        </span>

                    </div>
                </div>

                {/* Кнопка меню для компактного режима */}
                <div className={`${styles.menuButton} ${!isCompact ? styles.hidden : ''}`}>
                    <Button view="action" size="l">Меню</Button>
                </div>

                {/* Поиск */}
                <div className={styles.search}>
                    <TextInput
                        placeholder={isCompact ? "Поиск..." : "Поиск по сайту"}
                        size={isCompact ? "m" : "l"}
                        hasClear
                        style={{ width: '80%' }} />
                </div>

                {/* Контакты */}
                <div className={styles.phoneBlock}>
                    <div className={styles.phone}>
                        <Handset className={styles.phoneIcon} />
                        <a className={styles.phoneBlockLink} href="tel:+375173788005">+375 17 378 80 05</a>
                    </div>
                    <div className={`${styles.time} ${isCompact ? styles.hidden : ''}`}>
                        ПН-СБ 10:00–20:00<br />ВС 10:00–18:00
                    </div>
                </div>

                {/* Кнопка звонка */}
                <div className={styles.callButton}>
                    <OrderCallModal />
                </div>
            </div>

            {/* Нижняя полоса */}
            <div className={`${styles.bottomBar} ${isCompact ? styles.hidden : ''}`}>
                {/* Каталог */}
                <div className={`${styles.catalog}  ${isCompact ? styles.hidden : ''}`}>
                    <Link to={'/catalog'}><Button view="outlined" size="xl" style={{ fontSize: '20px' }}>☰ Каталог</Button></Link>
                </div>

                {/* Навигация */}
                <nav className={`${styles.nav} ${isCompact ? styles.hidden : ''}`}>
                    <a className={`${styles.navItem} ${isCompact ? styles.hidden : ''}`} href="#">О нас</a>
                    <a className={`${styles.navItem} ${isCompact ? styles.hidden : ''}`} href="#">Магазины</a>
                    <a className={`${styles.navItem} ${isCompact ? styles.hidden : ''}`} href="#">Новости</a>
                    <a className={`${styles.navItem} ${isCompact ? styles.hidden : ''}`} href="#">Документы</a>
                    <a className={`${styles.navItem} ${isCompact ? styles.hidden : ''}`} href="#">Контакты</a>
                </nav>

                {/* Иконки справа */}
                <div className={`${styles.icons} ${isCompact ? styles.hidden : ''}`}>
                    <Button size="xl" view="outlined" className={isCompact ? styles.hidden : ''}>🔒</Button>
                    <Button size="xl" view="outlined" className={isCompact ? styles.hidden : ''}>❤️ 0</Button>
                    <Button size="xl" view="outlined" className={isCompact ? styles.hidden : ''}>🛒 0</Button>
                </div>
            </div>
        </header>
    );
}

export default Header;
