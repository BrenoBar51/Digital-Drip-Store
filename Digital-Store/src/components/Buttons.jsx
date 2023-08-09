export default function Buttons(props){
    return(
        <div className="flex gap-x-[40px]">
            <button className="text-[#474747] underline">
                {props.value}
            </button>
            <button className={`w-[114px] h-[40px] flex-shrink-0 bg-[#C92071] text-[#f5f5f5] rounded-lg hover:bg-[#c92085] hover:transition-[2s]

                ${props.type === 'retangulo' && 'w-[220px] h-[48px]'}
                ${props.edition === 'inverso' && 'bg-[#ffffff] text-[#c92071] z-20 w-[153px] h-[48px] absolute text-[16px] not-italic font-bold leading-[24px] tracking-[0.75px] text-center'}
            `}>
                {props.value2}
                {props.value3}
                {props.buyB}
            </button>
        </div>
    )
}