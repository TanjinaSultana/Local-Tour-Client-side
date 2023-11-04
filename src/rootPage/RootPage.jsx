import { Outlet } from "react-router-dom";
import Footer from "../pages/shared/Footer";
import Home from "../pages/shared/Home";


const RootPage = () => {
    return (
        <div>
            <Home></Home>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default RootPage;