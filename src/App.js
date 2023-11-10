import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ComponenteLinks from './componentes/ComponenteLinks';
import OleosEssenciais from './componentes/OleosEssenciais';
import OleosVegetais from './componentes/OleosVegetais';
import Sinergias from './componentes/Sinergias';
import CosmeticosNaturais from './componentes/CosmeticosNaturais';
import HigienePessoal from './componentes/HigienePessoal';
import Aromatizadores from './componentes/Aromatizadores';
import Acessorios from './componentes/Acessorios';
import Ofertas from './componentes/Ofertas';
import HeaderApp from './componentes/HeaderApp';
import ComponenteTextoProps from './componentes/ComponenteTextoProps';
import Footer from './componentes/Footer';
import Inicial from './componentes/Inicial';

function App() {
  return (
      <div className="App">
        <Router>
          <ComponenteTextoProps/>
          <HeaderApp/>
          <ComponenteLinks/>
          <Routes>
            <Route path='/' element={<Inicial/>}/>
            <Route path='/Inicial' element={<Inicial/>}/>
            <Route path='/OleosEssenciais' element={<OleosEssenciais/>}/>
            <Route path='/OleosVegetais' element={<OleosVegetais/>}/>
            <Route path='/Sinergias' element={<Sinergias/>}/>
            <Route path='/CosmeticosNaturais' element={<CosmeticosNaturais/>}/>
            <Route path='/HigienePessoal' element={<HigienePessoal/>}/>
            <Route path='/Aromatizadores' element={<Aromatizadores/>}/>
            <Route path='/Acessorios' element={<Acessorios/>}/>
            <Route path='/Ofertas' element={<Ofertas/>}/>
          </Routes>
        </Router>
        <Footer/>
      </div> 
  );
}

export default App;
