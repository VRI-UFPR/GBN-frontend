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

export const postTextoCorrigido = async (texto, resposta_correta,texto_ocr_id, pagina_id, pergunta_id, id) => {
    try {
        const payload = {
            "pagina_id": pagina_id,
            "texto_ocr_id": texto_ocr_id,
            "usuario_id": id,
            "pergunta_id": pergunta_id,
            "texto_corrigido_manualmente": texto,
            "pergunta_resposta_correta": resposta_correta
        };

        console.log(payload);

        const response = await apiClient.post(`/texto_correcao_manual/`, payload);

        console.log(response.data);

        return response.data;
    } catch (error) {
        console.error(error);
    }
    }

export const getPerguntaAlternativas = async (pagina_id) => {
    try {
        const response = await apiClient.get(`/pergunta/alternativas/pagina/${pagina_id}`);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};
