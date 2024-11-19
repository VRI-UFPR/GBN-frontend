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
        const status = error.response.status;

        if (status === 440) {
            const newToken = await refreshToken();
            return getUsuarioWithNewToken(newToken);
        }

        throw new Error("Falha com as credenciais")
    }
}

const refreshToken = async () => {
    const refreshToken = localStorage.getItem('usuarioToken'); 
    try {
        const response = await apiClient.post('/auth/refresh-token', { refresh_token: refreshToken });
        const newAccessToken = response.data.access_token;
        localStorage.setItem('usuarioToken', newAccessToken); 
        return newAccessToken;
    } catch (error) {
        throw new Error("Erro ao renovar o token");
    }
}

const getUsuarioWithNewToken = async (newToken) => {
    try {
        const response = await apiClient.get('/auth/usuario/', {
            headers: {
                Authorization: `Bearer ${newToken}`,
            },
        });
        return response.data;
    } catch (error) {
        throw new Error('Falha ao carregar usuário com o novo token');
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