import apiClient from "./apiBase";

export const getPagina = async () => {
    try {
        const response = await apiClient.get("/pagina/pagina_unica");
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(error);
    }
    };