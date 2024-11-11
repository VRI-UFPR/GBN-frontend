import React, { useState, useEffect , useRef } from 'react';
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
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import GermanKeyboard from '../GermanKeyboard/GermanKeyboard';
import { KeyboardAlt } from '@mui/icons-material';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import TabIcon from '@mui/icons-material/Tab';
import DragHandleRoundedIcon from '@mui/icons-material/DragHandleRounded';
import Draggable from 'react-draggable';
import CloseIcon from '@mui/icons-material/Close';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { createPortal } from 'react-dom';

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
    pt: `${theme.spacing(2)} !important`
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
    const [showDraggableKeyboard, setShowDraggableKeyboard] = useState(false);
    const textAreaRef = useRef(null);
    
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

    const focusTextArea = () => {
       if (textAreaRef.current && document.activeElement !== textAreaRef.current) {
            textAreaRef.current.focus();
        }
    };

    const handleAccordionToggle = () => {
        setShowDraggableKeyboard(!showDraggableKeyboard);
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
                onChange={handletextoCorrigidoManualmente}
                multiline
                sx={{ marginBottom: '1rem' }}
                minRows={8}
                maxRows={8}
                value={textoCorrigidoManualmente}
                inputRef={textAreaRef}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton
                                onClick={handleAccordionToggle}
                            >
                                <KeyboardAlt />
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
            />

<Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '4rem',
                    alignItems: 'center',
                }}
            >
                <ButtonTooltip title="Enviar o texto corrigido" placement="top-start" >
                    <ButtonSend variant="contained" endIcon={<SendIcon />} type="button" onClick={() => {setShowModal(true); }}
                        // esse aqui eh maior que o de trocar
                        sx={{
                            height: '4rem !important',
                            backgroundColor: '#32CD32 !important', // LimeGreen
                            '&:hover': {
                                backgroundColor: '#2db82d !important', // LimeGreen claro para o efeito hover
                            }
                        }}
                        >
                        Enviar
                    </ButtonSend>
                </ButtonTooltip>
                <ButtonTooltip title="Apresentar um novo texto para o desafio" placement="top-start" arrow>
                    <ButtonSend
                        variant="contained"
                        type="button"
                        endIcon={<AutorenewIcon />}
                        onClick={() => updatePagina()}
                        sx={{
                            height: '3.5rem !important', // Tamanho menor para o botão "Trocar"
                            backgroundColor: '#FF6347 !important', // Coral
                            '&:hover': {
                                backgroundColor: '#ff4f42', // Coral claro para o efeito hover
                            }
                        }}
                        >
                        Trocar
                    </ButtonSend>
                </ButtonTooltip>
            </Box>
            <Draggable
                onDrag={focusTextArea}
                handle="#drag-icon"
            >
                <Box
                    sx={{
                        visibility: showDraggableKeyboard ? 'visible' : 'hidden',
                        zIndex: 3000,
                        position: 'absolute',
                        backgroundColor: 'white',
                        borderRadius: '0.25rem',
                        border: '1px solid #d2d2d2',
                        width: '47%',
                    }}
                >   
                    {/* dois icones, um de arrastar e outro de fechar, tendo um ocupando a maior parte da linha */}
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            padding: '0.5rem',
                            borderBottom: '1px solid #d2d2d2',
                        }}
                    >
                        <IconButton
                            id="drag-icon"
                            sx={{
                                width: '90%',
                                height: '1rem',
                                borderRadius: '0 !important',  
                            }}
                        >
                            <DragHandleRoundedIcon
                                preserveAspectRatio='none'
                            />
                        </IconButton>
                        <IconButton
                            onClick={() => setShowDraggableKeyboard(false)}
                            sx={{
                                width: '10%',
                                height: '1rem',
                                borderRadius: '0 !important',
                            }}
                        >
                            <CloseIcon />
                        </IconButton>
                    </Box>
                    <GermanKeyboard
                        textArea={textAreaRef}
                        setInput={setTextoCorrigidoManualmente}
                        focusArea={focusTextArea}
                    />
                </Box>
            </Draggable>

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