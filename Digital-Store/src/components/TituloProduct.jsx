export default function TituloProducts() {
     return(
        <div className="">
         <h1 className=" w-[499px] h-[120px] text-[39px] text-[#1f1f1f] not-italic font-bold leading-[59px] tracking-[0.5px]">
         Tênis Nike Revolution 6 Next Nature Masculino
         </h1>
         <h5 className="text-[#666666]">Casual | Nike | REF:38416711</h5>
         <img className="w-[92px] relative top-4" src="src\assets\image\Stars.png" alt="" />
        <div className="flex"> <img className="relative left-24 bottom-[2px]" src="src\assets\image\Frame 9.png" alt="" />
         <h6 className="relative bottom-[1.5px] left-[110px] text-[#8F8F8F]">(90 avaliações )</h6>
         </div>
         <div className="flex relative left-[20px]">
         <h6 className=" relative top-[30px] right-[21px] text-[19px] text-[#474747]">R$</h6 > <h5 className="font-bold relative top-4 right-[20px] text-[31px] text-[#474747]">219,00</h5> <h5 className="relative top-[31px] right-[14px] text-[17px] text-[#CCCCCC] line-through">219,00</h5>
         </div>
         <div className="relative top-[36px] font-semibold right-[2px] text-[#8F8F8F]">Descriçao do produto</div>
         <p className="relative top-[40px] font-semibold text-[#474747]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br /> eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut <br /> enim ad minim veniam, quis nostrud exercitation ullamco.</p>
         <img className="relative top-[50px]" src="src\assets\image\Tamanho.png" alt="" />
         <img className="relative top-[70px]" src="src\assets\image\cor.png" alt="" />
         <button className="bg-[#FFB31F] text-[#ffff] z-20 w-[153px] h-[48px] relative top-[100px] text-[16px] not-italic font-bold leading-[24px] tracking-[0.75px] text-center hover:bg-[#ff9f19] hover:text-[#fff] hover:duration-500 hover:ease-in-out duration-[1.4s]" >Comprar</button>
        </div>
     )
}