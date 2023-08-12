import Footer from "../../Corpo/Footer";
import { Card } from "../../components/Card";
import NavBar from "../../components/NavBar";
import SideBar from "../../components/SideBar";
import { cardsInfo } from "../../utils/mocks/cardsInfo";

export default function ProductList() {
  return (
    <>
      <NavBar />
      <section className="flex mx-[70px] mb-28 mt-10 gap-1">
        <aside className="w-[308px] h-[720px]">
          <SideBar />
        </aside>
        <div className="flex flex-wrap w-[904px]">
            {cardsInfo.map((card) => {
                return(
                    <Card 
                    key={card.id} 
                    discountPercentual={card.discountPercentual} 
                    category={card.category} 
                    productName={card.productName}
                    discountPrice={card.discountPrice}
                    price={card.price}
                    isDiscount={card.isDiscount}
                    url={card.url} />
                )
            })}
        </div>
      </section>
      <Footer />
    </>
  );
}
