import Input from "../components/Inputs";

export default function SearchBar(){
    return(
        <div className="cursor-pointer relative w-[520px]">
            <Input type={'text'} placeholder={'Pesquisar produtos...'} />
            <button className="absolute z-10 border-none bg-transparent outline-none top-4 right-2" type="submit">
                <box-icon name='search' color='#9d9d9d' ></box-icon>
            </button>
        </div>
    )
}