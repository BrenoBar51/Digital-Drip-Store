export default function SearchBar(){
    return(
        <>
            <input className="w-full" type="text" name="search" id="search" placeholder="Pesquise aqui um produto..." />
            <box-icon name='search' color='#8a8888' ></box-icon>
        </>
    )
}