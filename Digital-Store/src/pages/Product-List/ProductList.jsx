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
      <div className="flex flex-col justify-start sm:flex-row sm:justify-between sm:items-center mx-[7%]">
        <Select/>
        <Results/>
      </div>
      <section className="flex mx-[7%] mb-28 mt-10 gap-1">
        <aside className="w-[308px] h-[720px] hidden sm:block">
          <SideBar />
        </aside>
        <div className="w-full grid gap-x-4 gap-y-8 grid-rows-2 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
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
