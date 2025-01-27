import React, { useEffect, useState } from 'react';
import { fetchMenu, fetchMenuItems } from '../services/menuServices';
import AddItem from './AddItem';
import AddMenu from './AddMenu';

const MenuCard = () => {
    const [menus, setMenus] = useState([]);
    const [menuItems, setMenuItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [activeTab, setActiveTab] = useState(null);
    const [isAddMenuModalOpen, setIsAddMenuModalOpen] = useState(false);  // Separate state for Add Menu modal
    const [isAddItemModalOpen, setIsAddItemModalOpen] = useState(false);  // Separate state for Add Item modal

    useEffect(() => {
        // Fetch all menus on mount
        const fetchMenuData = async () => {
            try {
                const result = await fetchMenu();
                setMenus(result.data); // Assuming backend returns an array of menus
                if (result.data.length > 0) {
                    setActiveTab(result.data[0]._id); // Set the first menu's _id as active
                }
                setLoading(false);
            } catch (err) {
                setError('Failed to fetch menus');
                setLoading(false);
            }
        };
        fetchMenuData();
    }, []);

    useEffect(() => {
        const fetchItemsForMenu = async () => {
            if (!activeTab) return;

            try {
                setLoading(true);
                const items = await fetchMenuItems(activeTab); // Imported service
                setMenuItems(items.data);
            } catch (err) {
                setError('Failed to fetch menu items');
            } finally {
                setLoading(false);
            }
        };
        fetchItemsForMenu();
    }, [activeTab]);

    const renderMenuItems = () => {
        if (loading) {
            return <div className="text-center text-white">Loading...</div>;
        }

        if (error) {
            return <div className="text-center text-red-500">{error}</div>;
        }

        if (!menuItems || menuItems.length === 0) {
            return <div className="text-center text-white">No items available for this menu.</div>;
        }

        return menuItems.map((item, index) => (
            <div key={index} className="col-span-1 p-4 shadow-lg rounded-md">
                <div className="flex justify-between items-center">
                    <div className="font-bold text-base-content sm:text-[26px]">{item.name}</div>
                    <div className="flex-grow border-dotted border-t-4 border-gray-300 mx-2"></div>
                    <div className="text-base-content sm:text-[26px] font-bold">{item.price}</div>
                </div>
                <div className="text-gray-300 text-[18px] font-kelly mt-2">{item.description}</div>
            </div>
        ));
    };

    return (
        <>
            {/* Dynamic Tabs */}
            <div className="max-w-7xl mx-auto font-oswald px-4 sm:px-6 lg:px-8 mt-4">
                <div className="flex justify-center space-x-4 flex-wrap">
                    {menus.map((menu) => (
                        <button
                            key={menu._id}
                            className={`btn uppercase border-blue-400 hover:bg-blue-400 hover:text-base-100 text-blue-400 btn-outline ${activeTab === menu._id ? 'bg-blue-400 text-base-100' : ''}`}
                            onClick={() => setActiveTab(menu._id)}
                        >
                            {menu.name}
                        </button>
                    ))}
                    <button
                        className="btn btn-ghost"
                        onClick={() => setIsAddMenuModalOpen(true)} // Open Add Menu modal
                    >
                        <i className="fa-solid fa-circle-plus fa-xl" />
                    </button>
                </div>
            </div>

            {/* Display Menu Name */}
            <div className="mt-4 bg-menubg bg-cover bg-center relative overflow-hidden flex justify-center">
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <div className="grid mt-24 mb-24 mx-6 pb-12 w-full max-w-7xl border border-gray-300 shadow-lg relative">
                    <div className="relative font-oswald flex flex-col justify-center p-6">
                        <h1 className="text-[30px] sm:text-[50px] font-bold text-center p-4 text-white">
                            {menus.find((menu) => menu._id === activeTab)?.description?.toUpperCase()}
                        </h1>
                        {/* Modal Button */}
                        <div className="flex justify-center">
                            <button
                                className="btn btn-ghost"
                                onClick={() => setIsAddItemModalOpen(true)} // Open Add Item modal
                            >
                                <i className="fa-solid fa-circle-plus fa-xl" />Add Item
                            </button>
                        </div>
                        <div className="grid px-4 sm:px-16 grid-cols-1 sm:grid-cols-2 gap-4">
                            {loading ? <div className="text-center text-white">Loading items...</div> : renderMenuItems()}
                        </div>

                    </div>
                </div>
            </div>

            {/* Add Menu Modal */}
            <AddMenu
                isOpen={isAddMenuModalOpen}
                onClose={() => setIsAddMenuModalOpen(false)} // Close Add Menu modal
                onMenuAdded={(newMenu) => setMenus((prev) => [...prev, newMenu])}
            />

            {/* Add Item Modal */}
            <AddItem
                isOpen={isAddItemModalOpen}
                onClose={() => setIsAddItemModalOpen(false)} // Close Add Item modal
                onItemAdded={(newItem) => setMenuItems((prev) => [...prev, newItem])}
                activeMenuId={activeTab}
            />
        </>
    );
};

export default MenuCard;
