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
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-1">
          <div className="text-3xl sm:text-4xl md:text-5xl text-center pt-8 sm:pt-12 md:pt-16 text-white font-bold">
            Our Services
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 justify-center">
            {services.map((service, index) => (
              <div
                key={index}
                className="text-center p-8 sm:p-12 md:p-16 hover:scale-110 transition-all"
              >
                <Link href={service.id}>
                  <div className="rounded-full bg-tetra-alt w-20 sm:w-22 md:w-24 h-20 sm:h-22 md:h-24 flex items-center justify-center mx-auto">
                    <FontAwesomeIcon
                      icon={service.icon}
                      className="!w-8 !h-8 sm:!w-10 sm:!h-10 md:!w-12 md:!h-12"
                      color="#BB985E"
                    />
                  </div>
                  <div className="text-lg sm:text-xl md:text-2xl font-bold text-white hover:text-tetra text-center mt-4">
                    {service.title}
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <main className="flex min-h-screen flex-col scroll-smooth">
        <section>
          <div className="w-full">
            <section>
                   <div
        className={`${styles.parallax} min-h-screen flex flex-col p-8 md:p-20`}
      >
        <div
          className="text-white text-4xl sm:text-5xl font-extrabold text-center pb-20"
          // style={{ textShadow: '1px 1px 1px rgba(0, 0, 0, 0.9)' }}
          data-aos="fade-up"
        >
          Strategy <span className="">Solutions</span>
        </div>

        <div className="flex flex-col gap-12 w-full items-center justify-center">
          <Link href={"/services#custom-consultation"}>
            <div className="relative w-full max-w-lg bg-gradient-to-l from-gray-400 to-tetra/60 backdrop-blur-md rounded-3xl shadow-2xl hover:shadow-3xl hover:scale-[102%] transition-transform duration-700 p-4 md:p-8 pt-20 transform">
              <div className="rounded-full bg-tetra-alt w-24 h-24 flex items-center justify-center absolute left-1/2 transform -translate-x-1/2 -top-12 shadow-xl">
                <FontAwesomeIcon
                  icon={faHandshake}
                  className="!text-tetra text-4xl"
                />
              </div>

              <div className="text-tetra-alt text-lg font-medium bg-white/50 max-w-[640px] p-6 mt-6 rounded-lg shadow-lg hover:bg-white/70 transition-all duration-500 text-justify">
                <p className="mb-4">
                  Derived specifically from your business needs, consults with
                  our dedicated team to build just the right logistic solutions
                  suited to your business strategy and needs. <br></br>Perfect for :
                </p>
                <ul className="list-decimal pl-6 font-semibold space-y-3 text-justify">
                  <li>First time importers / exporters</li>
                  <li>
                    Well-established businesses optimizing their supply chain
                    costs and processes
                  </li>
                </ul>
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-tetra-alt text-center px-4  sm:pt-8 w-full">
                Custom Consultation
              </div>
            </div>
          </Link>
        </div>
        <div
          className="text-white text-4xl sm:text-5xl font-bold text-center py-16"
          // style={{ textShadow: '1px 1px 1px rgba(0, 0, 0, 0.9)' }}
          data-aos="fade-up"
        >
          Operation <span className="">Solution</span>
        </div>


        <div className="flex justify-center items-center" data-aos="fade-up">
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
                Interisland, we'll take care of the laundry list to ensure your
                logistic experience is smooth. Suitable for :
              </p>
              <ul className="list-decimal pl-6 font-semibold mt-4 space-y-2">
                <li>
                  Businesses with specific shipping requirements (air / marine /
                  domestic interisland).
                </li>
                <li>
                  Businesses aiming to streamline day-to-day operations by
                  appointing logistics experts to manage complex operations.
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
        </div>


      </div>
            </section>
          <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Strategy Solutions</h1>
        <p className="text-lg md:text-xl mb-8">
          Discover the best way to run your supply chain, <span className="font-semibold text-yellow-500">effortlessly.</span>
        </p>

        <button
          onClick={handleCustomConsultationClick}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition-all"
        >
          Custom Consultation
        </button>

        {/* Animate the circles with Tailwind's transition classes */}
        <Transition
          show={showCircles}
          enter="transition-opacity duration-500 ease-out"
          enterFrom="opacity-0 translate-y-10"
          enterTo="opacity-100 translate-y-0"
          leave="transition-opacity duration-500 ease-in"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-10"
        >
          <div className="flex flex-wrap justify-center mt-12 space-y-6 md:space-y-0 md:flex-nowrap items-center">
            
            {/* First Circle */}
            <div className="flex flex-col items-center space-y-2 w-full sm:w-auto">
              <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gray-200 rounded-full flex items-center justify-center text-center text-xs sm:text-sm">
                Licenses and Permits Fee & Considerations
              </div>
              <p className="text-xs sm:text-sm font-medium">Future Improvements</p>
            </div>

            {/* First Line */}
            <div className="hidden sm:block h-0.5 w-12 bg-gray-400"></div>

            {/* Second Circle */}
            <div className="flex flex-col items-center space-y-2 w-full sm:w-auto">
              <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gray-200 rounded-full flex items-center justify-center text-center text-xs sm:text-sm">
                Considerations based on the nature of goods delivered
              </div>
              <p className="text-xs sm:text-sm font-medium">Goods Nature</p>
            </div>

            {/* Second Line */}
            <div className="hidden sm:block h-0.5 w-12 bg-gray-400"></div>

            {/* Third Circle */}
            <div className="flex flex-col items-center space-y-2 w-full sm:w-auto">
              <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gray-200 rounded-full flex items-center justify-center text-center text-xs sm:text-sm">
                Tax, Customs, and Total Fee Optimization
              </div>
              <p className="text-xs sm:text-sm font-medium">Fee Optimization</p>
            </div>

            {/* Third Line */}
            <div className="hidden sm:block h-0.5 w-12 bg-gray-400"></div>

            {/* Fourth Circle */}
            <div className="flex flex-col items-center space-y-2 w-full sm:w-auto">
              <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gray-200 rounded-full flex items-center justify-center text-center text-xs sm:text-sm">
                Preserve satisfactory and efficient shipping time
              </div>
              <p className="text-xs sm:text-sm font-medium">Shipping Efficiency</p>
            </div>
          </div>
        </Transition>
      </div>
    </div>
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
            <div
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
                  Discover the best way to run your supply chain, <span className="text-tetra font-semibold">effortlessly.</span>
                </p>
                <p className="text-tetra-alt mt-4 text-lg text-justify">
                  Our team of experts will develop a bespoke supply chain customs strategy that only experts with 20 years of experience can do.
                </p>
                <p className="text-tetra-alt mt-4 text-lg text-justify">
                  Starting from your goal, <b>we based our strategy on multiple factors</b> that are <b>specifically influencing your business logistic practice</b>.
                </p>
                {/* <p className="text-tetra-alt mt-4 text-lg text-justify">
                  Starting from your goal,<span className="text-tetra font-semibold"> we based our strategy on
                  multiple factors</span>  that we have learnt throughout our decades
                  long experience are <span className="text-tetra font-semibold">specifically influencing your business
                  logistic practice</span>. 
                </p> */}
                <p className="text-tetra mt-4 text-lg text-justify font-semibold">
                  Skip the additional liability, risks and costs of entering and understanding the logistic process all by yourself.
                </p>
              </div>
            </div>
            <div
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
                  Expect a <span className="text-tetra font-semibold">simplified and easy logistic experience</span> when our team handle the multiple point of contacts and specifics. 
                </p>
                <p className="text-tetra-alt mt-4 text-lg text-justify font-semibold">
                 Stay connected throughout the journey without the unnecessary complexities.
                </p>
              </div>
            </div>
            <div
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
                   Master the complex regulations and procedures of international custom with <span className="text-tetra font-semibold">our licensed and experienced team</span>.
                </p>
                <p className="text-tetra-alt mt-4 text-lg text-justify font-semibold">
                  Our streamlined yet detailed process ensures a custom governance compliant and timely international shipping, even for cargo en route.
                </p>
              </div>
            </div>
            <div
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
                  <b>Designed to support bulk deliveries within the archipelago</b>, reach <b>even remote places fast and reliably</b> with TML vast delivery networks.
                </p>
              </div>
            </div>
            <p>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
