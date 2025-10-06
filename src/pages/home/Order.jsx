import { Button, Text, Card } from '@gravity-ui/uikit';
import styles from './Order.module.css';

export function Order() {
    return (
        <section className={styles.section}>
            <Card view="clear" className={styles.container}>
                <div className={styles.overlay}></div>
                <div className={styles.content}>
                    <Text variant="header-2" weight="bold" className={styles.title}>
                        Нужно что-то особенное?
                    </Text>
                    <Text variant="body-2" className={styles.subtitle}>
                        Мы найдем и привезем для вас нужный товар.
                    </Text>
                    <Button view="action" size="xl" className={styles.button}>
                        Сделать запрос на товар
                    </Button>
                </div>
            </Card>
        </section>
    );
}
