export default function SearchBar(){
    return(
        <div className="flex cursor-pointer">
            <input type="text" placeholder="Pesquisar produtos..." />
            <box-icon name='search'></box-icon>
        </div>
    )
}