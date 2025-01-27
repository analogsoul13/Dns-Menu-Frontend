import React, { useState } from 'react';
import { addMenu } from '../services/menuServices'; // Import the service function

const AddMenu = ({ isOpen, onClose, onMenuAdded }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name || !description) {
            setError('Please fill out all fields');
            return;
        }

        setLoading(true);
        setError(null);

        try {
            const newMenu = { name, description };
            const result = await addMenu(newMenu);
            if (result.status === 201) {
                onMenuAdded(result.data); // Update the parent component with the new menu
                onClose();
            } else if (result.status === 400) {
                setError('Bad request. Please check the details.');
            } else if (result.status === 500) {
                setError('Server error. Please try again later.');
            } else {
                setError('Unexpected error occurred.');
            }
        } catch (err) {
            setError('Failed to add menu');
        } finally {
            setLoading(false);
        }
    };

    if (!isOpen) return null; 

    return (
        <div className="fixed inset-0 flex font-oswald justify-center items-center bg-black bg-opacity-50 z-50">
            <div className="bg-black p-6 rounded-md shadow-lg max-w-lg w-full">
                <h2 className="text-xl font-bold mb-4">Add New Menu</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-semibold">Menu Name</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full p-2 mt-1  rounded-md"
                            placeholder="New Menu Name"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="description" className="block text-sm font-semibold">Description</label>
                        <textarea
                            id="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="w-full p-2 mt-1 rounded-md"
                            placeholder="Enter description"
                            required
                        />
                    </div>
                    {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
                    <div className="flex justify-between items-center">
                        <button
                            type="button"
                            onClick={onClose}
                            className="btn btn-secondary"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={loading}
                            className="btn btn-primary"
                        >
                            {loading ? 'Adding...' : 'Add Menu'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddMenu;
