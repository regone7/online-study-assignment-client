import { Link } from "react-router-dom";
import Quizattempt from "./Quizattempt";


const Quiz = () => {
    return (
        <div>
            <div className="container mx-auto">
                <div className="font-bold text-3xl text-center mt-5">Quiz</div>
                <p className="text-center">To Attempted the quiz please click Button</p>
                <div className="flex flex-col md:flex-row justify-center items-center min-w-full min-h-96 gap-5 p-5">
                    <Link to='/quizjs'>
                        <div className="card glass  rounded-md">
                            <div className="card-body">
                                <h2 className="card-title">JavaScript Quiz</h2>
                            </div>
                            <button className="btn btn-sm bg-gray-200 text-red-400 hover:bg-blue-300">JavaScript</button>
                        </div>
                    </Link>
                    <Link to='/quizdm'>
                    <div className="card glass rounded-md">
                            <div className="card-body">
                                <h2 className="card-title">Digital Marketing Quiz</h2>
                            </div>
                            <button className="btn btn-sm bg-gray-200 text-red-400 hover:bg-blue-300">Digital Marketing </button>
                        </div>
                    </Link>
                    <Link to='/quizalgrtm'>
                    <div className="card glass rounded-md">
                            <div className="card-body">
                                <h2 className="card-title">Algorithms Quiz</h2>
                            </div>
                            <button className="btn btn-sm bg-gray-200 text-red-400 hover:bg-blue-300">Algorithms </button>
                        </div>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default Quiz;