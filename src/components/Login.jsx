import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaRegEyeSlash } from "react-icons/fa6";
import { IoMdEye } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../provider/AuthProvider";


const Login = () => {
    const [showPasswords, setShowPasswords] = useState(false)
    const {signInUsers,googleLogin,setLoading}= useContext(AuthContext)
   

    const handelLoginPg=(e)=>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email,password)

        signInUsers(email, password)
            .then(result => {
                console.log(result.user)
                console.log('success')
               
                setLoading(false)
               
            })
            .catch(error => {
                console.error(error)
               
                
            })
    }
    const handelgoogleLogin = () => {
        googleLogin()
            .then((result) => {
                console.log(result.user)
                console.log("google success")
                
                
            })
            .catch(error => {
                console.error(error)

            })
    }
    
    return (
        <div>

            <div className="hero min-h-screen ">
                <div className="hero-content flex-col md:flex-row ">
                    <div>
                        <img className="md:h-[400px] w-full rounded-md" src="https://i.ibb.co/fGK37zG/pexels-heyho-7394015.jpg" alt="" />
                    </div>
                    <div className="card shrink-0 lg:w-[450px]  md:w-[350px] shadow-2xl rounded-none bg-gray-100">
                        <h1 className="text-3xl text-center pt-5 font-bold text-green-500">Log In Now!</h1>
                        <div className="card-body">
                            <form onSubmit={handelLoginPg} >
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="email" name="email" className=" h-12 p-3 input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <div>
                                        <input type={showPasswords ? "text" : "password"} name="password" placeholder="password" className=" h-12 p-3 input-bordered relative w-full " required />
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
                            <button onClick={handelgoogleLogin} className="btn btn-outline btn-info "><FcGoogle className="text-3xl" /> Google</button>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Login;