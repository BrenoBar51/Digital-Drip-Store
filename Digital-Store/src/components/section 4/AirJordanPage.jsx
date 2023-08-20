import AirJordan from "./Airjordan";
import TitulosAirJordans from "./TituloAirJordans";

export default function AirJordanPage(){
    return(
        <div className="flex flex-row">
      <div className="w-[600px] relative  bottom-52">     <AirJordan /> </div>
        <div className="w-[400px] relative left-40 top-40">   <TitulosAirJordans /> </div>
        </div>
    )
}