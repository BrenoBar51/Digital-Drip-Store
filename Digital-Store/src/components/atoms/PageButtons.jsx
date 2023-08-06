export default function PageButtons(){
    return(
        <div>
            <ul className="w-full flex justify-start space-x-11 ml-2 font-bold">
                <li className="text-[#8a8888] hover:text-[#d40063] hover:underline cursor-pointer">Home</li>
                <li className="text-[#8a8888] hover:text-[#d40063] hover:underline cursor-pointer">Produtos</li>
                <li className="text-[#8a8888] hover:text-[#d40063] hover:underline cursor-pointer">Categorias</li>
                <li className="text-[#8a8888] hover:text-[#d40063] hover:underline cursor-pointer">Meus Pedidos</li>
            </ul>
        </div>
    )
}