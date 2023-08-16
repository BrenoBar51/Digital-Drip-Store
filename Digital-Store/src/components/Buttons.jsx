import { NavLink } from "react-router-dom";

export default function Buttons(props){
    return(
        <div className="flex gap-x-[40px]">
            <button className="text-[#474747] underline ">
                <NavLink to={'/signup'} className={({isActive}) => (isActive ? '' : '')}>
                    {props.valueB1}
                </NavLink>
            </button>
            <button className={`
                ${props.value2 === 'Entrar' && 'text-[#ffffff] w-[114px] h-[40px] flex-shrink-0 bg-[#C92071]  rounded-lg hover:bg-[#c92085] hover:transition-[2s]'}
                ${props.type === 'retangulo' && 'w-[220px] h-[48px] text-[#ffffff] flex-shrink-0 bg-[#C92071]  rounded-lg hover:bg-[#c92085] hover:transition-[2s]'}
                ${props.edition === 'inverso' && 'rounded-lg bg-[#ffffff] text-[#c92071] z-20 w-[153px] h-[48px] absolute text-[16px] not-italic font-bold leading-[24px] tracking-[0.75px] text-center hover:bg-indigo-300 hover:text-[#fff] hover:duration-500 hover:ease-in-out duration-[1.4s]'}
                ${props.linkbtn === 'btnlink' && 'text-[#c92071] bg-[#f9f8fe]'}
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
            </button>
        </div>
    )
}