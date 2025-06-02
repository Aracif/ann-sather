import React from 'react';
import { Search, Filter, Sparkles, Star } from 'lucide-react';

// CompactHeader Component
const CompactHeader = ({
                           featuredItems,
                           searchTerm,
                           setSearchTerm,
                           priceFilter,
                           setPriceFilter,
                       }) => {
    return (
        <div className="fixed top-0 inset-x-0 z-50 bg-white/95 backdrop-blur shadow-md transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 py-2 flex items-center gap-4 overflow-x-auto">
                {/* mini title */}
                <span className="text-lg font-semibold text-blue-900 whitespace-nowrap">
                    Our&nbsp;Menu
                </span>

                {/* favourites as little chips */}
                <div className="flex items-center gap-2 shrink-0">
                    {featuredItems.map(({ title, price, icon: Icon }) => (
                        <div
                            key={title}
                            className="flex items-center bg-blue-50 rounded-full px-3 py-1 text-sm text-blue-900"
                        >
                            <Icon size={14} className="mr-1 text-yellow-500" />
                            <span className="hidden sm:inline">{title}</span>
                            <span className="sm:hidden">{title.split(' ')[0]}</span>
                            <span className="ml-2 font-bold">{price}</span>
                        </div>
                    ))}
                </div>

                {/* spacer pushes search to the right */}
                <div className="flex-1" />

                {/* search box */}
                <div className="relative w-52">
                    <Search
                        size={16}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                    />
                    <input
                        type="text"
                        placeholder="Search…"
                        className="w-full pl-9 pr-3 py-2 rounded-md border border-gray-300 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                {/* price filter */}
                <div className="relative">
                    <Filter
                        size={16}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                    />
                    <select
                        className="pl-9 pr-8 py-2 rounded-md border border-gray-300 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white"
                        value={priceFilter}
                        onChange={(e) => setPriceFilter(e.target.value)}
                    >
                        <option value="all">All</option>
                        <option value="under10">&lt;$10</option>
                        <option value="under15">&lt;$15</option>
                        <option value="over15">&ge;$15</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

// Add the missing export!
export default CompactHeader;