import React from 'react'
import { 
  Box, 
  Stack, 
  styled, 
  Typography,
} from '@mui/material'
import Link from '@mui/material/Link';
import FooterTitle from './FooterTitle'
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import VRILogo from '../../assets/vri-logo.png';
import UFPRLogo from '../../assets/UFPR-pt.png';
import LemmbraLogo from '../../assets/Logo-lemmbra-vertical.svg';
import ConsuladoLogo from '../../assets/logo_consulado_gray.webp';
import UFFLogo from '../../assets/logo-uff-azul.png';
import C3SLLogo from '../../assets/logotipo-C3.png'

const vriUrl = 'https://web.inf.ufpr.br/vri/'; // Replace with your lab URL
const ufprUrl = 'https://ufpr.br/'; // Replace with your university URL
const lemmbraURL = 'https://lemmbraalemao.ufpr.br/';
const uffUrl = 'https://www.uff.br/';
const c3Url = 'https://www.c3sl.ufpr.br/';


const Footer = () => {

  const StackColumn = styled(Stack) (() => ({
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    gap: 8,
    textAlign: 'center',
  }));

  const BoxRow = styled(Box) (({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#ededed',
    flex: 1,
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      gap: 30,
    }
  }));

  return (
    
    <BoxRow 
    component = 'footer'
    sx={{
      py: 2,
      px: 1.5,
    }}
    >
       <StackColumn>
        <Box>
          <a href={lemmbraURL} target="_blank" rel="noopener noreferrer">
              <img
                src={LemmbraLogo}
                alt="Lemmbra"
                style={{ 
                    width: "20%", 
                    justifyContent: 'center'
                }}
              />
          </a>
        </Box>
      </StackColumn>

      <StackColumn>
        <Box>
            <img
              src={ConsuladoLogo}
              alt="Consulado Geral da República Federal da Alemanha Rio de Janeiro"
              style={{ 
                  width: "90%", 
                  justifyContent: 'center',
              }}
            />
        </Box>
      </StackColumn>

      <StackColumn>
        <Box>
          <a href={uffUrl} target="_blank" rel="noopener noreferrer">
            <img
              src={UFFLogo}
              alt="UFF"
              style={{ 
                  width: "90%", 
                  justifyContent: 'center'
              }}
            />
          </a>
        </Box>
      </StackColumn>

      <StackColumn>
        {/* "Powered by" text */}
        <Typography 
          variant="subtitle2" 
          component="p" 
          style={{ fontWeight: 'bold', textAlign: 'center', marginBottom: 8 }}
        >
          Powered by
        </Typography>

        {/* Logos side by side */}
        <Stack 
          direction="row" 
          spacing={2} 
          justifyContent="center" 
          alignItems="center" 
          style={{ marginBottom: 16 }}
        >
          <a href={vriUrl} target="_blank" rel="noopener noreferrer">
            <img src={VRILogo} alt="VRI" style={{ width: '50%' }} />
          </a>
          <a href={c3Url} target="_blank" rel="noopener noreferrer">
            <img src={C3SLLogo} alt="C3SL" style={{ width: '150%' }} />
          </a>
          <a href={ufprUrl} target="_blank" rel="noopener noreferrer">
            <img src={UFPRLogo} alt="UFPR" style={{ width: '50%' }} />
          </a>
        </Stack>

        {/* Original content */}
        <Stack 
          direction="row" 
          spacing={1} 
          alignItems="center"
          sx={{
            color: '#414141',
            "&:hover": {
              color: '#1c2859',
            }
          }}
        >
          {/* GitHub Icon */}
          <Link 
            href="https://github.com/alessandradocouto/landing-page-template-reactjs?tab=MIT-1-ov-file#readme" 
            variant="body2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon sx={{ color: '#000' }} />
          </Link>

          {/* Text */}
          <Typography 
            variant="caption" 
            component="p" 
            style={{ fontSize: 9 }}
          >
            Landing page por Alessandra Couto
          </Typography>
        </Stack>
      </StackColumn>
    </BoxRow>
  )
}

export default Footer