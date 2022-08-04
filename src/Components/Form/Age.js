import React from "react";

const Age = ({ formData, setFormData }) => {
  return (
    <div>
      <input
        placeholder="Pet's Age"
        selected={formData.Age}
        onChange={(e) => setFormData({ ...formData, Age: e.target.value })}
        className="text-lg md:text-2xl input input-ghost input-bordered input-primary w-full"
        maxLength="2"
        required
      />
    </div>
  );
};

export default Age;
