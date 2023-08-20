export default function ProductImage() {
    return(
        <div>
            <img class="w-[669px]  relative top-[50px] left-[90px]" src="src\assets\image\TenisPrincipal.png" alt="" />
            <div className="grid grid-cols-5 ">
            <img className="relative top-[51px] left-[66px]" src="src\assets\image\tenis4.png" alt="" />
            <img className="relative top-[72px] left-[60px] hover:scale-110 transition duration-500 cursor-pointer object-cover" src="src\assets\image\tenis3.png" alt="" />
            <img className="relative top-[72px] left-[30px] hover:scale-110 transition duration-500 cursor-pointer object-cover" src="src\assets\image\tenis2.png" alt="" />
            <img  className="relative top-[72px]  hover:scale-110 transition duration-500 cursor-pointer object-cover" src="src\assets\image\tenis6.png" alt="" />
            <img  className="relative top-[72px] right-[33px] hover:scale-110 transition duration-500 cursor-pointer object-cover" src="src\assets\image\tenis5.png" alt="" />
            </div>
        </div>
    )
}