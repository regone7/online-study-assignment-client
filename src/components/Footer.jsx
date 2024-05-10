import { FcCollaboration } from "react-icons/fc";
import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-base-200 text-base-content flex-wrap ">
                <aside className="flex flex-col justify-center items-center w-full">
                    <Link to='/' className='flex gap-2 justify-center items-center'>
                        <FcCollaboration className=" text-2xl md:text-3xl " />
                        <span className='font-bold text-rose-500 md:text-xl'>E-Assignment Collaborative</span>
                    </Link>
                    <p className="mt-5  w-full text-center px-3 text-gray-500">Copyright © 2024 - All right reserved by Regone</p>
                </aside>
                
                    <nav className="flex flex-col justify-center items-center w-full">
                        <h6 className="footer-title">Services</h6>
                        <a className="link link-hover">Branding</a>
                        <a className="link link-hover">Design</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Advertisement</a>
                    </nav>

                    <nav className="flex flex-col justify-center items-center w-full">
                        <h6 className="footer-title">Legal</h6>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </nav>
                
            </footer>
        </div>
    );
};

export default Footer;