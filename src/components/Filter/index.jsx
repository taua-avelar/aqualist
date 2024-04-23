// FilterHeader.js
import React from 'react';
import CategoryIcon from '@mui/icons-material/Category';
import PetsIcon from '@mui/icons-material/Pets';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import WbIncandescentIcon from '@mui/icons-material/WbIncandescent';
import SyncIcon from '@mui/icons-material/Sync';
import PaletteIcon from '@mui/icons-material/Palette';
import Button from '@mui/material/Button';

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

function FilterHeader({ filtroTexto, setFiltroTexto, filtros, setFiltros, resetarFiltros, coraisData }) {
    const opcoes = (chave) => {
        const allValues = coraisData.flatMap(item => 
            Array.isArray(item[chave]) ? item[chave].map(color => color.trim().toLowerCase()) : [item[chave].trim().toLowerCase()]
        );
        const uniqueValues = Array.from(new Set(allValues));
        return uniqueValues;
    };

    return (
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
                            onChange={e => setFiltros({ ...filtros, [chave]: e.target.value })}
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
    );
}

export default FilterHeader;
