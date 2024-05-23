import {useState} from "react";
import { LOGO_URL } from "../utils/constants";
import {Link} from 'react-router-dom';
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    const [btnName, setBtnName] = useState("login")
    return(
        <div>
        <div className="header">
            <div className="logo-container">
                <img
                    class="logo"
                    src={LOGO_URL}
                />
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        online status:
                        {
                            useOnlineStatus ? "🟩" : "🔴"
                        }
                    </li>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About Us</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li>
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li>
                        <Link to="/cart">Cart</Link>
                    </li>
                    <button className="login-btn"
                    onClick={()=>{btnName === "login" ? setBtnName("logout") :setBtnName("login") }}
                    >{btnName}</button>
                </ul>
            </div>
        </div>
        </div>
    )
}
export default Header;