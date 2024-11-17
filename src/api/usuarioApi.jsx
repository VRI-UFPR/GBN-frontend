import apiClient from "./apiBase";

export const getUsuario = async () => {
    try {
        const token = localStorage.getItem('usuarioToken');
        const response = await apiClient.get('/auth/usuario/', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        throw new Error('Falha ao carregar usuário'); 
    }
}

export const getToken = async (email) => {
    if (!email) {
        throw new Error('Email não informado');
    }
    try {
        const response = await apiClient.post(`/auth/token/?email=${encodeURIComponent(email)}`);
        return response.data;
    } catch (error) {
        throw new Error('Falha ao obter token');
    }
}