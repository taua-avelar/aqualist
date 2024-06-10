import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import CoralsCard from './components/CoralsCard';
import FishesCard from './components/FishesCard';
import FilterHeader from './components/Filter';
import coraisData from './corais';
import peixesData from './peixes';
import SideMenu from './components/SideMenu';
import Button from '@mui/material/Button';
import useFilteredData from './hooks/useFilteredData';

function App() {
  const [filtroTexto, setFiltroTexto] = useState('');
  
  const [filtrosCorais, setFiltrosCorais] = useState({
    grupo: '',
    crescimento: '',
    dificuldade: '',
    agressividade: '',
    iluminacao: '',
    circulacao: '',
    cores: ''
  });

  const [filtrosPeixes, setFiltrosPeixes] = useState({
    grupo: '',
    dificuldade: '',
    "agressivo com outros peixes": '',
    "agressivo com mesmo grupo": '',
    "come corais": '',
    "come invertebrados": ''
  });

  const [showFilters, setShowFilters] = useState(true);
  const corais = useFilteredData(filtroTexto, filtrosCorais, coraisData);
  const peixes = useFilteredData(filtroTexto, filtrosPeixes, peixesData);

  const resetarFiltros = () => {
    setFiltroTexto('');
    setFiltrosCorais({
      grupo: '',
      crescimento: '',
      dificuldade: '',
      agressividade: '',
      iluminacao: '',
      circulacao: '',
      cores: ''
    });
    setFiltrosPeixes({
      grupo: '',
      dificuldade: '',
      "agressivo com outros peixes": '',
      "agressivo com mesmo grupo": '',
      "come corais": '',
      "come invertebrados": ''
    });
  };

  const location = useLocation();

  useEffect(() => {
    resetarFiltros();
  }, [location.pathname]);

  return (
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20, justifyContent: 'center', maxWidth: '100vw' }}>
        <div style={{ display: 'flex', gap: '50px'}}>
          <SideMenu resetarFiltros={resetarFiltros} />
          <Button variant="contained" onClick={() => setShowFilters(!showFilters)} style={{ position: 'fixed', top: 20, right: 20, zIndex: 2 }}>Toggle Filtros</Button>
          {showFilters && (
            <FilterHeader
              filtroTexto={filtroTexto}
              setFiltroTexto={setFiltroTexto}
              filtros={window.location.pathname === '/corais' ? filtrosCorais : filtrosPeixes}
              setFiltros={window.location.pathname === '/corais' ? setFiltrosCorais : setFiltrosPeixes}
              resetarFiltros={resetarFiltros}
              data={window.location.pathname === '/corais' ? coraisData : peixesData}
            />
          )}
          </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          <Routes>
            <Route path="/corais" element={corais.length ? corais.map(coral => (
              <CoralsCard key={coral.id} coral={coral} />
            )) : <div>Nenhum resultado</div>} />
            <Route path="/peixes" element={peixes.length ? peixes.map(peixe => (
              <FishesCard key={peixe.id} peixe={peixe} />
            )) : <div>Nenhum resultado</div>} />
          </Routes> 
        </div>
      </div>
  );
}

export default App;
