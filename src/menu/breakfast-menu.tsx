import React from 'react';
import { Tab } from '@headlessui/react';

/**
 * BreakfastMenu.tsx  –  TypeScript version
 * ------------------------------------------------------------
 *  • Uses Headless UI Tabs for accessible switching.
 *  • Tailwind utility classes keep styling consistent.
 *  • Fully typed (MenuItem, Categories).
 * ------------------------------------------------------------
 *  Peer deps (if missing):
 *      npm install @headlessui/react
 *      npm install -D @types/react  # if not already in project
 */

type MenuItem = {
    title: string;
    price: string;
    description?: string;
};

type Categories = Record<string, MenuItem[]>;

const categories: Categories = {
    'Egg Entrees': [
        {
            title: 'Two Eggs, Any Style*',
            price: '$13.25',
            description: 'Served with your choice of two sides.',
        },
        {
            title: 'Two Eggs with Bacon or Sausage*',
            price: '$14.45',
            description: 'Choose extra‑lean bacon or our house sausage.',
        },
        {
            title: 'Two Eggs with Corned Beef Hash*',
            price: '$17.45',
            description: 'Topped with homemade corned‑beef hash.',
        },
    ],

    '3‑Egg Omelets': [
        {
            title: 'Build Your Own Omelet*',
            price: '$14.95',
            description: 'Start with cheddar; add veggies, meats or cheeses.',
        },
        {
            title: 'Denver Omelet*',
            price: '$15.45',
            description: 'Ham, green pepper, onion & cheddar.',
        },
        {
            title: 'Crab Cake Benedict*',
            price: '$16.50',
            description: 'Poached eggs over Cajun crab cakes, hollandaise.',
        },
    ],

    'Pancakes, Waffles & More': [
        {
            title: 'Swedish Pancakes w/ Lingonberries',
            price: '$13.50',
            description: 'Three thin pancakes served with tart lingonberries.',
        },
        {
            title: 'French Toast Fantasy',
            price: '$14.50',
            description:
                'Mascarpone‑filled cinnamon rolls battered & grilled; topped with berries.',
        },
    ],

    'Bakery Faves': [
        { title: '2 Homemade Cinnamon Rolls', price: '$4.75' },
        { title: '½ Dozen Cinnamon Rolls', price: '$12.50' },
        { title: '1 Dozen Cinnamon Rolls', price: '$22.00' },
    ],
};

const BreakfastMenu: React.FC = () => (
    <section id="breakfast-menu" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-blue-900 mb-8">
                Breakfast Menu
            </h2>

            <Tab.Group>
                {/* Tabs */}
                <Tab.List className="flex flex-wrap justify-center gap-3 mb-12">
                    {Object.keys(categories).map((category) => (
                        <Tab key={category} className={({ selected }) =>
                            `${selected
                                ? 'bg-blue-900 text-white border-blue-900 shadow-lg'
                                : 'bg-white text-blue-900 border-blue-300 hover:bg-blue-50'} px-4 py-2 rounded-full text-sm font-semibold border transition-all focus:outline-none`}
                        >
                            {category}
                        </Tab>
                    ))}
                </Tab.List>

                {/* Panels */}
                <Tab.Panels>
                    {Object.values(categories).map((items, idx) => (
                        <Tab.Panel key={idx} className="focus:outline-none">
                            <div className="grid sm:grid-cols-2 gap-6">
                                {items.map(({ title, price, description }) => (
                                    <div
                                        key={title}
                                        className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition"
                                    >
                                        <div className="flex justify-between items-start mb-2">
                                            <h3 className="text-lg font-semibold text-blue-900">
                                                {title}
                                            </h3>
                                            <span className="font-bold text-blue-700">{price}</span>
                                        </div>
                                        {description && (
                                            <p className="text-sm text-gray-600">{description}</p>
                                        )}
                                    </div>
                                ))}
                            </div>

                            <p className="text-xs mt-8 text-gray-500 text-center">
                                *Consuming raw or undercooked eggs may increase your risk of foodborne illness.
                            </p>
                        </Tab.Panel>
                    ))}
                </Tab.Panels>
            </Tab.Group>
        </div>
    </section>
);

export default BreakfastMenu;
