import React from "react";
import mainImg from "../../../Assets/thirdsectionFirst.jpg";
import child1 from "../../../Assets/secondImg_sell-NFT.png";
import child2 from "../../../Assets/featuredNfts.jpg";
import child3 from "../../../Assets/featuredNft.png";
import logo from "../../../Assets/logoPeople_sellNFTSOne.png";

const Featured = ({ features }) => {
  const {
    largeImg,
    childOneImg,
    childTwoImg,
    childThreeImg,
    profile,
    name,
    person,
  } = features;
  return (
    <div className="flex gap-3 mb-5">
      {/* left part */}
      <div className="">
        <div className="lg:w-60">
          <img src={largeImg} alt="" className="rounded-xl w-full h-[270px]" />
        </div>

        <div className="pt-10">
          <div>
            <h3 className="font-bold text-black text-sm md:text-xl">
              {name}
            </h3>
          </div>

          <div className="flex items-center gap-2 pt-3">
            <div>
              <div className="avatar">
                <div className="w-8 rounded-full">
                  <img src={profile} alt="" />
                </div>
              </div>
            </div>

            <div>
              <p className="font-semibold text-black text-xs md:text-sm">{person}</p>
            </div>
          </div>
        </div>
      </div>

      {/* right part */}
      <div className="">
        <div className="grid gap-4">
          <div className="w-24">
            <img src={childOneImg} alt="" className="w-full h-20 rounded-lg" />
          </div>

          <div className="w-24">
            <img src={childTwoImg} alt="" className="w-full h-20 rounded-lg" />
          </div>

          <div className="w-24">
            <img src={childThreeImg} alt="" className="w-full h-20 rounded-lg" />
          </div>
        </div>

        <div className="pt-14 md:pt-16 w-24">
          <button className="bg-white border-2 border-success rounded-full px-1">
            <a className="text-success text-xs font-bold ">Total 54 items</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
