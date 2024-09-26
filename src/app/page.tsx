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
import { Transition } from "@headlessui/react";

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
    { id: 7, text: "TML", logo: "/img/marquee/7.jpeg" },
    { id: 8, text: "TML", logo: "/img/marquee/8.jpeg" },
    { id: 9, text: "TML", logo: "/img/marquee/9.jpeg" },
    { id: 10, text: "TML", logo: "/img/marquee/1.jpeg" },
    { id: 11, text: "TML", logo: "/img/marquee/2.jpeg" },
    { id: 12, text: "TML", logo: "/img/marquee/3.jpeg" },
    { id: 13, text: "TML", logo: "/img/marquee/4.jpeg" },
    { id: 14, text: "TML", logo: "/img/marquee/5.jpeg" },
    { id: 15, text: "TML", logo: "/img/marquee/6.jpeg" },
    { id: 16, text: "TML", logo: "/img/marquee/7.jpeg" },
    { id: 17, text: "TML", logo: "/img/marquee/8.jpeg" },
    { id: 18, text: "TML", logo: "/img/marquee/9.jpeg" },
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
                <div className="text-justify">
                  Tetra Mitra Logistic is an end-to-end logistic service company
                  founded by a group of experienced supply chain experts. In
                  such short span of time, our high-performing team have managed
                  logistics to more than 20 countries - shipping cargo from the
                  farthest east to the west of the world and delivering more
                  than 1.000 units of cargo for virtually all industry lines
                  operating globally.
                </div>
                <div className="mt-4 mb-2 text-justify">
                  We work with our clients to navigate the increasing complexity
                  and interconnectivity of the supply chain sectors, improve
                  their operation excellence, expand their business reach
                  efficiently through logistics advancement, with deep
                  understanding of governance's custom process, while still
                  adhering to comply the regulation.
                </div>
                <div className="mt-4 mb-2 text-tetra font-semibold text-justify">
                  We are powered by our dedicated experts, vast network of
                  trusted delivery partners, and driven by our vision and
                  mission.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:grid lg:grid-cols-2 justify-center items-center bg-gradient-to-b from-blue-100 to-white p-6 w-full py-24 gap-8 text-justify">
        {/* Text Section */}
        <div
          className="text-start mb-12 w-full lg:px-16 sm:px-8 max-lg:order-2 px-3"
          data-aos="fade-in"
        >
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
            Looking to move your cargo across city, island, country, or
            continents at ease?
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mt-4 text-justify ">
            We provide <b>seamless logistic solutions</b> to handle your cargo
            with care, no matter the distance.
          </p>
          <p className="text-lg md:text-xl text-gray-600 mt-4 text-justify">
            <b>
              Import, export, and ship your cargo from and to any location in
              the world
            </b>{" "}
            without any worry with TML services.
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
        <div className="px-6 py-8 lg:px-24 text-justify" data-aos="fade-in">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-700">
            <span className="text-tetra">
              Create a smooth, simple, and sophisticated logistic journey
            </span>{" "}
            <br />
            with TML all-encompassing solutions
          </h2>
          <p className="text-base md:text-lg text-justify font-semibold  pt-8 max-w-3xl">
              Our 4 core services target the key activities crucial to boost
              your end-to-end logistic process and classified into 2 service
              offerings based on the logistic stage you are at.
            </p>
        </div>

        {/* Circular Design Section */}
        <div className="flex flex-col lg:flex-row items-center justify-center lg:space-x-10 px-6 lg:px-24 pb-6">
          <div data-aos="fade-in">
            <img
              src="/img/tetra-solution.png"
              alt="tetra-logistic"
              className="lg:w-[400px] lg:h-[350px] md:w-[350px] md:h-[300px] w-[300px] h-[250px]"
            />
          </div>

          {/* Description Section */}
          <div
            className="lg:w-1/2 space-y-8 mt-8 lg:mt-0 pb-8 md:pt-10"
            data-aos="fade-right"
          >
            {/* <h3 className=" text-2xl font-bold">
                With our services, create an effective supply chain...
              </h3> */}
            <div className="bg-tetra p-6 rounded-lg shadow-lg ">
              <h3 className="text-white text-lg font-bold">
                Powered by TML Strategy Solutions
              </h3>
              <p className="text-white text-sm text-justify">
                Develop a streamlined logistics game plan that benefit on
                decades of industry knowledge, latest tech advancement and
                evolving regulations with our{" "}
                <b>
                  <i>Custom Consultation</i>
                </b>{" "}
                service.
              </p>
            </div>

            <div className="bg-tetra-alt p-6 rounded-lg shadow-lg ">
              <h3 className="text-white text-lg font-bold">
                Delivered with TML Operations Solutions
              </h3>
              <p className="text-white text-sm text-justify">
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

      {/* <div
        className={`${styles.parallax} min-h-screen flex flex-col p-8 md:p-20`}
      >
        <div
          className="text-white text-4xl sm:text-5xl font-extrabold text-center pb-20 z-10 "
          // style={{ textShadow: '1px 1px 1px rgba(0, 0, 0, 0.9)' }}
          data-aos="fade-up"
        >
          Strategy <span className="">Solutions</span>
        </div>

        <div className="flex flex-col gap-12 w-full items-center justify-center z-10">
          <Link href={"/services#custom-consultation"}>
            <div className="relative w-full max-w-lg bg-gradient-to-l from-gray-400 to-tetra/60 backdrop-blur-md rounded-3xl shadow-2xl hover:shadow-3xl hover:scale-[102%] transition-transform duration-700 p-4 md:p-8 pt-20 transform">
              <div className="rounded-full bg-tetra-alt w-24 h-24 flex items-center justify-center absolute left-1/2 transform -translate-x-1/2 -top-12 shadow-xl">
                <FontAwesomeIcon
                  icon={faHandshake}
                  className="!text-tetra text-4xl"
                />
              </div>

              <div className="text-2xl sm:text-3xl font-bold text-tetra-alt text-center px-4  sm:pt-8 w-full">
                Custom Consultation
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


      </div> */}
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
            <p className="text-lg font-medium text-white">Clients Worldwide</p>
          </div>

          {/* Fact 3 */}
          <div className="flex flex-col items-center">
            <Partner />
            <h3 className="text-3xl font-bold text-white">
              500 <span className="text-tetra">+</span>
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
              Certified Professionals
            </p>
          </div>
          {/* Fact 5 */}
          <div className="flex flex-col items-center">
            <GlobePoint />
            <h3 className="text-3xl font-bold text-white">
              20 <span className="text-tetra">+</span>
            </h3>
            <p className="text-lg font-medium text-white">Countries Served</p>
          </div>
        </div>
        <div className="border border-white my-10" data-aos="fade-in"></div>
        {/* <div
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
        </div> */}
        <section>
          <div className="text-center text-white py-8" data-aos="fade-in">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              We have shipped across <br /> the nation and{" "}
              <span className="text-tetra">worldwide</span> for
            </h1>
          </div>
          <div
            className="grid grid-cols-1 lg:grid-cols-3 gap-6 px-3 md:px-16 lg:px-32 max-md:space-y-3 pb-8"
            data-aos="fade-down"
          >
            <div className="bg-white h-fit shadow-xl rounded-lg transition duration-300 transform hover:scale-[102%]">
              <h2 className="text-2xl font-bold text-tetra-alt bg-gradient-to-r from-tetra to-tetra/70 py-2 px-4 rounded-t-md text-center">
                Import
              </h2>
              <ul className="text-justify mt-4 space-y-2 font-medium list-disc px-8 mb-4">
                {[
                  "Chemical Products",
                  "Home Building Materials",
                  "Food and Beverages",
                  "Shoes & Bags",
                  "Heavy Machinery",
                  "Maternity and Baby",
                  "Product",
                  "Spare Parts",
                  "Electronics",
                  "Printing Ink",
                  "Electrical Product",
                  "Safety Working Product",
                  "Glass Product",
                  "Project Machine Product",
                  "Shoes",
                  "Bags",
                  "Molding",
                  "Coffee Machine",
                ].map((item, idx) => (
                  <li key={idx} className={`text-gray-600 ${idx < 5 ? 'font-bold text-tetra' : ''}`}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Export Section */}
            <div className="bg-white   h-fit shadow-xl rounded-lg transition duration-300 transform hover:scale-[102%]">
              <h2 className="text-2xl font-bold text-tetra-alt bg-gradient-to-r from-tetra to-tetra/70 py-2 px-4 rounded-t-md text-center">
                Export
              </h2>
              <ul className="text-justify mt-4 space-y-2 font-medium list-disc px-8 mb-4">
                {[
                  "Palm Oil Product",
                  "Pharmaceutical Product",
                  "Baby Product",
                  "Plastic Product",
                  "Chemical Product",
                  "Food and Beverages",
                  "Hair Styling Product",
                  "Molding",
                  "Plastic Product",
                  "Coffee Machine",
                ].map((item, idx) => (
                  <li key={idx} className={`text-gray-600 ${idx < 5 ? 'font-bold text-tetra' : ''}`}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Domestic Interisland Section */}
            <div className="bg-white  h-fit shadow-xl rounded-lg transition duration-300 transform hover:scale-[102%]">
              <h2 className="text-2xl font-bold text-tetra-alt bg-gradient-to-r from-tetra to-tetra/70 py-2 px-4 rounded-t-md text-center">
                Domestic Interisland
              </h2>
              <ul className="text-justify mt-4 space-y-2 font-medium list-disc px-8 mb-4">
                {[
                  "Shoes",
                  "Bags",
                  "Plastic Product",
                  "Home Building Material",
                  "Molding",
                ].map((item, idx) => (
                  <li key={idx} className={`text-gray-600 ${idx < 2 ? 'font-bold text-tetra' : ''}`}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
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
            <div className="md:text-xl text-lg font-medium text-tetra-alt py-2 pt-6 text-justify">
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
      {/* Footer */}
      <Footer />
    </div>
  );
}
