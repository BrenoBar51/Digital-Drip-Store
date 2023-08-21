import MicroTitle from "../../components/section2/MIcroTitle";

export default function Abasusers() {
    return (
        <>
         <div className="
                    w-[334px] h-[288px] bg-[#fff] rounded-[4px] p-[30px]  flex flex-col items-start gap-[20px]"
                    >
                <MicroTitle microsubi='h2s4' value3='Meu Perfil ' className='!font-bold leading-[22px] tracking-[.25px] border-b-2 h-16  w-full border-[#ccc] cursor-pointer' />
                <MicroTitle microsubi='h2s4' value3='Meus Pedidos ' className='!font-medium not-italic leading-[22px] border-b-2 h-16  w-full tracking-[0.25px] border-[#ccc] cursor-pointer' />
                <MicroTitle microsubi='h2s4' value3='Minhas informações ' className='!font-bold text-[#c92071] border-b-2 h-16  w-full border-[#ccc] tracking-[0.25px] cursor-pointer' />
                <MicroTitle microsubi='h2s4' value3='Métodos de Pagamentos ' className='!font-medium tracking-[0.25px] border-b-2 border-[#ccc]  h-16  w-full cursor-pointer' />
        </div>
        </>
    )
}