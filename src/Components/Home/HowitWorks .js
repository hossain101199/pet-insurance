import React from "react";
import box from "../../IMG/Icon-1.png";
import dice from "../../IMG/Icon-2.png";
import clipboard from "../../IMG/Icon-3.png";
import { HashLink } from "react-router-hash-link";

const HowitWorks = () => {
  return (
    <div
      id="HowitWorks"
      className="container mx-auto min-h-fit py-10 flex flex-col items-center justify-center"
    >
      <h1 className="mb-5 text-4xl lg:text-6xl text-primary font-bold">
        How it Works
      </h1>
      <div className="mt-5 grid grid-cols-1 lg:grid-cols-3 gap-20 text-primary">
        <div className="card card-compact w-80 bg-base-100 pt-4 shadow-xl hover:bg-warning hover:text-black">
          <figure>
            <img src={box} style={{ width: "100px" }} alt="Shoes" />
          </figure>
          <div className="card-body text-center">
            <h2 className="text-2xl font-bold">Get Started</h2>
            <p className="text-base md:text-lg">
              In a few seconds, we will have your free, no-obligation insurance
              quote ready. Just answer a few simple questions about your driving
              and insurance history.
            </p>
          </div>
        </div>
        <div className="card card-compact w-80 bg-base-100 shadow-xl pt-4 shadow-xl hover:bg-warning hover:text-black">
          <figure>
            <img src={dice} style={{ width: "100px" }} alt="Shoes" />
          </figure>
          <div className="card-body text-center ">
            <h2 className="text-2xl font-bold">Compare Quotes</h2>
            <p className="text-base md:text-lg">
              We work with a variety of insurance companies to make sure we have
              options that match what you're looking for, and then filter them
              down so they are easy to compare!
            </p>
          </div>
        </div>
        <div className="card card-compact w-80 bg-base-100 shadow-xl pt-4 shadow-xl hover:bg-warning hover:text-black">
          <figure>
            <img src={clipboard} style={{ width: "100px" }} alt="Shoes" />
          </figure>
          <div className="card-body text-center">
            <h2 className="text-2xl font-bold ">Pick Your Policy</h2>
            <p className="text-basetext-base md:text-lg">
              Cutting out the middle man has never been easier! You can compare
              quotes online by clicking as many insurance options as you want to
              review.
            </p>
          </div>
        </div>
      </div>
      <HashLink
        smooth
        to="/#Getquotes"
        className="h-16 text-lg md:text-2xl btn btn-primary mt-20 mb-10 w-80 md:w-96 text-white"
      >
        Get Started
      </HashLink>
    </div>
  );
};

export default HowitWorks;
