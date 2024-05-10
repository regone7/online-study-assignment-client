import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaRegEyeSlash } from "react-icons/fa6";
import { IoMdEye } from "react-icons/io";
import { AuthContext } from "../provider/AuthProvider";


const Register = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [error, setError] = useState("");
    const { creatUser,updateUserProfile,setLoading } = useContext(AuthContext)
    const handelRegisterPg=(e)=>{
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const photoURL = e.target.photoURL.value;
        const password = e.target.password.value;
        console.log(name, email, password)

        if (password.length < 6) {
            setError("Password must be at least 6 character")
            return;
        }
        if (!/(?=.*[A-Z])/.test(password)) {
            setError("Password Must have One Uppercase letter in the password")
            return;
        }
        if (!/(?=.*[a-z])/.test(password)) {
            setError("Password Must have One Lowercase letter in the password")
            return;
        }
        setError('')

        creatUser(email, password)
            .then(() => {
                updateUserProfile(name, photoURL)
                    .then(() => {
                     console.log("success update") 
                     
                        setLoading(false)  
                        
                    })

            })
            .catch((error) => {
                console.error(error)
               
            })

    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-100">
                <div className="hero-content flex-col md:flex-row-reverse ">
                    <div>
                        <img className="md:h-[400px] w-full rounded-md" src="https://i.ibb.co/fGK37zG/pexels-heyho-7394015.jpg" alt="" />
                    </div>
                    <div className="card shrink-0 lg:w-[450px]  md:w-[350px] shadow-2xl rounded-none ">
                        <h1 className="text-3xl text-center pt-5 font-bold text-green-500">Register Now!</h1>
                        <div className="card-body">
                            <form onSubmit={handelRegisterPg} >
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
                                    <input type="submit" value="Register" className="btn  bg-green-300 mt-5 hover:bg-green-400" />
                                </div>
                            </form>

                        </div>
                        <div className="flex items-center justify-between px-9 mb-7">

                            <h2>Alraedy have an account!</h2>
                            <Link to='/login'><h2 className=" border-b-2 border-green-300 hover:text-cyan-300 text-green-400">Log In</h2></Link>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Register;