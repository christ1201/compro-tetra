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
          className="bg-gradient-to-b from-gray-100 to-white p-6"
        >
          <div
            className="text-tetra-alt text-4xl sm:text-5xl font-extrabold text-center py-20"
            // style={{ textShadow: '1px 1px 1px rgba(0, 0, 0, 0.9)' }}
            data-aos="fade-up"
          >
            Strategy <span className="">Solutions</span>
          </div>

          <div
            className="flex flex-col gap-12 w-full items-center justify-center"
            data-aos="fade-in"
          >
            <div className="relative w-full max-w-lg bg-gradient-to-l from-gray-400 to-tetra/60 backdrop-blur-md rounded-3xl shadow-2xl hover:shadow-3xl hover:scale-[102%] transition-transform duration-700 p-4 pt-8 md:pt-10 transform">
              <div className="rounded-full bg-tetra-alt w-24 h-24 flex items-center justify-center absolute left-1/2 transform -translate-x-1/2 -top-12 shadow-xl">
                <FontAwesomeIcon
                  icon={faHandshake}
                  className="!text-tetra text-4xl"
                />
              </div>

              <div className="text-tetra-alt text-lg font-medium bg-white/50 max-w-[640px] p-6 mt-6 rounded-lg shadow-lg hover:bg-white/70 transition-all duration-500 text-justify">
                <p className="mb-4">
                  Custom Consultation, derived specifically from your business
                  needs, consults with our dedicated team to build just the
                  right logistic solutions suited to your business strategy and
                  needs. <br></br>Perfect for :
                </p>
                <ul className="list-decimal pl-6 font-semibold space-y-3 text-justify">
                  <li>First time importers / exporters</li>
                  <li>
                    Well-established businesses optimizing their supply chain
                    costs and processes
                  </li>
                </ul>
              </div>
              {/* <div className="text-2xl sm:text-3xl font-bold text-tetra-alt text-center px-4  sm:pt-8 w-full">
                        Custom Consultation
                      </div> */}
            </div>
          </div>
        </section>
        <section>
          <div className="flex flex-col p-6 md:p-8 lg:p-24" data-aos="fade-in">
            <div className="text-justify grid grid-cols-1 lg:grid-cols-2">
              <div className="flex justify-center  flex-col">
                <h1 className="text-2xl md:text-3xl font-bold mb-4 text-tetra-alt">
                  Custom Consultation
                </h1>
                <p className="text-lg md:text-xl mb-8">
                  Discover the best way to run your supply chain,{" "}
                  <span className="font-semibold text-tetra">
                    effortlessly.
                  </span>
                </p>
                <p className="text-tetra-alt text-justify pb-3">
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
                <p className="text-tetra text-justify pb-3 italic font-semibold">
                  Skip the additional liability, risks and costs of entering and
                  understanding the logistic process all by yourself.
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
                  className="md:w-[450px] md:h-[420px] w-[300px] h-[300px]"
                />
              </div>
            </div>
          </div>
        </section>
        <section id="operation-solutions" className="pt-4">
          {/* <div className="w-full bg-gradient-to-l from-tetra-alt/50 to-white p-6"> */}
          <div className="w-full  bg-gradient-to-b from-tetra to-tetra/10 p-6">
            <section>
              <div className="flex flex-col">
                <div
                  className="text-tetra-alt text-4xl sm:text-5xl font-bold text-center pt-12"
                  // style={{ textShadow: '1px 1px 1px rgba(0, 0, 0, 0.9)' }}
                  data-aos="fade-up"
                >
                  Operation <span className="">Solutions</span>
                </div>

                <div className="flex flex-col gap-12 w-full items-center justify-center pt-16">
                  <div
                    className="relative w-full max-w-lg bg-gradient-to-l from-gray-400 to-tetra/60 backdrop-blur-md rounded-3xl shadow-2xl hover:shadow-3xl hover:scale-[102%] transition-transform duration-700 p-4 pt-8 md:pt-10 transform"
                    data-aos="fade-in"
                  >
                    <div className="rounded-full bg-tetra-alt w-24 h-24 flex items-center justify-center absolute left-1/2 transform -translate-x-1/2 -top-12 shadow-xl">
                      <FontAwesomeIcon
                        icon={faPeopleGroup}
                        className="!text-tetra text-4xl"
                      />
                    </div>

                    <div className="text-tetra-alt text-lg font-medium bg-white/50 max-w-[640px] p-6 mt-6 rounded-lg shadow-lg hover:bg-white/70 transition-all duration-500 text-justify">
                      <p className="mb-4">
                        <b>
                          International Freight, Custom Clearance, and Domestic
                          Interisland,
                        </b>{" "}
                        we'll take care of the laundry list to ensure your
                        logistic experience is smooth. <br />
                        Suitable for :
                      </p>
                      <ul className="list-decimal pl-6 font-semibold space-y-3 text-justify">
                        <li>First time importers / exporters</li>
                        <li>
                          Well-established businesses optimizing their supply
                          chain costs and processes
                        </li>
                      </ul>
                    </div>
                  </div>
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
                  {/* <div className="py-16 lg:px-20" data-aos="fade-in">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                      <div>
                        <div className="pb-8">
                          <div className=" sm:hidden bg-tetra-alt text-white p-6 shadow-lg rounded-lg">
                            <h3 className="text-xl font-bold mb-2 text-justify">
                              Deliver your goods, your way
                            </h3>
                            <p className="text-base text-justify">
                              Harness our extensive experience and network in the
                              logistics industry for a seamless logistic
                              experience in any place across the world.
                            </p>
                          </div>
                        </div>
                        <div className="mb-8 text-justify">
                          <h2 className="text-2xl md:text-3xl font-bold text-tetra-alt mb-2">
                            Freight Forwarding
                          </h2>
                          <p className="text-gray-700 text-lg">
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
                        </div>

                        <div className="mb-8 text-justify">
                          <h2 className="text-2xl md:text-3xl font-bold text-tetra-alt mb-2">
                            Customs Clearance
                          </h2>
                          <p className="text-gray-700 text-lg">
                            Master the complex regulations and procedures of
                            international customs with our licensed and
                            experienced team. Our streamlined yet detailed
                            process ensures a custom governance-compliant and
                            timely international shipping, even for cargo en
                            route.
                          </p>
                        </div>

                        <div className="mb-8 text-justify">
                          <h2 className="text-2xl md:text-3xl font-bold text-tetra-alt mb-2">
                            Interisland
                          </h2>
                          <p className="text-gray-700 text-lg">
                            Designed to support bulk deliveries within the
                            archipelago, reaching even remote places fast and
                            reliably with our vast delivery network.
                          </p>
                        </div>
                      </div>
                      <div className="relative">
                        <img
                          src="/img/new-container.jpg" // Update this path with the actual image path
                          alt="container"
                          className="w-full h-full object-cover"
                        />
                        <div className="max-sm:hidden absolute top-4 right-4 bg-tetra-alt text-white p-6 max-w-sm shadow-lg rounded-lg">
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
                  </div> */}
                </div>
                {/* <div
                  className="flex justify-center items-center"
                  data-aos="fade-up"
                >
                  <div className="relative w-full max-w-5xl bg-gradient-to-l from-gray-400 to-tetra/60 backdrop-blur-md rounded-3xl shadow-2xl hover:shadow-3xl hover:scale-[102%] transition-transform duration-700 p-4 md:p-8 pt-10 transform">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center mb-8">
                      <div
                        className="flex flex-col items-center hover:scale-105 transition duration-500 cursor-pointer"
                        // onClick={() => openModal("freight")}
                      >
                        <div className="rounded-full bg-tetra-alt w-24 h-24 flex items-center justify-center mb-2 shadow-xl">
                          <FontAwesomeIcon
                            icon={faGlobeAsia}
                            className="text-tetra text-3xl !h-10"
                          />
                        </div>
                        <span className="text-2xl sm:text-3xl font-bold text-gray-700">
                          International Freight
                        </span>
                      </div>

                      <div
                        className="flex flex-col items-center hover:scale-105 transition duration-500 cursor-pointer"
                        // onClick={() => openModal("brokerage")}
                      >
                        <div className="rounded-full bg-tetra-alt w-24 h-24 flex items-center justify-center mb-2 shadow-xl">
                          <FontAwesomeIcon
                            icon={faBoxes}
                            className="text-tetra text-3xl !h-10"
                          />
                        </div>
                        <span className="text-2xl sm:text-3xl font-bold text-gray-700">
                          Custom Clearance
                        </span>
                      </div>

                      <div
                        className="flex flex-col items-center hover:scale-105 transition duration-500 cursor-pointer"
                        // onClick={() => openModal("domestic")}
                      >
                        <div className="rounded-full bg-tetra-alt w-24 h-24 flex items-center justify-center mb-2 shadow-xl">
                          <FontAwesomeIcon
                            icon={faShippingFast}
                            className="text-tetra text-3xl !h-10"
                          />
                        </div>
                        <span className="text-2xl sm:text-3xl font-bold text-gray-700">
                          Domestic Interisland
                        </span>
                      </div>
                    </div>

                    <div className="text-tetra-alt text-lg font-medium bg-white/50 p-6 mt-6 rounded-lg shadow-lg hover:bg-white/70 transition-all duration-500 text-justify">
                      <p>
                        International Freight, Custom Clearance, and Domestic
                        Interisland, we'll take care of the laundry list to
                        ensure your logistic experience is smooth. Suitable for
                        :
                      </p>
                      <ul className="list-decimal pl-6 font-semibold mt-4 space-y-2">
                        <li>
                          Businesses with specific shipping requirements (air /
                          marine / domestic interisland).
                        </li>
                        <li>
                          Businesses aiming to streamline day-to-day operations
                          by appointing logistics experts to manage complex
                          operations.
                        </li>
                      </ul>
                    </div>

                    <div
                      className="flex max-sm:items-center max-sm:justify-center pt-8"
                      data-aos="fade-in"
                    >
                      <a href="/services">
                        <span className="text-tetra-alt font-bold text-xl hover:underline hover:text-alt/50">
                          Learn More About Our Services
                        </span>
                      </a>
                    </div>
                  </div>
                </div> */}
              </div>
            </section>
            {/* {services.map((service, index) => (
              <div
                key={index}
                className={`min-h-screen flex flex-col md:flex-row ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } items-center`}
                id={`${service.id.substring(1)}`}
              >
                <div
                  className="md:w-1/2 w-full"
                  data-aos="fade-up"
                  data-aos-easing="ease-out"
                  data-aos-duration="1000"
                >
                  <div
                    className={`${
                      styles.parallax
                    } shadow-lg w-full lg:h-[600px] h-[400px] bg-cover ${
                      index % 2 === 0
                        ? "md:rounded-r-full bg-left"
                        : "md:rounded-l-full bg-right"
                    }`}
                    style={{
                      backgroundImage: `url(${service.image})`,
                    }}
                  />
                </div>
                <div
                  className="md:w-1/2 md:px-8 mt-8 md:mt-0 p-12"
                  data-aos="fade-up"
                  data-aos-easing="ease-out"
                  data-aos-duration="1000"
                >
                  <h2 className="text-tetra text-4xl font-bold">
                    0{index + 1}
                  </h2>
                  <h3 className="text-3xl font-bold text-tetra-alt mt-2">
                    {service.title}
                  </h3>
                  <p className="text-tetra-alt mt-4 text-lg">
                    {service.description}
                  </p>
                </div>
              </div>
            ))} */}
            {/* <div
              className={`min-h-screen flex flex-col md:flex-row items-center`}
              id="custom-consultation"
            >
              <div
                className="md:w-1/2 w-full"
                data-aos="fade-up"
                data-aos-easing="ease-out"
                data-aos-duration="1000"
              >
                <div
                  className={`${styles.parallax} 
                    shadow-lg w-full lg:h-[600px] h-[400px] bg-cover md:rounded-r-full bg-right`}
                  style={{
                    backgroundImage: `url(${"/img/services/consultation.jpg"})`,
                  }}
                />
              </div>
              <div
                className="md:w-1/2 md:px-8 mt-8 md:mt-0 p-12"
                data-aos="fade-up"
                data-aos-easing="ease-out"
                data-aos-duration="1000"
              >
                <h2 className="text-tetra text-4xl font-bold">01</h2>
                <h3 className="text-3xl font-bold text-tetra-alt mt-2">
                  Custom Consultation
                </h3>
                <p className="text-tetra-alt mt-4 text-xl font-semibold text-justify">
                  Discover the best way to run your supply chain,{" "}
                  <span className="text-tetra font-semibold">
                    effortlessly.
                  </span>
                </p>
                <p className="text-tetra-alt mt-4 text-lg text-justify">
                  Our team of experts will develop a bespoke supply chain
                  customs strategy that only experts with 20 years of experience
                  can do.
                </p>
                <p className="text-tetra-alt mt-4 text-lg text-justify">
                  Starting from your goal,{" "}
                  <b>we based our strategy on multiple factors</b> that are{" "}
                  <b>
                    specifically influencing your business logistic practice
                  </b>
                  .
                </p>
                <p className="text-tetra mt-4 text-lg text-justify font-semibold">
                  Skip the additional liability, risks and costs of entering and
                  understanding the logistic process all by yourself.
                </p>
              </div>
            </div> */}
            {/* <div
              className={`min-h-screen flex flex-col md:flex-row-reverse items-center`}
              id="international-freight-forwarding"
            >
              <div
                className="md:w-1/2 w-full"
                data-aos="fade-up"
                data-aos-easing="ease-out"
                data-aos-duration="1000"
              >
                <div
                  className={`${styles.parallax} 
                    shadow-lg w-full lg:h-[600px] h-[400px] bg-cover md:rounded-l-full bg-left`}
                  style={{
                    backgroundImage: `url(${"/img/services/international.jpg"})`,
                  }}
                />
              </div>
              <div
                className="md:w-1/2 md:px-8 mt-8 md:mt-0 p-12"
                data-aos="fade-up"
                data-aos-easing="ease-out"
                data-aos-duration="1000"
              >
                <h2 className="text-tetra text-4xl font-bold">02</h2>
                <h3 className="text-3xl font-bold text-tetra-alt mt-2">
                  International Freight Forwarding
                </h3>
                <p className="text-tetra-alt mt-4 text-lg text-justify">
                  Expect a{" "}
                  <span className="text-tetra font-semibold">
                    simplified and easy logistic experience
                  </span>{" "}
                  when our team handle the multiple point of contacts and
                  specifics.
                </p>
                <p className="text-tetra-alt mt-4 text-lg text-justify font-semibold">
                  Stay connected throughout the journey without the unnecessary
                  complexities.
                </p>
              </div>
            </div> */}
            {/* <div
              className={`min-h-screen flex flex-col md:flex-row items-center`}
              id="custom-clearance"
            >
              <div
                className="md:w-1/2 w-full"
                data-aos="fade-up"
                data-aos-easing="ease-out"
                data-aos-duration="1000"
              >
                <div
                  className={`${styles.parallax} 
                    shadow-lg w-full lg:h-[600px] h-[400px] bg-cover md:rounded-r-full bg-right`}
                  style={{
                    backgroundImage: `url(${"/img/services/brokerage.jpg"})`,
                  }}
                />
              </div>
              <div
                className="md:w-1/2 md:px-8 mt-8 md:mt-0 p-12"
                data-aos="fade-up"
                data-aos-easing="ease-out"
                data-aos-duration="1000"
              >
                <h2 className="text-tetra text-4xl font-bold">03</h2>
                <h3 className="text-3xl font-bold text-tetra-alt mt-2">
                  Custom Clearance
                </h3>
                <p className="text-tetra-alt mt-4 text-lg text-justify">
                  Master the complex regulations and procedures of international
                  custom with{" "}
                  <span className="text-tetra font-semibold">
                    our licensed and experienced team
                  </span>
                  .
                </p>
                <p className="text-tetra-alt mt-4 text-lg text-justify font-semibold">
                  Our streamlined yet detailed process ensures a custom
                  governance compliant and timely international shipping, even
                  for cargo en route.
                </p>
              </div>
            </div> */}
            {/* <div
              className={`min-h-screen flex flex-col md:flex-row-reverse items-center`}
              id="domestic-interisland"
            >
              <div
                className="md:w-1/2 w-full"
                data-aos="fade-up"
                data-aos-easing="ease-out"
                data-aos-duration="1000"
              >
                <div
                  className={`${styles.parallax} 
                    shadow-lg w-full lg:h-[600px] h-[400px] bg-cover md:rounded-l-full bg-left`}
                  style={{
                    backgroundImage: `url(${"/img/services/domestic.jpg"})`,
                  }}
                />
              </div>
              <div
                className="md:w-1/2 md:px-8 mt-8 md:mt-0 p-12"
                data-aos="fade-up"
                data-aos-easing="ease-out"
                data-aos-duration="1000"
              >
                <h2 className="text-tetra text-4xl font-bold">04</h2>
                <h3 className="text-3xl font-bold text-tetra-alt mt-2">
                  Domestic Interisland Shipping
                </h3>
                <p className="text-tetra-alt mt-4 text-lg text-justify">
                  <b>
                    Designed to support bulk deliveries within the archipelago
                  </b>
                  , reach <b>even remote places fast and reliably</b> with TML
                  vast delivery networks.
                </p>
              </div>
            </div> */}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
