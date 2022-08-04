import React from "react";

const ContactINFO = ({ formData, setFormData }) => {
  return (
    <div className="grid gap-y-5">
      <input
        type="Name"
        placeholder="First Name"
        selected={formData.FirstName}
        onChange={(e) =>
          setFormData({ ...formData, FirstName: e.target.value })
        }
        className="text-lg md:text-2xl input input-ghost input-bordered input-primary w-full"
        required
      />
      <input
        type="Name"
        placeholder="Last Name"
        selected={formData.LastName}
        onChange={(e) => setFormData({ ...formData, LastName: e.target.value })}
        className="text-lg md:text-2xl input input-ghost input-bordered input-primary w-full"
        required
      />
      <input
        type="Email"
        placeholder="Email"
        selected={formData.Email}
        onChange={(e) => setFormData({ ...formData, Email: e.target.value })}
        className="text-lg md:text-2xl input input-ghost input-bordered input-primary w-full"
        required
      />
      <input
        type="number"
        placeholder="Phone"
        selected={formData.Phone}
        onChange={(e) => setFormData({ ...formData, Phone: e.target.value })}
        className="text-lg md:text-2xl input input-ghost input-bordered input-primary w-full"
        required
      />
    </div>
  );
};

export default ContactINFO;
