import React from "react";
import { HashLink } from "react-router-hash-link";

const Seehowmuchyoucansave = () => {
  return (
    <div className="min-h-fit py-10">
      <div className="grid md:grid-cols-2 justify-center items-center gap-5">
        <p className="text-2xl font-bold text-info text-center md:text-end">
          See how much you can save
        </p>

        <HashLink
          smooth
          to="/#Getquotes"
          className="h-16 text-lg md:text-2xl btn btn-primary w-80 md:w-96 text-white"
        >
          Get Started
        </HashLink>
      </div>
    </div>
  );
};

export default Seehowmuchyoucansave;
