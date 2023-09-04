import img from '../assets/image/Produto1.png'
import img2 from '../assets/image/Group-53582.png'

export default function Carrossel() {
    return (
        <>
            <div className="w-[633px] h-full py-[124px] flex flex-col items-start relative">
                <img src={img} className="w-full h-full flex-shrink-0" alt="" />
                <img src={img2} className="flex-shrink-0 w-[78px] h-[12px] absolute bottom-[72px] left-[50px]" alt="" />
            </div>
        </>
    )
}