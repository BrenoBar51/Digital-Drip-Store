// import img from '../assets/image/LogoDigitalCollege.png';

export default function Logo(){
    return(
        <div className="flex gap-[3%] min-w-fit">
            <img className="h-[2.13rem] mt-[1.3%] w-[2.13rem]" src={'./image/Logo.png'} alt="Logo" />
            <p className="text-[#C92071] text-4xl font-semibold min-w-fit">Digital Store</p>
        </div>
    )
}