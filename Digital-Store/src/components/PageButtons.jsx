import { NavLink } from "react-router-dom";

export default function PageButtons(){
    return(
        <div>
            <ul className="flex gap-8">
                <li className="cursor-pointer text-[#474747] font-bold hover:text-[#C92071] hover:underline"
                
                >
                    <NavLink to='/' className={({isActive}) => (isActive ? 'text-[#c92071] underline' : '')}>
                        Home
                    </NavLink>
                </li> 
                <li className="cursor-pointer text-[#474747] font-bold hover:text-[#C92071] hover:underline"
               
                >
                    <NavLink to='/productsList' className={({isActive}) => (isActive ? 'text-[#c92071] underline' : '')}>
                        Produtos
                    </NavLink>
                </li> 
                <li className="cursor-pointer text-[#474747] font-bold hover:text-[#C92071] hover:underline">Categorias</li> 
                <li className="cursor-pointer text-[#474747] font-bold hover:text-[#C92071] hover:underline">Meus Produtos</li>
            </ul>
        </div>
    )
}