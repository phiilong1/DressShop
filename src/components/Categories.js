import { Link } from "react-router-dom";

function Categories() {
    return (
        <div className="mt-7 px-4 sm:px-9">
            <h1 className="text-2xl sm:text-3xl font-bold sm:text-left">CATEGORIES</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-4">
                
                <div className="relative border border-gray-300 p-4 flex items-center justify-center h-54 sm:h-auto">
                    <Link to="/categories-women">
                        <img
                            src="https://res.cloudinary.com/djlbfjouc/image/upload/v1582274091/ezgif.com-webp-to-jpg_l9flc0.jpg"
                            alt="Women"
                            className="object-cover w-full h-full"
                        />
                        <span className="absolute text-lg sm:text-2xl font-bold text-black top-4 left-4">WOMEN</span>
                    </Link>
                </div>
                
                <div className="relative border border-gray-300 p-4 flex items-center justify-center h-54 sm:h-auto">
                    <Link to="/categories-men">
                    <img
                        src="https://res.cloudinary.com/djlbfjouc/image/upload/v1582274252/categ-02_pqpnm7.jpg"
                        alt="Men"
                        className="object-cover w-full h-full"
                    />
                    <span className="absolute text-lg sm:text-2xl font-bold text-black top-4 left-4">MEN</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Categories;
