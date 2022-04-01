import { Routes,Route,Navigate } from "react-router-dom";

// Context
import ProductContextProvider from "./context/ProductContextProvider";
import CartContextProvider from "./context/CartContextProvider";
// Components
import Store from './components/Store';
import ProductDetails from "./components/ProductDetails";
import NavBar from "./components/shared/NavBar";
import ShopCart from "./components/ShopCart";

function App() {
  return (
    <ProductContextProvider>
      <CartContextProvider>
        <NavBar />
        <Routes>
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/products" element={<Store />} />
          <Route path="/cart" element={<ShopCart />} />
          <Route path="/*" element={<Navigate to="/products" />} />
        </Routes>
      </CartContextProvider>
    </ProductContextProvider>
  );
}

export default App;
