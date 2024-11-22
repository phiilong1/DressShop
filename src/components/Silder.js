import { useState, useEffect } from "react";

function Silder() {
    const images = [
        "https://dress-shop.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdjlbfjouc%2Fimage%2Fupload%2Fv1582518195%2Fbanner-2_htripb.jpg&w=1920&q=75",
        "https://dress-shop.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdjlbfjouc%2Fimage%2Fupload%2Fv1582518190%2Fbanner-1_sysmlz.jpg&w=1920&q=75",
        "https://res.cloudinary.com/djlbfjouc/image/upload/v1582518206/banner-3_mczlxb.jpg",
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-slide every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // 5 seconds
        return () => clearInterval(interval);
    }, [images.length]);

    

    return (
        <div className="relative w-full h-72 sm:h-3/4 overflow-hidden">
            <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Slide ${index}`}
                        className="w-full h-full object-cover"
                    />
                ))}
            </div>

        

            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-3 h-3 rounded-full ${
                            currentIndex === index ? "bg-white" : "bg-gray-400"
                        }`}
                    ></button>
                ))}
            </div>
        </div>
    );
}

export default Silder;
