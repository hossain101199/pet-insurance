import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Comprehensive from "./Comprehensive";

import FAQ from "./FAQ";
import HowitWorks from "./HowitWorks ";
import InsuranceLOGO from "./InsuranceLOGO";

import Searchingfor from "./Searchingfor";
import Seehowmuchyoucansave from "./Seehowmuchyoucansave";
import SeeWhatPeopleAreSaying from "./SeeWhatPeopleAreSaying";

import WhoWeAre from "./WhoWeAre";
import map from "../../IMG/map-point-redesign.png";
import homebaxk from "../../IMG/448963-PEVZL1-726-scaled.jpg";

const Home = () => {
  const [inputZip, setinputZip] = useState();
  const [zipcodeResults, setZipcodeResults] = useState({});
  const [Alldata, setAlldata] = useState();
  const [error, setError] = useState();

  const hendleInput = (e) => {
    setError("");
    const zipRegex = /(^\d{5}$)/;
    const validZip = zipRegex.test(e.target.value);
    if (validZip) {
      setinputZip(e.target.value);
      setError("");
    } else {
      setError("Zip code must be minimum & maximum five digit");
      setinputZip("");
    }
  };

  const navigate = useNavigate();
  const handleZip = (e) => {
    e.preventDefault();
    if (zipcodeResults === undefined) {
      setError("Invalid zip code");
    } else if (!error) {
      navigate(`/Form/${zipcodeResults.Sate}`);
    }
  };

  // ====================================================================
  useEffect(() => {
    fetch("ZipData.json")
      .then((res) => res.json())
      .then((data) => setAlldata(data));
  }, []);
  useEffect(() => {
    if (Alldata) {
      const [Results] = Alldata?.filter(
        (Result) =>
          parseInt(Result.ZipMin) <= parseInt(inputZip) &&
          parseInt(Result.ZipMax) >= parseInt(inputZip)
      );
      setZipcodeResults(Results);
    }
  }, [Alldata, inputZip]);
  // ====================================================================
  // useEffect(() => {
  //   const url = `http://api.zippopotam.us/us/${inputZip}`;
  //   fetch(
  //     url,
  //     {
  //       method: "GET",
  //     },
  //     true
  //   )
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setZipcodeResults(data?.places[0]);
  //     });
  // }, [inputZip]);
  // ====================================================================
  return (
    <div>
      <div
        id="Getquotes"
        className="block"
        style={{
          background: `url(${homebaxk})`,
          backgroundSize: "cover",
          // backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="bg-black bg-opacity-60">
          <div className="py-5 md:h-[500px] lg:h-[500px] container mx-auto grid content-center  justify-items-center ">
            <div className="text-center md:text-start mx-5 my-5 grid justify-items-center">
              <h1 className="mb-4 md:mb-6 text-4xl lg:text-6xl font-bold  text-white text-center ">
                Insurance Solutions For Your Pet
              </h1>
              <h2 className="  mb-5 text-2xl lg:text-3xl font-semibold  text-white  text-center">
                Find Affordable, Comprehensive Pet Insurance
              </h2>

              <form className="grid justify-items-center" onSubmit={handleZip}>
                <p className="text-lg md:text-2xl  mb-4 text-white ">
                  Enter Your Zip Code to Get Free Quotes
                </p>
                <div className="w-fit rounded-full  border-2 p-2 border-white bg-white bg-opacity-25 shadow-lg">
                  <div className=" bg-white input-group h-fit w-fit rounded-full   pl-2  ">
                    <img src={map} className="my-auto mr-2" alt="" />
                    <input
                      className="zip h-20 text-2xl md:text-4xl bg-white input w-full md:w-96"
                      onChange={hendleInput}
                      type="text"
                      placeholder="Zip code"
                      required
                      minLength="5"
                      maxLength="5"
                      style={{
                        outline: "none",
                      }}
                    />
                    <button
                      style={{
                        borderEndEndRadius: "50%",
                        borderTopRightRadius: "50%",
                      }}
                      className="w- h-20 btn btn-primary text-white text-2xl md:text-2xl "
                    >
                      Go &#10095;
                    </button>
                  </div>
                </div>

                {error && (
                  <p className="m-2 text-red-600 text-xl font-bold bg-white bg-opacity-75 rounded-full  p-2">
                    {error}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>

      <InsuranceLOGO></InsuranceLOGO>
      <HowitWorks></HowitWorks>
      <Searchingfor></Searchingfor>
      <Comprehensive></Comprehensive>
      <WhoWeAre
        handleZip={handleZip}
        map={map}
        hendleInput={hendleInput}
        error={error}
      ></WhoWeAre>

      <SeeWhatPeopleAreSaying></SeeWhatPeopleAreSaying>
      <Seehowmuchyoucansave></Seehowmuchyoucansave>
      <FAQ></FAQ>
    </div>
  );
};

export default Home;

// <div className="py-5 md:h-[500px] lg:h-[800px] container mx-auto grid lg:grid-cols-2  justify-items-center">
// <div className="text-center md:text-start mx-5 my-5">
//   <h1 className="leading-loose uppercase mb-5 text-4xl lg:text-6xl font-bold  text-primary my-4">
//     <p className="my-3">Insurance Solutions</p>
//     <p>For Your Pet</p>
//   </h1>
//   <h2 className="uppercase mt-7 mb-5 text-2xl lg:text-3xl font-bold  text-primary">
//     <p className="my-3"> Find Affordable,</p>
//     <p>Comprehensive Pet Insurance</p>
//   </h2>

//   <form className="" onSubmit={handleZip}>
//     <p className="text-lg md:text-2xl font-bold text-center md:text-left md:ml-2 mb-2">
//       Enter Your Zip Code to Get Free Quotes
//     </p>
//     <div className="bg-white input-group h-fit w-fit rounded-xl  border-4 pl-2 border-info">
//       <img src={map} className="my-auto mr-2" alt="" />
//       <input
//         className="zip h-20 text-2xl md:text-4xl bg-white input w-full md:w-96"
//         onChange={hendleInput}
//         type="text"
//         placeholder="Zip code"
//         required
//         minLength="5"
//         maxLength="5"
//         style={{
//           outline: "none",
//         }}
//       />
//       <button className="h-20 btn btn-primary border-info  text-white text-2xl md:text-2xl">
//         Go &#10095;
//       </button>
//     </div>

//     {error && (
//       <p className="m-2 text-red-600 text-lg font-bold">{error}</p>
//     )}
//   </form>
// </div>
// </div>
