import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Product() {
    const navigate = useNavigate(); // Hook để chuyển trang
    const allProducts = [
        { id: 1, name: "Long Sleeves Polka Dots", price: 900, image: "https://dress-shop.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdjlbfjouc%2Fimage%2Fupload%2Fv1581158167%2Fsbiuoziiqi5gkuvrsymv.jpg&w=1080&q=75" },
        { id: 2, name: "Brown Jacket", price: 800, image: "https://dress-shop.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdjlbfjouc%2Fimage%2Fupload%2Fv1581156139%2Fnsmtzzw1gpn0l71w4mai.jpg&w=1080&q=75" },
        { id: 3, name: "Sleeveless Shirt", price: 400, image: "https://dress-shop.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdjlbfjouc%2Fimage%2Fupload%2Fv1581157604%2Fqfebd5mqwqcwbjsbehxr.jpg&w=1080&q=75" },
        { id: 4, name: "White Long Sleeves", price: 700, image: "https://dress-shop.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdjlbfjouc%2Fimage%2Fupload%2Fv1581158056%2Fdqtdtglewxjvig4x7rlk.jpg&w=1080&q=75" },
        { id: 5, name: "Denim Jacket", price: 950, image: "https://dress-shop.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdjlbfjouc%2Fimage%2Fupload%2Fv1581156071%2Fo4rfktvywje4qbks9lkl.jpg&w=1080&q=75" },
        { id: 6, name: "Summer Dress", price: 850, image: "https://dress-shop.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdjlbfjouc%2Fimage%2Fupload%2Fv1581156196%2Fhefaqrcrdhxmabag1ozl.jpg&w=1080&q=75" },
        { id: 7, name: "White Long Sleeves", price: 700, image: "https://dress-shop.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdjlbfjouc%2Fimage%2Fupload%2Fv1581156228%2Fbumiptjx37aqwkez2x4o.jpg&w=1080&q=75" },
    ];

    const [visibleProducts, setVisibleProducts] = useState(4); // Số sản phẩm hiển thị ban đầu

    const handleProductClick = (product) => {
        navigate('/product-details', { state: { product } }); // Chuyển đến trang chi tiết sản phẩm
    };

    const handleLoadMore = () => {
        setVisibleProducts((prev) => Math.min(prev + 4, allProducts.length)); // Tăng số sản phẩm hiển thị
    };

    return (
        <div className="mt-7 px-4 sm:px-9">
            <h1 className="text-2xl font-bold sm:text-3xl">PRODUCT OVERVIEW</h1>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-6">
                {allProducts.slice(0, visibleProducts).map((product, index) => (
                    <div 
                        key={index} 
                        className="relative group cursor-pointer" 
                        onClick={() => handleProductClick(product)} // Thêm sự kiện click
                    >
                        <img 
                            src={product.image} 
                            alt={product.name} 
                            className="rounded-lg h-72 w-80 object-cover"
                        />
                        <div className="absolute top-3 right-3 bg-white p-1 rounded-full shadow-md hover:bg-red-100 cursor-pointer">
                            <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                            </svg>
                        </div>
                        <div className="mt-4">
                            <h2 className="text-lg font-semibold">{product.name}</h2>
                            <p className="text-red-500 font-bold">P{product.price}</p>
                        </div>
                    </div>
                ))}
            </div>
            {visibleProducts < allProducts.length && ( 
                <div className="mt-6 text-center">
                <button 
                    onClick={handleLoadMore} 
                    className="
                        px-4 py-2 bg-white text-sm text-red-600 rounded-full 
                        border border-red-500 hover:bg-red-600 hover:text-white 
                        sm:px-14 sm:py-2.5 sm:text-lg"
                >
                    Load More
                </button>
            </div>            
            )}
        </div>
    );
}

export default Product;
