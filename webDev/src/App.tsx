
import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import Login from "./Homepage/login.tsx";
import HomeNavbar from "./Homepage/homenavbar.tsx";
import SignUp from "./Homepage/signUp.tsx";
import Carousel from "./Homepage/carousel.tsx";
const queryClient = new QueryClient();

function App() {

  return (
    <>
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={createBrowserRouter([

                {path: "/navbar", element: <HomeNavbar/>},
                {path: "/login", element: <Login/>},
                {path: "/signup", element: <SignUp/>},
                {path: "/carousel", element: <Carousel/>},


            ])} />
        </QueryClientProvider>
                </>
  )
}

export default App
