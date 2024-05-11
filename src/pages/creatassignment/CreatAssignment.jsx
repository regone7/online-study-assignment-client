import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CreatAssignment = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <div>
            <div className="hero min-h-screen  text-gray-700">
                <div className="hero-content  ">
                    
                    <div className="card shrink-0 lg:w-[450px]  md:w-[350px] shadow-2xl rounded-none bg-green-50">
                        <h1 className="text-2xl text-center pt-5  font-bold md:text-3xl ">Create Assignment</h1>
                        <div className="card-body -mt-5">
                            <form >
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Title</span>
                                    </label>
                                    <input type="text" name="title" placeholder="title" className="h-12 p-3 input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Description</span>
                                    </label>
                                    <textarea name="description" placeholder="description" className=" h-20 p-3 input-bordered" required ></textarea>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Marks</span>
                                    </label>
                                    <input type="text" name="marks" placeholder="marks" className="h-12 p-3 input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Image URL</span>
                                    </label>
                                    <input type="text" name="image " placeholder="Image URL" className="h-12 p-3 input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Assignment Difficulty Level</span>
                                    </label>
                                    <select name="category"  className="h-12 p-3 input-bordered " required >
                                        <option value="Easy">Easy</option>
                                        <option value="Medium">Medium</option>
                                        <option value="Hard">Hard</option>
                                    </select>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Due Date</span>
                                    </label>
                                    <DatePicker className="h-12 p-3 input-bordered " selected={startDate} onChange={(date) => setStartDate(date)} required />
                                </div>

                                <div className="form-control mt-6">
                                    <input type="submit" value="Submit" className="btn  bg-green-300 hover:bg-green-400 text-white" />
                                </div>

                            </form>
                        </div>

                        

                    </div>
                </div>

            </div>
        </div>
    );
};

export default CreatAssignment;