import React from "react";
import { BsFolderCheck } from "react-icons/bs";
import { BiBarChartSquare } from "react-icons/bi";

const Transaction = () => {
  return (
    <section className="bg-secondary mt-24">
      <div className="w-10/12 mx-auto lg:flex gap-7 py-24">
        <div>
          <h2 className="font-extrabold text-black text-2xl uppercase text-center lg:text-left">
            The amazing NFT art of the world here
          </h2>
        </div>

        <div className="lg:flex pt-10 md:pt-16 lg:pt-0">
          <BsFolderCheck className="text-3xl lg:text-6xl lg:pb-8 mx-auto lg:mx-0" />
          <div className="lg:w-5/6">
            <h3 className="font-bold text-black text-xl md:text-2xl lg:text-xl text-center lg:text-left">Fast Transaction</h3>
            <p className="text-accent md:text-xl lg:text-base text-center lg:text-left mt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>
          </div>
        </div>

        <div className="lg:flex pt-10 md:pt-16 lg:pt-0 gap-2">
          <BiBarChartSquare className="text-3xl lg:text-6xl lg:pb-8 mx-auto lg:mx-0" />
          <div>
            <h3 className="font-bold text-black text-xl md:text-2xl lg:text-xl text-center lg:text-left">Growth Transaction</h3>
            <p className="text-accent md:text-xl lg:text-base text-center lg:text-left mt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Transaction;
