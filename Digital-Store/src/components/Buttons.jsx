export default function Buttons(props){
    return(
        <div className="flex gap-x-[50px]">
            <button className="w-[220px] h-[48px] flex-shrink-0 bg-[#C92071] text-[#f5f5f5] rounded-lg hover:bg-[#c92085] hover:transition-[2s]">
                {props.value}
                {props.value2}
            </button>
        </div>
    )
}