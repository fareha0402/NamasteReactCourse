import { LOGO_URL } from "../Utils/constants"
import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import useOnlineStatus from "../Utils/useOnlineStatus"
import userContext from "../Utils/UserContext"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {  faCircle } from "@fortawesome/free-solid-svg-icons"
import { useSelector } from "react-redux"
const Header = () =>{
    
    // let btnName = "Login" // normal JS
    const [btnNameReact,setbtnNameReact] = useState('Login')
    const isOnline= useOnlineStatus();

    const {loggedInUser} = useContext(userContext)

    // subscribe to store to read the values using Selector -- performance optimization as we are using part of stor not whole store
    const cart = useSelector((store) => store.cart.items)

    return(
        <div className="flex justify-between bg-pink-100 shadow-lg mb-2 mt">
            <div className="w-56">
            <img src={LOGO_URL}></img>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li>Online Status: {isOnline ? <i className="text-green-600"><FontAwesomeIcon  icon={faCircle} /> </i>:  <i className="text-red-600"><FontAwesomeIcon  icon={faCircle} /> </i>}</li>
                    <li className="px-4">
                        <Link to={'/'}>Home</Link>
                        </li>
                    <li className="px-4">
                        <Link to={'/about'}> About Us</Link>
                    </li>
                    <li className="px-4"><Link to={'/contact'}>Contact Us</Link></li>
                    <li className="px-4"><Link to={'/grocery'}>Grocery</Link></li>
                    <li className="px-4 font-bold">
                        <Link to={'/cart'}>Cart- {cart.length}</Link>
                    </li>
                    <button className="login-btn" onClick={() => {
                        btnNameReact === 'Login' ? setbtnNameReact('Logout') : setbtnNameReact('Login')
                    
                        }}>{btnNameReact}</button>
                        <li className="px-4 font-bold">{loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
}
export default Header