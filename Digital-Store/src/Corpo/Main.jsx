import Carrossel from "../components/Carrossel";
import TitulosMain from "../components/TitulosMain";
import AirJordanPage from "./AirJordanPage";
 

export default function Main() {
    return (
        <main className="flex w-full h-[681px]   p-4 bg-[#f5f5f5]">
            <TitulosMain />
            <Carrossel />
        </main>
    )
}