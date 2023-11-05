import { Outlet } from "react-router-dom";
import Footer from "../pages/shared/Footer";
import Navvar from "../pages/shared/Navvar";
import { Toaster } from "react-hot-toast";


const RootPage = () => {
    return (
        <div>
            <Navvar></Navvar>
            <Outlet></Outlet>
            <Footer></Footer>
            <Toaster></Toaster>
        </div>
    );
};

export default RootPage;