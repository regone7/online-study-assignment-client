import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";


const MysubmitAsmnt = () => {
    const { user,setLoading } = useContext(AuthContext)
    const [mysub, setMysub] = useState([])
    useEffect(() => {
        fetch(`http://localhost:9000/assignsubmitseml/${user?.email}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setMysub(data);
                // setLoading(false)
            })
    }, [user?.email])
    console.log(mysub)
    return (
        <div>
            <div className="container mx-auto">
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Assignment Title</th>
                                <th>Assignment Status</th>
                                <th>Assignment Marks</th>
                                <th>Your Obtained Marks</th>
                                <th>Feedback</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                mysub.map(mysubs => (
                                    <tr key={mysubs._id}>
                                        <th></th>
                                        <td>{mysubs.atitle}</td>
                                        <td className={`px-3 py-1 ${mysubs.status === 'completed' && 'text-blue-700 font-semibold'} ${mysubs.status === 'pending' && 'text-pink-700 font-semibold'}`} >{mysubs.status}</td>
                                        <td>{mysubs.amarks}</td>
                                        <td>{mysubs.inspection_marks}</td>
                                        <td>{mysubs.feedback}</td>
                                    </tr>
                                ))
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MysubmitAsmnt;