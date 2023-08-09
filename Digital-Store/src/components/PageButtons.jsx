export default function PageButtons(){
    return(
        <div>
            <ul className="flex gap-8">
                <li className="cursor-pointer text-[#474747] font-bold hover:text-[#C92071] hover:underline">Home</li> 
                <li className="cursor-pointer text-[#474747] font-bold hover:text-[#C92071] hover:underline">Produtos</li> 
                <li className="cursor-pointer text-[#474747] font-bold hover:text-[#C92071] hover:underline">Categorias</li> 
                <li className="cursor-pointer text-[#474747] font-bold hover:text-[#C92071] hover:underline">Meus Produtos</li>
            </ul>
        </div>
    )
}