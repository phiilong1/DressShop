import { useContext } from "react";
import { CartContext } from "./cartcontext";
import { useNavigate } from "react-router-dom";

function CheckOut() {
    const { cart, removeFromCart } = useContext(CartContext);
    const navigate = useNavigate();

    const calculateTotal = () => {
        return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    };

    return (
        <div className="p-4 sm:p-6 md:p-8 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 mt-7">
            {/* Payment Method Section */}
            <div className="md:col-span-7 border p-4 sm:p-6 rounded-lg shadow-sm">
                <h2 className="text-lg sm:text-xl font-bold mb-4">Payment Method</h2>

                <div>
                    <label className="block text-sm font-medium mb-2">Card Details</label>
                    <input
                        type="text"
                        placeholder="Số thẻ"
                        className="w-full p-2 sm:p-3 border rounded-lg mb-4 focus:outline-none focus:ring focus:ring-gray-200"
                    />
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        <input
                            type="text"
                            placeholder="MM / YY"
                            className="p-2 sm:p-3 border rounded-lg focus:outline-none focus:ring focus:ring-gray-200"
                        />
                        <input
                            type="text"
                            placeholder="CVC"
                            className="p-2 sm:p-3 border rounded-lg focus:outline-none focus:ring focus:ring-gray-200"
                        />
                    </div>
                    <button className="w-full bg-gray-400 text-white py-2 sm:py-3 mt-4 rounded-lg">
                        Confirm Order
                    </button>
                </div>

                <div className="my-6 flex items-center">
                    <div className="flex-grow h-px bg-gray-300"></div>
                    <span className="px-4 text-gray-500">or</span>
                    <div className="flex-grow h-px bg-gray-300"></div>
                </div>
                <button className="w-full bg-yellow-400 text-black py-2 sm:py-3 rounded-lg mb-4">
                    <span className="font-bold">PayPal</span>
                </button>
                <button className="w-full bg-black text-white py-2 sm:py-3 rounded-lg">
                    Thẻ ghi nợ hoặc tín dụng
                </button>
                <p className="text-center text-xs sm:text-sm text-gray-500 mt-2">
                    Được hỗ trợ bởi PayPal
                </p>
            </div>

            {/* Checkout Items Section */}
            <div className="md:col-span-5 border p-4 sm:p-6 rounded-lg shadow-sm">
                <h2 className="text-lg sm:text-xl font-bold mb-4">Checkout Items</h2>
                {cart.length === 0 ? (
                    <p className="text-center text-lg sm:text-xl font-light text-gray-500">
                        Your cart is empty..
                    </p>
                ) : (
                    <>
                        {cart.map((item) => (
                            <div
                                key={item.id}
                                className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4"
                            >
                                <div
                                    className="flex items-center gap-4 cursor-pointer"
                                    onClick={() => navigate(`/product-details`, { state: { product: item } })}
                                >
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-16 h-16 rounded-lg object-cover"
                                    />
                                    <div>
                                        <p className="text-base sm:text-lg font-medium">{item.name}</p>
                                        <p className="text-sm text-gray-500">x{item.quantity}</p>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center w-full sm:w-auto">
                                    <p className="text-red-500 font-semibold">
                                        ${item.price * item.quantity}
                                    </p>
                                    <button
                                        onClick={() => removeFromCart(item.id)}
                                        className="text-sm text-red-500 hover:underline ml-4 sm:ml-1"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        ))}
                        <div className="border-t pt-4">
                            <div className="flex justify-between mb-2">
                                <p className="text-gray-600">Sub Total</p>
                                <p>${calculateTotal()}</p>
                            </div>
                            <div className="flex justify-between">
                                <p className="text-gray-800 font-semibold">Total</p>
                                <p className="text-red-500 font-bold">${calculateTotal()}</p>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default CheckOut;
