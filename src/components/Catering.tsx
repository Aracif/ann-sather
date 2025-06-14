import React, {useEffect, useRef, useState} from 'react';
import BreakfastAccordion from "./accordion-components/Accordion-breakfast-menu.tsx";
import LunchDinnerAccordion from "./accordion-components/Accordion-dinner-menu.tsx";
import AccordionALaCarteMenu from "./accordion-components/Accordion-a-la-carte-menu.tsx";

const menuSections = [
    {
        id: 'breakfast',
        title: 'Breakfast',
        image: '/src/assets/images/catering/eggs-benedict.jpg',
        items: ['Swedish Pancakes', 'Eggs Benedict', 'Cinnamon Rolls'],
    },
    {
        id: 'lunch-dinner',
        title: 'Lunch / Dinner',
        image: '/src/assets/images/catering/AnnSather-Steak & Eggs 2-S.jpg',
        items: ['Meatballs', 'Roast Chicken', 'Vegetarian Lasagna'],
    },
    {
        id: 'a-la-carte',
        title: 'A La Carte',
        image: '/src/assets/images/catering/AnnSather-Avocado Wrap-S.jpg',
        items: ['Side Salad', 'Mashed Potatoes', 'Grilled Vegetables'],
    },
    {
        id: 'holiday-specials',
        title: 'Holiday Specials',
        image: '/src/assets/images/catering/3egg_omelet.jpg',
        items: ['Christmas Ham', 'Thanksgiving Turkey', 'Pumpkin Pie'],
    },
    {
        id: 'appetizers-desserts',
        title: 'Appetizers / Desserts',
        image: '/src/assets/images/catering/swedish_pancakes.jpg',
        items: ['Deviled Eggs', 'Cheesecake', 'Apple Crisp'],
    },
]

const Catering: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            {threshold: 0.1}
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section
            id="catering" ref={sectionRef} className={`max-w-7xl mx-auto py-20 bg-blue-900 text-white px-6`}>
            <h3 className="text-3xl font-bold text-center text-white mb-6 indent-8 leading-relaxed px-4">
                Ann Sather Catering
            </h3>


            <section
                id="catering"
                ref={sectionRef}
                className="max-w-7xl mx-auto py-4 bg-blue-900 text-white px-6"
            >
                <div className="grid md:grid-cols-2 gap-10">
                    {/* LEFT COLUMN */}
                    <div className="border border-white rounded-lg p-6 text-sm leading-snug space-y-2">
                        <p className="text-base font-bold">Catering Info</p>
                        <p>
                            To place a catering delivery order, please call: <strong>773-348-2378</strong>.
                        </p>
                        <p>
                            Please provide <strong>24-hour notice</strong> for best availability. We’ll try our best with last-minute orders.
                        </p>
                        <p>
                            Orders for next-day delivery must be placed by <strong>2 p.m.</strong>.
                        </p>
                        <p>
                            <strong>Minimum group size:</strong> 10 people.
                        </p>
                        <p>
                            <strong>Beverages</strong> (coffee, tea, soda) available at <strong>$3.25 per person</strong>.
                        </p>
                        <p className="italic">
                            We accept Cash, Corporate Checks, Visa, MasterCard, and American Express. No personal checks.
                        </p>
                    </div>

                    {/* RIGHT COLUMN */}
                    <div className="border border-white rounded-lg p-6 text-sm leading-snug space-y-2">
                        <p className="text-base font-bold">Delivery & Extras</p>

                        <p><strong>Delivery Charges:</strong></p>
                        <ul className="list-disc list-inside ml-4">
                            <li>$30 – City limits & Downtown (up to 35th Street)</li>
                            <li>$35 – 35th to 75th Street</li>
                            <li>$40 – South of 75th / Suburbs (20+ people)</li>
                            <li>$50 – Holidays (30+ people)</li>
                        </ul>

                        <p><strong>Included (free):</strong> Plates, utensils, beverage cups, napkins.</p>

                        <p>
                            <strong>Extras:</strong> Vinyl tablecloths ($5/table), chafing setups ($7/set).
                        </p>

                        <p>
                            Flowers, linens, china, and service staff available on request.
                            Ask about off-premises catering options.
                        </p>
                    </div>
                </div>
            </section>


            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 mt-20">
                <div>
                    <BreakfastAccordion />
                </div>
                <div>
                    <LunchDinnerAccordion />
                </div>

                    <div>
                        <AccordionALaCarteMenu />
                    </div>
                    <div>
                        <LunchDinnerAccordion />
                    </div>

                <div>
                    <LunchDinnerAccordion />
                </div>

            </div>

        </section>
    );
};

export default Catering;
