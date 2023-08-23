import Buttons from "../Buttons";
import MicroTitle from "../section2/MIcroTitle";

export default function TitulosAirJordans() {
    return (
        <>
            <MicroTitle className='!text-[14px] !font-bold leading-[175%]' color2='corh1s3' value3='Oferta especial'/>
            <MicroTitle className='!font-bold !leading-[50px] !tracking-[1px] text-[48px]' color='corh1s2' value3='Air Jordan edição de colecionador'/>
            <MicroTitle className='!font-normal !leading-[28px] ml-[8%] !tracking-[0.75px]' cardzint='h2s5' value3='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip' />
            <Buttons type='retangulo' value3='Ver Oferta' className='flex-shrink-0 ml-[8%]' />
        </>
    )
}