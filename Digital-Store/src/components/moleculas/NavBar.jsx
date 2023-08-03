import Buttons from "../atoms/Buttons";
import Carrinho from "../atoms/Carrinho";
import Logo from "../atoms/Logo";
import SearchBar from "../atoms/SearchBar";

export default function NavBar(){
    return(
        <nav className="h-16 w-full flex justify-start bg-white">
            <ul className="flex justify-center">
                <li className="px-20"><Logo /></li>
                <li className="px-20"><SearchBar /></li>
                <li className="px-20"><Buttons /></li>
                <li className="px-20"><Carrinho /></li>
            </ul>
        </nav>
    )
}