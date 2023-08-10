import MicroTitle from "./MIcroTitle";
import ThreeCards from "./ThreeCards";

export default function CardThree() {
    return (
        <section className=" h-2/3 mx-[4%] pt-7 flex flex-col">
            <MicroTitle color='corh1s2' value3='Coleções em destaque' />
                <div className={`
                h-[312px]  ml-[4%] mr-[4%] pt-7 flex gap-x-4 gap-y-7

            `}>
                
                <ThreeCards 
                    cardS2='ajustes'
                    url='src\assets\image\star-wars-storm-trooper-supreme-shirts-supreme-t-shirt-snoopy-clothing-apparel-t-shirt-text-transparent-png-616696.png'
                    imgs='imgShop'
                    name='30% OFF' 
                    span='spanbt' 
                    subt='cardtil' 
                    name2='Novo Drop Supreme'/>
                <ThreeCards
                    url='src\assets\image\ddd 1.png'
                    imgs2='mod2'
                    cardS2='ajustes'
                    name='30% OFF' 
                    span='spanbt' 
                    subt='cardtil' 
                    name2='Coleção Adidas'/>
                <ThreeCards 
                    url='src\assets\image\toppng.com-headphone-1092x1284.png'
                    cardS2='ajustes'
                    img3='mod3'
                    name='30% OFF' 
                    span='spanbt' 
                    subt='cardtil' 
                    name2='Novo Beats Bass'/>

                
            </div>
        </section>
    )
}