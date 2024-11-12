import { useEffect, useState } from 'react';
import { Heart, ShoppingCart } from 'lucide-react';
import {useParams} from 'react-router-dom';

const productImages = '/placeholder.svg?height=600&width=600';

interface Product {
    _id: string;
    name: string;
    price: string;
    imageUrl: string;
    descriptions: [];
    shortDescription:string,
    status:string,
}

export default function LearnPage() {
      const {id} = useParams();
        const [product, setProduct] = useState<Product | null>(null);
        const [loading, setLoading] = useState(true);
        const [error, setError] = useState<string | null>(null);


    useEffect(() => {
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
                setProduct(data);
                console.log(data)
                setLoading(false);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'An unexpected error occurred');
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 font-mono">
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
                                        {product?.status}
                                    </p>
                                    <h1 className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
                                        {product?.name || 'Premium Headphones'}
                                    </h1>
                                </div>
                            </div>
                            <p className="mt-6 text-gray-500 text-lg leading-relaxed">
                                {product?.shortDescription || 'Experience crystal-clear audio with our latest noise-cancelling headphones.'}
                            </p>

                            <div className="mt-8 flex items-center justify-between">
                                <div>
                                    <span className="text-4xl font-bold text-gray-900">
                                        ₱{Number(product?.price).toFixed(2) || 'N/A'}
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
                                        {product?.descriptions.map((desc,index)=>(
                                            <li key={index}>{desc}</li>
                                        ))}
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
