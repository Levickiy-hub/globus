import { Text } from "@gravity-ui/uikit";
import styles from "./ProductGrid.module.css";
import { ProductCard } from "./ProductCard";

export function ProductGrid({ title, products }) {
    
    return (
        <div>
            <Text>{title}</Text>
            <div>
                {products.map(product => (<ProductCard key={`product-${product.id}`} product={product} />))}
            </div>
        </div>
    );
}
