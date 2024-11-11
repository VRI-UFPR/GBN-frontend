import React, { useState, useEffect } from 'react';
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
import AutorenewIcon from '@mui/icons-material/Autorenew';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';

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
    fontSize: '0.875rem !important',
    fontWeight: '400 !important',
    lineHeight: '1.5 !important',
    borderRadius: '0.25rem !important',
    color: '#000 !important',
    padding: '1rem 2rem !important',
}));

const ButtonTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} arrow classes={{ popper: className }} placement="top" />
))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
        color: theme.palette.common.black,
    },
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: theme.palette.common.black,
        fontSize: '1rem',
    },
}));

const OcrCorrector = ({ocrText, pagina, perguntaAlternativas, updatePagina}) => {
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
        postTextoCorrigido(textoCorrigidoManualmente, alternativaSelecionada.alternativa_correta, ocrText.id, pagina.id, alternativaSelecionada.pergunta_id, 0);
    }
    
    const handleAlternativaChange = (e) => {
        const alternativa = perguntaAlternativas.alternativas.find(
            alt => alt.alternativa === e.target.value
        );
        setAlternativaSelecionada(alternativa);
    };

    useEffect(() => {
        setTextoCorrigidoManualmente(ocrText.texto_ocr || "");
      }, [ocrText]);

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
                value={textoCorrigidoManualmente}
                onChange={handletextoCorrigidoManualmente}
                multiline
                sx={{ marginBottom: '1rem' }}
                minRows={8}
                maxRows={8}
            />

            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '4rem',
                    alignItems: 'center',
                }}
            >
                <ButtonTooltip title="Apresentar um novo texto para o desafio" placement="top-start" arrow>
                    <ButtonSend
                        variant="contained"
                        type="button"
                        endIcon={<AutorenewIcon />}
                        onClick={() => updatePagina()}
                        sx={{
                            height: '3.5rem !important',
                            backgroundColor: '#FF6347 !important',
                            '&:hover': {
                                backgroundColor: '#ff4f42',
                            }
                        }}
                        >
                        Trocar
                    </ButtonSend>
                </ButtonTooltip>
                <ButtonTooltip title="Enviar o texto corrigido" placement="top-start" >
                    <ButtonSend variant="contained" endIcon={<SendIcon />} type="button" onClick={() => setShowModal(true)}
                        sx={{
                            height: '4rem !important',
                            backgroundColor: '#32CD32 !important', 
                            '&:hover': {
                                backgroundColor: '#2db82d !important',
                            }
                        }}
                        >
                        Enviar
                    </ButtonSend>
                </ButtonTooltip>
            </Box>

            <MyModal show={showModal} setShow={setShowModal}>
                <FormControl sx={{ width: '100%' }}>
                    <form onSubmit={submitForm}>
                        <FormLabel id="radio-buttons-pergunta"
                            sx={{
                                marginBottom: '1rem !important',
                                variant: 'h5 !important',
                                position: 'relative',
                                display: 'block',
                                fontWeight: '500 !important',
                                fontSize: '1.25rem !important',
                                textAlign: 'center !important',
                                color: '#313131 !important',
                            }}
                            >
                            {perguntaAlternativas.pergunta}
                            {/* </Typography> */}
                        </FormLabel>
                        <RadioGroup defaultValue=""                            name="alternativas" 
                        onChange={handleAlternativaChange}
                        >
                            {perguntaAlternativas.alternativas.map((alternativa) => (
                                <FormControlLabel value={alternativa.alternativa} 
                                control={<Radio size="small !important" 
                                    sx={{
                                        marginRight: '0.5rem !important',
                                    }}
                                />} label={alternativa.alternativa} 
                                sx={{ 
                                    alignItems: 'center',
                                    marginBottom: '1rem' }} />
                            ))}
                        </RadioGroup>
                        <Box sx={{ mt: 2, display: 'flex', width: '100%', justifyContent: 'flex-end' }}>
                            <ButtonSend variant="contained" type="submit" 
                                sx={{
                                    backgroundColor: '#32CD32 !important',
                                    '&:hover': {
                                        backgroundColor: '#2db82d !important',
                                    }
                                }}>
                                Enviar
                            </ButtonSend>
                        </Box>
                    </form>
                </FormControl>
            </MyModal>
        </Box>      
    );
};

export default OcrCorrector;
