import dog from "../../IMG/dog-solid.svg";
import cat from "../../IMG/cat-solid.svg";

const DogOrCat = ({ formData, setFormData }) => {
  let dogClass = "rounded-md border-2 border-primary px-14 py-7 w-2/4";
  let catClass = "rounded-md border-2 border-primary px-14 py-7 w-2/4";
  if (formData.DogOrCat === "Dog") {
    dogClass =
      "rounded-md border-2 border-primary px-14 py-7 w-2/4 bg-primary text-white";
  }
  if (formData.DogOrCat === "Cat") {
    catClass =
      "rounded-md border-2 border-primary px-14 py-7 w-2/4 bg-primary text-white";
  }
  return (
    <form
      action=""
      onChange={(e) => setFormData({ ...formData, DogOrCat: e.target.value })}
      className="text-lg md:text-2xl w-full flex justify-center gap-5 text-center"
    >
      <input
        type="radio"
        name="DogOrCat"
        value="Dog"
        id="Dog"
        className="hidden "
      />
      <label htmlFor="Dog" className={dogClass}>
        <i className="fa-solid fa-dog"></i>
        <p>dog</p>
      </label>
      <input
        type="radio"
        name="DogOrCat"
        value="Cat"
        id="Cat"
        className="hidden"
      />
      <label htmlFor="Cat" className={catClass}>
        <i className="fa-solid fa-cat"></i>
        <p>cat</p>
      </label>
    </form>
  );
};

export default DogOrCat;
