import { useNavigate } from "react-router-dom";
import { useFetchProducts } from "../../reducers/useHome.tsx";
import { constant } from "../../config/constant.ts";
import {useCallback} from "react";
import {productServices} from "../../services/productServices.ts";
import {toast} from "sonner";


export default function ProductsSection() {
    const navigate = useNavigate();
    const { products, loading, error } = useFetchProducts(4);
    const handleAddtoCart = async (id:string)=>{
       try{
           const response = await productServices.addToCart(id)
            if(response.success){
                toast.success("Product Added");
            }
       }catch(error){
           console.log(error)
       }
    }

    const handleLearnMore = useCallback((id: string) => {
        navigate(`/product/get/${id}`);
    }, [navigate]);

    return (
        <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-8">Featured Products</h2>
                {loading ? (
                    <div className="flex justify-center items-center min-h-[50vh]">
                        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-primary"></div>
                    </div>
                ) : error ? (
                    <p className="text-center text-red-500">{error}</p>
                ) : (
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {products.map((product) => (
                            <div key={product._id} className="group relative overflow-hidden rounded-lg border">
                                <img
                                    src={product.imageUrl}
                                    alt={`Product ${product.name}`}
                                    className="object-cover w-full h-60 transition-transform group-hover:scale-105"
                                />
                                <div className="p-4">
                                    <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                                    <p className="text-muted-foreground">₱{Number(product.price).toFixed(2)}</p>
                                    <button
                                        onClick={() => handleAddtoCart(product._id)}
                                        className="btn bg-primary w-full mt-4 h-10 rounded-sm hover:bg-primary/80 text-white"
                                    >
                                        {constant.PRODUCTS.ADDTOCART}
                                    </button>
                                    <button
                                        onClick={() => handleLearnMore(product._id)}
                                        className="btn bg-gray-500 w-full mt-4 h-10 rounded-sm hover:bg-primary/80 text-white"
                                    >
                                        Learn More
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
