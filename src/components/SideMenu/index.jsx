// SideMenu.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { styles } from './styles';

export default function SideMenu({ resetarFiltros }) {
  const location = useLocation();

    return (
    <div style={styles.container}>
      <ul style={styles.menu}>
        <MenuItem to="/corais" isSelected={location.pathname === '/corais'}>Corais</MenuItem>
        <MenuItem to="/peixes" isSelected={location.pathname === '/peixes'}>Peixes</MenuItem>
      </ul>
    </div>
  );
}

function MenuItem({ to, isSelected, children }) {
  return (
    <li style={{
      ...styles.menuItem,
      border: isSelected ? '2px solid #333' : 'none',
      background: isSelected ? 'rgba(95, 86, 91, 0.3)' : 'transparent',
      padding: '5px',
      borderRadius: '10%'
    }}>
      <Link to={to} style={styles.link}>{children}</Link>
    </li>
  );
}

