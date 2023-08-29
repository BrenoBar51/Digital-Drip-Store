import AboutUs from "../components/AboutUs";
import Categorias from "../components/Categorias";
import Contato from "../components/Contato";
import Copyright from "../components/Copyright";
import Informacoes from "../components/Informacoes";

export default function Footer() {
  return (
    <>
      <footer className="min-w-fit max-w-[134.375rem] bg-Cinza-Escuro flex flex-col">
        <div className="grid ml-[4%] mt-[10%] mr-[4%] grid-cols-4">
          <div className="col-span-1">
            <AboutUs />
          </div>
          <div className="row-span-3">
            <Informacoes />
          </div>
          <div className="col-span-6s">
            <Categorias />
          </div>
          <div className="col-span-2s">
            <Contato />
          </div>
        </div>
        <div>
          <Copyright />
        </div>
      </footer>
    </>
  );
}