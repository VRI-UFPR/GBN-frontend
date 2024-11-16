import apiClient from "./apiBase";

export const getUsuario = async () => {
    try {
        const token = localStorage.getItem('usuarioToken');
        const response = await apiClient.get('/auth/usuario/', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(error);
        throw new Error('Falha ao carregar usuário'); 
    }
}

export const getToken = async (email) => {
    try {
        const response = await apiClient.post(`/auth/token/?email=${encodeURIComponent(email)}`);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}