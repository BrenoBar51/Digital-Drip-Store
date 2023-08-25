import MicroTitle from "./MIcroTitle";

export default function FiveCardsIcons(props) {
    return (
        <section className="flex flex-col w-full h-full gap-y-4">
            <div className={`
                ${props.Fcards === 'Five' && 'inline-flex bg-[#fff]  w-[104px] h-[104px] items-center justify-center p-[20px]  rounded-full shadow-[0_4px_25px_15px_rgba(0,0,0,0.05)]'}            
            `}>
                <img src={props.icones} alt="" className="w-full h-full" />
            </div>
            <div className={`w-full h-full flex justify-center
            ext-[14px] not-italic font-bold leading-[22px] tracking-[0.75px]
                ${props.titulos === 'h1' && <MicroTitle microtitu='h2s3' />}
            `}>
                {props.valor3}
            </div>
        </section>
    )
}