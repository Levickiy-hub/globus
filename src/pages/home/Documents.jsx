
import { Card, Text, Button } from '@gravity-ui/uikit';
import styles from './Documents.module.css';
import { useState, useEffect } from 'react';

export function Documents() {
    const [idx, setIdx] = useState(0);
    const [progress, setProgress] = useState(0);

    const typeDoc = [
        {
            id: 1,
            title: 'Законы',
            description: 'Законы',
            href: ''
        },
        {
            id: 2,
            title: 'Бланки строгой отчетности',
            description: 'Бланки строгой отчетности',
            href: ''
        },
        {
            id: 3,
            title: 'Документы организации',
            description: 'Документы организации',
            href: ''
        },
        {
            id: 4,
            title: 'Инные документы',
            description: 'Инные документы',
            href: ''
        }
    ];

    useEffect(() => {
        setProgress(0);
        const duration = 5000; // 5 секунд
        const step = 100; // обновление каждые 100 мс
        const increment = 100 / (duration / step);

        const progressTimer = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(progressTimer);
                    const newIdx = idx === typeDoc.length - 1 ? 0 : (idx + 1)
                    setIdx(newIdx);
                    return 0;
                }
                return prev + increment;
            });
        }, step);

        return () => clearInterval(progressTimer);
    }, [idx]);

    const handleClick = (index) => {
        setIdx(index);
        setProgress(0);
    };

    return (
        <section className={styles.section}>
            <div className={styles.title}>
                <Text variant="header-2" weight="bold" className={styles.titleText}>Документы</Text>
            </div>
            <div className={styles.wrapper}>
                <ul className={styles.sidebar}>
                    {typeDoc.map((doc, index) => (
                        <li
                            key={doc.id}
                            className={styles.sidebarItem}
                            onClick={() => handleClick(index)}
                        >
                            <input type="radio" checked={idx === index} readOnly />
                            <Text className={styles.sidebarText}>{doc.title}</Text>
                            {idx === index && (
                                <div
                                    className={styles.progressBar}
                                    style={{ width: `${progress}%` }}
                                />
                            )}
                        </li>
                    ))}
                </ul>
                <div className={styles.content}>
                    <Card className={styles.card} view="clear">
                        <div className={styles.overlay}></div>
                        <div className={styles.innerContent}>
                            <Text  variant="header-2" weight="bold">{typeDoc[idx].description}</Text>
                            <Button view='action' size="l">Перейти</Button>
                        </div>
                    </Card>
                </div>
            </div>
        </section>
    );
}
