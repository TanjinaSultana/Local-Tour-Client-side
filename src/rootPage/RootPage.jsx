import { Outlet } from "react-router-dom";
import Footer from "../pages/shared/Footer";
import Navvar from "../pages/shared/Navvar";


const RootPage = () => {
    return (
        <div>
            <Navvar></Navvar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default RootPage;