import { MdShutterSpeed } from "react-icons/md";
import { IoIosBookmarks } from "react-icons/io";
import { GrLinkNext } from "react-icons/gr";
import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
// import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";
import toast, { Toaster } from 'react-hot-toast';
import Swal from "sweetalert2";


const FilterAllAssignment = ({ fil }) => {
    const { user } = useContext(AuthContext)

    const [card, setCard] = useState(fil)
    const { title, description, marks, photoURL, category, _id } = card;



    const handleDelete = async id => {
        if (user?.email !== card?.email) return toast.error('Error You are not create this assignment')
        if (!user) return toast.error('Error You are not create this assignment')
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://online-study-assignment-server.vercel.app/delete/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Succesfully  deleted.",
                                
                                icon: "success"
                            });
                            setCard('')

                        }
                        else{
                            Swal.fire({
                                title: "Allready  Deleted! Refresh page..",
                                text: " Refresh page if any problem.",
                                
                                icon: "success"
                            });
                            setCard('')
                        }

                    })
            }
        });

        // try {
        //     const { data } = await axios.delete(
        //         `https://online-study-assignment-server.vercel.app/delete/${id}`
        //     )

        //     console.log(data)
        //     toast.success('Assignment Delete Successfuly Refresh page ')


        //     // const remaining = await card?.filter(i => i._id !==id)
        //     // setCard(remaining)
        //     setCard('')




        // } catch (err) {
        //     console.log(err.message)

        // }


    }
    return (
        <div>

            {/* <div className="card  bg-base-100 shadow-xl">
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
                        <Link to={`/updatepg/${_id}`} ><button className="btn btn-sm border-1 border-green-300">Update</button></Link>
                        <button onClick={() => handleDelete(_id)} className="btn btn-sm border-1 border-red-300">Delete</button>

                    </div>
                    <Link to={`/ditelspg/${_id}`}>
                        <div className="flex justify-center items-center gap-2 ">
                            <span className="mb-1">View  </span>
                            <GrLinkNext />
                        </div>
                    </Link>
                </div>

            </div> */}

            {
                card && <>
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
                                <Link to={`/updatepg/${_id}`} ><button className="btn btn-sm border-1 border-green-300">Update</button></Link>
                                <button onClick={() => handleDelete(_id)} className="btn btn-sm border-1 border-red-300">Delete</button>

                            </div>
                            <Link to={`/ditelspg/${_id}`}>
                                <div className="flex justify-center items-center gap-2 text-sky-500 ">
                                    <span className="mb-1">View Details </span>
                                    <GrLinkNext />
                                </div>
                            </Link>
                        </div>

                    </div>
                </>
            }



            {/* <Toaster position="top-center" /> */}

        </div>
    );
};

export default FilterAllAssignment;