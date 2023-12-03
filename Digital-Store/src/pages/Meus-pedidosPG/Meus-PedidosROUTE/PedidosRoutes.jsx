import { NavLink } from "react-router-dom";
import Footer from "../../../Corpo/Footer";
import Header from "../../../Corpo/Header";
import MicroTitle from "../../../components/section2/MIcroTitle";
import { TenisArray } from "./TenisArray";
import { ConfigArray } from "./ConfigArray";

export default function PedidosRoutes() {
    return (
        <>
            <Header />
            <section className="min-w-fit h-[855px]  flex justify-center py-16 bg-[#F9F8FE] box-border flex-shrink-0 flex-wrap">
                <div className="h-[480px] w-[1290px] flex ml-[3.2rem] gap-x-[16px]">
                    <div className="
                        w-[334px] h-[288px]  bg-[#fff] rounded-[4px] p-[30px] hidden md:flex flex-col items-start gap-[20px]"
                        >
                            <MicroTitle microsubi='h2s4' value3='Meu Perfil ' className='!font-bold leading-[22px] tracking-[.25px] border-b-2 h-16  w-full border-[#ccc] cursor-pointer' />
                            <NavLink  to='/pedidosroutes' className={({IsActive}) => (IsActive ? '' : 'font-bold text-[#c92071] not-italic leading-[22px] border-b-2 h-16  w-full tracking-[0.25px] border-[#ccc] cursor-pointer')}>
                                <MicroTitle microsubi='h2s4' value3='Meus Pedidos ' className='!text-[#c92071] !font-bold not-italic leading-[22px] '/>
                            </NavLink>      
                            <NavLink to='/meuspedidos' className={({IsActive}) => (IsActive ? '' : 'font-bold text-[#c92071] border-b-2 h-16  w-full border-[#ccc] tracking-[0.25px] cursor-pointer')}>
                                <MicroTitle microsubi='h2s4' value3='Minhas informações ' />
                            </NavLink>            
                            <MicroTitle microsubi='h2s4' value3='Métodos de Pagamentos ' className='!font-medium tracking-[0.25px] border-b-2 border-[#ccc]  h-16  w-full cursor-pointer' />
                    </div>
                    <section className="w-[890px] bg-[#fff] flex flex-col p-[30px] h-[700px]">
                         <div className="w-full h-[62px] flex py-4 items-center justify-between border-b-2 border-b-[#ccc]">
                            <MicroTitle microtitu='h2s3' value3='Meus Pedidos'  />
                            <MicroTitle microtitu='h2s3' value3='STATUS' className='!text-[14px] font-medium' />
                        </div>
                        <div className="w-[830px] h-[542px]  flex flex-col">
                            {TenisArray.map((configarray) => {
                                return (
                                    <ConfigArray
                                        ProductSerieNumber={configarray.ProductSerieNumber}
                                        SeriesNumber={configarray.SeriesNumber}
                                        Finalizado={configarray.Finalizado}
                                        Cancelado={configarray.Cancelado}
                                        Transito={configarray.Transito}
                                        ProductName={configarray.ProductName}
                                        url2={configarray.url2}
                                    />
                                )
                            })}
                        </div>
                    </section>
                </div>
            </section>   
            <Footer />
        </>
    )
}