import Footer from "../../Corpo/Footer";
import Header from "../../Corpo/Header";
import MainPreCompra from "./MainPreCompra";

export default function PreCompraPage() {
  return (
    <>
      <div>
        <Header />
      </div>
      <div className="bg-Branco">
        <MainPreCompra />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}