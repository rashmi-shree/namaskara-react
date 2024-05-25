import React, { lazy, Suspense } from "react";
import ReactDom from 'react-dom';
import Header from "./components/Header";
import Body from "./components/Body";
import Error from "./components/Error";
// import About from "./components/About";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom'
import Shimmer from "./components/Shimmer";
// import Grocery from "./components/Grocery";
// --> chunking / code splitting / dynamic bundling / lazy loading / on demand loading
const Grocery = lazy(()=>import("./components/Grocery"));
const About = lazy(()=>import("./components/About"));
const AppLoyout = () =>{
    return (
        <div className="app">
            <Header />
            <Outlet/>
        </div>
    )
};
const appRouter = createBrowserRouter([
    {
        path:"/",
        element: <AppLoyout/>,
        children:[
            {
                path:'/',
                element:<Body />
            },
            {
                path:'/about',
                element:<Suspense fallback={<h1>Loading...</h1>}><About/></Suspense>
            },
            {
                path:'/contact',
                element:<Contact />
            },
            {
                path:'/restaurantmenu/:resid',
                element: <RestaurantMenu/>
            },
            {
                path:'/grocery',
                element:<Suspense fallback={<h1>loading....</h1>}><Grocery /></Suspense>
            }
        ],
        errorElement :<Error />
    }
])
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />)