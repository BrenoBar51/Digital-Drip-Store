import LogoSemCor from "./LogoSemCor";

export default function AboutUs(){
    return(
        <div className="relative bottom-20 left-4 grid grid-rows-3">
            <div><LogoSemCor /></div>
            <div className="text-white font-normal">Lorem ipsum dolor sit amet, consectetur<br/>adipiscing elit, sed do eiusmod tempor<br/>incididunt ut labore et dolore.</div>
            <div className="w-[124px] h-[20px] relative right-2 top-4 pt-6  flex gap-4">
            <box-icon name='facebook' type='logo' color='#ffffff' ></box-icon>
            <box-icon name='instagram' type='logo' color='#ffffff' ></box-icon> 
            <box-icon name='twitter' type='logo' color='#ffffff' ></box-icon>
            </div>
        </div>
    )
}