import { MdOutlineAssignment } from "react-icons/md";
import { GrLinkNext } from "react-icons/gr";
import { MdCreateNewFolder } from "react-icons/md";
import { MdOutlinePendingActions } from "react-icons/md";
import { Link } from "react-router-dom";

const Features = () => {
    return (
        <div>
            <section className="bg-white dark:bg-gray-900">
                <div className="container px-6 py-10 mx-auto">
                    <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white text-center">Feature</h1>

                    <p className="mt-4 text-gray-500 xl:mt-6 dark:text-gray-300 text-center">
                        Feature of this webside
                    </p>

                    <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
                        <div className="p-8 space-y-3 border-2 border-rose-400 dark:border-blue-300 rounded-xl">
                            <span className="inline-block text-blue-500 dark:text-blue-400 text-5xl">
                                <MdOutlineAssignment />
                            </span>

                            <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">Assignments</h1>

                            <p className="text-gray-500 dark:text-gray-300">
                                Anyone can see any type of assignment that available in this website. Login user can attempted assignment submission.
                            </p>
                            <Link to='/allassignment' > <span className="inline-flex p-2 text-blue-500 capitalize transition-colors duration-300 transform bg-blue-100 rounded-full rtl:-scale-x-100 dark:bg-blue-500 dark:text-white hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                                <GrLinkNext />
                            </span></Link>

                        </div>
                        <div className="p-8 space-y-3 border-2 border-rose-400 dark:border-blue-300 rounded-xl">
                            <span className="inline-block text-blue-500 dark:text-blue-400 text-5xl">
                                <MdCreateNewFolder />
                            </span>

                            <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">Create Assignment</h1>

                            <p className="text-gray-500 dark:text-gray-300">
                                Any login user can create Assignment.
                            </p>

                            <Link to='/createassignment' > <span className="inline-flex p-2 text-blue-500 capitalize transition-colors duration-300 transform bg-blue-100 rounded-full rtl:-scale-x-100 dark:bg-blue-500 dark:text-white hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                                <GrLinkNext />
                            </span></Link>
                        </div>
                        <div className="p-8 space-y-3 border-2 border-rose-400 dark:border-blue-300 rounded-xl">
                            <span className="inline-block text-blue-500 dark:text-blue-400 text-5xl">
                                <MdOutlinePendingActions />
                            </span>

                            <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">Pending Assignments</h1>

                            <p className="text-gray-500 dark:text-gray-300">
                                Any Submitted  assignment there . Anyone login user marks and take a look of his answer.
                            </p>
                            <Link to='/pendingas' ><span className="inline-flex p-2 text-blue-500 capitalize transition-colors duration-300 transform bg-blue-100 rounded-full rtl:-scale-x-100 dark:bg-blue-500 dark:text-white hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                                <GrLinkNext />
                            </span></Link>

                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Features;