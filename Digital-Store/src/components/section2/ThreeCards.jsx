export default function ThreeCards(props) {
    return (
        <>
           <h1 className={`
                w-[285px] h-[24px]

                ${props.color === 'corh1s2' && 'text-[#474747] text-[24px] not-italic font-bold leading-[24px] tracking-[0.75px]'}
           `}>
                
                {props.value3}

           </h1>
        </>
    )
}