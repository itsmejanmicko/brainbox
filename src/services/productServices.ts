import { constant } from "../config/constant.ts";

export const productServices = {
    getAllProducts: async () => {
        try {
            const response = await fetch(`${constant.API_URI}/getProducts`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (!response.ok) {
                throw new Error("Failed to fetch products");
            }

            return await response.json();
        } catch (error) {
            console.error("Error fetching products:", error);
            throw error;
        }
    },
    
    addToCart: async (product_id: string) => {
        try {
            const response = await fetch('http://localhost:5000/addtocart', {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ product_id }),
            });
            const data = await response.json(); 
            return data;
        } catch (error) {
            console.error("Error adding to cart:", error);  
            throw error;
        }
    },
    
    getMyCart: async () => {
        try {
            const response = await fetch('http://localhost:5000/getMyCart', {
                method: "GET",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const data = await response.json();  
       
            return data;
        } catch (error) {
            console.error("Error fetching cart:", error);  
        }
    },
    
    deleteCart: async (id: string) => {
        try {
            const response = await fetch(`http://localhost:5000/delete`, {
                method: "DELETE",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ id }),
            });
            const data = await response.json();  
        
            return data;
        } catch (error) {
            console.error("Error deleting from cart:", error); 
            throw error;
        }
    },
};
