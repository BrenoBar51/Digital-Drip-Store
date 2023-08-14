export default function FiveCardsIcons(props) {
    return (
        <>
            <div className={`
                ${props.Fcards === 'Five' && 'inline-flex bg-[#fff] mt-2 w-[104px] h-[104px] items-center justify-center p-[20px] gap-[10px] rounded-full shadow-[0_4px_25px_15px_rgba(0,0,0,0.05)]'}            
            `}>
                <img src={props.icones} alt="" />
            </div>
        </>
    )
}