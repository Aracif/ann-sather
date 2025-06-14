// import React, { useState } from 'react';
//
// type Package = {
//     title: string;
//     price: string;
//     description: string[];
// };
//
// const breakfastPackages: Package[] = [
//     {
//         title: 'The Continental',
//         price: '$12.50',
//         description: [
//             'Ann Sather Mini Cinnamon Rolls, Mini Pecan Rolls and Assorted Mini Muffins',
//             'Fresh Squeezed Orange Juice',
//             'Seasonal Fresh Fruit',
//         ],
//     },
//     {
//         title: 'The Healthy Choice',
//         price: '$15.00',
//         description: [
//             'Ann Sather Mini Cinnamon Rolls and Assorted Mini Muffins',
//             'Fresh Squeezed Orange Juice',
//             'Granola Served with Plain Yogurt',
//             'Seasonal Fresh Fruit',
//         ],
//     },
//     {
//         title: 'The Swedish Breakfast',
//         price: '$15.50',
//         description: [
//             'Ann Sather Mini Cinnamon Rolls and Assorted Mini Muffins',
//             'Fresh Squeezed Orange Juice',
//             'Seasonal Fresh Fruit',
//             'Swedish Pancakes with Lingonberries and Syrup or Egg and Cheese Strata',
//         ],
//     },
//     {
//         title: 'The Low Carb Special',
//         price: '$16.00',
//         description: [
//             'Seasonal Fresh Fruit',
//             'Scrambled Eggs',
//             'Bacon',
//             'Fresh Squeezed Orange Juice',
//         ],
//     },
//     {
//         title: 'The Norwegian Breakfast',
//         price: '$17.00',
//         description: [
//             'Fresh Nova Lox',
//             'Assorted Bagels and Cream Cheese',
//             'Tomatoes, Onions and Cucumbers',
//         ],
//     },
//     {
//         title: 'Ann’s Favorite Breakfast',
//         price: '$17.50',
//         description: [
//             'Mini Cinnamon Rolls, Mini Pecan Rolls and Assorted Mini Muffins',
//             'Fresh Squeezed Orange Juice',
//             'Seasonal Fresh Fruit',
//             'Pork Sausage',
//             'Banana French Toast with Maple Syrup or Stuffed Tomatoes with Egg',
//         ],
//     },
//     {
//         title: 'The Deluxe Breakfast',
//         price: '$21.95',
//         description: [
//             'Ann Sather Mini Cinnamon Rolls, Mini Pecan Rolls and Assorted Mini Muffins',
//             'Fresh Squeezed Orange Juice',
//             'Seasonal Fresh Fruit',
//             'Egg and Cheese Strata or Stuffed Tomatoes with Egg',
//             'Swedish Pancakes with Lingonberries and Syrup',
//             'Bacon, Ham and Sausage',
//             'Hash Brown Potatoes',
//         ],
//     },
//     {
//         title: 'Omelets In Your Office',
//         price: '$30.95*',
//         description: [
//             'Mini Cinnamon Rolls, Mini Pecan Rolls and Assorted Mini Muffins',
//             'Fresh Squeezed Orange Juice',
//             'Seasonal Fresh Fruit',
//             'Swedish Pancakes with Lingonberries and Syrup',
//             'Hash Brown Potatoes',
//             'Bacon, Ham and Sausage',
//             'Plus Made to Order Omelets',
//             'Ingredients: Ham, Onion, Green Pepper, Tomato, Mushroom, Zucchini, Cheddar Cheese, Swiss Cheese',
//         ],
//     },
//     {
//         title: 'Individually Packaged Omelets or Wraps',
//         price: '$21.95',
//         description: [
//             'Mini Cinnamon Rolls, Mini Pecan Rolls and Assorted Mini Muffins',
//             'Fresh Squeezed Orange Juice',
//             'Seasonal Fresh Fruit',
//             'Garden Omelet, Sausage and Cheese or Denver Swedish Pancakes with Lingonberries and Syrup',
//             'Hash Brown Potatoes',
//             'Bacon, Ham and Sausage',
//         ],
//     },
// ];
//
// const AccordionItem = ({
//                            pkg,
//                            index,
//                            isOpen,
//                            toggle,
//                        }: {
//     pkg: Package;
//     index: number;
//     isOpen: boolean;
//     toggle: (i: number) => void;
// }) => (
//     <div className="border border-white rounded-lg overflow-hidden">
//         <button
//             className="w-full text-left px-6 py-4 bg-blue-800 text-white font-semibold flex justify-between items-center"
//             onClick={() => toggle(index)}
//         >
//             <span>{pkg.title} — {pkg.price}</span>
//             <span>{isOpen ? '-' : '+'}</span>
//         </button>
//         {isOpen && (
//             <div className="bg-blue-100 text-gray-900 px-6 py-4 space-y-1">
//                 {pkg.description.map((line, i) => (
//                     <p key={i}>• {line}</p>
//                 ))}
//             </div>
//         )}
//     </div>
// );
//
// const BreakfastAccordion = () => {
//     const [openIndex, setOpenIndex] = useState<number | null>(null);
//
//     const toggleAccordion = (index: number) => {
//         setOpenIndex(prev => (prev === index ? null : index));
//     };
//
//     return (
//         <section className="max-w-4xl mx-auto py-16 px-6">
//             <h2 className="text-3xl font-bold text-center text-white mb-10">Breakfast Packages</h2>
//             <div className="space-y-4">
//                 {breakfastPackages.map((pkg, index) => (
//                     <AccordionItem
//                         key={index}
//                         pkg={pkg}
//                         index={index}
//                         isOpen={openIndex === index}
//                         toggle={toggleAccordion}
//                     />
//                 ))}
//             </div>
//
//             <p className="text-white mt-8 italic text-sm text-center">
//                 Coffee, Decaf Coffee, Hot Tea, or Assorted Soft Drinks: $3.25<br />
//                 Onsite Catering: Please Add $3.25 per person for Beverage Service.<br />
//                 For other breakfast options, go to our Catering A La Carte page.
//             </p>
//         </section>
//     );
// };
//
// export default BreakfastAccordion;
//
import React, { useState } from 'react';

type Package = {
    title: string;
    price: string;
    description: string[];
};

const breakfastPackages: Package[] = [
    {
        title: 'The Continental',
        price: '$12.50',
        description: [
            'Ann Sather Mini Cinnamon Rolls, Mini Pecan Rolls and Assorted Mini Muffins',
            'Fresh Squeezed Orange Juice',
            'Seasonal Fresh Fruit',
        ],
    },
    {
        title: 'The Healthy Choice',
        price: '$15.00',
        description: [
            'Ann Sather Mini Cinnamon Rolls and Assorted Mini Muffins',
            'Fresh Squeezed Orange Juice',
            'Granola Served with Plain Yogurt',
            'Seasonal Fresh Fruit',
        ],
    },
    {
        title: 'The Swedish Breakfast',
        price: '$15.50',
        description: [
            'Mini Cinnamon Rolls and Muffins',
            'Fresh Squeezed Orange Juice',
            'Seasonal Fresh Fruit',
            'Swedish Pancakes with Lingonberries and Syrup or Egg and Cheese Strata',
        ],
    },
    {
        title: 'The Low Carb Special',
        price: '$16.00',
        description: [
            'Seasonal Fresh Fruit',
            'Scrambled Eggs',
            'Bacon',
            'Fresh Squeezed Orange Juice',
        ],
    },
    {
        title: 'The Norwegian Breakfast',
        price: '$17.00',
        description: [
            'Fresh Nova Lox',
            'Assorted Bagels and Cream Cheese',
            'Tomatoes, Onions and Cucumbers',
        ],
    },
    {
        title: 'Ann’s Favorite Breakfast',
        price: '$17.50',
        description: [
            'Mini Cinnamon Rolls, Mini Pecan Rolls and Assorted Mini Muffins',
            'Fresh Squeezed Orange Juice',
            'Seasonal Fresh Fruit',
            'Pork Sausage',
            'Banana French Toast with Maple Syrup or Stuffed Tomatoes with Egg',
        ],
    },
    {
        title: 'The Deluxe Breakfast',
        price: '$21.95',
        description: [
            'Mini Rolls and Muffins',
            'Fresh Squeezed Orange Juice',
            'Seasonal Fresh Fruit',
            'Strata or Stuffed Tomatoes with Egg',
            'Swedish Pancakes with Lingonberries and Syrup',
            'Bacon, Ham and Sausage',
            'Hash Brown Potatoes',
        ],
    },
    {
        title: 'Omelets In Your Office',
        price: '$30.95*',
        description: [
            'Mini Cinnamon Rolls, Mini Pecan Rolls and Assorted Mini Muffins',
            'Fresh Squeezed Orange Juice',
            'Seasonal Fresh Fruit',
            'Swedish Pancakes with Lingonberries and Syrup',
            'Hash Brown Potatoes',
            'Bacon, Ham and Sausage',
            'Plus Made to Order Omelets',
            'Ingredients: Ham, Onion, Green Pepper, Tomato, Mushroom, Zucchini, Cheddar Cheese, Swiss Cheese',
        ],
    },
    {
        title: 'Individually Packaged Omelets or Wraps',
        price: '$21.95',
        description: [
            'Mini Cinnamon Rolls, Mini Pecan Rolls and Assorted Mini Muffins',
            'Fresh Squeezed Orange Juice',
            'Seasonal Fresh Fruit',
            'Garden Omelet, Sausage and Cheese or Denver Swedish Pancakes with Lingonberries and Syrup',
            'Hash Brown Potatoes',
            'Bacon, Ham and Sausage',
        ],
    },
];

const AccordionItem = ({
                           pkg,
                           index,
                           isOpen,
                           toggle,
                       }: {
    pkg: Package;
    index: number;
    isOpen: boolean;
    toggle: (index: number) => void;
}) => (
    <div className="border border-white rounded-lg overflow-hidden transition-all duration-300">
        <button
            className="w-full text-left px-6 py-4 bg-blue-800 text-white font-semibold flex justify-between items-center hover:bg-blue-700 transition-colors"
            onClick={() => toggle(index)}
        >
            <span>{pkg.title} — {pkg.price}</span>
            <span>{isOpen ? '-' : '+'}</span>
        </button>
        {isOpen && (
            <div className="bg-blue-100 text-gray-900 px-6 py-4 space-y-1">
                {pkg.description.map((line, i) => (
                    <p key={i}>• {line}</p>
                ))}
            </div>
        )}
    </div>
);

const BreakfastAccordion = () => {
    const [isSectionOpen, setIsSectionOpen] = useState(false);
    const [openPackageIndex, setOpenPackageIndex] = useState<number | null>(null);

    const togglePackage = (index: number) => {
        setOpenPackageIndex(prev => (prev === index ? null : index));
    };

    return (
        <section className="max-w-4xl mx-auto py-10 px-6">
            {/* Section Header Button */}
            <button
                className="w-full text-left text-white text-3xl font-extrabold mb-8 border-b border-white pb-2 hover:text-yellow-300 transition-all"
                onClick={() => setIsSectionOpen(prev => !prev)}
            >
                Breakfast Packages
            </button>

            {/* Section Content */}
            {isSectionOpen && (
                <>
                    <div className="space-y-4">
                        {breakfastPackages.map((pkg, index) => (
                            <AccordionItem
                                key={index}
                                pkg={pkg}
                                index={index}
                                isOpen={openPackageIndex === index}
                                toggle={togglePackage}
                            />
                        ))}
                    </div>

                    <p className="text-white mt-10 italic text-sm text-center">
                        Coffee, Decaf Coffee, Hot Tea, or Assorted Soft Drinks: $3.25<br />
                        Onsite Catering: Please Add $3.25 per person for Beverage Service.<br />
                        For other breakfast options, go to our Catering A La Carte page.
                    </p>
                </>
            )}
        </section>
    );
};

export default BreakfastAccordion;
