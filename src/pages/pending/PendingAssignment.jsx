import { useLoaderData } from "react-router-dom";
import PendingCard from "./PendingCard";


const PendingAssignment = () => {
    const pends = useLoaderData()
    console.log(pends)
    const { link_submit, note_text, status, email, examinee_name, atitle, amarks } = pends
    return (
        <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    pends.filter(sts => sts.status === 'pending').map(pendss => (<PendingCard key={pendss._id} pendss={pendss} ></PendingCard>))
                }
            </div>
        </div>
    );
};

export default PendingAssignment;