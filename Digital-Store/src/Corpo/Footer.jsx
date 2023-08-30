import AboutUs from "../components/AboutUs";
import Categorias from "../components/Categorias";
import Contato from "../components/Contato";
import Copyright from "../components/Copyright";
import Informacoes from "../components/Informacoes";

export default function Footer() {
  return (
    <>
      <footer className="min-w-fit bg-Cinza-Escuro">
        <div className="flex min-w-fit pt-[5%] pb-[4%] pl-[6%] gap-[11%]">
          <AboutUs />
          <Informacoes />
          <Categorias />
          <Contato />
        </div>
        <div>
          <Copyright />
        </div>
      </footer>
    </>
  );
}