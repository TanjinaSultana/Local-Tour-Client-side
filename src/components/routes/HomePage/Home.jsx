import Banner from "./Banner";
import CallToAction from "./CallToAction";
import Gallery from "./Gallery";
import Pricing from "./Pricing";
import Review from "./Review";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <CallToAction></CallToAction>
            <Pricing></Pricing>
            <Review></Review>
        </div>
    );
};

export default Home;