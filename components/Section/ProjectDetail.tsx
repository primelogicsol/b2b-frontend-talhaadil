"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface InfoItem {
  title: string;
  info: string;
}

interface ProjectDetailProps {
  infoBox?: InfoItem[];
  services?: string[];
  mainImage?: string;
  processImage?: string;
}

const defaultInfoBox: InfoItem[] = [
  { title: "Date", info: "10 January, 2024" },
  { title: "Client", info: "Kodesolution Ltd" },
  { title: "Website", info: "www.domain.com" },
  { title: "Location", info: "New York, USA" },
];

const defaultServices: string[] = [
  "Database Security",
  "Technology Consult",
  "App Development",
  "UI/UX Design",
  "Cyber Security",
];

export default function ProjectDetail({
  infoBox = defaultInfoBox,
  services = defaultServices,
  mainImage = "/assets/images/inner/project-det-thu.png",
  processImage = "/assets/images/inner/project-det-img.png",
}: ProjectDetailProps) {
  return (
    <section className="py-[123px] bg-[#f4f4f4] px-4 md:px-0">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <Image
            src={mainImage}
            alt="thu"
            width={1200}
            height={700}
            className="w-full rounded-lg shadow-md"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 bg-white rounded-3xl py-[55px] px-6 mb-12"
        >
          {infoBox.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="pl-6 md:pl-12 transition duration-300 hover:text-orange-500"
            >
              <p className="text-[18px] text-gray-500 mb-0">{item.title}</p>
              <h6 className="text-[24px] leading-[46px] font-semibold text-gray-900">
                {item.info}
              </h6>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-8 space-y-6"
          >
            <div>
              <h4 className="text-[30px] font-semibold text-gray-900">
                Here To Know About This Project
              </h4>
              <p className="text-[17px] text-gray-600">
                Alternative innovation to ethical network environmental whiteboard methods empowerment...
              </p>
              <p className="text-[17px] text-gray-600">
                Continually fashion orthogonal leadership skills whereas wireless metrics...
              </p>
            </div>

            <div>
              <h3 className="text-[28px] font-semibold my-5">The Challenge Of Project</h3>
              <p className="text-[17px] text-gray-600">
                Innovate wireless e-markets for inexpensive e-markets. Monotonectally grow...
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 items-start">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring" }}
              >
                <Image
                  src={processImage}
                  alt="img"
                  width={600}
                  height={400}
                  className="w-full rounded shadow-sm"
                />
              </motion.div>
              <motion.div
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h4 className="text-[28px] font-semibold mb-4">Process & Results</h4>
                <ul className="space-y-2">
                  {[
                    "Technology Consultancy",
                    "Maintenance And Support",
                    "We Provide best services",
                    "Requirements Gathering",
                    "Maintenance good Support",
                  ].map((text, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-[17px] leading-7 group"
                    >
                      <div className="w-3 h-3 bg-orange-500 rounded-full group-hover:scale-125 transition-transform" />
                      {text}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            <div>
              <Link
                href="/project-details"
                className="inline-block text-[22px] text-orange-500 font-bold hover:underline my-4"
              >
                Competently architect intermandated deliverables...
              </Link>
              <p className="text-[17px] text-gray-600">
                Appropriately communicate economically sound e-commerce...
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-4 space-y-10"
          >
            <motion.div
              whileHover={{ y: -4 }}
              className="bg-white p-8 rounded-lg shadow-md transition-all duration-300"
            >
              <h4 className="text-xl font-semibold mb-4">Main Services</h4>
              <ul className="divide-y divide-gray-200">
                {services.map((item, i) => (
                  <li key={i} className="py-3">
                    <Link
                      href="/service/service-details"
                      className="relative block py-3 px-6 rounded-md font-medium uppercase overflow-hidden transition-all duration-500 hover:text-white text-gray-800 group"
                    >
                      <span className="absolute left-0 top-0 w-full h-full bg-orange-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out z-0"></span>
                      <span className="relative z-10">{item}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gray-100 p-6 rounded-lg text-center shadow relative overflow-hidden group"
            >
              <span className="absolute inset-0 bg-orange-100 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-0" />
              <div className="relative z-10">
                <Image
                  src="/assets/images/inner-images/sidber-cont-icon.png"
                  alt=""
                  width={60}
                  height={60}
                  className="mx-auto mb-2"
                />
                <p className="text-sm text-gray-500">Call Us Anytime</p>
                <h3 className="text-2xl font-bold text-gray-800 my-2">+123 (4567) 890</h3>
                <span className="text-sm text-gray-500 flex justify-center items-center gap-2">
                  <i className="bi bi-envelope-fill"></i> example@gmail.com
                </span>
                <div className="mt-4">
                  <Link
                    href="/contact"
                    className="relative inline-block px-6 py-3 text-white font-semibold rounded overflow-hidden group"
                  >
                    <span className="absolute inset-0 w-full h-full bg-orange-600 origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-in-out z-0" />
                    <span className="relative z-10">Contact Us</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}




// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { motion } from "framer-motion";

// const ProjectDetail = () => {
//   const InfoBox = [
//     { title: "Date", info: "10 January, 2024" },
//     { title: "Client", info: "Kodesolution Ltd" },
//     { title: "Website", info: "www.domain.com" },
//     { title: "Location", info: "New York, USA" },
//   ];

//   const Services = [
//     "Database Security",
//     "Technology Consult",
//     "App Development",
//     "UI/UX Design",
//     "Cyber Security",
//   ];

//   return (
//     <section className="py-[123px] bg-[#f4f4f4] px-4 md:px-0">
//       <div className="max-w-7xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="mb-10"
//         >
//           <Image
//             src="/assets/images/inner/project-det-thu.png"
//             alt="thu"
//             width={1200}
//             height={700}
//             className="w-full rounded-lg shadow-md"
//           />
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.6, delay: 0.1 }}
//           viewport={{ once: true }}
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 bg-white rounded-3xl py-[55px] px-6 mb-12"
//         >
//           {InfoBox.map((item, i) => (
//             <motion.div
//               key={i}
//               whileHover={{ scale: 1.05 }}
//               className="pl-6 md:pl-12 transition duration-300 hover:text-orange-500"
//             >
//               <p className="text-[18px] text-gray-500 mb-0">{item.title}</p>
//               <h6 className="text-[24px] leading-[46px] font-semibold text-gray-900">
//                 {item.info}
//               </h6>
//             </motion.div>
//           ))}
//         </motion.div>

//         <div className="grid lg:grid-cols-12 gap-10">
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//             className="lg:col-span-8 space-y-6"
//           >
//             <div>
//               <h4 className="text-[30px] font-semibold text-gray-900">
//                 Here To Know About This Project
//               </h4>
//               <p className="text-[17px] text-gray-600">
//                 Alternative innovation to ethical network environmental whiteboard methods empowerment...
//               </p>
//               <p className="text-[17px] text-gray-600">
//                 Continually fashion orthogonal leadership skills whereas wireless metrics...
//               </p>
//             </div>

//             <div>
//               <h3 className="text-[28px] font-semibold my-5">The Challenge Of Project</h3>
//               <p className="text-[17px] text-gray-600">
//                 Innovate wireless e-markets for inexpensive e-markets. Monotonectally grow...
//               </p>
//             </div>

//             <div className="grid sm:grid-cols-2 gap-6 items-start">
//               <motion.div
//                 whileHover={{ scale: 1.02 }}
//                 transition={{ type: "spring" }}
//               >
//                 <Image
//                   src="/assets/images/inner/project-det-img.png"
//                   alt="img"
//                   width={600}
//                   height={400}
//                   className="w-full rounded shadow-sm"
//                 />
//               </motion.div>
//               <motion.div
//                 whileInView={{ opacity: 1 }}
//                 initial={{ opacity: 0 }}
//                 transition={{ duration: 0.5, delay: 0.2 }}
//               >
//                 <h4 className="text-[28px] font-semibold mb-4">Process & Results</h4>
//                 <ul className="space-y-2">
//                   {[
//                     "Technology Consultancy",
//                     "Maintenance And Support",
//                     "We Provide best services",
//                     "Requirements Gathering",
//                     "Maintenance good Support",
//                   ].map((text, i) => (
//                     <li
//                       key={i}
//                       className="flex items-center gap-2 text-[17px] leading-7 group"
//                     >
//                       <i className="bi bi-check-circle-fill text-orange-500 text-[19px] group-hover:scale-110 transition-transform duration-300" />
//                       {text}
//                     </li>
//                   ))}
//                 </ul>
//               </motion.div>
//             </div>

//             <div>
//               <Link
//                 href="/project-details"
//                 className="inline-block text-[22px] text-orange-500 font-bold hover:underline my-4"
//               >
//                 Competently architect intermandated deliverables...
//               </Link>
//               <p className="text-[17px] text-gray-600">
//                 Appropriately communicate economically sound e-commerce...
//               </p>
//             </div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: 30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//             className="lg:col-span-4 space-y-10"
//           >
//             <motion.div
//               whileHover={{ y: -4 }}
//               className="bg-white p-8 rounded-lg shadow-md transition-all duration-300"
//             >
//               <h4 className="text-xl font-semibold mb-4">Main Services</h4>
//               <ul className="divide-y divide-gray-200">
//                 {Services.map((item, i) => (
//                   <li key={i} className="py-3">
//                     <Link
//                       href="/service/service-details"
//                       className="flex items-center justify-between text-gray-800 hover:text-orange-500 transition"
//                     >
//                       <span className="flex items-center gap-2">
//                         <Image
//                           src="/assets/images/inner/category-icon.png"
//                           alt=""
//                           width={16}
//                           height={16}
//                         />
//                         {item}
//                       </span>
//                       <i className="bi bi-arrow-right"></i>
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </motion.div>

//             <motion.div
//               whileHover={{ scale: 1.02 }}
//               className="bg-gray-100 p-6 rounded-lg text-center shadow"
//             >
//               <Image
//                 src="/assets/images/inner-images/sidber-cont-icon.png"
//                 alt=""
//                 width={60}
//                 height={60}
//                 className="mx-auto mb-2"
//               />
//               <p className="text-sm text-gray-500">Call Us Anytime</p>
//               <h3 className="text-2xl font-bold text-gray-800 my-2">+123 (4567) 890</h3>
//               <span className="text-sm text-gray-500 flex justify-center items-center gap-2">
//                 <i className="bi bi-envelope-fill"></i> example@gmail.com
//               </span>
//               <div className="mt-4">
//                 <Link
//                   href="/contact"
//                   className="inline-block px-6 py-3 bg-orange-500 text-white font-semibold rounded hover:bg-orange-600 transition"
//                 >
//                   Contact Us <i className="bi bi-arrow-right"></i>
//                 </Link>
//               </div>
//             </motion.div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProjectDetail;  i dont want arrows icon rather then when hover slinding cilor effect and all on button also changehover effect to something uniqye