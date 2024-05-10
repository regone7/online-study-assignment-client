

const Banner = () => {
    return (
        <div className="container mx-auto ">
            {/* <div className="md:h-[400px] w-full absolute">
                <img className="md:h-[400px] w-full" src="https://i.ibb.co/fGK37zG/pexels-heyho-7394015.jpg" alt="" />
                
            </div>
            <div className="relative flex  justify-center items-center  w-full h-[200px] md:h-[350px]">
                    <h1 className="text-white text-center font-bold md:text-2xl  " >welcome to Online Study Assignment</h1>
                    
                </div> */}
            <div className="hero  bg-yellow-100 rounded-sm md:h-[400px]">
                <div className="hero-content flex-col md:flex-row-reverse ">
                    <img src="https://i.ibb.co/Y3ndjSj/OBJECTS.jpg" className="md:max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-2xl font-bold">Welcome to Online Study Assignment</h1>
                        <p className="my-3" >Through interactive discussions, shared resources, and virtual study groups, exchange ideas, and support one another's education knowladge. </p>
                        
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;
