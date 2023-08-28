import Carrossel from "../components/Carrossel";
import CardThree from "../components/section2/CardsThree";
import ColectionCards from "../components/section2/ColectionCards";
import AirJordanPage from "../components/section 4/AirJordanPage";
import TableCards from "../components/section3/TableCards";
import TitulosMain from "../components/TitulosMain";

export default function Main() {
    return (
        <main className="flex flex-col min-w-fit h-fit bg-[#F9F8FE] box-border">
            <section className="flex flex-col md:flex-row w-full h-fit p-4 bg-[#f5f5f5]">
                <div className="ml-[3%] md:w-fit md:ml-[0%] sm:ml-[0%] lg:ml-0">
                    <TitulosMain />
                </div>
                <div className="ml-[3%] md:w-fit md:ml-[0%] sm:ml-[0%] lg:ml-0">
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