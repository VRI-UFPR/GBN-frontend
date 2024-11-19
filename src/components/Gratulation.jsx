import React from 'react'
import {  
    Box,
    Button,
    Stack
} from '@mui/material'
import Title from './Title'
import Paragraph from './Paragraph'
import { Link } from 'react-router-dom'

const Gratulation = () => {

    return (
        <Stack 
        component='section'
        direction="column"
        justifyContent= 'center'
        alignItems='center'
        sx={{
            py: 10,
            px: 2,
            backgroundColor: 'orange',
            color: '#fff',
        }}
        >
            <Title 
            text={
                'Parabéns por completar a Leseolympiade!'
                } 
            textAlign={'center'}
            />
            <Paragraph 
            text={
                'Você pode realizar a Leseolympiade mais uma vez\
                ou finalizar sua participação retornando ao site da Lemmbra.\
                Caso deseje realizar em outro momento,\
                solicitamos que nos informe o seu mesmo e-mail.\
                Agradecemos sua participação!'
            }
            maxWidth = {'sm'}
            mx={0}
            textAlign={'justify'}
            color='#ffffff'
            />

            <Box 
            sx={{ 
                mt: 1,
                py: 2
            }}>
               <Box>
                    <Button 
                    component={Link}
                    variant='contained'
                    to={'/leseolympiade'}
                    sx={{
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
                        Realizar Novamente
                    </Button>
                    <Button 
                    component={Link} 
                    to={'https://olimpiadaslemmbra.com.br/'}
                    variant='outlined'
                    sx={{
                        px: 4, 
                        py: 1,
                        fontSize:'0.9rem',
                        textTransform: 'uppercase',
                        borderRadius: 0,
                        color: '#fff',
                        backgroundColor: 'transparent',
                        borderColor: '#fff',
                        "&&:hover": {
                            color: '#343a55',
                            borderColor: '#343a55',
                        },
                        "&&:focus": {
                            color: '#343a55',
                            borderColor: '#343a55',
                        }
                    }}
                    >
                        Retornar a Lemmbra
                    </Button>
                </Box>
            </Box>
        </Stack>
    )
}

export default Gratulation;