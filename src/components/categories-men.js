import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CategoriesMen() {
    const [sortOption, setSortOption] = useState("Price");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const navigate = useNavigate();

    const handleSortOption = (option) => {
        setSortOption(option);
        setIsDropdownOpen(false);
    };

    const products = [
        { id: 1, name: "Classic Black Suit", price: 2000, image: "https://dress-shop.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdjlbfjouc%2Fimage%2Fupload%2Fv1581158056%2Fdqtdtglewxjvig4x7rlk.jpg&w=1080&q=75" },
        { id: 2, name: "Casual Denim Jacket", price: 1200, image: "https://dress-shop.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdjlbfjouc%2Fimage%2Fupload%2Fv1582456742%2Flongsleeves-hershel_mampai.jpg&w=1080&q=75" },
        { id: 3, name: "Formal White Shirt", price: 800, image: "https://dress-shop.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdjlbfjouc%2Fimage%2Fupload%2Fv1581156071%2Fo4rfktvywje4qbks9lkl.jpg&w=1080&q=75" },
        { id: 4, name: "Sporty Grey Hoodie", price: 1000, image: "https://dress-shop.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdjlbfjouc%2Fimage%2Fupload%2Fv1581156071%2Fo4rfktvywje4qbks9lkl.jpg&w=1080&q=75" },
        { id: 5, name: "Blue Jeans", price: 600, image: "https://dress-shop.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdjlbfjouc%2Fimage%2Fupload%2Fv1581158056%2Fdqtdtglewxjvig4x7rlk.jpg&w=1080&q=75" },
        { id: 6, name: "Brown Leather Shoes", price: 1500, image: "https://dress-shop.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdjlbfjouc%2Fimage%2Fupload%2Fv1581158056%2Fdqtdtglewxjvig4x7rlk.jpg&w=1080&q=75" },
    ];

    const sortedProducts = [...products].sort((a, b) => {
        if (sortOption === "Low to High") return a.price - b.price;
        if (sortOption === "High to Low") return b.price - a.price;
        return 0;
    });

    const handleProductClick = (product) => {
        navigate(`/product-details`, { state: { product } });
    };

    const navigateToWomen = () => {
        navigate("/categories-women");
    };

    return (
        <div className="bg-gray-100 rounded-sm py-6 px-4 sm:px-10 mt-6 ml-4 mr-4">
            <div className="flex flex-wrap items-center justify-between space-y-2 sm:space-y-0">
                <div className="space-x-4">
                    <button className="bg-red-600 text-white text-lg sm:text-2xl font-semibold px-3 py-2 rounded-md focus:outline-none">
                        Men
                    </button>
                    <button
                        onClick={navigateToWomen}
                        className="bg-gray-200 text-black text-lg sm:text-2xl font-semibold px-3 py-2 rounded-md focus:outline-none"
                    >
                        Women
                    </button>
                </div>

                <div className="flex items-center space-x-2 relative">
                    <span className="text-md sm:text-lg font-semibold">Sort by</span>
                    <button
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="bg-gray-100 text-black text-md sm:text-lg font-semibold px-3 py-2 rounded-md focus:outline-none flex items-center space-x-1"
                    >
                        <span>{sortOption}</span>
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M5.5 8.5L10 13l4.5-4.5h-9z" />
                        </svg>
                    </button>

                    {isDropdownOpen && (
                        <div className="absolute right-0 mt-2 w-36 sm:w-40 bg-white border border-gray-300 rounded-md shadow-lg z-10">
                            <ul className="py-1">
                                <li>
                                    <button
                                        onClick={() => handleSortOption("Low to High")}
                                        className="block w-full text-left px-4 py-2 text-black hover:bg-gray-100"
                                    >
                                        Low to High
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() => handleSortOption("High to Low")}
                                        className="block w-full text-left px-4 py-2 text-black hover:bg-gray-100"
                                    >
                                        High to Low
                                    </button>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>

            <div className="mt-6 px-2 sm:px-6">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mt-6">
                    {sortedProducts.map((product) => (
                        <div key={product.id} className="relative group">
                            <img
                                src={product.image}
                                alt={product.name}
                                onClick={() => handleProductClick(product)}
                                className="rounded-lg h-40 w-full object-cover sm:h-72 sm:w-80 cursor-pointer"
                            />
                            <div className="mt-3 sm:mt-4">
                                <h2 className="text-md sm:text-lg font-semibold">{product.name}</h2>
                                <p className="text-red-500 font-bold">P{product.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default CategoriesMen;
