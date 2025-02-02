import React, { Suspense, useEffect, useState } from "react"
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
import Grocery from "./components/Grocery"
import UserContext from "./Utils/UserContext"
const AppLayout = () => {
    // auth code, api call and get some data
    const [userName,setUserName] = useState()

    useEffect(() =>{
        // make api call , call back and empty array to call once
        const data = {
            name:" Fareha Sameet"
        }
        setUserName(data.name)
    },[])
    return (
        // To set the value in context we use Provider and give value. so context will not use default value
        <UserContext.Provider value={{loggedInUser : userName, setUserName}}>
        <div className="app">
            <Header/>
            {/* <Body/> */}
            <Outlet/>
        </div>
        </UserContext.Provider>
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

             {
                path:'/grocery',
                element:<Suspense fallback={<h1>Loading...</h1>}><Grocery/></Suspense>
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