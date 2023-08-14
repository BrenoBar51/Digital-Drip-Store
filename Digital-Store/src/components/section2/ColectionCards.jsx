import FiveCardsIcons from "./FiveCardsIcons";
import MicroTitle from "./MIcroTitle";

export default function ColectionCards() {
    return (
        <>
            <div className="max-w-full h-[70px] flex items-center justify-center">
                <MicroTitle value3='Coleções em destaques' h2s2pt2='h2s2'/>
            </div>
            <div className=" gap-x-10 max-w-full h-[124px] flex justify-center ">
                <FiveCardsIcons Fcards='Five' icones='src\assets\image\tshirt-_1_.png' />
                <FiveCardsIcons Fcards='Five' icones='src\assets\image\pants.png' />
                <FiveCardsIcons Fcards='Five' icones='src\assets\image\pants.png' />
                <FiveCardsIcons Fcards='Five' icones='src\assets\image\headphones_1.png' />
                <FiveCardsIcons Fcards='Five' icones='src\assets\image\sneakers.png' />
            </div>
            <div className="gap-x-[98px] max-w-full h-[117px] flex justify-center">
                <MicroTitle h2camisas='Blusas' microtitu='h2s3' />
                <MicroTitle h2camisas='Calça' microtitu='h2s3'/>
                <MicroTitle h2camisas='Bonés' microtitu='h2s3'/>
                <MicroTitle h2camisas='Fones' microtitu='h2s3'/>
                <MicroTitle h2camisas='Tênis' microtitu='h2s3'/>
            </div>
        </>
    )
}