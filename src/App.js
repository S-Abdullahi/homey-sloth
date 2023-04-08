import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  About,
  Cart,
  EachProduct,
  Home,
  Login,
  Products,
  SharedLayout,
  Error
} from "./pages";
// import SideBar from "./components/SideBar";
import SideBar from "./modal/SideBar";
import { useProductContext } from "./context/Products_Context";

const App = () => {
  const {openSideBarPanel, state} = useProductContext()
  return (
    <div className="relative">
      {state.openSideBar && <SideBar/>}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />}></Route>
            <Route path="about" element={<About />}></Route>
            <Route path="products" element={<Products />}></Route>
            <Route path="/products/:id" element={<EachProduct />}></Route>
            <Route path="cart" element={<Cart />}></Route>
          </Route>
          <Route path="*" element={<Error/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
