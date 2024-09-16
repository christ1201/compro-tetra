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
      description: 'Consults with our dedicated team to build just the right logistic solutions suited to your business strategy and financial investment. Perfect for',
      // description: 'Unlock the full potential of your supply chain with our Custom Consultation services. At PT Tetra Mitra Logistic, we take the time to understand your unique business needs, offering tailored solutions that streamline your logistics processes. From optimizing routes to reducing costs, our expert consultants are here to guide you every step of the way, ensuring your operations run smoothly and efficiently.',
      option: [
        'First time importers/exporters to and from Indonesia',
        'Well-established businesses expanding their reach to new destinations while optimizing their overall supply chain costs and process'
      ],
      image:'/img/services/consultation.jpg',
    },
    {
      icon: faGlobeAsia,
      title: "International Freight Forwarding",
      id: "#international-freight-forwarding",
      ref:"/services#international-freight-forwarding",
      description: 'Expand your business horizons with our International Freight Forwarding services. We manage the complexities of global shipping, providing reliable and efficient transportation solutions that connect your products to markets around the world. With a global network of partners and cutting-edge tracking technology, we ensure your cargo arrives safely, on time, and within budget.',
      option: [
        'Businesses with specific shipping requirements (air/marine/domestic interisland)',
        'Businesses aiming to keep a lean day-to-day operations by appointing logistics expert to deal with the ever-moving and complex logistics operations.'
      ],
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