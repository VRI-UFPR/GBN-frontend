import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ColumnsGrid from './pages/textCorrection/textCorrection';
import Home from './pages/Home';
import Footer from './components/footer/Footer';
import Gratulation from './components/Gratulation'
import Encerramento from './components/Encerramento';

function App() {
  
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Encerramento/>}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;