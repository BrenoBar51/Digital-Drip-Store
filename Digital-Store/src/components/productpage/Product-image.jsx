import img1 from "../../assets/image/TenisPrincipal.png";
import img2 from "../../assets/image/tenis4.png";
import img3 from "../../assets/image/tenis2.png";
import img4 from "../../assets/image/tenis3.png";
import img5 from "../../assets/image/tenis5.png";
import img6 from "../../assets/image/tenis6.png";

export default function ProductImage() {
    return(
        <div>
            <img src={img1} class="mt-[5%] ml-[7%]" alt="" />
            <div className="grid grid-flow-col">
                <img src={img2} className="ml-[10%] hover:scale-110 transition duration-500 cursor-pointer object-cover" alt="" />
                <img src={img3} className="mt-[15%] hover:scale-110 transition duration-500 cursor-pointer object-cover" alt="" />
                <img src={img4} className="mt-[15%] hover:scale-110 transition duration-500 cursor-pointer object-cover" alt="" />
                <img src={img5} className="mt-[15%] hover:scale-110 transition duration-500 cursor-pointer object-cover" alt="" />
                <img src={img6} className="mt-[15%] hover:scale-110 transition duration-500 cursor-pointer object-cover" alt="" />
            </div>
        </div>
    )
}