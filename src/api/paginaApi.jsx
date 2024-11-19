import apiClient from "./apiBase";

export const getPagina = async (usuario_id, lingua) => {
    try {
        console.log("usuario: " + usuario_id);
        const response = await apiClient.get(`/pagina/pagina_unica/${usuario_id}/${lingua}`);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(error);
    }
    };