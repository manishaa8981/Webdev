import {NavLink} from "react-router-dom";
import {Search, ShoppingBag} from "lucide-react";
import {useState} from "react";
import "./homenavbar.css"
const HomeNavbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <>
            <nav>
                <a href={"/carousel"} className={"title"}>The Candle Library</a>

                <div className={"menu"} onClick={() => {
                    setMenuOpen(!menuOpen);
                }}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className="box">
                    <i className="fa fa-search" aria-hidden="true"><Search/></i>
                    <input type="search" placeholder="Search"/>
                </div>
                <ul className={menuOpen ? "open" : ""}>
                    <li><NavLink to={"/Cart"}> <ShoppingBag className={"cart"} size={"30px"}/></NavLink></li>

                    <li><NavLink to={"/login"}>
                        <button className={"login-button"}>Sign In</button>
                    </NavLink></li>

                    <li><NavLink to={"/signup"}>
                        <button className={"login-button"}>Sign Up</button>
                    </NavLink></li>
                </ul>
            </nav>
        </>
    );
};


export default HomeNavbar;