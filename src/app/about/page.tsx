"use client";

import Navbar from "@/components/Navbar";

export default function About() {
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
      <section className="grid grid-cols-1 lg:grid-cols-2 justify-between p-6 lg:p-18 sm:p-14">
        <div className="text-start max-lg:pb-8 lg:text-end text-3xl md:text-4xl font-bold text-tetra-alt order-1 lg:order-2">
          Empowering Your Business with Reliable and Customized Logistics
          Solutions
        </div>
        <div className="flex flex-col space-y-4 text-tetra-alt order-2 lg:order-1 text-base max-sm:text-base">
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
    </div>
  );
}
