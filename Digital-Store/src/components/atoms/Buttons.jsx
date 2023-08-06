export default function Buttons(){
    return(
        <div className="flex justify-center space-x-6">
            <div>
                <button className="underline cursor-pointer">Cadastre-se</button>
            </div>
            <div>
                <button className="bg-[#d40063] hover:bg-[#7b003a] text-white cursor-pointer">Entrar</button>
            </div>
        </div>
    )
}