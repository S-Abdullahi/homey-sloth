import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  About,
  Cart,
  EachProduct,
  Home,
  Products,
  SharedLayout,
  Error,
  Checkout,
  PrivateRoute,
  AuthWrapper,
} from "./pages";
import SideBar from "./modal/SideBar";

const App = () => {
  return (
    <div className="relative">
      <AuthWrapper>
        <BrowserRouter>
          <SideBar />
          <Routes>
            <Route path="/" element={<SharedLayout />}>
              <Route index element={<Home />}></Route>
              <Route path="about" element={<About />}></Route>
              <Route path="products" element={<Products />}></Route>
              <Route path="/products/:id" element={<EachProduct />}></Route>
              <Route path="cart" element={<Cart />}></Route>
              <Route
                path="checkout"
                element={
                  <PrivateRoute>
                    <Checkout />
                  </PrivateRoute>
                }
              ></Route>
            </Route>
            <Route path="*" element={<Error />}></Route>
          </Routes>
        </BrowserRouter>
      </AuthWrapper>
    </div>
  );
};

export default App;
