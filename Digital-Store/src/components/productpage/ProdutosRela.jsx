import { NavLink } from "react-router-dom";
import { Card } from "../Card";
import { cardsInfoProductPage } from "./CardsinfoProductPage"; 

export default function ProdutosRela() {
    return(
        <div>
        <div className="flex"><h1 className="text-[20px] relative top-[20px] font-semibold ml-[5%] text-[#474747]">Produtos Relacionados</h1> <NavLink to={'/productslist'}><h1 className="text-[#C92071] relative left-[910px] top-[25px]">Ver Todos ➜</h1></NavLink> </div>
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