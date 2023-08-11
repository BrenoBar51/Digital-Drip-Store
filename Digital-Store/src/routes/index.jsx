import { createBrowserRouter } from "react-router-dom";
import ProductList from "../pages/Product-List/ProductList";
import Home from "../pages/home/Home";
import LoginPage from "../pages/Login/LoginPage";


export const router = createBrowserRouter([
    {
    path: "/home",
    element: <Home />
    },
    {
      path: "/productslist",
      element: <ProductList />
    },
    {
      path: "/login",
      element: <LoginPage />
    }
]);  