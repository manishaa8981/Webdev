
import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import SignUp from "./Homepage/signUp.tsx";
import HomeNavbar from "./Homepage/homenavbar.tsx";
import Login from "./Homepage/login.tsx";
// import SidebarMenu from "./Dashboard/sidebar.tsx";
import Category from "./Dashboard/category.tsx";
import ProductCard from "./Homepage/productCard.tsx";
import Carousel from "./Homepage/carousel.tsx";
import Home from "./Homepage/home.tsx";
import Forget from "./Homepage/forget.tsx";
import Reset from "./Homepage/reset.tsx";
import EditCategory from "./Dashboard/editCategory.tsx";
import Cart from "./Homepage/cart.tsx";
import User from "./Dashboard/user.tsx";
import AdminProduct from "./Dashboard/adminProduct.tsx";
import ProductMain from "./Homepage/productmain.tsx";
import ProductNavbar from "./Homepage/productnavbar.tsx";
import ProducttCardd from "./Homepage/producttcardd.tsx";


const queryClient = new QueryClient();

function App() {

  return (
    <>
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={createBrowserRouter([


                {path: "/", element: <Home/>},
                {path: "/homenavbar", element: <HomeNavbar/>},
                {path: "/login", element: <Login/>},
                {path: "/signup", element: <SignUp/>},
                {path: "/category", element: <Category/>},
                {path: "/product", element: <AdminProduct/>},
                {path: "/productcard", element: <ProductCard/>},
                {path: "/carousel", element: <Carousel/>},
                {path: "/forget", element: <Forget/>},
                {path: "/reset", element: <Reset/>},
                {path: "/edit/:id", element: <EditCategory/>},
                {path: "/cart", element: <Cart/>},
                {path: "/user", element: <User/>},
                {path: "/productmain", element: <ProductMain/>},
                {path: "/productnavbar", element: <ProductNavbar />},
                {path: "/producttcardd", element: <ProducttCardd />},



            ])} />
        </QueryClientProvider>
                </>
  )
}

export default App
