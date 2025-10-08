import { useState } from "react";
import { Modal, Button } from "@gravity-ui/uikit";
import { OrderCall } from "../../features/OrderCall.jsx";

export function OrderCallModal() {
    const [open, setOpen] = useState(false);

    const handleSubmit = (data) => {
        setOpen(false);
    };

    return (
        <>
            <Button  view="action" size="l" onClick={() => setOpen(true)}>
                Заказать звонок
            </Button>

            <Modal open={open} onClose={() => setOpen(false)}>
                <OrderCall onSubmit={handleSubmit} onClose={() => setOpen(false)}/>
            </Modal>
        </>
    );
}
