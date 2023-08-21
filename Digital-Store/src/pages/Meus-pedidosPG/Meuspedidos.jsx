import Footer from "../../Corpo/Footer";
import Header from "../../Corpo/Header";
import Abasusers from "./Abasusers";
import ObjInfo from "./ObjInfo";

export default function Meuspedidos() {
    return (
        <>
            <Header />
            <section className="w-auto h-[715px]  flex justify-center py-16 bg-[#F9F8FE] ">
                <div className="h-[480px] w-[1290px] flex  ml-[99px] mr-[101px] gap-x-[16px]">
                    <Abasusers />
                    <ObjInfo />                       
                </div>
            </section>   
            <Footer />
        </>
    )
}