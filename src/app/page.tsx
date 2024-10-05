"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBoxes,
  faBusinessTime,
  faTruck,
  faUsers,
  faHandshake,
  faGlobeAsia,
  faShippingFast,
  faBoxOpen,
  faMapLocationDot,
  faChevronDown,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./page.module.css";
import Footer from "@/components/Footer";
import AOS from "aos";
import "aos/dist/aos.css"; // Import the AOS styles
import Link from "next/link";
import { services } from "@/data/services";
import Modal from "@/components/Modal";
import Users from "@/components/icons/Users";
import Container from "@/components/icons/Container";
import GlobePoint from "@/components/icons/GlobePoint";
import Certified from "@/components/icons/Certified";
import Partner from "@/components/icons/Partner";
import { Transition } from "@headlessui/react";

export default function Home() {
  const [showNavbar, setShowNavbar] = useState(false);
  const [isOpenImport, setIsOpenImport] = useState(false);
  const [isOpenExport, setIsOpenExport] = useState(false);
  const [isOpenDomestic, setIsOpenDomestic] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 2000, // Animation duration
      // easing: "ease-in-out", // Animation easing
      once: true, // Whether animation should happen only once - while scrolling down
    });
  }, []);

  const marqueeData = [
    { id: 1, text: "TML", logo: "/img/marquee/1.jpeg" },
    { id: 2, text: "TML", logo: "/img/marquee/2.jpeg" },
    { id: 3, text: "TML", logo: "/img/marquee/3.jpeg" },
    { id: 4, text: "TML", logo: "/img/marquee/4.jpeg" },
    { id: 5, text: "TML", logo: "/img/marquee/5.jpeg" },
    { id: 6, text: "TML", logo: "/img/marquee/6.jpeg" },
    { id: 7, text: "TML", logo: "/img/marquee/7.jpeg" },
    { id: 8, text: "TML", logo: "/img/marquee/8.jpeg" },
    { id: 9, text: "TML", logo: "/img/marquee/9.jpeg" },
    { id: 10, text: "TML", logo: "/img/marquee/10.jpeg" },
    { id: 11, text: "TML", logo: "/img/marquee/11.jpeg" },
    { id: 12, text: "TML", logo: "/img/marquee/1.jpeg" },
    { id: 13, text: "TML", logo: "/img/marquee/2.jpeg" },
    { id: 14, text: "TML", logo: "/img/marquee/3.jpeg" },
    { id: 15, text: "TML", logo: "/img/marquee/4.jpeg" },
    { id: 16, text: "TML", logo: "/img/marquee/5.jpeg" },
    { id: 17, text: "TML", logo: "/img/marquee/6.jpeg" },
    { id: 18, text: "TML", logo: "/img/marquee/7.jpeg" },
    { id: 19, text: "TML", logo: "/img/marquee/8.jpeg" },
    { id: 20, text: "TML", logo: "/img/marquee/9.jpeg" },
    { id: 21, text: "TML", logo: "/img/marquee/10.jpeg" },
    { id: 22, text: "TML", logo: "/img/marquee/11.jpeg" },
  ];

  // const marqueeData = [...marqueeData, ...marqueeData];
  const no_wa = "628123456789";

  return (
    <div className="bg-white overscroll-x-none">
      {/* Navbar with animation */}
      <div
        className={`fixed top-0 left-0 w-full z-[100] transition-transform duration-500 ease-in-out ${
          showNavbar ? "transform translate-y-0" : "transform -translate-y-full"
        }`}
      >
        <Navbar />
      </div>

      {/* Video Section */}
      <div className="relative flex min-h-screen flex-col justify-between">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-screen object-cover"
          onContextMenu={(e) => e.preventDefault()}
          disablePictureInPicture
          controlsList="nodownload nofullscreen noplaybackrate"
        >
          <source src="vid/tetra.mp4" type="video/mp4" />
          <track
            src="/path/to/captions.vtt"
            kind="subtitles"
            srcLang="en"
            label="English"
          />
          Your browser does not support the video tag.
        </video>
        {/* Dark Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-10 -z-100"></div>
        {/* Centered Text */}
        <div className="absolute w-full h-full flex flex-col items-center justify-end px-16 pb-32">
          <h1
            className="text-white text-4xl sm:text-6xl font-bold text-center"
            style={{ textShadow: "0px 3px 3px rgba(0, 0, 0, 0.9)" }}
          >
            Driving Global Connections,
            <br />
            Delivering Excellence.
          </h1>
        </div>
      </div>

      {/* New Container After the Video */}
      <div className="min-h-[480px] flex p-8 md:p-20">
        <div className="space-y-8 flex flex-col min-w-full">
          <div
            className="flex flex-col lg:flex-row md:space-x-10 items-center justify-center"
            data-aos="fade-in"
          >
            <img
              className="h-[320px] w-auto object-contain"
              src="/img/logo.png"
              alt="Logo"
            />
            <div className="flex flex-col justify-between">
              {/* <div
                className="text-tetra-alt text-3xl sm:text-4xl font-bold max-sm:text-center"
                data-aos="fade-in"
              >
                Trusted Hands to Ship Your Cargo, Wherever They Need to be.
              </div> */}
              <div
                className="text-tetra-alt pb-4 max-sm:text-center text-sm md:text-lg pt-4 text-justify"
                data-aos="fade-in"
              >
                <div className="text-justify">
                  Tetra Mitra Logistic is an{" "}
                  <b>
                    end-to-end logistic service company founded by a group of
                    experienced supply chain experts
                  </b>
                  . In such short span of time, our high-performing team{" "}
                  <b>have managed logistics to more than 20 countries</b> -
                  shipping cargo from the farthest east to the west of the world
                  and{" "}
                  <b>
                    delivering more than 1.000 units of cargo for virtually all
                    industry lines operating globally
                  </b>
                  .
                </div>
                <div className="mt-4 mb-2 text-justify">
                  We work with our clients to{" "}
                  <b>
                    navigate the increasing complexity and interconnectivity of
                    the supply chain
                  </b>{" "}
                  sectors, improve their <b>operation excellence</b>, expand
                  their <b>business reach</b> efficiently{" "}
                  <b>through logistics advancement</b>, with deep understanding
                  of governance's custom process, while still adhering to comply
                  the regulation.
                </div>
                <div className="mt-4 mb-2 text-tetra font-bold text-justify">
                  We are powered by our dedicated experts, vast network of
                  trusted delivery partners, and driven by our vision and
                  mission.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white">
        {/* Header Section */}
        <div className="bg-tetra-alt py-6 px-4 lg:px-24" data-aos="fade-in">
          <h1 className="text-white text-4xl lg:text-5xl font-bold">
            Our <span className="text-tetra">Services</span>
          </h1>
        </div>

        {/* Subheading Section */}
        <div className="px-6 py-8 lg:px-24 text-left" data-aos="fade-in">
          <h2 className="text-xl lg:text-3xl font-bold text-gray-700">
            <span className="text-tetra">
              Create a smooth, simple, and sophisticated logistic journey
            </span>{" "}
            <br />
            with TML all-encompassing solutions
          </h2>
          <p className="text-sm md:text-base text-justify font-semibold  mt-8 max-w-4xl text-tetra-alt border-l-8 border-tetra rounded-l-md px-4">
            Our 4 core services target the key activities crucial to boost your
            end-to-end logistic process and classified into 2 service offerings
            based on the logistic stage you are at.
          </p>
        </div>

        {/* Circular Design Section */}
        <div className="flex flex-col lg:flex-row items-center justify-center lg:space-x-10 px-6 lg:px-24 pb-6">
          {/* <div data-aos="fade-in" className="grid grid-cols-2 relative">
            <div className="absolute">
              <img
                  src="/img/services/home/logo.png"
                  alt="tetra-logistic"
                  className="w-[250px] h-[250px]  hover:scale-105"
                />
            </div>
            <img
              src="/img/services/home/freight.png"
              alt="tetra-logistic"
              className="w-[250px] h-[250px]  hover:scale-105"
            />
             <img
              src="/img/services/home/custom.png"
              alt="tetra-logistic"
              className="w-[250px] h-[250px] hover:scale-105"
            />
             <img
              src="/img/services/home/clearance.png"
              alt="tetra-logistic"
              className="w-[250px] h-[250px] hover:scale-105"
            />
             <img
              src="/img/services/home/domestic.png"
              alt="tetra-logistic"
              className="w-[250px] h-[250px] hover:scale-105"
            />
          </div> */}
          <div data-aos="fade-in" className="grid grid-cols-2 relative">
            {/* Center the logo absolutely in the middle */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <img
                src="/img/services/home/logo.png"
                alt="tetra-logistic"
                className="w-[230px] h-[230px] max-sm:w-[120px] max-sm:h-[120px] hover:scale-105 transition-transform duration-300 z-10"
              />
            </div>

            {/* Other images */}
            <Link href="services#operation-solutions">
            <img
                src="/img/services/home/freight.png"
                alt="tetra-logistic"
                className="w-[200px] h-[200px] max-sm:w-[120px] max-sm:h-[120px] hover:scale-105 transition-transform duration-300 z-0"
              />
            </Link>
            <Link href="services#strategy-solutions">
              <img
                src="/img/services/home/custom.png"
                alt="tetra-logistic"
                className="w-[200px] h-[200px] max-sm:w-[120px] max-sm:h-[120px] hover:scale-105 transition-transform duration-300 z-0 "
              />
            </Link>
            <Link href="services#operation-solutions">
              <img
                src="/img/services/home/clearance.png"
                alt="tetra-logistic"
                className="w-[200px] h-[200px] max-sm:w-[120px] max-sm:h-[120px] hover:scale-105 transition-transform duration-300 z-0"
              />
            </Link>
            <Link href="services#operation-solutions">
              <img
                src="/img/services/home/domestic.png"
                alt="tetra-logistic"
                className="w-[200px] h-[200px] max-sm:w-[120px] max-sm:h-[120px] hover:scale-105 transition-transform duration-300 z-0"
              />
            </Link>
          </div>

          {/* Description Section */}
          <div
            className="lg:w-1/2 space-y-8 mt-8 lg:mt-0 pb-8 md:pt-10"
            data-aos="fade-right"
          >
            {/* <h3 className=" text-2xl font-bold">
                With our services, create an effective supply chain...
              </h3> */}
            <div className="bg-tetra p-6 rounded-lg shadow-lg  hover:scale-[102%] transition-transform duration-300">
              <h3 className="text-white text-base sm:text-xl font-bold">
                Powered by TML Strategy Solutions
              </h3>
              <p className="text-white  max-sm:text-xs text-base text-justify mt-2">
                Develop a streamlined logistics game plan that benefit on
                decades of industry knowledge, latest tech advancement and
                evolving regulations with our{" "}
                <b>
                  <i>Custom Consultation</i>
                </b>{" "}
                service.
              </p>
            </div>

            <div className="bg-tetra-alt p-6 rounded-lg shadow-lg hover:scale-[102%] transition-transform duration-300 ">
              <h3 className="text-white text-base sm:text-xl font-bold">
                Delivered with TML Operations Solutions
              </h3>
              <p className="text-white max-sm:text-xs text-base text-justify mt-2">
                Experience a highly integrated and efficient logistics
                operations for a quick, reliable, and safe deliveries across the
                globe. Our{" "}
                <b>
                  <i>
                    Freight Forwarding, Custom Clearance, and Domestic
                    Inter-Island Shipping
                  </i>
                </b>{" "}
                is available for your to-be shipped and en-route cargo.
              </p>
            </div>
          </div>
        </div>
      </div>
      <section className="bg-gradient-to-b from-tetra-alt/70 to-tetra-alt p-8 md:p-20">
        <div className="mb-8" data-aos="fade-in">
          <h2 className="text-3xl lg:text-5xl font-bold text-white text-center sm:pb-8">
            Our Years Of Experience, Expertise and Global Connections
          </h2>
        </div>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 text-center px-6 lg:px-24"
          data-aos="fade-in"
        >
          {/* Fact 1 */}
          <div className="flex flex-col items-center">
            <Container />
            <h3 className="text-xl sm:text-3xl font-bold text-white">
              1.000 <span className="text-tetra">+</span>
            </h3>
            <p className="text-base sm:text-lg font-medium text-white">Cargo Transported</p>
          </div>

          {/* Fact 2 */}
          <div className="flex flex-col items-center">
            <Users />
            <h3 className="text-2xl sm:text-3xl  font-bold text-white">
              120 <span className="text-tetra">+</span>
            </h3>
            <p className="text-base sm:text-lg font-medium text-white">Clients Worldwide</p>
          </div>

          {/* Fact 3 */}
          <div className="flex flex-col items-center">
            <Partner />
            <h3 className="text-2xl sm:text-3xl  font-bold text-white">
              500 <span className="text-tetra">+</span>
            </h3>
            <p className="text-base sm:text-lg font-medium text-white">Delivery Partners</p>
          </div>

          {/* Fact 4 */}
          <div className="flex flex-col items-center">
            <Certified />
            <h3 className="text-2xl sm:text-3xl  font-bold text-white">
              10 <span className="text-tetra">+</span>
            </h3>
            <p className="text-base sm:text-lg font-medium text-white">
              Certified Professionals
            </p>
          </div>
          {/* Fact 5 */}
          <div className="flex flex-col items-center sm:col-span-2 lg:col-span-1">
            <GlobePoint />
            <h3 className="text-2xl sm:text-3xl  font-bold text-white">
              20 <span className="text-tetra">+</span>
            </h3>
            <p className="text-base sm:text-lg font-medium text-white">Countries Served</p>
          </div>
        </div>
        <div className="border border-white my-10" data-aos="fade-in"></div>
      </section>
      <section
        className={`${styles.parallax} px-3`}
        style={{
          backgroundImage: `url(/img/parallax-bg.png)`,
        }}
      >
        <div className="text-center text-white py-3" data-aos="fade-in">
          <h1 className="text-3xl md:text-5xl font-bold pt-16 z-10">
            We have shipped across <br /> the nation and{" "}
            <span className="text-tetra">worldwide</span> for
          </h1>
        </div>
        <div className="py-12 md:px-16 lg:px-32 w-full flex items-center justify-center">
          <div className="">
            {/* Import Section */}
            <div className="mb-4 relative border-tetra bg-tetra-alt rounded-lg">
              <div
                className="bg-white shadow-lg rounded-md p-4 flex items-center gap-3 cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
                onClick={() => setIsOpenImport(!isOpenImport)}
              >
                <FontAwesomeIcon
                  icon={faBoxOpen}
                  className="text-tetra text-2xl max-sm:text-lg"
                />
                <h2 className="text-2xl max-sm:text-lg font-bold text-tetra">Import</h2>
                {isOpenImport ? (
                  <FontAwesomeIcon
                    icon={faChevronUp}
                    className="text-tetra ml-auto"
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className="text-tetra ml-auto"
                  />
                )}
              </div>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out  max-sm:text-sm ${
                  isOpenImport ? "max-h-[540px]" : "max-h-0"
                }`}
              >
                <ul className="list-disc pl-8 mt-1 space-y-2 text-white">
                  {[
                    "Chemical Products",
                    "Home Building Materials",
                    "Food and Beverages",
                    "Shoes & Bags",
                    "Heavy Machinery",
                    "Maternity and Baby Products",
                    "Spare Parts",
                    "Electronics",
                    "Printing Ink",
                    "Electrical Products",
                    "Safety Working Products",
                    "Glass Products",
                    "Project Machine Products",
                    "Shoes",
                    "Bags",
                    "Molding",
                    "Coffee Machine",
                  ].map((item, idx) => (
                    <li
                      key={idx}
                      className={` ${
                        idx < 5 ? "font-bold text-tetra" : "text-white"
                      }`}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Export Section */}
            <div className="mb-4 relative border-tetra bg-tetra-alt rounded-lg">
              <div
                className="bg-white shadow-lg rounded-md p-4 flex items-center gap-3 cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
                onClick={() => setIsOpenExport(!isOpenExport)}
              >
                <FontAwesomeIcon
                  icon={faGlobeAsia}
                  className="text-tetra text-3xl max-sm:text-lg"
                />
                <h2 className="text-2xl max-sm:text-lg font-bold text-tetra">Export</h2>
                {isOpenExport ? (
                  <FontAwesomeIcon
                    icon={faChevronUp}
                    className="text-tetra ml-auto"
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className="text-tetra ml-auto"
                  />
                )}
              </div>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out max-sm:text-sm ${
                  isOpenExport ? "max-h-96" : "max-h-0"
                }`}
              >
                <ul className="list-disc pl-8 mt-1 space-y-2 text-white ">
                  {[
                    "Palm Oil Products",
                    "Pharmaceutical Products",
                    "Baby Products",
                    "Plastic Products",
                    "Chemical Products",
                    "Food and Beverages",
                    "Hair Styling Products",
                    "Molding",
                    "Plastic Products",
                    "Coffee Machine",
                  ].map((item, idx) => (
                    <li
                      key={idx}
                      className={`${
                        idx < 5 ? "font-bold text-tetra" : "text-white"
                      }`}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Domestic Interisland Section */}
            <div className="mb-4 relative border-tetra bg-tetra-alt rounded-lg">
              <div
                className="bg-white shadow-lg rounded-md p-4 flex items-center gap-3 cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
                onClick={() => setIsOpenDomestic(!isOpenDomestic)}
              >
                <FontAwesomeIcon
                  icon={faTruck}
                  className="text-tetra text-2xl max-sm:text-lg"
                />
                <h2 className="text-2xl max-sm:text-lg font-bold text-tetra">
                  Domestic Interisland
                </h2>
                {isOpenDomestic ? (
                  <FontAwesomeIcon
                    icon={faChevronUp}
                    className="text-tetra ml-auto"
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className="text-tetra ml-auto"
                  />
                )}
              </div>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out max-sm:text-sm ${
                  isOpenDomestic ? "max-h-96" : "max-h-0"
                }`}
              >
                <ul className="list-disc pl-8 mt-1 space-y-2 text-white ">
                  {[
                    "Shoes",
                    "Bags",
                    "Plastic Products",
                    "Home Building Materials",
                    "Molding",
                  ].map((item, idx) => (
                    <li
                      key={idx}
                      className={`${
                        idx < 2 ? "font-bold text-tetra" : "text-white"
                      }`}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Title Section */}
      <div className="bg-white flex flex-col p-8 md:p-20" data-aos="fade-in">
        <div className="flex flex-col text-tetra-alt text-4xl sm:text-5xl font-semibold mb-4">
          Years of Running the Supply Chain <br></br>
          <a className="text-tetra text-4xl font-medium">
            Repeatedly, Consistently, Flawlessly.
          </a>
        </div>
      </div>
      {/* Marquee Section */}
      <div className={`${styles.marqueeContainer} bg-white p-6`}>
        <div className={styles.marqueeContent}>
          {marqueeData.map((item) => (
            <div key={item.id} className={styles.card}>
              <img className="object-cover" src={item.logo} alt={item.text} />
            </div>
          ))}
        </div>
      </div>

      {/* Connect Section */}
      <section
        className="flex flex-col p-6 lg:p-24 sm:p-14 my-5"
        data-aos="fade-zoom-in"
      >
        <div className="md:text-4xl text-3xl font-bold text-tetra-alt">
          Ready to Elevate Your Logistics Experience?
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1">
          <div>
            <div className="md:text-xl text-base font-medium text-tetra-alt py-2 pt-6 text-justify">
              Harness on our connectivity across the industry and around the
              globe to solve your logistics challenges
            </div>
          </div>
          <div className="h-full w-full flex justify-center items-center">
            <a href="/contact">
              <div
                className="flex items-center justify-center"
                data-aos="fade-in"
              >
                <button className="bg-tetra max-w-fit min-w-40 min-h-14 rounded-lg hover:bg-opacity-90 p-2 hover:translate-x-2 transition-transform duration-700">
                  <span className="text-white font-semibold text-xl">
                    Contact Us
                  </span>
                </button>
              </div>
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
