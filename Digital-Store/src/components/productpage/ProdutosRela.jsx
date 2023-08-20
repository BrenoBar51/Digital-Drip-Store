import { Card } from "../Card";
import { cardsInfoProductPage } from "./CardsinfoProductPage"; 

export default function ProdutosRela() {
    return(
        <div>
        <div className="flex"> <h1 className="text-[20px] relative top-[20px] font-semibold left-[60px] text-[#474747]">Produtos Relacionados</h1> <h1 className="text-[#C92071] top-[20px] relative left-[1040px]">Ver Todos ➜</h1> </div>
         <div className="flex flex-wrap relative top-[39px] gap-2 left-[90px] w-[1200px]">
            {cardsInfoProductPage.map((card) => {
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
        </div>
        
    )
}