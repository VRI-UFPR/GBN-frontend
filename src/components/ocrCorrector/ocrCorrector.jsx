import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import SendIcon from '@mui/icons-material/Send';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { postTextoCorrigido } from '../../api/textoApi';


const Textarea = styled(TextField)(({ theme }) => ({
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto', 
    marginTop: '1rem',
    fontSize: '0.875rem',
    fontWeight: '400',
    lineHeight: '1.5',
    borderRadius: '0.25rem',
}));

const ButtonSend = styled(Button)(({ theme }) => ({
    marginTop: '1rem',
    fontSize: '0.875rem',
    fontWeight: '400',
    lineHeight: '1.5',
    borderRadius: '0.25rem',
}));


const OcrCorrector = ({ocrText, pagina}) => {
    const [textoCorrigidoManualmente, setTextoCorrigidoManualmente] = useState("");

    const handletextoCorrigidoManualmente = (e) => {
        e.preventDefault();
        setTextoCorrigidoManualmente(e.target.value);
        console.log(textoCorrigidoManualmente);
    }
    
    const submitForm = (e) => {
        e.preventDefault();
        console.log(textoCorrigidoManualmente);   
        postTextoCorrigido(textoCorrigidoManualmente, ocrText.id, pagina.id);              
    }


    return(
        <Box
            component="form"
            noValidate
            autoComplete="off"

            onSubmit={submitForm}
            sx={{ textAlign: 'center' }}
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

            <ButtonSend variant="contained" endIcon={<SendIcon />}  type="submit" >
                Enviar Correcao
            </ButtonSend>
        </Box>      
    );
};

export default OcrCorrector;