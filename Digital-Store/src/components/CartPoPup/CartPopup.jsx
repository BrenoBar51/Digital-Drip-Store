import React, { useState } from "react";
import MicroTitle from "../section2/MIcroTitle";
import Cardzin from "./Cardzin";
import Buttons from "../Buttons";

function CartIcon() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  

 


const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };
 
  return (
        <div>
      <button onClick={togglePopup}>
      <div className="cursor-pointer mt-[60%]">
            <box-icon name='cart' color='#C92071'></box-icon>
        </div>
      </button>
      {isPopupOpen && (
        <div
          style={{
            position: "absolute",
            width: "315px",
            background: "white",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.8)",
          }}
          className="p-6 left-[60rem] top-[5.625rem] flex flex-col z-50"
        >
          <div className="w-full h-8 border-b-2  flex items-center pb-4">
                <MicroTitle value3='Meu Carrinho' microtitu='h2s3'/>
          </div>
          <div className="w-full h-[250px] border-b-2 ">
                <Cardzin />
                <Cardzin />
          </div>
          <div className="w-full h-[93px] gap-y-1 mt-4 flex flex-col">
                <div className="w-[267px] h-[30px] flex justify-between" >
                    <MicroTitle h1cardzin='h1cdz' value3='Valor Total:' />
                    <MicroTitle  color2='corh1s3' value3='R$ 219,00'/>    
                </div>
                <div className="w-[267px] h-[42px] flex justify-between ">
                    <Buttons graybtn='gray' graybtnv='Esvaziar' />
                    <Buttons  graybtnv='Ver carrinho' type2='retangulo2' />
                    
                </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default CartIcon;