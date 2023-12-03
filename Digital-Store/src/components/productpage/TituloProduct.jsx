import { NavLink } from "react-router-dom";
import img1 from "../../assets/image/Stars.png";
import img2 from "../../assets/image/Frame 9.png";

export default function TituloProducts() {
     return(
        <div className="">
         <h1 className=" w-[499px] h-[120px] text-[39px] text-[#1f1f1f] not-italic font-bold leading-[59px] tracking-[0.5px]">
         Tênis Nike Revolution 6 Next Nature Masculino
         </h1>
         <h5 className="text-[#666666]">Casual | Nike | REF:38416711</h5>
         <img src={img1} className="w-[92px] relative top-4" alt="" />
        <div className="flex">
            <img src={img2} className="relative left-24 bottom-[2px]" alt="" />
            <h6 className="relative bottom-[1.5px] left-[110px] text-[#8F8F8F]">(90 avaliações )
            </h6>
         </div>
         <div className="flex relative left-[20px]">
         <h6 className=" relative top-[30px] right-[21px] text-[19px] text-[#474747]">R$</h6 > <h5 className="font-bold relative top-4 right-[20px] text-[31px] text-[#474747]">219,00</h5> <h5 className="relative top-[31px] right-[14px] text-[17px] text-[#CCCCCC] line-through">219,00</h5>
         </div>
         <div className="relative top-[36px] font-semibold right-[2px] text-[#8F8F8F]">Descriçao do produto</div>
         <p className="relative top-[40px] font-semibold text-[#474747]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br /> eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut <br /> enim ad minim veniam, quis nostrud exercitation ullamco.</p>
         
          <div className="relative text-[#8F8F8F] font-semibold top-[50px]">Tamanho</div>
          <div className="grid grid-cols-5">
          <div className="border-[#CCCCCC] border-2 w-[48px] h-[48px] relative left-[] top-[53px] rounded "><div className="text-[20px] text-[#474747] relative top-[7px] left-[9px]">39</div></div>
          <div className="border-[#CCCCCC] border-2 w-[48px] h-[48px] relative right-[40px] top-[53px] rounded "><div className="text-[20px] text-[#474747] relative top-[7px] left-[9px]">40</div></div>
          <div className="bg-[#C92071] w-[48px] h-[48px] relative right-[80px] top-[53px] rounded "><div className="text-[20px] text-white relative top-[9px] left-[13px]">41</div></div>
          <div className="border-[#CCCCCC] border-2 w-[48px] h-[48px] relative right-[120px] top-[53px] rounded "><div className="text-[20px] text-[#474747] relative top-[7px] left-[9px]">42</div></div>
          <div className="border-[#CCCCCC] border-2 w-[48px] h-[48px] relative right-[160px] top-[53px] rounded "><div className="text-[20px] text-[#474747] relative top-[7px] left-[9px]">43</div></div>
          </div>
          <div className="relative text-[#8F8F8F] font-semibold top-[60px]">Tamanho</div>
          <div className="flex gap-4">
          <div className="bg-[#6FEEFF] relative top-[70px] w-[31px] h-[31px] rounded-full"></div>
          <div className="bg-[#FF6969]  border-2 border-white relative ring-2 ring-[#C92071] top-[70px] w-[31px] h-[31px] rounded-full"></div>
          <div className="bg-[#5E5E5E] relative top-[70px] w-[31px] h-[31px] rounded-full"></div>
          <div className="bg-[#6D70B7]  relative top-[70px] w-[31px] h-[31px] rounded-full"></div>
          </div>
          <NavLink to={'/precompra'} className={({isActive}) => (isActive ? '' : '')}>
         <button className="bg-[#FFB31F] text-[#ffff] z-20 w-[153px] h-[48px] relative top-[100px] text-[16px] not-italic font-bold leading-[24px] tracking-[0.75px] text-center hover:bg-[#ff9f19] hover:text-[#fff] hover:duration-500 hover:ease-in-out duration-[1.4s]" >Comprar</button></NavLink>
        </div>
 
     )
}

 