import Buttons from "../../../components/Buttons";
import MicroTitle from "../../../components/section2/MIcroTitle";
import ParagrafosCM from "./ParagrafosCM";
import UsersPedidos from "./UsersPedidos";

export default function ObjInfo() {
    const { user } = UsersPedidos()
    return (
        <>
            <div className="md:w-full w-full h-full p-6 flex flex-col md:h-[466px] bg-Branco">
                <div className="w-full h-[40px] border-b-2 border-Cinza-Branco flex justify-between">
                    <MicroTitle microtitu='h2s3' value3='Minhas informações' className='!' />
                    <Buttons  linkbtn='btnlink' texts='Editar' className='!bg-Branco hover:underline pb-8 font-semibold'/>
                </div>
                <div className="md:w-full w-full h-fit md:h-[192px] flex flex-col gap-y-2 pb-6 pt-[1rem] border-b-2 border-Cinza-Branco">
                    <div className="">
                        <MicroTitle microtitu='h2s3' value3='Informações de Entrega' className='!' />
                    </div>
                    <div className=" flex gap-x-5" >
                        <ParagrafosCM  Pobj='objs' paragrafo='Nome: '/>  <MicroTitle valuepedidos={user.nome} microtitu='h2s3'/>
                    </div>
                    <div className=" flex gap-x-8" >
                        <ParagrafosCM  Pobj='objs' paragrafo='CPF: '/> <MicroTitle valuepedidos={user.CPF} microtitu='h2s3'/>
                    </div>
                    <div className=" flex gap-x-6" >
                        <ParagrafosCM  Pobj='objs' paragrafo='Email: '/> <MicroTitle valuepedidos={user.email} microtitu='h2s3'/>
                    </div>
                    <div className="w-full flex gap-x-3" >
                        <ParagrafosCM  Pobj='objs' paragrafo='Celular: '/> <MicroTitle valuepedidos={user.cell} microtitu='h2s3'/>
                    </div>
                </div>
                <div className="w-full h-[192px] flex flex-col gap-y-2 pb-6 pt-[17px] ">
                    <div className="">
                        <MicroTitle microtitu='h2s3' value3='Informações de Entrega' className='!' />
                    </div>
                    <div className=" flex gap-x-5" >
                        <ParagrafosCM  Pobj='objs' paragrafo='Endereço: '/>  <MicroTitle valuepedidos={user.adress} microtitu='h2s3'/>
                    </div>
                    <div className=" flex gap-x-8" >
                        <ParagrafosCM  Pobj='objs' paragrafo='Bairro: '/> <MicroTitle valuepedidos={user.Bairro} microtitu='h2s3'/>
                    </div>
                    <div className=" flex gap-x-6" >
                        <ParagrafosCM  Pobj='objs' paragrafo='Cidade: '/> <MicroTitle valuepedidos={user.Cidade} microtitu='h2s3'/>
                    </div>
                    <div className=" flex gap-x-10" >
                        <ParagrafosCM  Pobj='objs' paragrafo='CEP: '/> <MicroTitle valuepedidos={user.CEP} microtitu='h2s3'/>
                    </div>
                </div>
            </div>
        </>
    )
}