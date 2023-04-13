import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ProductProvider } from "./context/Products_Context";
import { FilterProvider } from "./context/Filter_Context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ProductProvider>
      <FilterProvider>
      <App />
      </FilterProvider>
    </ProductProvider>
  </React.StrictMode>
);
