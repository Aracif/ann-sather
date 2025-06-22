//--- Admin Page Component ---
// AdminPage.tsx

import {
    Edit,
    LayoutDashboard,
    LogIn,
    LogOut,
    MapPin,
    PlusCircle,
    Utensils,
} from "lucide-react";
import { useState, useEffect } from "react";
import { signIn, signOut, getCurrentUser, confirmSignIn } from 'aws-amplify/auth';
import CreateMenuItem from './CreateMenuItem.tsx'; // Import the new component

const AdminPage = () => {
    const [user, setUser] = useState(null);
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState(''); // We'll use email as the username
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true); // Start loading to check for a current session
    // This state will control showing the "Set New Password" form
    const [showNewPasswordForm, setShowNewPasswordForm] = useState(false);
    // This state will hold the user's chosen new password
    const [newPassword, setNewPassword] = useState('');

    const [isCreateModalOpen, setCreateModalOpen] = useState(false);

    // Check for a logged-in user when the component mounts
    useEffect(() => {
        const checkUser = async () => {
            try {
                const currentUser = await getCurrentUser();
                setUser(currentUser);
            } catch (error) {
                // No user is signed in
                setUser(null);
            }
            setIsLoading(false);
        };

        checkUser();
    }, []);


    const handleLogin = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        // If the user is already being prompted for a new password,
        // call the confirmation handler instead.
        if (showNewPasswordForm) {
            await handleConfirmNewPassword();
            return;
        }

        try {
            const { isSignedIn, nextStep } = await signIn({
                username,
                password,
            });

            // --- NEW LOGIC TO HANDLE NEXT STEP ---
            if (nextStep.signInStep === 'CONFIRM_SIGN_IN_WITH_NEW_PASSWORD_REQUIRED') {
                // If Cognito requires a new password, show the form and stop.
                setShowNewPasswordForm(true);
            } else if (isSignedIn) {
                // If sign-in is complete, fetch the user and proceed.
                const currentUser = await getCurrentUser();
                setUser(currentUser);
            }
            // --- END NEW LOGIC ---

        } catch (err) {
            setError(err.message || 'An error occurred during sign-in.');
            setPassword('');
        }
        setIsLoading(false);
    };


    // --- NEW HANDLER FUNCTION ---
    const handleConfirmNewPassword = async () => {
        setIsLoading(true);
        setError('');
        try {
            // Use confirmSignIn to send the new password
            await confirmSignIn({ challengeResponse: newPassword });

            // After successful confirmation, the user is signed in.
            const currentUser = await getCurrentUser();
            setUser(currentUser);
            setShowNewPasswordForm(false); // Hide the new password form
            setNewPassword(''); // Clear the password state
        } catch (err) {
            setError(err.message || 'Failed to set new password. Please try again.');
        } finally {
            setIsLoading(false);
        }
    }

    // --- END NEW HANDLER ---
    const handleLogout = async () => {
        setIsLoading(true);
        try {
            await signOut();
            setUser(null);
            setUsername('');
            setPassword('');
        } catch (err) {
            setError(err.message || 'Error signing out.');
        }
        setIsLoading(false);
    };

    // --- Handlers for the modal ---
    const openCreateModal = () => setCreateModalOpen(true);
    const closeCreateModal = () => setCreateModalOpen(false);
    const handleSaveItem = (newItem) => {
        console.log('New item saved:', newItem);
        // Optionally, you can add logic here to refresh a list of items
        // For now, we'll just close the modal.
        // You could also leave it open if the user wants to add multiple items in a row.
        // closeCreateModal();
    };

    // While checking for a session, show a loader
    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-blue-900">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-yellow-400"></div>
            </div>
        );
    }

    // --- RENDER THE NEW PASSWORD FORM CONDITIONALLY ---
    if (showNewPasswordForm) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-blue-900 font-sans p-4">
                <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-2xl shadow-2xl text-center">
                    <h2 className="text-4xl font-bold text-blue-900">Set New Password</h2>
                    <p className="mt-2 text-gray-600">Please choose a new password to complete your first sign-in.</p>

                    <form className="space-y-6" onSubmit={handleLogin}>
                        <div className="text-left">
                            <label htmlFor="newPassword" className="text-sm font-bold text-gray-700 tracking-wide">
                                New Password
                            </label>
                            <input
                                id="newPassword"
                                name="newPassword"
                                type="password"
                                required
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                className="w-full mt-2 p-3 text-lg border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-yellow-400 focus:border-yellow-400 transition"
                                placeholder="••••••••"
                            />
                        </div>
                        {error && <p className="text-red-600 text-sm">{error}</p>}
                        <div>
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full flex justify-center items-center bg-yellow-400 text-blue-900 font-bold p-3 rounded-lg hover:bg-yellow-500 transition-all duration-300 disabled:bg-gray-400"
                            >
                                {isLoading ? 'Setting...' : 'Confirm and Sign In'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
    // --- END CONDITIONAL RENDER ---

    // If no user is logged in, show the login form
    if (!user) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-blue-900 font-sans p-4">
                <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-2xl shadow-2xl text-center">
                    <div>
                        <h2 className="text-4xl font-bold text-blue-900">Admin Access</h2>
                        <p className="mt-2 text-gray-600">Please sign in to manage content.</p>
                    </div>

                    <form className="space-y-6" onSubmit={handleLogin}>
                        <div className="text-left">
                            <label htmlFor="email" className="text-sm font-bold text-gray-700 tracking-wide">
                                Email
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="w-full mt-2 p-3 text-lg border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-yellow-400 focus:border-yellow-400 transition"
                                placeholder="admin@example.com"
                            />
                        </div>

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

    // If a user is logged in, show the admin dashboard
    return (
        <div className="min-h-screen bg-gray-100 font-sans">
            {/* --- RENDER THE MODAL CONDITIONALLY --- */}
            {isCreateModalOpen && <CreateMenuItem onClose={closeCreateModal} onSave={handleSaveItem} />}

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

                    {/* --- MODIFIED MENU ITEMS CARD --- */}
                    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-2xl transition-shadow transform hover:-translate-y-1">
                        <div className="flex items-center text-blue-800 mb-4">
                            <Utensils size={28} className="mr-3" />
                            <h2 className="text-2xl font-bold">Menu Items</h2>
                        </div>
                        <p className="text-gray-600 mb-6">Add, edit, or remove menu items and view their popularity.</p>
                        {/* THIS BUTTON NOW OPENS THE MODAL */}
                        <button
                            onClick={openCreateModal}
                            className="w-full flex justify-center items-center bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            <PlusCircle size={20} className="mr-2" />
                            Add New Item
                        </button>
                    </div>

                    {/* ... other cards (Locations, Content Pages) remain the same ... */}
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