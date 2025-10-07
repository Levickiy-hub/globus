import { Button, Card, Text } from '@gravity-ui/uikit';
import { useNavigate } from 'react-router-dom';
import styles from './NotFound.module.css';

export function NotFound() {
    const navigate = useNavigate();

    return (
        <section className={styles.section}>
            <div className={styles.wrapper}>
                <Card className={styles.card} view="filled">
                    <div className={styles.circle}>404</div>
                    <Text variant="header-2" weight="bold" className={styles.title}>
                        Страница не найдена
                    </Text>
                    <Text variant="body-2" className={styles.subtitle}>
                        Похоже, вы попали не туда. Возможно, страница была удалена или перемещена.
                    </Text>
                    <Button
                        size="xl"
                        view="action"
                        onClick={() => navigate('/')}
                        className={styles.button}
                    >
                        На главную
                    </Button>
                </Card>
            </div>
        </section>
    );
}
