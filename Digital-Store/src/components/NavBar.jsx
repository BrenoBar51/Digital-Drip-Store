import Buttons from "./Buttons";
import Carrinho from "./Carrinho";
import Logo from "./Logo";
import PageButtons from "./PageButtons";
import SearchBar from "./SearchBar";

export default function NavBar(){
    return (
        <>
            <div className="bg-white justify-center">
            <div className="flex space-x-36 m-8 justify-center mb-12">
                <Logo />
                <SearchBar />
                <Buttons />
                <Carrinho />
            </div>
        </div>
            <div className="flex space-x-16 justify-start">
                <PageButtons />
            </div>
        </>
    )
}