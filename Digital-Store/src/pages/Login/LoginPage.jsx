import { NavLink } from "react-router-dom";
import Footer from "../../Corpo/Footer";
import Logo from "../../components/Logo";
import MainLogin from "./Main-Login";

export default function LoginPage(){
    return(
        <div>
            <div className="ml-[7%] mt-[2%] mb-[2%] flex bg-white">
                <NavLink to={'/'} className={({isActive}) => (isActive ? '' : '')}>
                    <Logo />
                </NavLink>
            </div>
            <div className="bg-gradient-to-b from-[#B5B6F2] to-[#EFEFFF]">
                <MainLogin />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}