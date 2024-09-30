import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import SendIcon from '@mui/icons-material/Send';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { postTextoCorrigido } from '../../api/textoApi';
import MyModal from '../myModal';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const Textarea = styled(TextField)(({ theme }) => ({
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto', 
    marginTop: '1rem',
    fontSize: '0.875rem',
    fontWeight: '400',
    lineHeight: '1.5',
    borderRadius: '0.25rem',
    maxHeight: '35.5rem', // Set a max height (adjust as needed)
    overflowY: 'auto', // Enable vertical scrolling
}));

const ButtonSend = styled(Button)(({ theme }) => ({
    marginTop: '1rem',
    fontSize: '0.875rem',
    fontWeight: '400',
    lineHeight: '1.5',
    borderRadius: '0.25rem',
}));


const OcrCorrector = ({ocrText, pagina, perguntaAlternativas}) => {
    const [textoCorrigidoManualmente, setTextoCorrigidoManualmente] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [alternativaSelecionada, setAlternativaSelecionada] = useState(null);

    const handletextoCorrigidoManualmente = (e) => {
        e.preventDefault();
        setTextoCorrigidoManualmente(e.target.value);
        console.log(textoCorrigidoManualmente);
    }
    
    const submitForm = (e) => {
        e.preventDefault();
        console.log(textoCorrigidoManualmente);   
        // quando resolver o problema do ocrText vir nulo, retirar a linha abaixo
        ocrText = {id: 0};
        postTextoCorrigido(textoCorrigidoManualmente, alternativaSelecionada.alternativa_correta, ocrText.id, pagina.id, alternativaSelecionada.pergunta_id, 0);
    }
    
    const handleAlternativaChange = (e) => {
        const alternativa = perguntaAlternativas.alternativas.find(
            alt => alt.alternativa === e.target.value
        );
        console.log(alternativa);
        setAlternativaSelecionada(alternativa);
    };


    return(
        <Box
            component="div"
            noValidate
            autoComplete="off"

            onSubmit={submitForm}
            sx={{ textAlign: 'center' }}
            paddingTop =  '10rem'
        >
            <Textarea
                id="outlined-textarea"
                label="Texto OCR"
                InputLabelProps={{ shrink: true }}
                defaultValue={ocrText.texto_ocr}
                onChange={handletextoCorrigidoManualmente}
                multiline
                sx={{ marginBottom: '1rem' }}
            />

            <ButtonSend variant="contained" endIcon={<SendIcon />} type="button" onClick={() => setShowModal(true)}>
                Enviar Correcao
            </ButtonSend>
            <MyModal show={showModal} setShow={setShowModal}>
                <FormControl sx={{ width: '100%' }}>
                    <form onSubmit={submitForm}>
                        <FormLabel id="radio-buttons-pergunta">{perguntaAlternativas.pergunta}</FormLabel>
                        <RadioGroup defaultValue=""                            name="alternativas" 
                        onChange={handleAlternativaChange}
                        >
                            {perguntaAlternativas.alternativas.map((alternativa) => (
                                <FormControlLabel value={alternativa.alternativa} control={<Radio />} label={alternativa.alternativa} />
                            ))}
                        </RadioGroup>
                        <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between', width: '100%'}}>
                            <Button variant="contained" color="secondary" type="button" onClick={() => setShowModal(false)}>
                                Fechar
                            </Button>
                            <Button variant="contained" color="primary" type="submit">
                                Enviar Correção
                            </Button>
                        </Box>
                    </form>
                </FormControl>
            </MyModal>
        </Box>      
    );
};

export default OcrCorrector;