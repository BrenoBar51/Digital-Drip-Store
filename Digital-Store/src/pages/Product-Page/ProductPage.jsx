import Footer from "../../Corpo/Footer";
import Header from "../../Corpo/Header";
import ProductImage from "../../components/productpage/Product-image";
import LocalPage from "../../components/productpage/ProductPageLocal";
import ProdutosRela from "../../components/productpage/ProdutosRela";
import TituloProducts from "../../components/productpage/TituloProduct";

export default function ProductPage() {
    return (
        <div>
            <Header />
            <div className="flex bg-[#F9F8FE] ">  <LocalPage /></div>
            <section className="flex w-full h-[750px]  bg-[#F9F8FE]">

                <ProductImage />
                <div className="relative top-[39px]">    <TituloProducts /> </div>
            </section>
            <section className="w-full h-[600px] bg-[#F9F8FE]">
                <ProdutosRela />
                <div>

                </div>
            </section>
            <Footer />
        </div>
    )
}