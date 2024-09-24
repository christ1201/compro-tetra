"use client";

import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import styles from "./page.module.css";
import Footer from "@/components/Footer";
import { services } from "@/data/services";
import AOS from "aos";
import "aos/dist/aos.css"; // Import the AOS styles

export default function Services() {
  useEffect(() => {
    AOS.init({
      duration: 2000, // Animation duration
      // easing: "ease-in-out", // Animation easing
      // once: true, // Whether animation should happen only once - while scrolling down
    });
  }, []);

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
                  Custom Consulting
                </h3>
                <p className="text-tetra-alt mt-4 text-xl font-semibold text-justify">
                  Discover the best way to run your supply chain, <span className="text-tetra font-semibold">effortlessly.</span>
                </p>
                <p className="text-tetra-alt mt-4 text-lg text-justify">
                  Our team of experts will develop a bespoke supply chain
                  custom strategy. 
                </p>
                {/* <p className="text-tetra-alt mt-4 text-lg text-justify">
                  Starting from your goal,<span className="text-tetra font-semibold"> we based our strategy on
                  multiple factors</span>  that we have learnt throughout our decades
                  long experience are <span className="text-tetra font-semibold">specifically influencing your business
                  logistic practice</span>. 
                </p> */}
                <p className="text-tetra-alt mt-4 text-lg text-justify font-semibold">
                  Skip the additional liability, risks and
                  costs of entering and understanding the logistic process all
                  by yourself.
                </p>
                <p className="text-tetra mt-4 text-lg text-justify font-semibold">
                  Combined with our operations solutions, reap the benefit of running your supply chain process like a pro.
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
                   Master the complex regulations and procedures of international custom with <span className="text-tetra font-semibold">our licensed custom broker</span>.
                </p>
                <p className="text-tetra-alt mt-4 text-lg text-justify font-semibold">
                  Our streamlined yet detailed process ensures a compliant and timely international shipping
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
                <p className="text-tetra-alt mt-4 text-lg text-justify font-semibold">
                  Designed to support bulk deliveries across the nation. 
                </p>
                <p className="text-tetra-alt mt-4 text-lg text-justify">
                  Reach <span className="text-tetra font-semibold">even remote places</span> in Indonesia <span className="text-tetra font-semibold">fast and reliably</span> with TML vast delivery networks.
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
