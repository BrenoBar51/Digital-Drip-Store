import { Link, NavLink } from "react-router-dom";
import Buttons from "./Buttons";
import Logo from "./Logo";
import PageButtons from "./PageButtons";
import SearchBar from "./SearchBar";
import CartIcon from "./CartPoPup/CartPopup";

export default function NavBar(){
    return (
        <>
            <div className="bg-white justify-center">
                <div className="md:ml-[5%] md:mt-[3%] flex md:gap-[4%] justify-center">
                    <NavLink to={'/'} className={({isActive}) => (isActive ? '' : '')}>
                        <Logo /> 
                    </NavLink>
                    <SearchBar />
                    <Buttons  graybtn='gray' graybtnv='cadastra-se'/>
                    <Buttons  value2='Entrar'/>
                    <CartIcon />
                </div>
            </div>
            <div className="md:ml-[7%] md:mt-[4%] flex flex-col md:flex-row  md:space-x-20 md:justify-start pb-[2%]">
                <PageButtons />
            </div>
        </>
    )
}