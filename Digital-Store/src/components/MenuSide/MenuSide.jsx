import Buttons from "../Buttons";
import PageButtons from "../PageButtons";
import MicroTitle from "../section2/MIcroTitle";

export default function MenuSide() {
    return (
        <>
        <div className="w-full h-full bg-[#00001174] fixed b-0 l-0 r-0 z-50">
            <div className="w-[340px] block h-[740px] top-0  p-8 z-50 absolute bg-Branco rounded">
                <MicroTitle microtitu="h2s3" value3="Páginas" className="!py-4 !text-[18px]" />
                <div className="w-full h-[510px] border-b-2 border-b-[#ccc] ">
                    <PageButtons className="!flex !flex-col !gap-2" />
                </div>
                <div className="w-full h-[130px] flex flex-col gap-y-5 items-center pt-4  p-2">
                    <Buttons type='retangulo' value2b1='Entrar'  />
                    <Buttons graybtn='gray' graybtnv='Cadastra-se' className="!underline-offset-2" />
                </div>
            </div>
        </div>
        </>
    )
}