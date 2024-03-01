import React from "react";
import RoundBox from "../RoundBox/RoundBox";
const Hcard = () => {
  return (
    <div className="flex-col w-[300px] items-center bg-gray-50 p-4 rounded-lg">
      <div className="slex item-center ">
        <img
          src={"https://i.ibb.co/J5D10nD/images.png"}
          className="w-[150px] m-auto pb-5"
          alt=""
        />
      </div>
      <div className="flex ">
        <RoundBox value={"20% Off"} />
        <RoundBox value={"Limited time"} />
      </div>
      <div className="text-[20px] font-bold">Webbuilder 1</div>
      <div>
        Computer Modern clasic with wix supprt
        <div className="felx content-around w-auto">
          <div className="flex text-[25px] font-bold text-start w-5">$39.96</div>
          <div className="flex w-auto">$49.96 <div className="ml-7">(20% Off)</div></div> 
        </div>
      </div>
      <div className="bg-blue-500 mt-5 h-[35px] rounded-lg text-white flex items-center"><div className="m-auto">View Deal</div></div>
    </div>
  );
};

export default Hcard;
