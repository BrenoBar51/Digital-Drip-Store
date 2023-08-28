import Carrossel from "../components/Carrossel";
import CardThree from "../components/section2/CardsThree";
import ColectionCards from "../components/section2/ColectionCards";
import AirJordanPage from "../components/section 4/AirJordanPage";
import TableCards from "../components/section3/TableCards";
import TitulosMain from "../components/TitulosMain";

export default function Main() {
    return (
        <main className="flex flex-col min-w-fit h-fit bg-Branco-Cinza box-border">
            <section className="flex flex-col md:flex-row w-full h-fit p-4 bg-Branco-Cinza">
                <div className="pl-[3%] md:w-fit md:ml-[0%] sm:ml-[0%] lg:ml-0">
                    <TitulosMain />
                </div>
                <div className="md:w-fit md:ml-[0%] sm:ml-[0%] lg:ml-0">
                    <Carrossel />
                </div>
            </section>
            <section className="w-full bg-Branco-Cinza">
                <CardThree />
                <ColectionCards />
            </section>
            <section className="w-full bg-Branco-Cinza">
                <TableCards />
            </section>
            <section className="w-full bg-Branco-Cinza">
                <AirJordanPage />
            </section>
        </main>
    )
}