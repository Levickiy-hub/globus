import { Breadcrumbs as BC,Button } from "@gravity-ui/uikit";
import { useLocation } from 'react-router';

export function Breadcrumbs() {
    const location = useLocation();
    console.log(location.pathname)

    return (
        <div>
            <BC separator="/">
                <BC.Item href="/">Главная страница</BC.Item>
                <BC.Item href="/catalog">Каталог</BC.Item>
            </BC>
        </div>
    );
}
