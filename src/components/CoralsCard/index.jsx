import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import CategoryIcon from '@mui/icons-material/Category';
import PetsIcon from '@mui/icons-material/Pets';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import WbIncandescentIcon from '@mui/icons-material/WbIncandescent';
import SyncIcon from '@mui/icons-material/Sync';
import PaletteIcon from '@mui/icons-material/Palette';

export default function MultiActionAreaCard({ coral }) {
  const theme = useTheme();

  return (
    <Card sx={{
      maxWidth: 345, 
      minWidth: 345, 
      m: 2, 
      boxShadow: 3, 
      background: 'linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.3))', 
      color: 'white',
      '&:hover': {
        boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)',
      }
    }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={coral.imagem}
          alt={coral.nomepopular}
          sx={{ objectFit: 'cover', opacity: 0.8 }}
        />
        <CardContent sx={{ backdropFilter: 'blur(5px)' }}>
          <Typography gutterBottom variant="h6" component="div">
            {coral.nomepopular}
          </Typography>
          <Grid container spacing={1}>
            {[
              { icon: <CategoryIcon />, label: 'Grupo', data: coral.grupo },
              { icon: <PetsIcon />, label: 'Espécie', data: coral.especie },
              { icon: <TrendingUpIcon />, label: 'Crescimento', data: coral.crescimento },
              { icon: <SignalCellularAltIcon />, label: 'Dificuldade', data: coral.dificuldade },
              { icon: <ReportProblemIcon />, label: 'Agressividade', data: coral.agressividade },
              { icon: <WbIncandescentIcon />, label: 'Iluminação', data: coral.iluminacao },
              { icon: <SyncIcon />, label: 'Circulação', data: coral.circulacao },
              { icon: <PaletteIcon />, label: 'Cores', data: coral.cores }
            ].map((item, index) => (
              <Grid item xs={6} key={index} sx={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ background: 'rgba(0,0,0,0.5)', display: 'flex', flexDirection: 'column', justifyContent:'center', minHeight: 70 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 1 }}>
                  {React.cloneElement(item.icon, { sx: { marginRight: 1, color: theme.palette.secondary.main } })}
                  <Typography variant="body1" sx={{ color: 'inherit' }}>{item.label}</Typography>
                </div>
                <Typography variant="body2" sx={{ color: 'inherit' }}>{item.data}</Typography>
                </div>
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
