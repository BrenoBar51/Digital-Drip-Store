import { NavLink } from "react-router-dom";
import Input from "../../components/Inputs";

export default function MainLogin(){
    return(
        <div className="flex">
            <div className="ml-[7%] mt-[10%] mb-[15%] p-[3%] space-y-[9%] bg-white justify-start ">
                <div className="space-y-[7%]">
                    <p className="font-bold text-[36px] tracking-wide w-[523px] h-[36px]">Acesse sua conta</p>
                    <p className="font-normal w-[306px] tracking-wide text-[16px]">Novo cliente ? Então registre-se <NavLink to='/signup' className={({isActive}) => (isActive ? 'bg-[#c92085] underline' : 'underline')}>
                        aqui.
                    </NavLink></p>
                </div>
                <form className="grid grid-flow-row space-y-[6%]">
                    <label name="login">Login</label>
                    <Input type={'text'} id={'login'} name={'login'} placeholder={'Insira seu Email'} />
                    <label name="senha">Senha</label>
                    <Input type={'text'} id={'senha'} name={'senha'} placeholder={'Insira sua senha'} />
                    <NavLink to='/signup' className={({isActive}) => (isActive ? 'underline' : 'underline')}>
                        Esqueci minha senha
                    </NavLink> 
                </form>
                <NavLink to={'/'} className={({isActive}) => (isActive ? '' : '')}><button className="w-[100%] h-[40px] mt-[6%] flex-shrink-0 bg-[#C92071] text-[#f5f5f5] rounded-lg hover:bg-[#c92085] hover:transition-[2s]">
                        Acessar conta
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
                <img className="mt-[15%] ml-[15%] w-[256px] h-[483px]" src="src/assets/image/pexels-melvin-buezo-2529148 1.png" alt="" />
                <img className="w-[256px] h-[483px] mt-[58%]" src="src/assets/image/pexels-melvin-buezo-2529148 2.png" alt="" />
            </div>
        </div>
    )
}