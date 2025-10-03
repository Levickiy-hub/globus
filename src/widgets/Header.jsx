import { Button, TextInput } from "@gravity-ui/uikit";
import { Handset } from '@gravity-ui/icons';
import styles from "./Header.module.css";

function Header() {
    return (
        <header className={styles.header}>
            {/* Верхняя полоса */}
            <div className={styles.topBar}>
                {/* Лого и название */}
                <div className={styles.logoBlock}>
                    <div className={styles.logo}>
                        <img src="/logoGlobus.png" alt="logo" width={150}/>
                    </div>
                    <div className={styles.brand}>
                        <h2> РУП БТО «Глобус»</h2>
                        <span className={styles.tagline}>
                            Магазин товаров для образования
                        </span>
                    </div>
                </div>

                {/* Поиск */}
                <div className={styles.search}>
                    <TextInput placeholder="Поиск" size="l" hasClear style={{width:'80%'}}/>
                </div>

                {/* Контакты */}
                <div className={styles.phoneBlock}>
                    <div className={styles.phone}>
                        <Handset className={styles.phoneIcon} />
                        <a  className ={styles.phoneBlockLink} href="tel:+375173788005">+375 17 378 80 05</a>
                    </div>
                    <div className={styles.time}>
                        ПН-СБ 10:00–20:00<br />ВС 10:00–18:00
                    </div>
                </div>

                {/* Кнопка звонка */}
                <div className={styles.callButton}>
                    <Button view="action" size="l">
                        Заказать звонок
                    </Button>
                </div>
            </div>

            {/* Нижняя полоса */}
            <div className={styles.bottomBar}>
                {/* Каталог */}
                <div className={styles.catalog}>
                    <Button view="outlined" size="xl" style={{fontSize:'20px'}}>☰ Каталог</Button>
                </div>

                {/* Навигация */}
                <nav className={styles.nav}>
                    <a className={styles.navItem} href="#">О нас</a>
                    <a className={styles.navItem} href="#">Магазины</a>
                    <a className={styles.navItem} href="#">Новости</a>
                    <a className={styles.navItem} href="#">Документы</a>
                    <a className={styles.navItem} href="#">Контакты</a>
                </nav>

                {/* Иконки справа */}
                <div className={styles.icons}>
                <Button size="xl" view="outlined">🔒</Button>
                    <Button size="xl" view="outlined">❤️ 0</Button>
                    <Button size="xl" view="outlined">🛒 0</Button>
                </div>
            </div>
        </header>
    );
}

export default Header;
