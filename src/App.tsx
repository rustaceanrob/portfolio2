import './App.css';
import './index.css';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import About from './components/about/About';
import Motivations from './components/motivations/Motivations';
import Projects from './components/projects/Projects';

function App() {
  useEffect(() => {
      document.body.style.overflow = "hidden";
  }, [])
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/motivations' element={<Motivations/>}/>
      <Route path='/projects' element={<Projects/>}/>
    </Routes>
  );
}

export default App;
