import Banner from "../../components/Banner";
import Faq from "../../components/Faq";
import Features from "../../components/Features";


const Home = () => {
    return (
        <div className="container mx-auto">
            <div>
                <Banner></Banner>
            </div>
            <div>
                <Features></Features>
            </div>
            <div>
                <Faq></Faq>
            </div>
        </div>
    );
};

export default Home;