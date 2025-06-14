// import React, { useState } from 'react';
//
// const alaCarteMenu = [
//     {
//         category: 'A LA CARTE BREAKFAST',
//         items: [
//             {
//                 title: 'Egg and Cheese Strata',
//                 price: '$7.00 per Person',
//                 description: ['Minimum 10 People']
//             },
//             {
//                 title: 'Scrambled Eggs',
//                 price: '$6.50 per Person',
//                 description: ['Minimum 10 People']
//             },
//             {
//                 title: 'Eggs Florentine',
//                 price: '$7.00 per Person',
//                 description: ['Minimum 10 People']
//             },
//             {
//                 title: 'Quiche',
//                 price: '$16.00 Each',
//                 description: ['Serves Six to Eight People']
//             },
//             {
//                 title: 'Swedish Pancakes With Lingonberries',
//                 price: '$5.50 per Person',
//                 description: []
//             },
//             {
//                 title: 'Sweet Bread French Toast',
//                 price: '$6.50 per Person',
//                 description: []
//             },
//             {
//                 title: 'French Toast',
//                 price: '$6.50 per Person',
//                 description: []
//             },
//             {
//                 title: 'Regular Sized Cinnamon Rolls',
//                 price: '$20.25 per Dozen',
//                 description: []
//             },
//             {
//                 title: 'Assorted Bagels',
//                 price: '$5.00 per Person',
//                 description: ['Served with Cream Cheese, Sliced Tomato, Red Onion and Pickles', '10 Person Minimum']
//             },
//             {
//                 title: 'Assorted Sweet Breads',
//                 price: '$7.25 per Loaf',
//                 description: []
//             },
//             {
//                 title: 'Bacon',
//                 price: '$3.75 per Person',
//                 description: []
//             },
//             {
//                 title: 'Ham',
//                 price: '$4.20 per Person',
//                 description: []
//             },
//             {
//                 title: 'Sausage',
//                 price: '$3.75 per Person',
//                 description: []
//             },
//             {
//                 title: 'Turkey Sausage',
//                 price: '$3.75 per Person',
//                 description: []
//             },
//             {
//                 title: 'Fresh Nova Lox',
//                 price: '$10.00 per Person',
//                 description: []
//             },
//             {
//                 title: 'Seasonal Fresh Fruit',
//                 price: '$3.75 per Person',
//                 description: []
//             },
//             {
//                 title: 'Granola with Plain Yogurt',
//                 price: '$8.75 per Person',
//                 description: []
//             },
//             {
//                 title: 'Hash Brown Potatoes',
//                 price: '$3.20 per Person',
//                 description: []
//             },
//             {
//                 title: 'Hash Brown with Cheese',
//                 price: '$3.75 per Person',
//                 description: []
//             },
//             {
//                 title: 'Regular or Decaf Coffee',
//                 price: '$25.00 per Box',
//                 description: []
//             },
//             {
//                 title: 'Hot Tea',
//                 price: '$25.00 per Box',
//                 description: []
//             },
//             {
//                 title: 'Milk',
//                 price: '$3.20 per Person',
//                 description: []
//             },
//             {
//                 title: 'Soft Drinks',
//                 price: '$3.25 per Person',
//                 description: ['Coke, Diet Coke and Sprite']
//             },
//             {
//                 title: 'Fresh Squeezed Orange Juice',
//                 price: '$19.50 per Gallon',
//                 description: []
//             },
//             {
//                 title: 'Fresh Grapefruit Juice',
//                 price: '$19.50 per Gallon',
//                 description: []
//             },
//             {
//                 title: 'Fresh Brewed Iced Tea',
//                 price: '$18.50 per Gallon',
//                 description: []
//             }
//         ]
//     },
//     {
//         category: 'A LA CARTE DINNER*',
//         items: [
//             { title: 'Swedish Meatballs', price: '$8.25', description: [] },
//             { title: 'Roast Tenderloin of Beef', price: '$10.25', description: [] },
//             { title: 'Baked Ham', price: '$8.25', description: [] },
//             { title: 'Roast Turkey with Dressing', price: '$8.25', description: [] },
//             { title: 'Baked Spring Chicken', price: '$8.95', description: [] },
//             { title: 'Grilled Breast of Chicken', price: '$8.95', description: [] },
//             { title: 'Chicken Penne Pasta', price: '$8.25', description: [] },
//             { title: 'Cajun Crab Cakes', price: '$9.25', description: [] },
//             { title: 'Broiled Salmon', price: '$10.25', description: [] },
//             { title: 'Vegetarian Penne Pasta', price: '$7.25', description: [] },
//             { title: 'Vegetarian Lasagna', price: '$7.25', description: [] },
//             { title: 'Vegetarian Stuffed Peppers', price: '$8.25', description: [] },
//             { title: 'House Salad', price: '$4.95', description: [] },
//             { title: 'Roasted Vegetable Salad', price: '$4.95', description: [] },
//             { title: 'Black Bean Salad', price: '$4.95', description: [] },
//             { title: 'Caesar Salad', price: '$4.95', description: [] },
//             { title: 'Cucumber Salad', price: '$4.95', description: [] },
//             { title: 'Pasta Salad', price: '$4.95', description: [] },
//             { title: 'Spinach Salad', price: '$5.75', description: [] },
//             { title: 'Rice Pilaf', price: '$3.95', description: [] },
//             { title: 'Mashed Potatoes', price: '$3.95', description: [] },
//             { title: 'Boiled New Potatoes', price: '$3.95', description: [] },
//             { title: 'Steamed Mixed Vegetables', price: '$3.95', description: [] },
//             { title: 'Steamed Broccoli', price: '$3.95', description: [] },
//             { title: 'Steamed Carrots', price: '$3.95', description: [] },
//             { title: 'Corn on the Cob', price: '$3.95', description: [] },
//             { title: 'Regular or Decaf Coffee', price: '$3.25', description: [] },
//             { title: 'Soft Drinks', price: '$3.25', description: ['Coke, Diet Coke and Sprite'] },
//             { title: 'Fresh Brewed Iced Tea', price: '$18.50 per Gallon', description: [] }
//         ]
//     }
// ];
//
// const AccordionItem = ({ item, isOpen, onClick }) => (
//     <div className="border border-white rounded-lg overflow-hidden transition-all duration-300">
//         <button
//             className="w-full text-left px-6 py-4 bg-blue-800 text-white font-semibold flex justify-between items-center hover:bg-blue-700 transition-colors"
//             onClick={onClick}
//         >
//             <span>{item.title} — {item.price}</span>
//             <span>{isOpen ? '-' : '+'}</span>
//         </button>
//         {isOpen && (
//             <div className="bg-blue-100 text-gray-900 px-6 py-4 space-y-1">
//                 {item.description.map((line, i) => (
//                     <p key={i}>• {line}</p>
//                 ))}
//             </div>
//         )}
//     </div>
// );
//
// const AccordionALaCarteMenu = () => {
//     const [isSectionOpen, setIsSectionOpen] = useState(false);
//     const [openItemId, setOpenItemId] = useState(null);
//
//     const toggle = (id) => {
//         setOpenItemId(prev => (prev === id ? null : id));
//     };
//
//     return (
//         <section className="max-w-4xl mx-auto py-10 px-6">
//             <button
//                 className="w-full text-left text-white text-3xl font-extrabold mb-8 border-b border-white pb-2 hover:text-yellow-300 transition-all"
//                 onClick={() => setIsSectionOpen(prev => !prev)}
//             >
//                 A La Carte
//             </button>
//
//             {isSectionOpen && (
//                 alaCarteMenu.map((group, groupIndex) => (
//                     <div key={groupIndex}>
//                         <h3 className="text-2xl text-white font-semibold mt-10 mb-4">
//                             {group.category}
//                         </h3>
//                         <div className="space-y-4">
//                             {group.items.map((item, itemIndex) => {
//                                 const key = `${groupIndex}-${itemIndex}`;
//                                 return (
//                                     <AccordionItem
//                                         key={key}
//                                         item={item}
//                                         isOpen={openItemId === key}
//                                         onClick={() => toggle(key)}
//                                     />
//                                 );
//                             })}
//                         </div>
//                     </div>
//                 ))
//             )}
//
//             {isSectionOpen && (
//                 <p className="text-white mt-10 italic text-sm text-center">
//                     Onsite Catering: Please Add $3.25 per person for Beverage Service.
//                 </p>
//             )}
//         </section>
//     );
// };
//
// export default AccordionALaCarteMenu;

import React, { useState } from 'react';

const alaCarteMenu = [
    {
        category: 'ALA CARTE BREAKFAST OPTIONS',
        items: [
            { title: 'Egg and Cheese Strata', price: '$7.00 per Person', description: ['Minimum 10 People'] },
            { title: 'Scrambled Eggs', price: '$6.50 per Person', description: ['Minimum 10 People'] },
            { title: 'Eggs Florentine', price: '$7.00 per Person', description: ['Minimum 10 People'] },
            { title: 'Quiche', price: '$16.00 Each', description: ['Serves Six to Eight People'] },
            { title: 'Swedish Pancakes With Lingonberries', price: '$5.50 per Person', description: [] },
            { title: 'Sweet Bread French Toast', price: '$6.50 per Person', description: [] },
            { title: 'French Toast', price: '$6.50 per Person', description: [] },
            { title: 'Regular Sized Cinnamon Rolls', price: '$20.25 per Dozen', description: [] },
            { title: 'Assorted Bagels', price: '$5.00 per Person', description: ['Served with Cream Cheese, Sliced Tomato, Red Onion and Pickles', '10 Person Minimum'] },
            { title: 'Assorted Sweet Breads', price: '$7.25 per Loaf', description: [] },
            { title: 'Bacon', price: '$3.75 per Person', description: [] },
            { title: 'Ham', price: '$4.20 per Person', description: [] },
            { title: 'Sausage', price: '$3.75 per Person', description: [] },
            { title: 'Turkey Sausage', price: '$3.75 per Person', description: [] },
            { title: 'Fresh Nova Lox', price: '$10.00 per Person', description: [] },
            { title: 'Seasonal Fresh Fruit', price: '$3.75 per Person', description: [] },
            { title: 'Granola with Plain Yogurt', price: '$8.75 per Person', description: [] },
            { title: 'Hash Brown Potatoes', price: '$3.20 per Person', description: [] },
            { title: 'Hash Brown with Cheese', price: '$3.75 per Person', description: [] },
            { title: 'Regular or Decaf Coffee', price: '$25.00 per Box', description: [] },
            { title: 'Hot Tea', price: '$25.00 per Box', description: [] },
            { title: 'Milk', price: '$3.20 per Person', description: [] },
            { title: 'Soft Drinks', price: '$3.25 per Person', description: ['Coke, Diet Coke and Sprite'] },
            { title: 'Fresh Squeezed Orange Juice', price: '$19.50 per Gallon', description: [] },
            { title: 'Fresh Grapefruit Juice', price: '$19.50 per Gallon', description: [] },
            { title: 'Fresh Brewed Iced Tea', price: '$18.50 per Gallon', description: [] }
        ]
    },
    {
        category: 'ALA CARTE DINNER OPTIONS*',
        items: [
            { title: 'Swedish Meatballs', price: '$8.25', description: [] },
            { title: 'Roast Tenderloin of Beef', price: '$10.25', description: [] },
            { title: 'Baked Ham', price: '$8.25', description: [] },
            { title: 'Roast Turkey with Dressing', price: '$8.25', description: [] },
            { title: 'Baked Spring Chicken', price: '$8.95', description: [] },
            { title: 'Grilled Breast of Chicken', price: '$8.95', description: [] },
            { title: 'Chicken Penne Pasta', price: '$8.25', description: [] },
            { title: 'Cajun Crab Cakes', price: '$9.25', description: [] },
            { title: 'Broiled Salmon', price: '$10.25', description: [] },
            { title: 'Vegetarian Penne Pasta', price: '$7.25', description: [] },
            { title: 'Vegetarian Lasagna', price: '$7.25', description: [] },
            { title: 'Vegetarian Stuffed Peppers', price: '$8.25', description: [] },
            { title: 'House Salad', price: '$4.95', description: [] },
            { title: 'Roasted Vegetable Salad', price: '$4.95', description: [] },
            { title: 'Black Bean Salad', price: '$4.95', description: [] },
            { title: 'Caesar Salad', price: '$4.95', description: [] },
            { title: 'Cucumber Salad', price: '$4.95', description: [] },
            { title: 'Pasta Salad', price: '$4.95', description: [] },
            { title: 'Spinach Salad', price: '$5.75', description: [] },
            { title: 'Rice Pilaf', price: '$3.95', description: [] },
            { title: 'Mashed Potatoes', price: '$3.95', description: [] },
            { title: 'Boiled New Potatoes', price: '$3.95', description: [] },
            { title: 'Steamed Mixed Vegetables', price: '$3.95', description: [] },
            { title: 'Steamed Broccoli', price: '$3.95', description: [] },
            { title: 'Steamed Carrots', price: '$3.95', description: [] },
            { title: 'Corn on the Cob', price: '$3.95', description: [] },
            { title: 'Regular or Decaf Coffee', price: '$3.25', description: [] },
            { title: 'Soft Drinks', price: '$3.25', description: ['Coke, Diet Coke and Sprite'] },
            { title: 'Fresh Brewed Iced Tea', price: '$18.50 per Gallon', description: [] }
        ]
    }
];

const AccordionItem = ({ item, isOpen, onClick }) => (
    <div className="border border-white rounded-lg overflow-hidden transition-all duration-300">
        <button
            className="w-full text-left px-6 py-4 bg-blue-800 text-white font-semibold flex justify-between items-center hover:bg-blue-700 transition-colors"
            onClick={onClick}
        >
            <span>{item.title} — {item.price}</span>
            <span>{isOpen ? '-' : '+'}</span>
        </button>
        {isOpen && (
            <div className="bg-blue-100 text-gray-900 px-6 py-4 space-y-1">
                {item.description.map((line, i) => (
                    <p key={i}>• {line}</p>
                ))}
            </div>
        )}
    </div>
);

const AccordionALaCarteMenu = () => {
    const [openItemId, setOpenItemId] = useState(null);

    const toggle = (id) => {
        setOpenItemId(prev => (prev === id ? null : id));
    };

    return (
        <main className="min-h-screen bg-gray-950 text-white py-12 px-4 sm:px-8">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-4xl font-bold text-center text-yellow-300 mb-12">A La Carte Menu</h1>

                {alaCarteMenu.map((group, groupIndex) => (
                    <section key={groupIndex} className="mb-12">
                        <h2 className="text-2xl font-semibold text-white mb-6 border-b border-yellow-300 pb-2">
                            {group.category}
                        </h2>
                        <div className="space-y-4">
                            {group.items.map((item, itemIndex) => {
                                const key = `${groupIndex}-${itemIndex}`;
                                return (
                                    <AccordionItem
                                        key={key}
                                        item={item}
                                        isOpen={openItemId === key}
                                        onClick={() => toggle(key)}
                                    />
                                );
                            })}
                        </div>
                    </section>
                ))}

                <p className="text-sm italic text-center text-white mt-8">
                    Onsite Catering: Please Add $3.25 per person for Beverage Service.
                </p>
            </div>
        </main>
    );
};

export default AccordionALaCarteMenu;
