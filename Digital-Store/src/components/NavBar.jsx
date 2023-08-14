import { Link, NavLink } from "react-router-dom";
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
                    <NavLink to={'/home'} className={({isActive}) => (isActive ? '' : '')}>
                        <Logo /> 
                    </NavLink>
                    <SearchBar />
                    <Buttons valueB1='Cadastre-se' value2='Entrar'/>
                    <Carrinho />
                </div>
            </div>
            <div className="ml-[7%] mt-[4%] flex space-x-20 justify-start pb-6">
                <PageButtons />
            </div>
        </>
    )
}