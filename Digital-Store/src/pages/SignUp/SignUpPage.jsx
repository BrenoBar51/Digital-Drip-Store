import { NavLink } from "react-router-dom";
import Footer from "../../Corpo/Footer";
import Logo from "../../components/Logo";
import MainSignUpPage from "./MainSignUp";

export default function SignUpPage(){
    return(
        <div className="">
            <div className="ml-[7%] mt-[2%] mb-[2%] flex bg-white">
                <NavLink to={'/'} className={({isActive}) => (isActive ? '' : '')}>
                    <Logo />
                </NavLink>
            </div>
            <div className="bg-gradient-to-b from-[#B5B6F2] to-[#EFEFFF]">
                <MainSignUpPage />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}