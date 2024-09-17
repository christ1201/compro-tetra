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
      {/* <div
        className="bg-black bg-opacity-50 bg-cover bg-center h-40 w-full"
        style={{ backgroundImage: "url(/img/container.png)" }}
      >
        <div className="text-5xl text-center pt-14 text-white font-bold bg-black bg-opacity-30 h-full">
          About Us
        </div>
      </div> */}
      {/* <section
        className="grid grid-cols-1 lg:grid-cols-2 justify-between p-6 lg:p-14 sm:p-10"
        id="about_tetra"
        data-aos="fade-zoom-in"
      >
        <div className="text-start max-lg:pb-8 lg:text-end text-4xl md:text-5xl font-bold text-tetra-alt order-1 lg:order-2 space-y-4 lg:pl-2">
          <div>A Decade of Expertise Wrapped in an E2E Supply Chain and Logistic Management Service</div>
        </div>
        <div className="flex flex-col space-y-4 text-tetra-alt order-2 lg:order-1 text-lg max-sm:text-base lg:text-end text-start">
          <div>
            Tetra Mitra Logistic is an end-to-end logistic service company established in 2024 by a group of supply chain experts of more than 10 years. We have managed logistics to more than 100 countries, ship goods from the farthest east to the farthest west of the nation, and delivered more than xxx [units] of various goods in the span of two decades. Throughout those years, we learned that our passion for the industry and problem solving have naturally positioned us as the top of the supply chain landscape. 
          </div>
        </div>
      </section>
      <section
        className="grid grid-cols-1 lg:grid-cols-2 justify-between p-6 lg:p-14 sm:p-10"
        id="about_tetra"
        data-aos="fade-zoom-in"
      >
        <div className="text-start max-lg:pb-8 text-4xl md:text-5xl font-bold text-tetra space-y-4  pr-2">
          Running our Business with Integrity and Innovation at Every Step
        </div>
        <div className="flex flex-col space-y-4 text-tetra-alt text-lg max-sm:text-base text-start">
          <div>
          Having delved in the industry for a long time, our founding partners and teams are more than familiar with the complexity and advancement of the supply chain landscape. Throughout those years, we have expanded our network with numerous leading freight companies and developed a good understanding with the custom authorities. Our consistency and notable due diligence earns us a strong credibility with all parties involved in the shipping process. Our integral connection and involvement in the industry enable us to bring forth trailblazing solutions.
          </div>
        </div>
      </section>
      <section
        className="grid grid-cols-1 justify-between p-6 lg:p-14 sm:p-10"
        id="about_tetra"
        data-aos="fade-zoom-in"
      >
        <div className="text-center max-lg:pb-8 text-4xl md:text-5xl font-bold text-tetra-alt space-y-4 pb-8">
          <div>Unlocking Our Clients Global Potential</div>
        </div>
        <div className="flex flex-col space-y-4 text-tetra-alt text-lg max-sm:text-base text-start">
          <div>
          We love to learn about what makes each of our clients unique. From shipping to and from countries unheard of, to delivering goods restricted in most places, our clients vary in nature and business goals. When partnering with us, our team will cultivate a mutualistic relationship with you to understand more of what makes your business different; you bring your business landscape distinctness and challenges, while we tailor advances and possibilities specific for your supply chain needs.
          </div>
          <div className="pt-4">
          As years of experience have taught us, the intricate red tape and timing for these advancement and opportunities are best paired with the constant collaboration and guidance throughout our partnership. When partnering with us, feel empowered and confident that your logistics strategy and operations are in good hands at all times.
          </div>
        </div>
      </section> */}
      {/* <section
  className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 lg:p-16"
  id="about_tetra"
  data-aos="fade-zoom-in"
>
  <div className="text-start lg:text-end text-4xl md:text-5xl font-bold text-tetra-alt space-y-4 lg:pl-6">
    A Decade of Expertise Wrapped in an E2E Supply Chain and Logistic Management Service
  </div>
  <div className="text-tetra-alt text-lg max-sm:text-base lg:text-end text-start leading-relaxed space-y-6">
    <p>
    Tetra Mitra Logistic is an end-to-end logistic service company established in 2024 by a group of supply chain experts of more than 10 years. We have managed logistics to more than 100 countries, ship goods from the farthest east to the farthest west of the nation, and delivered more than xxx [units] of various goods in the span of two decades. Throughout those years, we learned that our passion for the industry and problem solving have naturally positioned us as the top of the supply chain landscape. 
    </p>
  </div>
      </section>

      <section
        className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 lg:p-16 bg-gray-100"
        id="integrity_innovation"
        data-aos="fade-zoom-in"
      >
        <div className="text-start text-4xl md:text-5xl font-bold text-tetra space-y-4 pr-6">
          Running Our Business with Integrity and Innovation at Every Step
        </div>
        <div className="text-tetra-alt text-lg max-sm:text-base leading-relaxed space-y-6">
          <p>
          Having delved in the industry for a long time, our founding partners and teams are more than familiar with the complexity and advancement of the supply chain landscape. Throughout those years, we have expanded our network with numerous leading freight companies and developed a good understanding with the custom authorities. Our consistency and notable due diligence earns us a strong credibility with all parties involved in the shipping process. Our integral connection and involvement in the industry enable us to bring forth trailblazing solutions.

          </p>
        </div>
      </section>

      <section
        className="grid grid-cols-1 justify-center text-center p-8 lg:p-16 bg-white"
        id="global_potential"
        data-aos="fade-zoom-in"
      >
        <div className="text-4xl md:text-5xl font-bold text-tetra-alt mb-6">
          Unlocking Our Clients' Global Potential
        </div>
        <div className="text-tetra-alt text-lg max-sm:text-base leading-relaxed space-y-6">
          <p>
          We love to learn about what makes each of our clients unique. From shipping to and from countries unheard of, to delivering goods restricted in most places, our clients vary in nature and business goals. When partnering with us, our team will cultivate a mutualistic relationship with you to understand more of what makes your business different; you bring your business landscape distinctness and challenges, while we tailor advances and possibilities specific for your supply chain needs.

          </p>
          <p>
          As years of experience have taught us, the intricate red tape and timing for these advancement and opportunities are best paired with the constant collaboration and guidance throughout our partnership. When partnering with us, feel empowered and confident that your logistics strategy and operations are in good hands at all times.
          </p>
        </div>
      </section> */}

<section
  className="relative p-12 lg:p-24 text-tetra-alt"
  id="about_tetra"
  // style={{ backgroundImage: "url('/img/container.png')" }}
  data-aos="fade-zoom-in"
>
  {/* Background Overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-tetra to-tetra-alt opacity-70"></div>

  <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
    {/* Left Section */}
    <div className="text-start lg:text-end text-3xl md:text-5xl font-bold text-white lg:order-2 space-y-6 ">
      <div>
        <span className="bg-gradient-to-r from-green-600 to-blue-700 bg-clip-text text-transparent">
          A Decade of Expertise
        </span>
        <span className="block ">Wrapped in E2E Supply Chain and Logistic Management Service</span>
      </div>
    </div>

    {/* Right Section */}
    <div className="relative text-white text-lg lg:text-xl max-sm:text-base lg:text-end text-start leading-relaxed space-y-8 lg:order-1">
      <p>
        Tetra Mitra Logistic is an end-to-end logistic service company established in 2024 by a group of supply chain experts of more than 10 years. We have managed logistics to more than 100 countries, ship goods from the farthest east to the farthest west of the nation, and delivered more than xxx [units] of various goods in the span of two decades. Throughout those years, we learned that our passion for the industry and problem solving have naturally positioned us as the top of the supply chain landscape. 
      </p>
    </div>
  </div>
</section>

<section
  className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 p-12 lg:p-24"
  id="integrity_innovation"
  data-aos="fade-up"
>
  {/* Left Section */}
  <div className="text-start text-4xl md:text-5xl font-bold text-tetra-alt lg:pr-12 space-y-6">
    <span className="block">Running Our Business With Integrity and Innovation</span>
  </div>

  {/* Right Section */}
  <div className="text-tetra-alt text-lg max-sm:text-base leading-relaxed space-y-6">
    <p>
    Having delved in the industry for a long time, our founding partners and teams are more than familiar with the complexity and advancement of the supply chain landscape. Throughout those years, we have expanded our network with numerous leading freight companies and developed a good understanding with the custom authorities.
    </p>
    <p>
    Our consistency and notable due diligence earns us a strong credibility with all parties involved in the shipping process. Our integral connection and involvement in the industry enable us to bring forth trailblazing solutions.
    </p>
  </div>
</section>

<section
  className="relative bg-gradient-to-r from-tetra-alt to-tetra p-12 lg:p-24 text-white"
  id="global_potential"
  data-aos="fade-zoom-in"
>
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
    {/* Title */}
    <div className="text-center lg:text-left text-4xl md:text-5xl font-bold space-y-6 lg:col-span-2 ">
      Unlocking Our Clients' Global Potential
    </div>

    {/* Left Section */}
    <div className="text-lg leading-relaxed space-y-6">
      <p>
      We love to learn about what makes each of our clients unique. From shipping to and from countries unheard of, to delivering goods restricted in most places, our clients vary in nature and business goals. When partnering with us, our team will cultivate a mutualistic relationship with you to understand more of what makes your business different; you bring your business landscape distinctness and challenges, while we tailor advances and possibilities specific for your supply chain needs.

      </p>
    </div>
    {/* Right Section */}
    <div className="text-lg leading-relaxed space-y-6">
      <p>
      As years of experience have taught us, the intricate red tape and timing for these advancement and opportunities are best paired with the constant collaboration and guidance throughout our partnership. When partnering with us, feel empowered and confident that your logistics strategy and operations are in good hands at all times.

      </p>
    </div>
  </div>
</section>


      {/* <section className="bg-gray-100 py-8 " id="vision&mission">
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
      </section> */}
      <section className="bg-gradient-to-b from-white to-gray-200 py-16" id="vision&mission">
  <div
    className="text-center text-4xl md:text-5xl font-extrabold text-tetra-alt pb-8"
    data-aos="fade-right"
    data-aos-easing="ease-in"
    data-aos-duration="1500"
  >
    Vision & Mission
  </div>
  <div className="flex flex-col lg:flex-row lg:justify-center p-6 lg:p-14 space-y-12 lg:space-y-0 lg:space-x-20">
    {/* Vision */}
    <div
      className="flex flex-col lg:flex-row items-center lg:items-start text-center lg:text-left w-full"
      data-aos="fade-right"
      data-aos-easing="ease-in"
      data-aos-duration="1000"
    >
      <div className="flex flex-col font-bold">
        <h3 className="text-tetra-alt text-3xl md:text-4xl pt-6 lg:pt-0">Vision</h3>
        <p className="text-gray-600 text-lg md:text-xl pt-2">
          "To be the most trusted and innovative logistics partner, transforming
          the way businesses connect with global markets through seamless and
          efficient transportation solutions."
        </p>
      </div>
    </div>

    {/* Mission */}
    <div
      className="flex flex-col lg:flex-row items-center lg:items-start text-center lg:text-left w-full"
      data-aos="fade-right"
      data-aos-easing="ease-in"
      data-aos-duration="1000"
    >
      <div className="flex flex-col font-bold">
        <h3 className="text-tetra-alt text-3xl md:text-4xl pt-6 lg:pt-0">Mission</h3>
        <p className="text-gray-600 text-lg md:text-xl pt-2">
          “To build long-lasting relationships with our clients by offering expert
          consultation, transparent communication, and tailored solutions that
          align with their unique business needs.”
        </p>
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
