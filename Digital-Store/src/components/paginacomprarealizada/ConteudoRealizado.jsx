import { NavLink } from "react-router-dom";

export default function ConteudoCompraRealizada() {
  return (
    <div className="bg-Branco relative left-[130px] top-[50px] h-[1400px] w-[1100px]">
      <section>
        <div className="text-[150px] relative top-[20px] flex justify-center  ">🎉</div>
        <div className="flex justify-center font-bold ">
          <div className="text-[46px] relative left-[130px] font-bold">Compra Realizada</div>
          <div className="text-[46px] relative top-[70px] right-[220px] font-bold">
            com sucesso!
          </div>
        </div>
        <hr className="text-Cinza-Branco flex justify-center w-[1000px] relative left-[40px] top-[90px] font-extrabold" />
      </section>
      <div className="relative bottom-[69px]">
        <div className="text-Cinza-Escuro2 font-semibold relative top-[170px] left-[42px] text-[20px]">
          Informações Pessoais
        </div>
        <div className="relative left-[42px] top-[200px]">
          <div className="flex">Nome: Francisco Antonio Pereira</div>
          <div className="relative left-[59px] bottom-[23px]"></div>
        </div>
        <div className="relative left-[42px] top-[210px]">
          <div className="flex">CPF: 123485913-35</div>
        </div>
        <div className="relative left-[42px] top-[220px]">
          <div className="flex">E-mail: francisco@gmail.com</div>
        </div>
        <div className="relative left-[42px] top-[230px]">
          <div className="flex">Celular: (85) 5555-5555</div>
        </div>
      </div>
      <hr className="text-Cinza-Branco flex justify-center w-[1000px] relative left-[40px] top-[180px] font-extrabold" />

      <div className="relative top-[20px]">
        <div className="text-Cinza-light font-semibold relative top-[170px] left-[42px] text-[20px]">
          Informações de entrega
        </div>
        <div className="relative left-[42px] top-[200px]">
          <div className="flex">Endereço: Rua João Pessoa, 333</div>
          <div className="relative left-[59px] bottom-[23px]"></div>
        </div>
        <div className="relative left-[42px] top-[210px]">
          <div className="flex">Bairro: Centro</div>
        </div>
        <div className="relative left-[42px] top-[220px]">
          <div className="flex">Cidade: Fortaleza, Ceará</div>
        </div>
        <div className="relative left-[42px] top-[230px]">
          <div className="flex">Cep: 433-8800</div>
        </div>
      </div>
      <hr className="text-Cinza-Branco flex justify-center w-[1000px] relative left-[40px] top-[270px] font-extrabold" />
      <div className="text-Cinza-Escuro2 font-semibold relative top-[280px] left-[42px] text-[20px]">
        Informações de Pagamento
      </div>
      <div className="relative top-[100px]">
        <div className="relative left-[42px] top-[200px]">
          <div className="flex">Titular do cartão: FRANCISCO A P</div>
          <div className="relative left-[59px] bottom-[23px]"></div>
        </div>
        <div className="relative left-[42px] top-[210px]">
          <div className="flex">Final ************2020</div>
        </div>
      </div>
      <hr className="text-Cinza-Branco flex justify-center w-[1000px] relative left-[40px] top-[330px] font-extrabold" />
      <div>
        <div className="text-Cinza-Escuro2 font-semibold relative top-[340px] left-[42px] text-[20px]">
          Resumo da compra
        </div>
        <div className="w-[71.17px] h-[95px]">
          <img
            className={`w-[71.17px] h-[58px] shrink-0 rounded-[2.6px]  bg-Branco shadow-[0px_2.6691579818725586px_16.68223762512207px_0px_rgba(0,0,0,0.05)] relative top-[380px] left-[42px]`}
            src="src\assets\image\CardTenisForIN.png"
            alt=""
          />
        </div>
        <div className="text-Cinza-Escuro text-[20px] relative top-[285px] left-[121px] font-bold ">
          Tênis Nike Revolution 6 Next <br /> Nature Masculino
        </div>
      </div>
      <div className="bg-[#F6AA1C26] w-[1010px] h-[150px] relative left-[39px] top-[320px] ring-4 ring-[#f6aa1c4b] rounded ">
        <div className="text-[30px] relative top-[53px] left-[40px] font-bold ">Total</div>
        <div className="text-[30px] font-bold flex justify-end relative right-[20px] top-[8px] ">
          R$ 219,00
        </div>
        <div className="flex text-[#8F8F8F] justify-end relative right-[21px] top-[5px]">
          ou 10x de R$ 21,00 sem juros
        </div>
      </div>
      <div className="text-Cinza-light2 underline decoration-1 relative top-[380px] flex justify-center right-[20px] ">
        Imprimir Recibo
      </div>
      <NavLink to={"/"} className={({ isActive }) => (isActive ? "" : "")}>
        <button className="bg-Amarelo text-Branco z-20 w-[1003px] h-[48px] relative top-[470px] text-[16px] not-italic font-bold leading-[24px] tracking-[0.75px] text-center left-[49px] rounded-[11px] hover:text-Branco hover:duration-500 hover:ease-in-out duration-[1.4s]">
          Voltar para Home
        </button>
      </NavLink>
    </div>
  );
}
