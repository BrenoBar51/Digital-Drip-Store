import Buttons from "../../../components/Buttons";
import MicroTitle from "../../../components/section2/MIcroTitle";
import ParagrafosCM from "./ParagrafosCM";
import UsersPedidos from "./UsersPedidos";

export default function ObjInfo() {
    const { user } = UsersPedidos()
    return (
        <>
            <div className="w-[890px] p-[30px] flex flex-col h-[466px] bg-[#fff]">
                <div className="w-full h-[40px] border-b-2 border-[#ccc] flex justify-between">
                    <MicroTitle microtitu='h2s3' value3='Minhas informações' className='!' />
                    <Buttons  linkbtn='btnlink' texts='Editar' className='!bg-[#fff] hover:underline pb-8 font-semibold'/>
                </div>
                <div className="w-[830px] h-[192px] flex flex-col gap-y-2 pb-6 pt-[17px] border-b-2 border-[#ccc]">
                    <div className="w-[187px] h-[30px]">
                        <MicroTitle microtitu='h2s3' value3='Informações de Entrega' className='!' />
                    </div>
                    <div className="w-778px h-[38px] flex gap-x-5" >
                        <ParagrafosCM  Pobj='objs' paragrafo='Nome: '/>  <MicroTitle valuepedidos={user.nome} microtitu='h2s3'/>
                    </div>
                    <div className="w-778px h-[38px] flex gap-x-8" >
                        <ParagrafosCM  Pobj='objs' paragrafo='CPF: '/> <MicroTitle valuepedidos={user.CPF} microtitu='h2s3'/>
                    </div>
                    <div className="w-778px h-[38px] flex gap-x-6" >
                        <ParagrafosCM  Pobj='objs' paragrafo='Email: '/> <MicroTitle valuepedidos={user.email} microtitu='h2s3'/>
                    </div>
                    <div className="w-778px h-[38px] flex gap-x-3" >
                        <ParagrafosCM  Pobj='objs' paragrafo='Celular: '/> <MicroTitle valuepedidos={user.cell} microtitu='h2s3'/>
                    </div>
                </div>
                <div className="w-[830px] h-[192px] flex flex-col gap-y-2 pb-6 pt-[17px] ">
                    <div className="w-[187px] h-[30px]">
                        <MicroTitle microtitu='h2s3' value3='Informações de Entrega' className='!' />
                    </div>
                    <div className="w-778px h-[38px] flex gap-x-5" >
                        <ParagrafosCM  Pobj='objs' paragrafo='Endereço: '/>  <MicroTitle valuepedidos={user.adress} microtitu='h2s3'/>
                    </div>
                    <div className="w-778px h-[38px] flex gap-x-8" >
                        <ParagrafosCM  Pobj='objs' paragrafo='Bairro: '/> <MicroTitle valuepedidos={user.Bairro} microtitu='h2s3'/>
                    </div>
                    <div className="w-778px h-[38px] flex gap-x-6" >
                        <ParagrafosCM  Pobj='objs' paragrafo='Cidade: '/> <MicroTitle valuepedidos={user.Cidade} microtitu='h2s3'/>
                    </div>
                    <div className="w-778px h-[38px] flex gap-x-10" >
                        <ParagrafosCM  Pobj='objs' paragrafo='CEP: '/> <MicroTitle valuepedidos={user.CEP} microtitu='h2s3'/>
                    </div>
                </div>
                
            </div>
        </>
    )
}