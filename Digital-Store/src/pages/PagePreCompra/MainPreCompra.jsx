import { cardsInfo } from "../../utils/mocks/cardsInfo";
import { Card } from "../../components/Card";
import Input from "../../components/Inputs";
import { NavLink } from "react-router-dom";
import OKButton from "../../components/OKButton";
import img1 from "../../assets/image/White-Sneakers-PNG-Clipart 2.png";

export default function MainPreCompra() {
  const eightcard = cardsInfo.slice(0, 8);

  const firstRow = eightcard.slice(0, 4);
  return (
    <>
      <div className="flex">
        <div className="min-w-fit h-fit bg-white p-[2%] ml-[3%] mt-[7%]">
          <div className="flex">
            <p className="font-bold text-[#474747] text-[14px] tracking-wide w-[350px] h-[36px]">
              MEU CARRINHO
            </p>
            <p className="font-semibold text-[#474747] tracking-wide text-[14px] w-[170px]">
              QUANTIDADE
            </p>
            <p className="font-semibold text-[#474747] tracking-wide text-[14px] w-[170px]">
              UNITÁRIO
            </p>
            <p className="font-semibold text-[#474747] tracking-wide text-[14px]">TOTAL</p>
          </div>
          <hr className="mt-[1%] mb-[4%]" />
          <div className="flex">
            <img
              src={img1}
              className="w-[100px] h-[100px] bg-[#E2E3FF]"
              alt=""
            />
            <div className="grid space-y-[4%]">
              <p className="text-[#1F1F1F] w-full tracking-wider ml-[5%] font-bold text-[14px]">
                Tênis Nike Revolution 6 Next
                <br />
                Nature Masculino
              </p>
              <div className="flex">
                <p className="text-[#474747] tracking-wider ml-[5%] font-semibold text-[12px]">
                  Cor:
                </p>
                <p className="text-[#1F1F1F] w-full tracking-wider ml-[5%] font-bold text-[12px]">
                  Vermelho / Branco
                </p>
              </div>
              <div className="flex">
                <p className="text-[#474747] tracking-wider ml-[5%] font-semibold text-[12px]">
                  Tamanho:
                </p>
                <p className="text-[#1F1F1F] w-full tracking-wider ml-[5%] font-bold text-[12px]">
                  42
                </p>
              </div>
            </div>
            <div className="grid ml-[4%]">
              <div className="flex space-x-[60%] mr-[70%]">
                <button className="h-fit min-w-full p-[10%] bg-white text-[#474747] border-[#CCCCCC] border-[1px] rounded">
                  -
                </button>
                <p className="text-[12px] mt-[30%] font-bold">1</p>
                <button className="h-fit min-w-full p-[10%] bg-white border-[1px] text-[#474747] bor-spacing-5 border-[#CCCCCC] rounded">
                  +
                </button>
              </div>
              <p className="underline cursor-pointer text-[#474747]">Remover item</p>
            </div>
            <div className="grid ml-[10%]">
              <del className="text-[#CCCCCC]">
                <p className="text-[#CCCCCC] font-semibold text-[14px]">R$ 219,00</p>
              </del>
              <p className="text-[#474747] w-full font-semibold text-[14px]">R$ 219,00</p>
            </div>
            <div className="grid ml-[10%]">
              <del className="text-[#CCCCCC]">
                <p className="text-[#CCCCCC] font-semibold text-[14px]">R$ 219,00</p>
              </del>
              <p className="text-[#474747] w-full font-semibold text-[14px]">R$ 219,00</p>
            </div>
          </div>
          <hr className="mt-[4%]" />
          <div className="flex w-fit gap-[10%]">
            <div className="grid mt-[5%]">
              <p className="font-extrabold text-[#474747] text-[10px] tracking-wide">
                CUPOM DE DESCONTO
              </p>
              <div className="flex mt-[5%]">
                <Input type={"text"} name={"discont"} placeholder={"Insira seu código"} />
                <div className="ml-[2%]">
                  <OKButton />
                </div>
              </div>
            </div>
            <div className="grid mt-[5%]">
              <p className="font-extrabold text-[#474747] text-[10px] tracking-wide">
                CALCULAR FRETE
              </p>
              <div className="flex mt-[5%]">
                <Input type={"text"} name={"frete"} placeholder={"Insira seu CEP"} />
                <div className="ml-[2%]">
                  <OKButton />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-fit ml-[4%] mt-[7%] bg-white p-[1%]">
          <p className="font-bold text-[#474747] w-[306px] tracking-wide text-[24px]">Resumo</p>
          <hr className="" />
          <div className="flex">
            <img
              src={img1}
              className="w-[90px] h-[70px] bg-[#E2E3FF]"
              alt=""
            />
            <p className="text-[#1F1F1F] w-full tracking-wider ml-[5%] font-bold text-[14px]">
              Tênis Nike Revolution 6 Next Nature
              <br />
              Masculino
            </p>
          </div>
          <hr className="" />
          <div className="space-y-[10%]">
            <div className="flex">
              <p className="text-[#8F8F8F] font-medium text-[14px]">Subtotal:</p>
              <p className="text-[#1F1F1F] font-medium ml-[64%] text-[14px] w-full">R$ 219,00</p>
            </div>
            <div className="flex">
              <p className="text-[#8F8F8F] font-medium text-[14px]">Frete:</p>
              <p className="text-[#1F1F1F] font-medium ml-[74%] text-[14px] w-full">R$ 0,00</p>
            </div>
            <div className="flex">
              <p className="text-[#8F8F8F] font-medium text-[14px]">Desconto:</p>
              <p className="text-[#1F1F1F] font-medium ml-[63%] text-[14px] w-full">R$ 30,00</p>
            </div>
          </div>
          <div className="flex p-[6%] bg-[#F6AA1C26]">
            <p className="font-bold text-[24px]">Total</p>
            <div className="grid w-fit justify-end ml-[15%]">
              <p className="font-bold ml-[55%] text-[#1F1F1F] min-w-full text-[24px]">R$ 219,00</p>
              <p className="font-medium ml-[25%] text-[#8F8F8F] min-w-full text-[12px]">
                ou 10x de R$ 21,00 sem juros
              </p>
            </div>
          </div>
          <NavLink to={"/comprar"} className={({ isActive }) => (isActive ? "" : "")}>
            <button
              type="submit"
              className="w-[100%] h-[40px] mt-[6%] flex-shrink-0 bg-[#F6AA1C] text-[#f5f5f5] rounded-lg hover:bg-[#ffb730] hover:transition-[2s]"
            >
              Continuar
            </button>
          </NavLink>
        </div>
      </div>
      <div className="flex">
        {firstRow.map((card) => {
          return (
            <div key={card.id} className="p-2" style={{ width: "300px" }}>
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
          );
        })}
      </div>
    </>
  );
}