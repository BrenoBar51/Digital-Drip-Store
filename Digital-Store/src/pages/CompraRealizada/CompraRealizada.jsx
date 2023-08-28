import Footer from "../../Corpo/Footer";
import Header from "../../Corpo/Header";
import ConteudoCompraRealizada from "../../components/paginacomprarealizada/ConteudoRealizado";

export default function CompraRealizada() {
  return (
    <div>
      <Header />
      <div className="w-full h-[1700px] bg-Branco">
        <ConteudoCompraRealizada />
      </div>
      <Footer />
    </div>
  );
}
