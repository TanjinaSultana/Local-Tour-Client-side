
// import Exam from "../../../router/Exam";
// import E from "../../../router/Exam";
import { useLocation } from "react-router-dom";
import Banner from "./Banner";
import CallToAction from "./CallToAction";
import Gallery from "./Gallery";
import PopularService from "./PopularService";
import Pricing from "./Pricing";
import Review from "./Review";
import { useEffect } from "react";


const Home = () => {
    const location = useLocation();
    useEffect(() => {
        document.title = `Local Tour & Guide | ${location.pathname}`;
      }, [location.pathname]);
  
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