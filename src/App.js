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

function App() {
    return (
        <CartProvider>
            <div>
                <Header />
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
                                <Footer />
                            </>
                        }
                    />
                    <Route path="/categories-women" element={<CategoriesWomen />} />
                    <Route path="/product-details" element={<ProductDetails />} />
                    <Route path="/cart" element={<Cart />} />
                </Routes>
            </div>
        </CartProvider>
    );
}

export default App;
