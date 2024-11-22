import { useContext } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { CartContext } from './cartcontext';

function Cart() {
    const { cart, removeFromCart } = useContext(CartContext);
    const navigate = useNavigate(); // Khởi tạo navigate

    const calculateTotal = () => {
        return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    };

    return (
        <div className="p-6 mt-7">
            <h1 className="text-3xl font-bold mb-6">YOUR CART</h1>

            {cart.length === 0 ? (
                <p className='text-center text-2xl font-normal'>Your cart is empty..</p>
            ) : (
                <>
                    <div className="grid grid-cols-6 items-center border-b pb-2">
                        <p className="col-span-2 font-semibold">Product</p>
                        <p className="text-center font-semibold">Price</p>
                        <p className="text-center font-semibold">Quantity</p>
                        <p className="text-center font-semibold">Total</p>
                        <p className="text-right font-semibold">Action</p>
                    </div>

                    {cart.map((item) => (
                        <div key={item.id} className="grid grid-cols-6 items-center border-b py-4">
                            <div className="col-span-2 flex items-center gap-4">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-20 h-20 rounded-lg object-cover"
                                />
                                <p className="font-semibold">{item.name}</p>
                            </div>
                            <p className="text-center">{item.price}</p>
                            <p className="text-center">{item.quantity}</p>
                            <p className="text-center text-red-500">{item.price * item.quantity}</p>
                            <p
                                className="text-right text-red-500 cursor-pointer hover:underline"
                                onClick={() => removeFromCart(item.id)} // Xử lý xóa
                            >
                                Delete
                            </p>
                        </div>
                    ))}

                    <div className="flex justify-end items-center mt-6">
                        <p className="font-semibold mr-4">
                            Sub Total <span className="text-red-500 ml-2">{calculateTotal()}</span>
                        </p>
                        <button
                            className="px-6 py-2 bg-black text-white font-medium rounded hover:bg-gray-800"
                            onClick={() => navigate('/checkout')} // Điều hướng sang trang CheckOut
                        >
                            Check Out
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}

export default Cart;
