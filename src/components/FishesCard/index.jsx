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

export default function FishesCard({ peixe }) {
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
          image={peixe.imagem}
          alt={peixe.nomepopular}
          sx={{ objectFit: 'cover', opacity: 0.8 }}
        />
        <CardContent sx={{ backdropFilter: 'blur(5px)' }}>
          <Typography gutterBottom variant="h6" component="div">
            {peixe.nomepopular}
          </Typography>
          <Grid container spacing={1}>
            {[
              { icon: <CategoryIcon />, label: 'Grupo', data: peixe.grupo },
              { icon: <PetsIcon />, label: 'Espécie', data: peixe.nomecientfico },
              { icon: <TrendingUpIcon />, label: 'Porte', data: peixe.porte },
              { icon: <SignalCellularAltIcon />, label: 'Litragem Mínima', data: peixe["litragem minima"] },
              { icon: <ReportProblemIcon />, label: 'Alimentação', data: peixe.alimentao },
              { icon: <WbIncandescentIcon />, label: 'Dificuldade', data: peixe.dificuldade },
              { icon: <SyncIcon />, label: 'Agressividade com outros peixes', data: peixe["agressivo com outros peixes"] },
              { icon: <PaletteIcon />, label: 'Agressividade com mesmo grupo', data: peixe["agressivo com mesmo grupo"] },
              { icon: <PaletteIcon />, label: 'Come corais', data: peixe["come corais"] },
              { icon: <PaletteIcon />, label: 'Come invertebrados', data: peixe["come invertebrados"] }
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
