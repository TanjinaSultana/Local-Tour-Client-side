
// import Exam from "../../../router/Exam";
// import E from "../../../router/Exam";
import Banner from "./Banner";
import CallToAction from "./CallToAction";
import Gallery from "./Gallery";
import PopularService from "./PopularService";
import Pricing from "./Pricing";
import Review from "./Review";


const Home = () => {
    return (
        <div>
         {/* <Exam></Exam> */}
            <Banner></Banner>
            <PopularService></PopularService>
            <Gallery></Gallery>
            <CallToAction></CallToAction>
            <Pricing></Pricing>
            <Review></Review>
        </div>
    );
};

export default Home;