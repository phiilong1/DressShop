import { Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Header from './components/Header';
import Silder from './components/Silder';
import Categories from './components/Categories';
import Product from './components/Product';
import Footer from './components/Footer';
import CategoriesWomen from './components/categories-women';
import ProductDetails from './components/product-details';
import Cart from './components/cart';
import { CartProvider } from './components/cartcontext';
import CheckOut from './components/checkout';

function App() {
    return (
        <CartProvider>
            <div className="flex flex-col min-h-screen">
                {/* Header luôn hiển thị */}
                <Header />

                {/* Nội dung chính */}
                <div className="flex-grow">
                    <Routes>
                        <Route path="/login" element={<Login />} />
                        <Route path="/signup" element={<SignUp />} />
                        <Route
                            path="/"
                            element={
                                <>
                                    <Silder />
                                    <Categories />
                                    <Product />
                                </>
                            }
                        />
                        <Route path="/categories-women" element={<CategoriesWomen />} />
                        <Route path="/product-details" element={<ProductDetails />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/checkout" element={<CheckOut />} />
                    </Routes>
                </div>

                {/* Footer luôn hiển thị */}
                <Footer />
            </div>
        </CartProvider>
    );
}

export default App;
