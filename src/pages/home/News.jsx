
import { Button, Card, Text } from '@gravity-ui/uikit';
import styles from './News.module.css';

export function News() {
    const news = [
        { id: 1, title: "Запуск нового сайта", date: "01.10.2025", text: "Мы обновили интернет-каталог для удобства пользователей." },
        { id: 2, title: "Новые поступления", date: "15.09.2025", text: "В каталог добавлены новые категории товаров для школ." },
    ];

    return (
        <section className={styles.section}>
            <div className={styles.title}>
                <Text variant="header-2" weight="bold" className={styles.titleText}>Новости</Text>
            </div>
            {news.map(item => (
                <Card key={item.id} className={styles.card}>
                    <div className={styles.row}>
                        <Text variant="header-2" weight="bold">{item.title}</Text>
                        <Text variant="subheader-1">{item.date}</Text>
                    </div>
                    <Text
                        variant="body-2"
                        className={styles.text}
                        color="secondary"
                    >
                        {item.text}
                    </Text>
                </Card>
            ))}
            <div className={styles.allNewsCard}>
                <Button view='action' size='xl'>Все новости</Button>
            </div>
        </section>
    );
}
