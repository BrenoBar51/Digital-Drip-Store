import FiveCardsIcons from "./FiveCardsIcons";
import MicroTitle from "./MIcroTitle";
import img from '../../assets/image/tshirt-_1_.png'

export default function ColectionCards() {
    return (
        <>
        <section className="w-full flex flex-col items-start md:justify-center md:items-center px-20 md:h-[400px]">
            <div className="p-4 md:p-8">
                <MicroTitle value3='Coleções em destaques' h2s2pt2='h2s2'/>
            </div>
            <div className="flex gap-x-12 md:flex-row ">
                <FiveCardsIcons Fcards='Five' titulos='h1' valor3='Camisetas' icones={img} />
                <FiveCardsIcons Fcards='Five' titulos='h1' valor3='Calças' icones='../../assets/image/pants.png' />
                <FiveCardsIcons Fcards='Five' titulos='h1' valor3='Bonés' icones='../../assets/image/cap_icon-icons.com_59925.png' />
                <FiveCardsIcons Fcards='Five' titulos='h1' valor3='HeadPhones' icones='../../assets/image/headphones_1.png' />
                <FiveCardsIcons Fcards='Five' titulos='h1' valor3='Tênis' icones='../../assets/image/sneakers.png' />
            </div>
        </section>
        </>
    )
}