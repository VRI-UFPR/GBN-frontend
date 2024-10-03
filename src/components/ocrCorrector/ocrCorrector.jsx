import React, { useState, useRef } from 'react';
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
    const [expandedKeyboard, setExpandedKeyboard] = useState(false);
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

    const focusTextArea = () => {
       if (textAreaRef.current && document.activeElement !== textAreaRef.current) {
            textAreaRef.current.focus();
        }
    };

    const handleAccordionToggle = () => {
        setExpandedKeyboard(!expandedKeyboard);
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
            <span>
                <Accordion
                    expandedKeyboard={expandedKeyboard}
                    square={true}
                    elevation={0}
                >
                    <Textarea
                        id="outlined-textarea"
                        label="Texto OCR"
                        InputLabelProps={{ shrink: true }}
                        defaultValue={ocrText.texto_ocr}
                        onChange={handletextoCorrigidoManualmente}
                        multiline
                        sx={{ marginBottom: '1rem' }}
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

                                    {/* Segundo ícone: TabIcon */}
                                    <IconButton
                                        onClick={() => { setShowDraggableKeyboard(true); handleAccordionToggle(); }}
                                        sx={{
                                            position: expandedKeyboard ?  'relative !important' : 'absolute !important', 
                                            visibility: expandedKeyboard ? 'visible' : 'hidden',
                                        }}
                                    >
                                        <TabIcon />
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />

                    <AccordionDetails>
                        <div>
                            <GermanKeyboard
                                textArea={textAreaRef}
                                setInput={setTextoCorrigidoManualmente}
                                focusArea={focusTextArea}
                            />
                        </div>
                    </AccordionDetails>
                </Accordion>
            </span>

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
                        width: '41rem',
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
                            preserveAspectRatio= 'none'
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
            <ButtonSend variant="contained" endIcon={<SendIcon />} type="button" onClick={() => {setShowModal(true); setShowDraggableKeyboard(false)}}>
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