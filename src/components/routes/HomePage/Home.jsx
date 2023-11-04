import Banner from "./Banner";
import CallToAction from "./CallToAction";
import Gallery from "./Gallery";
import Pricing from "./Pricing";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <CallToAction></CallToAction>
            <Pricing></Pricing>
        </div>
    );
};

export default Home;