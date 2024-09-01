import {
    faHandshake,
    faShippingFast,
    faBoxes,
    faGlobeAsia,
  } from "@fortawesome/free-solid-svg-icons";

export const services = [
    {
      icon: faHandshake,
      title: "Custom Consultation",
      id: "#custom-consultation",
      ref:"/services#custom-consultation",
      description: 'Unlock the full potential of your supply chain with our Custom Consultation services. At PT Tetra Mitra Logistic, we take the time to understand your unique business needs, offering tailored solutions that streamline your logistics processes. From optimizing routes to reducing costs, our expert consultants are here to guide you every step of the way, ensuring your operations run smoothly and efficiently.',
      image:'/img/services/consultation.jpg',
    },
    {
      icon: faGlobeAsia,
      title: "International Freight Forwarding",
      id: "#international-freight-forwarding",
      ref:"/services#international-freight-forwarding",
      description: 'Expand your business horizons with our International Freight Forwarding services. We manage the complexities of global shipping, providing reliable and efficient transportation solutions that connect your products to markets around the world. With a global network of partners and cutting-edge tracking technology, we ensure your cargo arrives safely, on time, and within budget.',
      image:'/img/services/international.jpg'
    },
    {
      icon: faBoxes,
      title: "Customs Brokerage",
      id: "#customs-brokerage",
       ref:"/services#customs-brokerage",
      description: 'Navigate the complexities of international trade with ease through our Customs Brokerage services. Our team of seasoned professionals simplifies the customs clearance process, ensuring your goods comply with all regulations and reach their destination without delays. Trust us to handle the paperwork, so you can focus on what matters most—growing your business.',
      image:'/img/services/brokerage.jpg'
    },
    {
      icon: faShippingFast,
      title: "Domestic Interisland",
      id: "#domestic-interisland",
      ref:"/services#domestic-interisland",
      description: 'Seamlessly connect Indonesia’s vast archipelago with our Domestic Interisland services. Whether you need to move goods between islands or within regions, PT Tetra Mitra Logistic offers reliable and cost-effective transportation solutions that ensure your products reach even the most remote locations. From planning to delivery, we provide end-to-end support, making domestic logistics hassle-free.',
       image:'/img/services/domestic.jpg'
    },
  ];