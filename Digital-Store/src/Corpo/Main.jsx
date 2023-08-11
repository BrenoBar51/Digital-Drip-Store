import Carrossel from "../components/Carrossel";
import TitulosMain from "../components/TitulosMain";

import CardThree from "../components/section2/CardsThree";
import ColectionCards from "../components/section2/ColectionCards";

import AirJordanPage from "./AirJordanPage";
 


export default function Main() {
    return (
        <main className="flex flex-col w-full h-full bg-[#F9F8FE]  p-4  box-border">
            <section className="flex w-full h-611 bg-[#f5f5f5]">
                <TitulosMain />
                <Carrossel />
            </section>
            <section className="w-full  h-[1000px] bg-[#F9F8FE]">
                <CardThree />
                <ColectionCards />
            </section>
            
        </main>
    )
}