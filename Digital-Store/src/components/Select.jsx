import MicroTitle from "./section2/MIcroTitle";

export function Select() {
  return (
    <>
      <div className="flex justify-center items-center w-[332px] h-[60px] border rounded border-{#474747}">
        <label htmlFor="sort">
          <MicroTitle microtitu="h2s3" h2camisas="Ordenar por:" />
        </label>
        <select
          id="sort"
          className="text-[#474747] text-[14px] not-italic font-normal leading-[24px] tracking-[0.75px]"
        >
          <option value="relevence">Mais Relevante</option>
          <option value="relevence">Menor Preço</option>
          <option value="relevence">Maior Preço</option>
        </select>
      </div>
    </>
  );
}
