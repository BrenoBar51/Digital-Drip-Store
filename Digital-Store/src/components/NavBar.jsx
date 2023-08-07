import Buttons from "./Buttons";
import Carrinho from "./Carrinho";
import Logo from "./Logo";
import SearchBar from "./SearchBar";

export default function NavBar(){
    return(
        <div className="flex space-x-20 m-8">
            <Logo />
            <SearchBar />
            <Buttons />
            <Carrinho />
        </div>
    )
}