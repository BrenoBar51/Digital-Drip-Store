import Buttons from "./Buttons";

export default function TitulosMain() {
    return (
        <section className="flex flex-col gap-8 py-28 px-14 ring-2">
             <p className="w-[285px] h-[24px] text-[#f6aa1c] text-base leading-6 tracking-[0.75px] font-bold">Melhores ofertas personalizadas</p>
             <h1 className="w-[510px] h-132px text-[64px] text-[#1f1f1f] not-italic font-extrabold leading-[66px] tracking-[0.5px]">Queima de estoque Nike 🔥</h1>
             <p className="w-[495px] text-[18px] not-italic font-normal leading-9 tracking-[0.75px]">Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.</p>
             <Buttons value='Ver ofertas' />
        </section>
    )
}