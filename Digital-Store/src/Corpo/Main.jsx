import CardThree from "../components/section2/CardsThree";
import ColectionCards from "../components/section2/ColectionCards";
import AirJordanPage from "../components/section 4/AirJordanPage";
import TableCards from "../components/section3/TableCards";
import TitulosMain from "../components/TitulosMain";

export default function Main() {
    return (
        <main className="flex flex-col min-w-fit h-full bg-Branco-gelo1 box-border">
            <section className="flex flex-col-reverse items-center md:items-start md:flex-row w-full justify-evenly mb-2 h-full  bg-Branco-Cinza">
                <TitulosMain />
            </section>
            <section className="w-full bg-Branco-gelo1">
                <CardThree />
                <ColectionCards />
            </section>
            <section className="w-full bg-Branco-gelo1">
                <TableCards />
            </section>
            <section className="w-full bg-Branco-gelo1">
                <AirJordanPage />
            </section>
        </main>
    )
}