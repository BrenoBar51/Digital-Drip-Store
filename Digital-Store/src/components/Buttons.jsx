import { NavLink } from "react-router-dom";

export default function Buttons(props){
    return(
        <div className="flex min-w-fit gap-[10%]">
            <button className={`
                ${props.graybtn === 'gray' && 'text-Cinza-Escuro2 text-[14px] font-medium leading-[22px] tracking-[0.25px] underline'}
                ${props.value2 === 'Entrar' && 'text-Branbg-Branco w-[114px] h-[40px] flex-shrink-0 bg-Rosa mt-[8%] rounded-lg hover:bg-Roxo hover:transition-[2s]'}
                ${props.type === 'retangulo' && 'w-[220px] text-Branco-Cinza h-[48px] text-Branbg-Branco flex-shrink-0 bg-Rosa rounded-lg hover:bg-Roxo hover:transition-[2s]'}
                ${props.type2 === 'retangulo2' && 'w-[124px] h-[40px] text-Branco-Cinza flex-shrink-0 bg-Rosa rounded-lg hover:bg-Roxo hover:transition-[2s]'}
                ${props.edition === 'inverso' && 'rounded-lg bg-Branco text-Rosa z-20 w-[153px] h-[48px] absolute text-[16px] not-italic font-bold leading-[24px] tracking-[0.75px] text-center hover:bg-indigo-300 hover:text-Branco hover:duration-500 hover:ease-in-out duration-[1.4s]'}
                ${props.linkbtn === 'btnlink' && 'text-Rosa bg-Branco'}
                ${props.className && props.className}
            `}>
                <NavLink to={'/login'} className={({isActive}) => (isActive ? '' : '')}>
                    {props.value2b1}
                </NavLink>
                <NavLink to={'/productslist'} className={({isActive}) => (isActive ? '' : '')}>
                    {props.value3}
                </NavLink>
                {props.buyB}
                <NavLink to={'/login'} className={({isActive}) => (isActive ? '' : '')}>
                    {props.value2}
                </NavLink>
                <NavLink to={'/productslist'} className={({isActive}) => (isActive ? '' : '')}>
                    {props.value3b1}
                </NavLink>
                <NavLink to={'/precompra'} className={({isActive}) => (isActive ? 'min-w-full' : 'min-w-full')}>
                    {props.graybtnv}
                </NavLink>
                {props.texts}
            </button>
        </div>
    )
}