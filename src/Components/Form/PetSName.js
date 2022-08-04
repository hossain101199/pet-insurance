import React from "react";

const PetSName = ({ formData, setFormData }) => {
  return (
    <div>
      <input
        type="Name"
        placeholder="Pet's name"
        selected={formData.PetSname}
        onChange={(e) => setFormData({ ...formData, PetSname: e.target.value })}
        className="text-lg md:text-2xl input input-ghost input-bordered input-primary w-full "
        required
      />
    </div>
  );
};

export default PetSName;
