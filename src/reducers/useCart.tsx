import { useEffect, useState } from "react";
import { productServices } from "../services/productServices";

interface cartTypes {
    _id:string;
    order_user_id:string;
    product_id:string;
    price:number;
    email:string;
    imageUrl:string
    name:string
}
export function useCart() {
    const [cartItems, setCartItems] = useState<cartTypes[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    
   
    useEffect(() => {
        productServices.getMyCart()
            .then((response: cartTypes) => {
                const productsArray = Object.values(response);

                if (Array.isArray(productsArray)) {
                    setCartItems(productsArray);
                    if(productsArray[0]==='No Cart found'){
                        setCartItems([]); 
                    }else{
                        setCartItems(productsArray);
                    }
                } else {
                    setCartItems([])
                    setError("Unexpected data format.");
                }

                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setCartItems([])
                setError("Failed to load products.");
                setLoading(false);
            });
    }, []);

    return { cartItems, loading, error };
}
