import React from "react";

const Address = ({ formData, setFormData }) => {
  let YesClass = "rounded-md border-2 border-primary px-14 py-7 w-full";
  let NoClass = "rounded-md border-2 border-primary px-14 py-7 w-full";
  if (formData.Homeowner === "Yes") {
    YesClass =
      "rounded-md border-2 border-primary px-14 py-7 w-full bg-primary text-white";
  }
  if (formData.Homeowner === "No") {
    NoClass =
      "rounded-md border-2 border-primary px-14 py-7 w-full bg-primary text-white";
  }
  return (
    <div>
      <form action="">
        <input
          type="Name"
          placeholder="Address"
          selected={formData.Address}
          onChange={(e) =>
            setFormData({ ...formData, Address: e.target.value })
          }
          className="text-lg md:text-2xl input input-ghost input-bordered input-primary w-full "
          required
        />
      </form>

      <h1 className="text-lg md:text-xl font-bold mt-5">
        Are you a homeowner?
      </h1>
      <form
        action=""
        onChange={(e) =>
          setFormData({ ...formData, Homeowner: e.target.value })
        }
        className="text-lg md:text-2xl flex justify-center gap-5 w-full text-center mt-5"
      >
        <input
          type="radio"
          name="Homeowner"
          value="Yes"
          id="Yes"
          className="hidden "
        />
        <label htmlFor="Yes" className={YesClass}>
          Yes
        </label>
        <input
          type="radio"
          name="Homeowner"
          value="No"
          id="No"
          className="hidden"
        />
        <label htmlFor="No" className={NoClass}>
          No
        </label>
      </form>
    </div>
  );
};

export default Address;
