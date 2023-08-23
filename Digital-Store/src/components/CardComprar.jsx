import { NavLink } from "react-router-dom";

export default function CardComprar(){
    return(
        <>
        <p className="font-bold text-[#474747] w-[306px] tracking-wide text-[24px]">Resumo</p>
            <hr className=""/>
            <div className="flex">
                <img className="w-[90px] h-[70px] bg-[#E2E3FF]" src="src\assets\image\CardTenisForIN.png" alt="" />
                <p className="text-[#1F1F1F] w-full tracking-wider ml-[5%] font-bold text-[14px]">Tênis Nike Revolution 6 Next Nature<br/>Masculino</p>
            </div>
            <hr className=""/>
            <div className="space-y-[10%]">
                <div className="flex">
                    <p className="text-[#8F8F8F] font-medium text-[14px]">Subtotal:</p>
                    <p className="text-[#1F1F1F] font-medium ml-[64%] text-[14px] w-full">R$ 219,00</p>
                </div>
                <div className="flex">
                    <p className="text-[#8F8F8F] font-medium text-[14px]">Frete:
                    </p>
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
                    <p className="font-medium ml-[25%] text-[#8F8F8F] min-w-full text-[12px]">ou 10x de R$ 21,00 sem juros</p>
                </div>
            </div>
            <NavLink to={'/comprafinalizada'} className={({isActive}) => (isActive ? '' : '')}>
            <button type="submit" className="w-[100%] h-[40px] mt-[6%] flex-shrink-0 bg-[#F6AA1C] text-[#f5f5f5] rounded-lg hover:bg-[#ffb730] hover:transition-[2s]">
                Realizar pagamento
            </button></NavLink>
        </>
    )
}