
import { NavLink } from "react-router-dom";



const NavBar = () => {
    return (
        <>
            <div className="navbar bg-[#8d0cf7]">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                             <NavLink className={({isActive})=>`font-bold ${isActive?'text-red-600':'hover:text-red-600'}`} to='/'>Home</NavLink>                
                        <NavLink className={({isActive})=>`font-bold ${isActive?'text-red-600':'hover:text-red-600'}`} to='/ststistics'>Statistics</NavLink>
                        <NavLink className={({isActive})=>`font-bold ${isActive?'text-red-600':'hover:text-red-600'}`} to='/dashbord'>Dashboed</NavLink>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Gadget Heaven</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu flex gap-4 menu-horizontal px-1">
                        <NavLink className={({isActive})=>`font-bold ${isActive?'text-red-600':'hover:text-red-600'}`} to='/'>Home</NavLink>                
                        <NavLink className={({isActive})=>`font-bold ${isActive?'text-red-600':'hover:text-red-600'}`} to='/ststistics'>Statistics</NavLink>
                        <NavLink className={({isActive})=>`font-bold ${isActive?'text-red-600':'hover:text-red-600'}`} to='/dashbord'>Dashboed</NavLink>
                    </ul>
                </div>
                <div className="navbar-end flex gap-6">
                    <button><i className="fa-solid fa-cart-shopping"></i> </button>             
                    <button><i className="fa-regular fa-heart"></i></button>
                </div>
                <div>
                </div>
            </div>
            
        </>
    );
};

export default NavBar;