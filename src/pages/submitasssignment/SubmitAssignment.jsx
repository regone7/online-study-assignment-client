import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import axios from "axios";
import { useLoaderData } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';

const SubmitAssignment = () => {
    const { user } = useContext(AuthContext)
    const subs = useLoaderData()
    const {title,marks} = subs;
    const handelAssignmentSubmits = async (e) => {
        e.preventDefault();
        const link_submit = e.target.link_submit.value;
        const note_text = e.target.note_text.value;
        const status = 'pending';
        const email = user?.email;
        const examinee_name =user?.displayName;
        const atitle = title;
        const amarks= marks;
        const inspection_marks ='';
        const feedback='';

        const submitData = { link_submit, note_text, status, email, examinee_name,atitle,amarks,inspection_marks,feedback }
        console.log(submitData)
        try {
            const { data } = await axios.post(
                'https://online-study-assignment-server.vercel.app/assignsubmit',
                submitData
            )
            console.log(data)
            console.log('success')
            toast.success(' Success')

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
                        <h1 className="text-2xl text-center pt-5  font-bold md:text-3xl ">Assignment Submit Form </h1>
                        <div className="card-body -mt-5">
                            <form onSubmit={handelAssignmentSubmits} >
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">PDF/doc link/google drive</span>
                                    </label>
                                    <input type="text" name="link_submit" placeholder="link_submit" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Note Text</span>
                                    </label>
                                    <textarea name="note_text" placeholder="note_text" className=" h-20 p-3 input input-bordered" required ></textarea>
                                </div>
                                <div className="form-control mt-6">
                                    <input type="submit" value="Submit" className="btn  bg-rose-300 hover:bg-rose-400 text-white" />
                                </div>
                            </form>
                        </div>



                    </div>
                </div>


            </div>
            <Toaster position="top-center" />
        </div>
    );
};

export default SubmitAssignment;