import AboutUs from "../components/AboutUs";
import Categorias from "../components/Categorias";
import Contato from "../components/Contato";
import Informacoes from "../components/Informacoes";

export default function Footer(){
    return(
        <div className="">
            <footer className="bg-[#1F1F1F] flex">
                <div className="grid grid-cols-4" >
                  <div className="col-span-1"> <AboutUs /> </div> 
                  <div className="row-span-3">   <Informacoes /> </div>
                  <div className="col-span-6s"> <Categorias /> </div>  
                    <Contato />
                </div>
            </footer>
        </div>
    )
}