import Buttons from "./Buttons";
import Carrossel from "./Carrossel";
import MicroTitle from "./section2/MIcroTitle";

export default function TitulosMain(props){
    return (
        <>
            <div className="w-[515px] py-[124px] h-full flex flex-col gap-y-[20px] ">
                <MicroTitle mainh1='' value3='Melhores ofertas personalizadas'/>
                <MicroTitle microtitu='h2s3' value3='Queima de estoque Nike 🔥' className='!font-extrabold !not-italic !text-[64px] 
                !leading-[66px] !tracking-[1px]'/>
                <MicroTitle microsubi='h2s4' className='!text-[18px] !leading-[34px] !tracking-[0.75px]' value3='Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.' />
                <MicroTitle />
                <Buttons type='retangulo' value3='Ver Ofertas' />
            </div>
            <Carrossel />
        </>
    )
}