import React from "react";
import banner from "../../IMG/Banner-2.png";
import bannerphone from "../../IMG/bg.png";
import dog from "../../IMG/Images.png";
const WhoWeAre = ({ handleZip, map, hendleInput, error }) => {
  return (
    <div id="WhoWeAre">
      <div
        className="hidden md:block xl:grid grid-cols-2"
        style={{
          background: `url(${banner})`,
          // backgroundSize: "cover",
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="my-5 md:h-[500px] lg:h-[600px] container md:mx-auto col-span-1 max-w-xl grid justify-items-center md:justify-items-start mx-5">
          <div>
            <h1 className="my-5 text-4xl font-bold text-accent ">
              Who We Are?
            </h1>
            <p className="text-lg md:text-xl font-bold text-black text-center md:text-start">
              We help people understand their options when it comes to pet
              insurance and find the right coverage for their pet. Insurance
              policies are confusing, so our team of experts has worked with
              carriers and agencies to better inform consumers about what they
              need. We can help find the right policy for you and your pet in no
              time!
            </p>
            <form className="mt-4" onSubmit={handleZip}>
              <p className="text-lg font-bold text-center md:text-left md:ml-2 mb-2 text-accent">
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
                    className="w- h-20 btn btn-primary   text-white text-2xl md:text-2xl "
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
      <div
        className="md:hidden"
        style={{
          background: `url(${bannerphone})`,
          backgroundSize: "cover",
          // backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="max-w-xl grid justify-items-center md:justify-items-start mx-5">
          <h1 className="my-5 text-4xl font-bold text-accent ">Who We Are?</h1>
          <p className="text-lg md:text-xl font-bold text-black text-center md:text-start">
            We help people understand their options when it comes to pet
            insurance and find the right coverage for their pet. Insurance
            policies are confusing, so our team of experts has worked with
            carriers and agencies to better inform consumers about what they
            need. We can help find the right policy for you and your pet in no
            time!
          </p>
          <form className="my-4" onSubmit={handleZip}>
            <p className="text-lg font-bold text-center md:text-left md:ml-2 mb-2 text-accent">
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
                  className="w- h-20 btn btn-primary   text-white text-2xl md:text-2xl "
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
        <div className="md:hidden">
          <img src={dog} alt="" />
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
