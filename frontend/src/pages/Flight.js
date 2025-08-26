import { useEffect, useState } from 'react';
import { getFlights, bookFlight } from '../api/flightApi';
import { Box, Grid, Card, CardContent, Typography, CardActions, Button } from '@mui/material';

export default function Flights() {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    getFlights().then(res => setFlights(res.data));
  }, []);

  const handleBook = (flight) => {
    bookFlight(flight).then(() => alert("Flight booked!"));
  }

  return (
    <Box sx={{ p: 3 }}>
      <Grid container spacing={3}>
        {flights.map((f, i) => (
          <Grid item xs={12} md={4} key={i}>
            <Card>
              <CardContent>
                <Typography variant="h6">{f.airline}</Typography>
                <Typography>{f.from} → {f.to}</Typography>
                <Typography>${f.price}</Typography>
              </CardContent>
              <CardActions>
                <Button size="small" variant="contained" onClick={() => handleBook(f)}>Book</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
