import Input from "../pages/SignUp/Inputs";

export default function SearchBar(){
    return(
        <div className="flex cursor-pointer">
            <Input type="text" placeholder="Pesquisar Produto..." />
            <box-icon name='search' color='#9d9d9d' ></box-icon>
        </div>
    )
}