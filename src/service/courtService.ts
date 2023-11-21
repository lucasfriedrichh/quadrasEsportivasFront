import axios from 'axios';
import Court from '../core/Court';

interface ApiResponse {
    content: Court[];
}
const BASE_URL = 'http://localhost:8080';

export const fetchCourts = async (): Promise<Court[]> => {
    try {
        const response = await axios.get<ApiResponse>(`${BASE_URL}/court`);
        return response.data.content;
    
    } catch (error) {
        throw new Error('Erro ao buscar quadra');
    }
};


export const cadastrarCourt = async (court: Court): Promise<Court> => {
    try {
    const response = await axios.post<Court>(`${BASE_URL}/court`, court);
    return response.data;
    } catch (error) {
    console.error("Erro ao cadastrar quadra:", error);
    throw error;
    }
};

export const atualizarCourt = async (court: Court): Promise<Court> => {
    try {
        const response = await axios.put<Court>(`${BASE_URL}/court/${court.id}`, court);
        return response.data;
    } catch (error) {
        console.error("Erro ao atualizar court:", error);
        throw error;
    }
};

export const excluirCourt = async (id: number): Promise<void> => {
    try {
        await axios.delete(`${BASE_URL}/court/${id}`);
    } catch (error) {
        console.error("Erro ao excluir quadras:", error);
        throw error;
    }
};
