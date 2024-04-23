import React, { useState, useEffect } from 'react';
import './App.css';
import MultiActionAreaCard from './components/CoralsCard';
import { corais as coraisData } from './corais';

import CategoryIcon from '@mui/icons-material/Category';
import PetsIcon from '@mui/icons-material/Pets';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import WbIncandescentIcon from '@mui/icons-material/WbIncandescent';
import SyncIcon from '@mui/icons-material/Sync';
import PaletteIcon from '@mui/icons-material/Palette';
import Button from '@mui/material/Button';

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
  const [corais, setCorais] = useState([]);
  const [showFilters, setShowFilters] = useState(true); // Estado para controle de visibilidade

  const opcoes = (chave) => [...new Set(coraisData.map(item => item[chave]))];

  useEffect(() => {
    const filtrados = coraisData.filter(coral =>
      Object.keys(filtros).every(chave => 
        filtros[chave] === '' || coral[chave] === filtros[chave]
      ) &&
      Object.keys(coral).some(chave =>
        coral[chave].toString().toLowerCase().includes(filtroTexto.toLowerCase())
      )
    );
    setCorais(filtrados);
  }, [filtroTexto, filtros]);

  const iconMap = {
    grupo: <CategoryIcon />,
    especie: <PetsIcon />,
    crescimento: <TrendingUpIcon />,
    dificuldade: <SignalCellularAltIcon />,
    agressividade: <ReportProblemIcon />,
    iluminacao: <WbIncandescentIcon />,
    circulacao: <SyncIcon />,
    cores: <PaletteIcon />
  };

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
      <Button variant="contained" onClick={() => setShowFilters(!showFilters)} style={{ position: 'fixed', top: 20, right: 20, zIndex: 2 }}>Filtrar</Button>
      {showFilters && (
        <div className="header" style={{ padding: 20, display: 'flex', flexDirection: 'column', position: 'sticky', top: 0, zIndex: 1, background: 'rgba(0,0,0,0.5)', borderRadius: 20 }}>
          <input
            type="text"
            value={filtroTexto}
            onChange={e => setFiltroTexto(e.target.value)}
            placeholder="Pesquisar..."
            style={{ width: '30%', marginBottom: 20 }}
          />
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            {Object.keys(filtros).map(chave => (
              <div key={chave}>
                <label style={{ display: 'block', fontWeight: 'bold', alignItems: 'center' }}>
                  {iconMap[chave]}
                  <span style={{ marginLeft: '10px' }}>{`${chave.charAt(0).toUpperCase() + chave.slice(1)}`}</span>
                </label>
                <select
                  value={filtros[chave]}
                  onChange={e => setFiltros({...filtros, [chave]: e.target.value})}
                  style={{ width: '100%', marginBottom: 20 }}
                >
                  <option value="">{`Qualquer ${chave}`}</option>
                  {opcoes(chave).map(opcao => (
                    <option key={opcao} value={opcao}>{opcao}</option>
                  ))}
                </select>
              </div>
            ))}
          </div>
          <Button variant="contained" onClick={resetarFiltros} style={{ marginBottom: '20px', maxWidth: 250 }}>Resetar Filtros</Button>
        </div>
      )}
      {corais.length ? corais.map(coral => (
        <MultiActionAreaCard key={coral.id} coral={coral} />
      )) : <div>Nenhum resultado</div>}
    </div>
  );
}

export default App;
