import Footer from "../../Corpo/Footer";
import Logo from "../../components/Logo";
import MainLogin from "./Main-Login";

export default function LoginPage(){
    return(
        <div className="justify-center">
            <div className="ml-[7%] mt-[3%] mb-[3%] flex bg-white">
                <Logo />
            </div>
            <div className="bg-gradient-to-b flex from-[#B5B6F2] to-[#EFEFFF]">
                <MainLogin />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}