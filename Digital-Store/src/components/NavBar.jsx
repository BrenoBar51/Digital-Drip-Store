import Input from "./Inputs";
import Logo from "./Logo";
import PageButtons from "./PageButtons";
import SearchBar from "./SearchBar";


export default function NavBar(){
    return (
        <>
            <nav className="w-full gap-x-24 md:justify-normal h-full p-[20px] md:p-8 md:px-24 ring-2 flex md:gap-x-7">
                <div className="flex md:hidden w-12 h-full  items-start justify-center">
                    <img src="src\assets\image\menu-regular-36.png" alt="" />                
                </div>
                <div className="flex items-center justify-center w-64  h-full">
                    <Logo />
                </div>
                <div className="flex md:w-[599px] md:gap-x-0 sm:gap-x-4">
                    <SearchBar />
                    <div className="w-full md:hidden md:bg-[#ffffff] flex justify-end items-center h-full">
                        <img src="src\assets\image\Buy.png" className="md:w-[28px] md:h-[28px]" alt="" />
                    </div>
                </div>
            </nav>
            <div className="hidden md:ml-[7%] md:mt-[4%] md:flex flex-col md:flex-row  md:space-x-20 md:justify-start pb-[2%]">
                <PageButtons />
            </div>
        </>
    )
}