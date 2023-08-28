import Input from "../components/Inputs";

export default function SearchBar(){
    return(
        <>
            <div className="cursor-pointer hidden md:flex md:w-[32.5rem] lg:w-[32.5rem]">
                <Input type={'text'} placeholder={'Pesquisar produtos...'} />
            </div>
            <div className="cursor-pointer flex justify-start w-[40px] h-full rounded-r-md md:bg-gray-100 gap-x-10 items-center md:items-center">
                <img src="src\assets\image\Search.png" className="w-10 h-6 md:w-[18px] md:h-[19px]" alt="" />
            </div>
        </>
    )
}