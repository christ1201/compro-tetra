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
} from "@fortawesome/free-solid-svg-icons";
import styles from "./page.module.css";
import Footer from "@/components/Footer";
import AOS from "aos";
import "aos/dist/aos.css"; // Import the AOS styles
import Link from "next/link";
import { services } from "@/data/services";
import Modal from "@/components/Modal";

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
    title: "Customs Brokerage",
    content:
      "Navigate the complexities of international trade with ease through our Customs Brokerage services. Our team of seasoned professionals simplifies the customs clearance process, ensuring your goods comply with all regulations and reach their destination without delays. Trust us to handle the paperwork, so you can focus on what matters most—growing your business.",
    link: "/services#customs-brokerage",
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
    { id: 1, text: "PT. Indah Bersama Tbk.", logo: "/img/logo.jpeg" },
    { id: 2, text: "PT. Harmoni Nusantara", logo: "/img/logo.jpeg" },
    { id: 3, text: "PT. Sejahtera Mandiri", logo: "/img/logo.jpeg" },
    { id: 4, text: "PT. Bersama Kita", logo: "/img/logo.jpeg" },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<ModalContent | null>(null);

  const openModal = (key: string) => {
    setModalContent(modalContents[key]);
    setIsModalOpen(true);
  };

  const loopedData = [...marqueeData, ...marqueeData];
  const no_wa = "628123456789";

  return (
    <div className="bg-white">
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
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-10 z-[1]"></div>
        {/* Centered Text */}
        <div className="absolute w-full h-full flex flex-col items-center justify-end px-16 pb-32">
          <h1 className="text-white text-4xl sm:text-6xl font-bold text-center drop-shadow-2xl">
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
                Trusted Hands to Ship Your Goods, Wherever They Need to be.
              </div>
              <div
                className="text-tetra-alt pb-4 max-sm:text-center text-xl pt-4"
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
      <div className="flex flex-col lg:grid lg:grid-cols-2 justify-center items-center bg-gradient-to-b from-blue-100 to-white p-6 w-full pt-24 gap-8">
        {/* Text Section */}
        <div className="text-start mb-12 w-full lg:px-16 sm:px-8 max-lg:order-2 px-3">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800">
            Looking to Move Goods to, from, and around Indonesia at ease?
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mt-4 text-start">
            We provide seamless logistics solutions to handle your goods with
            care, no matter the distance.
          </p>
          <p className="text-3xl md:text-4xl font-extrabold text-gray-800 mt-12">
            Looking to Import or Export Goods?
          </p>
          <p className="text-lg md:text-xl text-gray-600 mt-4">
            Looking to import goods from{" "}
            <span className="font-bold">
              USA, China, Japan, India, Malaysia
            </span>{" "}
            to Indonesia?
          </p>
          <p className="text-lg md:text-xl text-gray-600 mt-4">
            Looking to ship products from Indonesia to{" "}
            <span className="font-bold">
              USA, China, Japan, India, Malaysia
            </span>
            ?
          </p>
          <p className="text-lg md:text-xl text-gray-600 mt-4">
            Or deliver your products across the nation?
          </p>
          <p className="text-3xl lg:text-4xl font-bold text-tetra animate-pulse duration-1000 pt-4">
            We've got you covered!
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full flex justify-center lg:px-12 sm:px-6 max-lg:order-1 px-3">
          <img
            src="/img/container.png"
            alt="Logistics Image"
            className="rounded-lg shadow-lg max-w-full h-auto"
          />
        </div>
      </div>

      <div className="flex flex-col p-8 md:px-20">
        {/* <div className="h-auto flex items-center justify-center bg-gray-50 p-4">
          <div className="border-4 border-tetra-alt rounded-xl p-6 w-full max-w-5xl relative">
            <div className="text-center text-2xl font-bold text-gray-700 mb-4">
              2nd degree:{" "}
              <span className="text-tetra">
                Tetra Mitra Logistic Operations*
              </span>
            </div>
            <div className="border-2 border-tetra-alt rounded-xl p-6 max-w-3xl mx-auto relative">
              <div className="text-center text-xl font-bold text-gray-700 mb-4">
                1st degree:{" "}
                <span className="text-tetra">
                  Tetra Mitra Logistic Solutions*
                </span>
              </div>
              <div className="border border-tetra-alt rounded-xl p-6 max-w-xl mx-auto">
                <div className="text-center text-lg font-semibold text-gray-700">
                  0th degree: Your business needs
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
      {/* <div className="h-auto flex items-center justify-center bg-gray-50 lg:p-24 p-8 relative flex-col">
          <div className="z-10  text-3xl sm:text-4xl font-bold pb-6 text-start">
          Learn How Our Degree of Services Can Assist You to do All of These,
          Hassle-free, Safely, and Efficiently
        </div>
          <img
            src="/img/container.png"
            className="absolute inset-0 w-full h-full object-cover opacity-20"
            alt="Background"
          />
          <div className="border-4 border-tetra-alt rounded-xl p-6 w-full max-w-5xl relative shadow-lg">
            <div className="text-start text-2xl font-bold text-gray-700 mb-4">
              <FontAwesomeIcon icon={faTruck} className="text-tetra mr-2" />
              2nd degree:{" "}
              <span className="text-tetra">
                Tetra Mitra Logistic Operations*
              </span>
            </div>
            <div className="border-2 border-tetra-alt rounded-xl p-6 max-w-3xl mx-auto relative">
              <div className="text-start text-xl font-bold text-gray-700 mb-4">
                <FontAwesomeIcon
                  icon={faBoxes}
                  className="text-tetra mr-2"
                />
                1st degree:{" "}
                <span className="text-tetra">
                  Tetra Mitra Logistic Solutions*
                </span>
              </div>
              <div className="border border-tetra-alt rounded-xl p-6 max-w-xl mx-auto">
                <div className="text-start text-lg font-semibold text-gray-700">
                  <FontAwesomeIcon
                    icon={faBusinessTime}
                    className="text-tetra mr-2"
                  />
                  0th degree:{" "}
                  <span className="text-tetra-alt">Your business needs</span>
                </div>
              </div>
            </div>
          </div>
          <div className="font-bold text-xl mt-4"><span className="text-red-600">*</span>Our Solutions and Operations Service are also available independently</div>
      </div> */}
      <div className="flex flex-col items-center justify-center py-12 bg-gradient-to-t from-tetra to-tetra-alt">
        {/* <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
        Explore Our Services: Hassle-Free, Safe, and Efficient
      </h1> */}
        <h1
          className="text-4xl font-bold text-white mb-8 text-start lg:px-24 px-8"
          data-aos="fade-in"
        >
          Learn How Our Degree of Services Can Assist You to do All of These,
          Hassle-free, Safely, and Efficiently
        </h1>

        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-7xl px-6">
        <div className="rounded-lg shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300 p-6 text-center max-md:order-3">
          <FontAwesomeIcon icon={faTruck} className="text-green-600 text-4xl mb-4" />
          <h2 className="text-2xl font-semibold text-gray-800">
            2nd Degree: <span className="text-green-600">Tetra Mitra Logistic Operations*</span>
          </h2>
        </div>
        
        <div className="rounded-lg shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300 p-6 text-center max-md:order-2">
          <FontAwesomeIcon icon={faBoxes} className="text-yellow-600 text-4xl mb-4" />
          <h2 className="text-2xl font-semibold text-gray-800">
            1st Degree: <span className="text-yellow-600">Tetra Mitra Logistic Solutions*</span>
          </h2>
        </div>

        <div className="rounded-lg shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300 p-6 text-center max-md:order-1">
          <FontAwesomeIcon icon={faBusinessTime} className="text-red-600 text-4xl mb-4" />
          <h2 className="text-2xl font-semibold text-gray-800">
            0th Degree: <span className="text-red-600">Your Business Needs</span>
          </h2>
        </div>
      </div> */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-7xl px-6 py-12 "
          data-aos="fade-left"
        >
          <div className="relative rounded-md shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300 p-6 text-center max-md:order-3">
            {/* Triangle */}
            <div className="max-lg:hidden absolute left-0 top-1/2 transform -translate-y-1/2 h-0 w-0 border-t-[80px] border-t-transparent border-b-[84px] border-b-transparent border-r-[50px] border-r-white -ml-12"></div>
            <div className="max-lg:hidden absolute left-1 top-1/2 transform -translate-y-1/2 h-0 w-0 border-t-[80px] border-t-transparent border-b-[84px] border-b-transparent border-r-[50px] border-r-tetra -ml-12"></div>
            <FontAwesomeIcon
              icon={faTruck}
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
              icon={faBoxes}
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
            {/* Triangle */}
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
      </div>
      {/* Services Section with Parallax Effect */}
      <div
        className={`${styles.parallax} min-h-screen flex flex-col p-8 md:p-20`}
      >
        {/* <div
        className={`${styles.parallax} min-h-screen flex flex-col p-8 md:p-20`}
      > */}
        {/* Parallax Background Layer */}
        <div className="absolute inset-0 bg-fixed bg-[url('/img/bg-pattern.png')] bg-cover opacity-30 z-0"></div>

        {/* Title Section */}
        <div
          className="text-white text-4xl sm:text-5xl font-extrabold text-center pb-20 z-10"
          data-aos="fade-up"
        >
          1st Degree: <span className="text-tetra">Solutions</span>
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

              <div className="text-tetra-alt text-lg font-medium bg-white/50 max-w-[640px] text-start p-6 mt-6 rounded-lg shadow-lg hover:bg-white/70 transition-all duration-500">
                <p className="mb-4">
                  Derived specifically from your business needs, consults with
                  our dedicated team to build just the right logistic solutions
                  suited to your business strategy and financial investment.
                  Perfect for :
                </p>
                <ul className="list-decimal text-start pl-6 font-semibold space-y-3">
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
          data-aos="fade-up"
        >
          2nd Degree: <span className="text-green-500">Operations</span>
        </div>

        {/* Solutions Grid */}
        <div className="flex justify-center items-center" data-aos="fade-up">
          <div className="relative bg-white max-w-4xl w-full p-10 rounded-3xl shadow-2xl bg-gradient-to-l from-white/80 to-tetra/50 backdrop-blur-md hover:shadow-3xl hover:scale-105 transition-transform duration-700">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center mb-8">
              {/* Freight Forwarding */}
              <div
                className="flex flex-col items-center hover:scale-105 transition duration-500 cursor-pointer"
                onClick={() => openModal("freight")}
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
                onClick={() => openModal("brokerage")}
              >
                <div className="rounded-full bg-tetra-alt w-24 h-24 flex items-center justify-center mb-2 shadow-xl">
                  <FontAwesomeIcon
                    icon={faBoxes}
                    className="text-tetra text-3xl !h-10"
                  />
                </div>
                <span className="text-2xl sm:text-3xl font-bold text-gray-700">
                  Customs Brokerage
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
            <div className="text-lg text-tetra-alt font-medium mt-6">
              <p>
                International Freight, Custom Brokerage, and Domestic
                Interisland For clients coming with a definitive list of ports
                to visit, we'll take care of the laundry list to ensure your
                logistic experience is smooth. Suitable for :
              </p>
              <ul className="list-decimal text-start pl-6 font-semibold mt-4 space-y-2">
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
          </div>
        </div>

        {/* Modal */}
        {modalContent && (
          <Modal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            title={modalContent.title}
            content={modalContent.content}
            link={modalContent.link}
          />
        )}
      </div>
      {/* <section className="bg-gradient-to-l from-tetra-alt to-tetra px-14 pb-16">
      <div
          className="text-white text-4xl sm:text-5xl font-bold text-center py-16"
          data-aos="fade-up"
        >
          2nd Degree: <span className="text-green-500">Operations</span>
        </div>
        <div
          className="grid lg:grid-cols-3 grid-cols-1 gap-8 w-full items-center justify-center text-center gap-y-16 pt-8"
          data-aos="fade-up"
        >
          <div className="flex flex-row  bg-gradient-to-l from-white to-tetra  text-center p-6 pt-16 rounded-3xl relative shadow-lg hover:scale-105 transition-all">
            <Link href={"/"} className="flex flex-row w-full justify-center">
              <div className="rounded-full bg-tetra-alt w-24 h-24 flex items-center justify-center absolute left-1/2 transform -translate-x-1/2 -top-12">
                <FontAwesomeIcon
                  icon={faGlobeAsia}
                  className="!w-12 !h-12"
                  color="#BB985E"
                />
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-tetra-alt flex items-center justify-center">
                International Freight
              </div>
            </Link>
          </div>
          <div className=" bg-gradient-to-l from-white to-tetra p-6 pt-16  rounded-3xl relative shadow-lg hover:scale-105 transition-all text-center">
            <div className="rounded-full bg-tetra-alt w-24 h-24 flex items-center justify-center absolute left-1/2 transform -translate-x-1/2 -top-12">
                <FontAwesomeIcon
                  icon={faBoxes}
                  className="!w-12 !h-12"
                  color="#BB985E"
                />
              </div>
            <Link href={"/"} className="flex flex-row w-full justify-center">
              <div className="text-2xl sm:text-3xl font-bold text-tetra-alt text-center px-4">
                Custom Brokerage
              </div>
            </Link>
          </div>
          <div className=" bg-gradient-to-l from-white to-tetra text-center p-6 pt-16 rounded-3xl relative shadow-lg hover:scale-105 transition-all">
            <div className="rounded-full bg-tetra-alt w-24 h-24 flex items-center justify-center absolute left-1/2 transform -translate-x-1/2 -top-12">
                <FontAwesomeIcon
                  icon={faShippingFast}
                  className="!w-12 !h-12"
                  color="#BB985E"
                />
              </div>
            <Link href={"/"} className="flex flex-row w-full justify-center">
              <div className="text-2xl sm:text-3xl font-bold text-tetra-alt px-4">
                Domestic Shipping
              </div>
            </Link>
          </div>
          <div className="lg:col-span-3 flex w-full items-center justify-center">
            <div className=" text-tetra-alt font-base text-lg bg-white max-w-[640px] text-start p-6 rounded-lg shadow-lg">
              For clients coming with a definitive list of ports to visit, we'll
              take care of the laundry list to ensure your logistic experience
              is smooth. Suitable for
              <ul className="list-decimal text-start p-6 font-semibold">
                <li>
                  Businesses with specific shipping requirements
                  (air/marine/domestic interisland)
                </li>
                <li>
                  Businesses aiming to keep a lean day-to-day operations by
                  appointing logistics experts to deal with the ever-moving and
                  complex logistics operations.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section> */}
      {/* <section className="bg-gradient-to-l from-tetra-alt to-tetra px-4 lg:px-14 pb-16">
        <div
          className="text-white text-4xl sm:text-5xl font-bold text-center py-16"
          data-aos="fade-up"
        >
          2nd Degree: <span className="text-green-500">Operations</span>
        </div>

        <div className="flex justify-center items-center" data-aos="fade-up">
          <div className="relative bg-white max-w-4xl w-full p-10 rounded-3xl shadow-2xl bg-gradient-to-l from-white/80 to-tetra/50 backdrop-blur-md hover:shadow-3xl hover:scale-105 transition-transform duration-700">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center mb-8">
              <Link href={"/services#international-freight-forwarding"}>
                <div className="flex flex-col items-center hover:scale-105 transition duration-500">
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
              </Link>
              <Link href={"/services#customs-brokerage"}>
                <div className="flex flex-col items-center hover:scale-105 transition duration-500">
                  <div className="rounded-full bg-tetra-alt w-24 h-24 flex items-center justify-center mb-2 shadow-xl">
                    <FontAwesomeIcon
                      icon={faBoxes}
                      className="text-tetra text-3xl !h-10"
                    />
                  </div>
                  <span className="text-2xl sm:text-3xl font-bold text-gray-700">
                    Customs Brokerage
                  </span>
                </div>
              </Link>
              <Link href={"/services#domestic-interisland"}>
                <div className="flex flex-col items-center hover:scale-105 transition duration-500">
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
              </Link>
            </div>
            <div className="text-lg text-tetra-alt font-medium mt-6">
              <p>
                International Freight, Custom Brokerage, and Domestic
                Interisland For clients coming with a definitive list of ports
                to visit, we'll take care of the laundry list to ensure your
                logistic experience is smooth. Suitable for :
              </p>
              <ul className="list-decimal text-start pl-6 font-semibold mt-4 space-y-2">
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
          </div>
        </div>
      </section> */}

      {/* Marquee Title Section */}
      <div className="bg-white flex flex-col p-8 md:p-20" data-aos="fade-right">
        <div className="flex flex-col text-tetra-alt text-4xl sm:text-5xl font-bold">
            Decades of Experience,{" "} <br/>
          <a className="bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">Countless Success Stories</a>
        </div>
      </div>
      {/* Marquee Section */}
      <div className={`${styles.marqueeContainer} bg-white max-h-[35vh] p-6`}>
        <div className={styles.marqueeContent}>
          {loopedData.map((item) => (
            <div key={item.id} className={styles.card}>
              <img className="object-contain" src={item.logo} alt={item.text} />
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
