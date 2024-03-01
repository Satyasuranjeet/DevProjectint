import React from "react";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import InfoIcon from "@mui/icons-material/Info";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Heading = () => {
  return (
    <div className="mt-5">
      <div className="w-full sm:w-[80%] m-auto mb-3">
        <h1 className="text-2xl sm:text-4xl mb-2 text-left">
          Best Website Builders in the US
        </h1>
      </div>
      <hr className="w-full sm:w-[80%] bg-gray-300 h-[1.5px] m-auto" />
      <div className="w-full sm:w-[80%] h-[40px] flex m-auto ">
        <div className="w-full sm:w-[55%] h-[40px] align-middle flex justify-evenly items-center">
          <CheckCircleOutlineIcon fontSize="small" className="left-0" />
          <div className="text-xs sm:text-base">
            Last Updated - February 22, 2020
          </div>
          <InfoIcon />
          <div className="text-xs sm:text-base">Advertising Disclosure</div>
        </div>
        <div className="w-full sm:w-[45%] sm:ml-2 mt-2 sm:mt-0">
          <div className="sm:inline-flex align-middle justify-evenly items-center text-xs sm:text-base">
            Top Relevant
            <ArrowDropDownIcon fontSize="medium" />
          </div>
        </div>
      </div>
      <hr className="w-full sm:w-[80%] bg-gray-300 h-[1.5px] m-auto" />
    </div>
  );
};

export default Heading;
