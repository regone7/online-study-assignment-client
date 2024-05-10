import { useState } from "react";
import { Link } from "react-router-dom";
import { FaRegEyeSlash } from "react-icons/fa6";
import { IoMdEye } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";


const Login = () => {
    const [showPasswords, setShowPasswords] = useState(false)
    return (
        <div>

            <div className="hero min-h-screen bg-gray-100">
                <div className="hero-content flex-col md:flex-row ">
                    <div>
                        <img className="md:h-[400px] w-full rounded-md" src="https://i.ibb.co/fGK37zG/pexels-heyho-7394015.jpg" alt="" />
                    </div>
                    <div className="card shrink-0 lg:w-[450px]  md:w-[350px] shadow-2xl rounded-none ">
                        <h1 className="text-3xl text-center pt-5 font-bold text-green-500">Log In Now!</h1>
                        <div className="card-body">
                            <form >
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <div>
                                        <input type={showPasswords ? "text" : "password"} name="password" placeholder="password" className="input input-bordered relative w-full" required />
                                        <span className="absolute -ml-9 mt-4" onClick={() => { setShowPasswords(!showPasswords) }}>
                                            {
                                                showPasswords ? <IoMdEye /> : <FaRegEyeSlash />
                                            }
                                        </span>
                                    </div>
                                </div>
                                <div className="form-control mt-6">
                                    <input type="submit" value="LogIn" className="btn  bg-green-300 hover:bg-green-400" />
                                </div>

                            </form>
                        </div>

                        <div className="flex items-center justify-between px-9">
                            <h1>New User?  </h1>
                            <Link to='/register'><h2 className=" border-b-2 border-green-300 hover:text-cyan-300 text-green-400">Registration now...</h2></Link>
                        </div>

                        <div className="divider divider-gray-100 px-9">OR Login With </div>
                        <div className="px-9 flex flex-col w-full gap-3 mb-12">
                            <button className="btn btn-outline btn-info "><FcGoogle className="text-3xl" /> Google</button>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Login;