import { useState } from "react";
import { Button, TextInput, Text, Select, Icon, TextArea } from "@gravity-ui/uikit";
import { Xmark } from "@gravity-ui/icons";
import styles from "./OrderCall.module.css";

export function OrderCall({ onSubmit, onClose }) {
    const [form, setForm] = useState({
        fio: "",
        phone: "",
        topic: "",
    });

    const topics = [
        { value: "product", content: "Вопрос по товару" },
        { value: "delivery", content: "Доставка" },
        { value: "payment", content: "Оплата" },
        { value: "documents", content: "Документы" },
        { value: "other", content: "Другое" },
    ];

    const handleChange = (field, value) =>
        setForm(prev => ({ ...prev, [field]: value }));

    const handleSubmit = () => {
        if (!form.fio || !form.phone || !form.topic) {
            alert("Пожалуйста, заполните все поля");
            return;
        }
        if (onSubmit) onSubmit(form);
    };

    return (
        <div className={styles.modalWrapper}>
            <div className={styles.modalHeader}>
                <Text variant="header-2" className={styles.title}>Заказать звонок</Text>
                <Button
                    view="flat"
                    size="l"
                    onClick={onClose}
                    className={styles.closeButton}
                >
                    <Icon data={Xmark} size={20} />
                </Button>
            </div>

            <div className={styles.form}>
                <div className={styles.field}>
                    <Text className={styles.label}>ФИО</Text>
                    <TextInput
                        size="l"
                        placeholder="Введите ваше полное имя"
                        value={form.fio}
                        onChange={e => handleChange("fio", e.target.value)}
                    />
                </div>

                <div className={styles.field}>
                    <Text className={styles.label}>Номер телефона</Text>
                    <TextInput
                        size="l"
                        placeholder="+375 (__) ___-__-__"
                        value={form.phone}
                        onChange={e => handleChange("phone", e.target.value)}
                    />
                </div>

                <div className={styles.field}>
                    <Text className={styles.label}>Тема обращения</Text>
                    <Select
                        size="l"
                        placeholder="Выберите тему"
                        value={form.topic ? [form.topic] : []}
                        onUpdate={vals => handleChange("topic", vals[0])}
                        options={topics}
                    />
                </div>

                {form.topic === 'other' && <div>
                    <Text className={styles.label}>Текст обращения</Text>
                    <TextArea
                        className={styles.textArea}
                        placeholder="Введите ваше сообщение тут"
                        minRows={3}
                        maxRows={8}
                    />
                </div>}

                <Button
                    view="action"
                    size="l"
                    onClick={handleSubmit}
                    className={styles.submitBtn}
                >
                    Отправить заявку
                </Button>
            </div>
        </div>
    );
}
