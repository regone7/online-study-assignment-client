import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import axios from "axios";
import { useLoaderData } from "react-router-dom";


const SubmitAssignment = () => {
    const { user } = useContext(AuthContext)
    const sub = useLoaderData()
    const {title,marks} = sub;
    const handelAssignmentSubmits = async (e) => {
        e.preventDefault();
        const link_submit = e.target.link_submit.value;
        const note_text = e.target.note_text.value;
        const status = 'pending';
        const email = user?.email;
        const examinee_name =user?.displayName;
        const atitle = title;
        const amarks= marks;

        const submitData = { link_submit, note_text, status, email, examinee_name,atitle,amarks }
        console.log(submitData)
        try {
            const { data } = await axios.post(
                'http://localhost:9000/assignsubmit',
                submitData
            )
            console.log(data)
            console.log('success')

        } catch (err) {
            console.log(err)
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
                                    <input type="link_submit" name="link_submit" placeholder="link_submit" className="input input-bordered" required />
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
        </div>
    );
};

export default SubmitAssignment;