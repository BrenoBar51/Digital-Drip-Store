export default function SearchBar(){
    return(
        <div className="flex justify-center">
            <div>
                <input className="w-full" type="text" name="search" id="search" placeholder="Pesquisar produto..." />
            </div>
            <div>
                <box-icon name='search' color='#8a8888' ></box-icon>
            </div>
        </div>
    )
}