import Carrossel from "../components/Carrossel";
import TitulosMain from "../components/TitulosMain";
import CardThree from "../components/section2/CardsThree";

export default function Main() {
    return (
        <main className="flex flex-col w-full h-full   p-4 bg-[#f5f5f5] box-border">
            <section className="flex w-full h-611">
                <TitulosMain />
                <Carrossel />
            </section>
            <section className="w-full h-[1000px]">
                <CardThree />
            </section>

        </main>
    )
}