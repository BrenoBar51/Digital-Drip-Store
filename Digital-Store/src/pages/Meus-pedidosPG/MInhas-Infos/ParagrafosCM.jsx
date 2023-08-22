export default function ParagrafosCM(props) {
    return (
        <> 
            <p className={`
                ${props.Pobj === 'objs' && 'text-[#8F8F8F] leading-[22px] font-medium not-italic text-[14px] tracking-[0.25px]'}
                ${props.className && props.className}
            `}>
                {props.paragrafo}
            </p>
        </>
    )
}