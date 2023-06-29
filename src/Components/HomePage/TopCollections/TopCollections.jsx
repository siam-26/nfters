import React from "react";
import largeImage from "../../../Assets/thirdsectionFirst.jpg";
import profileLogo from "../../../Assets/logoPeople_sellNFTSOne.png";
import etherum from "../../../Assets/etherum.png";
import middleImage1 from "../../../Assets/thirdSectionMidleFirst.jpg";
import middleImage2 from "../../../Assets/thirdSectionMiddleSecond.png";
import middleImage3 from "../../../Assets/thirdSectionMiddleLast.jpg";
import Middle from "./Middle";
import rightImg1 from "../../../Assets/cryptoFunksLogo.jpg";
import rightImg2 from "../../../Assets/CryptixLogo.jpg";
import rightImg3 from "../../../Assets/FrensewareLogo.png";
import rightImg4 from "../../../Assets/PunkArtLogo.png";
import rightImg5 from "../../../Assets/ArtCryptoLogo.jpg";
import RightSection from "./RightSection";

const TopCollections = () => {
  //middle section
  const middleSections = [
    {
      id: 1,
      image: middleImage1,
      name: "The Futr Abstr",
      logoProfile: profileLogo,
      ethNumber: "0.25 ETH",
      smallText: "1 of 8",
      buttonStyle: "bg-primary rounded-full px-4 py-1",
      insideButtonStyle: "text-white text-xs md:text-xs font-semibold",
      buttonName: "Place a bid",
    },

    {
      id: 2,
      image: middleImage2,
      name: "The Futr Abstr",
      logoProfile: profileLogo,
      ethNumber: "0.25 ETH",
      smallText: "1 of 8",
      buttonStyle:
        "bg-white border-2 border-primary rounded-full px-4 py-1",
      insideButtonStyle: "text-primary text-xs font-bold",
      buttonName: "Place a bid",
    },

    {
      id: 3,
      image: middleImage3,
      name: "The Futr Abstr",
      logoProfile: profileLogo,
      ethNumber: "0.25 ETH",
      smallText: "1 of 8",
      buttonStyle:
        "bg-white border-2 border-primary rounded-full px-4 py-1",
      insideButtonStyle: "text-primary text-xs font-bold",
      buttonName: "Place a bid",
    },
  ];

  //Right Section
  const rightSection = [
    {
      id: 1,
      img: rightImg1,
      name: "CryptoFunks",
      etherumImg: etherum,
      number: "19,769,39",
      color: "text-teal-600",
      percentage: "+26.52%",
    },
    {
      id: 2,
      img: rightImg2,
      name: "Cryptix",
      etherumImg: etherum,
      number: "2,769,39",
      color: "text-rose-600",
      percentage: "+10.52%",
    },
    {
      id: 3,
      img: rightImg3,
      name: "Frensware",
      etherumImg: etherum,
      number: "9,232,39",
      color: "text-teal-600",
      percentage: "+2.52%",
    },
    {
      id: 4,
      img: rightImg4,
      name: "PunkArt",
      etherumImg: etherum,
      number: "3,769,39",
      color: "text-teal-600",
      percentage: "+1.52%",
    },
    {
      id: 5,
      img: rightImg5,
      name: "Art Crypto",
      etherumImg: etherum,
      number: "10,769,39",
      color: "text-rose-600",
      percentage: "+2.52%",
    },
  ];

  return (
    <section className="w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-3 mt-24 mb-16 ">
      {/* left section */}
      <div>
        <div>
          <img src={largeImage} alt="" className="h-96 rounded-2xl" />
        </div>
        <div className="flex justify-between mt-4">
          <div className="flex gap-3">
            <div>
              <div className="avatar">
                <div className="w-8 md:w-12 rounded-full">
                  <img src={profileLogo} />
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-sm md:text-base">The Futr Abstr</h3>
              <small className="text-accent text-xs md:text-sm">
                10 in the stock
              </small>
            </div>
          </div>
          <div>
            <div>
              <small className="text-xs text-neutral font-semibold">
                Highest Bid
              </small>
            </div>
            <div>
              <img src={etherum} alt="" className="w-5 inline" />
              <span className="text-neutral font-semibold text-xs md:text-base">
                0.25 ETH
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* middle section */}
      <div>
        {middleSections &&
          middleSections.map((middle) => (
            <Middle key={middle.id} middle={middle} />
          ))}
      </div>

      {/* right section */}
      <div className="w-11/12 md:border-l pl-6 w-full">
        <h2 className="uppercase font-extrabold text-black text-xl">
          Top Collections Over
        </h2>
        <p className="text-primary font-semibold">Last 7 days</p>

        <div className="mt-5">

          <table className="">
            <tbody >
            {rightSection &&
              rightSection.map((right) => (
                <RightSection key={right.id} right={right} />
              ))}
              
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default TopCollections;
