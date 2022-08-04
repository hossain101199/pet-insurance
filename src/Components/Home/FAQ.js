import React from "react";
import searchbg from "../../IMG/Banner-BG.png";

const FAQ = () => {
  return (
    <div
      id="FAQ"
      className="min-h-fit py-10 bg-info"
      style={{
        background: `url(${searchbg})`,
        // backgroundSize: "cover",
        backgroundSize: "100%",
        // backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto">
        <h1 className="mb-5 text-4xl lg:text-6xl text-info font-bold text-center">
          FAQ
        </h1>
        <div className="px-5 text-black text-base grid justify-items-center">
          <div
            tabIndex="0"
            className="max-w-3xl mt-2 collapse collapse-plus border border-primary bg-base-100 rounded-box"
          >
            <input type="checkbox" className="peer" />
            <div className="collapse-title text-xl font-bold">
              What does pet insurance cover?
            </div>
            <div className="collapse-content">
              <p className="text-base md:text-lg">
                Pet insurance is an investment in your furry friend’s health.
                Pet insurance will protect your family from financial disaster
                if something happens to your pet. Pet insurance is similar to
                human health insurance and varies between providers, plan
                options, and coverage. This is why it is important to do
                research to find the best coverage for you. Pet insurance plans
                cover veterinary care defined by the policy. The most
                comprehensive plans will cover routine pet care throughout your
                pet’s life such as teeth cleaning, vaccinations, and check-ups.
                Some plans only cover specific things such as unexpected
                emergencies like illness or injury.
              </p>
            </div>
          </div>
          <div
            tabIndex="1"
            className="max-w-3xl mt-2 collapse collapse-plus border border-primary bg-base-100 rounded-box"
          >
            <input type="checkbox" className="peer" />
            <div className="collapse-title text-xl font-bold">
              How does pet insurance work?
            </div>
            <div className="collapse-content">
              <p className="text-base md:text-lg">
                Pet insurance varies by insurance provider and coverage
                selections. In summary, this is how pet insurance works. 1.
                Compare and find the best plan for you and your pet. 2. Once you
                have selected your policy, you personalize your pet insurance
                plan by selecting your deductible, co-pay, or reimbursement
                percentage options. 3. You pay the annual or monthly premiums
                and stay up to date with all the routine care and vaccines for
                your cat or dog. 4. Should your pet become ill or injured, you
                can visit a licensed veterinarian for treatment. 5. After
                seeking pet care, you submit a claim to your insurance company
                and will be reimbursed for treatment covered by your policy. 6.
                Get reimbursed by your insurance provider up to 100% of the
                claim depending on the pet insurance plan you choose.
              </p>
            </div>
          </div>
          <div
            tabIndex="2"
            className="max-w-3xl mt-2 collapse collapse-plus border border-primary bg-base-100 rounded-box"
          >
            <input type="checkbox" className="peer" />
            <div className="collapse-title text-xl font-bold">
              What is the best pet insurance?
            </div>
            <div className="collapse-content">
              <p className="text-base md:text-lg">
                The best policy is the one that is right for you based on you.
                Everyone’s budgets, needs, breed risks, and lifestyles vary.
                This is why it’s so important to compare pet health insurance
                plans before committing to an insurance company. Choosing the
                best plan isn’t about finding the cheapest option. It’s all
                about finding the coverage that best meets your needs and budget
                without sacrificing your pet’s health. Pet insurance and
                customized wellness coverage ensure the best possible veterinary
                care throughout your pet’s life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
