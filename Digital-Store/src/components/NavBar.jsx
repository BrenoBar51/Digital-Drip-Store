import Buttons from "./Buttons";
import Carrinho from "./Carrinho";
import Logo from "./Logo";
import PageButtons from "./PageButtons";
import SearchBar from "./SearchBar";

export default function NavBar(){
    return(
<<<<<<< HEAD:Digital-Store/src/components/Corpo/NavBar.jsx
        <div className="bg-white justify-center">
            <div className="flex space-x-44 m-8 justify-center mb-12">
                <Logo />
                <SearchBar />
                <Buttons />
                <Carrinho />
            </div>
            <div className="flex space-x-16 justify-start">
                <PageButtons />
            </div>
=======
        <div className="flex space-x-20 m-8">
            <Logo />
            <SearchBar />
            <Buttons />
            <Carrinho />
>>>>>>> 9d5716738d8ef817111f3efab062e3185cc0b053:Digital-Store/src/components/NavBar.jsx
        </div>
    )
}