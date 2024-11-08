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

const Footer = () => {

  const StackColumn = styled(Stack) (() => ({
    flexDirection: 'column',
    justifyContent: 'flex-start',
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
      py: 4,
      px: 2,
    }}
    >
      <StackColumn>
        <FooterTitle text={'Créditos'} />
        <Typography 
        variant='caption'
        component='p' 
        >
          Open source landing page por Alessandra Couto
        </Typography>
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
        
      </StackColumn>
      
      <StackColumn>
        <Box>
          <img
            src={UFPRLogo}
            alt="UFPRImg"
            style={{ 
                width: "30%", 
            }}
          />
        </Box>
      </StackColumn>
      <StackColumn>
      <Box>
          <img
            src={VRILogo}
            alt="VRIImg"
            style={{ 
                width: "20%", 
            }}
          />
        </Box>
      </StackColumn>

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
    </BoxRow>
  )
}

export default Footer