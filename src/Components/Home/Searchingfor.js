import React from "react";
import img from "../../IMG/Banner-Images.png";
import searchbg from "../../IMG/Banner-BG.png";

const Searchingfor = () => {
  return (
    <div
      className="min-h-fit py-10 bg-info"
      style={{
        background: `url(${searchbg})`,
        // backgroundSize: "cover",
        backgroundSize: "100%",
        // backgroundRepeat: "no-repeat",
      }}
    >
      <div className="px-5 container mx-auto grid lg:grid-cols-2 md:gap-5">
        <div className="m-5 flex justify-center md:justify-end">
          <div className="max-w-md">
            <img src={img} alt="" />
          </div>
        </div>
        <div className="text-black col-span-1 grid content-center max-w-3xl text-center md:text-start max-w-md ">
          <h1 className="my-5 text-4xl font-bold text-accent shadow-amber-50">
            Searching for Pet Insurance?
          </h1>
          <p className="text-lg md:text-xl font-bold">
            If you're wondering what insurance plans are best for your pet and
            your budget, you have come to the right place. Our Pet Insurance
            professionals will guide you through your options so you can make
            the best decision for your budget and Pet needs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Searchingfor;
