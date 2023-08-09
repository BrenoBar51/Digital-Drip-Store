import LogoSemCor from "./LogoSemCor";

export default function AboutUs(){
    return(
        <div className="pt-[16%] grid grid-rows-3">
            <div>
                <LogoSemCor />
                <div className="mt-[12%] text-white font-normal">
                    Lorem ipsum dolor sit amet, consectetur<br/>adipiscing elit, sed do eiusmod tempor<br/>incididunt ut labore et dolore.
                </div>
            </div>
            <div className="pt-[17%]  flex gap-4">
                <box-icon name='facebook' type='logo' color='#ffffff' ></box-icon>
                <box-icon name='instagram' type='logo' color='#ffffff' ></box-icon> 
                <box-icon name='twitter' type='logo' color='#ffffff' ></box-icon>
            </div>
        </div>
    )
}