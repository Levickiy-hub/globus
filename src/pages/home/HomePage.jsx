import { Button, Card } from "@gravity-ui/uikit";
import { Hero } from "./Hero";

export function HomePage({ onGoToCatalog }) {
    const news = [
        { id: 1, title: "Запуск нового сайта", date: "01.10.2025", text: "Мы обновили интернет-каталог для удобства пользователей." },
        { id: 2, title: "Новые поступления", date: "15.09.2025", text: "В каталог добавлены новые категории товаров для школ." },
    ];

    return (
        <div style={{ fontFamily: "Arial, sans-serif", color: "#1a2e5a" }}>
            <Hero/>

            {/* About */}
            <section style={{ marginBottom: "40px" }}>
                <h2>О компании</h2>
                <p>
                    Мы обеспечиваем учебные заведения и организации качественными товарами.
                    На новом сайте вы найдете каталог без цен, возможность оформить заявку и
                    быстрый доступ к информации.
                </p>
                <Button view="outlined">Подробнее</Button>
            </section>

            {/* Categories */}
            <section style={{ marginBottom: "40px" }}>
                <h2>Категории товаров</h2>
                <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                    <Card style={{ padding: "20px", width: "200px", textAlign: "center" }}>Одежда</Card>
                    <Card style={{ padding: "20px", width: "200px", textAlign: "center" }}>Обувь</Card>
                    <Card style={{ padding: "20px", width: "200px", textAlign: "center" }}>Аксессуары</Card>
                    <Card style={{ padding: "20px", width: "200px", textAlign: "center" }}>Канцтовары</Card>
                </div>
                <Button view="action" style={{ marginTop: "20px" }}>Смотреть все товары</Button>
            </section>

            {/* News */}
            <section style={{ marginBottom: "40px" }}>
                <h2>Новости</h2>
                <div style={{ display: "grid", gap: "16px" }}>
                    {news.map((n) => (
                        <Card key={n.id} style={{ padding: "20px" }}>
                            <h3>{n.title}</h3>
                            <p style={{ fontSize: "14px", color: "#666" }}>{n.date}</p>
                            <p>{n.text}</p>
                        </Card>
                    ))}
                </div>
                <Button view="outlined" style={{ marginTop: "20px" }}>Все новости</Button>
            </section>

            {/* Feedback */}
            <section style={{ marginBottom: "40px" }}>
                <h2>Обратная связь</h2>
                <Card style={{ padding: "20px", maxWidth: "400px" }}>
                    <form style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                        <input type="text" placeholder="Ваше имя" style={{ padding: "10px" }} />
                        <input type="tel" placeholder="Телефон" style={{ padding: "10px" }} />
                        <textarea placeholder="Сообщение" style={{ padding: "10px" }} />
                        <Button view="action">Отправить</Button>
                    </form>
                </Card>
            </section>
        </div>
    );
}
