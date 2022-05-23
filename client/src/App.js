import './App.css';
import Home from './pages/Home'
import Standings from './pages/Standings'
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route } from  'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/standings' element={<Standings/>}/>
        </Routes>
      </Router>
      <Footer/>
    </>
  );
}

export default App;
