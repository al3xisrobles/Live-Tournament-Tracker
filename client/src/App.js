import './App.css';
import Home from './pages/Home'
import Standings from './pages/Standings'
import Teams from './pages/Teams'
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route } from  'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/standings' element={<Standings/>}/>
          <Route path='/teams' element={<Teams/>}/>
        </Routes>
      </Router>
      <Footer/>
    </>
  );
}

export default App;
