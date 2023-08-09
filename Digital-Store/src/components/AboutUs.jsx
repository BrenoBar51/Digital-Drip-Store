import LogoSemCor from "./LogoSemCor";

export default function AboutUs(){
    return(
        <div className="grid grid-rows-3">
            <div><LogoSemCor /></div>
            <div className="text-white font-normal">Lorem ipsum dolor sit amet, consectetur<br/>adipiscing elit, sed do eiusmod tempor<br/>incididunt ut labore et dolore.</div>
            <div className="flex">
                <box-icon type='logo' name='facebook-circle'></box-icon>
                <box-icon type='logo' name='instagram-alt'></box-icon>
                <box-icon name='twitter' type='logo' ></box-icon>
            </div>
        </div>
    )
}