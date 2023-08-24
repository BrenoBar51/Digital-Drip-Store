import Input from "../components/Inputs";

export default function SearchBar(){
    return(
        <div className="cursor-pointer relative sm:w-[16.3rem] md:w-[24.4rem] lg:w-[32.5rem]">
            <Input type={'text'} placeholder={'Pesquisar produtos...'} />
            <button className="absolute z-10 border-none bg-transparent outline-none top-4 right-2" type="submit">
                <box-icon name='search' color='#9d9d9d' ></box-icon>
            </button>
        </div>
    )
}