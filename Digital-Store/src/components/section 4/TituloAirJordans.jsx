 import ButtonsAirjordans from "./ButtonsAirJordans";

export default function TitulosAirJordans(Props) {
    return(
        <>
            <section  >
                <h5 className="   text-[#C92071] not-italic font-extrabold leading-[57px] tracking-[0.4px]">Oferta Especial</h5>
                <h1 className="text-[44px]   text-[#474747] not-italic font-extrabold leading-[66px] tracking-[0.5px]">Air Jordan edição de colecionador</h1>
                <p className="w-[495px] text-[15px] not-italic font-normal leading-9 tracking-[0. px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br /> eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim<br /> ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
             <div className="relative top-8 right-11">   <ButtonsAirjordans value3='Ver ofertas' type='retangulo' /> </div>
            </section>
        </>
    )
}