import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Image from 'mui-image'
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import LoopIcon from '@mui/icons-material/Loop';

import { getPagina } from '../../api/paginaApi';
import { getTextoOcrById, getPerguntaAlternativas } from '../../api/textoApi';
import { getUsuario } from '../../api/usuarioApi';

import OcrCorrector from '../../components/ocrCorrector/ocrCorrector';
import ReactMirador from '../../components/mirador/mirador';
import PeekFont from '../../components/peekFont/peekFont';
import Header from '../../components/header/Header';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
    width: '100%',
    height: '90%'
}));


const MiradorContainer = styled(Box)({
    // position: 'absolute',
    width: '100%',
    height: '900px', // Adjust height as needed
    overflow: 'hidden',
    position: 'relative',
});


export default function ColumnsGrid() {
    const [pagina, setPagina] = useState("");
    const [ocrText, setOcrText] = useState("");
    const [perguntaAlternativas, setPerguntaAlternativas] = useState("");
    const [currentManifest, setCurrentManifest] = useState('');
    const [loading, setLoading] = useState(true);
    const [isPortrait, setIsPortrait] = useState(false);

    async function fetchData() {      
        const paginaRespose = await getPagina(localStorage.getItem("usuarioId"), localStorage.getItem("lingua"));
        setPagina(paginaRespose);

        const TextoOcrResponse = await getTextoOcrById(paginaRespose.id);
        setOcrText(TextoOcrResponse === undefined ? "" : TextoOcrResponse);

        const perguntaAlternativasResponse = await getPerguntaAlternativas(paginaRespose.id);
        setPerguntaAlternativas(perguntaAlternativasResponse);

        const manifest = "https://webdokumente.c3sl.ufpr.br/"+ paginaRespose.image_path+".jpg_manifest.json"
        setCurrentManifest(manifest)

        setLoading(false);
    }

    const checkUser = async () => {
        getUsuario().catch((error) => {
            alert(error);
            localStorage.removeItem("usuarioToken");
            localStorage.removeItem("usuarioEmail");
            localStorage.removeItem("lingua");
            window.location.href = "/";
            return; 
        });
    }

    const handleOrientationChange = () => {
        const isPortraitMode = window.matchMedia('(orientation: portrait)').matches;
        setIsPortrait(isPortraitMode);
    };

    useEffect(() => {
        const initialize = async () => {
            checkUser();
            fetchData();
        }
        // setLoading(false);
        initialize();

        // Check initial orientation
        handleOrientationChange();

        // Add event listener for orientation changes
        window.addEventListener('resize', handleOrientationChange);

        return () => {
            window.removeEventListener('resize', handleOrientationChange);
        };
    }
        , []);

    if (loading || pagina === undefined || !perguntaAlternativas) {
        return <p>Carregando... Considere recarregar a página</p>;
    } else {
        // console.log(pagina.image_path === undefined);
    
    if (isPortrait) {
        return (
            <Box sx={{ textAlign: 'center', marginTop: '20%' }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 12 }}>
                    <PhoneIphoneIcon sx={{ transform: 'scale(4)', color: 'gray' }} />
                    <LoopIcon sx={{ transform: 'scale(4)', color: 'gray' }} />
                    <PhoneIphoneIcon sx={{ transform: 'scale(4) rotate(90deg)', color: 'gray' }} />
                </Box>
                <br/>
                <h1>Por favor use o celular na horizontal</h1>
            </Box>
        );
    }
    
    return (
        <>
            <Header />
            <Box sx={{
                flexGrow: 1,
                display: 'flex', 
                flexDirection: 'column', 
                // backgroundColor: '#f0aa00',
            }}>
                {loading === false ? (
                    <Grid container spacing={2} columns={16}>
                        <Grid item xs={8}>
                            <Item >
                                <MiradorContainer>
                                    <ReactMirador currentManifest={currentManifest} />
                                </MiradorContainer>
                            </Item>
                        </Grid>
                        <Grid item xs={8} sx={{ display: 'flex', flexDirection: 'column', overflowY: 'hidden' }}>
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                minHeight: '56.25rem',
                                maxHeight: '56.25rem',
                                overflowY: 'scroll' // Enable vertical scrolling
                            }}>
                                <OcrCorrector ocrText={ocrText} pagina={pagina} perguntaAlternativas={perguntaAlternativas} updatePagina={fetchData} checkUser={checkUser}/>
                                <PeekFont />
                            </Box>
                        </Grid>
                    </Grid>
                ) : (
                    <p>Loading...</p>
                )}
            </Box>
        </>
    );
    }
}
