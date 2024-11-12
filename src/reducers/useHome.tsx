import { useState, useEffect } from "react";
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

export function useFetchProducts(limit: number = 4) {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchProducts() {
            try {
                const response:Product = await productServices.getAllProducts();
                const productsArray = Object.values(response).slice(0, limit);

                if (Array.isArray(productsArray)) {
                    setProducts(productsArray);
                } else {
                    throw new Error("Unexpected data format.");
                }
            } catch (err) {
                setError("Failed to load products.");
                console.log(err)
            } finally {
                setLoading(false);
            }
        }
        fetchProducts();
    }, [limit]);

    return { products, loading, error };
}
