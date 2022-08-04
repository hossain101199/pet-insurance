import React from "react";

const Whatkindof = ({ formData, setFormData }) => {
  let PurebredClass = "rounded-md border-2 border-primary px-14 py-7";
  let MixedBreedClass = "rounded-md border-2 border-primary px-14 py-7";
  if (formData.Whatkindof === "Purebred") {
    PurebredClass =
      "rounded-md border-2 border-primary px-14 py-7 bg-primary text-white";
  }
  if (formData.Whatkindof === "Mixed Breed") {
    MixedBreedClass =
      "rounded-md border-2 border-primary px-14 py-7 bg-primary text-white";
  }
  const PurebredOption = [
    { Option: "Affenpinscher" },
    { Option: "Afghan Hound" },
    { Option: "Airedale Terrier" },
    { Option: "Akita" },
    { Option: "Alaskan Malamute" },
    { Option: "American Staffordshire Terrier" },
    { Option: "Australian Cattle Dog" },
    { Option: "Australian Kelpie" },
    { Option: "Australian Shepherd" },
    { Option: "Australian Silky Terrier" },
    { Option: "Australian Stumpy Tail Cattle Dog" },
    { Option: "Australian Terrier" },
    { Option: "Basenji" },
    { Option: "Basset Fauve De Bretagne" },
    { Option: "Basset Hound" },
    { Option: "Beagle" },
    { Option: "Bearded Collie" },
    { Option: "Bedlington Terrier" },
    { Option: "Belgian Shepherd Dog" },
    { Option: "Bernese Mountain Dog" },
    { Option: "Bichon Frise" },
    { Option: "Bloodhound" },
    { Option: "Border Collie" },
    { Option: "Border Terrier" },
    { Option: "Borzoi" },
    { Option: "Boston Terrier" },
    { Option: "Bouvier Des Flandres" },
    { Option: "Boxer" },
    { Option: "Briard" },
    { Option: "British Bulldog" },
    { Option: "Brittany" },
    { Option: "Bull Terrier" },
    { Option: "Bullmastiff" },
    { Option: "Cairn Terrier" },
    { Option: "Cavalier King Charles Spaniel" },
    { Option: "Chesapeake Bay Retriever" },
    { Option: "Chihuahua" },
    { Option: "Chinese Crested Dog" },
    { Option: "Chow Chow" },
    { Option: "Clumber Spaniel" },
    { Option: "Cocker Spaniel" },
    { Option: "Cocker Spaniel - American" },
    { Option: "Collie" },
    { Option: "Curly Coated Retriever" },
    { Option: "Dachshund" },
    { Option: "Dalmatian" },
    { Option: "Dandie Dinmont Terrier" },
    { Option: "Deerhound" },
    { Option: "Dobermann" },
    { Option: "Dogue De Bordeaux" },
    { Option: "English Setter" },
    { Option: "English Springer Spaniel" },
    { Option: "English Toy Terrier" },
    { Option: "Field Spaniel" },
    { Option: "Finnish Spitz" },
    { Option: "Flat Coated Retriever" },
    { Option: "Fox Terrier" },
    { Option: "Foxhound" },
    { Option: "French Bulldog" },
    { Option: "German Shepherd Dog" },
    { Option: "German Shorthaired Pointer" },
    { Option: "German Wirehaired Pointer" },
    { Option: "Golden Retriever" },
    { Option: "Gordon Setter" },
    { Option: "Great Dane" },
    { Option: "Greyhound" },
    { Option: "Griffon Bruxellois" },
    { Option: "Hungarian Vizsla" },
    { Option: "Irish Setter" },
    { Option: "Irish Terrier" },
    { Option: "Irish Water Spaniel" },
    { Option: "Irish Wolfhound" },
    { Option: "Italian Greyhound" },
    { Option: "Jack Russell Terrier" },
    { Option: "Japanese Chin" },
    { Option: "Japanese Spitz" },
    { Option: "Keeshond" },
    { Option: "King Charles Spaniel" },
    { Option: "Labrador Retriever" },
    { Option: "Lakeland Terrier" },
    { Option: "Large Munsterlander" },
    { Option: "Lhasa Apso" },
    { Option: "Lowchen" },
    { Option: "Maltese" },
    { Option: "Maremma Sheepdog" },
    { Option: "Mastiff" },
    { Option: "Miniature Pinscher" },
    { Option: "Newfoundland" },
    { Option: "Norfolk Terrier" },
    { Option: "Nova Scotia Duck Tolling Retriever" },
    { Option: "Old English Sheep Dog" },
    { Option: "Papillon" },
    { Option: "Petit Basset Griffon Vendéen" },
    { Option: "Pharaoh Hound" },
    { Option: "Pointer" },
    { Option: "Pomeranian" },
    { Option: "Poodle" },
    { Option: "Portuguese Water Dog" },
    { Option: "Pug" },
    { Option: "Puli" },
    { Option: "Pyrenean Mountain Dog" },
    { Option: "Rhodesian Ridgeback" },
    { Option: "Rottweiler" },
    { Option: "Saluki" },
    { Option: "Samoyed" },
    { Option: "Schipperke" },
    { Option: "Schnauzer" },
    { Option: "Scottish Terrier" },
    { Option: "Sealyham Terrier" },
    { Option: "Shar Pei" },
    { Option: "Shetland Sheepdog" },
    { Option: "Shih Tzu" },
    { Option: "Siberian Husky" },
    { Option: "Skye Terrier" },
    { Option: "Soft Coated Wheaten Terrier" },
    { Option: "St. Bernard" },
    { Option: "Staffordshire Bull Terrier" },
    { Option: "Sussex Spaniel" },
    { Option: "Swedish Vallhund" },
    { Option: "Tenterfield Terrier" },
    { Option: "Tibetan Spaniel" },
    { Option: "Tibetan Terrier" },
    { Option: "Weimaraner" },
    { Option: "Welsh Corgi" },
    { Option: "Welsh Springer Spaniel" },
    { Option: "West Highland White Terrier" },
    { Option: "Whippet" },
    { Option: "Yorkshire Terrier" },
    { Option: "Other" },
  ];

  const MixedBreedOption = [
    { Option: "Mixed Breed - Toy (&lt; 10lbs)" },
    { Option: "Mixed Breed - Small (10-31 lbs)" },
    { Option: "Mixed Breed - Medium (31-50 lbs)" },
    { Option: "Mixed Breed - Large (51-90 lbs)" },
    { Option: "Mixed Breed - Giant (&gt;90 lbs)" },
  ];

  let Options;
  if (formData.Whatkindof === "Purebred") {
    Options = (
      <select
        onChange={(e) =>
          setFormData({ ...formData, PureORMixedBreedOption: e.target.value })
        }
        className="text-lg md:text-2xl input input-ghost input-bordered input-primary w-full mt-5"
      >
        {formData.PureORMixedBreedOption ? (
          <option defaultValue>{formData.PureORMixedBreedOption}</option>
        ) : (
          <option disabled selected>
            Pick one
          </option>
        )}
        {PurebredOption &&
          PurebredOption.map((Option) => (
            <option key={Option.Option}>{Option.Option}</option>
          ))}
      </select>
    );
  }
  if (formData.Whatkindof === "Mixed Breed") {
    Options = (
      <select
        onChange={(e) =>
          setFormData({ ...formData, PureORMixedBreedOption: e.target.value })
        }
        className="text-lg md:text-2xl input input-ghost input-bordered input-primary w-full mt-5"
      >
        {formData.PureORMixedBreedOption ? (
          <option defaultValue>{formData.PureORMixedBreedOption}</option>
        ) : (
          <option disabled selected>
            Pick one
          </option>
        )}
        {MixedBreedOption &&
          MixedBreedOption.map((Option) => (
            <option key={Option.Option}>{Option.Option}</option>
          ))}
      </select>
    );
  }

  return (
    <div className="text-lg md:text-2xl">
      <form
        action=""
        onChange={(e) =>
          setFormData({
            ...formData,
            Whatkindof: e.target.value,
            PureORMixedBreedOption: "",
          })
        }
        className="flex flex-col md:flex-row justify-center gap-5 text-center"
      >
        <input
          type="radio"
          name="Whatkindof"
          value="Purebred"
          id="Purebred"
          className="hidden "
        />
        <label htmlFor="Purebred" className={PurebredClass}>
          Purebred
        </label>
        <input
          type="radio"
          name="Whatkindof"
          value="Mixed Breed"
          id="MixedBreed"
          className="hidden"
        />
        <label htmlFor="MixedBreed" className={MixedBreedClass}>
          Mixed Breed
        </label>
      </form>
      {Options}
    </div>
  );
};

export default Whatkindof;
