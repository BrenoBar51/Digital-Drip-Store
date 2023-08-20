export default function MicroTitle(props) {
    return (
        <>
            <h1 className={`
                ${props.color === 'corh1s2' && 'text-[#474747] text-[24px] not-italic ml-[45px] font-bold leading-[24px] tracking-[0.75px]'}
                ${props.color2 === 'corh1s3' && 'text-[#EE4266] text-[16pxpx] not-italic ml-[45px] font-bold leading-[24px] tracking-[0.75px]'}
                ${props.h2s2pt2 === 'h2s2' && 'text-[#474747] text-[24px] not-italic font-bold leading-[24px] tracking-[0.75px]'} 
                ${props.microtitu === 'h2s3' && 'text-[#1f1f1f] text-[14px] not-italic font-bold leading-[22px] tracking-[0.75px]'} 
                ${props.h1cardzin === 'h1cdz' && 'text-[#1f1f1f] text-[16px] not-italic font-bold leading-[24px] tracking-[0.75px]'} 
                ${props.microsubi === 'h2s4' && 'text-[#474747] text-[14px] not-italic font-normal leading-[24px] tracking-[0.75px]'} 
                ${props.cardzint === 'h2s5' && 'text-[#474747] text-[16px] not-italic font-bold leading-[24px] opacity-90 tracking-[0.75px]'} 
                ${props.traços === 'traço' && 'text-[#474747] text-[12px] text-center not-italic font-normal leading-[28px] opacity-40 tracking-[0.75px] line-through '} 
           `}>
                
                {props.value3}
                {props.h2camisas}
           </h1>
        </>
    )
}