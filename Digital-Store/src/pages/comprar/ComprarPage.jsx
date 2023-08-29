import Footer from "../../Corpo/Footer";
import Header from "../../Corpo/Header";
import ComprarForm from "./ComprarForm";

export default function ComprarPage(){
    return(
        <>
            <div>
                <Header />
            </div>
            <div className="bg-gradient-to-b from-Branco to-Lilás-Fade">
                <ComprarForm />
            </div>
            <div>
                <Footer />
            </div>
        </>
    )
}