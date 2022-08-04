import React from "react";

const SeeWhatPeopleAreSaying = () => {
  return (
    <div className="min-h-fit pt-10 pb-5 ">
      <h1 className="mb-5 text-2xl lg:text-4xl text-info font-bold text-center">
        See What People Are Saying
      </h1>
      <div className="mx-auto divider w-3/5"></div>
      <div className=" bg-warning">
        <div className="container  mx-auto  mt-5 grid grid-cols-1 lg:grid-cols-3 justify-items-center ">
          <div className="card card-compact max-w-xs pt-7">
            <div className="flex justify-center avatar">
              <div className="w-52 rounded-full ring ring-white ring-offset-base-100 ring-offset-4">
                <img
                  src="https://gocomparify.com/pet/img/testimonial_3.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="card-body text-center text-black">
              <p className="text-base md:text-lg">
                "Clear communication and great coverage options. We're very
                thankful for Pets Coverage."
              </p>
              <p className="text-base font-bold">- May Povey </p>
            </div>
          </div>
          <div className="card card-compact max-w-xs pt-7">
            <div className="flex justify-center avatar">
              <div className="w-52 rounded-full ring ring-white ring-offset-base-100 ring-offset-4">
                <img
                  src="https://gocomparify.com/pet/img/testimonial_1.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="card-body text-center text-black">
              <p className="text-base md:text-lg">
                "This insurance company is simply the best! The agent was able
                to quote us and set up the policy all in under 20 minutes. "
              </p>
              <p className="text-base font-bold">- Leoni Banks</p>
            </div>
          </div>
          <div className="card card-compact max-w-xs pt-7">
            <div className="flex justify-center avatar">
              <div className="w-52 rounded-full ring ring-white ring-offset-base-100 ring-offset-4">
                <img
                  src="https://gocomparify.com/pet/img/testimonial_2.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="card-body text-center text-black">
              <p className="text-base md:text-lg">
                "Awesome insurance! Saved us thousands. Thank you Pet
                Coverage!!"
              </p>
              <p className="text-base font-bold">- Zach Miller</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeeWhatPeopleAreSaying;
