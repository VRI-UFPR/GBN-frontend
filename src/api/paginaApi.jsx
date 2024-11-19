import apiClient from "./apiBase";

export const getPagina = async (usuario_id, lingua) => {
    try {
        const response = await apiClient.get("/pagina/pagina_unica", 
        {
            params: {
                usuario_id: usuario_id,
                lingua: lingua
            },
        });
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(error);
    }
    };