import { useState } from "react";
import { Button, TextInput } from "@gravity-ui/uikit";
import styles from "./QuantityCounter.module.css";

export function QuantityCounter({ min = 1, max = 99, initial = 1, onChange }) {
    const [count, setCount] = useState(initial);

    const updateCount = (newCount) => {
        if (newCount < min || newCount > max) return;
        setCount(newCount);
        onChange?.(newCount);
    };

    const handleDecrease = () => updateCount(count - 1);
    const handleIncrease = () => updateCount(count + 1);

    const handleInputChange = (e) => {
        const value = Number(e.target.value);
        if (!isNaN(value)) updateCount(value);
    };

    return (
        <div className={styles.counter}>
            <Button
                view="flat-secondary"
                size="l"
                onClick={handleDecrease}
                disabled={count <= min}
                className={styles.button}
            >
                −
            </Button>

            <TextInput
                size="l"
                value={count}
                onChange={handleInputChange}
                className={styles.input}
            />

            <Button
                view="flat-secondary"
                size="l"
                onClick={handleIncrease}
                disabled={count >= max}
                className={styles.button}
            >
                +
            </Button>
        </div>
    );
}
