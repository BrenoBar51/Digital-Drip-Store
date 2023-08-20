import Footer from "../../Corpo/Footer";
import Header from "../../Corpo/Header";
import ComprarForm from "./ComprarForm";

export default function ComprarPage(){
    return(
        <>
            <div>
                <Header />
            </div>
            <div className="bg-gradient-to-b from-[#F5F5F5] to-[#EFEFFF]">
                <ComprarForm />
            </div>
            <div>
                <Footer />
            </div>
        </>
    )
}