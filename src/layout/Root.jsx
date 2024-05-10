import { Outlet } from "react-router-dom";
import Navber from "../components/Navber";


const Root = () => {
    return (
        <div>
            <div>
                <Navber></Navber>
            </div>
            <div className="min-h-screen">
                <Outlet></Outlet>
            </div>
            <div>
                
            </div>
        </div>
    );
};

export default Root;