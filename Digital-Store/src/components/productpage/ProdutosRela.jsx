import { NavLink } from "react-router-dom";
import { Card } from "../Card";
import { cardsInfoProductPage } from "./CardsinfoProductPage"; 

export default function ProdutosRela() {
    return(
        <>
            <div className="flex">
                <h1 className="text-[20px] relative font-semibold ml-[5%] text-[#474747]">Produtos Relacionados</h1>
                <div className="ml-[54rem]">
                    <NavLink to={'/productslist'}>
                        <h1 className="text-Rosa relative">Ver Todos ➜</h1>
                    </NavLink>
                </div>
            </div>
            <div className="w-fit flex flex-wrap mt-[3%] gap-10 ml-[5%]">
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
        </>
    )
}