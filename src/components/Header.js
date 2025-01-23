import { LOGO_URL } from "../Utils/constants"
import { useState } from "react"
import { Link } from "react-router-dom"
import useOnlineStatus from "../Utils/useOnlineStatus"
const Header = () =>{
    
    // let btnName = "Login" // normal JS
    const [btnNameReact,setbtnNameReact] = useState('Login')
    const isOnline= useOnlineStatus();
    return(
        <div className="flex justify-between bg-pink-100 shadow-lg mb-2 mt">
            <div className="w-56">
            <img src={LOGO_URL}></img>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li>Online Status:{isOnline ? 'Green' : 'Red'}</li>
                    <li className="px-4">
                        <Link to={'/'}>Home</Link>
                        </li>
                    <li className="px-4">
                        <Link to={'/about'}> About Us</Link>
                    </li>
                    <li className="px-4"><Link to={'/contact'}>Contact Us</Link></li>
                    <li className="px-4"><Link to={'/grocery'}>Grocery</Link></li>
                    <li className="px-4">Cart</li>
                    <button className="login-btn" onClick={() => {
                        btnNameReact === 'Login' ? setbtnNameReact('Logout') : setbtnNameReact('Login')
                    
                        }}>{btnNameReact}</button>
                </ul>
            </div>
        </div>
    )
}
export default Header