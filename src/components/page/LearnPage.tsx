import { useEffect, useState } from 'react';
import { Heart, ShoppingCart, Info } from 'lucide-react';
import {useParams} from 'react-router-dom';

const productImages = '/placeholder.svg?height=600&width=600';

interface Product {
    _id: string;
    name: string;
    price: string;
    imageUrl: string;
    description?: string;
}

export default function LearnPage() {
      const {id} = useParams();
    const [isFavorite, setIsFavorite] = useState(false);
    const [product, setProduct] = useState<Product | null>(null); // State to store product data
    const [loading, setLoading] = useState(true); // State for loading status
    const [error, setError] = useState<string | null>(null); // State for error handling

    useEffect(() => {
        // Make the GET request to fetch product details
        const fetchProduct = async () => {
            try {
                const response = await fetch(`http://localhost:5000/product/get/${id}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch product data');
                }

                const data: Product = await response.json();
                console.log(data)
                setProduct(data);
                setLoading(false);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'An unexpected error occurred');
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    if (loading) {
        return <div>Loading...</div>; // Loading state
    }

    if (error) {
        return <div>Error: {error}</div>; // Error state
    }

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="bg-white shadow-2xl rounded-lg overflow-hidden">
                    <div className="lg:flex">
                        {/* Product Image */}
                        <div className="lg:w-1/2 relative">
                            <img
                                className="w-full h-96 lg:h-[600px] object-cover"
                                src={product?.imageUrl || productImages} // Use actual product image
                                alt="Product image"
                            />
                        </div>

                        {/* Product Details */}
                        <div className="lg:w-1/2 p-8 lg:p-12">
                            <div className="flex justify-between items-start">
                                <div>
                                    <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wide">
                                        New Arrival
                                    </p>
                                    <h1 className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
                                        {product?.name || 'Premium Headphones'}
                                    </h1>
                                </div>
                                <button
                                    onClick={() => setIsFavorite(!isFavorite)}
                                    className={`p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
                                        isFavorite ? 'text-red-500' : 'text-gray-400'
                                    }`}
                                >
                                    <Heart className={`w-6 h-6 ${isFavorite ? 'fill-current' : ''}`} />
                                </button>
                            </div>
                            <p className="mt-6 text-gray-500 text-lg leading-relaxed">
                                {product?.description || 'Experience crystal-clear audio with our latest noise-cancelling headphones.'}
                            </p>

                            <div className="mt-8 flex items-center justify-between">
                                <div>
                                    <span className="text-4xl font-bold text-gray-900">
                                        ₱{product?.price || 'N/A'}
                                    </span>
                                    <span className="ml-2 text-lg text-gray-500">Peso</span>
                                </div>
                            </div>

                            <div className="mt-8 space-y-4 sm:space-y-0 sm:flex sm:space-x-4">
                                <button className="w-full sm:w-auto bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors">
                                    <ShoppingCart className="inline-block w-5 h-5 mr-2" />
                                    Add to Cart
                                </button>
                            </div>

                            <div className="mt-10 border-t border-gray-200 pt-6">
                                <h3 className="text-sm font-medium text-gray-900">Highlights</h3>
                                <div className="mt-4 prose prose-sm text-gray-500">
                                    <ul className="list-disc pl-5 space-y-2">
                                        <li>Active Noise Cancellation</li>
                                        <li>40-hour battery life</li>
                                        <li>Bluetooth 5.0 connectivity</li>
                                        <li>Comfortable over-ear design</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
