import React from "react";

const BoyorGirl = ({ formData, setFormData }) => {
  let BoyClass = "rounded-md border-2 border-primary px-14 py-7 w-full";
  let GirlClass = "rounded-md border-2 border-primary px-14 py-7 w-full";
  if (formData.Gender === "Boy") {
    BoyClass =
      "rounded-md border-2 border-primary px-14 py-7 w-full bg-primary text-white";
  }
  if (formData.Gender === "Girl") {
    GirlClass =
      "rounded-md border-2 border-primary px-14 py-7 w-full bg-primary text-white";
  }

  return (
    <form
      action=""
      onChange={(e) => setFormData({ ...formData, Gender: e.target.value })}
      className="text-lg md:text-2xl flex justify-center gap-5 w-full text-center"
    >
      <input
        type="radio"
        name="Gender"
        value="Boy"
        id="Boy"
        className="hidden "
      />
      <label htmlFor="Boy" className={BoyClass}>
        Boy
      </label>
      <input
        type="radio"
        name="Gender"
        value="Girl"
        id="Girl"
        className="hidden"
      />
      <label htmlFor="Girl" className={GirlClass}>
        Girl
      </label>
    </form>
  );
};

export default BoyorGirl;
