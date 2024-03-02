import "./sidebar.css"
// import {MdSpaceDashboard, } from "react-icons/md";
import { BiSolidCategoryAlt} from "react-icons/bi";
import {IoMdLogOut} from "react-icons/io";
import {FaBowlFood} from "react-icons/fa6";
import {Link} from "react-router-dom"
import {FaUserCog} from "react-icons/fa";
// import {FaUserCog} from "react-icons/fa";
// import {IoNewspaper} from "react-icons/io5";
interface AdminSidebarProps {
    activePage: string;
}
const SidebarMenu: React.FC<AdminSidebarProps>=({ activePage }) => {
    return(
        <>
            <div className={"main"}>
                <div className={"admin-sidebar"}>
                    <div className={"sidebar-brand"}>
                        <h1>The Candle Library</h1>
                    </div>
                    <div className={"sidebar-options"}>
                        <ul className={"sidebar-list"}>
                            {/*<Link to={"/dashboard"}>*/}
                            {/*    <li className={`sidebar-list-item ${activePage === "/dashboard" ? "active" : ""}`}>*/}
                            {/*        <span><MdSpaceDashboard style={{fontSize:"18px",marginBottom:"-3px"}}/></span>*/}
                            {/*        <a>Dashboard</a>*/}
                            {/*    </li>*/}
                            {/*</Link>*/}
                            <Link to={"/user"}>
                                <li className={`sidebar-list-item ${activePage === "/user" ? "active" : ""}`}>
                                    <span><FaUserCog style={{fontSize:"18px",marginBottom:"-3px"}}/></span>
                                    <a>Users</a>
                                </li>
                            </Link>
                            <Link to={"/category"}>
                                <li className={`sidebar-list-item ${activePage === "/category" ? "active" : ""}`}>
                                    <span><BiSolidCategoryAlt style={{fontSize:"18px",marginBottom:"-3px"}}/></span>
                                    <a>Category</a>
                                </li>
                            </Link>

                            <Link to={"/product"}>
                                <li className={`sidebar-list-item ${activePage === "/product" ? "active" : ""}`}>
                                    <span><FaBowlFood style={{fontSize:"18px",marginBottom:"-3px"}}/></span>
                                    <a>Products</a>
                                </li>
                            </Link>
                            {/*<Link to={"/order"}>*/}
                            {/*    <li className={`sidebar-list-item ${activePage === "/order" ? "active" : ""}`}>*/}
                            {/*        <span><IoNewspaper style={{fontSize:"18px",marginBottom:"-3px"}}/></span>*/}
                            {/*        <a>Orders</a>*/}
                            {/*    </li>*/}
                            {/*</Link>*/}

                        </ul>
                    </div>



                    <div className={"sidebar-btn"}>
                        <button type={"button"}><span><IoMdLogOut style={{fontSize:"1.3rem" ,marginBottom:"-3px",marginRight:"3px"}}/></span>Log Out</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SidebarMenu
