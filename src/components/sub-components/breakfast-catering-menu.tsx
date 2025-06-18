import React from 'react';
import AccordionCard from "../AccordionCard.tsx";

const BreakfastCaterMenu = () => {
    const items = [
        {
            title: "The Continental — $12.50",
            desc: "Ann Sather Mini Cinnamon Rolls, Mini Pecan Rolls and Assorted Mini Muffins; Fresh Squeezed Orange Juice; Seasonal Fresh Fruit"
        },
        {
            title: "The Healthy Choice — $15.00",
            desc: "Ann Sather Mini Cinnamon Rolls and Assorted Mini Muffins; Fresh Squeezed Orange Juice; Granola Served with Plain Yogurt; Seasonal Fresh Fruit"
        },
        {
            title: "The Swedish Breakfast — $15.50",
            desc: "Ann Sather Mini Cinnamon Rolls and Assorted Mini Muffins; Fresh Squeezed Orange Juice; Seasonal Fresh Fruit; Swedish Pancakes with Lingonberries and Syrup or Egg and Cheese Strata"
        },
        {
            title: "The Low Carb Special — $16.00",
            desc: "Seasonal Fresh Fruit; Scrambled Eggs; Bacon; Fresh Squeezed Orange Juice"
        },
        {
            title: "The Norwegian Breakfast — $17.00",
            desc: "Fresh Nova Lox; Assorted Bagels and Cream Cheese; Tomatoes, Onions and Cucumbers"
        },
        {
            title: "Ann’s Favorite Breakfast — $17.50",
            desc: "Mini Cinnamon Rolls, Mini Pecan Rolls and Assorted Mini Muffins; Fresh Squeezed Orange Juice; Seasonal Fresh Fruit; Pork Sausage; Banana French Toast with Maple Syrup or Stuffed Tomatoes with Egg"
        },
        {
            title: "The Deluxe Breakfast — $21.95",
            desc: "Ann Sather Mini Cinnamon Rolls, Mini Pecan Rolls and Assorted Mini Muffins; Fresh Squeezed Orange Juice; Seasonal Fresh Fruit; Egg and Cheese Strata or Stuffed Tomatoes with Egg; Swedish Pancakes with Lingonberries and Syrup; Bacon, Ham and Sausage; Hash Brown Potatoes"
        },
        {
            title: "Omelets In Your Office — $30.95*",
            desc: `Mini Cinnamon Rolls, Mini Pecan Rolls and Assorted Mini Muffins; Fresh Squeezed Orange Juice; Seasonal Fresh Fruit; Swedish Pancakes with Lingonberries and Syrup; Hash Brown Potatoes; Bacon, Ham and Sausage`,
            extra: `Plus Made to Order Omelets
Ingredients to Include: Ham, Onion, Green Pepper, Tomato, Mushroom, Zucchini, Cheddar Cheese and Swiss Cheese`
        },
        {
            title: "Individually Packaged Omelets or Wraps — $21.95",
            desc: `Ann Sather Mini Cinnamon Rolls, Mini Pecan Rolls and Assorted Mini Muffins; Fresh Squeezed Orange Juice; Seasonal Fresh Fruit; Garden Omelet, Sausage and Cheese or Denver Swedish Pancakes with Lingonberries and Syrup; Hash Brown Potatoes; Bacon, Ham and Sausage`,
            extra: "*Price Includes Labor and Disposables. 30 Person Minimum."
        },
        {
            title: "Coffee, Decaf Coffee, Hot Tea, or Assorted Soft Drinks — $3.25"
        }
    ];

    return (
        <AccordionCard>
            {items.map((itm, i) => (
                <div key={i}>
                    <p><strong>{itm.title}</strong></p>
                    {itm.desc && <p>{itm.desc}</p>}
                    {itm.extra && <p><em>{itm.extra}</em></p>}
                </div>
            ))}

            <div>
                <p><em>For other breakfast options, go to our <strong>Catering A La Carte</strong> page.</em></p>
                <p><strong>On-site Catering:</strong> add $3.25 pp for beverage service.</p>
            </div>
        </AccordionCard>

    );
};

export default BreakfastCaterMenu;