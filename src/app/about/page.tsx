"use client";

import { useEffect } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import AOS from "aos";
import "aos/dist/aos.css"; // Import the AOS styles

export default function About() {
  const no_wa = "6281586571234";
  useEffect(() => {
    AOS.init({
      duration: 2000, // Animation duration
      // easing: "ease-in-out", // Animation easing
      // once: true, // Whether animation should happen only once - while scrolling down
    });
  }, []);
  return (
    <div className="bg-white">
      <Navbar></Navbar>
      <div
        className="bg-black bg-opacity-50 bg-cover bg-center h-40 w-full"
        style={{ backgroundImage: "url(/img/container.png)" }}
      >
        <div className="text-5xl text-center pt-14 text-white font-bold bg-black bg-opacity-30 h-full">
          About Us
        </div>
      </div>
      <section
        className="grid grid-cols-1 lg:grid-cols-2 justify-between p-6 lg:p-14 sm:p-10"
        id="about_tetra"
        data-aos="fade-zoom-in"
      >
        <div className="text-start max-lg:pb-8 lg:text-end text-4xl md:text-5xl font-bold text-tetra-alt order-1 lg:order-2">
          Empowering Your Business with Reliable and Customized Logistics
          Solutions
        </div>
        <div className="flex flex-col space-y-4 text-tetra-alt order-2 lg:order-1 text-lg max-sm:text-base text-end">
          <div>
            <b>PT. TETRA MITRA LOGISTIK</b> is one of the leading freight
            forwarding and custom broker acquired in 2003, then rebranded in
            2023. Our objective is to provide excellence service in all freight
            forwarding areas to our customers, principals, and overseas
            associates.
          </div>
          <div>
            Our strength is our highly-experienced and hardworking team that
            provides our customers and associates with excellent service quality
            to achieve maximum benefit.
          </div>
          <div>
            With our reliable resources, professional, and highly-dedicated
            staff, we are providing an advanced solution and will be your best
            in logistics partnership through freight services, export and import
            clearance, and other logistics-related services.
          </div>
        </div>
      </section>
      <section className="bg-gray-100 py-8 " id="vision&mission">
        <div
          className="text-center text-4xl md:text-5xl font-bold text-tetra-alt pt-14"
          data-aos="fade-right"
          data-aos-easing="ease-in"
          data-aos-duration="1500"
        >
          Vision & Mission
        </div>
        <div className="flex flex-col p-6 lg:p-14 sm:p-6 md:p-12">
          <div
            className="flex md:flex-row flex-col max-lg:text-center"
            data-aos="fade-right"
            data-aos-easing="ease-in"
            data-aos-duration="1000"
          >
            <div className="pr-5 max-lg:hidden">
              <img src="/img/target.png" className="w-20 lg:h-fit h-16"></img>
            </div>
            <div className="font-bold">
              <div className="w-full flex items-center justify-center lg:hidden pb-4">
                <img src="/img/target.png" className="w-16 lg:h-fit h-16"></img>
              </div>
              <div className="text-tetra text-3xl md:text-4xl">Vision</div>
              <div className="text-tetra-alt text-xl md:text-2xl pt-2">
                "To be the most trusted and innovative logistics partner,
                transforming the way businesses connect with global markets
                through seamless and efficient transportation solutions."
              </div>
            </div>
          </div>
          <div
            className="flex flex-col md:flex-row pt-12 max-lg:text-center w-full"
            data-aos="fade-right"
            data-aos-easing="ease-in"
            data-aos-duration="1000"
          >
            <div className="pr-5 flex max-lg:hidden">
              <img src="/img/idea.png" className="w-24 lg:h-fit h-24"></img>
            </div>
            <div className="flex flex-col font-bold">
              <div className="w-full flex items-center justify-center lg:hidden pb-4">
                <img src="/img/idea.png" className="w-16 lg:h-fit h-16"></img>
              </div>
              <div className="text-tetra text-3xl md:text-4xl">Mission</div>
              <div className="text-tetra-alt text-xl md:text-2xl pt-2">
                “To build long-lasting relationships with our clients by
                offering expert consultation, transparent communication, and
                tailored solutions that align with their unique business needs.”
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="flex flex-col  p-6 lg:p-24 sm:p-14 my-5"
        data-aos="fade-zoom-in"
      >
        <div className="md:text-4xl text-3xl font-bold text-tetra-alt">
          Ready to Elevate Your Logistics Experience?
        </div>
        <div className="md:text-xl text-lg font-medium text-tetra-alt py-8">
          Partner with us and discover how our customized logistics solutions
          can drive your business forward. <br></br>
          Whether you need expert consultation, seamless freight forwarding, or
          reliable interisland transport, we're here to help. <br></br>
          Let's work together to simplify your supply chain and ensure your
          goods reach their destination efficiently and securely. <br></br>
        </div>
        <a href="/contact">
                <div className="flex max-sm:items-center max-sm:justify-center">
                  <button className="bg-tetra max-w-40 min-w-40 min-h-14 rounded-lg hover:bg-opacity-90">
                    <span className="text-white font-semibold text-xl">
                      Contact Us
                    </span>
                  </button>
                </div>
              </a>
      </section>
      <Footer></Footer>
    </div>
  );
}
