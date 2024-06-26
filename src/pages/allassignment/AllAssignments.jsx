import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import FilterAllAssignment from "../../components/FilterAllAssignment";

const AllAssignments = () => {
    const allassignment = useLoaderData()
    console.log(allassignment)
    return (
        <div className="container mx-auto p-3">
            <div >
                <h1 className="text-3xl text-center font-bold mt-5">All Assignment </h1>
                <p className="text-center mb-3">Every User Create Assignment Here...</p>
            </div>
            <div >
                <Tabs>
                    <TabList >
                        <Tab >Easy</Tab>
                        <Tab>Medium</Tab>
                        <Tab>Hard</Tab>
                    </TabList>

                    <TabPanel>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 p-3">
                            {
                                allassignment.filter(j => j.category === 'Easy').map(fil => (<FilterAllAssignment key={fil._id} fil={fil} ></FilterAllAssignment>))
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 p-3">
                            {
                                allassignment.filter(j => j.category === 'Medium').map(fil => (<FilterAllAssignment key={fil._id} fil={fil} ></FilterAllAssignment>))
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 p-3">
                            {
                                allassignment.filter(j => j.category === 'Hard').map(fil => (<FilterAllAssignment key={fil._id} fil={fil} ></FilterAllAssignment>))
                            }
                        </div>
                    </TabPanel>
                    
                </Tabs>
            </div>
        </div>
    );
};

export default AllAssignments;