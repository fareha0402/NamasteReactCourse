import { LOGO_URL } from "../Utils/constants"
import { useState } from "react"
const Header = () =>{
    
    // let btnName = "Login" // normal JS
    const [btnNameReact,setbtnNameReact] = useState('Login')
    return(
        <div className="header">
            <div className="logo">
            <img src={LOGO_URL}></img>
            </div>
            <div className="navItems">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className="login-btn" onClick={() => {
                        btnNameReact === 'Login' ? setbtnNameReact('Logout') : setbtnNameReact('Login')
                    
                        }}>{btnNameReact}</button>
                </ul>
            </div>
        </div>
    )
}
export default Header