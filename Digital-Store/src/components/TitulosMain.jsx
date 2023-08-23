import Buttons from "./Buttons";

export default function TitulosMain(props) {
    return (
        <section className="flex flex-col gap-8 md:py-28 px-4 md:px-14 ]">
             <p className="w-full  text-[#f6aa1c] text-base leading-6 tracking-[0.75px] font-bold md:w-[285px]">{`Melhores ofertas personalizadas`}</p>
             <h1 className="w-full  text-[42px] md:text-[64px] text-[#1f1f1f] not-italic font-extrabold leading-[44px] md:leading-[66px] tracking-[0.5px]">Queima de estoque Nike 🔥</h1>
             <p className="w-full text-[14px] md:text-[18px] not-italic font-normal leading-6 md:leading-9 tracking-[0.75px]">Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.</p>
             <div className="w-full md:w-auto">
                <Buttons value3='Ver oferta' type='retangulo' />
             </div>
        </section>
    )
}