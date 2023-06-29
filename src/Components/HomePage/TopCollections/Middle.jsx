import React from "react";
import { FaEthereum } from "react-icons/fa";

const Middle = ({ middle }) => {
  const {
    image,
    name,
    logoProfile,
    ethNumber,
    smallText,
    buttonStyle,
    insideButtonStyle,
    buttonName,
  } = middle;

  return (
    <div className="flex justify-center md:justify-left gap-3 md:gap-6 mb-8">
      <div>
        <img src={image} alt="" className="w-32 h-32 rounded-2xl" />
      </div>

      <div className="grid gap-3">
        <div>
          <h3 className="font-bold text-sm md:text-base">{name}</h3>
        </div>

        <div>
          <div className="flex md:items-center md:gap-2">
            <div className="avatar">
              <div className="w-8 md:w-7 rounded-full">
                <img src={logoProfile} />
              </div>
            </div>
            <div className="flex items-center md:border border-emerald-600 rounded-md">
              <div>
                <FaEthereum className="text-emerald-500" />
              </div>
              <span className="text-emerald-500 font-bold text-xs p-1">
                {ethNumber}
              </span>
            </div>
            <div className="hidden lg:flex">
              <small className="text-xs text-accent">{smallText}</small>
            </div>
          </div>

          <div className="text-center lg:hidden">
            <small className="text-sm text-accent">{smallText}</small>
          </div>
        </div>

        <div>
          <button className={`${buttonStyle}`}>
            <a className={`${insideButtonStyle}`}>{buttonName}</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Middle;
