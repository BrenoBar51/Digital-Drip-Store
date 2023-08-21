import { NavLink } from "react-router-dom";
import Input from "../../components/Inputs";
import InputRadio from "../../components/InputRadio";
import CardComprar from "../../components/CardComprar";

export default function ComprarForm(){
    return(
        <div className="flex">
            <div className="h-fit ml-[6%] mt-[10%] mb-[15%] p-[3%] space-y-[9%] bg-white">
                <div className="space-y-[7%]">
                    <p className="font-bold text-[36px] tracking-wide w-[523px] h-[36px]">Finalizar Compra</p>
                    <hr className=""/>
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
                    <hr className=""/>
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
                    <p className="font-bold text-[#474747] w-[306px] tracking-wide text-[16px]">Informações de pagamento</p>
                    <hr className=""/>
                    <label id="forma" name="forma">Forma de pagamento</label>
                    <div className="flex gap-[22%]">
                        <div className="flex gap-[8%]">
                            <InputRadio className={'mt-[25%]'} name={'forma'} id={'credito'} value={'Cartão-de Crédito'} />
                            <label className="min-w-fit" id="forma" name="forma">Cartão de Crédito</label>
                        </div>
                        <div className="flex gap-[8%]">
                            <InputRadio className={'mt-[25%]'} name={'forma'} id={'debito'} value={'Cartão de Débito'} />
                            <label className="min-w-fit" id="forma" name="forma">Cartão de Débito</label>
                        </div>
                        <div className="flex gap-[20%]">
                            <InputRadio className={'mt-[25%]'} name={'forma'} id={'boleto'} value={'Boleto'} />
                            <label className="min-w-fit" id="forma" name="forma">Boleto</label>
                        </div>
                    </div>
                    <label id="nome-cartao" name="nome-cartao">Nome do Cartão</label>
                    <Input type={'text'} name={'nome'} placeholder={'Insira o nome do Cartão'} />
                    <div className="flex min-w-full gap-[14%]">
                        <div className="w-full">
                            <label id="numero-cartao" name="numero-cartao">Número do Cartão</label>
                            <Input className={'mt-[10%]'} type={'number'} name={'numero'} placeholder={'Insira o número do Cartão'} /> 
                        </div>
                        <div className="w-full">
                            <label id="data-cartao" name="data-cartao">Vencimento do Cartão</label>
                            <Input className={'mt-[10%]'} type={'datetime'} name={'vencimento'} placeholder={'Insira a validade do Cartão'} />
                        </div>
                    </div>
                    <label id="CVV" name="CVV">CVV</label>
                    <Input type={'number'} name={'CVV'} placeholder={'CVV'} />
                    <p className="font-bold text-[#474747] w-[306px] tracking-wide text-[16px]">Finalizar Compra</p>
                    <hr className=""/>
                    <div className="flex">
                        <p className="font-bold justify-center text-[18px] tracking-wide w-[523px] h-[36px]">Total</p>
                        <div className="grid justify-end">
                            <p className="text-[#EE4266] min-w-full ml-[50%] font-bold text-[18px]">R$ 219,00</p>
                            <p className="text-[#8F8F8F] text-[12px] min-w-full">ou 10x de R$ 21,00 sem juros</p>
                        </div>
                    </div>
                </form>
                <NavLink to={'/comprafinalizada'} className={({isActive}) => (isActive ? '' : '')}>
                <button type="submit" className="w-[100%] h-[40px] mt-[6%] flex-shrink-0 bg-[#F6AA1C] text-[#f5f5f5] rounded-lg hover:bg-[#ffb730] hover:transition-[2s]">
                    Realizar pagamento
                </button></NavLink>
            </div>
            <div className="h-fit mt-[10%] ml-[1%] p-[2%] space-y-[5%] bg-white">
                <CardComprar />
            </div>
        </div>
    )
}