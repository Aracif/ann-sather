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
            id="recipes"
            ref={sectionRef}
            className={`bg-blue-900 text-white px-6 py-14 max-w-7xl mx-auto transition-opacity duration-1000 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4' }`} >


            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center pt-10 mb-6 leading-relaxed px-4">
                Cooking at Home with Ann Sather
            </h2>

            <p className={"max-w-5xl mx-auto text-justify leading-relaxed px-4"}>
                Do you think it’s possible to replicate our much celebrated cinnamon rolls,
                Swedish pancakes, roast duck or one of our delectable pies at home?
                We don’t think so, either, but we are giving you the opportunity to try.
            </p>

            <p className={"max-w-5xl mx-auto text-justify leading-relaxed px-4"}>

                In 1994, Ann Sather’s restaurants published a 50th anniversary cookbook.
                Due to popular demand, we now have recipes for some of our much-loved dishes
                available online. Download the recipes for your favorite menu items below and
                get cooking!
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 m-10 px-4 max-w-5xl mx-auto">
                {[
                    { title: 'Breakfast', link: 'pdfs/', image: 'src/assets/images/catering/3egg_omelet.jpg' },
                    { title: 'Starters', link: 'pdfs/', image: 'src/assets/images/catering/3egg_omelet.jpg'},
                    { title: 'Sides', link: 'pdfs/', image: 'src/assets/images/catering/3egg_omelet.jpg'},
                    { title: 'Entrees', link: 'pdfs/', image: 'src/assets/images/catering/3egg_omelet.jpg'},
                    { title: 'Desserts', link: 'pdfs/', image: 'src/assets/images/catering/swedish_pancakes.jpg'},
                ].map(({ title, link, image }) => (
                    <a
                        key={title}
                        href={link}
                        target={'_blank'}
                    rel={'noopener noreferrer'}
                    className={"bg-white text-blue-900 rounded-xl shadow-md hover:shadow-lg p-6 text-center font-semibold transition hover:bg-blue-50"}
                    >
                    <img
                        src={image}
                        alt={title}
                        className={"w-full h-24 object-cover rounded-md mb-3"}
                        />
                        {title}
                    </a>
                ))}

            {/*</div>*/}
            {/*/!* Collapsible Content *!/*/}
            {/*<div*/}
            {/*    className={`transition-all duration-700 ease-in-out overflow-hidden ${*/}
            {/*        isExpanded ? 'max-h-screen' : 'max-h-0'*/}
            {/*    }`}*/}
            {/*>*/}

            {/*    /!*<br/>*!/*/}
            {/*    <p className={"max-w-5xl mx-auto text-justify leading-relaxed px-4"}>*/}

            {/*        In 1994, Ann Sather’s restaurants published a 50th anniversary cookbook.*/}
            {/*        Due to popular demand, we now have recipes for some of our much-loved dishes*/}
            {/*        available online. Download the recipes for your favorite menu items below and*/}
            {/*        get cooking!*/}
            {/*    </p>*/}
            {/*    /!*<br/>*!/*/}
            {/*    <p className={"max-w-5xl mx-auto text-justify leading-relaxed px-4"}>*/}
            {/*        Click on any of the following categories to download the mouth watering recipe of your choice.*/}
            {/*    </p>*/}
            {/*</div>*/}

            {/*    /!* Toggle Button *!/*/}
            {/*    <div className="flex justify-center items-center text-center mt-6">*/}
            {/*        <button*/}
            {/*            onClick={toggleExpanded}*/}
            {/*            className="flex items-center justify-center gap-2 text-white hover:text-white/40 cursor-pointer transition-colors"*/}
            {/*        >*/}
            {/*            {isExpanded ? (*/}
            {/*                <>*/}
            {/*                    Read less <FaChevronUp className="inline-block" />*/}
            {/*                </>*/}
            {/*            ) : (*/}
            {/*                <>*/}
            {/*                    Read more <FaChevronDown className="inline-block" />*/}
            {/*                </>*/}
            {/*            )}*/}
            {/*        </button>*/}
                </div>
            </section>
    )
}

export default Recipes;