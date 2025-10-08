import { Breadcrumbs as BC } from "@gravity-ui/uikit";
import { useLocation } from "react-router-dom";

export function Breadcrumbs() {
    const location = useLocation();
    const pathnames = location.pathname
        .split("/")
        .filter(Boolean);

    const mapper = {
        catalog: "Каталог",
        math: "Математика",
    };

    return (
        <BC separator="/">
            <BC.Item>
                Главная страница
            </BC.Item>

            {pathnames.map((path, index) => {
                const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
                return (
                    <BC.Item key={routeTo} href={routeTo}>
                        {mapper[path] || decodeURIComponent(path)}
                    </BC.Item>
                );
            })}
        </BC>
    );
}
