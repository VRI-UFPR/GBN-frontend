import React from 'react'
import { 
  Box, 
  Stack, 
  styled, 
  Typography,
} from '@mui/material'
import { IconButton } from '@mui/material';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import HomeIcon from '@mui/icons-material/Home';
import VRILogo from '../../assets/vri-logo.png'
import UFPRLogo from '../../assets/UFPR-pt.png'
import olimpiadaSVG from '../../assets/olimpiada-white.svg';

const Header = () => {
    const HeaderContainer = styled(Box)(({ theme }) => ({
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: theme.spacing(1),
      height: '2.5rem',
      backgroundColor: 'orange',
      width: '100%',
    }));
  
    const LogoBox = styled(Box)(({ theme }) => ({
      maxWidth: '6.25rem',
      flexGrow: 1,
      margin: theme.spacing(0, 0.625),
      
      display: 'inline-flex', // Ensures logos do not stretch
      flexShrink: 0,          // Prevents the boxes from shrinking
    }));
  
    const TitleBox = styled(Box)(() => ({
      flexGrow: 2,
      textAlign: 'center',
      cursor: 'pointer'
    }));
  
    return (
        <HeaderContainer>
            <LogoBox>
                {/* <IconButton
                onClick={() => window.location.href = "https://olimpiadas-lemmbra.webflow.io/#faq-row-3"}
                style={{ color: 'white', fontSize: '2rem' }}  // Increased size
                title="Voltar ao Lemmbra"
                >
                <ExitToAppIcon fontSize="inherit" />
                </IconButton> */}
                <a href="https://olimpiadas-lemmbra.webflow.io/#faq-row-3" target="_blank" rel="noopener noreferrer">
                    <img
                        src={olimpiadaSVG}
                        alt="OlimpiadaLemmbra"
                        style={{ width: "100%", cursor: 'pointer' }}
                    />
                </a>
            </LogoBox>

            <TitleBox 
                onClick={() => window.location.href = "/"} 
                title="Voltar à página inicial"
            >
                <h1 style={{ color: 'white', margin: 0 }}>LESEOLYMPIADE</h1>
            </TitleBox>

            <LogoBox>
                <IconButton
                    onClick={() => window.location.href = "/"}
                    style={{ color: 'white', fontSize: '2rem' }}  // Increased size
                    // title="Voltar à página inicial"
                >
                <HomeIcon fontSize="inherit" />
                </IconButton>
            </LogoBox>
        </HeaderContainer>
    );
  };

export default Header