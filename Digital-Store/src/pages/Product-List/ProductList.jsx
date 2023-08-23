import Footer from "../../Corpo/Footer";
import { Card } from "../../components/Card";
import { Select } from "../../components/Select";
import { Results } from "../../components/Results";
import SideBar from "../../components/SideBar";
import { cardsInfo } from "../../utils/mocks/cardsInfo";
import Header from "../../Corpo/Header";

export default function ProductList() {
  return (
    <>
      <Header />
      <div className="flex justify-between items-center mx-[7%]">
        <Results/>
        <Select/>
      </div>
      <section className="flex mx-[7%] mb-28 mt-10 gap-1">
        <aside className="w-[308px] h-[720px]">
          <SideBar />
        </aside>
        <div className="flex justify-center flex-wrap w-[1200px]">
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
