import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Search, Filter, Coffee, Utensils, Star, ChevronRight, Clock, ChevronDown, Sparkles } from 'lucide-react';
import CompactHeader from '../menu/CompactHeader.jsx';

// Menu data (keeping the same)
const menuData = {
    "Breakfast": {
        "EGGS BENEDICT": [
            { title: "Traditional Benedict", price: "$16.00" },
            { title: "Steak & Eggs Benedict", price: "$17.50" },
            { title: "Crab Cake Benedict", price: "$16.50" },
            { title: "Smoked Salmon Benedict", price: "$17.50" },
            { title: "Veggie Florentine", price: "$15.50" },
            { title: "Southern Decadence", price: "$16.50" }
        ],
        "THREE EGG OMELETS": [
            { title: "Build Your Own Omelet", price: "$14.95" },
            { title: "Denver Omelet", price: "$15.45" },
            { title: "Mexican Omelet", price: "$16.50" },
            { title: "V-4 Omelet", price: "$16.50" },
            { title: "Garden Omelet", price: "$15.25" },
            { title: "Mediterranean Omelet", price: "$16.50" },
            { title: "Salmon Dill Omelet", price: "$17.50" },
            { title: "Chicken Fajita Omelet", price: "$17.50" }
        ],
        "EGGS": [
            { title: "Two Eggs, Any Style", price: "$13.25" },
            { title: "With Corned Beef Hash", price: "$17.45" },
            { title: "With Bacon or Sausage", price: "$14.45" },
            { title: "With Country Ham", price: "$14.45" },
            { title: "With Chicken Basil Sausage", price: "$14.75" },
            { title: "With Swedish Potato Sausage", price: "$15.00" },
            { title: "With Beef Steak", price: "$17.50" }
        ],
        "BREAKFAST WRAPS": [
            { title: "Sausage, Egg and Cheese Wrap", price: "$15.25" },
            { title: "Bacon, Egg and Cheese Wrap", price: "$15.25" },
            { title: "Ham, Egg and Cheese Wrap", price: "$15.25" },
            { title: "Avocado Delight Wrap", price: "$16.25" },
            { title: "Sunrise Breakfast Wrap", price: "$16.45" },
            { title: "Build Your Own Wrap", price: "$14.95" }
        ],
        "PANCAKES, WAFFLES & MORE": [
            { title: "Swedish Pancakes with Lingonberries", price: "$13.50" },
            { title: "Two Swedish Pancakes with Two Eggs Any Style", price: "$14.50" },
            { title: "Two Swedish Pancakes with Two Swedish Meatballs", price: "$14.50" },
            { title: "Potato Pancakes with Apple Sauce", price: "$13.95" },
            { title: "Homemade French Toast", price: "$13.95" },
            { title: "Swedish Waffles", price: "$13.95" },
            { title: "Biscuits and Gravy with Sausage Patties", price: "$13.95" }
        ],
        "A LA CARTE": [
            { title: "3 Slices Extra Lean Bacon", price: "$3.95" },
            { title: "2 Chicken Basil Sausage Links", price: "$4.50" },
            { title: "Country Ham", price: "$4.25" },
            { title: "2 Sausage Patties", price: "$3.95" },
            { title: "2 Sausage Links", price: "$3.95" },
            { title: "3 Turkey Sausage Links", price: "$4.25" },
            { title: "Swedish Potato Sausage", price: "$4.25" },
            { title: "Homemade Hash Browns", price: "$3.25" },
            { title: "2 Homemade Cinnamon Rolls", price: "$4.75" },
            { title: "2 Hot Biscuits with Honey", price: "$4.25" },
            { title: "Sliced Avocado", price: "$3.75" },
            { title: "Pecan Roll", price: "$4.25" },
            { title: "Sweet Muffin", price: "$2.75" },
            { title: "Toast", price: "$2.95" }
        ],
        "FRUIT & CEREAL": [
            { title: "Fresh Fruit Bowl", price: "$7.50" },
            { title: "Small Fruit Cup", price: "$4.50" },
            { title: "Granola with Fresh Fruit", price: "$9.50" },
            { title: "Granola with Milk or Yogurt", price: "$9.50" },
            { title: "Granola with Fresh Fruit and Yogurt", price: "$11.50" },
            { title: "Hot Oatmeal", price: "$6.95" },
            { title: "Rice Porridge", price: "$6.95" }
        ],
        "BEVERAGES": [
            { title: "Bottomless Coffee, Regular or Decaffeinated", price: "$3.50" },
            { title: "Hot Tea", price: "$3.50" },
            { title: "Soda or Iced Tea", price: "$3.50" },
            { title: "Fresh Orange Juice", price: "$3.75" },
            { title: "Fresh Grapefruit Juice", price: "$3.75" },
            { title: "Apple, Tomato or Cranberry Juice", price: "$3.50" },
            { title: "White or Chocolate Milk", price: "$3.50" },
            { title: "Fresh Strawberry, Orange, Banana Juice", price: "$4.25" }
        ]
    },
    "Lunch": {
        "HOT SANDWICHES": [
            { title: "Build Your Own Burger", price: "$12.50" },
            { title: "Open Face Sandwiches", price: "$13.50" },
            { title: "Reuben Sandwich", price: "$13.50" },
            { title: "Tuna Melt Sandwich", price: "$13.50" }
        ],
        "COLD SANDWICHES": [
            { title: "Chicken Salad Sandwich", price: "$12.50" },
            { title: "Classic BLT Sandwich", price: "$11.95" },
            { title: "Made to Order Egg Salad Sandwich", price: "$11.50" },
            { title: "Roasted Veggie and Hummus Sandwich", price: "$11.95" },
            { title: "White Albacore Tuna Salad Sandwich", price: "$12.50" }
        ],
        "SOUPS AND SALADS": [
            { title: "Soup of the Day", price: "$4.95" },
            { title: "Vegetarian Chili", price: "$6.95" },
            { title: "Hearts Delight Salad", price: "$13.50" },
            { title: "Broiled Salmon Salad", price: "$16.95" },
            { title: "Southwest Chicken Salad", price: "$15.95" },
            { title: "Fresh Fruit and Chicken Salad", price: "$14.95" },
            { title: "Grilled Chicken Breast Salad", price: "$15.95" },
            { title: "Caesar Tortellini Salad", price: "$14.95" }
        ]
    },
    "Specials": {
        "BREAKFAST SPECIALS": [
            { title: "Swedish Breakfast Sampler", price: "$16.45", featured: true },
            { title: "French Toast Fantasy", price: "$14.50", featured: true },
            { title: "Monte Cristo Breakfast", price: "$16.45" },
            { title: "Bacon Cheddar Potato Pancakes", price: "$15.45" },
            { title: "Ann's Darling", price: "$12.95" },
            { title: "Lumberjack Wrap", price: "$15.45" },
            { title: "Turkey Gobbler Wrap", price: "$15.95" },
            { title: "Breakfast Sandwich", price: "$15.95" }
        ],
        "LUNCH SPECIALS": [
            { title: "Soup and Half a Cold Sandwich", price: "$12.95" },
            { title: "Vegetarian Chili and Half a Cold Sandwich", price: "$13.75" },
            { title: "Spinach Salad", price: "$13.75" },
            { title: "Turkey Club", price: "$14.50" },
            { title: "Deluxe Garden Salad", price: "$9.75" }
        ]
    },
    "Entrees": {
        "ANN'S CLASSIC ENTRÉES": [
            { title: "Tom Turkey Dinner", price: "$16.75" },
            { title: "Broiled Salmon", price: "$18.00" },
            { title: "Crab Cakes", price: "$17.75" },
            { title: "Swedish Meatballs", price: "$15.50", featured: true },
            { title: "Grilled Breast of Chicken", price: "$16.25" }
        ]
    }
};

// Featured items for quick access
const featuredItems = [
    { title: "Famous Cinnamon Rolls", price: "$4.75", category: "Breakfast", icon: Sparkles },
    { title: "Swedish Pancakes", price: "$13.50", category: "Breakfast", icon: Star },
    { title: "Swedish Meatballs", price: "$15.50", category: "Entrees", icon: Star }
];

const CompleteMenu = () => {
    const [activeCategory, setActiveCategory] = useState('Breakfast');
    const [searchTerm, setSearchTerm] = useState('');
    const [expandedSections, setExpandedSections] = useState({});
    const [priceFilter, setPriceFilter] = useState('all');
    const [showCompactHeader, setShowCompactHeader] = useState(false);

    const headerRef = useRef(null);
    const menuSectionRef = useRef(null);
    const menuContainerRef = useRef(null);

    // Use fixed heights for nav states
    const SCROLLED_NAV_HEIGHT = 64; // Height when nav is scrolled
    const COMPACT_HEADER_HEIGHT = 56; // Height of compact header

    // Handle scroll to show/hide compact header ONLY within menu section
    useEffect(() => {
        const handleScroll = () => {
            if (!headerRef.current || !menuContainerRef.current) return;

            const menuContainer = menuContainerRef.current;
            const header = headerRef.current;

            // Get positions
            const menuRect = menuContainer.getBoundingClientRect();
            const headerRect = header.getBoundingClientRect();
            const scrollY = window.scrollY;

            // Check if we're within the menu section
            const menuTop = menuRect.top + scrollY;
            const menuBottom = menuTop + menuRect.height;
            const isInMenuSection = scrollY >= menuTop - SCROLLED_NAV_HEIGHT && scrollY <= menuBottom;

            // Show compact header only when:
            // 1. We're in the menu section
            // 2. The menu header is scrolled out of view
            const shouldShowCompact = isInMenuSection;

            setShowCompactHeader(shouldShowCompact);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Check initial state

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Handle category change
    const handleCategoryChange = (category) => {
        setActiveCategory(category);

        // Scroll to menu section when category changes
        setTimeout(() => {
            const menuSection = menuSectionRef.current;
            if (!menuSection) return;

            const offset = showCompactHeader ? SCROLLED_NAV_HEIGHT + COMPACT_HEADER_HEIGHT + 20 : SCROLLED_NAV_HEIGHT + 200;
            const scrollPosition = menuSection.offsetTop - offset;

            window.scrollTo({
                top: scrollPosition,
                behavior: 'smooth'
            });
        }, 50);
    };

    // Toggle section expansion
    const toggleSection = (section) => {
        setExpandedSections(prev => ({
            ...prev,
            [section]: !prev[section]
        }));
    };

    // Auto-expand first section of active category
    useEffect(() => {
        const firstSection = Object.keys(menuData[activeCategory])[0];
        if (firstSection) {
            setExpandedSections(prev => ({
                ...prev,
                [`${activeCategory}-${firstSection}`]: true
            }));
        }
    }, [activeCategory]);

    // Filter menu items based on search and price
    const filteredMenu = useMemo(() => {
        const filtered = {};

        Object.entries(menuData).forEach(([category, sections]) => {
            const filteredSections = {};

            Object.entries(sections).forEach(([section, items]) => {
                const filteredItems = items.filter(item => {
                    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase());

                    let matchesPrice = true;
                    if (priceFilter !== 'all') {
                        const price = parseFloat(item.price.replace('$', ''));
                        if (priceFilter === 'under10') matchesPrice = price < 10;
                        else if (priceFilter === 'under15') matchesPrice = price < 15;
                        else if (priceFilter === 'over15') matchesPrice = price >= 15;
                    }

                    return matchesSearch && matchesPrice;
                });

                if (filteredItems.length > 0) {
                    filteredSections[section] = filteredItems;
                }
            });

            if (Object.keys(filteredSections).length > 0) {
                filtered[category] = filteredSections;
            }
        });

        return filtered;
    }, [searchTerm, priceFilter]);

    // Get icon for category
    const getCategoryIcon = (category) => {
        switch (category) {
            case 'Breakfast': return Coffee;
            case 'Lunch': return Utensils;
            case 'Specials': return Star;
            case 'Entrees': return Utensils;
            default: return Coffee;
        }
    };

    return (
        <div className="min-h-screen bg-gray-50" ref={menuContainerRef}>
            {/* Compact Header - Shows when main header is scrolled out */}
            <div
                className="fixed inset-x-0 z-40"
                style={{
                    top: `${SCROLLED_NAV_HEIGHT}px`,
                    transform: showCompactHeader ? 'translateY(0)' : 'translateY(-100%)',
                    opacity: showCompactHeader ? 1 : 0,
                    transition: 'transform 0.3s ease-in-out, opacity 0.3s ease-in-out',
                    pointerEvents: showCompactHeader ? 'auto' : 'none'
                }}
            >
                <CompactHeader
                    featuredItems={featuredItems}
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                    priceFilter={priceFilter}
                    setPriceFilter={setPriceFilter}
                />
            </div>

            {/* Main Header Section */}
            <div ref={headerRef}>
                {/* Combined Header */}
                <div className="bg-blue-900 text-white py-12">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                            {/* Title Section */}
                            <div className="text-center lg:text-left">
                                <h1 className="text-5xl font-bold mb-2">Our Menu</h1>
                                <p className="text-xl text-blue-200">Authentic Swedish cuisine since 1945</p>
                            </div>

                            {/* Customer Favorites */}
                            <div className="w-full lg:w-auto">
                                <h2 className="text-xl font-semibold text-yellow-400 mb-3 text-center lg:text-left">Customer Favorites</h2>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                    {featuredItems.map((item, index) => {
                                        const Icon = item.icon;
                                        return (
                                            <div key={index} className="bg-white/10 backdrop-blur rounded-lg px-4 py-3 flex items-center justify-between hover:bg-white/20 transition-colors">
                                                <div className="flex items-center">
                                                    <Icon className="text-yellow-400 mr-2" size={18} />
                                                    <span className="font-medium text-white">{item.title}</span>
                                                </div>
                                                <span className="text-yellow-400 font-bold ml-2">{item.price}</span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/*OLD Search and Filter Bar*/}

                {/* Search and Filter Bar */}
                {/*<div className="bg-gray-50 py-8">*/}
                {/*    <div className="max-w-7xl mx-auto px-4">*/}
                {/*        <div className="bg-white rounded-lg shadow-md p-4 border border-gray-200 mb-8">*/}
                {/*            <div className="flex flex-col md:flex-row gap-4">*/}
                {/*                <div className="flex-1">*/}
                {/*                    <div className="relative">*/}
                {/*                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />*/}
                {/*                        <input*/}
                {/*                            type="text"*/}
                {/*                            placeholder="Search menu items..."*/}
                {/*                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"*/}
                {/*                            value={searchTerm}*/}
                {/*                            onChange={(e) => setSearchTerm(e.target.value)}*/}
                {/*                        />*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*                <div className="flex gap-2">*/}
                {/*                    <div className="relative">*/}
                {/*                        <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />*/}
                {/*                        <select*/}
                {/*                            className="pl-10 pr-8 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none bg-white"*/}
                {/*                            value={priceFilter}*/}
                {/*                            onChange={(e) => setPriceFilter(e.target.value)}*/}
                {/*                        >*/}
                {/*                            <option value="all">All Prices</option>*/}
                {/*                            <option value="under10">Under $10</option>*/}
                {/*                            <option value="under15">Under $15</option>*/}
                {/*                            <option value="over15">$15 and up</option>*/}
                {/*                        </select>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>

            {/* Menu Content */}
            <div className={`max-w-7xl mx-auto px-18 transition-all duration-300 pt-4 ${showCompactHeader ? 'pt-16' : 'pt-0'}`}>
                <div className="flex flex-col lg:flex-row gap-8 pb-8" ref={menuSectionRef}>
                    {/* Category Navigation */}
                    <div className="lg:w-64">
                        <div
                            className="sticky transition-all duration-300"
                            style={{
                                top: showCompactHeader ? `${SCROLLED_NAV_HEIGHT + COMPACT_HEADER_HEIGHT + 8}px` : '32px',
                                transition: 'top 0.3s ease-in-out'
                            }}>
                            <h3 className="text-lg font-bold text-gray-900 mb-4">Categories</h3>
                            <nav className="space-y-2">
                                {Object.keys(menuData).map((category) => {
                                    const Icon = getCategoryIcon(category);
                                    return (
                                        <button
                                            key={category}
                                            onClick={() => handleCategoryChange(category)}
                                            className={`w-full text-left px-4 py-3 rounded-lg flex items-center justify-between transition-all ${
                                                activeCategory === category
                                                    ? 'bg-blue-900 text-white shadow-lg'
                                                    : 'bg-white text-gray-700 hover:bg-gray-100'
                                            }`}
                                        >
                                            <div className="flex items-center">
                                                <Icon size={20} className="mr-3" />
                                                <span className="font-medium">{category}</span>
                                            </div>
                                            <ChevronRight size={20} className={activeCategory === category ? 'text-yellow-400' : 'text-gray-400'} />
                                        </button>
                                    );
                                })}
                            </nav>

                            {/* Hours Info */}
                            <div className="mt-8 bg-blue-100 rounded-lg p-4">
                                <div className="flex items-center mb-2">
                                    <Clock className="text-blue-900 mr-2" size={20} />
                                    <h4 className="font-bold text-blue-900">Hours</h4>
                                </div>
                                <p className="text-sm text-blue-800">Daily: 7 AM - 3 PM</p>
                            </div>
                        </div>
                    </div>

                    {/* Menu Content */}
                    <div className="flex-1 min-h-screen">
                        {Object.entries(filteredMenu).map(([category, sections]) => (
                            <div
                                key={category}
                                className={`${activeCategory === category ? 'block' : 'hidden'}`}
                            >
                                <div className="mb-8">
                                    <h2 className="text-3xl font-bold text-gray-900 mb-2">{category}</h2>
                                    <p className="text-gray-600">
                                        {category === 'Breakfast' && 'Start your day with our hearty breakfast selections'}
                                        {category === 'Lunch' && 'Delicious lunch options to satisfy your midday cravings'}
                                        {category === 'Specials' && 'Chef\'s special creations and seasonal favorites'}
                                        {category === 'Entrees' && 'Classic Ann Sather entrées made with love'}
                                    </p>
                                </div>

                                <div className="space-y-6">
                                    {Object.entries(sections).map(([section, items]) => (
                                        <div key={section} className="bg-white rounded-xl shadow-lg overflow-hidden">
                                            <button
                                                onClick={() => toggleSection(`${category}-${section}`)}
                                                className="w-full px-6 py-4 bg-gradient-to-r from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 transition-colors"
                                            >
                                                <div className="flex items-center justify-between">
                                                    <h3 className="text-xl font-bold text-blue-900">{section}</h3>
                                                    <div className="flex items-center">
                                                        <span className="text-sm text-gray-600 mr-3">{items.length} items</span>
                                                        <ChevronDown
                                                            className={`text-blue-900 transform transition-transform ${
                                                                expandedSections[`${category}-${section}`] ? 'rotate-180' : ''
                                                            }`}
                                                            size={24}
                                                        />
                                                    </div>
                                                </div>
                                            </button>

                                            <div className={`transition-all duration-300 ${
                                                expandedSections[`${category}-${section}`] ? 'max-h-[2000px]' : 'max-h-0'
                                            } overflow-hidden`}>
                                                <div className="p-6 space-y-4">
                                                    {items.map((item, index) => (
                                                        <div
                                                            key={index}
                                                            className="flex justify-between items-start py-3 border-b border-gray-100 last:border-0 hover:bg-gray-50 px-4 -mx-4 rounded-lg transition-colors"
                                                        >
                                                            <div className="flex-1">
                                                                <h4 className="font-semibold text-gray-900 flex items-center">
                                                                    {item.title}
                                                                    {item.featured && (
                                                                        <Star className="ml-2 text-yellow-500" size={16} fill="currentColor" />
                                                                    )}
                                                                </h4>
                                                                {item.description && (
                                                                    <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                                                                )}
                                                            </div>
                                                            <span className="text-lg font-bold text-blue-700 ml-4">{item.price}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}

                        {/* No results message */}
                        {Object.keys(filteredMenu).length === 0 && (
                            <div className="text-center py-12">
                                <p className="text-gray-500 text-lg">No menu items found matching your search.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompleteMenu;