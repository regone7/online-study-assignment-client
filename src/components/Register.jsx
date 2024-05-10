import { useState } from "react";
import { Link } from "react-router-dom";
import { FaRegEyeSlash } from "react-icons/fa6";
import { IoMdEye } from "react-icons/io";


const Register = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [error, setError] = useState("");
    return (
        <div>
            <div className="hero min-h-screen bg-base-100">
                <div className="hero-content ">
                    <div className="card shrink-0 lg:w-[450px]  md:w-[350px] shadow-2xl ">
                        <h1 className="text-3xl text-center pt-5 font-bold text-orange-500">Register Now!</h1>
                        <div className="card-body">
                            <form >
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" placeholder="name" name="name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">PhotoURL</span>
                                    </label>
                                    <input type="text" placeholder="photoURL" name="photoURL" className="input input-bordered" required />
                                </div>
                                <div className="form-control">

                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <div>
                                        <input type={showPassword ? "text" : "password"} name="password" placeholder="password" className="input input-bordered relative w-full" required />
                                        <span className="absolute -ml-9 mt-4" onClick={() => { setShowPassword(!showPassword) }}>
                                            {
                                                showPassword ? <IoMdEye /> : <FaRegEyeSlash />
                                            }
                                        </span>
                                    </div>



                                    {
                                        error && <small className="text-red-500">{error}</small>
                                    }
                                </div>
                                <div className="form-control ">
                                    <input type="submit" value="Register" className="btn  bg-orange-300 mt-5 hover:bg-orange-400" />
                                </div>
                            </form>

                        </div>
                        <div className="flex items-center justify-between px-9 mb-7">

                            <h2>Alraedy have an account!</h2>
                            <Link to='/login'><h2 className=" border-b-2 border-green-300 hover:bg-cyan-300 text-green-400">Log In</h2></Link>
                        </div>

                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Register;