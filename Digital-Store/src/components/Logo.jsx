import img from '../assets/image/Logo.png';

export default function Logo(){
    return(
        <div className="flex gap-[3%] min-w-fit">
            <img src={img} className="h-[2.13rem] mt-[1.3%] w-[2.13rem]" alt="Logo" />
            <p className="text-[#C92071] text-4xl font-semibold min-w-fit">Digital Store</p>
        </div>
    )
}