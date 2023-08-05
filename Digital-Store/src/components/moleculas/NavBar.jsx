import Carrinho from "../atoms/Carrinho";
import Logo from "../atoms/Logo";
import SearchBar from "../atoms/SearchBar";
import Buttons from "../atoms/Buttons";

export default function NavBar(){
    return(
        <div>
            <nav className="h-24 w-full flex justify-start bg-white">
                <ul className="w-full flex justify-center space-x-48">
                    <li className="cursor-pointer"><Logo /></li>
                    <li className="cursor-pointer"><SearchBar /></li>
                    <li><Buttons /></li>
                    <li className="cursor-pointer"><Carrinho /></li>
                </ul>
            </nav>
            <nav className="h-16 w-full flex justify-start bg-white">
                <ul className="w-full flex justify-start space-x-11 ml-2">
                    <li className="text-[#8a8888] cursor-pointer">Home</li>
                    <li className="text-[#8a8888] cursor-pointer">Produtos</li>
                    <li className="text-[#8a8888] cursor-pointer">Categorias</li>
                    <li className="text-[#8a8888] cursor-pointer">Meus Pedidos</li>
                </ul>
            </nav>
        </div>
    )
}