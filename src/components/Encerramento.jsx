import React from 'react';
import {  
    Box,
    Button,
    Stack
} from '@mui/material'
import Title from './Title'
import Paragraph from './Paragraph'
import { Link } from 'react-router-dom'
import { keyframes } from '@emotion/react';

import trophy from '../assets/trophy-icon.svg'

const trophyAnimation = keyframes`
  0% {
    transform: translateY(-50px);
    opacity: 0;
  }
  50% {
    transform: translateY(10px);
    opacity: 1;
  }
  100% {
    transform: translateY(0);
  }
`;

const Encerramento = () => {
    const lingua = localStorage.getItem("lingua");
    const linguaTexto = lingua === 'portugues' ? 'português' : 'alemão';

    return (
        <Stack 
        component='section'
        direction="column"
        justifyContent='center'
        alignItems='center'
        sx={{
            py: 10,
            px: 2,
            backgroundColor: 'orange',
            color: '#fff',
        }}
        >
            <Title 
            text={'A Leseolympiade está oficialmente encerrada!'} 
            textAlign={'center'}
            />
            <Paragraph 
            text={`Agradecemos sua participação e dedicação nesta primeira edição!`}
            maxWidth={'sm'}
            mx={0}
            textAlign={'justify'}
            color='#ffffff'
            />

            {/* Trophy icon with animation */}
            <Box 
                sx={{
                    mt: 2,
                    animation: `${trophyAnimation} 1.5s ease-out`,
                    mb: 3
                }}
            >
                <img src={trophy} alt="Trophy" style={{ width: 300, height: 300 }} />
            </Box>

            <Box sx={{ mt: 1, py: 2 }}>
                <Button 
                component={Link} 
                to={'https://olimpiadas-lemmbra.webflow.io/#faq-row-3'}
                variant='contained'
                sx={{
                    height: '3rem',
                    mr: 2,
                    px: 4, 
                    py: 1,
                    fontSize: '0.9rem',
                    textTransform: 'uppercase',
                    borderRadius: 0,
                    borderColor: '#14192d',
                    color: '#fff',
                    backgroundColor: '#14192d',
                    "&&:hover": {
                        backgroundColor: "#343a55"
                    },
                    "&&:focus": {
                        backgroundColor: "#343a55"
                    }
                }}
                >
                    Retornar a Olimpíadas lemmbra
                </Button>
            </Box>
        </Stack>
    )
}

export default Encerramento;
