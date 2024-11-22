import React from 'react'
import { Box, Button, styled, Typography } from "@mui/material";
import { Link } from 'react-router-dom'
//img
import headerImg from '../assets/Zeitung.png'
import TextField from '@mui/material/TextField';
import { getToken } from '../api/usuarioApi';
import olimpiadaSVG from '../assets/olimpiada-white.svg';
import textLese from '../assets/text-lese.webp';

const Header = () => {

    const CustomBox = styled(Box) (({ theme }) => ({
        minHeight: '40vh',
        display: 'flex',
        justifyContent: 'center',
        // tamanhos
        gap: theme.spacing(2),
        paddingTop: theme.spacing(10),
        // cor de fundo
        backgroundColor: 'orange',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
        }
    }));

    const BoxText = styled(Box) (({ theme }) => ({
        flex: '1',
        paddingLeft: theme.spacing(8),
        [theme.breakpoints.down('md')]: {
            flex: '2',
            textAlign: 'center',
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2),
        },
    }));

    const handleLogin = async (lingua) => {
        try {
            const email = document.getElementById('email-input').value;
            const token = await getToken(email).catch((error) => {
                throw error;
            });

            localStorage.setItem('usuarioToken', token.access_token);
            localStorage.setItem('usuarioEmail', email);
            localStorage.setItem('lingua', lingua);
            window.location.href = `/leseolympiade`;
        }
        catch (error) {
            alert('Falha ao logar\n' + error);
        }
    };

  return  (
        <CustomBox component='header'>
            {/*  Box text  */}
            <BoxText 
            component='section'
            >
                <Box
                    component="img"
                    src={textLese}
                    alt="Leseolympiade"
                    sx={{
                        width: '100%',
                        maxWidth: '37.5rem', // Adjust max width as needed
                        height: 'auto', // Maintain aspect ratio
                        display: 'block',
                        margin: '0 auto', // Center the image horizontally
                        borderRadius: '8px', // Optional: Add rounded corners
                    }}
                />

                <Typography
                variant='p'
                component='p'
                sx={{
                    py: 3,
                    lineHeight: 1.6,
                    color: '#fff',
                }}
                >
                   Escolha participar do desafio em português ou em alemão
                </Typography>
    
                <TextField
                    id="email-input"
                    placeholder="E-mail"
                    type="email"
                    sx={{
                        width: '100%',
                        mb: 2,
                        borderColor: '#fff',
                        backgroundColor: '#fff',
                    }}
                />

                <Box sx={{ display: 'flex', gap: 2 }}>
                    <Button 
                    component={Link}
                    variant='contained'
                    onClick={() => handleLogin('portugues')}
                    sx={{
                        width: '9rem',
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
                        Português
                    </Button>
                    <Button 
                    component={Link} 
                    onClick={() => handleLogin('alemao')}
                    variant='outlined'
                    sx={{
                        width: '9rem',
                        height: '3.1rem',
                        px: 4, 
                        py: 1,
                        fontSize:'0.9rem',
                        textTransform: 'uppercase',
                        borderRadius: 0,
                        color: '#fff',
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
                        Alemão
                    </Button>
                </Box>

                <a href="https://olimpiadas-lemmbra.webflow.io/#faq-row-3" target="_blank" rel="noopener noreferrer">
                    <img
                        src={olimpiadaSVG}
                        alt="OlimpiadaLemmbra"
                        style={{ width: "full", marginTop: '4rem', marginLeft: '8rem', cursor: 'pointer' }}
                    />
                </a>

            </BoxText>

            <Box sx={theme => ({
                [theme.breakpoints.down('md')]:{
                    flex: '1',
                    paddingTop: '30px',
                    alignSelf: 'center',
                },
                [theme.breakpoints.up('md')]:{
                    flex: '2',
                    alignSelf: 'flex-end',
                },
            })}
            >
                <img
                src={headerImg}
                alt="headerImg"
                style={{ 
                    width: "75%", 
                    marginBottom: -15,
                }}
                />
            </Box>

        </CustomBox>
    )
}

export default Header;