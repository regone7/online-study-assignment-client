import axios from "axios";
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import toast, { Toaster } from 'react-hot-toast';

const MarkPage = () => {
    const { user } = useContext(AuthContext)
    const markes = useLoaderData()
    // console.log(markes)
    const { link_submit, note_text, status, email, examinee_name, atitle, amarks, _id, inspection_marks, feedback } = markes;
    const handelMarkgive = async (e) => {
        e.preventDefault();
        if (user?.email === email) return toast.error(' You are create this assignment so you can not submit marks.  ')
        const link_submit = e.target.link_submit.value;
        const note_text = e.target.note_text.value;
        const amarks = e.target.amarks.value;
        const inspection_marks = e.target.inspection_marks.value;
        const feedback = e.target.feedback.value;
        const status = e.target.status.value;
        const updateMarks = { link_submit, note_text, status, email, examinee_name, atitle, amarks, inspection_marks, feedback }
        console.log(updateMarks)
        try {
            const { data } = await axios.put(
                `https://online-study-assignment-server.vercel.app/updates/${_id}`,
                updateMarks
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

                    <div className="card shrink-0 lg:w-[650px]  md:w-[500px] w-full shadow-2xl rounded-none bg-pink-50">
                        <h1 className="text-2xl text-center pt-5  font-bold md:text-3xl text-sky-500">Assignment Marks Form </h1>
                        <div className="card-body -mt-5">
                            <form onSubmit={handelMarkgive} >
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">PDF/doc link/google drive ...Copy this Link and paste in browser </span>
                                    </label>
                                    <textarea name="link_submit" placeholder="link_submit" defaultValue={link_submit} className=" h-28 p-3 input input-bordered" disabled ></textarea>

                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Note Text</span>
                                    </label>
                                    <textarea defaultValue={note_text} name="note_text" placeholder="note_text" className=" h-20 p-3 input input-bordered" disabled ></textarea>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Total Mark</span>
                                    </label>
                                    <input defaultValue={amarks} type="text" name="amarks" placeholder="amarks" className="input input-bordered" disabled />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Inspection Marks</span>
                                    </label>
                                    <input type="text" name="inspection_marks" placeholder="inspection_marks" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Feedback</span>
                                    </label>
                                    <textarea name="feedback" placeholder="feedback" className=" h-20 p-3 input input-bordered" required ></textarea>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Is marks and feedback input?</span>
                                    </label>
                                    <select defaultValue={status} name="status" className="h-12 p-3 input-bordered " required >
                                        <option value="completed">completed</option>
                                        <option value="pending">pending</option>


                                    </select>
                                </div>

                                <div className="form-control mt-6">
                                    <input type="submit" value="Submit" className="btn  bg-rose-300 hover:bg-rose-400 text-white" />
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

export default MarkPage;