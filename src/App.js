import React from 'react';
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import Contato from './components/pages/Contato';
import Sobre from './components/pages/Sobre';
import Servicos from './components/pages/Servicos';
import Home from './components/pages/Home';
import './App.css';
import { FaHouse } from "react-icons/fa6";
import { LuUser } from "react-icons/lu";
import { MdOutlineElectricBolt } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import Rodape from './components/Rodape';

function App() {
  return (
    <div>
      <BrowserRouter>


        <ul>
          
          <li><Link to="/"><FaHouse />Home</Link></li>
          <li><Link to="/sobre"><LuUser />Sobre</Link></li>
          <li><Link to="/servicos"><MdOutlineElectricBolt />Servicos</Link></li>
          <li><Link to="/contato"><HiOutlineMail />Contato</Link></li>
        </ul>


        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/servicos" element={<Servicos />} />
        </Routes>



      </BrowserRouter>

      <div>
        <Rodape />
      </div>
    </div>
  );
}

export default App;


