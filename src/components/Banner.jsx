

const Banner = () => {
    return (
        <div className="container mx-auto my-5">
            {/* <div className="my-1 ">
                <div className="container mx-auto absolute">
                    <img className=" md:h-[350px] h-[180px] w-full " src="https://i.ibb.co/qBhL2hs/7409791-3653025.jpg" alt="" />

                </div>
                <div className="relative flex  justify-center items-center  w-full h-[180px] md:h-[350px]">
                    <h1 className="text-gray-500 text-center font-bold md:text-2xl  " >Welcome to <span className="text-3xl text-sky-600">Online Study Assignment</span></h1>

                </div>
            </div> */}

            <div className="hero  bg-sky-200 md:h-[430px] mb-1 ">
                <div className="hero-content flex-col md:flex-row ">
                    <img src="https://i.ibb.co/qBhL2hs/7409791-3653025.jpg" className="md:max-w-sm rounded-lg " />
                    <div>
                        <h1 className="text-xl font-bold text-white"> Welcome to <span className="text-2xl text-gray-500">Online Study Assignment</span> </h1>
                        
                    </div>
                </div>
            </div>

            <div className="hero  bg-yellow-100 rounded-sm md:h-[400px] ">
                <div className="hero-content flex-col md:flex-row-reverse ">
                    <img src="https://i.ibb.co/hmf9CCG/6622352-3375854.jpg" className="md:max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-2xl font-bold"> Online Study Assignment</h1>
                        <p className="my-3" >Through interactive discussions, shared resources, and virtual study groups, exchange ideas, and support one another's education knowladge. </p>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;
