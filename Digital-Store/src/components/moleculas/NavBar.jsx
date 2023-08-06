import Carrinho from "../atoms/Carrinho";
import Logo from "../atoms/Logo";
import SearchBar from "../atoms/SearchBar";
import Buttons from "../atoms/Buttons";
import PageButtons from "../atoms/PageButtons";

export default function NavBar(){
    return(
        <div className="">
            <nav className="h-24 w-full mt-8 flex justify-start bg-white">
                <ul className="w-full flex justify-center space-x-52">
                    <li className="cursor-pointer"><Logo /></li>
                    <li className="cursor-pointer"><SearchBar /></li>
                    <li><Buttons /></li>
                    <li className="cursor-pointer"><Carrinho /></li>
                </ul>
            </nav>
            <nav className="h-16 w-full ml-12 flex justify-start bg-white">
                <PageButtons />
            </nav>
        </div>
    )
}