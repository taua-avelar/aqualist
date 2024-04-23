import { useEffect, useState } from 'react';

const useFilteredCorals = (filtroTexto, filtros, coraisData) => {
  const [corais, setCorais] = useState([]);

  useEffect(() => {
    const filtrados = coraisData.filter(coral => 
      Object.keys(filtros).every(chave => 
        filtros[chave] === '' || (Array.isArray(coral[chave]) ? coral[chave].map(color => color.toLowerCase()).includes(filtros[chave].toLowerCase()) : coral[chave].toLowerCase() === filtros[chave].toLowerCase())
      ) &&
      Object.keys(coral).some(chave =>
        coral[chave].toString().toLowerCase().includes(filtroTexto.toLowerCase())
      )
    );
    setCorais(filtrados);
  }, [filtroTexto, filtros]);

  return corais;
};

export default useFilteredCorals;
