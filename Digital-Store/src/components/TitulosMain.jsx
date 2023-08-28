import Buttons from "./Buttons";

export default function TitulosMain(props) {
    return (
        <section className="flex flex-col min-w-fit ml-[15%] mt-[4%] space-y-[2%] sm:justify-center sm:ml-[12%] sm:mt-[4%] sm:space-y-[2%] md:ml-[11.5%] md:mt-[13%] md:space-y-[5%] lg:ml-[12%] lg:mt-[13%] lg:space-y-[5%]">
             <p className="w-full text-[#C92071] sm:text-[#C92071] md:text-[#f6aa1c] lg:text-[#f6aa1c] xl:text-[#f6aa1c] text-base leading-6 tracking-[0.75px] font-bold md:w-[285px]">{`Melhores ofertas personalizadas`}</p>
             <h1 className="w-full text-[42px] md:text-[64px] text-[#1f1f1f] not-italic font-extrabold leading-[44px] md:leading-[66px] tracking-[0.5px]">Queima de estoque Nike🔥</h1>
             <p className="w-full text-[14px] md:text-[18px] not-italic font-normal leading-6 md:leading-9 tracking-[0.75px]">Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.</p>
             <div className="w-full md:w-auto">
                <Buttons value3='Ver oferta' type='retangulo' />
             </div>
        </section>
    )
}