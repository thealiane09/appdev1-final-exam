import axios from 'axios';

const API_URL = import.meta.env.VITE_APP_API_URL;

export const getTodosAPI = async () => {
    const response = await axios.get(`${API_URL}/todos?_limit=10`);
    return response.data;
}

export const addTodoAPI = async (todo) => {
    const response = await axios.post(`${API_URL}/todos`, todo);
    return response.data;
}

export const updateTodoAPI = async (todo) => {
    const response = await axios.put(`${API_URL}/todos/${todo.id}`, todo);
    return response.data;
}

export const deleteTodoAPI = async (id) => {
    await axios.delete(`${API_URL}/todos/${id}`);
    return id;
}