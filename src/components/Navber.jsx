import { Link, NavLink } from "react-router-dom";
import { FcCollaboration } from "react-icons/fc";


const Navber = () => {
    return (
        <div className="container mx-auto ">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow bg-base-100 rounded-box w-52">
                            <NavLink to='/' className={({ isActive }) => isActive ? 'text-orange-500 font-bold   w-12 h-7 flex justify-center items-center text-sm' : ' w-12 h-7 flex justify-center items-center text-sm'}>Home</NavLink>
                        </ul>
                    </div>
                    <Link to='/' className='flex gap-2 justify-center items-center'>
                        <FcCollaboration className=" text-2xl md:text-3xl " />
                        <span className='font-bold text-rose-500 md:text-xl'>E-Assignment Collaborative</span>
                    </Link>
                    
                </div>
                <div className="navbar-end  hidden lg:flex ">
                    <ul className="menu menu-horizontal px-1">
                        <NavLink to='/' className={({ isActive }) => isActive ? 'text-orange-500 font-bold   w-12 h-7 flex justify-center items-center text-sm' : ' w-12 h-7 flex justify-center items-center text-sm'}>Home</NavLink>

                    </ul>
                </div>
                <div className="navbar-end w-36">
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                        <ul tabIndex={0} className="mt-3 z-[10] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            <li className="text-sm font-sm">
                                <a  >Profile Name: </a>
                            </li>
                            <li><a></a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navber;