import { useLocation, useNavigate } from 'react-router-dom';
import { useState, useContext, useEffect } from 'react';
import { CartContext } from './cartcontext';

function ProductDetails() {
    const location = useLocation();
    const navigate = useNavigate();
    const { addToCart } = useContext(CartContext);
    const product = location.state?.product;
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!product) {
        return <h1>Product not found!</h1>;
    }

    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleIncrease = () => {
        setQuantity(quantity + 1);
    };

    const handleAddToCart = () => {
        addToCart(product, quantity);
        navigate('/cart');
    };

    
    return (
        <div className="p-6 flex flex-col md:flex-row items-start md:items-center gap-6 mt-7">
            <img
                src={product.image}
                alt={product.name}
                className="rounded-lg w-full md:w-80 object-cover ml-0 mb-6 md:mb-0"
            />

            <div className="flex-1">
                <h1 className="text-3xl font-bold">{product.name}</h1>
                <p className="mt-2 text-red-500 text-xl font-semibold">{product.price}</p>
                <p className="mt-4 text-gray-500">
                    Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula.
                    Mauris consequat ornare feugiat.
                </p>

                <div className="mt-6 flex items-center gap-4">
                    <div className="flex items-center border rounded-lg overflow-hidden">
                        <button
                            className="px-3 py-2 bg-gray-200 hover:bg-gray-300"
                            onClick={handleDecrease}
                        >
                            -
                        </button>
                        <span className="px-4 py-2">{quantity}</span>
                        <button
                            className="px-3 py-2 bg-gray-200 hover:bg-gray-300"
                            onClick={handleIncrease}
                        >
                            +
                        </button>
                    </div>
                    <button
                        className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600"
                        onClick={handleAddToCart}
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;
