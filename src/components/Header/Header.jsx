import { NavLink } from "react-router-dom";


const Header = () => {
    const menu = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/about'}>About Us</NavLink></li>
        <li><NavLink to={'/contact'}>Contact Us</NavLink></li>
    </>
    return (
        <div className="max-w-[1320px] mx-auto">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {menu}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Simple Sign Up & Sign In Auth.</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {menu}
                    </ul>
                </div>
                <div className="navbar-end gap-5">
                    <NavLink to={'/signin'}><button className="btn ">Sign In</button></NavLink>
                    <NavLink to={'/signup'}><button className="btn ">Sign Up</button></NavLink>
                </div>
            </div>
        </div>
    );
};

export default Header;