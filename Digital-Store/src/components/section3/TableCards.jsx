import { cardsInfo } from "../../utils/mocks/cardsInfo";
import { Card } from "../Card";
import  Buttons from "../Buttons";
import MicroTitle from "../section2/MIcroTitle";
export default function TableCards() {
    const eightcard = cardsInfo.slice(0, 8);
    
    const firstRow = eightcard.slice(0, 4);
        const secondRow = eightcard.slice(4, 8);

    return (
        <>
            <div className="max-w-full h-[1000px] flex flex-col mx-[5.9%] gap-y-6">
                    <div className="w-[1200px] h-[26px] px-[8px] flex justify-between">
                        <MicroTitle value3='Produtos em alta' h2s2pt2='h2s2' />
                        <Buttons value3='Ver todos ->' linkbtn='btnlink'/>
                    </div>
                <div className="w-[1200px] flex overflow-hidden  ">
                    <div className="flex flex-wrap">
                        {firstRow.map((card) => {
                            return(
                                <div key={card.id} className="p-2" style={{ width: '300px' }}>
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
                    <div className="flex flex-wrap">
                        {secondRow.map((card) => {
                            return(
                                <div key={card.id} className="p-2" style={{ width: '300px' }}>
                                    <Card 
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