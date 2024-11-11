import {productServices} from "../../services/productServices.ts";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {constant} from "../../config/constant.ts";

interface Product {
  _id: string;
  name: string;
  price: string;
  imageUrl:string
}

export default function ProductsSection() {
  const navigate = useNavigate();
  const isAuthenticated: boolean = false;
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  function handleAddtoCart(productName: string): void {
    if (!isAuthenticated) {
      navigate('/login');
    }
    console.log(`Adding ${productName} to cart`);
  }

  useEffect(() => {
    productServices.getAllProducts()
        .then((response:Product) => {
          // Convert the object into an array of products
          const productsArray= Object.values(response);

          if (Array.isArray(productsArray)) {
            setProducts((productsArray.slice(0,4)))
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

  async function handleLearnMore(id:string){
      navigate(`/product/get/${id}`);

  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-8">Featured Products</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product, index) => (
                <div key={index} className="group relative overflow-hidden rounded-lg border">
                  <img
                      src={`${product.imageUrl}`}
                      alt={`Product ${product.name}`}
                      className="object-cover w-full h-60 transition-transform group-hover:scale-105"
                  />

                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                    <p className="text-muted-foreground">₱{Number(product.price).toFixed(2)}</p>
                    <button
                        onClick={() => handleAddtoCart(product.name)}
                        className="btn bg-primary w-full mt-4 h-10 rounded-sm hover:bg-primary/80 text-white"
                    >
                      {constant.PRODUCTS.ADDTOCART}
                    </button>
                      <button
                          onClick={()=> handleLearnMore(product._id)}
                          className="btn bg-gray-500 w-full mt-4 h-10 rounded-sm hover:bg-primary/80 text-white">
                          Learn More
                      </button>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </section>
  );
}
