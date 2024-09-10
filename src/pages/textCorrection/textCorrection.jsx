import React, { useEffect, useState} from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Image from 'mui-image'


import { getPagina } from '../../api/paginaApi';
import { getTextoOcrById } from '../../api/textoApi';

import OcrCorrector from '../../components/ocrCorrector/ocrCorrector';
import ReactMirador from '../../components/mirador/mirador';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
//   media : {
//     xs: {
//       width: '50%',
//       height: '50%'
//     }
//   }
    width: '100%',
    height: '100%'
}));


const MiradorContainer = styled(Box)({
    width: '100%',
    height: '400px', // Adjust height as needed
    overflow: 'hidden',
    position: 'relative',
});


export default function ColumnsGrid() {
    const [pagina, setPagina] = useState("");
    const [ocrText, setOcrText] = useState("");
    
    const [loading, setLoading] = useState(true);

    async function fetchData() {
        const paginaRespose = await getPagina();
        setPagina(paginaRespose);
        // const TextoOcrResponse = await getTextoOcrById(paginaRespose.id);
        const TextoOcrResponse = await getTextoOcrById(0);
        setOcrText(TextoOcrResponse === undefined ? "" : TextoOcrResponse);
    }


    useEffect(() => {
        fetchData();
        setLoading(false);
    }
    , []);

    // if (loading || pagina === undefined) {
    //     return <p>Loading...</p>;
    // } else {
    //     // console.log(pagina.image_path === undefined);
    return (
        <Box sx={{ flexGrow: 1 }}>
            {loading === false ? (
                <Grid container spacing={2} columns={16}>
                    <Grid item xs={8}>
                        <Item > 
                            <MiradorContainer>
                                <ReactMirador />
                            </MiradorContainer>
                        </Item>
                    </Grid>
                    <Grid xs={8}>
                        <OcrCorrector ocrText={ocrText} pagina={pagina} />           
                    </Grid>
                </Grid>
           ) : (
                <p>Loading...</p>
            )}
        </Box>
    );
// }
}
