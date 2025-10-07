import styles from './Footers.module.css';

function Footers() {
    const date = new Date();
    const year = date.getFullYear();

    return (
        <footer className={styles.wrapper}>
            <div className={`${styles.container} ${styles.containerFirst}`}>
                <div className={styles.footerSection}>
                    <h1 className={styles.footerTitle}>О компании</h1>
                    <p className={`${styles.footerText} ${styles.footerItem}`}>Каталог продукции</p>
                    <p className={`${styles.footerText} ${styles.footerItem}`}>Фирменные магазины</p>
                    <p className={`${styles.footerText} ${styles.footerItem}`}>Новости и события</p>
                    <p className={`${styles.footerText} ${styles.footerItem}`}>Документация</p>
                    <p className={`${styles.footerText} ${styles.footerItem}`}>Контактная информация</p>
                </div>

                <div className={styles.footerSection}>
                    <h1 className={styles.footerTitle}>Полезные ссылки</h1>
                    <p className={`${styles.footerText} ${styles.footerItem}`}>Сервис и поддержка</p>
                    <p className={`${styles.footerText} ${styles.footerItem}`}>Гарантийное обслуживание</p>
                    <p className={`${styles.footerText} ${styles.footerItem}`}>Корпоративным клиентам</p>
                    <p className={`${styles.footerText} ${styles.footerItem}`}>Вакансии</p>
                    <p className={`${styles.footerText} ${styles.footerItem}`}>Партнерская программа</p>
                </div>

                <div className={styles.footerSection}>
                    <h1 className={styles.footerTitle}>Контакты</h1>
                    <p className={styles.footerText}>Тел.: <a className={styles.footerLink}>+375 (17) 365-80-05</a></p>
                    <p className={styles.footerText}>Email: <a className={styles.footerLink}>info@globus.by</a></p>
                    <p className={styles.footerText}>Магазин: ул. Козлова, д.8, Минск</p>
                    <p className={styles.footerText}>Офис: ул. Пирогова, д.5, Минск</p>
                    <p className={styles.footerText}>Время работы: 9:00 - 18:00</p>
                </div>
            </div>

            <div className={`${styles.container} ${styles.containerSecond}`}>
                <div>
                    <p className={styles.copyright}>© РУП БТО Глобус - {year}</p>
                </div>
                <div className={styles.legalLinks}>
                    <p className={styles.legalText}>Политика конфиденциальности</p>
                    <p className={styles.legalText}>Условия пользования</p>
                </div>
            </div>
        </footer>
    )
}

export default Footers;