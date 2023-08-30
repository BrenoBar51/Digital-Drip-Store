import Buttons from "./Buttons";
import Logo from "./Logo";
import PageButtons from "./PageButtons";
import SearchBar from "./SearchBar";
import CartPopup from "./CartPoPup/CartPopup"

export default function NavBar() {
  return (
    <>
      <nav className="w-full items-center justify-evenly h-full p-[20px] md:p-8 md:px-12 flex md:gap-x-0">
        <div className="flex md:hidden w-12 h-full  items-start justify-center">
          <img src="src\assets\image\menu-regular-36.png" alt="" />
        </div>
        <div className="flex items-center justify-center min-w-fit  h-full">
          <Logo />
        </div>
        <div className="flex md:w-[599px]   md:gap-x-0 sm:gap-x-4">
          <SearchBar />
          <div className="w-full md:hidden md:bg-Branco flex justify-end items-center h-full">
            <img src="src\assets\image\Buy.png" className="md:w-[28px] md:h-[28px]" alt="" />
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
      <div className="w-full h-full p-8 px-28 md:flex hidden">
        <PageButtons />
      </div>
    </>
  );
}