//--- Admin Page Component ---
import {Edit, LayoutDashboard, LogIn, LogOut, MapPin, PlusCircle, Utensils} from "lucide-react";
import {useState} from "react";

const AdminPage = ({ setCurrentPage }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    // Mock authentication function
    const handleLogin = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        // In a real app, you'd call your backend here.
        // We'll simulate a network delay.
        await new Promise(resolve => setTimeout(resolve, 1000));

        if (password === 'admin123') {
            setIsAuthenticated(true);
        } else {
            setError('Invalid password. Please try again.');
            setPassword('');
        }
        setIsLoading(false);
    };

    const handleLogout = () => {
        setIsAuthenticated(false);
        setPassword('');
        setError('');
    };

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-blue-900 font-sans p-4">
                <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-2xl shadow-2xl text-center">
                    <div>
                        <h2 className="text-4xl font-bold text-blue-900">Admin Access</h2>
                        <p className="mt-2 text-gray-600">Please enter the password to manage content.</p>
                        <p className="mt-2 text-sm text-gray-500">(Hint: the password is `admin123`)</p>
                    </div>

                    <form className="space-y-6" onSubmit={handleLogin}>
                        <div className="text-left">
                            <label htmlFor="password" className="text-sm font-bold text-gray-700 tracking-wide">
                                Password
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full mt-2 p-3 text-lg border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-yellow-400 focus:border-yellow-400 transition"
                                placeholder="••••••••"
                            />
                        </div>

                        {error && <p className="text-red-600 text-sm">{error}</p>}

                        <div>
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full flex justify-center items-center bg-yellow-400 text-blue-900 font-bold p-3 rounded-lg hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 transition-all duration-300 disabled:bg-gray-400"
                            >
                                {isLoading ? (
                                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-900"></div>
                                ) : (
                                    <>
                                        <LogIn className="mr-2 h-5 w-5" />
                                        Sign In
                                    </>
                                )}
                            </button>
                        </div>
                    </form>
                    <a href="/" className="inline-block mt-4 text-sm text-blue-600 hover:underline">
                        &larr; Back to Website
                    </a>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-100 font-sans">
            <header className="bg-blue-900 text-white shadow-lg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-4">
                        <div className="flex items-center space-x-4">
                            <LayoutDashboard size={32} />
                            <h1 className="text-2xl font-bold">Admin Dashboard</h1>
                        </div>
                        <button
                            onClick={handleLogout}
                            className="flex items-center px-4 py-2 rounded-lg font-semibold bg-yellow-400 text-blue-900 hover:bg-yellow-300 transition-colors"
                        >
                            <LogOut size={20} className="mr-2" />
                            Logout
                        </button>
                    </div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Content Management</h2>
                    <p className="text-lg text-gray-600">Select a category below to edit website content.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-2xl transition-shadow transform hover:-translate-y-1">
                        <div className="flex items-center text-blue-800 mb-4">
                            <Utensils size={28} className="mr-3" />
                            <h2 className="text-2xl font-bold">Menu Items</h2>
                        </div>
                        <p className="text-gray-600 mb-6">Add, edit, or remove menu items and view their popularity.</p>
                        <button className="w-full flex justify-center items-center bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition-colors">
                            <PlusCircle size={20} className="mr-2" />
                            Manage Menu
                        </button>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-2xl transition-shadow transform hover:-translate-y-1">
                        <div className="flex items-center text-blue-800 mb-4">
                            <MapPin size={28} className="mr-3" />
                            <h2 className="text-2xl font-bold">Locations</h2>
                        </div>
                        <p className="text-gray-600 mb-6">Update restaurant locations, hours, and contact info.</p>
                        <button className="w-full flex justify-center items-center bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition-colors">
                            <PlusCircle size={20} className="mr-2" />
                            Manage Locations
                        </button>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-2xl transition-shadow transform hover:-translate-y-1">
                        <div className="flex items-center text-blue-800 mb-4">
                            <Edit size={28} className="mr-3" />
                            <h2 className="text-2xl font-bold">Content Pages</h2>
                        </div>
                        <p className="text-gray-600 mb-6">Edit pages like "About Us", "Catering", and "Recipes".</p>
                        <button className="w-full flex justify-center items-center bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition-colors">
                            <PlusCircle size={20} className="mr-2" />
                            Manage Content
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default AdminPage;