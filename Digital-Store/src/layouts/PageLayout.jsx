import { Outlet } from "react-router-dom";
import Footer from "../Corpo/Footer";
import Header from "../Corpo/Header";

const PageLayout = () => {
    return(
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
}
export default PageLayout;