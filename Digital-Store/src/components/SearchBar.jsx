export default function SearchBar(){
    return(
        <div className="flex cursor-pointer">
            <input className="bg-[#F5F5F5]" type="text" placeholder="Pesquisar produtos..." />
            <box-icon name='search' color='#666666'></box-icon>
        </div>
    )
}