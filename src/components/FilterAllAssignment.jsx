import { MdShutterSpeed } from "react-icons/md";
import { IoIosBookmarks } from "react-icons/io";
import { GrLinkNext } from "react-icons/gr";
import { Link } from 'react-router-dom';

const FilterAllAssignment = ({ fil }) => {
    const { title, description, marks, photoURL, category, _id } = fil
    return (
        <div>
            <div className="card  bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={photoURL} alt="" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{title}</h2>
                    <div className="flex flex-col md:flex-row gap-5">
                        <div className="flex  justify-center items-center">
                            <IoIosBookmarks />
                            <p>Marks: {marks}</p>
                        </div>
                        <div className="flex  justify-center items-center">
                            <MdShutterSpeed />
                            <p>Category: {category}</p>
                        </div>
                    </div>

                    <div className="card-actions mt-3">
                        <button className="btn btn-sm border-1 border-green-300">Update</button>
                        <button className="btn btn-sm border-1 border-red-300">Delete</button>
                        
                    </div>
                    <Link to={`/ditelspg/${_id}`}>
                    <div className="flex justify-center items-center gap-2 ">
                            <span className="mb-1">View  </span>
                            <GrLinkNext />
                        </div>
                    </Link>
                </div>
                
            </div>
        </div>
    );
};

export default FilterAllAssignment;