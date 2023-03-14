import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About, Cart, EachProduct, Home, Login, Products, SharedLayout } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout/>}>
            <Route index element={<Home/>}></Route>
            <Route path="about" element={<About/>}></Route>
            <Route path='products' element={<Products/>}></Route>
            <Route path="cart" element={<Cart/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
