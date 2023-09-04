import { NavLink } from "react-router-dom";
import Footer from "../../../Corpo/Footer";
import Header from "../../../Corpo/Header";
import MicroTitle from "../../../components/section2/MIcroTitle";
import ObjInfo from "./ObjInfo";

export default function Meuspedidos() {
    return (
        <>
            <Header />
            <section className="w-screen h-full  flex justify-center items-center p-16 bg-[#F9F8FE] ">
                <div className="h-[480px] w-full flex justify-center gap-x-[16px]">
                    <div className="
                        md:w-[334px] md:h-[288px] hidden bg-[#fff] rounded-[4px] p-[30px]  md:flex flex-col items-start gap-[20px]"
                        >
                            <MicroTitle microsubi='h2s4' value3='Meu Perfil ' className='!font-bold leading-[22px] tracking-[.25px] border-b-2 h-16  w-full border-[#ccc] cursor-pointer' />
                            <NavLink  to='/pedidosroutes' className={({IsActive}) => (IsActive ? '' : 'font-medium not-italic leading-[22px] border-b-2 h-16  w-full tracking-[0.25px] border-[#ccc] cursor-pointer')}>
                                <MicroTitle microsubi='h2s4' value3='Meus Pedidos '/>
                            </NavLink>      
                            <MicroTitle microsubi='h2s4' value3='Minhas informações ' className='!font-bold text-[#c92071] border-b-2 h-16  w-full border-[#ccc] tracking-[0.25px] cursor-pointer' />
                            <MicroTitle microsubi='h2s4' value3='Métodos de Pagamentos ' className='!font-medium tracking-[0.25px] border-b-2 border-[#ccc]  h-16  w-full cursor-pointer' />
                    </div>
                    <ObjInfo />                       
                </div>
            </section>   
            <Footer />
        </>
    )
}