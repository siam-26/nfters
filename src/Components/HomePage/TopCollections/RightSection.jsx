import React from "react";

const RightSection = ({ right }) => {
  const { id, img, name, etherumImg, number, color, percentage } = right;

  return (
    <tr className="border-b">
      <th className="text-xl">{id}</th>
      <td className="w-2/12 md:w-3/12 md:mr-auto mt-5 pl-2 md:pl-5 pt-3">
        <div className="avatar">
          <div className="rounded-full">
            <img src={img}/>
          </div>
        </div>
      </td>
      <td className="pl-6">
        <div>
          <div>
            <small className="text-sm  font-bold">{name}</small>
          </div>
          <div>
            <img src={etherumImg} alt="" className="w-5 inline" />
            <span className="text-neutral font-semibold text-xs md:text-xs">
              {number}
            </span>
          </div>
        </div>
      </td>
      <td className={`${color} font-bold text-right`}>{percentage}</td>
      
    </tr>
  );
};

export default RightSection;
