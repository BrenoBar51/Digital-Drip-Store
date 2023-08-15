export default function CardsreplaceForS3(props) {
  return (
    <>
      <div className={`w-[292px] h-[439px] flex flex-col gap-3`}>
        <div
          className={`w-full h-[320px] bg-white shadow-[#69626201] flex justify-center items-center relative`}
        >
          {props.isDiscount ? (
            <span className="absolute bg-[#E7FF86] top-5 left-5 px-4 py-1 justify-center items-center rounded-full text-sm font-bold text-[#474747]">
              {props.discountPercentual}% OFF
            </span>
          ) : (
            ""
          )}
          <img src={props.url} alt="" />
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-[#8F8F8F] font-bold leading-6 text-xs">{props.category}</span>
          <p className="text-[#474747] text-2xl">{props.productName}</p>
          <div className="flex gap-2 items-center">
            <span
              className={`text-2xl font-bold ${props.isDiscount && "text-[#8F8F8F] line-through"}`}
            >
              {props.price}
            </span>
            {props.isDiscount ? (
              <span className="text-[#1F1F1F] text-2xl font-bold">{props.discountPrice}</span>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
}
