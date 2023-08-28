import AirJordan from "./Airjordan";
import TitulosAirJordans from "./TituloAirJordans";

export default function AirJordanPage() {
  return (
    <>
      <section className="w-full flex md:flex-row flex-col gap-7 min-h-[600px]  p-24">
          <div className="relative flex items-center justify-center w-full h-full">
              <AirJordan />
              <img className="bg-no-repeat absolute top-10 w-80 h-44 md:w-full md:h-full flex-shrink-0" src="src\assets\image\Laye1.png" alt="" />
          </div>
          <div className="flex flex-col gap-y-7 w-full h-full">
            <TitulosAirJordans />
          </div>
      </section>
    </>
  )
}