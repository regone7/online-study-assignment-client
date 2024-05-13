import { Link, useLoaderData } from "react-router-dom";


const DitelsPage = () => {
    const ditel = useLoaderData()
    const {title,description,marks,photoURL,category,date,email,_id}=ditel
    return (
        <div className="container mx-auto my-3">
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={photoURL} className="md:max-w-sm rounded-lg shadow-2xl" />
                    <div className="p-3">
                        <h1 className="text-3xl font-bold my-3">{title}</h1>
                        <p >{description}</p>
                        <p >Marks: {marks}</p>
                        <p >Category: {category}</p>
                        <p >Due Date: {date}</p>
                        <Link to={`/submitassignment/${_id}`}><button className="btn btn-sm text-white bg-rose-400 hover:bg-rose-600 my-3">Take Assignment Attemp </button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DitelsPage;