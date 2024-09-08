import React from "react"
import ReactDOM from "react-dom/client"

const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
}
const Header = () =>{
    return(
        <div className="header">
            <div className="logo">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAGv2Lti4lB3fMXkaDiDHvNZuHaBjuWr9obQ&s"></img>
            </div>
            <div className="navItems">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}
const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-Container">
                <RestaurantCard/>
            </div>
        </div>
    )
}
const RestaurantCard = () =>{
    return(
        <div className="resCard">
            <h3>KFC</h3>
            <h2>26 mins</h2>
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<AppLayout/>)