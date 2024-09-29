"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import styles from "./page.module.css";
import Footer from "@/components/Footer";
import { services } from "@/data/services";
import AOS from "aos";
import "aos/dist/aos.css"; // Import the AOS styles
import { Transition } from "@headlessui/react";
import {
  faBoxes,
  faHandshake,
  faGlobeAsia,
  faShippingFast,
  faPeopleGroup,
} from "@fortawesome/free-solid-svg-icons";

export default function Services() {
  useEffect(() => {
    AOS.init({
      duration: 2000, // Animation duration
      // easing: "ease-in-out", // Animation easing
      // once: true, // Whether animation should happen only once - while scrolling down
    });
  }, []);
  const [showCircles, setShowCircles] = useState(false);

  const handleCustomConsultationClick = () => {
    setShowCircles(true);
  };

  return (
    <div className="bg-white">
      <Navbar />
      <div
        className="bg-cover bg-center h-auto w-full relative"
        style={{ backgroundImage: "url(/img/container.png)" }}
      >
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative z-1">
          <div className="text-3xl sm:text-4xl md:text-5xl text-center pt-8 sm:pt-12 md:pt-16 text-white font-bold">
            Our Services
          </div>
          <div className="grid grid-cols-2 justify-center lg:px-64 md:px-32">
            <div className="text-center p-8 sm:p-12 md:p-16 hover:scale-110 transition-all">
              <div className="rounded-full bg-tetra-alt w-20 sm:w-22 md:w-24 h-20 sm:h-22 md:h-24 flex items-center justify-center mx-auto">
                <Link href="#strategy-solutions">
                  <FontAwesomeIcon
                    icon={faHandshake}
                    className="!w-8 !h-8 sm:!w-10 sm:!h-10 md:!w-12 md:!h-12"
                    color="#BB985E"
                  />
                </Link>
              </div>
              <div className="text-lg sm:text-xl md:text-2xl font-bold text-white hover:text-tetra text-center mt-4">
                Strategy Solution
              </div>
            </div>
            <div className="text-center p-8 sm:p-12 md:p-16 hover:scale-110 transition-all">
              <div className="rounded-full bg-tetra-alt w-20 sm:w-22 md:w-24 h-20 sm:h-22 md:h-24 flex items-center justify-center mx-auto">
                <Link href="#operation-solutions">
                  <FontAwesomeIcon
                    icon={faPeopleGroup}
                    className="!w-8 !h-8 sm:!w-10 sm:!h-10 md:!w-12 md:!h-12"
                    color="#BB985E"
                  />
                </Link>
              </div>
              <div className="text-lg sm:text-xl md:text-2xl font-bold text-white hover:text-tetra text-center mt-4">
                Operation Solutions
              </div>
            </div>
          </div>
        </div>
      </div>
      <main className="flex min-h-screen flex-col scroll-smooth">
        <section
          id="strategy-solutions"
          className="relative bg-gradient-to-b from-gray-100 to-white py-24 overflow-hidden"
        >
          {/* Heading */}
          <div className="m-6">
            <div
              className="relative z-10 text-tetra-alt text-4xl sm:text-5xl font-extrabold text-center mb-20"
              data-aos="fade-up"
            >
              Strategy <span className="text-tetra">Solutions</span>
            </div>
                      {/* Main Content */}
          <div
            className="relative flex flex-col md:flex-row justify-center items-center gap-16 w-full max-w-7xl mx-auto"
            data-aos="fade-in"
          >
            {/* Custom Consultation Block */}
            <div className="relative w-full md:w-2/3 lg:w-1/2 bg-gradient-to-l from-gray-400 to-tetra/60 backdrop-blur-md rounded-3xl shadow-2xl hover:shadow-3xl hover:scale-105 transition-transform duration-700  p-6 pt-10 md:p-12  z-10">
              {/* Icon at the Top */}
              <div className="absolute left-1/2 transform -translate-x-1/2 -top-16 rounded-full bg-tetra-alt w-24 h-24 flex items-center justify-center shadow-xl">
                <FontAwesomeIcon
                  icon={faHandshake}
                  className="!text-tetra text-4xl"
                />
              </div>

              {/* Main Text */}
              <div className="text-tetra-alt text-lg font-medium text-justify">
                <p className="mb-6">
                  <b>Custom Consultation</b> for advice crafted just for you --
                  consult with our dedicated team to devise the right logistic
                  solutions personalized to your business strategy and needs.
                  <br></br>
                  Perfect for:
                </p>
                <ul className="list-decimal pl-6 font-semibold space-y-3">
                  <li>First time importers / exporters</li>
                  <li>
                    Well-established businesses optimizing their supply chain
                    costs and processes
                  </li>
                </ul>
              </div>
            </div>
          </div>
          </div>

          {/* Decorative Background Elements */}
          {/* Top-left circle */}
          <div className="absolute z-0 top-0 left-0 w-48 h-48 bg-tetra-alt opacity-20 rounded-full md:w-64 md:h-64 lg:w-96 lg:h-96"></div>

          {/* Bottom-right circle */}
          <div className="absolute z-0 bottom-0 right-0 w-40 h-40 bg-tetra opacity-30 rounded-full md:w-56 md:h-56 lg:w-72 lg:h-72"></div>

          {/* Additional Floating Elements */}
          <div className="absolute z-0 top-10 right-1/3 w-20 h-20 bg-white opacity-50 rounded-full md:w-28 md:h-28 lg:w-40 lg:h-40"></div>
          <div className="absolute z-0 bottom-20 left-1/4 w-14 h-14 bg-tetra opacity-30 rounded-full md:w-20 md:h-20 lg:w-28 lg:h-28"></div>
        </section>

        <section
          className="bg-no-repeat bg-right-bottom lg:bg-cover lg:bg-center bg-auto min-h-screen"
          style={{
            backgroundImage: `url(/img/services/bg.png)`,
          }}
        >
          <div
            className="flex flex-col p-6 md:p-8 lg:p-24 items-center justify-center min-h-screen"
            data-aos="fade-in"
          >
            <div className="text-justify grid grid-cols-1 lg:grid-cols-2 pt-8">
              <div className="flex justify-center flex-col max-lg:rounded-lg max-lg:bg-gradient-to-tr from-gray-200 to-white max-lg:p-8 max-lg:mb-8 max-lg:hover:scale-[102%] max-lg:hover:shadow-2xl max-lg:transition-all max-lg:duration-300">
                <h1 className="text-2xl md:text-3xl font-bold mb-4 text-tetra-alt ">
                  Custom Consultation
                </h1>
                <p className="text-lg md:text-xl mb-8 text-tetra-alt ">
                  Discover the best way to run your supply chain,{" "}
                  <span className="font-bold text-tetra max-lg:text-tetra">
                    effortlessly.
                  </span>
                </p>
                <p className="text-tetra-alt text-justify pb-3 ">
                  Our team of experts will develop a bespoke supply chain
                  customs strategy that only experts with{" "}
                  <b>years of experience</b> can do.
                </p>
                <p className="text-tetra-alt text-justify pb-3">
                  Starting from your goal,{" "}
                  <b>we based our strategy on multiple factors</b> that are{" "}
                  <b>
                    specifically influencing your business logistic practice
                  </b>
                  .
                </p>
                <p className="text-tetra text-justify pb-3 italic font-bold max-lg:hidden">
                  Skip the additional liability, risks and costs of entering{" "}
                  <br />
                  and understanding the logistic process <br />
                  all by yourself.
                </p>
                <p className="text-tetra text-justify pb-3 italic font-bold lg:hidden">
                  Skip the additional liability, risks and costs of entering 
                  and understanding the logistic process 
                  all by yourself.
                </p>
                {/* <button
                  onClick={handleCustomConsultationClick}
                  className="bg-tetra text-white px-6 py-3 rounded-lg shadow-md hover:bg-tetra/80 transition-all"
                >
                  Custom Consultation
                </button> */}
              </div>
              <div className="flex justify-center items-center">
                <img
                  src="/img/custom-consultation.png"
                  alt=""
                  className="sm:w-[450px] sm:h-[420px] w-[300px] h-[300px]"
                />
              </div>
            </div>
          </div>
        </section>
        <section
          id="operation-solutions"
          className="relative bg-gradient-to-b from-gray-100 to-white py-24 overflow-hidden"
        >
          {/* Heading */}
          <div className="m-6">
            <div
              className="relative z-10 text-tetra-alt text-4xl sm:text-5xl font-extrabold text-center mb-20"
              data-aos="fade-up"
            >
              <span className="text-tetra">Operation</span> Solutions
            </div>
            {/* Main Content */}
            <div
              className="relative flex flex-col md:flex-row justify-center items-center gap-16 w-full max-w-7xl mx-auto"
              data-aos="fade-in"
            >
              {/* Custom Consultation Block */}
              <div className="relative w-full md:w-2/3 lg:w-1/2 bg-gradient-to-l from-gray-400 to-tetra/60 backdrop-blur-md rounded-3xl shadow-2xl hover:shadow-3xl hover:scale-105 transition-transform duration-700 p-6 pt-10 md:p-12  z-10">
                {/* Icon at the Top */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -top-16 rounded-full bg-tetra-alt w-24 h-24 flex items-center justify-center shadow-xl">
                  <FontAwesomeIcon
                    icon={faPeopleGroup}
                    className="!text-tetra text-4xl"
                  />
                </div>

                {/* Main Text */}
                <div className="text-tetra-alt text-lg font-medium text-justify">
                  <p className="mb-6">
                    <b>
                      International Freight, Custom Clearance, and Domestic
                      Interisland,
                    </b>{" "}
                    whichever you need – we'll handle the paperwork and go
                    through all the checklists to give you a smooth logistic
                    experience. <br />
                    Suitable for :
                  </p>
                  <ul className="list-decimal pl-6 font-semibold space-y-3">
                    <li>
                      Businesses with specific shipping requirements (air /
                      marine / domestic interisland).
                    </li>
                    <li>
                      Businesses aiming to streamline day-to-day operations by
                      appointing logistics experts to manage complex operations.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Background Elements */}
          {/* Top-left circle */}
          <div className="absolute z-0 top-0 right-0 w-48 h-48 bg-tetra-alt opacity-20 rounded-full md:w-64 md:h-64 lg:w-96 lg:h-96"></div>

          {/* Bottom-right circle */}
          <div className="absolute z-0 left-0 right-0 w-40 h-40 bg-tetra opacity-30 rounded-full md:w-56 md:h-56 lg:w-72 lg:h-72"></div>

          {/* Additional Floating Elements */}
          <div className="absolute z-0 top-10 right-1/3 w-20 h-20 bg-white opacity-50 rounded-full md:w-28 md:h-28 lg:w-40 lg:h-40"></div>
          <div className="absolute z-0 bottom-20 left-1/4 w-14 h-14 bg-tetra opacity-30 rounded-full md:w-20 md:h-20 lg:w-28 lg:h-28"></div>
        </section>
        <section className="">
          {/* <div className="w-full bg-gradient-to-l from-tetra-alt/50 to-white p-6"> */}
          <div className="w-full  bg-gradient-to-b from-tetra to-tetra/10 p-6">
            <section>
              <div className="flex flex-col">
                <div className="flex flex-col gap-12 w-full items-center justify-center pt-16">
                  <div className="py-16 lg:px-20 " data-aos="fade-in">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                      {/* Left side: Services */}
                      <div>
                        {/* Deliver your goods, hidden on large screens */}
                        <div className="pb-8">
                          <div className="sm:hidden bg-tetra-alt text-white p-6 shadow-lg rounded-lg transition-transform duration-500 hover:scale-105">
                            <h3 className="text-xl font-bold mb-2 text-justify">
                              Deliver your goods, your way
                            </h3>
                            <p className="text-base text-justify">
                              Harness our extensive experience and network in
                              the logistics industry for a seamless logistic
                              experience in any place across the world.
                            </p>
                          </div>
                        </div>

                        {/* Freight Forwarding */}
                        <div className="mb-8 text-justify group">
                          <h2 className="text-2xl md:text-3xl font-bold text-tetra-alt mb-4 transition-colors group-hover:text-tetra">
                            Freight Forwarding
                          </h2>
                          <p className="text-gray-700 text-lg leading-relaxed">
                            Expect a{" "}
                            <span className="font-semibold">
                              simplified and easy logistic experience
                            </span>{" "}
                            when our team handles multiple points of contact and
                            specifics.{" "}
                            <span className="font-semibold">
                              Stay connected throughout the shipping journey
                            </span>{" "}
                            without unnecessary complexities.
                          </p>
                          {/* Hover animation */}
                          <div className="w-12 h-1 bg-tetra-alt mt-4 transition-transform group-hover:w-16"></div>
                        </div>

                        {/* Customs Clearance */}
                        <div className="mb-8 text-justify group">
                          <h2 className="text-2xl md:text-3xl font-bold text-tetra-alt mb-4 transition-colors group-hover:text-tetra">
                            Customs Clearance
                          </h2>
                          <p className="text-gray-700 text-lg leading-relaxed">
                            Master the complex regulations and procedures of
                            international customs with our licensed and
                            experienced team. Our streamlined yet detailed
                            process ensures a custom governance-compliant and
                            timely international shipping, even for cargo en
                            route.
                          </p>
                          {/* Hover animation */}
                          <div className="w-12 h-1 bg-tetra-alt mt-4 transition-transform group-hover:w-16"></div>
                        </div>

                        {/* Interisland */}
                        <div className="mb-8 text-justify group">
                          <h2 className="text-2xl md:text-3xl font-bold text-tetra-alt mb-4 transition-colors group-hover:text-tetra">
                            Interisland
                          </h2>
                          <p className="text-gray-700 text-lg leading-relaxed">
                            Designed to support bulk deliveries within the
                            archipelago, reaching even remote places fast and
                            reliably with our vast delivery network.
                          </p>
                          {/* Hover animation */}
                          <div className="w-12 h-1 bg-tetra-alt mt-4 transition-transform group-hover:w-16"></div>
                        </div>
                      </div>

                      {/* Right side: Image and Delivery Information */}
                      <div className="relative">
                        <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-500 hover:scale-105">
                          <img
                            src="/img/new-container.jpg"
                            alt="container"
                            className="w-full h-full object-cover rounded-lg"
                          />
                        </div>
                        <div className="hidden sm:block absolute top-8 right-8 bg-tetra-alt text-white p-6 max-w-sm shadow-lg rounded-lg transform transition-all duration-500 hover:scale-105 hover:bg-tetra/90">
                          <h3 className="text-xl font-bold mb-2 text-justify">
                            Deliver your goods, your way
                          </h3>
                          <p className="text-sm text-justify">
                            Harness our extensive experience and network in the
                            logistics industry for a seamless logistic
                            experience in any place across the world.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
