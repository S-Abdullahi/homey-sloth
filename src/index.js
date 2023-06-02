import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ProductProvider } from "./context/Products_Context";
import { FilterProvider } from "./context/Filter_Context";
import { CartProvider } from "./context/Cart_Context";
import { Auth0Provider } from "@auth0/auth0-react";
import { UserProvider } from "./context/User_Context";
// dev-ttcyqr6dnoj8df7m.us.auth0.com
// y2ezGxPrRbAAilxK5LBSDLDffbWCkTbp

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-ttcyqr6dnoj8df7m.us.auth0.com"
      clientId="y2ezGxPrRbAAilxK5LBSDLDffbWCkTbp"
      authorizationParams={{
        redirect_uri: window.location.origin,
        cacheLocation: 'localstorage'
      }}
    >
      <UserProvider>
        <ProductProvider>
          <FilterProvider>
            <CartProvider>
              <App />
            </CartProvider>
          </FilterProvider>
        </ProductProvider>
      </UserProvider>
    </Auth0Provider>
  </React.StrictMode>
);
