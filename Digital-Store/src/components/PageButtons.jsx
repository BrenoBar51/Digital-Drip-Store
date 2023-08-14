export default function PageButtons(){
    return(
        <div>
            <ul className="flex gap-8">
                <li className="cursor-pointer text-[#474747] font-bold hover:text-[#C92071] hover:underline"
                
                >
                    <a href="http://localhost:5173/">Home</a>
                </li> 
                <li className="cursor-pointer text-[#474747] font-bold hover:text-[#C92071] hover:underline"
               
                >
                    <a href="http://localhost:5173/productslist">Produtos</a>
                </li> 
                <li className="cursor-pointer text-[#474747] font-bold hover:text-[#C92071] hover:underline">Categorias</li> 
                <li className="cursor-pointer text-[#474747] font-bold hover:text-[#C92071] hover:underline">Meus Produtos</li>
            </ul>
        </div>
    )
}