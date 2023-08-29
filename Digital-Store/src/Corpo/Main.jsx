import CardThree from "../components/section2/CardsThree";
import ColectionCards from "../components/section2/ColectionCards";
import AirJordanPage from "../components/section 4/AirJordanPage";
import TableCards from "../components/section3/TableCards";
import TitulosMain from "../components/TitulosMain";

export default function Main() {
    return (
        <main className="flex flex-col min-w-fit h-full bg-Branco-Cinza box-border">
            <section className="flex flex-col-reverse md:flex-row w-full gap-x-[30px] justify-evenly mb-2 h-full  bg-Branco-Cinza">
                <TitulosMain />
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