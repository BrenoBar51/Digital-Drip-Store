import Buttons from "./Buttons";
import Carrinho from "./Carrinho";
import Logo from "./Logo";
import PageButtons from "./PageButtons";
import SearchBar from "./SearchBar";

export default function NavBar(){
    return (
        <>
            <div className="bg-white justify-center">
                <div className="ml-[5%] mt-[3%] flex space-x-[12%] justify-center">
                    <Logo />
                    <SearchBar />
                    <Buttons value='Cadastre-se' value2='Entrar'/>
                    <Carrinho />
                </div>
            </div>
            <div className="ml-[7%] mt-[4%] flex space-x-20 justify-start">
                <PageButtons />
            </div>
        </>
    )
}