import axios from "axios";

const url = "http://localhost:5000";

export const getCategoriesAndPrices = () => axios.get(`${url}/categories`);

export const getAllItems = () => axios.get(`${url}/items`);

export const getOneItem = (id: string) => axios.get(`${url}/items/${id}`);
