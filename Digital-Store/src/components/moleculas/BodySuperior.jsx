import BodyPart2 from "../atoms/BodyPart2";
import BodyPart1 from "../atoms/Bodypart1";

export default function BodySuperior(){
    return(
        <>
            <div className="">
                <BodyPart1 />
            </div>
            <div className="">
                <BodyPart2 />
            </div>
        </>
    )
}