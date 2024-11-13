import userProfileUrl from '../../assets/logo.png';
import { X, Minus } from 'lucide-react';
import { useCart } from "../../reducers/useCart.tsx";
import { productServices } from "../../services/productServices.ts";
import { toast } from 'sonner';

type CartSectionProps = {
    isCartOpen: boolean;
    handleOpenCart: () => void;
    userName: string;
};

export default function CartSection({ isCartOpen, handleOpenCart, userName }: CartSectionProps) {
    const { cartItems, loading, error } = useCart();
    
    const total = cartItems.reduce((sum, item) => sum + (item.price || 0), 0);
    async function handleRemove(id: string) {
        const response = await productServices.deleteCart(id);
        if (response.success) {
            toast.success("Cart deleted");
        } else {
            toast.error(response.error);
        }
    }
 
    async function handleCheckout(){
        if(cartItems.length===0){
           toast.error("Wala pang laman")
        }
    }

    return (
        <div
        className={`fixed top-0 right-0 h-screen w-full sm:w-1/2 max-w-md bg-gray-100 p-6 shadow-lg transform transition-transform duration-300 z-50 ${
            isCartOpen ? 'translate-x-0' : 'translate-x-full'
        } overflow-y-auto`}
    >
            <button
                onClick={handleOpenCart}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
                <X className="h-5 w-5" />
            </button>

            <div className="flex items-center mb-6">
                <img
                    src={userProfileUrl}
                    alt={`${userName}'s profile`}
                    className="w-10 h-10 rounded-full mr-3"
                />
                <span className="text-lg font-semibold text-foreground">{userName}</span>
            </div>

            <h2 className="text-lg font-semibold mb-4">Your Cart</h2>

            {loading ? (
                <p className="text-center text-gray-500">Loading your cart...</p>
            ) : error ? (
                <p className="text-center text-red-500">Error loading cart: {error}</p>
            ) : cartItems.length > 0 ? (
                cartItems.map((item, index) => (
                    <div key={index} className="flex mb-4">
                        <img
                            src={item.imageUrl}
                            alt="Product Image"
                            className="rounded-lg bg-muted w-24 h-24 mr-4"
                        />
                        <div className="flex-1">
                            <h3 className="text-base font-medium">{item.name}</h3>
                            <p className="text-accent font-semibold">₱{Number(item.price).toFixed(2)}</p>
                        </div>
                        <button
                            onClick={() => handleRemove(item.product_id)}
                            className="p-1 bg-red-500 text-white hover:bg-red-600 rounded-full ml-4"
                        >
                            <Minus className="h-5 w-5" />
                        </button>
                    </div>
                ))
            ) : (
                <p className="text-center text-gray-500">Your cart is empty.</p>
            )}

            <div className="mb-4 flex gap-5">
                <p>Total</p>
                <p className="text-red-600">₱{total.toFixed(2)}</p>
            </div>

            
          <button 
            onClick={handleCheckout}
            className="w-full bg-primary text-white py-2 rounded-lg hover:bg-primary/80">
                Checkout
            </button>
        </div>
    );
}
