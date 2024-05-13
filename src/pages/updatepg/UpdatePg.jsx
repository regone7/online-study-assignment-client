import axios from "axios";
import { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import toast, { Toaster } from 'react-hot-toast';
import { AuthContext } from "../../provider/AuthProvider";
import { useLoaderData } from "react-router-dom";

const UpdatePg = () => {
    const { user } = useContext(AuthContext)
    const [startDate, setStartDate] = useState(new Date());
    const updates = useLoaderData()
    console.log(updates)
    const { title, description, marks, photoURL, category, date, email, _id } = updates

    const handelUpdateAssignment = async (e) => {
        e.preventDefault();

        const title = e.target.title.value;
        const description = e.target.description.value;
        const marks = e.target.marks.value;
        const photoURL = e.target.photoURL.value;
        const category = e.target.category.value;
        const date = startDate;
        const email = user?.email;

        const updateAssg = { title, description, marks, photoURL, category, date, email }
        console.log(updateAssg)

        try {
            const { data } = await axios.put(
                `http://localhost:9000/update/${_id}`,
                updateAssg
            )
            console.log(data)
            console.log('success')
            toast.success('Assignment will be created Successfuly ')
        } catch (err) {
            console.log(err)
            toast.error(' error')
        }


    }
    return (
        <div>
            <div className="hero min-h-screen  text-gray-700">
                <div className="hero-content  ">

                    <div className="card shrink-0 lg:w-[450px]  md:w-[350px] shadow-2xl rounded-none bg-green-50">
                        <h1 className="text-2xl text-center pt-5  font-bold md:text-3xl ">Update Assignment</h1>
                        <div className="card-body -mt-5">
                            <form onSubmit={handelUpdateAssignment}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Title</span>
                                    </label>
                                    <input type="text" defaultValue={title} name="title" placeholder="title" className="h-12 p-3 input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Description</span>
                                    </label>
                                    <textarea name="description" defaultValue={description} placeholder="description" className=" h-20 p-3 input-bordered" required ></textarea>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Marks</span>
                                    </label>
                                    <input type="text" defaultValue={marks} name="marks" placeholder="marks" className="h-12 p-3 input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Image URL</span>
                                    </label>
                                    <input type="text" defaultValue={photoURL} name="photoURL" placeholder="photoURL" className="h-12 p-3 input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Assignment Difficulty Level</span>
                                    </label>
                                    <select name="category" defaultValue={category} className="h-12 p-3 input-bordered " required >
                                        <option value="Easy">Easy</option>
                                        <option value="Medium">Medium</option>
                                        <option value="Hard">Hard</option>
                                    </select>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Due Date</span>
                                    </label>
                                    <DatePicker defaultValue={date} className="h-12 p-3 input-bordered " selected={startDate} onChange={(date) => setStartDate(date)} required />
                                </div>

                                <div className="form-control mt-6">
                                    <input type="submit" value="Update Submit" className="btn  bg-green-300 hover:bg-green-400 text-white" />
                                </div>

                            </form>
                        </div>



                    </div>
                </div>
                <Toaster position="top-center" />

            </div>
        </div>
    );
};

export default UpdatePg;