import MicroTitle from "../section2/MIcroTitle";
import img from '../assets/image/CardTenisForIN.png'

export default function() {
    return (
        <>
            <div className="w-[255px] flex gap-x-4 mt-5 h-[95px]">
                <div className="w-[71.17px] h-[95px]">
                    <img className={`w-[71.17px] h-[58px] shrink-0 rounded-[2.6px]  bg-[#e2e3ff] shadow-[0px_2.6691579818725586px_16.68223762512207px_0px_rgba(0,0,0,0.05)]`} src={img} alt="" />
                </div>
                <div className="w-[167px] h-[90px]">
                    <MicroTitle value3='Meu Carrinho' microtitu='h2s3'/>
                    <MicroTitle value3='6 Next Nature' microtitu='h2s3'/>
                    <MicroTitle value3='Masculino' microtitu='h2s3'/>
                    <div className="w-[199px] gap-x-2 h-[30px] flex">
                        <MicroTitle value3='R$ 219,00' cardzint='h2s5' />
                        <MicroTitle traços='traço' value3='R$ 210,00' />
                    </div>
                </div>
            </div>
        </>
    )
}