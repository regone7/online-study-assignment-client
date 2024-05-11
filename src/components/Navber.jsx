import { Link, NavLink } from "react-router-dom";
import { FcCollaboration } from "react-icons/fc";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";


const Navber = () => {
    const { user, signOutUser } = useContext(AuthContext)
    const handelLogout = () => {
        signOutUser()
            .then(() => {
                console.log("sign out")

            })
            .catch(error => {
                console.error(error);
            })
    }
    return (
        <div className="container mx-auto ">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow bg-base-100 rounded-box w-52 space-y-2 ">
                            <NavLink to='/' className={({ isActive }) => isActive ? 'text-orange-500 font-bold   w-12 h-7 flex justify-center items-center text-sm' : ' w-12 h-7 flex justify-center items-center text-sm'}>Home</NavLink>
                            {
                                !user && <>
                                    <NavLink to='/login' className={({ isActive }) => isActive ? 'text-orange-500 font-bold   w-12 h-7 flex justify-center items-center text-sm' : ' w-12 h-7 flex justify-center items-center text-sm'}>Login</NavLink>
                                    <NavLink to='/register' className={({ isActive }) => isActive ? 'text-orange-500 font-bold   w-16 h-7 flex justify-center items-center text-sm' : ' w-16 h-7 flex justify-center items-center text-sm'}>Register</NavLink>
                                </>
                            }
                        </ul>
                    </div>
                    <Link to='/' className='flex gap-2 justify-center items-center'>
                        <FcCollaboration className=" text-2xl md:text-3xl " />
                        <span className='font-bold text-rose-500 md:text-xl'>E-Assignment Collaborative</span>
                    </Link>

                </div>
                <div className="navbar-end  hidden lg:flex ">
                    <ul className="menu menu-horizontal px-1 space-x-1">
                        <NavLink to='/' className={({ isActive }) => isActive ? 'text-orange-500 font-bold   w-12 h-7 flex justify-center items-center text-sm' : ' w-12 h-7 flex justify-center items-center text-sm'}>Home</NavLink>
                        {
                            !user && <>
                                <NavLink to='/login' className={({ isActive }) => isActive ? 'text-orange-500 font-bold   w-12 h-7 flex justify-center items-center text-sm' : ' w-12 h-7 flex justify-center items-center text-sm'}>Login</NavLink>
                                <NavLink to='/register' className={({ isActive }) => isActive ? 'text-orange-500 font-bold   w-16 h-7 flex justify-center items-center text-sm' : ' w-16 h-7 flex justify-center items-center text-sm'}>Register</NavLink>
                            </>
                        }
                    </ul>
                </div>
                <div className="navbar-end w-32">
                    <div className="dropdown dropdown-end">
                        {
                            user && <>
                                <div>
                                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                            <img alt="Tailwind CSS Navbar component" src={user?.photoURL}  />
                                        </div>
                                    </div>
                                    <ul tabIndex={0} className="mt-3 z-[10] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                        <li className="text-sm font-sm">
                                            <a  >Profile Name:{user?.displayName} </a>
                                        </li>
                                        <li><button></button></li>
                                        <li><button onClick={handelLogout}>Logout</button></li>
                                    </ul>
                                </div>
                            </>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navber;