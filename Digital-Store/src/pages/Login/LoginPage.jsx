import { NavLink } from "react-router-dom";
import Footer from "../../Corpo/Footer";
import Logo from "../../components/Logo";
import MainLogin from "./Main-Login";

export default function LoginPage(){
    return(
        <div className="w-full h-full">
            <div className=" p-8 w-[460px] px-[90px]  flex bg-white">
                <NavLink to={'/'} className={({isActive}) => (isActive ? '' : 'flex gap-x-1 items-center justify-center')}>
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