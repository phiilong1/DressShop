// App.js
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Header from './components/Header';
import Silder from './components/Silder';
import Categories from './components/Categories';
import Product from './components/Product';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="/" element={
          <>
            <Silder />
            <Categories />
            <Product/>
            <Footer/>
          </>
        } />
      </Routes>
    </div>
  );
}

export default App;
