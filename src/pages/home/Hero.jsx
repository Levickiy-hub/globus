import { Button, Card } from "@gravity-ui/uikit";
import styles from './Hero.module.css';

export function Hero({ onGoToCatalog }) {
    return (
        <section>
            <Card className={styles.wrapper}>
                <div>
                    <h1>Белорусское торговое объединение «Глобус»</h1>
                    <p style={{ fontSize: "18px", marginBottom: "20px" }}>
                        Современный интернет-каталог товаров для образования и организаций
                    </p>
                    <div className={styles.buttonWrapper}>
                        <Button view="action" size="l" onClick={onGoToCatalog} style={{ marginRight: '28px' }}>
                            Перейти в каталог
                        </Button>
                        <Button view="action" size="l" onClick={onGoToCatalog}>
                            Связаться
                        </Button>
                    </div>
                </div>
                <div className={styles.videoContainer}>
                    <video>
                        <source
                            src="/globusVid.mp4"
                            type="video/mp4"
                        />
                    </video>
                </div>
            </Card>
        </section>
    );
}
