import { useEffect, useState } from 'react';
import { getHolidays } from '../api/holidayApi';
import { Box, Grid, Card, CardContent, Typography, CardActions, Button } from '@mui/material';

export default function Holidays() {
  const [holidays, setHolidays] = useState([]);

  useEffect(() => {
    getHolidays().then(res => setHolidays(res.data));
  }, []);

  return (
    <Box sx={{ p: 3 }}>
      <Grid container spacing={3}>
        {holidays.map((h, i) => (
          <Grid item xs={12} md={4} key={i}>
            <Card>
              <CardContent>
                <Typography variant="h6">{h.name}</Typography>
                <Typography>{h.location}</Typography>
                <Typography>${h.price}</Typography>
              </CardContent>
              <CardActions>
                <Button size="small" variant="contained">Book Now</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
