// About component
import React, {useEffect, useRef, useState} from 'react';

const AboutUs: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Set visibility based on whether it's intersecting
                setIsVisible(entry.isIntersecting);
            },
            {
                threshold: 0.2, // Trigger when 20% of the section is visible
            }
        );

        const currentRef = sectionRef.current;
        if (currentRef) observer.observe(currentRef);

        return () => {
            if (currentRef) observer.unobserve(currentRef);
        };
    }, []);

    return (
        <section
            id="about"
            ref={sectionRef}
            className={`bg-white text-gray-800 px-6 py-16 max-w-5xl mx-auto transition-opacity duration-1000 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
        >
            <h3 className="text-3xl sm:text-2xl font-bold text-center text-blue-900 mb-6 indent-8 leading-relaxed px-4">
                About Ann Sather Restaurants and Catering
            </h3>
            <p className="text-lg leading-relaxed text-center max-w-3xl mx-auto mb-8">
                Yes, there really was an Ann Sather.
            </p>
            <p className="max-w-xl mx-auto text-gray-700 text-justify indent-8 leading-relaxed px-4">
                In the 1940s, a vivacious career woman named Ann Sather decided that what she really wanted to do was
                own and run a restaurant. Her restaurant. A place where people could come for generous homemade meals,
                warm hospitality and know the moment they came in the door they went from being a customer to becoming a
                friend.
            </p>

            <p className={"max-w-xl mx-auto text-gray-700 text-justify indent-8 leading-relaxed px-4"}>So, in 1945, when
                the Swedish owners of a restaurant located
                on Belmont decided to retire, Ann quit her job of 22 years, pooled her life savings and bought herself a
                diner
                known today as Ann Sather Restaurant.</p>
            <p className={"max-w-xl mx-auto text-gray-700 text-justify indent-8 leading-relaxed px-4"}>For 35 years Ann
                ran the diner herself. Her devotion to
                wholesome, made-from-scratch food, low prices, friendly service and hard work became legendary in the
                Lakeview
                neighborhood and beyond.</p>
            <p className={"max-w-xl mx-auto text-gray-700 text-justify indent-8 leading-relaxed px-4"}>In 1981, after
                searching for a successor who would meet her stringent demands for quality and remain devoted to her
                patrons, Ann sold the restaurant to Tom Tunney, a
                24-year-old graduate of the Cornell University School of Hotel and Restaurant Management. Tom
                apprenticed with Ann for a year learning
                the business from top to bottom. Armed with culinary training, Tom, the son of Irish immigrants who grew
                up on Chicago’s Southside,
                was learning all of the best Scandinavian cooking secrets in town.</p>
            <p className={"max-w-xl mx-auto text-gray-700 text-justify indent-8 leading-relaxed px-4"}>Although Ann
                Sather sadly passed away in 1996, her spirit
                still prevails in the “good food, good friends and good conversation” philosophy that has made her
                restaurants famous. She still looks over us all from her portrait hanging in the dining room.</p>
            <p className={"max-w-xl mx-auto text-gray-700 text-justify indent-8 leading-relaxed px-4"}>During the last
                35 years, Tom has expanded the business to
                include the most famous cinnamon rolls and breakfast in town, two additional restaurants and Ann Sather
                Corporate and Special Event Catering, which is well-known for its corporate and special events,
                banquets, business breakfasts and lunches and special deliveries.</p>

            {/*Text should go to the Catering Section*/}
            {/*<h3 className="font-bold max-w-xl mx-auto text-gray-700 text-justify indent-8 leading-relaxed px-4">*/}
            {/*    Ann Sather Corporate and Special Event Catering*/}
            {/*</h3>*/}
            {/*<p className={"max-w-xl mx-auto text-gray-700 text-justify indent-8 leading-relaxed px-4"}>In addition to*/}
            {/*    our three dine-in locations, Ann Sather has a*/}
            {/*    catering team dedicated to ensuring our “good food” philosophy is carried through our corporate catering*/}
            {/*    services and special event dining. In addition to our outstanding dine-in selections of Swedish comfort*/}
            {/*    food, our catering menu includes special items from hors d’oeuvres to entrees to dessert and an*/}
            {/*    outstanding, trained staff to serve them. Additionally, our flagship location on Belmont and our cafés*/}
            {/*    are available for private catered events both during the day and at night for groups of 50 or more.</p>*/}
            <br/>
            <p className={"font-bold max-w-xl mx-auto text-gray-700 text-justify indent-8 leading-relaxed px-4"}>Serving
                the Community</p>
            <p className={"max-w-xl mx-auto text-gray-700 text-justify indent-8 leading-relaxed px-4"}>For many years,
                Ann Sather Restaurants also has been
                instrumental in serving the community with its generous support of local organizations and causes. As
                Tom says: "Good businesses are good to their communities.”</p>
            <p className={"max-w-xl mx-auto text-gray-700 text-justify indent-8 leading-relaxed px-4"}>As we celebrate
                our 80th anniversary, Ann Sather and her
                restaurant are legendary and Tom not only serves good food, but also serves the 44th Ward as its
                Alderman. But even with his busy schedule, Tom is the heart of the Ann Sather family, so don’t be
                surprised to have him greet you at the door or find him cooking breakfast orders on Sundays.</p>
            <p className={"max-w-xl mx-auto text-gray-700"}></p>
        </section>
    );
};

export default AboutUs;
