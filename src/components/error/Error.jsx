import Alert from '@mui/material/Alert';

export default function Error ({textoErro}) {
    return (
        <Alert severity="warning" sx={{mt:"0.5rem", mb:"0.5rem"}}>{ textoErro }</Alert>
    )
}