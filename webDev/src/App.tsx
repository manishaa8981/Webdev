
import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import SignUp from "./Homepage/signUp.tsx";
import HomeNavbar from "./Homepage/homenavbar.tsx";
import Login from "./Homepage/login.tsx";
// import SidebarMenu from "./Dashboard/sidebar.tsx";
import Product from "./Dashboard/product.tsx";
import Category from "./Dashboard/category.tsx";
import ProductCard from "./Homepage/productCard.tsx";
import Carousel from "./Homepage/carousel.tsx";

const queryClient = new QueryClient();

function App() {

  return (
    <>
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={createBrowserRouter([

                {path: "/", element: <HomeNavbar/>},
                {path: "/login", element: <Login/>},
                {path: "/signup", element: <SignUp/>},
                {path: "/category", element: <Category/>},
                {path: "/product", element: <Product/>},
                {path: "/productcard", element: <ProductCard/>},

                {path: "/carousel", element: <Carousel/>},



            ])} />
        </QueryClientProvider>
                </>
  )
}

export default App
