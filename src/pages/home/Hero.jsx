import { Button, Card } from "@gravity-ui/uikit";
import styles from './Hero.module.css';
import './globus.css';

export function Hero({ onGoToCatalog }) {
    return (
        <section className={styles.section}>
            <Card className={styles.wrapper} view='clear'>
                <div className={styles.infoContainer}>
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
                <div className="globe-container">
                    <div className="globe">
                        <div className="globe-sphere"></div>
                        <div className="globe-outer-shadow"></div>
                        <div className="globe-worldmap">
                            <div className="globe-worldmap-back"></div>
                            <div className="globe-worldmap-front"></div>
                        </div>
                        <div className="globe-inner-shadow"></div>
                    </div>
                </div>
            </Card>
        </section>
    );
}
