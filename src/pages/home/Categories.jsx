
import { Button, Card, Text } from '@gravity-ui/uikit';
import { BookOpen, Bug, Calculator, PlanetEarth, Star, CurlyBrackets, ClockArrowRotateLeft, Bars } from '@gravity-ui/icons';
import styles from './Categories.module.css';

export function Categories() {
    const colors = [
        '--g-color-private-orange-450',
        '--g-color-private-green-200',
        '--g-color-private-yellow-450',
        '--g-color-private-red-350',
        '--g-color-private-blue-500-solid',
        '--g-color-private-green-600-solid',
        '--g-color-private-purple-400',
        '--g-color-private-cool-grey-300'
    ];

    const cards = [
        {
            id: 1,
            title: 'Английский',
            icon: <BookOpen width={48} height={48} />,
            href: '',
            subTitle: 'Учебные пособия, словари, интерактивные материалы и современные методики для эффективного изучения английского языка',
        },
        {
            id: 2,
            title: 'Биология',
            icon: <Bug width={48} height={48} />,
            href: '',
            subTitle: 'Наглядные пособия, микроскопы, анатомические модели и демонстрационные комплексы для глубокого изучения живой природы.',
        },
        {
            id: 3,
            title: 'Математика',
            icon: <Calculator width={48} height={48} />,
            href: '',
            subTitle: 'Дидактические материалы, геометрические модели, счетные пособия и интерактивные комплексы для развития логического мышления.',
        },
        {
            id: 4,
            title: 'Информатика',
            icon: <CurlyBrackets width={48} height={48} />,
            href: '',
            subTitle: 'Современное компьютерное оборудование, программное обеспечение, робототехника и учебные материалы по программированию.',
        },
        {
            id: 5,
            title: 'Астраномия',
            icon: <Star width={48} height={48} />,
            href: '',
            subTitle: 'Телескопы, карты звездного неба, модели планетных систем и демонстрационные материалы для изучения космоса.',
        },
        {
            id: 6,
            title: 'География',
            icon: <PlanetEarth width={48} height={48} />,
            href: '',
            subTitle: 'Географические карты, глобусы, гербарии, коллекции минералов и интерактивные пособия для изучения планеты Земля.',
        },
        {
            id: 7,
            title: 'История',
            icon: <ClockArrowRotateLeft width={48} height={48} />,
            href: '',
            subTitle: 'Исторические карты, репродукции, хронологические таблицы и наглядные материалы для погружения в прошлое.',
        },
        {
            id: 8,
            title: 'Это не все',
            // icon: <Bars width={48} height={48} />,
            href: '',
            subTitle: 'Нажмите на кнопку, чтоб перейти в весь каталог',
        },
    ];

    return (
        <section className={styles.section}>
            <div className={styles.title}>
                <Text variant='header-1' className={styles.titleText}>Популярные категории <Text variant='body-1'><a className={styles.link}>весь каталог</a></Text></Text>
                <Text variant='body-2' className={styles.titleSubText}>В этом разделе представлены популярные категории по предметам</Text>
            </div>
            <div className={styles.wrapper}>
                {cards.map((card, index) => (
                    <Card key={card.id} className={styles.card} style={colors[index] ? { backgroundColor: `var(${colors[index]})` } : ''}>
                        <div className={styles.content}>
                            <Text variant='header-1' className={styles.cardTitle}>{card.title}</Text>
                            <Text variant='body-2'>{card.subTitle}</Text>
                        </div>
                        <div className={styles.buttonWrapper}>
                            <div>{card.icon}</div>
                            <Button size='xl' view={index === 7 ? 'action' : 'outlined'}>Перейти</Button>
                        </div>
                    </Card>
                ))}
            </div>
        </section>
    );
}
