import { NavLink } from "react-router-dom";
import Input from "../../components/Inputs";
import img1 from "../../assets/image/tenis-flutuante1.png";
import img2 from "../../assets/image/tenis-flutuante2.png";

export default function MainSignUpPage(){
    return(
        <div className="flex">
            <div className="h-fit ml-[7%] mt-[10%] mb-[15%] p-[3%] space-y-[9%] bg-white justify-start ">
                <div className="space-y-[7%]">
                    <p className="font-bold text-[36px] tracking-wide w-[523px] h-[36px]">Crie sua conta</p>
                    <p className="font-normal w-[306px] tracking-wide text-[16px]">Já possui uma conta ? Entre <NavLink to={'/login'} className={({isActive}) => (isActive ? 'underline' : 'underline')}>aqui.</NavLink></p>
                </div>
                <form className="grid grid-flow-row space-y-[4%]">
                    <label id="email" name="email">Email</label>
                    <Input type={'text'} name={'email'} placeholder={'Insira seu email'} />
                </form>
                <NavLink to={'/signupform'} className={({isActive}) => (isActive ? '' : '')}>
                <button className="w-[100%] h-[40px] mt-[6%] flex-shrink-0 bg-[#C92071] text-[#f5f5f5] rounded-lg hover:bg-[#c92085] hover:transition-[2s]">
                    Criar conta
                </button></NavLink>
                <div className="flex w-[100%] justify-center gap-[8%]">
                    <p className="font-normal text-[16px] tracking-wide">Ou faça Login com</p>
                    <div className="flex space-x-[60%]">
                        <div className="cursor-pointer">
                                <box-icon type='logo' name='gmail' color='#ff0004'></box-icon>
                        </div>
                        <div className="cursor-pointer">
                            <box-icon name='facebook-circle' type='logo' color='#0072ff'>
                            </box-icon>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex h-[100%] w-[100%]">
                <img src={img1} className="mt-[15%] ml-[15%] w-[256px] h-[483px]" alt="" />
                <img src={img2} className="w-[256px] h-[483px] mt-[58%]" alt="" />
            </div>
        </div>
    )
}