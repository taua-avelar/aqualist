import { useEffect, useState } from 'react';

const useFilteredData = (filtroTexto, filtros, data) => {
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const filtrados = data.filter(item => 
      Object.keys(filtros).every(chave => 
        filtros[chave] === '' || (Array.isArray(item[chave]) ? item[chave].map(value => value.toLowerCase()).includes(filtros[chave].toLowerCase()) : item[chave].toLowerCase() === filtros[chave].toLowerCase())
      ) &&
      Object.values(item).some(value =>
        value?.toString().toLowerCase().includes(filtroTexto.toLowerCase())
      )
    );
    setFilteredData(filtrados);
  }, [filtroTexto, filtros, data]);

  return filteredData;
};

export default useFilteredData;
