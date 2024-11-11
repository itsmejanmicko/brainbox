import {useEffect, useState} from "react";
import {productServices} from "../../services/productServices.ts";
import {useNavigate} from "react-router-dom";


interface Product {
    _id: string;
    name: string;
    price: string;
    imageUrl:string
}

export default function ProductPage() {
    const navigate = useNavigate();
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        productServices.getAllProducts()
            .then((response:Product) => {
                // Convert the object into an array of products
                const productsArray= Object.values(response);

                if (Array.isArray(productsArray)) {
                    setProducts(productsArray)
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
    function handleView(id:string){
        navigate(`/product/get/${id}`);
    }
    return (
        <div className="bg-background min-h-screen p-6 font-mono ">

            <header className="mb-8 text-center">
                <h1 className="text-4xl font-bold text-primary-foreground">Our Products</h1>
                <p className="text-muted-foreground mt-4">Explore our exclusive range of products.</p>
            </header>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">

                {products.map((product, index) => (
                    <div key={index} className="card shadow-lg bg-card transition-transform transform hover:scale-105">
                        <img src={product.imageUrl} alt="Product Image 1"
                             className="rounded-t-lg w-full h-48 object-cover"/>
                        <div className="p-4">
                            <h2 className="text-xl font-semibold text-card-foreground">{product.name}</h2>
                            <p className="text-muted mt-2">A short description of the product.</p>
                            <p className="text-primary font-bold mt-4">₱{Number(product.price).toFixed(2)}</p>
                            <div className="flex gap-x-4 mt-4">
                                <button
                                    className="bg-primary text-white rounded py-2 px-4 hover:bg-primary/80 focus:ring ring-primary">
                                    Add to Cart
                                </button>
                                <button
                                    onClick={()=> handleView(product._id)}
                                    className="bg-primary/40 text-primary rounded py-2 px-4 hover:bg-primary/80 focus:ring ring-primary">
                                    View More
                                </button>
                            </div>
                        </div>
                    </div>
                ))}



            </div>
        </div>
    )
}