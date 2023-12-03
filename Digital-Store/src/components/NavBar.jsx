import Buttons from "./Buttons";
import Logo from "./Logo";
import PageButtons from "./PageButtons";
import SearchBar from "./SearchBar";
import CartPopup from "./CartPoPup/CartPopup"
import MenuSide from "./MenuSide/MenuSide";
import img1 from '../assets/image/menu-regular-36.png';
import img2 from '../assets/image/Buy.png';
import { useState } from "react";
import { NavLink } from "react-router-dom";

function MenuPopup(props) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  
  return (
    <>
      <nav className="w-full gap-x-[20%] items-center justify-start  bg-white  md:h-full p-[20px] md:p-8 md:pl-[4.5%] flex md:gap-x-[1%]">
        <div onClick={togglePopup} className="flex md:hidden w-12 h-full  items-start justify-center">
          <img src={img1} alt="" />
        </div>
        <div className="flex items-center justify-center min-w-fit  h-full">
          <NavLink to={'/'} className={({isActive}) => (isActive ? '' : '')}>
            <Logo />
          </NavLink>
        </div>
        <div className="flex md:w-[599px]   md:gap-x-0 sm:gap-x-4">
          <SearchBar />
          <div className="w-full md:hidden md:bg-Branco flex justify-end items-center h-full">
            <img src={img2} className="md:w-[28px] md:h-[28px]" alt="" />
          </div>
        </div>
        <div className="w-[240px] h-full hidden md:flex items-center gap-x-[30px]">
            <Buttons graybtn='gray'  graybtnv='Cadastra-se' />
            <Buttons type2='retangulo2' value2b1='Entrar' />
        </div>
        <div className="w-[100px] h-full justify-center hidden md:flex">
          <CartPopup />          
        </div>
      </nav>
      {(isPopupOpen &&
          <MenuSide  />
      )}
      <div className="w-full h-full p-8 px-[4.5%] md:flex hidden">
        <PageButtons />
      </div>
    </>
  );
}
export default MenuPopup;