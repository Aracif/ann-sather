import { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';

import BreakfastCaterMenu from './sub-components/breakfast-catering-menu.tsx';
import LunchDinerCaterMenu from './sub-components/lunch-dinner-catering-menu.tsx';
import ALaCarteCaterMenu from './sub-components/a-la-carte-catering-menu.tsx';
import HolidaySpecialsCaterMenu from './sub-components/holiday-specials-catering-menu.tsx';
import AppetizersDessertsCaterMenu from './sub-components/appetizers-desserts-catering-menu.tsx';

const CateringSection = () => {
    const [openSection, setOpenSection] = useState<string | null>(null);
    const [showDeliveryInfo, setShowDeliveryInfo] = useState(false);

    const sectionRefs = {
        breakfast: useRef(null),
        lunch: useRef(null),
        alaCarte: useRef(null),
        holiday: useRef(null),
        desserts: useRef(null),
    };

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                const id = entry.target.getAttribute('data-id');
                if (!entry.isIntersecting && openSection === id) {
                    setOpenSection(null);
                }
            });
        }, { threshold: 0.1 });

        Object.entries(sectionRefs).forEach(([id, ref]) => {
            if (ref.current) {
                ref.current.setAttribute('data-id', id);
                observer.observe(ref.current);
            }
        });

        return () => {
            Object.values(sectionRefs).forEach((ref) => {
                if (ref.current) observer.unobserve(ref.current);
            });
        };
    }, [openSection]);

    useEffect(() => {
        if (openSection && sectionRefs[openSection]?.current) {
            setTimeout(() => {
                sectionRefs[openSection]?.current?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                });
            }, 100);
        }
    }, [openSection]);

    const renderAccordion = (
        id: keyof typeof sectionRefs,
        title: string,
        ContentComponent: JSX.Element
    ) => (
        <div
            ref={sectionRefs[id]}
            className="bg-white/20 rounded-4xl shadow-lg overflow-hidden max-w-xl mx-auto mb-6"
        >
            <button
                onClick={() => setOpenSection((prev) => (prev === id ? null : id))}
                // className="w-full px-6 py-4 bg-white hover:bg-blue-100 text-blue-900 font-bold transition-colors flex items-center justify-between cursor-pointer"
                className="w-full px-6 py-4 bg-yellow-400/10 hover:bg-white/40 text-white font-bold transition-colors flex items-center justify-between cursor-pointer"

            >
                <h3 className="text-xl font-bold uppercase">{title}</h3>
                <ChevronDown
                    className={`transform transition-transform ${openSection === id ? 'rotate-180' : ''}`}
                    size={24}
                />
            </button>
            {openSection === id && (
                <div className="p-6 space-y-4 text-sm text-blue-900 leading-relaxed">
                    {ContentComponent}
                </div>
            )}
        </div>
    );

    return (
        <section id="catering" className="max-w-7xl mx-auto py-20 px-6 bg-blue-900 text-white relative">
            {/* Background image */}
            <div
                className="absolute inset-0 bg-cover bg-center opacity-20"
                style={{ backgroundImage: "url('src/assets/images/catering/annsather5.jpg')" }}
            />

            {/* Foreground content */}
            <div className="relative z-10">
                <h3 className="text-4xl font-bold text-center mb-6">Ann Sather Catering</h3>

                <div className="mb-10 text-center">
                    <button
                        onClick={() => setShowDeliveryInfo(!showDeliveryInfo)}
                        className="bg-white/20 backdrop-blur text-white font-semibold px-4 py-2 rounded-full shadow hover:bg-white/40 transition cursor-pointer"
                    >
                        {showDeliveryInfo ? 'Hide Delivery Info' : 'View Delivery Info'}
                    </button>
                </div>

                {showDeliveryInfo && (
                    <div className="bg-white text-blue-900 rounded-xl shadow-lg p-6 max-w-4xl mx-auto mb-10 text-sm">
                        <h4 className="text-lg font-bold">Deliveries</h4>
                        <p>To place a catering delivery order, please call: <strong>773-348-2378</strong>.</p>
                        <p>We ask that you give us 24-hour notice to ensure availability. Orders for next day must be placed by <strong>2 p.m.</strong></p>
                        <p>Deliveries are for groups of <strong>10 or more</strong>.</p>
                        <p><strong>Delivery Charges:</strong></p>
                        <ul className="list-disc ml-5">
                            <li>$30.00 — North, West city limits & Downtown</li>
                            <li>$35.00 — South of 35th to 75th St</li>
                            <li>$40.00 — South of 75th & local suburbs (20+ people)</li>
                            <li>$50.00 — Holidays (30+ people)</li>
                        </ul>
                        <p><strong>Included:</strong> Disposable plates, utensils, beverage cups, napkins</p>
                        <p><strong>Extras:</strong> Tablecloths ($5), Chafing Set-ups ($7)</p>
                        <p>Flowers, linens, china and serving staff also available. Ask about off-premises catering.</p>
                        <p><strong>Beverages</strong>: Coffee, tea, soda at <strong>$3.25 per person</strong>.</p>
                        <p><strong>Payment:</strong> Cash, corporate checks, Visa, MasterCard, AmEx. No personal checks.</p>
                    </div>
                )}

                {renderAccordion('breakfast', 'Breakfast Packages', <BreakfastCaterMenu />)}
                {renderAccordion('lunch', 'Lunch & Dinner', <LunchDinerCaterMenu />)}
                {renderAccordion('alaCarte', 'A La Carte Menu', <ALaCarteCaterMenu />)}
                {renderAccordion('holiday', 'Holiday Specials', <HolidaySpecialsCaterMenu />)}
                {renderAccordion('desserts', 'Appetizers & Desserts', <AppetizersDessertsCaterMenu />)}
            </div>
        </section>
    );
};

export default CateringSection;
