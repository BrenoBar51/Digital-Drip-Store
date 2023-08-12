import { createBrowserRouter } from "react-router-dom";
import ProductList from "../pages/Product-List/ProductList";
import Home from "../pages/home/Home";
import SignUpPage from "../pages/SignUp/SignUpPage";
import LoginPage from "../pages/Login/LoginPage";
import SignUpForm from "../pages/SignUp/SignUpForm";


export const router = createBrowserRouter([
    {
    path: "/",
    element: <Home />
    },
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
    },
    {
      path: "/signup",
      element: <SignUpPage />
   },
   {
     path: "/signupform",
     element: <SignUpForm />
  }
]);  