import { NavLink } from "react-router-dom";
import Input from "../../components/Inputs";
import Checkbox from "../../components/InputCheckbox";

export default function FormSignUp(){
    return(
        <div className="flex justify-center">
            <div className="h-fit ml-[7%] mt-[10%] mb-[15%] p-[3%] space-y-[9%] bg-white justify-center">
                <div className="space-y-[7%]">
                    <p className="font-bold justify-center text-[36px] tracking-wide w-[523px] h-[36px]">Criar conta</p>
                    <p className="font-bold text-[#474747] w-[306px] tracking-wide text-[16px]">Informações Pessoais</p>
                </div>
                <form className="grid grid-flow-row font-bold space-y-[6%]">
                    <label id="nome" name="nome">Nome Completo</label>
                    <Input type={'text'} name={'nome'} placeholder={'Insira seu nome'} />
                    <label id="CPF" name="CPF">CPF</label>
                    <Input type={'number'} name={'CPF'} placeholder={'Insira seu CPF'} />
                    <label id="email" name="email">Email</label>
                    <Input type={'text'} name={'email'} placeholder={'Insira seu email'} />
                    <label id="celular" name="celular">Celular</label>
                    <Input type={'tel'} name={'celular'} placeholder={'Insira seu celular'}/>
                    <p className="font-bold text-[#474747] w-[306px] tracking-wide text-[16px]">Informações de Entrega</p>
                    <label id="endereço" name="endereço">Endereço</label>
                    <Input type={'text'} name={'endereço'} placeholder={'Insira seu endereço'} />
                    <label id="bairro" name="bairro">Bairro</label>
                    <Input type={'text'} name={'bairro'} placeholder={'Insira seu bairro'} />
                    <label id="cidade" name="cidade">Cidade</label>
                    <Input type={'text'} name={'cidade'} placeholder={'Insira seu cidade'} />
                    <label id="CEP" name="CEP">CEP</label>
                    <Input type={'number'} name={'CEP'} placeholder={'Insira seu CEP'} />
                    <label id="complemento" name="complemento">Complemento</label>
                    <Input type={'text'} name={'complemento'} placeholder={'Insira seu complemento'} />
                    <div className="flex">
                        <Checkbox />
                        <label for="default-checkbox" class="ml-2 text-sm font-medium text-[#474747]">Quero receber por email ofertas e novidades das lojas da Digital Store. A frequência de envios pode<br/>variar de acordo com a interação do cliente.</label>
                    </div>
                </form>
                <NavLink to={'/'} className={({isActive}) => (isActive ? '' : '')}>
                <button type="submit" className="w-[100%] h-[40px] mt-[6%] flex-shrink-0 bg-[#C92071] text-[#f5f5f5] rounded-lg hover:bg-[#c92085] hover:transition-[2s]">
                    Criar conta
                </button></NavLink>
            </div>
        </div>
    )
}