// import React, { useState } from 'react';
//
// const lunchDinnerData = [
//     {
//         title: 'Individually Boxed Lunches',
//         price: '$14.95',
//         description: [
//             'Choice of: Roast Beef, Turkey Breast, Ham, Chicken Salad, Tuna Salad, Roasted Vegetables or Marinated Chicken Breast (*Add $1.50)',
//             'Dressed with Lettuce and Tomato on Your Choice of Bread or Roll',
//             'Choice of Swiss or Cheddar Cheese',
//             'Includes Choice of Two Sides and a Dessert'
//         ]
//     },
//     {
//         title: 'Individually Boxed Wraps',
//         price: '$14.95',
//         description: [
//             'Choice of: Grilled Beef, Chicken or Vegetarian with Rice, Lettuce, Tomato and Cheddar Cheese in a Tortilla',
//             'Includes Choice of Two Sides and a Dessert'
//         ]
//     },
//     {
//         title: 'Individually Boxed Entrée Salad',
//         price: '$15.95',
//         description: [
//             'Choice of: Fruit & Chicken Salad, Spinach Salad, Grilled Chicken, Crab & Seafood, Broiled Salmon, Citrus Chicken, Beef or Chicken Caesar, Julienne',
//             'Served with Garlic Dill Roll and Brownie',
//             'Choice of Dressing: Tomato Basil, Garlic Dill, Bleu Cheese, Italian, Celery Seed'
//         ]
//     },
//     {
//         title: "Ann’s Deluxe Deli Platters",
//         price: '$17.50',
//         description: [
//             'Sandwich Fillings (Up to 3): Roast Beef, Ham, Turkey, Chicken Salad, Tuna Salad, Roasted Vegetables, Marinated Chicken Breast (*Add $1.25)',
//             'Served with Swiss, Cheddar, Lettuce, Tomato, Pickles, Olives and Assorted Breads',
//             'Includes Two Sides and a Dessert'
//         ]
//     },
//     {
//         title: 'Make Your Own Wrap Buffet',
//         price: '$18.50',
//         description: [
//             'Grilled Steak, Chicken, Vegetables with Tortillas, Rice, Lettuce, Tomato, Onion, Cheddar',
//             'Includes Two Sides and a Dessert'
//         ]
//     },
//     {
//         title: 'Hot Lunch #1',
//         price: '$19.55',
//         description: [
//             'Choice of: Baked Spring Chicken, Swedish Meatballs, Vegetarian Penne, Roast Turkey, Cajun Crab Cakes',
//             'Includes One Starter, Two Sides, One Dessert, Cinnamon Rolls and Breads'
//         ]
//     },
//     {
//         title: 'Hot Lunch #2',
//         price: '$21.95',
//         description: [
//             'Choice of: Grilled Chicken, Broiled Salmon, Roast Sirloin, Chicken Penne Bake, Spinach Lasagna',
//             'Includes One Starter, Two Sides, One Dessert, Cinnamon Rolls and Breads'
//         ]
//     },
//     {
//         title: 'Designer Dinner #1',
//         price: '$24.95',
//         description: [
//             'Buffet or Packaged',
//             'Choice of 2 Entrees Buffet / 3 for Table: Meatballs, Roast Turkey, Baked Chicken, Ham, Vegetarian Lasagna',
//             'Includes One Starter, Two Sides, One Dessert, Cinnamon Rolls and Breads'
//         ]
//     },
//     {
//         title: 'Designer Dinner #2',
//         price: '$26.95',
//         description: [
//             'Buffet or Packaged',
//             'Choice of 2 Entrees Buffet / 3 for Table: Garlic Chicken, Roast Beef Au Jus, Stuffed Roughy, Garden Pasta Bake',
//             'Includes One Starter, Two Sides, One Dessert, Cinnamon Rolls and Breads'
//         ]
//     },
//     {
//         title: 'Dinner #3',
//         price: '$29.95',
//         description: [
//             'Buffet or Packaged',
//             'Choice of 2 Entrees Buffet / 3 for Table: Stuffed Chicken, Salmon, Tenderloin, Garlic Chicken, Veggie Stuffed Peppers',
//             'Includes One Starter, Two Sides, One Dessert, Cinnamon Rolls and Breads'
//         ]
//     },
//     {
//         title: 'Beverages',
//         price: '$3.25',
//         description: [
//             'Coffee, Decaf Coffee or Assorted Soft Drinks'
//         ]
//     }
// ];
//
// const AccordionItem = ({ item, isOpen, onClick }) => (
//     <div className="border border-white rounded-lg overflow-hidden">
//         <button
//             className="w-full text-left px-6 py-4 bg-blue-800 text-white font-semibold flex justify-between items-center"
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
// const LunchDinnerAccordion = () => {
//     const [openIndex, setOpenIndex] = useState(null);
//
//     const toggle = (index) => {
//         setOpenIndex(prev => (prev === index ? null : index));
//     };
//
//     return (
//         <section className="max-w-4xl mx-auto py-16 px-6">
//             <h2 className="text-3xl font-bold text-center text-white mb-10">Lunch & Dinner</h2>
//             <div className="space-y-4">
//                 {lunchDinnerData.map((item, index) => (
//                     <AccordionItem
//                         key={index}
//                         item={item}
//                         isOpen={openIndex === index}
//                         onClick={() => toggle(index)}
//                     />
//                 ))}
//             </div>
//             <p className="text-white mt-8 italic text-sm text-center">
//                 Onsite Catering Please Add $3.25 per Person for Beverage Service.
//             </p>
//         </section>
//     );
// };
//
// export default LunchDinnerAccordion;

import React, { useState } from 'react';

const lunchDinnerData = [
    {
        category: 'Cold Lunch Options',
        items: [
            {
                title: 'Individually Boxed Lunches',
                price: '$14.95',
                description: [
                    'Choice of: Roast Beef, Turkey Breast, Ham, Chicken Salad, Tuna Salad, Roasted Vegetables or Marinated Chicken Breast (*Add $1.50)',
                    'Choice of Swiss or Cheddar Cheese',
                    'Served on White, Sourdough, Whole Wheat, Rye or Bakery Roll with Lettuce and Tomato',
                    'Includes Choice of Two Sides and a Dessert',
                    'Sides: Pasta Salad, Swedish Potato Salad, American Potato Salad, Coleslaw, Fresh Fruit Salad, Cucumber Salad, Potato Chips',
                    'Desserts: Brownies, Cookies, Apples, Oranges or Ann Sather’s Famous Cinnamon Rolls'
                ]
            },
            {
                title: 'Individually Boxed Wraps',
                price: '$14.95',
                description: [
                    'Choice of: Grilled Beef, Chicken or Vegetarian with Onion, Peppers, Rice, Lettuce, Tomato, Cheddar in a Tortilla',
                    'Includes Choice of Two Sides and a Dessert'
                ]
            },
            {
                title: 'Individually Boxed Entrée Salad',
                price: '$15.95',
                description: [
                    'Choice of: Chicken & Fruit Salad, Spinach Salad, Grilled Chicken, Crab & Seafood, Salmon, Citrus Chicken, Caesar (Beef or Chicken), Julienne Salad',
                    'Served with Garlic Dill Roll and a Brownie',
                    "Dressing Options: Tomato Basil, Garlic Dill, Bleu Cheese, Italian or Ann's Famous Celery Seed Dressing"
                ]
            },
            {
                title: 'Ann’s Deluxe Deli Platters',
                price: '$17.50',
                description: [
                    'Up to 3 Sandwich Fillings: Roast Beef, Ham, Turkey Breast, Chicken Salad, Tuna Salad, Roasted Vegetables, Marinated Chicken Breast (*Add $1.25)',
                    'Includes: Swiss & Cheddar Cheese, Lettuce, Tomato, Pickles, Olives, Breads & Rolls',
                    'Hummus available for Roasted Vegetable Sandwiches upon request',
                    'Includes Two Sides and a Dessert'
                ]
            },
            {
                title: 'Make Your Own Wrap Buffet',
                price: '$18.50',
                description: [
                    'Grilled Steak, Chicken, Vegetables with Onion and Peppers',
                    'Served with Tortillas, Rice, Lettuce, Tomato, Onion, Cheddar Cheese',
                    'Includes Two Sides and a Dessert'
                ]
            }
        ]
    },
    {
        category: 'Hot Lunch Options',
        items: [
            {
                title: 'Hot Lunch #1',
                price: '$19.55',
                description: [
                    'Select One: Baked Spring Chicken, Swedish Meatballs, Vegetarian Penne Pasta, Roast Turkey, Cajun Crab Cakes',
                    'Includes One Starter, Two Sides, One Dessert',
                    'Includes Cinnamon Rolls and Homemade Breads'
                ]
            },
            {
                title: 'Hot Lunch #2',
                price: '$21.95',
                description: [
                    'Choice of: Grilled Chicken Breast, Broiled Salmon, Roast Sirloin of Beef, Chicken Penne Bake, Spinach Lasagna',
                    'Includes One Starter, Two Sides, One Dessert',
                    'Includes Cinnamon Rolls and Homemade Breads'
                ]
            }
        ]
    },
    {
        category: 'Dinner Options',
        items: [
            {
                title: 'Designer Dinner #1',
                price: '$24.95',
                description: [
                    'Buffet or Individually Packaged',
                    'Select 2 Entrees for Buffet or 3 for Table Service: Swedish Meatballs, Roast Turkey w/ Dressing and Gravy, Baked Spring Chicken with Dressing and Gravy, Baked Ham, or Vegetarian Lasagna',
                    'Includes One Starter, Two Sides, One Dessert',
                    'Includes Cinnamon Rolls and Homemade Breads'
                ]
            },
            {
                title: 'Designer Dinner #2',
                price: '$26.95',
                description: [
                    'Buffet or Individually Packaged',
                    'Select 2 Entrees for Buffet or 3 for Table Service: Garlic Breast of Chicken, Roast Beef with Au Jus, Stuffed Orange Roughy, or Garden Penne Pasta Bake',
                    'Includes One Starter, Two Sides, One Dessert',
                    'Includes Cinnamon Rolls and Homemade Breads'
                ]
            },
            {
                title: 'Dinner #3',
                price: '$29.95',
                description: [
                    'Buffet or Individually Packaged',
                    'Select 2 Entrees for Buffet or 3 for Table Service: Stuffed Chicken Breast, Fresh Broiled Salmon, Roast Tenderloin of Beef, Garlic Breast of Chicken, or Vegetarian Stuffed Peppers',
                    'Includes One Starter, Two Sides, One Dessert',
                    'Includes Cinnamon Rolls and Homemade Breads'
                ]
            }
        ]
    },
    {
        category: 'Add-Ons',
        items: [
            {
                title: 'Starters',
                price: 'Included with Meals',
                description: [
                    'Select One: House Salad, Black Bean Salad, Cucumber & Cilantro Salad, Caesar Salad, Spinach Salad'
                ]
            },
            {
                title: 'Sides',
                price: 'Included with Meals',
                description: [
                    'Select Two: Mashed Potatoes, Boiled Potatoes with Dill, Rice Pilaf, Mixed Steamed Vegetables, Steamed Carrots, Corn on the Cob, Broccoli'
                ]
            },
            {
                title: 'Desserts',
                price: 'Included with Meals',
                description: [
                    'Select One: Fresh Fruit, Brownies, Mini Turnovers'
                ]
            },
            {
                title: 'Beverages',
                price: '$3.25',
                description: [
                    'Coffee, Decaf Coffee, Assorted Soft Drinks'
                ]
            }
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

const LunchDinnerAccordion = () => {
    const [isSectionOpen, setIsSectionOpen] = useState(false);
    const [openItemId, setOpenItemId] = useState(null);

    const toggle = (id) => {
        setOpenItemId(prev => (prev === id ? null : id));
    };

    return (
        <section className="max-w-4xl mx-auto py-10 px-6">
            {/* Collapsible Section Header */}
            <button
                className="w-full text-left text-white text-3xl font-extrabold mb-8 border-b border-white pb-2 hover:text-yellow-300 transition-all"
                onClick={() => setIsSectionOpen(prev => !prev)}
            >
                Lunch & Dinner
            </button>

            {/* Section Content */}
            {isSectionOpen && (
                <>
                    {lunchDinnerData.map((group, groupIndex) => (
                        <div key={groupIndex}>
                            <h3 className="text-2xl text-white font-semibold mt-10 mb-4">
                                {group.category}
                            </h3>
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
                        </div>
                    ))}
                    <p className="text-white mt-10 italic text-sm text-center">
                        Onsite Catering: Add $3.25 per person for beverage service.
                    </p>
                </>
            )}
        </section>
    );
};

export default LunchDinnerAccordion;
