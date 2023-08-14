export default function MicroTitle(props) {
    return (
        <>
            <h1 className={`
                ${props.color === 'corh1s2' && 'text-[#474747] text-[24px] not-italic ml-[45px] font-bold leading-[24px] tracking-[0.75px]'}
                ${props.h2s2pt2 === 'h2s2' && 'text-[#474747] text-[24px] not-italic font-bold leading-[24px] tracking-[0.75px]'} 
                ${props.microtitu === 'h2s3' && 'text-[#474747] text-[14px] not-italic font-bold leading-[22px] tracking-[0.75px]'} 
           `}>
                
                {props.value3}
                {props.h2camisas}

           </h1>
        </>
    )
}