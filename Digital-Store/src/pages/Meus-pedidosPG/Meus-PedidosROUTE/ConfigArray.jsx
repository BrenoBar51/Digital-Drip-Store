
export function ConfigArray(props) {
    return (
        <>
            <div className="w-[830px] border-b-2 border-b-[#ccc] gap-x-5 pt-6 flex h-[111.17px]">
                   <div className={`w-[71.17px] h-[60px] `}>
                        <img src={props.url2} alt="" className="w-[71.17px] bg-[#E2E3FF] h-[60px]" />
                   </div>
            <div className={`w-[420.82px] flex flex-col gap-y-2  h-[40px]`}>
                {props.SeriesNumber ? (
                    <span className="text-[10px] text-[#8f8f8f] not-italic font-medium  tracking-[1px]">
                        pedido nº {props.ProductSerieNumber}
                    </span>
                ) : ( 
                    <span className="text-[10px] text-[#8f8f8f] not-italic font-medium tracking-[1px]">pedido nº {props.ProductSerieNumber}</span>
                 )}
                <span className="text-[#1f1f1f] text-[16px] not-italic font-bold leading-[18px] tracking-[0.75px]">{props.ProductName}</span> 

            </div>
            <div className="w-[300px] h-[58px] items-center flex justify-end">
                {props.Transito ? (
                    <span className="text-[#f6aa1c] text-[14px] not-italic font-bold leading-[22px] tracking-[0.75px]">{props.Transito}Produto em Trânsito</span>
                ) : ( '' )}
                {props.Finalizado ? (
                    <span className="text-[#8f8f8f] text-[14px] not-italic font-bold leading-[22px] tracking-[0.75px]">{props.Transito}Finalizado</span>
                ) : ( '' )}
                {props.Cancelado ? (
                    <span className="text-[#EE4266] text-[14px] not-italic font-bold leading-[22px] tracking-[0.75px]">{props.Transito}Cancelado</span>
                ) : ( '' )}
            </div>
            </div>
        </>  
        
    )
}