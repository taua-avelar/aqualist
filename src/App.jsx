import React, { useState } from 'react';
import './App.css';
import MultiActionAreaCard from './components/CoralsCard';
import FilterHeader from './components/Filter'; 
import coraisData from './corais';
import Button from '@mui/material/Button';
import useFilteredCorals from './hooks/useFilteredCorals'; // Novo hook para lógica de filtragem

function App() {
  const [filtroTexto, setFiltroTexto] = useState('');
  const [filtros, setFiltros] = useState({
    grupo: '',
    crescimento: '',
    dificuldade: '',
    agressividade: '',
    iluminacao: '',
    circulacao: '',
    cores: ''
  });
  const [showFilters, setShowFilters] = useState(true);
  const corais = useFilteredCorals(filtroTexto, filtros, coraisData);

  const resetarFiltros = () => {
    setFiltroTexto('');
    setFiltros({
      grupo: '',
      crescimento: '',
      dificuldade: '',
      agressividade: '',
      iluminacao: '',
      circulacao: '',
      cores: ''
    });
  };

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20, justifyContent: 'center', maxWidth: '100vw' }}>
      <Button variant="contained" onClick={() => setShowFilters(!showFilters)} style={{ position: 'fixed', top: 20, right: 20, zIndex: 2 }}>Toggle Filtros</Button>
      {showFilters && (
        <FilterHeader
          filtroTexto={filtroTexto}
          setFiltroTexto={setFiltroTexto}
          filtros={filtros}
          setFiltros={setFiltros}
          resetarFiltros={resetarFiltros}
          coraisData={coraisData}
        />
      )}
      {corais.length ? corais.map(coral => (
        <MultiActionAreaCard key={coral.id} coral={coral} />
      )) : <div>Nenhum resultado</div>}
    </div>
  );
}

export default App;
