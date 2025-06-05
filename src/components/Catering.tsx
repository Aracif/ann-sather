// import React, {useEffect, useRef, useState} from 'react';
//
// const Catering: React.FC = () => {
//     const [isVisible, setIsVisible] = useState(false);
//     const sectionRef = useRef<HTMLDivElement | null>(null);
//
//     useEffect(() => {
//         const observer = new IntersectionObserver(
//             ([entry]) => {
//                 if (entry.isIntersecting) {
//                     setIsVisible(true);
//                 }
//             },
//             {threshold: 0.1}
//         );
//
//         if (sectionRef.current) {
//             observer.observe(sectionRef.current);
//         }
//
//         return () => {
//             if (sectionRef.current) {
//                 observer.unobserve(sectionRef.current);
//             }
//         };
//     }, []);
//
//     return (
//         <section
//             id="catering"
//             ref={sectionRef}
//             className={`bg-white text-gray-800 px-6 py-16 max-w-5xl mx-auto transition-opacity duration-1000 ease-out ${
//                 isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
//             }`}
//         >
//             <h3 className="text-3xl sm:text-2xl font-bold text-center text-blue-900 mb-6 indent-8 leading-relaxed px-4">
//                 About Ann Sather Restaurants and Catering
//             </h3>
//             Text should go to the Catering Section
//             <h3 className="font-bold max-w-xl mx-auto text-gray-700 text-justify indent-8 leading-relaxed px-4">
//                 Ann Sather Corporate and Special Event Catering
//             </h3>
//             <p className={"max-w-xl mx-auto text-gray-700 text-justify indent-8 leading-relaxed px-4"}>In addition to
//                 our three dine-in locations, Ann Sather has a
//                 catering team dedicated to ensuring our “good food” philosophy is carried through our corporate catering
//                 services and special event dining. In addition to our outstanding dine-in selections of Swedish comfort
//                 food, our catering menu includes special items from hors d’oeuvres to entrees to dessert and an
//                 outstanding, trained staff to serve them. Additionally, our flagship location on Belmont and our cafés
//                 are available for private catered events both during the day and at night for groups of 50 or more.</p>
//
//             <p className={"max-w-xl mx-auto text-gray-700"}></p>
//         </section>
//     );
// };
//
// export default Catering;
