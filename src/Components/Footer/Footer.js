import React from "react";
const Footer = () => {
  const d = new Date();
  const year = d.getFullYear();
  return (
    <div className="bg-gray-800">
      <footer className="container mx-auto footer p-10 text-lg md:text-xl  text-white">
        <div>
          <span className="footer-title">Pet Insurance Plans</span>
          <p href="/" className="link link-hover">
            Accidental Illness Plans
          </p>
          <p href="/" className="link link-hover">
            Accident Plan
          </p>
          <p href="/" className="link link-hover">
            Wellness Care Plan
          </p>
          <p href="/" className="link link-hover">
            Customized Plan
          </p>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <p href="/" className="link link-hover">
            About us
          </p>
          <p href="/" className="link link-hover">
            Contact
          </p>
          <p href="/" className="link link-hover">
            Affiliate
          </p>
          <p href="/" className="link link-hover">
            Agents
          </p>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <p href="/" className="link link-hover">
            Terms of use
          </p>
          <p href="/" className="link link-hover">
            Privacy policy
          </p>
          <p href="/" className="link link-hover">
            Cookie policy
          </p>
        </div>
      </footer>

      <div className="bg-gray-900 text-center p-4 text-white">
        <div>
          <p>Copyright © {year} - All right reserved by Pets Coverage</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
