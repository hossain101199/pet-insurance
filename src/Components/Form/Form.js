import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Age from "./Age";
import BoyorGirl from "./BoyorGirl";
import ContactINFO from "./ContactINFO";
import DogOrCat from "./DogOrCat";
import PetSName from "./PetSName";
import searchbg from "../../IMG/Banner-BG.png";
import Whatkindof from "./Whatkindof ";
import Address from "./Address";

const Form = () => {
  const { Zipcode } = useParams();
  const [progres, setProgres] = useState(0);
  const [page, setPage] = useState(0);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    PetSname: "",
    DogOrCat: "",
    Gender: "",
    Whatkindof: "",
    Age: "",
    FirstName: "",
    LastName: "",
    Email: "",
    Phone: "",
    PureORMixedBreedOption: "",
    Address: "",
    Homeowner: "",
  });

  // ====================================================================
  const FormTitales = [
    "What is your pet's name?",
    `Is ${formData.PetSname} a dog or a cat?`,
    `Is ${formData.PetSname} a boy or a girl?`,
    `What kind of ${formData.DogOrCat} is ${formData.PetSname}?`,
    `How old is ${formData.PetSname}?`,
    `What is your current address in ${Zipcode}?`,
    "Contact information",
  ];
  const PageDisplay = () => {
    if (page === 0) {
      return (
        <PetSName formData={formData} setFormData={setFormData}></PetSName>
      );
    } else if (page === 1) {
      return (
        <DogOrCat formData={formData} setFormData={setFormData}></DogOrCat>
      );
    } else if (page === 2) {
      return (
        <BoyorGirl formData={formData} setFormData={setFormData}></BoyorGirl>
      );
    } else if (page === 3) {
      return (
        <Whatkindof formData={formData} setFormData={setFormData}></Whatkindof>
      );
    } else if (page === 4) {
      return <Age formData={formData} setFormData={setFormData}></Age>;
    } else if (page === 5) {
      return <Address formData={formData} setFormData={setFormData}></Address>;
    } else {
      return (
        <ContactINFO
          formData={formData}
          setFormData={setFormData}
        ></ContactINFO>
      );
    }
  };
  // ====================================================================
  return (
    <div
      className="zip py-10 "
      style={{
        background: `url(${searchbg})`,
        // backgroundSize: "cover",
        backgroundSize: "100%",
        // backgroundRepeat: "no-repeat",
      }}
    >
      <div className="code container mx-auto grid justify-items-center">
        <div className="mx-5">
          <h1 className="text-2xl md:text-4xl font-bold text-info text-center">
            Find The Best Pet Insurance Rates in {Zipcode}
          </h1>
        </div>
        <div className="mx-5 w-80 bg-white h-4 md:w-96 mt-5">
          <div
            className="bg-primary h-4"
            style={{ width: `${progres}%` }}
          ></div>
        </div>
        <div className="mt-5">
          <div className="p-5 mx-2 w-80 md:w-[500px]  ">
            <h1 className="text-lg md:text-xl font-bold">
              {FormTitales[page]}
            </h1>
            <div className="mt-5">{PageDisplay()}</div>
            <div className="flex justify-between  mt-5">
              {page === 0 ? (
                ""
              ) : (
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    setPage((currpPage) => currpPage - 1);
                    setProgres(progres - 15);
                  }}
                >
                  Prev
                </button>
              )}

              <button
                className="btn btn-primary"
                onClick={() => {
                  if (page === FormTitales.length - 1) {
                    setProgres(100);
                  } else {
                    setPage((currpPage) => currpPage + 1);
                    setProgres(progres + 15);
                  }
                }}
              >
                {page === FormTitales.length - 1 ? (
                  <label htmlFor="my-modal-3">Submit</label>
                ) : (
                  "Next"
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/*  */}
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal backdrop-blur-md text-black">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">
            Congratulations {formData.FirstName} {formData.LastName}!
          </h3>
          <p className="py-4">
            By clicking the "Get Quotes" button, I am agreeing by my electronic
            signature to give PetsCoverage and its partners my prior express
            written consent and permission to send prerecorded and artificial
            voice messages, calls and recurring text messages to the cellphone
            number I provided above, using an automatic dialing system at any
            time from and after my inquiry to PetsCoverage for marketing
            purposes, even if I have previously registered the provided number
            on the Do Not Call Registry, in each case to market to me products
            and services and for all other purposes. Terms & Conditions/Privacy
            Policy apply. Consent is not required as a condition to receive
            quotes or purchase services or products. In addition, I agree to the
            Terms of Use and Privacy Policy
          </p>
          <button
            onClick={() => {
              console.log(formData);
              navigate("/");
            }}
            className="btn btn-primary text-white"
          >
            Get Quotes now
          </button>
        </div>
      </div>
      {/*  */}
    </div>
  );
};

export default Form;
