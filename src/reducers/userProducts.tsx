import { useEffect, useState } from "react";
import { productServices } from "../services/productServices";

interface Product {
    _id: string;
    name: string;
    price: string;
    imageUrl: string;
    description: [];
    shortDescription?: string;
    status: string;
}
export function useProducts() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        productServices.getAllProducts()
            .then((response: Product) => {
                const productsArray = Object.values(response);

                if (Array.isArray(productsArray)) {
                    setProducts(productsArray);
                } else {
                    setError("Unexpected data format.");
                }

                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setError("Failed to load products.");
                setLoading(false);
            });
    }, []);

    return { products, loading, error };
}
