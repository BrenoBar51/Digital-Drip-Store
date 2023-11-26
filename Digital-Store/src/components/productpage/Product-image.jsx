export default function ProductImage() {
    return(
        <div>
            <img class="mt-[5%] ml-[7%]" src="src/assets/image/TenisPrincipal.png" alt="" />
            <div className="grid grid-flow-col">
                <img className="ml-[10%] hover:scale-110 transition duration-500 cursor-pointer object-cover" src="src/assets/image/tenis4.png" alt="" />
                <img className="mt-[15%] hover:scale-110 transition duration-500 cursor-pointer object-cover" src="src/assets/image/tenis2.png" alt="" />
                <img className="mt-[15%] hover:scale-110 transition duration-500 cursor-pointer object-cover" src="src/assets/image/tenis3.png" alt="" />
                <img  className="mt-[15%] hover:scale-110 transition duration-500 cursor-pointer object-cover" src="src/assets/image/tenis5.png" alt="" />
                <img  className="mt-[15%] hover:scale-110 transition duration-500 cursor-pointer object-cover" src="src/assets/image/tenis6.png" alt="" />
            </div>
        </div>
    )
}