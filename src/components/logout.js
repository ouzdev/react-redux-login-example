import * as React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { logout } from '../features/loginSlice';
import store from '../app/store';
import { useDispatch } from 'react-redux';

export default function Logout() {
    const dispatch = useDispatch();
const handleLogout = (event) => {
    event.preventDefault();

    dispatch(
      logout()
    );
  };
  return (
    <Grid 
    direction="column"
    justify="center"
    alignItems="center"
    spacing={0}
    style={{ backgroundColor: 'teal' }}
   >
    <Card sx={{ minWidth: 275}} >
      <CardContent>
        <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
          Name : {store.getState().user.user.name}
        </Typography>
        <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
          Email : {store.getState().user.user.email}
        </Typography>
        <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
          Password : {store.getState().user.user.password}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" ariant="contained" color="success" onClick={handleLogout}>Logout</Button>
      </CardActions>
    </Card>
    </Grid>
    
  );
}