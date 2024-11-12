import { useNavigate } from "react-router-dom";
import { useProducts } from "../../reducers/userProducts";

export default function ProductPage() {
    const navigate = useNavigate();
    const { products, loading, error } = useProducts();

    function handleView(id: string) {
        navigate(`/product/get/${id}`);
    }

    return (
        <div className="bg-background min-h-screen p-6 font-mono ">
            <header className="mb-8 text-center">
                <h1 className="text-4xl font-bold text-primary-foreground">Our Products</h1>
                <p className="text-muted-foreground mt-4">Explore our exclusive range of products.</p>
            </header>

            {loading ? (
                <div className="flex justify-center items-center min-h-[50vh]">
                    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-primary"></div>
                </div>
            ) : error ? (
                <p className="text-center text-red-500">{error}</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
                    {products.map((product, index) => (
                        <div key={index} className="card shadow-lg bg-card transition-transform transform hover:scale-105">
                            <img
                                src={product.imageUrl}
                                alt="Product Image 1"
                                className="rounded-t-lg w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h2 className="text-xl font-semibold text-card-foreground">{product.name}</h2>
                                <p className="text-muted mt-2">{product.shortDescription}</p>
                                <p className="text-primary font-bold mt-4">₱{Number(product.price).toFixed(2)}</p>
                                <div className="flex gap-x-4 mt-4">
                                    <button className="bg-primary text-white rounded py-2 px-4 hover:bg-primary/80 focus:ring ring-primary">
                                        Add to Cart
                                    </button>
                                    <button
                                        onClick={() => handleView(product._id)}
                                        className="bg-primary/40 text-primary rounded py-2 px-4 hover:bg-primary/80 focus:ring ring-primary"
                                    >
                                        View More
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
