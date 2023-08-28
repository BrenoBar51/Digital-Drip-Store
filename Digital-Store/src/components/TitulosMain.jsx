import Buttons from "./Buttons";

export default function TitulosMain(props){
    return (
        <section className="flex flex-col min-w-fit pt-[4%] space-y-[2%] sm:justify-center sm:pt-[4%] sm:space-y-[2%] md:pl-[11.5%] md:pt-[13%] md:space-y-[5%] lg:pl-[12%] lg:pt-[13%] lg:space-y-[5%]">
             <p className="w-full text-Rosa sm:text-Rosa md:text-Amarelo lg:text-Amarelo xl:text-Amarelo text-base leading-6 tracking-[0.75px] font-bold md:w-[285px]">{`Melhores ofertas personalizadas`}</p>
             <h1 className="min-w-fit text-[42px] md:text-[64px] text-Cinza-Escuro not-italic font-extrabold leading-[44px] md:leading-[66px] tracking-[0.5px]">Queima de estoque Nike 🔥</h1>
             <p className="w-full text-[14px] md:text-[18px] not-italic font-normal leading-6 md:leading-9 tracking-[0.75px]">Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.</p>
             <div className="w-full md:w-auto">
                <Buttons value3='Ver oferta' type='retangulo' />
             </div>
        </section>
    )
}