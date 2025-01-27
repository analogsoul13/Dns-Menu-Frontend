import commonApi from "./commonApi";
import base_url from "./base_url";

// Create a new menu
export const addMenu = async (data) => {
    return await commonApi(`${base_url}/menu`, 'POST', null, data);
};

// Fetch all menu items
export const fetchMenu = async () => {
    return await commonApi(`${base_url}/menu`, 'GET');
};

export const fetchMenuItems = async (id) => {
    return await commonApi(`${base_url}/menu/${id}`,'GET')
}

// Add a new item to an existing menu
export const addMenuItem = async (id, data) => {
    return await commonApi(`${base_url}/menu/${id}/items`, 'POST', null, data);
};
