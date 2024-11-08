import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ColumnsGrid from './pages/textCorrection/textCorrection';
import Home from './pages/Home';
import Footer from './components/footer/Footer';
import Gratulation from './components/Gratulation'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path='/leseolympiade' element={<ColumnsGrid />} />
          <Route path='/gratulation' element={<Gratulation />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
