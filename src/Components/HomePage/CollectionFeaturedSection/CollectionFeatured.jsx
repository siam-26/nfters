import React from "react";
import Featured from "./Featured";
import leftMainImg from "../../../Assets/thirdsectionFirst.jpg";
import leftChild1 from "../../../Assets/secondImg_sell-NFT.png";
import leftChild2 from "../../../Assets/featuredNfts.jpg";
import leftChild3 from "../../../Assets/featuredNft.png";
import profileLogo from "../../../Assets/logoPeople_sellNFTSOne.png";
import middleMainImg from "../../../Assets/collectionFeatured.jpg";
import middleChild from "../../../Assets/featuredNFTSMiddleLast.png";
import rightMainImg from "../../../Assets/thirdSectionMiddleSecond.png";
import rightChild2 from "../../../Assets/thirdSectionMiddleLast.jpg";
import rightChild1 from "../../../Assets/thirdSectionMidleFirst.jpg";

const CollectionFeatured = () => {
  const collectionFeatured = [
    {
      id: 1,
      largeImg: leftMainImg,
      childOneImg: leftChild1,
      childTwoImg: leftChild2,
      childThreeImg: leftChild3,
      profile: profileLogo,
      name: "Amazing Collection",
      person: "by Arkhan",
    },
    {
      id: 2,
      largeImg: middleMainImg,
      childOneImg: leftChild2,
      childTwoImg: leftChild1,
      childThreeImg: middleChild,
      profile: profileLogo,
      name: "Amazing Collection",
      person: "by Arkhan",
    },
    {
      id: 3,
      largeImg: rightMainImg,
      childOneImg: rightChild1,
      childTwoImg: rightChild2,
      childThreeImg: leftChild1,
      profile: profileLogo,
      name: "Amazing Collection",
      person: "by Arkhan",
    },
  ];
  return (
    <section className="bg-secondary mt-24">
      <div className="w-10/12 mx-auto py-10">
        <h2 className="font-extrabold text-black text-2xl uppercase text-center lg:text-left pt-5 pb-10">
          Collection featured NFTs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:flex justify-center gap-6">
          {collectionFeatured &&
            collectionFeatured.map((features) => (
              <Featured key={features.id} features={features} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionFeatured;
