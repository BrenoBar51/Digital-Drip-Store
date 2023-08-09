import AboutUs from "../components/AboutUs";
import Categorias from "../components/Categorias";
import Contato from "../components/Contato";
import Informacoes from "../components/Informacoes";

export default function Footer(){
    return(
        <div className="">
            <footer className="bg-black flex">
                <div>
                    <AboutUs />
                    <Informacoes />
                    <Categorias />
                    <Contato />
                </div>
            </footer>
        </div>
    )
}