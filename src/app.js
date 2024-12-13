import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import Body from "./components/Body"
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
import About from "./components/About"
import Contact from './components/Contact'
import Error from './components/Error'
import Body from "./components/Body"
import RestaurantMenuPage from './components/RestaurantMenuPage'
import AboutClass from "./components/AboutClass"
const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            {/* <Body/> */}
            <Outlet/>
        </div>
    )
}
const appRouter = createBrowserRouter([
    {path:'/',
        element:<AppLayout/>,
        children:[
            {
                path:'/',
                element:<Body/>
                },
            {
            path:'/about',
            element:<AboutClass/>
            },
            {
                path:'/contact',
                element:<Contact/>
                },
                // dynamic routing
            {
                path:'/restaurants/:resId',
                element:<RestaurantMenuPage/>
            }],
        errorElement:<Error/>
    },
])
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={appRouter}/>)