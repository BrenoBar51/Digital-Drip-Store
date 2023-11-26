import Footer from "../../Corpo/Footer";
import Header from "../../Corpo/Header";
import ProductImage from "../../components/productpage/Product-image";
import ProdutosRela from "../../components/productpage/ProdutosRela";
import TituloProducts from "../../components/productpage/TituloProduct";

export default function ProductPage() {
    return (
        <>
            <Header />
            <div className="flex w-full bg-Branco-gelo1 ">
                <div className="ml-[4.5%] mt-6">
                <h1 className="">Home / Produtos / Tênis / Nike / Tênis Nike Revolution 6 Next Nature Masculino</h1>
            </div>
            </div>
            <div className="flex w-full h-[750px]  bg-Branco-gelo1">
                <ProductImage />
                <div className="relative mt-[2%] ml-[7%]">
                    <TituloProducts />
                </div>
            </div>
            <div className="w-full h-[600px] bg-Branco-gelo1">
                <ProdutosRela />
            </div>
            <Footer />
        </>
    )
}