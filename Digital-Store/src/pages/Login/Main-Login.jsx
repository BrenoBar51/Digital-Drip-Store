export default function MainLogin(){
    return(
        <div className="flex mt-[8%]">
            <div className="ml-[38%] bg-white">
                <p className="font-bold">Acesse sua conta</p>
                <p className="font-normal">Novo cliente ? Então registre-se</p>
                <p className="underline font-normal">aqui.</p>
                <form className="grid grid-flow-row">
                    <label name="login">Login</label>
                    <input name="login" id="login" type="text" placeholder="Insira seu login ou email" required/>
                    <label name="senha">Senha</label>
                    <input type="text" name="senha" id="senha" placeholder="Insira sua senha" required/>
                    <input type="button"/>
                </form>
            </div>
        </div>
    )
}