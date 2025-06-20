const HolidaySpecialsCaterMenu = () => {
    return (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-4xl mx-auto">
            <div className="p-6 space-y-4 text-sm text-blue-900 leading-relaxed">
                <h4 className="text-lg font-bold mb-2">Holiday Dinner Options</h4>
                {[
                    {
                        title: "Thanksgiving and Christmas — $29.95",
                        desc: "Ann Sather Cinnamon Rolls and Assorted Breads, House Salad, Roast Turkey with Dressing and Gravy, Baked Ham, Mashed Potatoes, Mixed Steamed Vegetables and Assorted Pies"
                    }
                ].map((item, idx) => (
                    <div key={idx}>
                        <p><strong>{item.title}</strong></p>
                        {item.desc && <p>{item.desc}</p>}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HolidaySpecialsCaterMenu;
