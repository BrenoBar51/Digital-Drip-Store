import img from '../assets/image/LogoSemCor.png';

export default function LogoSemCor(){
    return(
        <div className="flex gap-[3%] cursor-pointer">
            <img src={img} className="h-[33px] w-[33px] mt-[1%]" alt="Logo" />
            <p className="text-Branco text-4xl font-semibold">Digital Store</p>
        </div>
    )
}