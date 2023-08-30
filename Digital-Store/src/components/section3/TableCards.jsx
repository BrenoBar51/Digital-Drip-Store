import { cardsInfo } from "../../utils/mocks/cardsInfo";
import { Card } from "../Card";
import Buttons from "../Buttons";
import MicroTitle from "../section2/MIcroTitle";
export default function TableCards() {
  const eightcard = cardsInfo.slice(0, 8);

    return (
        <>
            <div className="max-w-full h-fit flex flex-col mx-[5.9%] gap-y-6">
                    <div className="w-full h-full px-[8px] gap-x-5 md:gap-x-0 flex pt-20 md:pt-0 md:justify-between">
                        <MicroTitle value3='Produtos em alta' h2s2pt2='h2s2' />
                        <Buttons value3='Ver todos ->' linkbtn='btnlink' className='!bg-Branco-gelo1'/>
                    </div>
                <div className="w-full flex overflow-hidden  ">
                    <div className="w-full sm:items-center grid gap-y-8 grid-rows-2 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
                        {eightcard.map((card) => {
                            return(
                                <div key={card.id} className="p-2" style={{ width: '350px' }}>
                                    <Card 
                                        key={card.id} 
                                        discountPercentual={card.discountPercentual} 
                                        category={card.category} 
                                        productName={card.productName}
                                        discountPrice={card.discountPrice}
                                        price={card.price}
                                        isDiscount={card.isDiscount}
                                        url={card.url} 
                                    />
                                    
                                </div>
                            )
                        })}
                    </div>
                </div>              
           </div>
        </>
)}
