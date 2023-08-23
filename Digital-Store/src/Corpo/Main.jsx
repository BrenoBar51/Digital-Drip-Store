import Carrossel from "../components/Carrossel";

import CardThree from "../components/section2/CardsThree";
import ColectionCards from "../components/section2/ColectionCards";

import AirJordanPage from "../components/section 4/AirJordanPage";
import TableCards from "../components/section3/TableCards";
import TitulosMain from "../components/TitulosMain";
 


export default function Main() {
    return (
        <main className="flex flex-col min-w-fit h-full bg-[#F9F8FE] box-border">
            <section className="flex flex-col md:flex-row w-full h-611 p-4 bg-[#f5f5f5]">
                <div className="md:w-1/2">
                    <TitulosMain />
                </div>
                <div className="md:w-1/2">
                    <Carrossel />
                </div>
            </section>
            <section className="w-full  bg-[#F9F8FE]">
                <CardThree />
                <ColectionCards />
            </section>
            <section className="w-full bg-[#f9f8fe]">
                <TableCards />
            </section>
            <section className="w-full bg-[#fff]">
                <AirJordanPage />
            </section>
        </main>
    )
}