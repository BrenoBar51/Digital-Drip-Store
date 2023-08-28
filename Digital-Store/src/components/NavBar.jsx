import Input from "./Inputs";
import Logo from "./Logo";
import PageButtons from "./PageButtons";
import SearchBar from "./SearchBar";


export default function NavBar(){
    return (
        <>
            <nav className="w-full justify-around h-full p-8 px-24 ring-2 flex md:gap-x-7">
                <div className="flex md:hidden w-12 h-full  items-start justify-center">
                    <img src="src\assets\image\menu-regular-36.png" alt="" />                
                </div>
                <div className="flex items-center justify-center w-64  h-full">
                    <Logo />
                </div>
                <div className="flex md:w-[560px]">
                    <SearchBar />
                </div>
            </nav>
            <div className="md:ml-[7%] md:mt-[4%] flex flex-col md:flex-row  md:space-x-20 md:justify-start pb-[2%]">
                <PageButtons />
            </div>
        </>
    )
}