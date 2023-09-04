import FiveCardsIcons from "./FiveCardsIcons";
import MicroTitle from "./MIcroTitle";
import img1 from '../../assets/image/tshirt-_1_.png'
import img2 from '../../assets/image/pants.png'
import img3 from '../../assets/image/cap_icon-icons.com_59925.png'
import img4 from '../../assets/image/headphones_1.png'
import img5 from '../../assets/image/sneakers.png'

export default function ColectionCards() {
    return (
        <>
        <section className="w-full flex flex-col items-start md:justify-center md:items-center px-20 md:h-[400px]">
            <div className="p-4 md:p-8">
                <MicroTitle value3='Coleções em destaques' h2s2pt2='h2s2'/>
            </div>
            <div className="flex gap-x-12 md:flex-row ">
                <FiveCardsIcons Fcards='Five' titulos='h1' valor3='Camisetas' icones={img1} />
                <FiveCardsIcons Fcards='Five' titulos='h1' valor3='Calças' icones={img2} />
                <FiveCardsIcons Fcards='Five' titulos='h1' valor3='Bonés' icones={img3} />
                <FiveCardsIcons Fcards='Five' titulos='h1' valor3='HeadPhones' icones={img4} />
                <FiveCardsIcons Fcards='Five' titulos='h1' valor3='Tênis' icones={img5} />
            </div>
        </section>
        </>
    )
}