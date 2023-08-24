import Footer from "../../Corpo/Footer";
import Header from "../../Corpo/Header";
import Main from "../../Corpo/Main";

export default function Home(){
    return(
        <div className="min-w-fit max-w-[134.375rem]">
            <Header />
            <Main />
            <Footer />
        </div>
    )
}