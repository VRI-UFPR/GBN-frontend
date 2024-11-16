import React from 'react'
import { Box, Button, styled, Typography } from "@mui/material";
import { Link } from 'react-router-dom'
//img
import headerImg from '../assets/Zeitung.png'
import TextField from '@mui/material/TextField';
import { getToken } from '../api/usuarioApi';

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

    const handleLogin = async (language) => {
        try {
            const email = document.getElementById('email-input').value;
            const token = await getToken(email);

            if (!token) {
                alert('Usuário não encontrado');
                return;
            }
            localStorage.setItem('usuarioToken', token.access_token);
            console.log(token.access_token);
            localStorage.setItem('usuarioEmail', email);
            window.location.href = `/leseolympiade`;
        }
        catch (error) {
            console.error(error);
        }
    };

  return  (
        <CustomBox component='header'>
            {/*  Box text  */}
            <BoxText 
            component='section'
            >
                <Typography
                variant='h2'
                component= 'h1'
                sx={{
                    fontWeight: 700,
                    color: '#fff',
                    fontFamily: 'Sans-serif',
                }}
                >
                    Leseolympiade
                </Typography>

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
                    placeholder="Email"
                    type="email"
                    sx={{
                        width: '100%',
                        mb: 2,
                        borderColor: '#fff',
                        backgroundColor: '#fff',
                    }}
                />

                <Box>
                    <Button 
                    component={Link}
                    variant='contained'
                    onClick={handleLogin}
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
                        Português
                    </Button>
                    <Button 
                    component={Link} 
                    onClick={handleLogin}
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
                        Alemão
                    </Button>
                </Box>
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