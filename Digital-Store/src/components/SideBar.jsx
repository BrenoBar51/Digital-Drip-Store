import Checkbox from "./InputCheckbox";
import InputRadio from "./InputRadio";

export default function SideBar(){
    return(
        <>
        <div>
            <h2 className="w-20 font-bold text-base text-slate-950">Filtrar por</h2>
            <hr className="mt-[5%] mb-[5%] w-60 "/>
            <p className="font-bold text-sm mb-[5%]">Marca</p>
            <ul>
                <li className="flex gap-[1%] text-sm"><Checkbox /> Addidas</li>
                <li className="flex gap-[1%] text-sm"><Checkbox /> Calenciaga</li>
                <li className="flex gap-[1%] text-sm"><Checkbox /> K-Swiss</li>
                <li className="flex gap-[1%] text-sm"><Checkbox /> Nike</li>
                <li className="flex gap-[1%] text-sm"><Checkbox /> Puma</li>
            </ul>
            <p className="mt-[5%] mb-[5%] font-bold text-sm">Categoria</p>
            <ul>
                <li className="flex gap-[1%] text-sm"><Checkbox /> Esporte e Lazer</li>
                <li className="flex gap-[1%] text-sm"><Checkbox /> Casual</li>
                <li className="flex gap-[1%] text-sm"><Checkbox /> Utilitário</li>
                <li className="flex gap-[1%] text-sm"><Checkbox /> Corrida</li>
            </ul>
            <p className="mt-[5%] mb-[5%] font-bold text-sm">Gênero</p>
            <ul>
                <li className="flex gap-[1%] text-sm"><Checkbox /> Masculino</li>
                <li className="flex gap-[1%] text-sm"><Checkbox /> Feminino</li>
                <li className="flex gap-[1%] text-sm"><Checkbox /> Unissex</li>
            </ul>
            <p className="mt-[5%] mb-[5%] font-bold text-sm">Estado</p>
            <ul>
                <li className="flex gap-[1%] text-sm"><InputRadio /> Novo</li>
                <li className="flex gap-[1%] text-sm"><InputRadio/> Usado</li>
            </ul>
        </div>
        </>
    )
}