import AboutUs from "../components/AboutUs";
import Categorias from "../components/Categorias";
import Contato from "../components/Contato";
import Copyright from "../components/Copyright";
import Informacoes from "../components/Informacoes";

export default function Footer(){
    return(
        <div>
            <footer className="bg-[#1F1F1F] flex flex-col">
                <div className="grid ml-[7%] mt-[4%] mr-[6%] grid-cols-4" >
                  <div className="col-span-1"> <AboutUs /> </div> 
                  <div className="row-span-3">   <Informacoes /> </div>
                  <div className="col-span-6s"> <Categorias /> </div>  
                  <div className="col-span-2s"> <Contato /></div> 
                </div>
                  <Copyright />
            </footer>
        </div>
    )
}