import React, {useEffect, useRef, useState} from 'react';

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
            <h3 className="text-3xl sm:text-2xl font-bold text-center text-white mb-6 indent-8 leading-relaxed px-4">
                Ann Sather Catering
            </h3>


            <p className={"font-bold max-w-3xl text-white text-xl leading-relaxed px-4"}>Catering Info</p>
            <p className="max-w-7xl mx-auto text-justify leading-relaxed px-4">
                To place a catering delivery order, please call: 773-348-2378.
            </p>
            <br/>
            <p className="max-w-7xl mx-auto text-justify leading-relaxed px-4">
                We ask that you give us 24-hour notice to ensure the menu items you desire are available.
                However, if you do have a last minute order we will do our very best to accommodate your needs.
            </p>
            <p className="max-w-7xl mx-auto text-justify leading-relaxed px-4">
                To ensure the timeliness of your delivery and the availability of items ordered, our cut-off time
                is 2 p.m. when placing an order for next day delivery.
            </p>
            <br/>
            <p className="max-w-7xl mx-auto text-justify leading-relaxed px-4">
                Deliveries are available for groups of 10 or more.
            </p>
            <br/>
            <p className="max-w-7xl mx-auto text-justify leading-relaxed px-4">
                <strong>Delivery Charges</strong> are as follows:
                <br/>
                <strong>$30.00</strong> — North to the city limits, west to the city limits and south to 35th Street (includes Downtown)
                <br/>
                <strong>$35.00</strong> — City south of 35th Street to 75th Street
                <br/>
                    <strong>$40.00</strong> — South of 75th Street and local suburbs (Require groups of 20 or more)
                <br/>
                        <strong>$50.00</strong> — Holidays (Require groups of 30 or more)
            </p>
            <br/>
            <p className="max-w-7xl mx-auto text-justify leading-relaxed px-4">
                Special requests are our specialty. Don't be afraid to ask, we may have it. Below are some items
                which are generally requested and we always have in stock: Disposable (included with deliveries):
                Plates, Forks, Knives, Spoons, Serving Utensils, Beverage Cups, Napkins.
                <br/>
                Other: Vinyl Tablecloths ($5 per tablecloth) Chafing Set-ups ($7 per set-up).
            </p>
            <p className="max-w-7xl mx-auto text-justify leading-relaxed px-4">
                Many other items, such as Flowers, Linens, and China are available.
                We can also supply our experienced staff for your serving needs. Ask about our Off-Premises Catering.
            </p>
            <br/>
            <p className="max-w-7xl mx-auto text-justify leading-relaxed px-4">
                Beverages are available (coffee, tea or soda) at an additional $3.25 per person.
            </p>
            <br/>
            <p className="max-w-7xl mx-auto text-justify italic leading-relaxed px-4">
                We accept Cash, Corporate Checks, Visa, MasterCard, and American Express. Sorry, no Personal Checks.
            </p>

        </section>
    );
};

export default Catering;
