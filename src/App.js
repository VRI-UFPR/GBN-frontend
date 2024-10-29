import vri from './assets/vri.png';  // Adjust path as necessary
import ufpr from './assets/ufpr.png';
import './App.css';
import ColumnsGrid from './pages/textCorrection/textCorrection';
import Image from 'mui-image';
import { Box } from '@mui/material';

function App() {

  const vriUrl = 'https://web.inf.ufpr.br/vri/'; // Replace with your lab URL
  const ufprUrl = 'https://ufpr.br/'; // Replace with your university URL

  return (
    <div className="App">
      {/* Header with Logos */}
      <Box sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 1,
        height: '50px',
        // borderBottom: '1px solid lightgray',
        backgroundColor: '#00548e'
      }}>
        <Box sx={{ maxWidth: '6.25rem', flexGrow: 1, margin: '0 0.625rem' }}>
          <a href={vriUrl} target="_blank" rel="noopener noreferrer">
            <Image src={vri} style={{ width: '100%', height: 'auto' }} alt="VRI Logo" />
          </a>
        </Box>

        <Box sx={{ flexGrow: 2, textAlign: 'center' }}>
          <h1 style={{ color: 'white', margin: 0 }}>OLIMPÍADA GBN</h1>
        </Box>

        <Box sx={{ maxWidth: '6.25rem', flexGrow: 1, margin: '0 0.625rem' }}>
          <a href={ufprUrl} target="_blank" rel="noopener noreferrer">
            <Image src={ufpr} style={{ width: '100%', height: 'auto' }} alt="UFPR Logo" />
          </a>
        </Box>
      </Box>

      {/* Main Content */}
      <ColumnsGrid />
    </div>
  );
}

export default App;