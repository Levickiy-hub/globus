import { Card, Text } from '@gravity-ui/uikit';
import { Clock, SquareChartColumn, CircleInfoFill } from '@gravity-ui/icons';
import styles from './About.module.css';

export function About() {
    const cards = [
        {
            id: 1,
            icon: <Clock width={32} height={32}/>,
            title: 'Многолетний опыт',
            text: 'Республиканское унитарное предприятие «Белорусское торговое объединение» Глобус» Министерства образования Республики Беларусь более 80-ти лет обеспечивает учреждения образования республики.',
        },
        {
            id: 2,
            icon: <SquareChartColumn width={32} height={32}/>,
            title: 'Более 6 тысяч позиций',
            text: 'Комплексное оснащение учебных заведений и организаций широким спектром материально-технических средств: учебно-наглядными пособиями, оборудованием, мебелью, оргтехникой, учебной и методической литературой, техническими средствами обучения, спортивным инвентарём и другое.',
        },
        {
            id: 3,
            icon: <CircleInfoFill width={32} height={32}/>,
            title: 'Официальный дилер в РБ',
            text: 'РУП БТО «Глобус» является официальным дилером нескольких компаний-производителей по изготовлению мебели ученической, досок учебных и оборудования для кабинетов физики, химии и других дисциплин.',
        },
    ];

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <Text variant="header-2" weight="bold" className={styles.heading}>
                    Почему выбирают нас
                </Text>

                <div className={styles.wrapper}>
                    {cards.map((card) => (
                        <Card
                            key={card.id}
                            size="l"
                            view="filled"
                            className={styles.card}
                        >
                            <div className={styles.rowTitle}>
                                <div className={styles.icon}>{card.icon}</div>
                                <Text
                                    variant="subheader-3"
                                    weight="medium"
                                    className={styles.title}
                                >
                                    {card.title}
                                </Text>
                            </div>
                            <Text
                                variant="body-2"
                                className={styles.text}
                                color="secondary"
                            >
                                {card.text}
                            </Text>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
