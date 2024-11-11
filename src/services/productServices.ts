import {constant} from "../config/constant.ts";

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
};
