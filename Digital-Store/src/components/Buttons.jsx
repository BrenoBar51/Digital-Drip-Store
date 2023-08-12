export default function Buttons(props){
    return(
        <div className="flex gap-x-[40px]">
            <button className="text-[#474747] underline">
                {props.value}
            </button>
            <button className={`w-[114px] h-[40px] flex-shrink-0 bg-[#C92071] text-[#f5f5f5] rounded-lg hover:bg-[#c92085] hover:transition-[2s]

                ${props.type === 'retangulo' && 'w-[220px] h-[48px]'}
            `}>
                <a href="http://localhost:5173/login">{props.value2}</a>
                {props.value3}
            </button>
        </div>
    )
}