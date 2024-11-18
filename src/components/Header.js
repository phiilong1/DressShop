import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "./cartcontext";

function Header() {
    const { cart } = useContext(CartContext);

    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    return ( 
        <header className="flex items-center justify-between p-7 border-b border-gray-200 shadow-md">
            <a href="/" className="text-xl sm:text-3xl font-semibold pl-2 sm:pl-5">Dress</a>
            
            <div className="flex items-center space-x-4 sm:space-x-10">
                <div className="relative hidden sm:flex w-full max-w-xs">
                    <input 
                        type="text" 
                        placeholder="Search Product..." 
                        className="w-full text-sm sm:text-lg pl-3 pr-8 py-1.5 sm:py-2 rounded-full bg-gray-100 text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300"
                    />
                    <span className="absolute inset-y-0 right-2 flex items-center text-gray-500">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-4 w-4 sm:h-5 sm:w-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                    </span>
                </div>
                
                <div className="flex sm:hidden">
                    <button className="text-gray-500">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-5 w-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                    </button>
                </div>

                <div className="flex items-center w-full space-x-2 sm:space-x-3 text-gray-800 text-sm sm:text-base">
                    <Link to="/cart" className="flex items-center hover:font-bold space-x-1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-5 w-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                        </svg>
                        <span className="hidden sm:inline text-lg">Cart</span>
                        <span className="ml-1 text-red-500 font-bold">({totalItems})</span>
                    </Link>

                    <a href="signup" className="hover:font-bold text-lg">Sign Up</a>
                    <span>|</span>
                    <a href="login" className="hover:font-bold text-lg">Log In</a>
                </div>
            </div>
        </header>
    );
}

export default Header;
