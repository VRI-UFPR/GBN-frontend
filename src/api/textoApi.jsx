import apiClient from "./apiBase";

export const getTextoOcrById = async (pagina_id) => {
    try {
        const response = await apiClient.get(`/texto_ocr/pagina/${pagina_id}`);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(error);
    }
    };

export const postTextoCorrigido = async (texto, texto_ocr_id, pagina_id) => {
    try {
        const payload = {
            "texto_corrigido_manualmente": texto,
            "pagina_id": pagina_id,
            "texto_ocr_id": texto_ocr_id
        };

        console.log(payload);

        const response = await apiClient.post(`/texto_correcao_manual/`, payload);

        console.log(response.data);

        return response.data;
    } catch (error) {
        console.error(error);
    }
    }