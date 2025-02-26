import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5001',
})

export const getProducts = async () => {
    try {
        const response = await api.get('/products');
        return response.data.data;
    } catch (error) {
        console.error("Erro ao buscar produtos", error);
        return [];
    }
}