import React, { useState } from "react";
import { addMenuItem } from "../services/menuServices";
import { toast } from "react-toastify";

const AddItem = ({ isOpen, onClose, onItemAdded, activeMenuId }) => {
    const [item, setItem] = useState({
        name: "", description: "", price: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setItem(prevItem => ({
            ...prevItem,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { name, price, description } = item;
        if (!name || !price || !description) {
            alert("All fields are required!");
            return;
        }
        try {
            const res = await addMenuItem(activeMenuId, item);
            console.log('Response:', res)

            if (res.status === 201) {
                toast.success("Item Succesfully added")
                onItemAdded(res.data);
                setItem({
                    name: "",
                    description: "",
                    price: ""
                });
                
                onClose()
            }

        } catch (error) {
            console.error("Failed to add item:", error.response ? error.response.data : error.message);
            toast.error("Failed To add item !")
        }
    };


    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black font-oswald bg-opacity-50 flex items-center justify-center z-50">
            <div className=" bg-black w-11/12 max-w-lg p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-4">Add Menu Item</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block font-bold mb-2">Name</label>
                        <input
                            type="text"
                            className="input input-bordered w-full"
                            name="name"
                            value={item.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block font-bold mb-2">Price</label>
                        <input
                            type="number"
                            className="input input-bordered w-full"
                            name="price"
                            value={item.price}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block font-bold mb-2">Description</label>
                        <textarea
                            className="textarea textarea-bordered w-full"
                            name="description"
                            value={item.description}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="flex justify-end space-x-4">
                        <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={onClose}
                        >
                            Cancel
                        </button>
                        <button type="submit" className="btn btn-primary">
                            Add Item
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddItem;
