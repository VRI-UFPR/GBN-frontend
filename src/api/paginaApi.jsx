import apiClient from "./apiBase";

export const getPagina = async () => {
    try {
        const response = await apiClient.get("/pagina/1");
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(error);
    }
    };