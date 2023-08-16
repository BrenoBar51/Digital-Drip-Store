import Footer from "../../Corpo/Footer";
import Header from "../../Corpo/Header";
import ProductImage from "../../components/Product-image";
import LocalPage from "../../components/ProductPageLocal";
import TituloProducts from "../../components/TituloProduct";

export default function ProductPage() {
    return(
        <div>
            <Header />
            <div className="flex bg-[#F9F8FE] ">  <LocalPage /></div> 
          <section className="flex w-full h-[1000px]  bg-[#F9F8FE]">
         
            <ProductImage />
        <div className="relative top-[39px]">    <TituloProducts /> </div>
        
    
            </section> 
            <Footer />
        </div>
    )
}