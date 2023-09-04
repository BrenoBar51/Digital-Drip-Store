import { NavLink } from 'react-router-dom'
import Buttons from '../Buttons'

export default function ThreeCards(props) {
    return (
        <>
                <div className={` ${props.cardS2 === 'ajustes' && 'rounded-[8px] w-[385px] h-[241px] bg-[#D8E3F2] relative box-border overflow-hidden'}`}>
                    <img className={`${props.imgs === 'imgShop' && 'rotate-[-19deg] left-[160px] top-[55px] flex justify-end w-[355.679px] h-[300px] absolute  left-2"'}
                        ${props.imgs2 === 'mod2' && 'left-[120px] absolute'}
                        ${props.img3 === 'mod3' && 'left-[180px] top-[30px] rotate-[24deg] w-[222px] h-[262px] absolute'}
                    `} src={`${props.url}`} alt="" />
                        <div className={`w-[405px] h-[251px] flex flex-col gap-y-5 p-6 relative`}>
                            <span className={`${props.span === 'spanbt' && 'w-[100px] h-[32px] bg-[#E7FF86] py-[5px] px-[15px]  inline-flex items-center rounded-3xl text-[14px] not-italic font-bold leading-[22px] tracking-[0.75px]  '}`}>
                                {props.name}
                            </span>
                            <h1 className={`${props.subt === 'cardtil' && 'text-[32px] w-[182px] z-20 h-[72] text-[#1f1f1f] not-italic font-extrabold leading-[36px] tracking-[0.5px]'}`}>
                                {props.name2}
                            </h1>
                            <NavLink to={'/productslist'} className={({isActive}) => (isActive ? '' : '')}>
                                <Buttons buyB='Comprar' edition='inverso'/>
                            </NavLink>
                        </div>
                </div>
        </>
    )
}