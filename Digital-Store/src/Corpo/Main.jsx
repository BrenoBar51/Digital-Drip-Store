import Carrossel from "../components/Carrossel";
import TitulosMain from "../components/section 4/TitulosMain";

import CardThree from "../components/section2/CardsThree";
import ColectionCards from "../components/section2/ColectionCards";

import AirJordanPage from "../components/section 4/AirJordanPage";
import TableCards from "../components/section3/TableCards";
 


export default function Main() {
    return (
        <main className="flex flex-col min-w-fit h-full bg-[#F9F8FE] box-border">
            <section className="flex w-full h-611 p-4 bg-[#f5f5f5]">
                <TitulosMain />
                <Carrossel />
            </section>
            <section className="w-full h-[730px] bg-[#F9F8FE]">
                <CardThree />
                <ColectionCards />
            </section>
            <section className="w-full h-[1070px] bg-[#f9f8fe]">
                <TableCards />
            </section>
            <section className="w-full bg-[#fff] h-[700px]">
                <AirJordanPage />
            </section>
        </main>
    )
}