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
import VRILogo from '../../assets/vri-logo.png'
import UFPRLogo from '../../assets/UFPR-pt.png'

const vriUrl = 'https://web.inf.ufpr.br/vri/'; // Replace with your lab URL
const ufprUrl = 'https://ufpr.br/'; // Replace with your university URL

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
        <FooterTitle text={'Laboratório Visão Robótica e Imagem'} />
        <Stack 
        direction='row' 
        width= '70px'
        maxWidth='100%'
        justifyContent='space-between'
        >
          <Link href="https://www.instagram.com/vri.ufpr/" variant="body2" 
          sx={{
            color: '#414141',
            "&:hover": {
              color: '#1c2859',
            }
          }}
          >
            <InstagramIcon />  
          </Link> 
          <Link href="https://github.com/VRI-UFPR"variant="body2" 
          sx={{
            color: '#414141',
            "&:hover": {
              color: '#1c2859',
            }
          }}
          >
            <GitHubIcon />
          </Link> 
        </Stack>
        <Typography 
        variant='caption'
        component='p' 
        >
          &copy; 2024 VRI.
        </Typography>
      </StackColumn>
      
      <StackColumn>
        <Box>
          <a href={vriUrl} target="_blank" rel="noopener noreferrer">
              <img
                src={VRILogo}
                alt="VRIImg"
                style={{ 
                    width: "35%", 
                    justifyContent: 'center'
                }}
              />
          </a>
        </Box>
      </StackColumn>
      <StackColumn>
        <Box>
          <a href={ufprUrl} target="_blank" rel="noopener noreferrer">
            <img
              src={UFPRLogo}
              alt="UFPRImg"
              style={{ 
                  width: "40%", 
              }}
            />
          </a>
        </Box>
      </StackColumn>

      <StackColumn>
        <Link href="https://github.com/alessandradocouto/landing-page-template-reactjs?tab=MIT-1-ov-file#readme"variant="body2" 
            sx={{
              color: '#414141',
              "&:hover": {
                color: '#1c2859',
              }
            }}
            >
              <GitHubIcon />
        </Link> 
        <Typography 
          variant='caption'
          component='p' 
          style={{fontSize: 9}}
        >
            Open source landing page por Alessandra Couto
        </Typography>
      </StackColumn>
    </BoxRow>
  )
}

export default Footer