export default function ButtonsAirjordans(props){
    return(
        <div className="flex gap-x-[40px]">
            <button className="text-[#474747] underline">
                {props.value}
            </button>
            <button className={`w-[114px] h-[40px] flex-shrink-0 bg-[#C92071]  rounded-lg hover:bg-[#c92085] hover:transition-[2s]
                ${props.value2 === 'Entrar' && 'text-[#ffffff]'}
                ${props.type === 'retangulo' && 'w-[200px] h-[40px] text-[#ffffff] '}
                ${props.edition === 'inverso' && 'bg-[#ffffff] text-[#c92071] z-20 w-[153px] h-[48px] absolute text-[16px] not-italic font-bold leading-[24px] tracking-[0.75px] text-center'}
            `}>
                {props.value2}
                {props.value3}
                {props.buyB}
            </button>
        </div>
    )
}