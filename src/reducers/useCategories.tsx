import { useEffect, useState } from "react";
import { productServices } from "../services/productServices";

export interface Product {
    _id: string;
    name: string;
    price: string;
    imageUrl: string;
    categories: string;
    shortDescription?: string;
}

interface ProductsByCategory {
    brainProducts: Product[];
    eyeProducts: Product[];
    loading: boolean;
    error: string | null;
}

export function useProductsByCategory(): ProductsByCategory {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        productServices.getAllProducts()
            .then((response: { [key: string]: Product }) => {
                const productsArray = Object.values(response);

                if (Array.isArray(productsArray)) {
                    setProducts(productsArray);
                } else {
                    setError("Unexpected data format.");
                }
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setError("Failed to load products.");
                setLoading(false);
            });
    }, []);

    const brainProducts = products.filter((product) => product.categories === "brain");
    const eyeProducts = products.filter((product) => product.categories === "eyes");

    return { brainProducts, eyeProducts, loading, error };
}
