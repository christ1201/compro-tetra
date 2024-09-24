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

interface ModalContent {
  title: string;
  content: string;
  link: string;
}

const modalContents: { [key: string]: ModalContent } = {
  freight: {
    title: "International Freight",
    content:
      "Expand your business horizons with our International Freight Forwarding services. We manage the complexities of global shipping, providing reliable and efficient transportation solutions that connect your products to markets around the world. With a global network of partners and cutting-edge tracking technology, we ensure your cargo arrives safely, on time, and within budget.",
    link: "/services#international-freight-forwarding",
  },
  brokerage: {
    title: "Customs Clearance",
    content:
      "Navigate the complexities of international trade with ease through our Customs Clearance services. Our team of seasoned professionals simplifies the customs clearance process, ensuring your goods comply with all regulations and reach their destination without delays. Trust us to handle the paperwork, so you can focus on what matters most—growing your business.",
    link: "/services#customs-clearence",
  },
  domestic: {
    title: "Domestic Shipping",
    content:
      "Seamlessly connect Indonesia’s vast archipelago with our Domestic Interisland services. Whether you need to move goods between islands or within regions, PT Tetra Mitra Logistic offers reliable and cost-effective transportation solutions that ensure your products reach even the most remote locations. From planning to delivery, we provide end-to-end support, making domestic logistics hassle-free.",
    link: "/services#domestic-interisland",
  },
};

export default function Home() {
  const [showNavbar, setShowNavbar] = useState(false);

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
    { id: 7, text: "TML", logo: "/img/marquee/1.jpeg" },
    { id: 8, text: "TML", logo: "/img/marquee/2.jpeg" },
    { id: 9, text: "TML", logo: "/img/marquee/3.jpeg" },
    { id: 10, text: "TML", logo: "/img/marquee/4.jpeg" },
    { id: 11, text: "TML", logo: "/img/marquee/5.jpeg" },
    { id: 12, text: "TML", logo: "/img/marquee/6.jpeg" },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<ModalContent | null>(null);

  const openModal = (key: string) => {
    setModalContent(modalContents[key]);
    setIsModalOpen(true);
  };

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
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-10 z-0"></div>
        {/* Centered Text */}
        <div className="absolute w-full h-full flex flex-col items-center justify-end px-16 pb-32">
          <h1 className="text-white text-4xl sm:text-6xl font-bold text-center" 
          style={{ textShadow: '0px 3px 3px rgba(0, 0, 0, 0.9)' }}
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
            className="flex flex-col md:flex-row md:space-x-10"
            data-aos="fade-in"
          >
            <img
              className="h-[320px] w-auto object-contain max-md:pb-8"
              src="/img/logo.png"
              alt="Logo"
            />
            <div className="flex flex-col justify-between">
              <div
                className="text-tetra-alt text-3xl sm:text-4xl font-bold max-sm:text-center"
                data-aos="fade-in"
              >
                Trusted Hands to Ship Your Cargo, Wherever They Need to be.
              </div>
              <div
                className="text-tetra-alt pb-4 max-sm:text-center text-xl pt-4 text-justify"
                data-aos="fade-in"
              >
                <div>
                  <b className="text-xl">Tetra Mitra Logistic</b> is an
                  end-to-end logistic service company with clients across the
                  globe and ranging in size, what unites them is their trust and
                  satisfaction in how our services simplify and assist them with
                  their supply chain needs.
                </div>
                <div className="mt-4 mb-2">
                  We work with our clients to navigate the increasing complexity
                  and interconnectivy of the supply chain sectors, improve their
                  operation excellence, effectively expand their business reach
                  with efficiency, all while also comply with the latest
                  regulations and legislation.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:grid lg:grid-cols-2 justify-center items-center bg-gradient-to-b from-blue-100 to-white p-6 w-full pt-24 gap-8 text-justify">
        {/* Text Section */}
        <div
          className="text-start mb-12 w-full lg:px-16 sm:px-8 max-lg:order-2 px-3"
          data-aos="fade-in"
        >
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800">
            Looking to Move Cargo to, from, and around Indonesia at ease?
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mt-4 text-justify ">
            We provide seamless logistics solutions to handle your cargo with
            care, no matter the distance.
          </p>
          <p className="text-3xl md:text-4xl font-extrabold text-gray-800 mt-12">
            Looking to Import or Export Cargo?
          </p>
          <p className="text-lg md:text-xl text-gray-600 mt-4 text-justify">
            Looking to import cargo from{" "}
            <span className="font-bold">
              USA, China, Japan, India, Malaysia
            </span>{" "}
            to Indonesia?
          </p>
          <p className="text-lg md:text-xl text-gray-600 mt-4 text-justify">
            Looking to ship products from Indonesia to{" "}
            <span className="font-bold">
              USA, China, Japan, India, Malaysia
            </span>
            ?
          </p>
          <p className="text-lg md:text-xl text-gray-600 mt-4 text-justify">
            Or deliver your products across the nation?
          </p>
          <p className="text-3xl lg:text-4xl font-bold text-tetra animate-pulse duration-1000 pt-4 text-justify">
            We've got you covered!
          </p>
        </div>

        {/* Image Section */}
        <div
          className="w-full flex justify-center lg:px-12 sm:px-6 max-lg:order-1 px-3"
          data-aos="fade-in"
        >
          <img
            src="/img/container.png"
            alt="Logistics Image"
            className="rounded-lg shadow-lg max-w-full h-auto"
          />
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
        <div className="px-6 py-8 lg:px-24 text-center" data-aos="fade-in">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-700">
            Learn how our integrated services can help you achieve your
            logistics goals.
          </h2>
        </div>

        {/* Circular Design Section */}
        <div className="flex flex-col lg:flex-row items-center justify-center lg:space-x-10 px-6 py-8">
          {/* Circular Diagram */}
          <div className="relative flex items-center justify-center h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] lg:h-[500px] lg:w-[500px] mx-auto bg-transparent">
            <svg
              viewBox="0 0 500 500"
              className="absolute z-20 bg-transparent"
              fill="none"
              data-aos="fade-in"
            >
              {/* Outer Circle Text (2nd Degree) */}
              <path
                id="outer-circle"
                d="M 250, 250 m -200, 0 a 200,200 0 1,1 400,0 a 200,200 0 1,1 -400,0"
              />
              <text fill="white" fontSize="14" fontWeight="bold">
                <textPath
                  href="#outer-circle"
                  textAnchor="start"
                  startOffset="14%"
                >
                  2nd degree: TML Operations solutions
                </textPath>
              </text>

              {/* Middle Circle Text (1st Degree) */}
              <path
                id="middle-circle"
                d="M 250, 250 m -150, 0 a 150,150 0 1,1 300,0 a 150,150 0 1,1 -300,0"
              />
              <text fill="white" fontSize="14" fontWeight="bold">
                <textPath
                  href="#middle-circle"
                  textAnchor="start"
                  startOffset="12%"
                >
                  1st degree: TML Strategy solutions
                </textPath>
              </text>

              {/* Inner Circle Text (0th Degree) */}
              <path
                id="inner-circle"
                d="M 250, 250 m -100, 0 a 100,100 0 1,1 200,0 a 100,100 0 1,1 -200,0"
              />
              <text fill="white" fontSize="14" fontWeight="bold">
                <textPath
                  href="#inner-circle"
                  textAnchor="start"
                  startOffset="4%"
                >
                  0th degree: Your business aspirations
                </textPath>
              </text>
            </svg>

            {/* Circles for Background */}
            <div
              className="absolute inset-0 flex items-center justify-center z-10"
              data-aos="fade-in"
            >
              {/* Outer Circle */}
              <div className="rounded-full bg-tetra-alt w-[275px] h-[275px] sm:w-[375px] sm:h-[375px] lg:w-[450px] lg:h-[450px] absolute"></div>

              {/* Middle Circle */}
              <div className="rounded-full bg-gray-500 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] lg:w-[350px] lg:h-[350px] absolute"></div>

              {/* Inner Circle */}
              <div className="rounded-full bg-tetra w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] lg:w-[250px] lg:h-[250px] absolute"></div>
            </div>
          </div>

          {/* Description Section */}
          <div
            className="lg:w-1/2 space-y-8 mt-8 lg:mt-0"
            data-aos="fade-right"
          >
            <div className="bg-tetra p-6 rounded-lg shadow-lg">
              <h3 className="text-white text-lg font-bold">
                Started from your business aspirations
              </h3>
              <p className="text-white text-sm text-justify">
                From developing your supply chain game-plan to running the
                actual logistics, TML services run with your business
                aspirations at its heart.
              </p>
            </div>

            <div className="bg-tetra-alt/70 p-6 rounded-lg shadow-lg">
              <h3 className="text-white text-lg font-bold">
                Powered by TML Strategy Solutions
              </h3>
              <p className="text-white text-sm text-justify">
                Develop a streamlined logistics game plan that benefits from
                decades of industry knowledge, the latest tech advancements, and
                regulations.
              </p>
            </div>

            <div className="bg-tetra-alt p-6 rounded-lg shadow-lg">
              <h3 className="text-white text-lg font-bold">
                Delivered with TML Operations Solutions
              </h3>
              <p className="text-white text-sm text-justify">
                Experience highly integrated and efficient logistics operations
                for quick, reliable, and safe deliveries across the globe.
              </p>
            </div>
            <div className="text-justify text-sm text-tetra-alt">
              <span className="text-red-600">*</span> Our Strategy and
              Operations solutions are also available separately
            </div>
          </div>
        </div>
      </div>

      {/* <div className="flex flex-col items-center justify-center py-12 bg-gradient-to-t from-tetra to-tetra-alt text-justify">
        <h1
          className="text-4xl font-bold text-white mb-8 text-justify lg:px-24 px-8"
          data-aos="fade-in"
        >
          Learn How Our Degree of Services Can Assist You to do All of These,
          Hassle-free, Safely, and Efficiently
        </h1>
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-7xl px-6 py-12 text-justify"
          data-aos="fade-in"
        >
          <div className="relative rounded-md shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300 p-6 text-center max-md:order-3">
           
            <div className="max-lg:hidden absolute left-0 top-1/2 transform -translate-y-1/2 h-0 w-0 border-t-[80px] border-t-transparent border-b-[84px] border-b-transparent border-r-[50px] border-r-white -ml-12"></div>
            <div className="max-lg:hidden absolute left-1 top-1/2 transform -translate-y-1/2 h-0 w-0 border-t-[80px] border-t-transparent border-b-[84px] border-b-transparent border-r-[50px] border-r-tetra -ml-12"></div>
            <FontAwesomeIcon
              icon={faMapLocationDot}
              className="text-green-600 text-4xl mb-4"
            />
            <h2 className="text-2xl font-semibold text-gray-800">
              2nd Degree:{" "}
              <span className="text-green-600">
                Tetra Mitra Logistic Operations*
              </span>
            </h2>
          </div>

          <div className="relative rounded-md shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300 p-6 text-center max-md:order-2">
            <div className="max-lg:hidden absolute left-0 top-1/2 transform -translate-y-1/2 h-0 w-0 border-t-[80px] border-t-transparent border-b-[84px] border-b-transparent border-r-[50px] border-r-white -ml-12"></div>
            <div className="max-lg:hidden absolute left-1 top-1/2 transform -translate-y-1/2 h-0 w-0 border-t-[80px] border-t-transparent border-b-[84px] border-b-transparent border-r-[50px] border-r-tetra -ml-12"></div>
            <FontAwesomeIcon
              icon={faBoxOpen}
              className="text-yellow-600 text-4xl mb-4"
            />
            <h2 className="text-2xl font-semibold text-gray-800">
              1st Degree:{" "}
              <span className="text-yellow-600">
                Tetra Mitra Logistic Solutions*
              </span>
            </h2>
          </div>

          <div className="relative rounded-md shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300 p-6 text-center max-md:order-1">
 
            <div className="max-lg:hidden absolute left-0 top-1/2 transform -translate-y-1/2 h-0 w-0 border-t-[80px] border-t-transparent border-b-[84px] border-b-transparent border-r-[50px] border-r-white -ml-12"></div>
            <div className="max-lg:hidden absolute left-1 top-1/2 transform -translate-y-1/2 h-0 w-0 border-t-[80px] border-t-transparent border-b-[84px] border-b-transparent border-r-[50px] border-r-tetra -ml-12"></div>
            <FontAwesomeIcon
              icon={faBusinessTime}
              className="text-red-600 text-4xl mb-4"
            />
            <h2 className="text-2xl font-semibold text-gray-800">
              0th Degree:{" "}
              <span className="text-red-600">Your Business Needs</span>
            </h2>
          </div>
        </div>

        <p
          className="text-center mt-10 text-red-900 font-semibold px-4"
          data-aos="fade-down"
        >
          * Our Solutions and Operations Services are also available
          independently
        </p>
      </div> */}
      {/* Services Section with Parallax Effect */}
      <div
        className={`${styles.parallax} min-h-screen flex flex-col p-8 md:p-20`}
      >
        {/* <div
        className={`${styles.parallax} min-h-screen flex flex-col p-8 md:p-20`}
      > */}
        {/* Parallax Background Layer */}
        {/* Title Section */}
        <div
          className="text-white text-4xl sm:text-5xl font-extrabold text-center pb-20 z-10 "
          // style={{ textShadow: '1px 1px 1px rgba(0, 0, 0, 0.9)' }}
          data-aos="fade-up"
        >
          1st Degree: <span className="">Solutions</span>
        </div>

        {/* Solution Cards Section */}
        <div className="flex flex-col gap-12 w-full items-center justify-center z-10">
          {/* Custom Consultation Card */}
          <Link href={"/services#custom-consultation"}>
            <div className="relative w-full max-w-lg bg-gradient-to-l from-gray-400 to-tetra/60 backdrop-blur-md rounded-3xl shadow-2xl hover:shadow-3xl hover:scale-105 transition-transform duration-700 p-8 pt-20 transform">
              {/* Glowing Icon */}
              <div className="rounded-full bg-tetra-alt w-24 h-24 flex items-center justify-center absolute left-1/2 transform -translate-x-1/2 -top-12 shadow-xl">
                <FontAwesomeIcon
                  icon={faHandshake}
                  className="!text-tetra text-4xl"
                />
              </div>

              {/* Card Content */}

              <div className="text-2xl sm:text-3xl font-bold text-white flex items-center justify-center px-4">
                Custom Consultation
              </div>

              <div className="text-tetra-alt text-lg font-medium bg-white/50 max-w-[640px] p-6 mt-6 rounded-lg shadow-lg hover:bg-white/70 transition-all duration-500 text-justify">
                <p className="mb-4">
                  Derived specifically from your business needs, consults with
                  our dedicated team to build just the right logistic solutions
                  suited to your business strategy and needs. Perfect for :
                </p>
                <ul className="list-decimal pl-6 font-semibold space-y-3 text-justify">
                  <li>First time importers /exporters to and from Indonesia</li>
                  <li>
                    Well-established businesses optimizing their supply chain
                    costs and processes
                  </li>
                </ul>
              </div>
            </div>
          </Link>
          {/* Additional Cards can go here */}
        </div>
        {/* Title */}
        <div
          className="text-white text-4xl sm:text-5xl font-bold text-center py-16"
          // style={{ textShadow: '1px 1px 1px rgba(0, 0, 0, 0.9)' }}
          data-aos="fade-up"
        >
          2nd Degree: <span className="">Operations</span>
        </div>

        {/* Solutions Grid */}
        <div className="flex justify-center items-center" data-aos="fade-up">
          <div className="relative bg-white max-w-4xl w-full p-10 rounded-3xl shadow-2xl bg-gradient-to-l from-white/80 to-tetra/50 backdrop-blur-md hover:shadow-3xl hover:scale-105 transition-transform duration-700">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center mb-8">
              {/* Freight Forwarding */}
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

              {/* Custom Brokerage */}
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

              {/* Domestic Shipping */}
              <div
                className="flex flex-col items-center hover:scale-105 transition duration-500 cursor-pointer"
                onClick={() => openModal("domestic")}
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

            {/* Shared Description for All Solutions */}
            <div className="text-lg text-tetra-alt font-medium mt-6 text-justify">
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
                <span className="text-tetra font-bold text-xl hover:underline hover:text-tetra/90">
                  Learn More About Our Services
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Modal */}
        {/* {modalContent && (
          <Modal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            title={modalContent.title}
            content={modalContent.content}
            link={modalContent.link}
          />
        )} */}
      </div>
      <section className="bg-gradient-to-b from-tetra-alt/70 to-tetra-alt p-8 md:p-20">
        <div className="mb-8" data-aos="fade-in">
          <h2 className="text-3xl lg:text-5xl font-bold text-white text-center pb-8">
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
            <h3 className="text-3xl font-bold text-white">
              1.000 <span className="text-tetra">+</span>
            </h3>
            <p className="text-lg font-medium text-white">
              Numbers of Cargo Transported
            </p>
          </div>

          {/* Fact 2 */}
          <div className="flex flex-col items-center">
            <Users />
            <h3 className="text-3xl font-bold text-white">
              120 <span className="text-tetra">+</span>
            </h3>
            <p className="text-lg font-medium text-white">
              Clients we worked with
            </p>
          </div>

          {/* Fact 3 */}
          <div className="flex flex-col items-center">
            <Partner />
            <h3 className="text-3xl font-bold text-white">
              45 <span className="text-tetra">+</span>
            </h3>
            <p className="text-lg font-medium text-white">
              Numbers of Delivery Partners
            </p>
          </div>

          {/* Fact 4 */}
          <div className="flex flex-col items-center">
            <Certified />
            <h3 className="text-3xl font-bold text-white">
              10 <span className="text-tetra">+</span>
            </h3>
            <p className="text-lg font-medium text-white">
              Numbers of Certified Professionals
            </p>
          </div>
          {/* Fact 5 */}
          <div className="flex flex-col items-center">
            <GlobePoint />
            <h3 className="text-3xl font-bold text-white">
              20 <span className="text-tetra">+</span>
            </h3>
            <p className="text-lg font-medium text-white">
              Countries delivered
            </p>
          </div>
        </div>
        <div className="border border-white my-10" data-aos="fade-in"></div>
        <div
          className="text-3xl md:text-4xl font-bold text-tetra text-center"
          data-aos="fade-in"
        >
          Industries we've worked with
        </div>
        <div
          className="text-xl md:text-2xl font-medium text-white text-center pt-4"
          data-aos="fade-in"
        >
          Chemicals, Mining Minerals & Resources, FMCG (diapers), Livestocks,{" "}
          <br /> and many more...{" "}
        </div>
      </section>
      {/* Marquee Title Section */}
      <div className="bg-white flex flex-col p-8 md:p-20" data-aos="fade-in">
        <div className="flex flex-col text-tetra-alt text-4xl sm:text-5xl font-bold">
          Decades of Experience, <br />
          <a className="bg-tetra bg-clip-text text-transparent">
            Countless Success Stories
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
      <div className="bg-white min-h-[60vh] flex flex-col p-8 md:p-20 text-center items-center">
        <div
          className="max-w-2xl flex flex-col items-center space-y-6"
          data-aos="fade-down"
          data-aos-easing="ease-out"
          data-aos-duration="1000"
        >
          <div className="rounded-full bg-tetra-alt w-24 h-24 flex items-center justify-center">
            <FontAwesomeIcon
              icon={faUsers}
              className="!w-12 !h-12"
              color="#BB985E"
            />
          </div>
          <div className="flex flex-col text-tetra-alt text-4xl sm:text-5xl font-bold">
            Chat With Us to Find The Right Solution For Your Logistic Needs
          </div>
          {/* <div className="text-tetra-alt lg:text-2xl text-xl">
            Chat with us to find the right solution for your logistic needs
          </div> */}
          <a href="/contact">
            <div
              className="flex max-sm:items-center max-sm:justify-center"
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
      {/* Footer */}
      <Footer />
    </div>
  );
}
