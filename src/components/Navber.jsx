import { Link, NavLink, useNavigate } from "react-router-dom";
import { SiGamemaker } from "react-icons/si";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import toast, { Toaster } from 'react-hot-toast';

const Navber = () => {
    const [theme, setTheme] = useState('light')
    const handelToggle = (e) => {
        if (e.target.checked) {
            setTheme('synthwave')
        } else {
            setTheme('light')
        }

    }
    useEffect(() => {
        localStorage.setItem('theme', theme)
        const localTheme = localStorage.getItem('theme')


        document.querySelector('html').setAttribute('data-theme', localTheme)
    }, [theme])
    const { user, signOutUser } = useContext(AuthContext)
    const navigate = useNavigate()
    const handelLogout = () => {
        signOutUser()
            .then(() => {
                console.log("sign out")
                toast.success(' Successfuly logout')
                navigate(location?.state ? location.state : '/');

            })
            .catch(error => {
                console.error(error);
                toast.error(' error')
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
                            <NavLink to='/' className={({ isActive }) => isActive ? 'text-orange-500 font-bold   w-12 h-7 flex justify-start items-center text-sm mx-2' : ' w-12 h-7 flex justify-start items-center text-sm mx-2'}>Home</NavLink>
                            <NavLink to='/allassignment' className={({ isActive }) => isActive ? 'text-orange-500 font-bold  h-7 flex justify-start items-center text-sm mx-2' : 'h-7 flex justify-start items-center text-sm mx-2'}>Assignments</NavLink>
                            <NavLink to='/createassignment' className={({ isActive }) => isActive ? 'text-orange-500 font-bold  h-7 flex justify-start items-center text-sm mx-2' : 'h-7 flex justify-start items-center text-sm mx-2'}>Create Assignment</NavLink>
                            <NavLink to='/pendingas' className={({ isActive }) => isActive ? 'text-orange-500 font-bold  h-7 flex justify-center items-center text-sm mx-2' : 'h-7 flex justify-start items-center text-sm mx-2'}>Pending Assignments</NavLink>
                            {
                                !user && <>
                                    <NavLink to='/login' className={({ isActive }) => isActive ? 'text-orange-500 font-bold   w-12 h-7 flex justify-start items-center text-sm mx-2' : ' w-12 h-7 flex justify-center items-center text-sm mx-2'}>Login</NavLink>
                                    <NavLink to='/register' className={({ isActive }) => isActive ? 'text-orange-500 font-bold   w-16 h-7 flex justify-start items-center text-sm mx-2' : ' w-16 h-7 flex justify-center items-center text-sm mx-2'}>Register</NavLink>
                                </>
                            }
                        </ul>
                    </div>
                    <Link to='/' className='flex gap-2 justify-center items-center'>
                        <SiGamemaker className=" text-3xl md:text-4xl text-rose-700  " />
                        <span className='font-bold text-rose-500 md:text-xl'>E-Assignment Collaborative</span>
                    </Link>

                </div>
                <div className="navbar-end  hidden lg:flex w-[1250px]">
                    <ul className="menu menu-horizontal ">
                        <NavLink to='/' className={({ isActive }) => isActive ? 'text-orange-500 font-bold   w-12 h-7 flex justify-center items-center text-sm' : ' w-12 h-7 flex justify-center items-center text-sm '}>Home</NavLink>
                        <NavLink to='/allassignment' className={({ isActive }) => isActive ? 'text-orange-500 font-bold  h-7 flex justify-center items-center text-sm mx-2' : 'h-7 flex justify-center items-center text-sm mx-2'}>Assignments</NavLink>
                        <NavLink to='/createassignment' className={({ isActive }) => isActive ? 'text-orange-500 font-bold  h-7 flex justify-center items-center text-sm' : 'h-7 flex justify-center items-center text-sm'}>Create Assignment</NavLink>
                        <NavLink to='/pendingas' className={({ isActive }) => isActive ? 'text-orange-500 font-bold  h-7 flex justify-center items-center text-sm mx-2' : 'h-7 flex justify-center items-center text-sm mx-2'}>Pending Assignments</NavLink>

                        {
                            !user && <>
                                <NavLink to='/login' className={({ isActive }) => isActive ? 'text-orange-500 font-bold   w-12 h-7 flex justify-center items-center text-sm' : ' w-12 h-7 flex justify-center items-center text-sm'}>Login</NavLink>
                                <NavLink to='/register' className={({ isActive }) => isActive ? 'text-orange-500 font-bold   w-16 h-7 flex justify-center items-center text-sm' : ' w-16 h-7 flex justify-center items-center text-sm '}>Register</NavLink>
                            </>
                        }
                    </ul>
                </div>
                <div className="navbar-end ">
                    <div className="dropdown dropdown-end">
                        {
                            user && <>
                                <div >
                                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar ">
                                        <div className="w-10 rounded-full">
                                            <img alt="Tailwind CSS Navbar component" src={user?.photoURL || 'https://i.ibb.co/vwWq42z/pexels-pixabay-162137.jpg'} />
                                        </div>
                                    </div>
                                    <ul tabIndex={0} className="mt-3 z-[10] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                        <li className="text-sm font-sm">
                                            <a  >Profile Name:{user?.displayName} </a>
                                        </li>
                                        <Link to='/mysubmittedas' ><li><button >My Submitted/Attempted Assignment</button></li></Link>
                                        <li><button onClick={handelLogout}>Logout</button></li>
                                    </ul>
                                </div>
                            </>
                        }
                    </div>
                    <div>
                        <label className="cursor-pointer grid place-items-center">
                            <input onChange={handelToggle} type="checkbox" value="synthwave" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" />
                            <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                            <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                        </label>
                    </div>
                </div>
            </div>
            <Toaster position="top-center" />
        </div>
    );
};

export default Navber;