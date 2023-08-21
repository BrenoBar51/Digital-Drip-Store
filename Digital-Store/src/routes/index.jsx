import { createBrowserRouter } from "react-router-dom";
import ProductList from "../pages/Product-List/ProductList";
import Home from "../pages/home/Home";
import SignUpPage from "../pages/SignUp/SignUpPage";
import LoginPage from "../pages/Login/LoginPage";
import SignUpForm from "../pages/SignUp/SignUpForm";
import ProductPage from "../pages/Product-Page/ProductPage";
import ComprarPage from "../pages/comprar/ComprarPage";
import PreCompraPage from "../pages/PagePreCompra/PreCompra";
import CompraRealizada from "../pages/CompraRealizada/CompraRealizada";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/productslist",
      element: <ProductList />
    },
    {
      path: "/login",
      element: <LoginPage />
    },
    {
      path: "/signup",
      element: <SignUpPage />
   },
   {
     path: "/signupform",
     element: <SignUpForm />
  },
  {
    path: "/productPage",
    element: <ProductPage />
 },
  {
    path: "/comprar",
    element: <ComprarPage />
  },
  {
    path: "/precompra",
    element: <PreCompraPage />
  },
  {
    path: "/comprafinalizada",
    element: <CompraRealizada />
  }
]);  