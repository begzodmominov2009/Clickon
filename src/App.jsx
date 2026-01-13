import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/layout/Layout";
import HomePage from "./modules/Home/HomePage";
import CartPage from "./modules/Cart/CartPage";
import SinglePage from "./modules/Single/SinglePage";
import LikePage from "./modules/Like/LikePage";
import RegisterPage from "./modules/Register/RegisterPage";
import NotFoundPage from "./modules/not-found/NotFoundPage";
import ProductsPage from "./modules/products/ProductsPage";


const App = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="product/:id" element={<SinglePage />} />
        <Route path="like" element={<LikePage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
