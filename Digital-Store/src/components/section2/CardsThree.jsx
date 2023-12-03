import MicroTitle from "./MIcroTitle";
import ThreeCards from "./ThreeCards";
import img from '../../assets/image/star-wars-storm-trooper-supreme-shirts-supreme-t-shirt-snoopy-clothing-apparel-t-shirt-text-transparent-png-616696.png';
import img2 from '../../assets/image/ddd-1.png';
import img3 from '../../assets/image/toppng.com-headphone-1092x1284.png';

export default function CardThree() {
  return (
    <section className="h-full py-7 flex justify-center md:items-start lg:items-center items-center flex-col">
      <MicroTitle color="corh1s2" value3="Coleções em destaque" />
      <div
        className={`
                w-full flex items-center flex-col md:flex-row justify-around min-h-[312px] gap-4 px-[3%] pt-7

            `}
      >
        <ThreeCards
          cardS2="ajustes"
          url={img}
          imgs="imgShop"
          name="30% OFF"
          span="spanbt"
          subt="cardtil"
          name2="Novo Drop Supreme"
        />
        <ThreeCards
          url={img2}
          imgs2="mod2"
          cardS2="ajustes"
          name="30% OFF"
          span="spanbt"
          subt="cardtil"
          name2="Coleção Adidas"
        />
        <ThreeCards
          url={img3}
          cardS2="ajustes"
          img3="mod3"
          name="30% OFF"
          span="spanbt"
          subt="cardtil"
          name2="Novo Beats Bass"
        />
      </div>
    </section>
  );
}