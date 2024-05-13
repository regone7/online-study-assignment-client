import { useLoaderData } from "react-router-dom";


const MarkPage = () => {
    const markes = useLoaderData()
    console.log(markes)
    return (
        <div>
            hi
        </div>
    );
};

export default MarkPage;