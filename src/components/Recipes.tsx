import React, { useEffect, useRef, useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Recipes = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const sectionRef = useRef<HTMLDivElement | null>(null);

    // Handle scroll animation
    useEffect(() => {
        const currentRef = sectionRef.current;
        if (!currentRef) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);

                // Collapse when it's out of view
                if (!entry.isIntersecting) {
                    setIsExpanded(false);
                }
            },
            { threshold: 0.2 }
        );

        observer.observe(currentRef);
        return () => observer.disconnect();
    }, []);

    // Auto-expand if navigated via #about
    useEffect(() => {
        if (window.location.hash === '#recipes') {
            setIsExpanded(false);
            sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);

    const toggleExpanded = () => setIsExpanded(prev => !prev);


    return (
        <section
            ref={sectionRef}
            id="recipes"
            className={`bg-blue-100 text-gray-800 px-6 py-14 max-w-7xl mx-auto transition-opacity duration-1000 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4' }`} >


            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-blue-900 pt-10 mb-6 leading-relaxed px-4">
                Cooking at Home with Ann Sather
            </h2>

            {/* Collapsible Content */}
            <div
                className={`transition-all duration-700 ease-in-out overflow-hidden ${
                    isExpanded ? 'max-h-screen' : 'max-h-0'
                }`}
            >
                <p className={"max-w-5xl mx-auto text-gray-700 text-justify leading-relaxed px-4"}>
                    Do you think it’s possible to replicate our much celebrated cinnamon rolls,
                    Swedish pancakes, roast duck or one of our delectable pies at home?
                    We don’t think so, either, but we are giving you the opportunity to try.
                </p>
                <br/>
                <p className={"max-w-5xl mx-auto text-gray-700 text-justify leading-relaxed px-4"}>

                    In 1994, Ann Sather’s restaurants published a 50th anniversary cookbook.
                    Due to popular demand, we now have recipes for some of our much-loved dishes
                    available online. Download the recipes for your favorite menu items below and
                    get cooking!
                </p>
                <p className={"max-w-5xl mx-auto text-gray-700 text-justify leading-relaxed px-4"}>
                    Click on any of the following categories to download the mouth watering recipe of your choice.
                </p>
            </div>

                {/* Toggle Button */}
                <div className="text-center mt-6 pl-4">
                    <button
                        onClick={toggleExpanded}
                        className="flex items-center justify-center gap-2 text-blue-700 hover:text-blue-900 transition-colors"
                    >
                        {isExpanded ? (
                            <>
                                Read less <FaChevronUp className="inline-block" />
                            </>
                        ) : (
                            <>
                                Read more <FaChevronDown className="inline-block" />
                            </>
                        )}
                    </button>
                </div>
            </section>
    )
}

export default Recipes;